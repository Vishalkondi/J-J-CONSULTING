import type { Metadata } from "next";
import Link from "next/link";
import { rre } from "@/data/renaissance-re";
import { articles } from "@/data/insights";
import { company } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";
import { SlotImage } from "@/components/SlotImage";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { ArchitectureStack, ConceptualNote, FlowChain, GapAnalysis, SystemsRadial } from "@/components/diagrams";
import { CaseVisual } from "@/components/marketing/CaseVisual";
import { rreVisualData } from "@/components/marketing/rre-visual";

const TITLE = "Business Analyst — Systems & Integrations Evaluation | RenaissanceRe";
const DESC =
  "Business Analyst experience assessing systems architecture, integrations, process flows and ImageRight document storage across Policy & Claims and Finance.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: { canonical: `${company.url}/case-studies/renaissance-re` },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: `${company.url}/case-studies/renaissance-re`,
    siteName: company.brand,
    locale: "en_GB",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

export default function RenaissanceRePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-midnight text-white">
        <div className="hero-fallback blueprint absolute inset-0" aria-hidden />
        <div className="wrap relative grid gap-12 pb-20 pt-40 lg:grid-cols-[1.05fr_1fr] lg:items-end lg:gap-16 lg:pb-28 lg:pt-52">
          <div>
            <div className="flex items-center gap-4">
              <SlotImage
                src="/images/renaissance-re-logo.png"
                alt="RenaissanceRe logo"
                fit="contain"
                className="h-14 w-14 shrink-0 bg-white"
                imgClassName="p-1.5"
              />
              <p className="label text-gold-light">{rre.eyebrow}</p>
            </div>
            <h1 className="mt-6 text-[clamp(40px,6vw,88px)] leading-[1.02]">
              Systems &amp; Integrations <span className="block">Evaluation</span>
            </h1>
            <p className="mt-4 font-display text-[clamp(24px,3vw,40px)] text-steel-light">{rre.subtitle}</p>
            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/20 pt-6 font-mono text-[12px] tracking-[0.1em] text-white/80">
              <div>
                <dt className="sr-only">Role</dt>
                <dd>{rre.role.toUpperCase()}</dd>
              </div>
              <div>
                <dt className="sr-only">Duration</dt>
                <dd>{rre.period.toUpperCase()}</dd>
              </div>
              <div>
                <dt className="sr-only">Business areas</dt>
                <dd className="text-gold-light">{rre.areas.join(" · ").toUpperCase()}</dd>
              </div>
            </dl>
            <p className="mt-8 max-w-xl text-[19px] leading-relaxed text-white/80">{rre.statement}</p>
          </div>
          <figure>
            <SlotImage
              src="/images/renaissance-re-project.jpg"
              alt="Illustrative visual for the RenaissanceRe systems and integrations evaluation"
              className="aspect-[16/10] w-full"
              eager
              fallback={
                <div className="absolute inset-0">
                  <CaseVisual variant="banner" data={rreVisualData} />
                </div>
              }
            />
            <figcaption className="mt-3 font-mono text-[11px] text-white/50">{rre.disclaimers.visual}</figcaption>
          </figure>
        </div>
      </section>

      {/* SNAPSHOT */}
      <section className="bg-paper py-16">
        <div className="wrap">
          <dl className="grid gap-x-10 gap-y-8 border-y border-navy/20 py-10 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["Client", rre.client],
              ["Role", rre.role],
              ["Duration", rre.period],
              ["Business areas", rre.areas.join(", ")],
              ["Tools", rre.tools.join(", ")],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="label text-graphite">{k}</dt>
                <dd className="mt-3 text-[16px] leading-snug text-navy">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-paper pb-24">
        <div className="wrap">
          <SectionHeading eyebrow="The engagement" title="From current state to execution plan" />
          <div className="mt-12">
            <FlowChain steps={rre.story} />
          </div>
        </div>
      </section>

      {/* CURRENT STATE */}
      <section className="blueprint relative bg-midnight py-24 text-white md:py-32">
        <div className="wrap">
          <SectionHeading tone="dark" eyebrow="Current state" title="What was assessed" />
          <ul className="mt-12 grid gap-px border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-3">
            {rre.assessmentAreas.map((a) => (
              <li key={a} className="bg-midnight px-6 py-7 font-display text-[26px]">
                {a}
              </li>
            ))}
          </ul>
          <div className="mt-20">
            <p className="label text-gold-light">Architecture</p>
            <h3 className="mt-3 max-w-2xl text-[clamp(26px,3vw,40px)] leading-tight">A conceptual view of the landscape in scope</h3>
            <div className="mt-10">
              <ArchitectureStack layers={rre.architecture} />
            </div>
            <ConceptualNote tone="dark">{rre.disclaimers.conceptual}</ConceptualNote>
          </div>
        </div>
      </section>

      {/* GAP ANALYSIS */}
      <section className="bg-bone py-24 md:py-32">
        <div className="wrap">
          <SectionHeading
            eyebrow="Gap analysis"
            title="Identifying what stood in the way"
            intro="Existing architecture, integrations and processes were assessed to identify gaps, shortcomings and opportunities for improvement."
          />
          <div className="mt-14">
            <GapAnalysis existing={rre.gap.existing} gaps={rre.gap.gaps} recommendations={rre.gap.recommendations} />
          </div>
          <ConceptualNote>{rre.disclaimers.conceptual}</ConceptualNote>
        </div>
      </section>

      {/* IMAGERIGHT */}
      <section className="bg-paper py-24 md:py-32">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <div>
            <p className="label text-gold-dark">Deep dive</p>
            <h2 className="mt-4 text-[clamp(38px,5vw,72px)] leading-[1.02] text-navy">ImageRight</h2>
            <p className="mt-3 font-display text-[clamp(20px,2.2vw,28px)] text-steel">{rre.imageRight.subtitle}</p>
            <p className="mt-8 max-w-md text-[18px] leading-relaxed text-graphite">{rre.imageRight.text}</p>
          </div>
          <ul className="self-end border-t border-navy/20">
            {rre.imageRight.outputs.map((o) => (
              <li key={o} className="border-b border-navy/20 py-6 font-display text-[clamp(26px,3vw,40px)] text-navy">
                {o}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROCESS FLOW */}
      <section className="bg-bone py-24 md:py-32">
        <div className="wrap">
          <SectionHeading eyebrow="Process flow" title="How work and documents move" />
          <div className="mt-12">
            <FlowChain steps={rre.processFlow} />
          </div>
          <ConceptualNote>{rre.disclaimers.conceptual}</ConceptualNote>
        </div>
      </section>

      {/* RECOMMENDATIONS + ROADMAP */}
      <section className="blueprint relative bg-navy py-24 text-white md:py-32">
        <div className="wrap space-y-24">
          <div>
            <SectionHeading
              tone="dark"
              eyebrow="Recommendations"
              title="Identify. Improve. Streamline."
              intro="Redundant integrations were identified and documented as opportunities for decommissioning, as part of the recommended path to the target state."
            />
            <div className="mt-12">
              <FlowChain steps={rre.recommendationFlow} tone="dark" />
            </div>
          </div>
          <div>
            <p className="label text-gold-light">Execution roadmap</p>
            <h3 className="mt-3 text-[clamp(26px,3vw,40px)]">A plan of action and order of sequence</h3>
            <div className="mt-10">
              <FlowChain steps={rre.roadmap} tone="dark" />
            </div>
          </div>
        </div>
      </section>

      {/* THIRD-PARTY */}
      <section className="bg-paper py-24 md:py-32">
        <div className="wrap">
          <SectionHeading eyebrow="Third-party collaboration" title="Coordinating across vendors and teams" intro={rre.collaborationText} />
          <div className="mt-12">
            <FlowChain steps={rre.collaboration} />
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS + RESPONSIBILITIES */}
      <section className="bg-bone py-24 md:py-32">
        <div className="wrap grid gap-20 lg:grid-cols-2 lg:gap-24">
          {[
            ["Key achievements", rre.achievements],
            ["Key responsibilities", rre.responsibilities],
          ].map(([heading, items]) => (
            <div key={heading as string}>
              <h2 className="text-[clamp(30px,3.4vw,46px)] leading-tight text-navy">{heading as string}</h2>
              <ol className="mt-10 border-t border-navy/20">
                {(items as { title: string; text: string }[]).map((it, i) => (
                  <li key={it.title} className="grid grid-cols-[48px_1fr] gap-4 border-b border-navy/20 py-7">
                    <span className="font-mono text-[12px] text-gold-dark">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="text-[24px] leading-tight text-navy">{it.title}</h3>
                      <p className="mt-3 text-[16px] leading-relaxed text-graphite">{it.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      {/* CLARITY + SYSTEMS THINKING */}
      <section className="blueprint relative bg-midnight py-24 text-white md:py-32">
        <div className="wrap">
          <SectionHeading tone="dark" eyebrow="The business analyst story" title="From complexity to clarity" />
          <div className="mt-12">
            <FlowChain steps={rre.clarity} tone="dark" />
          </div>
          <div className="mt-24 grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-24">
            <div>
              <p className="label text-gold-light">Systems thinking</p>
              <h3 className="mt-3 text-[clamp(28px,3.4vw,46px)] leading-tight">Business analysis connects the whole picture</h3>
              <ConceptualNote tone="dark">{rre.disclaimers.conceptual}</ConceptualNote>
            </div>
            <SystemsRadial center={rre.systemsThinking.center} nodes={rre.systemsThinking.nodes} />
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="bg-paper py-24 md:py-32">
        <div className="wrap">
          <SectionHeading eyebrow="Final impact" title="From assessment to action" />
          <div className="mt-12">
            <FlowChain steps={rre.impact.steps} />
          </div>
          <Reveal>
            <blockquote className="mt-16 max-w-3xl border-l-2 border-gold pl-8 font-display text-[clamp(24px,2.8vw,36px)] leading-snug text-navy">
              {rre.impact.text}
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* EDITORIAL VISUAL */}
      <section className="bg-bone py-20">
        <div className="wrap">
          <figure>
            <SlotImage
              src="/images/renaissance-re-editorial.jpg"
              alt="Editorial visual for the RenaissanceRe case study"
              className="aspect-[21/9] w-full"
              fallback={
                <div className="absolute inset-0">
                  <CaseVisual variant="banner" data={rreVisualData} />
                </div>
              }
            />
            <figcaption className="mt-3 font-mono text-[11px] text-graphite">{rre.disclaimers.visual}</figcaption>
          </figure>
        </div>
      </section>

      {/* RELATED INSIGHTS */}
      <section className="bg-paper py-24">
        <div className="wrap">
          <SectionHeading eyebrow="Related insights" title="Industry perspectives" />
          <ul className="mt-12 border-t border-navy/20">
            {articles.map((a) => (
              <li key={a.slug} className="border-b border-navy/20">
                <Link
                  href={`/insights/${a.slug}`}
                  className="group flex items-baseline justify-between gap-6 py-6 font-display text-[clamp(20px,2.2vw,28px)] text-navy hover:text-steel"
                >
                  {a.title}
                  <span aria-hidden className="text-gold-dark transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
