import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { NetworkOverlay } from "@/components/NetworkOverlay";
import { ProgrammeVisual } from "@/components/brit/ProgrammeVisual";
import { ClientMark } from "@/components/ClientMark";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { Tags } from "@/components/Tags";
import { company } from "@/data/site";
import { images } from "@/data/howden-hx";
import { brit as b } from "@/data/brit";

const url = `${company.url}/case-studies/${b.slug}`;

export const metadata: Metadata = {
  title: { absolute: b.seo.title },
  description: b.seo.description,
  alternates: { canonical: url },
  openGraph: { title: b.seo.title, description: b.seo.description, url, siteName: company.brand, locale: "en_GB", type: "article" },
  twitter: { card: "summary_large_image", title: b.seo.title, description: b.seo.description },
};

export default function BritPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected case study"
        title={
          <>
            {b.client}
            <span className="mt-3 block text-[0.5em] leading-tight text-white/80">{b.title}</span>
          </>
        }
        intro={`${b.role} · ${b.period}`}
        image={images.skyline}
        decor={<NetworkOverlay />}
      />

      <ProgrammeVisual />

      {/* OVERVIEW */}
      <section className="bg-paper py-20 md:py-28" aria-labelledby="overview-title">
        <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-24">
          <ClientMark name={b.client} logo={b.logo} className="aspect-square w-full max-w-[280px] border border-navy/10" />
          <div>
            <h2 id="overview-title" className="max-w-3xl text-[clamp(30px,4vw,52px)] leading-[1.06] text-navy">
              {b.headline}
            </h2>
            <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-graphite">{b.summary}</p>
            <dl className="mt-10 grid gap-x-10 gap-y-6 border-t border-navy/20 pt-8 sm:grid-cols-3">
              <div>
                <dt className="label text-graphite">Programme value</dt>
                <dd className="mt-2 font-display text-[36px] leading-none text-navy">{b.programme.value}</dd>
              </div>
              <div>
                <dt className="label text-graphite">Team</dt>
                <dd className="mt-2 font-display text-[36px] leading-none text-navy">{b.programme.team}</dd>
              </div>
              <div>
                <dt className="label text-graphite">Scope</dt>
                <dd className="mt-2 font-display text-[24px] leading-tight text-navy">{b.programme.scope}</dd>
              </div>
            </dl>
            <Tags items={[...b.domains]} label="Business areas" />
            <p className="mt-8 font-mono text-[11px] text-graphite">Historical engagement, {b.period}. Not a current client.</p>
          </div>
        </div>
      </section>

      {/* SOLVENCY II */}
      <section className="bg-bone py-20 md:py-28" aria-labelledby="rep-title">
        <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_1.15fr] lg:gap-24">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-mono text-[12px] tracking-[0.1em] text-gold-dark">{b.reporting.kicker}</p>
            <h2 id="rep-title" className="mt-5 text-[clamp(30px,3.6vw,50px)] leading-[1.08] text-navy">
              {b.reporting.title}
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-graphite">{b.reporting.intro}</p>
          </div>
          <Reveal>
            <ul className="divide-y divide-navy/15 border-y border-navy/15">
              {b.reporting.items.map((i) => (
                <li key={i} className="py-5 text-[17px] leading-relaxed text-charcoal">
                  {i}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* GDPR */}
      <section className="bg-paper py-20 md:py-28" aria-labelledby="gdpr-title">
        <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_1.15fr] lg:gap-24">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-mono text-[12px] tracking-[0.1em] text-gold-dark">{b.gdpr.kicker}</p>
            <h2 id="gdpr-title" className="mt-5 text-[clamp(30px,3.6vw,50px)] leading-[1.08] text-navy">
              Where sensitive data moves
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-graphite">{b.gdpr.intro}</p>
          </div>
          <Reveal>
            <div className="divide-y divide-navy/15 border-y border-navy/15">
              <div className="py-6">
                <h3 className="label text-graphite">{b.gdpr.discovery.title}</h3>
                <p className="mt-3 text-[17px] leading-relaxed text-charcoal">{b.gdpr.discovery.text}</p>
                <Tags items={[...b.gdpr.discovery.tags]} label="PII associated with" />
              </div>
              <div className="py-6">
                <h3 className="label text-graphite">{b.gdpr.flow.title}</h3>
                <p className="mt-3 text-[17px] text-charcoal">{b.gdpr.flow.lead}</p>
                <ul className="mt-3 grid gap-x-8 sm:grid-cols-2">
                  {b.gdpr.flow.items.map((i) => (
                    <li key={i} className="border-b border-navy/10 py-2.5 text-[16px] text-charcoal">
                      {i}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-[17px] leading-relaxed text-charcoal">{b.gdpr.flow.closing}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONNECTING */}
      <section className="bg-bone py-20 md:py-28" aria-labelledby="conn-title">
        <div className="wrap">
          <h2 id="conn-title" className="max-w-3xl text-[clamp(30px,3.8vw,52px)] leading-[1.08] text-navy">
            {b.connecting.title}
          </h2>
          <div className="mt-6 max-w-2xl space-y-4 text-[17px] leading-relaxed text-graphite">
            {b.connecting.text.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {b.connecting.focus.map((f) => (
              <li key={f.title}>
                <Reveal className="h-full">
                  <article className="h-full border border-navy/15 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-navy/30 hover:shadow-[0_18px_40px_-20px_rgba(12,32,56,0.35)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                    <span aria-hidden className="block h-px w-10 bg-gold" />
                    <h3 className="mt-6 text-[24px] leading-tight text-navy">{f.title}</h3>
                    <p className="mt-4 text-[16px] leading-relaxed text-graphite">{f.text}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="bg-paper py-20 md:py-24" aria-labelledby="tech-title">
        <div className="wrap">
          <h2 id="tech-title" className="label text-graphite">
            Technology landscape
          </h2>
          <Tags items={[...b.technology]} label="Technology landscape" />
        </div>
      </section>

      {/* IMPACT */}
      <section className="blueprint bg-midnight py-24 text-white md:py-32" aria-labelledby="impact-title">
        <div className="wrap">
          <p className="label text-gold-light">{b.impact.title}</p>
          <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:gap-20">
            {b.impact.paragraphs.map((p) => (
              <p key={p} className="text-[18px] leading-relaxed text-white/75">
                {p}
              </p>
            ))}
          </div>
          <h2 id="impact-title" className="mt-16 text-[clamp(30px,4vw,56px)] leading-[1.06]">
            {b.impact.closingTitle}
          </h2>
          <ol
            className="no-scrollbar mt-10 flex gap-px overflow-x-auto border border-white/20 bg-white/20"
            aria-label="From business to reporting"
          >
            {b.impact.flow.map((f) => (
              <li key={f} className="min-w-[150px] flex-1 bg-midnight px-6 py-6 text-center font-display text-[24px]">
                {f}
              </li>
            ))}
          </ol>
          <Link href="/case-studies" className="link-arrow mt-12 text-white">
            All case studies <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
      <CtaBand title={b.cta.title} text={b.cta.text} label="Talk to Us" />
    </>
  );
}
