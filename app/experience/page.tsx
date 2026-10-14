import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ExperienceCounters } from "@/components/home/Intro";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { EngagementExplorer } from "@/components/experience/EngagementExplorer";
import { EngagementDetail } from "@/components/experience/EngagementDetail";
import { EarlierCard } from "@/components/experience/EarlierCard";
import { pageMeta } from "@/lib/seo";
import { cn } from "@/lib/utils";
import { experienceTimeline } from "@/data/site";
import {
  connects,
  earlierCareerIntro,
  earlierEngagements,
  experienceIntro,
  hitachiPortfolio,
  lifecycle,
  recentEngagements,
} from "@/data/experience";

export const metadata: Metadata = pageMeta({
  title: "Our Client Experience",
  description:
    "Client experience across insurance, financial services, transportation, manufacturing, logistics and technology: transformation, architecture, integration, data, regulatory change and ERP/CRM.",
  path: "/experience",
});

const pad = (n: number) => String(n).padStart(2, "0");

function IndexLinks({ label, items }: { label: string; items: { id: string; client: string; title: string }[] }) {
  return (
    <div>
      <p className="label text-gold-dark">{label}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {items.map((e) => (
          <li key={e.id}>
            <a
              href={`#${e.id}`}
              className="block border border-navy/15 bg-white px-3 py-1.5 text-[14px] text-navy transition hover:border-gold hover:text-gold-dark"
            >
              {e.client}
              {e.id.includes("solvency") ? " · Solvency II" : ""}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  return (
    <>
      <PageHero
        eyebrow={experienceIntro.eyebrow}
        title={experienceIntro.title}
        intro={experienceIntro.lead}
        image={{ src: "/images/cities/london.jpg", alt: "" }}
      />

      {/* INTRO + INDEX */}
      <section className="bg-paper py-20 md:py-24">
        <div className="wrap">
          <p className="max-w-4xl text-balance font-display text-[clamp(24px,2.8vw,36px)] leading-snug text-navy">{experienceIntro.text}</p>
          <nav aria-label="Jump to an engagement" className="mt-12 grid gap-8 border-t border-navy/15 pt-8 lg:grid-cols-[1.4fr_1fr]">
            <IndexLinks label="Through J & J Consulting · 2010 – 2026" items={recentEngagements} />
            <IndexLinks label="Earlier career · 2003 – 2010" items={earlierEngagements} />
          </nav>
        </div>
      </section>

      <ExperienceCounters />

      {/* CLIENT ENGAGEMENTS */}
      <section className="bg-bone py-24 md:py-32" aria-labelledby="engagements-title">
        <div className="wrap">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="pill mb-5 bg-white text-gold-dark">Through J &amp; J Consulting</p>
              <h2 id="engagements-title" className="text-[clamp(32px,4.4vw,60px)] leading-[1.05] text-navy">
                Client engagements
              </h2>
            </div>
            <p className="max-w-md text-[17px] leading-relaxed text-graphite">
              Insurance, reinsurance and financial services, 2010 – 2026. Select a client to see the engagement.
            </p>
          </div>
          <EngagementExplorer
            items={recentEngagements.map(({ id, client, period, title }) => ({ id, client, period, title }))}
            panels={recentEngagements.map((e) => (
              <EngagementDetail key={e.id} e={e} />
            ))}
          />
        </div>
      </section>

      {/* EARLIER CAREER */}
      <section className="blueprint relative bg-midnight py-24 text-white md:py-32" aria-labelledby="earlier-title">
        <div className="wrap">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-20">
            <div>
              <p className="label text-gold-light">Earlier career · 2003 – 2010</p>
              <h2 id="earlier-title" className="mt-4 text-balance text-[clamp(32px,4.4vw,60px)] leading-[1.05]">
                Where the foundations were built
              </h2>
            </div>
            <p className="text-[17px] leading-relaxed text-white/70">{earlierCareerIntro}</p>
          </div>

          <div className="mt-16 border-t border-white/15 pt-12">
            <p className="font-mono text-[12px] tracking-[0.12em] text-gold-light">{hitachiPortfolio.via.toUpperCase()}</p>
            <h3 className="mt-3 text-[clamp(26px,3vw,40px)] leading-tight">{hitachiPortfolio.title}</h3>
            <p className="mt-4 max-w-3xl text-[17px] leading-relaxed text-white/70">{hitachiPortfolio.text}</p>
            <ul className="mt-10 grid border-l border-t border-white/15 sm:grid-cols-2 lg:grid-cols-5">
              {hitachiPortfolio.capabilities.map((c, i) => (
                <li key={c.title} className="flex flex-col gap-3 border-b border-r border-white/15 p-6">
                  <span className="font-mono text-[12px] text-gold-light">{pad(i + 1)}</span>
                  <h4 className="font-display text-[21px] leading-tight">{c.title}</h4>
                  <p className="text-[14.5px] leading-relaxed text-white/65">{c.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-bone py-20 md:py-28" aria-label="Earlier career engagements">
        <div className="wrap grid gap-6 lg:grid-cols-2">
          {earlierEngagements.map((e) => (
            <EarlierCard key={e.id} e={e} />
          ))}
        </div>
      </section>

      {/* WHAT CONNECTS */}
      <section className="blueprint relative bg-navy py-24 text-white md:py-32" aria-labelledby="connects-title">
        <div className="wrap">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-20">
            <h2 id="connects-title" className="text-balance text-[clamp(32px,4.4vw,60px)] leading-[1.05]">
              What connects every engagement
            </h2>
            <p className="text-[17px] leading-relaxed text-white/70">{connects.intro}</p>
          </div>
          <ul className="mt-14 grid border-l border-t border-white/15 sm:grid-cols-2 lg:grid-cols-4">
            {connects.items.map((c, i) => (
              <li key={c.title} className="flex flex-col gap-4 border-b border-r border-white/15 p-7 transition hover:bg-white/[0.03]">
                <span className="font-mono text-[12px] text-gold-light">{pad(i + 1)}</span>
                <h3 className="font-display text-[23px] leading-tight">{c.title}</h3>
                <p className="text-[15px] leading-relaxed text-white/65">{c.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* STRATEGY TO EXECUTION */}
      <section className="bg-paper py-24 md:py-32" aria-labelledby="lifecycle-title">
        <div className="wrap">
          <p className="pill mb-5 bg-white text-gold-dark">The full lifecycle</p>
          <h2 id="lifecycle-title" className="text-[clamp(32px,4.4vw,60px)] leading-[1.05] text-navy">
            From strategy to execution
          </h2>
          <ol className="mt-12 flex flex-wrap items-center gap-x-2 gap-y-3">
            {lifecycle.steps.map((s, i) => (
              <li key={s} className="flex items-center gap-2">
                <span
                  className={cn(
                    "border px-4 py-2.5 font-display text-[18px]",
                    i === lifecycle.steps.length - 1 ? "border-navy bg-navy text-white" : "border-navy/20 bg-white text-navy",
                  )}
                >
                  {s}
                </span>
                {i < lifecycle.steps.length - 1 && (
                  <span aria-hidden className="text-gold-dark">
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
          <Reveal>
            <p className="mt-14 max-w-3xl border-l-2 border-gold pl-6 font-display text-[clamp(22px,2.4vw,32px)] leading-snug text-navy">
              {lifecycle.text}
            </p>
          </Reveal>
        </div>
      </section>

      {/* CAREER TIMELINE */}
      <section className="bg-bone py-24 md:py-32" aria-labelledby="timeline-title">
        <div className="wrap">
          <p className="label text-gold-dark">Career timeline</p>
          <h2 id="timeline-title" className="mt-4 text-[clamp(30px,3.6vw,50px)] leading-[1.08] text-navy">
            25+ years, 16+ in insurance and financial services
          </h2>
          <ol className="relative mt-12 border-l border-navy/20 pl-8 md:pl-14">
            {experienceTimeline.map((e, i) => (
              <li key={`${e.years}-${e.title}-${i}`} className="relative grid gap-1 py-4 md:grid-cols-[200px_1fr] md:gap-10">
                <span
                  className="absolute -left-[37px] top-[26px] h-2.5 w-2.5 rounded-full border-2 border-gold bg-bone md:-left-[61px]"
                  aria-hidden
                />
                <p className="pt-1 font-mono text-[14px] text-gold-dark">{e.years}</p>
                <p className="font-display text-[clamp(21px,2.4vw,28px)] leading-tight text-navy">{e.title}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
