import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CaseOverview } from "@/components/CaseOverview";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { company } from "@/data/site";
import { images } from "@/data/howden-hx";
import { westfield as w } from "@/data/westfield";

const url = `${company.url}/case-studies/${w.slug}`;

export const metadata: Metadata = {
  title: { absolute: w.seo.title },
  description: w.seo.description,
  alternates: { canonical: url },
  openGraph: { title: w.seo.title, description: w.seo.description, url, siteName: company.brand, locale: "en_GB", type: "article" },
  twitter: { card: "summary_large_image", title: w.seo.title, description: w.seo.description },
};

const pad = (n: number) => String(n).padStart(2, "0");

export default function WestfieldPage() {
  return (
    <>
      <PageHero
        eyebrow={w.eyebrow}
        title={
          <>
            {w.title}
            <span className="mt-3 block text-[0.5em] leading-tight text-white/75">{w.subtitle}</span>
          </>
        }
        intro={`${w.role} · ${w.period}`}
        image={images.citySkylineDusk}
      />

      {/* OVERVIEW */}
      <CaseOverview
        client={w.client}
        logo={w.logo}
        facts={[
          { label: "Role", value: w.role },
          { label: "Period", value: w.period },
          { label: "Project", value: w.title },
          { label: "Location", value: "Luxembourg" },
        ]}
        heading="Preparing a new Luxembourg entity to write Company Market business"
        statement={w.statement}
        stats={w.stats}
        tagsLabel="Business areas"
        tags={w.domains}
      />

      {/* DELIVERIES */}
      <section className="blueprint relative bg-midnight py-20 text-white md:py-28" aria-labelledby="del-title">
        <div className="wrap">
          <p className="label text-gold-light">Three deliveries</p>
          <h2 id="del-title" className="mt-5 max-w-3xl text-balance text-[clamp(30px,3.6vw,50px)] leading-[1.08]">
            One entity setup, three workstreams
          </h2>
          <ol className="mt-12 grid gap-px border border-white/15 bg-white/15 md:grid-cols-3">
            {w.deliveries.map((d, i) => (
              <li key={d.title} className="flex flex-col gap-4 bg-midnight p-7 md:p-9">
                <span className="font-mono text-[12px] text-gold-light">Delivery {pad(i + 1)}</span>
                <h3 className="font-display text-[clamp(24px,2.4vw,30px)] leading-tight">{d.title}</h3>
                <p className="text-[16px] leading-relaxed text-white/70">{d.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12 flex flex-col gap-4 border-l-2 border-gold pl-6 md:flex-row md:items-center md:gap-8">
            <p className="label text-gold-light">Company Market messages</p>
            <ul className="flex flex-wrap gap-2">
              {w.messages.map((m) => (
                <li key={m} className="border border-white/20 px-3 py-1.5 font-mono text-[12px] tracking-[0.08em] text-white/85">
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="bg-bone py-20 md:py-28" aria-labelledby="ach-title">
        <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_1.15fr] lg:gap-24">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="label text-gold-dark">Delivered</p>
            <h2 id="ach-title" className="mt-5 text-[clamp(30px,3.6vw,50px)] leading-[1.08] text-navy">
              What the engagement put in place
            </h2>
          </div>
          <Reveal>
            <ul className="divide-y divide-navy/15 border-y border-navy/15">
              {w.achievements.map((i) => (
                <li key={i} className="py-5 text-[17px] leading-relaxed text-charcoal">
                  {i}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* RESPONSIBILITIES */}
      <section className="bg-paper py-20 md:py-28" aria-labelledby="resp-title">
        <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_1.15fr] lg:gap-24">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="label text-gold-dark">Role in practice</p>
            <h2 id="resp-title" className="mt-5 text-[clamp(30px,3.6vw,50px)] leading-[1.08] text-navy">
              Key responsibilities
            </h2>
            <div className="blueprint relative mt-10 bg-navy p-7 text-white md:p-8">
              <p className="label text-gold-light">Vendor teams managed</p>
              <p className="mt-2 font-display text-[40px] leading-none">{w.vendors.length}</p>
              <ul className="mt-6 grid grid-cols-2 gap-x-6 border-t border-white/15 pt-5" aria-label="Vendor teams managed">
                {w.vendors.map((v) => (
                  <li key={v} className="flex items-center gap-2.5 py-1.5 font-display text-[19px]">
                    <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Reveal>
            <ol className="border-t border-navy/15">
              {w.responsibilities.map((r, i) => (
                <li
                  key={r}
                  className="group grid grid-cols-[48px_1fr] gap-4 border-b border-navy/15 py-6 transition-colors hover:bg-white/60"
                >
                  <span className="pt-1 font-mono text-[12px] text-gold-dark">{pad(i + 1)}</span>
                  <p className="text-[17px] leading-relaxed text-charcoal">{r}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="bg-bone py-20 md:py-28" aria-labelledby="tech-title">
        <div className="wrap">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="label text-gold-dark">Technology and systems</p>
              <h2 id="tech-title" className="mt-5 text-[clamp(30px,3.6vw,50px)] leading-[1.08] text-navy">
                The platforms behind the work
              </h2>
            </div>
            <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-graphite">{w.technology.length} systems and tools</p>
          </div>
          <ul className="mt-12 grid grid-cols-2 border-l border-t border-navy/15 sm:grid-cols-3 lg:grid-cols-5">
            {w.technology.map((t, i) => (
              <li
                key={t}
                className="flex min-h-[112px] flex-col justify-between gap-4 border-b border-r border-navy/15 bg-white p-5 transition-colors hover:bg-paper"
              >
                <span className="font-mono text-[11px] text-gold-dark">{pad(i + 1)}</span>
                <span className="font-display text-[18px] leading-tight text-navy">{t}</span>
              </li>
            ))}
          </ul>
          <Link href="/case-studies" className="btn mt-14 border border-navy text-navy transition hover:bg-navy hover:text-white">
            All case studies <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
