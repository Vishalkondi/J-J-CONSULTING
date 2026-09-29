import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ClientMark } from "@/components/ClientMark";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { Tags } from "@/components/Tags";
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
      <section className="bg-paper py-20 md:py-28" aria-label="Overview">
        <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-24">
          <ClientMark name={w.client} logo={w.logo} className="aspect-square w-full max-w-[280px] border border-navy/10" />
          <div>
            <p className="max-w-2xl text-[19px] leading-relaxed text-graphite">{w.statement}</p>
            <dl className="mt-10 grid gap-px border border-navy/15 bg-navy/15 sm:grid-cols-3">
              {w.stats.map((s) => (
                <div key={s.label} className="bg-white p-6">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-[44px] leading-none text-navy">{s.value}</dd>
                  <dd className="mt-3 text-[14px] leading-snug text-graphite">{s.label}</dd>
                </div>
              ))}
            </dl>
            <p className="label mt-10 text-graphite">Business areas</p>
            <Tags items={[...w.domains]} label="Business areas" />
          </div>
        </div>
      </section>

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
            <p className="label mt-10 text-graphite">Vendor teams managed</p>
            <Tags items={[...w.vendors]} label="Vendor teams managed" />
          </div>
          <Reveal>
            <ul className="divide-y divide-navy/15 border-y border-navy/15">
              {w.responsibilities.map((i) => (
                <li key={i} className="py-5 text-[17px] leading-relaxed text-charcoal">
                  {i}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="bg-bone py-20 md:py-24" aria-labelledby="tech-title">
        <div className="wrap">
          <h2 id="tech-title" className="label text-graphite">
            Technology and systems
          </h2>
          <Tags items={[...w.technology]} label="Technology and systems" />
          <Link href="/case-studies" className="link-arrow mt-14 text-navy">
            All case studies <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
