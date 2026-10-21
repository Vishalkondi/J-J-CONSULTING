import Link from "next/link";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { CaseThumb } from "./home/Proof";
import { TechnologyPartners } from "./home/Expertise";
import { approach, why } from "@/data/services-page";
import { industries, insuranceExpertise, techGroups } from "@/data/site";
import { featuredCases } from "@/data/case-studies";

/** Extra sections for /services, in the J & J navy-and-gold palette. All copy comes from data/. */

const principleIcons = [
  <path key="s" d="M12 3a9 9 0 1 0 9 9M12 7a5 5 0 1 0 5 5M12 11a1 1 0 1 0 1 1M21 3l-9 9" />,
  <path key="t" d="M4 6h16v10H4zM8 20h8M12 16v4" />,
  <path key="i" d="M4 20l6-6M14 4l6 6-8 8-6-6zM14 10l-4 4" />,
  <path key="e" d="M2 9l10-5 10 5-10 5zM6 11v5c3 2 9 2 12 0v-5" />,
];

/** Five-step approach (Discover → Transform) and the four principles behind it. */
export function ServicesApproachSteps() {
  return (
    <section id="how-we-work" className="scroll-mt-20 bg-white py-24 md:py-32" aria-labelledby="approach-title">
      <div className="wrap">
        <div id="approach-title">
          <SectionHeading
            eyebrow={approach.label}
            title={approach.title}
            intro="Every engagement follows the same path, whichever discipline leads it."
          />
        </div>

        <ol className="relative mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
          {/* connecting line behind the numbered markers (desktop) */}
          <span aria-hidden className="absolute left-[10%] right-[10%] top-6 is-hidden h-px bg-gradient-to-r from-gold/20 via-gold to-gold/20 lg:block" />
          {approach.steps.map((s, i) => (
            <li key={s.title} className="relative">
              <Reveal delay={i * 0.07} className="flex h-full gap-4 rounded-2xl border border-navy/10 bg-paper p-5 lg:flex-col lg:items-center lg:border-0 lg:bg-transparent lg:p-0 lg:text-center">
                <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold bg-white font-mono text-[13px] text-gold-dark shadow-[0_0_0_6px_#fff]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="lg:mt-5">
                  <span className="label block text-gold-dark">{s.title}</span>
                  <span className="mt-1.5 block font-display text-[24px] leading-tight text-navy">{s.verb}</span>
                </span>
              </Reveal>
            </li>
          ))}
        </ol>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-navy/10 bg-navy/10 sm:grid-cols-2 lg:grid-cols-4">
          {why.items.map((w, i) => (
            <li key={w.title} className="bg-white">
              <Reveal delay={i * 0.06} className="group h-full p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 text-gold-dark transition-colors duration-300 group-hover:bg-navy group-hover:text-gold-light">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    {principleIcons[i]}
                  </svg>
                </span>
                <h3 className="mt-5 font-display text-[22px] leading-tight text-navy">{w.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-graphite">{w.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Industries served and insurance specialisms, as two chip groups on navy. */
export function ServicesIndustries() {
  const groups = [
    { label: "Industries", title: "Sectors we work in", items: industries },
    { label: "Insurance expertise", title: "Where we go deepest", items: insuranceExpertise },
  ];
  return (
    <section className="blueprint relative bg-navy py-24 text-white md:py-32" aria-labelledby="industries-title">
      <div className="wrap">
        <div id="industries-title">
          <SectionHeading
            tone="dark"
            eyebrow="Industries & expertise"
            title="Built for regulated, data-heavy businesses"
            intro="Our five disciplines are applied most often in insurance and financial services, including the London Market."
          />
        </div>
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {groups.map((g, i) => (
            <Reveal key={g.label} delay={i * 0.08} className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 md:p-9">
              <p className="label text-gold-light">{g.label}</p>
              <h3 className="mt-3 font-display text-[26px] leading-tight">{g.title}</h3>
              <ul className="mt-7 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-center gap-2 rounded-full border border-white/15 px-3.5 py-1.5 text-[14px] text-white/85 transition-colors hover:border-gold-light hover:text-white"
                  >
                    <span aria-hidden className="h-1 w-1 rounded-full bg-gold" />
                    {it}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <Link href="/industries" className="link-arrow mt-10 text-gold-light">
          Explore industries <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}

/** Technology groups as cards, then the confirmed partner badges. */
export function ServicesTechnology() {
  return (
    <section className="bg-paper py-24 md:py-32" aria-labelledby="tech-title">
      <div className="wrap">
        <div id="tech-title">
          <SectionHeading
            eyebrow="Technology"
            title="Platforms we work with"
            intro="Cloud, data, enterprise platforms, engineering and AI: the technologies behind the work."
          />
        </div>
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {techGroups.map((g, i) => (
            <li key={g.group}>
              <Reveal delay={i * 0.06} className="h-full rounded-2xl border border-navy/10 bg-white p-6">
                <p className="font-mono text-[11px] text-gold-dark">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 font-display text-[22px] leading-tight text-navy">{g.group}</h3>
                <span aria-hidden className="mt-4 block h-px w-8 bg-gold" />
                <ul className="mt-4 space-y-2">
                  {g.items.map((it) => (
                    <li key={it} className="text-[14.5px] text-charcoal">
                      {it}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ul>
        <TechnologyPartners dark={false} />
      </div>
    </section>
  );
}

/** The first three case studies as cards, linking through to /case-studies. */
export function ServicesCaseStudies() {
  return (
    <section className="bg-white py-24 md:py-32" aria-labelledby="svc-cases-title">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div id="svc-cases-title">
            <SectionHeading eyebrow="Case studies" title="See it in practice" />
          </div>
          <Link href="/case-studies" className="btn btn-line shrink-0 self-start md:self-auto">
            All case studies <span aria-hidden>→</span>
          </Link>
        </div>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {featuredCases.slice(0, 3).map((c, i) => (
            <li key={c.href}>
              <Reveal delay={i * 0.06} className="h-full">
                <Link
                  href={c.href}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy/10 bg-paper transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_50px_-30px_rgba(12,32,56,0.5)]"
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
