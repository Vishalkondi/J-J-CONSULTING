"use client";
import { useState } from "react";
import { serviceOptions } from "@/data/site";

type Status = "idle" | "sending" | "ok" | "error";

const field =
  "w-full border-0 border-b border-navy/25 bg-transparent px-0 py-3 text-[16px] text-charcoal outline-none transition-colors placeholder:text-graphite/50 focus:border-gold focus-visible:outline-none";

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
      <div role="status" className="border-l-2 border-gold py-2 pl-6">
        <p className="font-display text-3xl text-navy">Thank you.</p>
        <p className="mt-3 text-graphite">Your message has been received. We will be in touch.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-x-10 gap-y-7 sm:grid-cols-2" noValidate={false}>
      <label className="block">
        <span className="label text-graphite">Full name</span>
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className="block">
        <span className="label text-graphite">Business email</span>
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className="block">
        <span className="label text-graphite">Company</span>
        <input name="company" autoComplete="organization" className={field} />
      </label>
      <label className="block">
        <span className="label text-graphite">Phone</span>
        <input name="phone" type="tel" autoComplete="tel" className={field} />
      </label>
      <label className="block sm:col-span-2">
        <span className="label text-graphite">Service required</span>
        <select name="service" required defaultValue="" className={field}>
          <option value="" disabled>
            Select a service
          </option>
          {serviceOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </label>
      <label className="block sm:col-span-2">
        <span className="label text-graphite">Message</span>
        <textarea name="message" required rows={5} className={field} />
      </label>
      {/* honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <div className="sm:col-span-2">
        <button type="submit" disabled={status === "sending"} className="btn btn-navy disabled:opacity-60">
          {status === "sending" ? "Sending…" : "Start a Conversation"} <span aria-hidden>→</span>
        </button>
        {status === "error" && (
          <p role="alert" className="mt-4 text-[14px] text-red-700">
            {error}
          </p>
        )}
      </div>
    </form>
  );
}
