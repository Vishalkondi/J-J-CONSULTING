import Image from "next/image";
import type { ReactNode } from "react";
import { trainingPartner as p } from "@/data/services-page";
import { Reveal } from "@/components/Reveal";

const svg = (children: ReactNode) => (
  <svg
    viewBox="0 0 24 24"
    className="h-[18px] w-[18px]"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    {children}
  </svg>
);

const socialIcons: Record<string, ReactNode> = {
  LinkedIn: (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11H3zM9.5 9.75h3.8v1.5h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1v5.45h-4v-4.83c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.55v4.91h-4z" />
    </svg>
  ),
  YouTube: (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden>
      <path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.75 15.02V8.98L15.5 12z" />
    </svg>
  ),
  Instagram: svg(
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </>,
  ),
};

/** Closing Data Master card: mark, tagline, contact details and social links, as published on thedatamaster.in. */
export function PartnerContact() {
  const rows = [
    {
      label: "Email",
      value: p.contact.email,
      href: `mailto:${p.contact.email}`,
      icon: svg(
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3.5 6.5l8.5 6.5 8.5-6.5" />
        </>,
      ),
    },
    {
      label: "Phone",
      value: p.contact.phone,
      href: `tel:${p.contact.tel}`,
      icon: svg(
        <path d="M5 3.5h3.5l1.8 4.5-2.3 1.4a11 11 0 0 0 6.6 6.6l1.4-2.3 4.5 1.8V19a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 3.5 5.1 1.5 1.5 0 0 1 5 3.5z" />,
      ),
    },
    {
      label: "Location",
      value: p.location,
      href: null,
      icon: svg(
        <>
          <path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z" />
          <circle cx="12" cy="10" r="2.3" />
        </>,
      ),
    },
  ];

  return (
    <div id="data-master-contact" className="mt-20 scroll-mt-24 md:mt-28">
      <Reveal className="overflow-hidden rounded-3xl border border-white/15 bg-dm-ink/45 backdrop-blur-sm">
        <div className="grid lg:grid-cols-12">
          {/* Brand */}
          <div className="flex flex-col items-center justify-center border-b border-white/10 px-8 py-12 text-center lg:col-span-5 lg:border-b-0 lg:border-r">
            <Image src={p.mark} alt="" width={185} height={111} className="h-20 w-auto drop-shadow-[0_10px_30px_rgba(56,189,248,0.35)]" />
            <p className="mt-6 font-sans text-[24px] font-bold tracking-[-0.01em]">{p.company.replace(/ Pvt Ltd$/, "")}</p>
            <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-dm-mist/80">{p.tagline}</p>
            <ul className="mt-7 flex gap-3" aria-label="Data Master on social media">
              {p.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition hover:-translate-y-0.5 hover:border-dm-sky hover:bg-dm-sky/15"
                    aria-label={`${s.label} (opens in a new tab)`}
                  >
                    {socialIcons[s.label]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="px-8 py-12 sm:px-12 lg:col-span-7">
            <p className="label text-dm-sky">Contact Data Master</p>
            <p className="mt-4 font-sans text-[clamp(24px,2.4vw,32px)] font-bold leading-snug tracking-[-0.02em]">
              Talk to the team about training or a data &amp; AI engagement.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {rows.map((r) => {
                const body = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-dm-sky/15 text-dm-sky">
                      {r.icon}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-dm-mist/60">{r.label}</span>
                      <span className="mt-1 block break-words text-[15px] text-white">{r.value}</span>
                    </span>
                  </>
                );
                return (
                  <li key={r.label} className={r.href ? undefined : "sm:col-span-2"}>
                    {r.href ? (
                      <a
                        href={r.href}
                        className="flex items-center gap-4 rounded-2xl border border-white/10 p-4 transition hover:border-dm-sky/60 hover:bg-white/[0.04]"
                      >
                        {body}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 rounded-2xl border border-white/10 p-4">{body}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <p className="border-t border-white/10 px-8 py-4 text-center text-[12.5px] text-dm-mist/55">
          Details as published on{" "}
          <a
            href={p.website}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-dm-sky/60 underline-offset-2 hover:text-white"
          >
            thedatamaster.in
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </p>
      </Reveal>
    </div>
  );
}
