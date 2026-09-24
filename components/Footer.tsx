import Link from "next/link";
import { Logo } from "./Logo";
import { ContactDetails } from "./ContactDetails";
import { company, footerColumns } from "@/data/site";

const legal = [
  { href: "/legal/privacy-policy", label: "Privacy Policy" },
  { href: "/legal/cookie-policy", label: "Cookie Policy" },
  { href: "/legal/terms-and-conditions", label: "Terms & Conditions" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-midnight text-white">
      {/* gold hairline + soft glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full"
        aria-hidden
        style={{ background: "radial-gradient(closest-side, rgba(184,152,90,0.12), transparent)" }}
      />

      <div className="wrap relative pb-10 pt-20">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.9fr] lg:gap-20">
          <div>
            <Link href="/" aria-label="J & J Consulting — home" className="inline-block">
              <Logo />
            </Link>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/60">{company.strapline}</p>
            <ContactDetails tone="dark" className="mt-8" />
            <Link href="/contact" className="btn btn-gold mt-8">
              Talk to Us <span aria-hidden>→</span>
            </Link>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h2 className="label !font-mono text-gold-light">{col.title}</h2>
                <ul className="mt-6 space-y-3.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="group inline-flex items-center gap-1.5 text-[14px] text-white/65 transition-colors hover:text-white"
                      >
                        <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">
                          {l.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-5 border-t border-white/10 pt-7 text-[12.5px] text-white/45 md:flex-row md:items-center md:justify-between">
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
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3.5 py-1.5 text-white/60 transition-colors hover:border-gold hover:text-white"
            >
              Back to top <span aria-hidden>↑</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
