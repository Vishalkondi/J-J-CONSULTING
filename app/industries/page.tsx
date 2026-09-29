import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { SlotImage } from "@/components/SlotImage";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { FlowChain } from "@/components/diagrams";
import { pageMeta } from "@/lib/seo";
import { industryIcons } from "@/components/IndustryIcons";
import { insuranceExpertise } from "@/data/site";
import {
  approach,
  challenges,
  complexEnvironments,
  crossIndustry,
  industriesCta,
  industriesIntro,
  sectors,
  whyUs,
} from "@/data/industries";

export const metadata: Metadata = pageMeta({
  title: "Industries",
  description:
    "Technology solutions built around your industry: insurance, financial services, healthcare, real estate, retail, manufacturing, professional services, technology and energy.",
  path: "/industries",
});

const pad = (n: number) => String(n).padStart(2, "0");

export default function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={industriesIntro.title}
        intro={industriesIntro.lead}
        image={{ src: "/images/sunset-skyline-terrace.jpg", alt: "" }}
      />

      {/* INTRO */}
      <section className="bg-paper py-24 md:py-32">
        <div className="wrap grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-24">
          <Reveal>
            <p className="text-balance font-display text-[clamp(26px,3vw,40px)] leading-snug text-navy">{industriesIntro.statement}</p>
          </Reveal>
          <p className="text-[18px] leading-relaxed text-graphite">{industriesIntro.body}</p>
        </div>
      </section>

      {/* INSURANCE — core sector */}
      <section id="insurance" className="scroll-mt-24 bg-bone py-24 md:py-32">
        <div className="wrap grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          <div>
            <SectionHeading
              eyebrow="Our core sector"
              title="Insurance"
              intro="More than 16 years in insurance and financial services, including the London Market."
            />
            <SlotImage
              src="/images/london-skyline.jpg"
              alt="The City of London skyline, home of the London insurance market"
              className="mt-12 aspect-[16/10] w-full"
            />
          </div>
          <ul className="grid content-start gap-3 sm:grid-cols-2">
            {insuranceExpertise.map((e) => (
              <li
                key={e}
                className="border border-navy/15 bg-white p-5 font-display text-[19px] leading-tight text-navy transition duration-300 hover:-translate-y-0.5 hover:border-navy/30 hover:shadow-[0_14px_30px_-18px_rgba(12,32,56,0.35)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                {e}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTORS */}
      <section className="bg-paper py-24 md:py-32">
        <div className="wrap">
          <SectionHeading
            eyebrow="Industries we serve"
            title="Where Business Expertise Meets Technology"
            intro="Each industry brings its own systems, regulations and ways of working. Here is how we help across the sectors we serve."
          />
          <nav aria-label="Jump to an industry" className="mt-10 flex flex-wrap gap-2">
            {sectors.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="border border-navy/15 bg-white px-4 py-2 text-[14px] text-navy transition hover:border-gold hover:text-gold-dark"
              >
                {s.name}
              </a>
            ))}
          </nav>
          <ul className="mt-14 grid gap-6 lg:grid-cols-2">
            {sectors.map((s, i) => (
              <li key={s.id} id={s.id} className="scroll-mt-28">
                <article className="group flex h-full flex-col border border-navy/15 bg-white p-7 transition duration-300 hover:border-navy/30 hover:shadow-[0_18px_40px_-20px_rgba(12,32,56,0.35)] md:p-9">
                  <div className="flex items-start justify-between">
                    <span className="text-gold-dark">{industryIcons[s.name] ?? industryIcons.default}</span>
                    <span className="font-mono text-[12px] text-graphite">{pad(i + 1)}</span>
                  </div>
                  <h3 className="mt-6 font-display text-[clamp(26px,2.6vw,34px)] leading-tight text-navy">{s.name}</h3>
                  <p className="mt-3 font-display text-[19px] leading-snug text-steel">{s.tagline}</p>
                  <p className="mt-4 text-[16px] leading-relaxed text-graphite">{s.text}</p>
                  <div className="mt-auto pt-8">
                    <p className="label border-t border-navy/10 pt-6 text-gold-dark">Capabilities</p>
                    <ul className="mt-4 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                      {s.capabilities.map((c) => (
                        <li key={c} className="flex items-baseline gap-2.5 text-[15px] leading-snug text-navy">
                          <span aria-hidden className="h-1.5 w-1.5 shrink-0 -translate-y-0.5 rounded-full bg-gold" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CROSS-INDUSTRY CAPABILITIES */}
      <section className="blueprint relative bg-midnight py-24 text-white md:py-32">
        <div className="wrap">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-24">
            <SectionHeading tone="dark" eyebrow="Across every sector" title="Cross-Industry Capabilities" />
            <div className="space-y-4 text-[17px] leading-relaxed text-white/70">
              {crossIndustry.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <ul className="mt-14 grid border-l border-t border-white/15 sm:grid-cols-2 lg:grid-cols-4">
            {crossIndustry.items.map((c, i) => (
              <li key={c.title} className="flex flex-col gap-4 border-b border-r border-white/15 p-7 transition hover:bg-white/[0.03]">
                <span className="font-mono text-[12px] text-gold-light">{pad(i + 1)}</span>
                <h3 className="font-display text-[23px] leading-tight">{c.title}</h3>
                <p className="text-[15px] leading-relaxed text-white/65">{c.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* COMPLEX CHALLENGES */}
      <section className="bg-bone py-24 md:py-32">
        <div className="wrap">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
            <SectionHeading eyebrow="The bigger picture" title="Solving Complex Industry Challenges" intro={challenges.lead} />
            <div className="lg:pt-24">
              <p className="text-[17px] leading-relaxed text-graphite">{challenges.text}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {challenges.symptoms.map((s) => (
                  <li key={s} className="border border-navy/15 bg-white px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-navy">
                    {s}
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-display text-[22px] leading-snug text-navy">{challenges.approach}</p>
            </div>
          </div>
          <figure className="mt-14">
            <SlotImage
              src="/images/illustrations/api-integration-flow.jpg"
              alt="Illustration of tangled point-to-point connections being consolidated through an API layer into structured systems and documents"
              className="aspect-[8/3] w-full"
            />
            <figcaption className="mt-3 font-mono text-[11px] text-graphite">Illustrative visual.</figcaption>
          </figure>
          <div className="mt-12">
            <FlowChain steps={challenges.flow} />
          </div>
          <p className="mt-8 max-w-2xl border-l-2 border-gold pl-5 text-[17px] leading-relaxed text-graphite">{challenges.outcome}</p>
        </div>
      </section>

      {/* APPROACH */}
      <section className="bg-paper py-24 md:py-32">
        <div className="wrap">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-24">
            <SectionHeading
              eyebrow="How we work"
              title="Our Industry Approach"
              intro="Six stages that take an organization from understanding its landscape to continuously improving it."
            />
            <SlotImage
              src="/images/engineering-team.jpg"
              alt="A technology team working through a solution together"
              className="aspect-[16/10] w-full"
            />
          </div>
          <ol className="mt-16 grid gap-px border border-navy/15 bg-navy/15 sm:grid-cols-2 lg:grid-cols-3">
            {approach.map((a, i) => (
              <li key={a.title} className="flex flex-col gap-4 bg-white p-7 md:p-9">
                <span className="font-display text-[40px] leading-none text-gold">{pad(i + 1)}</span>
                <h3 className="font-display text-[26px] leading-tight text-navy">{a.title}</h3>
                <p className="text-[16px] leading-relaxed text-graphite">{a.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* COMPLEX ENVIRONMENTS */}
      <section className="blueprint relative bg-navy py-24 text-white md:py-32">
        <div className="wrap grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-24">
          <div>
            <h2 className="text-balance text-[clamp(32px,4.4vw,60px)] leading-[1.05]">{complexEnvironments.title}</h2>
            <p className="mt-6 text-[18px] leading-relaxed text-white/70">{complexEnvironments.text}</p>
          </div>
          <ul className="grid grid-cols-2 border-l border-t border-white/15">
            {complexEnvironments.pillars.map((p, i) => (
              <li key={p} className="flex flex-col gap-6 border-b border-r border-white/15 p-6 md:p-8">
                <span className="font-mono text-[12px] text-gold-light">{pad(i + 1)}</span>
                <span className="font-display text-[clamp(22px,2.2vw,30px)] leading-tight">{p}.</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHY J&J */}
      <section className="bg-bone py-24 md:py-32">
        <div className="wrap">
          <SectionHeading eyebrow="Why J&J Consulting" title="What sets our work apart" />
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {whyUs.map((w, i) => (
              <li key={w.title} className="flex flex-col border-t-2 border-gold pt-6">
                <span className="font-mono text-[12px] text-gold-dark">{pad(i + 1)}</span>
                <h3 className="mt-4 font-display text-[23px] leading-tight text-navy">{w.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-graphite">{w.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title={industriesCta.title} text={industriesCta.text} label={industriesCta.label} />
    </>
  );
}
