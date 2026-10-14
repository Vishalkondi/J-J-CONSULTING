import Link from "next/link";
import { Logo } from "./Logo";
import { company, footerColumns } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-midnight text-white">
      <div className="wrap pb-10 pt-20">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_2fr]">
          <div>
            <Logo variant="full" size="footer" />
            <p className="mt-8 max-w-sm text-[15px] leading-relaxed text-white/60">{company.strapline}</p>
            <address className="mt-8 font-mono text-[12px] not-italic leading-[1.9] text-white/55">
              {company.address.lines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h2 className="label !font-mono text-gold-light">{col.title}</h2>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="text-[14px] text-white/70 transition-colors hover:text-white">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 text-[12px] text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© 2026 J &amp; J Incorporated Ltd. All Rights Reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href="/legal/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/legal/cookie-policy" className="hover:text-white">
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link href="/legal/terms-and-conditions" className="hover:text-white">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
