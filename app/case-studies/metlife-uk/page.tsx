import type { Metadata } from "next";
import Link from "next/link";
import { MetlifeHero } from "@/components/metlife/Hero";
import { DataJourney } from "@/components/metlife/DataJourney";
import { WorkstreamSection } from "@/components/metlife/Workstream";
import { Capabilities, Ecosystem, ImpactCards } from "@/components/metlife/Sections";
import { CtaBand } from "@/components/CtaBand";
import { company } from "@/data/site";
import { closing, metlife as m, workstreams } from "@/data/metlife";

const url = `${company.url}/case-studies/${m.slug}`;

export const metadata: Metadata = {
  title: { absolute: m.seo.title },
  description: m.seo.description,
  alternates: { canonical: url },
  openGraph: { title: m.seo.title, description: m.seo.description, url, siteName: company.brand, locale: "en_GB", type: "article" },
  twitter: { card: "summary_large_image", title: m.seo.title, description: m.seo.description },
};

export default function MetlifePage() {
  return (
    <>
      <MetlifeHero />

      <section className="bg-paper py-20 md:py-28" aria-labelledby="intro-title">
        <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_1.15fr] lg:gap-24">
          <div>
            <p className="font-mono text-[12px] tracking-[0.1em] text-gold-dark">{m.intro.kicker}</p>
            <h2 id="intro-title" className="mt-5 text-[clamp(32px,4vw,56px)] leading-[1.06] text-navy">
              {m.intro.title}
            </h2>
          </div>
          <div className="space-y-6 text-[18px] leading-relaxed text-graphite">
            {m.intro.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <DataJourney />

      {workstreams.map((w, i) => (
        <WorkstreamSection key={w.index} w={w} tone={i % 2 === 0 ? "paper" : "bone"} />
      ))}

      <ImpactCards />
      <Ecosystem />
      <Capabilities />

      <section className="bg-paper py-24 md:py-32" aria-labelledby="closing-title">
        <div className="wrap max-w-4xl">
          <h2 id="closing-title" className="text-[clamp(32px,4.4vw,60px)] leading-[1.05] text-navy">
            {closing.title}
          </h2>
          <p className="mt-6 text-[19px] leading-relaxed text-graphite">{closing.text}</p>
          <Link href="/case-studies" className="link-arrow mt-10 text-navy">
            All case studies <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
