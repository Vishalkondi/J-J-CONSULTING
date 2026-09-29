"use client";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import { serviceOptions } from "@/data/site";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "ok" | "error";

const field =
  "peer mt-2 w-full border-0 border-b border-navy/25 bg-transparent px-0 py-2.5 text-[16px] text-charcoal outline-none transition-colors placeholder:text-graphite/45 focus:border-gold focus-visible:outline-none";

function Field({ label, required, className, children }: { label: string; required?: boolean; className?: string; children: ReactNode }) {
  return (
    <label className={cn("group block", className)}>
      <span className="label text-graphite transition-colors group-focus-within:text-gold-dark">
        {label}
        {required && (
          <span aria-hidden className="ml-1 text-gold-dark">
            *
          </span>
        )}
      </span>
      {children}
    </label>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error ?? "Something went wrong.");
      setStatus("ok");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "ok") {
    return (
      <div role="status" className="flex flex-col items-start gap-5 py-6">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-[24px] text-gold-dark" aria-hidden>
          ✓
        </span>
        <p className="font-display text-[34px] leading-tight text-navy">Thank you.</p>
        <p className="max-w-sm text-[16px] leading-relaxed text-graphite">
          Your message has been received. A member of the J &amp; J Consulting team will be in touch.
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="link-arrow text-navy">
          Send another message <span aria-hidden>→</span>
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
      <Field label="Full name" required>
        <input name="name" required autoComplete="name" placeholder="Your name" className={field} />
      </Field>
      <Field label="Business email" required>
        <input name="email" type="email" required autoComplete="email" placeholder="name@company.com" className={field} />
      </Field>
      <Field label="Company">
        <input name="company" autoComplete="organization" placeholder="Organisation" className={field} />
      </Field>
      <Field label="Phone">
        <input name="phone" type="tel" autoComplete="tel" placeholder="Optional" className={field} />
      </Field>

      <fieldset className="sm:col-span-2">
        <legend className="label text-graphite">
          Service required
          <span aria-hidden className="ml-1 text-gold-dark">
            *
          </span>
        </legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {serviceOptions.map((o, i) => (
            <label key={o} className="cursor-pointer">
              <input type="radio" name="service" value={o} required={i === 0} className="peer sr-only" />
              <span className="block rounded-full border border-navy/20 bg-white px-4 py-2 text-[14px] text-navy transition-colors hover:border-navy/50 peer-checked:border-navy peer-checked:bg-navy peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-gold peer-focus-visible:ring-offset-2">
                {o}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <Field label="Message" required className="sm:col-span-2">
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project, role or training need"
          className={cn(field, "resize-y")}
        />
      </Field>

      {/* honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="flex flex-col gap-4 border-t border-navy/10 pt-6 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-[13px] leading-relaxed text-graphite">
          We use your details only to respond to your enquiry. See our{" "}
          <Link href="/legal/privacy-policy" className="underline decoration-navy/30 underline-offset-2 hover:decoration-navy">
            Privacy Policy
          </Link>
          .
        </p>
        <button type="submit" disabled={status === "sending"} className="btn btn-navy shrink-0 justify-center disabled:opacity-60">
          {status === "sending" ? "Sending…" : "Start a Conversation"} <span aria-hidden>→</span>
        </button>
      </div>
      {status === "error" && (
        <p role="alert" className="-mt-3 text-[14px] text-red-700 sm:col-span-2">
          {error}
        </p>
      )}
    </form>
  );
}
