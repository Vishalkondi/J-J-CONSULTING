import type { Metadata } from "next";
import { CaseOverview } from "@/components/case/CaseOverview";
import { NumberedListSection } from "@/components/case/NumberedListSection";
import { TechnologySection } from "@/components/case/TechnologySection";
import { ConceptualNote, FlowChain } from "@/components/diagrams";
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

      {/* OVERVIEW */}
      <CaseOverview
        client={b.client}
        logo={b.logo}
        facts={[
          { label: "Role", value: b.role },
          { label: "Period", value: b.period },
          { label: "Programme", value: b.title },
        ]}
        heading={b.overviewHeading}
        statement={b.statement}
        stats={b.stats}
        tagsLabel="Business areas"
        tags={b.areas}
      />

      {/* LIFECYCLE */}
      <section className="blueprint relative bg-midnight py-20 text-white md:py-28" aria-labelledby="lifecycle-title">
        <div className="wrap">
          <p className="label text-gold-light">Delivery lifecycle</p>
          <h2 id="lifecycle-title" className="mt-5 max-w-3xl text-balance text-[clamp(30px,3.6vw,50px)] leading-[1.08]">
            From requirements workshops to go-live
          </h2>
          <div className="mt-12">
            <FlowChain steps={[...b.lifecycle]} tone="dark" />
          </div>
          <ConceptualNote tone="dark">{b.disclaimers.lifecycle}</ConceptualNote>
        </div>
      </section>

      <NumberedListSection id="ach-title" eyebrow="Delivered" title="What the engagement put in place" items={b.achievements} tone="bone" />
      <NumberedListSection id="resp-title" eyebrow="Role in practice" title="Key responsibilities" items={b.responsibilities} />

      <TechnologySection items={b.systems} columns="lg:grid-cols-6" />
      <CtaBand />
    </>
  );
}
