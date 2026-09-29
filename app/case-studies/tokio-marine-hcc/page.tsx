import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ClientMark } from "@/components/ClientMark";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { Tags } from "@/components/Tags";
import { company } from "@/data/site";
import { images } from "@/data/howden-hx";
import { tmhcc as t } from "@/data/tmhcc";

const url = `${company.url}/case-studies/${t.slug}`;

export const metadata: Metadata = {
  title: { absolute: t.seo.title },
  description: t.seo.description,
  alternates: { canonical: url },
  openGraph: { title: t.seo.title, description: t.seo.description, url, siteName: company.brand, locale: "en_GB", type: "article" },
  twitter: { card: "summary_large_image", title: t.seo.title, description: t.seo.description },
};

const projects = [
  { id: "policy-administration", title: t.pas.title },
  { id: "vendor-selection", title: t.rfp.title },
  { id: "target-architecture", title: t.architecture.title },
];

function Bullets({ items }: { items: readonly string[] }) {
  return (
    <ul className="divide-y divide-navy/15 border-y border-navy/15">
      {items.map((i) => (
        <li key={i} className="py-5 text-[17px] leading-relaxed text-charcoal">
          {i}
        </li>
      ))}
    </ul>
  );
}

function ProjectHeading({ n, title, areas, id }: { n: number; title: string; areas: readonly string[]; id: string }) {
  return (
    <div className="lg:sticky lg:top-28 lg:self-start">
      <p className="label text-gold-dark">Project {String(n).padStart(2, "0")}</p>
      <h2 id={id} className="mt-5 text-balance text-[clamp(30px,3.6vw,50px)] leading-[1.08] text-navy">
        {title}
      </h2>
      <p className="label mt-10 text-graphite">Business areas</p>
      <Tags items={[...areas]} label="Business areas" />
    </div>
  );
}

export default function TmhccPage() {
  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} intro={`${t.role} · ${t.period}`} image={images.skyline} />

      {/* OVERVIEW */}
      <section className="bg-paper py-20 md:py-28" aria-label="Overview">
        <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-24">
          <ClientMark name={t.client} logo={t.logo} className="aspect-square w-full max-w-[280px] border border-navy/10" />
          <div>
            <p className="max-w-2xl text-[19px] leading-relaxed text-graphite">{t.statement}</p>
            <dl className="mt-10 grid gap-px border border-navy/15 bg-navy/15 sm:grid-cols-3">
              {t.stats.map((s) => (
                <div key={s.label} className="bg-white p-6">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-[44px] leading-none text-navy">{s.value}</dd>
                  <dd className="mt-3 text-[14px] leading-snug text-graphite">{s.label}</dd>
                </div>
              ))}
            </dl>
            <p className="label mt-10 text-graphite">Lines of business</p>
            <Tags items={[...t.linesOfBusiness]} label="Lines of business" />
          </div>
        </div>
      </section>

      {/* PROJECT INDEX */}
      <section className="blueprint relative bg-midnight py-16 text-white md:py-20" aria-label="Projects">
        <div className="wrap">
          <p className="label text-gold-light">Three projects</p>
          <ol className="mt-8 grid gap-px border border-white/15 bg-white/15 md:grid-cols-3">
            {projects.map((p, i) => (
              <li key={p.id} className="bg-midnight">
                <a href={`#${p.id}`} className="group flex h-full flex-col gap-4 p-7 transition hover:bg-white/[0.04] md:p-8">
                  <span className="font-mono text-[12px] text-gold-light">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-[clamp(22px,2.2vw,27px)] leading-tight">{p.title}</span>
                  <span aria-hidden className="mt-auto text-gold-light transition-transform group-hover:translate-x-1">
                    ↓
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PROJECT 1 — PAS */}
      <section id="policy-administration" className="scroll-mt-24 bg-bone py-20 md:py-28" aria-labelledby="p1-title">
        <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_1.15fr] lg:gap-24">
          <ProjectHeading n={1} id="p1-title" title={t.pas.title} areas={t.pas.areas} />
          <Reveal>
            <p className="label mb-4 text-gold-dark">Achievements</p>
            <Bullets items={t.pas.achievements} />
            <p className="label mb-4 mt-12 text-gold-dark">Key responsibilities</p>
            <Bullets items={t.pas.responsibilities} />
            <p className="label mt-12 text-graphite">Tools and systems</p>
            <Tags items={[...t.pas.technology]} label="Tools and systems" />
          </Reveal>
        </div>
      </section>

      {/* PROJECT 2 — RFPs */}
      <section id="vendor-selection" className="scroll-mt-24 bg-paper py-20 md:py-28" aria-labelledby="p2-title">
        <div className="wrap">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_1.15fr] lg:gap-24">
            <ProjectHeading n={2} id="p2-title" title={t.rfp.title} areas={t.rfp.areas} />
            <Reveal>
              <p className="label mb-4 text-gold-dark">Achievements</p>
              <Bullets items={t.rfp.achievements} />
              <p className="label mt-12 text-graphite">Implementation partners evaluated</p>
              <Tags items={[...t.rfp.partners]} label="Implementation partners evaluated" />
            </Reveal>
          </div>
          <p className="label mt-16 text-gold-dark">Systems evaluated</p>
          <ul className="mt-6 grid gap-px border border-navy/15 bg-navy/15 sm:grid-cols-2 lg:grid-cols-3">
            {t.rfp.evaluated.map((e) => (
              <li key={e.area} className="flex flex-col gap-4 bg-white p-7">
                <h3 className="font-display text-[23px] leading-tight text-navy">{e.area}</h3>
                <ul className="flex flex-wrap gap-2">
                  {e.options.map((o) => (
                    <li key={o} className="border border-navy/15 bg-paper px-2.5 py-1 text-[14px] text-navy">
                      {o}
                    </li>
                  ))}
                </ul>
                {e.replacing && (
                  <p className="mt-auto text-[14px] leading-relaxed text-graphite">
                    <span className="label mr-2 text-gold-dark">Replacing</span>
                    {e.replacing}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROJECT 3 — ARCHITECTURE */}
      <section
        id="target-architecture"
        className="blueprint relative scroll-mt-24 bg-navy py-20 text-white md:py-28"
        aria-labelledby="p3-title"
      >
        <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_1.15fr] lg:gap-24">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="label text-gold-light">Project 03</p>
            <h2 id="p3-title" className="mt-5 text-balance text-[clamp(30px,3.6vw,50px)] leading-[1.08]">
              {t.architecture.title}
            </h2>
            <div className="mt-10 flex items-baseline gap-4 border-l-2 border-gold pl-5">
              <span className="font-display text-[64px] leading-none text-gold-light">6</span>
              <span className="text-[16px] leading-snug text-white/75">distinct target state architectures, classified as archetypes</span>
            </div>
            <p className="label mt-10 text-white/60">Business areas</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {t.architecture.areas.map((a) => (
                <li key={a} className="border border-white/20 px-3 py-1.5 text-[13px] text-white/85">
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <Reveal>
            <p className="label mb-4 text-gold-light">Achievements</p>
            <ul className="divide-y divide-white/15 border-y border-white/15">
              {t.architecture.achievements.map((i) => (
                <li key={i} className="py-5 text-[17px] leading-relaxed text-white/85">
                  {i}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-bone py-16">
        <div className="wrap">
          <Link href="/case-studies" className="link-arrow text-navy">
            All case studies <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
