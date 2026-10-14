import type { Metadata } from "next";
import Link from "next/link";
import { ClientMark } from "@/components/ClientMark";
import { CtaBand } from "@/components/CtaBand";
import { SlotImage } from "@/components/SlotImage";
import { company } from "@/data/site";
import { beazley } from "@/data/beazley";

const TITLE = "Business Analyst — Modernisation Programme, Pricing & Rating System Delivery | Beazley Group";
const DESC =
  "Business Analyst experience on the Beazley Group modernisation programme, covering pricing and rating system delivery across actuarial, underwriting, capital modelling, finance, policy and claims.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: { canonical: `${company.url}/case-studies/beazley` },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: `${company.url}/case-studies/beazley`,
    siteName: company.brand,
    locale: "en_GB",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

export default function BeazleyPage() {
  const b = beazley;
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-midnight text-white">
        <div className="hero-fallback blueprint absolute inset-0" aria-hidden />
        <div className="wrap relative grid gap-12 pb-20 pt-40 lg:grid-cols-[1.05fr_1fr] lg:items-end lg:gap-16 lg:pb-28 lg:pt-52">
          <div>
            <div className="flex items-center gap-4">
              <SlotImage src={b.logo} alt="Beazley logo" fit="contain" className="h-14 w-14 shrink-0 bg-white" imgClassName="p-1" />
              <p className="label text-gold-light">{b.eyebrow}</p>
            </div>
            <h1 className="mt-6 text-[clamp(40px,6vw,88px)] leading-[1.02]">{b.title}</h1>
            <p className="mt-4 font-display text-[clamp(24px,3vw,40px)] text-steel-light">{b.subtitle}</p>
            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/20 pt-6 font-mono text-[12px] tracking-[0.1em] text-white/80">
              <div>
                <dt className="sr-only">Role</dt>
                <dd>{b.role.toUpperCase()}</dd>
              </div>
              <div>
                <dt className="sr-only">Year</dt>
                <dd>{b.period}</dd>
              </div>
              <div>
                <dt className="sr-only">Client</dt>
                <dd className="text-gold-light">{b.client.toUpperCase()}</dd>
              </div>
            </dl>
            <p className="mt-8 max-w-xl text-[19px] leading-relaxed text-white/80">{b.statement}</p>
          </div>
          <figure>
            <SlotImage
              src={b.visual}
              alt="Illustrative visual of the Beazley modernisation programme: business areas, delivery stages and systems"
              className="aspect-[3/2] w-full"
              eager
            />
            <figcaption className="mt-3 font-mono text-[11px] text-white/50">{b.disclaimers.visual}</figcaption>
          </figure>
        </div>
      </section>

      {/* BUSINESS AREAS */}
      <section className="bg-paper py-24 md:py-32">
        <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <h2 className="text-[clamp(30px,3.6vw,48px)] leading-[1.08] text-navy">Business areas covered</h2>
            <p className="mt-5 max-w-sm text-[16px] leading-relaxed text-graphite">
              A pricing and rating platform touches most of the business. The analysis spanned six functions.
            </p>
          </div>
          <ul className="grid gap-x-8 border-t border-navy/20 sm:grid-cols-2">
            {b.areas.map((a) => (
              <li key={a} className="border-b border-navy/15 py-4 font-display text-[24px] text-navy">
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* LIFECYCLE */}
      <section className="bg-bone py-24 md:py-28">
        <div className="wrap">
          <h2 className="text-[clamp(28px,3.2vw,44px)] leading-[1.1] text-navy">Delivery lifecycle</h2>
          <ol
            className="no-scrollbar mt-12 flex gap-px overflow-x-auto border border-navy/15 bg-navy/15"
            aria-label="Programme delivery stages"
          >
            {b.lifecycle.map((step, i) => (
              <li key={step} className="min-w-[150px] flex-1 bg-white p-6">
                <span className="font-mono text-[12px] text-gold-dark">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-4 font-display text-[22px] leading-tight text-navy">{step}</p>
              </li>
            ))}
          </ol>
          <p className="mt-4 font-mono text-[11px] text-graphite">{b.disclaimers.lifecycle}</p>
        </div>
      </section>

      {/* SYSTEMS */}
      <section className="bg-paper py-24 md:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-24">
          <ClientMark name={b.client} logo={b.logo} className="aspect-square w-full max-w-[280px] border border-navy/10" />
          <div>
            <h2 className="label text-graphite">Systems and tools referenced</h2>
            <ul className="mt-5 grid gap-x-8 font-mono text-[14px] text-charcoal sm:grid-cols-2">
              {b.systems.map((s) => (
                <li key={s} className="border-b border-navy/10 py-3">
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-xl text-[14.5px] leading-relaxed text-graphite">
              Shown as documented scope of the programme. J &amp; J Consulting makes no claim about system ownership, configuration or
              outcomes.
            </p>
            <Link href="/case-studies" className="link-arrow mt-8 text-navy">
              All case studies <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
