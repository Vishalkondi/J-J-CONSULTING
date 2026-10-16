import Link from "next/link";
import { CaseThumb } from "../home/Proof";
import { Reveal } from "../Reveal";
import { featuredCases } from "@/data/case-studies";

/**
 * /case-studies listing: the first case study as a large featured card, then every other one as a
 * card in a responsive grid. Each whole card links to its case study.
 */
export function CaseStudyIndex() {
  const [lead, ...rest] = featuredCases;
  return (
    <section className="bg-paper py-20 md:py-28" aria-labelledby="cs-index-title">
      <div className="wrap">
        <Reveal className="flex flex-wrap items-end justify-between gap-4 border-b border-navy/15 pb-6">
          <div>
            <p className="pill bg-white text-gold-dark">Project experience</p>
            <h2 id="cs-index-title" className="mt-5 text-[clamp(30px,3.6vw,48px)] leading-[1.05] text-navy">
              All case studies
            </h2>
          </div>
          <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-graphite">
            {featuredCases.length} engagements · insurance &amp; specialty markets
          </p>
        </Reveal>

        {/* Featured */}
        <Reveal className="mt-10">
          <Link
            href={lead.href}
            className="group grid overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[0_30px_60px_-40px_rgba(12,32,56,0.45)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_40px_70px_-40px_rgba(12,32,56,0.6)] lg:grid-cols-[1.2fr_1fr]"
          >
            <div className="overflow-hidden">
              <CaseThumb c={lead} compact />
            </div>
            <div className="flex flex-col p-7 sm:p-10">
              <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-gold-dark">
                <span className="rounded-full bg-gold/15 px-2.5 py-0.5 text-gold-dark">Featured</span>
                {lead.label}
              </p>
              <h3 className="mt-5 text-[clamp(26px,2.6vw,38px)] leading-[1.1] text-navy">
                <span className="block">{lead.client}</span>
                {lead.title}
              </h3>
              <p className="mt-5 text-[16.5px] leading-relaxed text-graphite">{lead.blurb}</p>
              <span className="link-arrow mt-auto pt-8 text-navy">
                {lead.cta} <span aria-hidden>→</span>
              </span>
            </div>
          </Link>
        </Reveal>

        {/* Everything else */}
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((c, i) => (
            <li key={c.href}>
              <Reveal delay={(i % 3) * 0.06} className="h-full">
                <Link
                  href={c.href}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_50px_-30px_rgba(12,32,56,0.5)]"
                >
                  <div className="overflow-hidden">
                    <CaseThumb c={c} compact />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-gold-dark">{c.label}</p>
                    <h3 className="mt-3 text-[21px] leading-snug text-navy">
                      <span className="block">{c.client}</span>
                      <span className="text-[17px] text-navy/80">{c.title}</span>
                    </h3>
                    <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-graphite">{c.blurb}</p>
                    <span className="link-arrow mt-auto pt-6 text-[14px] text-navy">
                      {c.cta} <span aria-hidden>→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
