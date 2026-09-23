import { NextResponse } from "next/server";
import { serviceOptions } from "@/data/site";

/**
 * Contact endpoint: validates, rate-limits and forwards the enquiry.
 * Set CONTACT_WEBHOOK_URL to forward the JSON payload to any HTTPS endpoint (email service, CRM, Slack, Zapier/Make).
 * Without it the enquiry is only logged — wire this up before launch.
 *
 * Rate limiting is in-memory (per server instance). On serverless/multi-instance hosting use a shared store
 * (e.g. Upstash Redis) or the platform's WAF/rate-limit feature.
 */

export const runtime = "nodejs";

const LIMIT = 5; // requests
const WINDOW_MS = 10 * 60 * 1000; // per 10 minutes per IP
const hits = new Map<string, number[]>();

function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) for (const [k, v] of hits) if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
  return recent.length > LIMIT;
}

const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const json = (body: object, status = 200) => NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (limited(ip)) return json({ error: "Too many requests. Please try again later." }, 429);

  if (!(req.headers.get("content-type") ?? "").includes("application/json")) return json({ error: "Invalid request." }, 415);
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  if (str(body.website, 200)) return json({ ok: true }); // honeypot: pretend success

  const name = str(body.name, 120);
  const email = str(body.email, 200);
  const company = str(body.company, 160);
  const phone = str(body.phone, 40);
  const service = str(body.service, 80);
  const message = str(body.message, 5000);

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: "Please provide your name, a valid email address and a message." }, 422);
  }
  if (service && !serviceOptions.includes(service)) return json({ error: "Please choose a service from the list." }, 422);

  const payload = { name, email, company, phone, service, message, receivedAt: new Date().toISOString() };
  const hook = process.env.CONTACT_WEBHOOK_URL;
  if (hook) {
    try {
      const r = await fetch(hook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(8000),
      });
      if (!r.ok) throw new Error(String(r.status));
    } catch {
      return json({ error: "We could not send your message right now. Please try again shortly." }, 502);
    }
  } else {
    console.log("[contact] (no CONTACT_WEBHOOK_URL set)", payload);
  }
  return json({ ok: true });
}
