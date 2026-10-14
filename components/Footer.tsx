import Link from "next/link";
import { Logo } from "./Logo";
import { company, footerColumns } from "@/data/site";

const legal = [
  { href: "/legal/privacy-policy", label: "Privacy Policy" },
  { href: "/legal/cookie-policy", label: "Cookie Policy" },
  { href: "/legal/terms-and-conditions", label: "Terms & Conditions" },
];

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address.oneLine)}`;

/** Tagline split into words; the last one is set in gold. */
const taglineWords = company.tagline.split(" ");

/** Underline that draws in on hover (shared by footer links). */
const drawLine =
  "bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-midnight text-white">
      {/* gold hairline + soft glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full"
        aria-hidden
        style={{ background: "radial-gradient(closest-side, rgba(184,152,90,0.14), transparent)" }}
      />

      <div className="wrap relative pt-20 md:pt-24">
        {/* Statement row: tagline left, strapline and actions right */}
        <div className="grid gap-10 border-b border-white/10 pb-14 md:pb-16 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-8">
            <p className="label !font-mono text-gold-light">J &amp; J Consulting · Est. {company.established}</p>
            <p className="mt-5 font-display text-[clamp(36px,5vw,68px)] leading-[1.02] tracking-[-0.01em]">
              {taglineWords.map((w, i) => (
                <span key={w} className={i === taglineWords.length - 1 ? "text-gold-light" : undefined}>
                  {w}
                  {i < taglineWords.length - 1 && " "}
                </span>
              ))}
            </p>
          </div>
          <div className="lg:col-span-4">
            <p className="max-w-sm text-[16px] leading-relaxed text-white/65">{company.strapline}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn btn-gold justify-center">
                Talk to Us <span aria-hidden>→</span>
              </Link>
              <Link
                href="/services"
                className="btn justify-center border border-white/25 text-white hover:border-white/60 hover:bg-white/5"
              >
                Our services
              </Link>
            </div>
          </div>
        </div>

        {/* Brand + office, navigation */}
        <div className="grid gap-14 py-14 md:py-16 lg:grid-cols-[1fr_1.9fr] lg:gap-20">
          <div>
            <Link href="/" aria-label="J & J Consulting — home" className="inline-block">
              <Logo />
            </Link>

            <address className="mt-8 flex max-w-md gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 not-italic">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold-light">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z" />
                  <circle cx="12" cy="10" r="2.3" />
                </svg>
              </span>
              <div>
                <p className="label !font-mono text-white/45">Office · Reigate, UK</p>
                <p className="mt-2.5 text-[15px] leading-relaxed text-white/85">
                  {company.address.lines.slice(0, 2).join(", ")}
                  <br />
                  {company.address.lines.slice(2, 6).join(", ")}
                  <br />
                  {company.address.lines[6]}
                </p>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-4 inline-flex items-center gap-2 text-[13.5px] text-gold-light"
                >
                  <span className={drawLine}>Get directions</span>{" "}
                  <span aria-hidden className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    ↗
                  </span>
                  <span className="sr-only"> (opens Google Maps in a new tab)</span>
                </a>
                {(company.email || company.phone) && (
                  <ul className="mt-5 space-y-2 border-t border-white/10 pt-5 text-[15px] text-white/85">
                    {company.email && (
                      <li>
                        <a href={`mailto:${company.email}`} className="group">
                          <span className={drawLine}>{company.email}</span>
                        </a>
                      </li>
                    )}
                    {company.phone && (
                      <li>
                        <a href={`tel:${company.phone.replace(/\s+/g, "")}`} className="group">
                          <span className={drawLine}>{company.phone}</span>
                        </a>
                      </li>
                    )}
                  </ul>
                )}
              </div>
            </address>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-4 lg:pt-1">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h2 className="label flex items-center gap-2.5 !font-mono text-gold-light">
                  <span className="h-px w-4 bg-gold/70" aria-hidden />
                  {col.title}
                </h2>
                <ul className="mt-6 space-y-3.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="group inline-flex text-[14.5px] leading-snug text-white/70 transition-colors hover:text-white"
                      >
                        <span className={drawLine}>{l.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Legal bar */}
        <div className="flex flex-col gap-5 border-t border-white/10 py-7 text-[12.5px] text-white/50 lg:flex-row lg:items-center lg:justify-between">
          <p>
            © {year} {company.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {legal.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="#main"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-3.5 py-1.5 text-white/65 transition-colors hover:border-gold hover:text-white"
            >
              Back to top{" "}
              <span aria-hidden className="transition-transform group-hover:-translate-y-0.5">
                ↑
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Oversized wordmark, fitted to the container width; fully visible, fading out towards the bottom */}
      <div className="wrap pointer-events-none relative select-none pb-3 md:pb-5" aria-hidden>
        <svg viewBox="0 0 1000 175" className="block w-full">
          <defs>
            <linearGradient id="footer-wordmark" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#fff" stopOpacity="0.075" />
              <stop offset="1" stopColor="#fff" stopOpacity="0.015" />
            </linearGradient>
          </defs>
          <text
            x="0"
            y="128"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            fill="url(#footer-wordmark)"
            className="font-display"
            fontSize="150"
          >
            J &amp; J Consulting
          </text>
        </svg>
      </div>
    </footer>
  );
}
