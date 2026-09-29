import type { Metadata } from "next";
import Link from "next/link";
import { rre } from "@/data/renaissance-re";
import { cn } from "@/lib/utils";
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
              <div>
                <p className="label text-gold-light">{rre.client}</p>
                <p className="mt-1.5 font-mono text-[11px] tracking-[0.12em] text-white/55">
                  {`${rre.title} · ${rre.subtitle}`.toUpperCase()}
                </p>
              </div>
            </div>
            <h1 className="mt-6 text-balance text-[clamp(40px,5.4vw,80px)] leading-[1.03]">{rre.headline}</h1>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Capabilities">
              {rre.capabilities.map((c) => (
                <li key={c} className="border border-white/25 px-3 py-1.5 font-mono text-[11px] tracking-[0.1em] text-white/85">
                  {c.toUpperCase()}
                </li>
              ))}
            </ul>
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

      {/* INTRO + STORY */}
      <section className="bg-paper pb-24">
        <div className="wrap">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
            <div>
              <p className="pill mb-5 bg-white text-gold-dark">Systems &amp; integration evaluation</p>
              <h2 className="text-balance text-[clamp(32px,4.4vw,60px)] leading-[1.05] text-navy">{rre.intro.title}</h2>
            </div>
            <div className="space-y-5 text-[18px] leading-relaxed text-graphite lg:pt-14">
              {rre.intro.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <p className="label mt-16 text-gold-dark">From current state to execution plan</p>
          <div className="mt-6">
            <FlowChain steps={rre.story} />
          </div>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="blueprint relative bg-midnight py-24 text-white md:py-32" aria-labelledby="challenge-title">
        <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_1.1fr] lg:gap-24">
          <div>
            <p className="pill mb-5 bg-white/5 text-gold-light">The challenge</p>
            <h2 id="challenge-title" className="text-balance text-[clamp(32px,4.4vw,56px)] leading-[1.05]">
              Complexity across processes, data flows and dependencies
            </h2>
            <p className="mt-6 text-[18px] leading-relaxed text-white/70">{rre.challenge.text}</p>
          </div>
          <div>
            <p className="text-[17px] leading-relaxed text-white/80 lg:pt-6">{rre.challenge.lead}</p>
            <ul className="mt-6 grid border-l border-t border-white/15 sm:grid-cols-2">
              {rre.challenge.points.map((pt, i) => (
                <li key={pt} className="flex flex-col gap-3 border-b border-r border-white/15 p-6">
                  <span className="font-mono text-[12px] text-gold-light">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-[20px] leading-snug">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="bg-bone py-24 md:py-32" aria-labelledby="approach-title">
        <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_1.1fr] lg:gap-24">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="pill mb-5 bg-white text-gold-dark">Our approach</p>
            <h2 id="approach-title" className="text-balance text-[clamp(32px,4.4vw,56px)] leading-[1.05] text-navy">
              How we worked through the problem
            </h2>
            <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-graphite">
              {rre.approachText.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <Reveal>
            <ol className="relative">
              <span aria-hidden className="absolute bottom-6 left-[19px] top-6 w-px bg-gradient-to-b from-gold via-gold/50 to-gold/10" />
              {rre.approach.map((step, i) => (
                <li key={step.title} className="relative grid grid-cols-[40px_1fr] gap-5 pb-9 last:pb-0">
                  <span
                    className={cn(
                      "relative z-10 flex h-10 w-10 items-center justify-center rounded-full border font-mono text-[12px]",
                      i === rre.approach.length - 1 ? "border-navy bg-navy text-gold-light" : "border-gold bg-bone text-gold-dark",
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="pt-1.5">
                    <h3 className="font-display text-[clamp(21px,2vw,26px)] leading-snug text-navy">{step.title}</h3>
                    <p className="mt-2 text-[16px] leading-relaxed text-graphite">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* WHAT WE WORKED ON */}
      <section className="blueprint relative bg-midnight py-24 text-white md:py-32">
        <div className="wrap">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <SectionHeading tone="dark" eyebrow="What we worked on" title={rre.landscape.title} />
            <div className="lg:pt-14">
              <p className="font-display text-[clamp(22px,2.2vw,28px)] leading-snug text-gold-light">
                {rre.landscape.lead.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </p>
              <p className="mt-5 text-[17px] leading-relaxed text-white/70">{rre.landscape.text}</p>
            </div>
          </div>
          <ol className="mt-14 grid gap-px border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-5">
            {rre.landscape.steps.map((st, i) => (
              <li key={st.title} className="flex flex-col gap-4 bg-midnight p-7">
                <span className="font-mono text-[12px] text-gold-light">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-[30px] leading-none">{st.title}</h3>
                <span aria-hidden className="h-px w-8 bg-gold" />
                <p className="text-[15px] leading-relaxed text-white/70">{st.text}</p>
              </li>
            ))}
          </ol>
          <p className="label mt-20 text-gold-light">Areas in scope</p>
          <ul className="mt-6 grid border-l border-t border-white/15 sm:grid-cols-2 lg:grid-cols-3">
            {rre.assessmentDetails.map((a, i) => (
              <li key={a.title} className="flex flex-col gap-3 border-b border-r border-white/15 px-6 py-7 md:px-8 md:py-9">
                <span className="font-mono text-[12px] text-gold-light">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-[26px] leading-tight">{a.title}</h3>
                <p className="text-[15px] leading-relaxed text-white/65">{a.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-20">
            <p className="label text-gold-light">Architecture</p>
            <h3 className="mt-3 max-w-2xl text-balance text-[clamp(26px,3vw,40px)] leading-tight">
              A conceptual view of the landscape in scope
            </h3>
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
        <div className="wrap">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
            <div>
              <p className="label text-gold-dark">Deep dive</p>
              <h2 className="mt-4 text-[clamp(38px,5vw,72px)] leading-[1.02] text-navy">ImageRight</h2>
              <p className="mt-3 font-display text-[clamp(20px,2.2vw,28px)] text-steel">{rre.imageRight.subtitle}</p>
              <p className="mt-8 max-w-md text-[18px] leading-relaxed text-graphite">{rre.imageRight.text}</p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {rre.imageRight.scope.map((t) => (
                  <li
                    key={t}
                    className="border border-navy/15 bg-white px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-navy"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <figure>
              <SlotImage
                src="/images/cloud-infrastructure.jpg"
                alt="Close-up of network and server infrastructure"
                className="aspect-[4/3] w-full"
              />
              <figcaption className="mt-3 font-mono text-[11px] text-graphite">{rre.disclaimers.visual}</figcaption>
            </figure>
          </div>
          <ol className="mt-16 grid gap-px border border-navy/15 bg-navy/15 md:grid-cols-3">
            {rre.imageRight.findings.map((f, i) => (
              <li key={f.title} className="flex flex-col gap-4 bg-white p-7 md:p-8">
                <span className="font-mono text-[12px] text-gold-dark">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-[clamp(24px,2.4vw,32px)] leading-tight text-navy">{f.title}</h3>
                <p className="text-[16px] leading-relaxed text-graphite">{f.text}</p>
              </li>
            ))}
          </ol>
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

      {/* PATH FORWARD */}
      <section className="bg-paper py-24 md:py-32" aria-labelledby="path-title">
        <div className="wrap">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-20">
            <div>
              <p className="pill mb-5 bg-white text-gold-dark">Solution &amp; target state</p>
              <h2 id="path-title" className="text-balance text-[clamp(32px,4.4vw,60px)] leading-[1.05] text-navy">
                Defining the path forward
              </h2>
            </div>
            <div>
              <p className="text-[18px] leading-relaxed text-graphite">{rre.pathForward.intro}</p>
              <p className="label mt-5 text-gold-dark">The recommendations covered</p>
            </div>
          </div>
          <ol className="mt-14 grid gap-px border border-navy/15 bg-navy/15 sm:grid-cols-2 lg:grid-cols-5">
            {rre.pathForward.pillars.map((p, i) => (
              <li
                key={p.title}
                className={cn(
                  "flex flex-col gap-5 p-7 lg:min-h-[260px]",
                  i === rre.pathForward.pillars.length - 1 ? "bg-navy text-white" : "bg-white text-navy",
                )}
              >
                <span
                  className={cn("font-mono text-[12px]", i === rre.pathForward.pillars.length - 1 ? "text-gold-light" : "text-gold-dark")}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-[24px] leading-tight">{p.title}</h3>
                <p
                  className={cn(
                    "mt-auto text-[15px] leading-relaxed",
                    i === rre.pathForward.pillars.length - 1 ? "text-white/75" : "text-graphite",
                  )}
                >
                  {p.text}
                </p>
              </li>
            ))}
          </ol>
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
            <ol className="mt-12 grid gap-px border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-5">
              {rre.recommendationDetails.map((r, i) => (
                <li
                  key={r.title}
                  className={cn(
                    "flex flex-col gap-5 p-6 lg:min-h-[240px]",
                    i === rre.recommendationDetails.length - 1 ? "bg-gold text-navy" : "bg-navy",
                  )}
                >
                  <span
                    className={cn("font-mono text-[12px]", i === rre.recommendationDetails.length - 1 ? "text-navy/70" : "text-gold-light")}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-[26px] leading-tight">{r.title}</h3>
                  <p
                    className={cn(
                      "mt-auto text-[15px] leading-relaxed",
                      i === rre.recommendationDetails.length - 1 ? "text-navy/80" : "text-white/70",
                    )}
                  >
                    {r.text}
                  </p>
                </li>
              ))}
            </ol>
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
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
            <SectionHeading
              eyebrow="Third-party collaboration"
              title="Coordinating across vendors and teams"
              intro={rre.collaborationText}
            />
            <SlotImage
              src="/images/howden/workshop-data-to-decisions.jpg"
              alt="An analyst presenting a process flow to colleagues in a meeting room"
              className="aspect-[3/2] w-full"
            />
          </div>
          <ul className="mt-14 grid gap-6 md:grid-cols-3">
            {rre.parties.map((p, i) => (
              <li
                key={p.title}
                className={cn("border p-7", i === 1 ? "border-navy bg-navy text-white" : "border-navy/15 bg-white text-navy")}
              >
                <p className={cn("label", i === 1 ? "text-gold-light" : "text-gold-dark")}>
                  {i === 1 ? "Coordinating role" : "Contributor"}
                </p>
                <h3 className="mt-3 font-display text-[24px] leading-tight">{p.title}</h3>
                <p className={cn("mt-3 text-[16px] leading-relaxed", i === 1 ? "text-white/75" : "text-graphite")}>{p.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-14">
            <p className="label mb-6 text-gold-dark">How findings came together</p>
            <FlowChain steps={rre.collaboration} />
          </div>
        </div>
      </section>

      {/* WHAT WE DELIVERED + OUR ROLE */}
      <section className="bg-bone py-24 md:py-32">
        <div className="wrap grid gap-20 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
          <div>
            <p className="pill mb-5 bg-white text-gold-dark">Deliverables</p>
            <h2 className="text-[clamp(30px,3.4vw,46px)] leading-tight text-navy">What we delivered</h2>
            <ul className="mt-10 grid border-l border-t border-navy/15 sm:grid-cols-2">
              {rre.delivered.map((d, i) => (
                <li key={d} className="flex items-start gap-4 border-b border-r border-navy/15 bg-white p-5">
                  <span
                    aria-hidden
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-[12px] text-gold-dark"
                  >
                    ✓
                  </span>
                  <span className="text-[16px] leading-snug text-navy">
                    <span className="sr-only">{i + 1}. </span>
                    {d}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="pill mb-5 bg-white text-gold-dark">Our role</p>
            <h2 className="text-[clamp(30px,3.4vw,46px)] leading-tight text-navy">A bridge between business and technology</h2>
            <p className="mt-6 border-l-2 border-gold pl-5 font-display text-[21px] leading-snug text-navy">{rre.ourRole}</p>
            <ol className="mt-10 border-t border-navy/20">
              {rre.responsibilities.map((it, i) => (
                <li key={it.title} className="grid grid-cols-[40px_1fr] gap-4 border-b border-navy/20 py-6">
                  <span className="font-mono text-[12px] text-gold-dark">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-[21px] leading-tight text-navy">{it.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-graphite">{it.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* CLARITY + SYSTEMS THINKING */}
      <section className="blueprint relative bg-midnight py-24 text-white md:py-32">
        <div className="wrap">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <SectionHeading tone="dark" eyebrow="The business analyst story" title="From complexity to clarity" />
            <div className="space-y-4 text-[17px] leading-relaxed text-white/70 lg:pt-14">
              {rre.clarityText.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <div className="mt-14">
            <FlowChain steps={rre.clarity} tone="dark" />
          </div>
          <div className="mt-24 grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-24">
            <div>
              <p className="label text-gold-light">Systems thinking</p>
              <h3 className="mt-3 text-balance text-[clamp(28px,3.4vw,46px)] leading-tight">
                Business analysis connects the whole picture
              </h3>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/70">{rre.systemsThinking.intro}</p>
              <dl className="mt-8 max-w-xl divide-y divide-white/10 border-y border-white/10">
                {rre.systemsThinking.connections.map((c) => (
                  <div key={c.node} className="grid gap-1 py-3.5 sm:grid-cols-[140px_1fr] sm:gap-6">
                    <dt className="label pt-1 text-gold-light">{c.node}</dt>
                    <dd className="text-[16px] leading-relaxed text-white/80">{c.text}</dd>
                  </div>
                ))}
              </dl>
              <ConceptualNote tone="dark">{rre.disclaimers.conceptual}</ConceptualNote>
            </div>
            <SystemsRadial center={rre.systemsThinking.center} nodes={rre.systemsThinking.nodes} />
          </div>
          <Reveal>
            <figure className="mt-20 grid overflow-hidden border border-white/15 lg:grid-cols-[1.4fr_1fr]">
              <SlotImage
                src="/images/boardroom-team-london.jpg"
                alt="Business and technology stakeholders reviewing findings around a boardroom table in London"
                className="aspect-[16/10] w-full lg:aspect-auto lg:min-h-[380px]"
              />
              <figcaption className="flex flex-col justify-center gap-5 bg-white/[0.03] p-8 md:p-10">
                <p className="label text-gold-light">A shared starting point</p>
                <p className="font-display text-[clamp(22px,2.2vw,30px)] leading-snug">
                  One structured view of architecture, integrations and document storage.
                </p>
                <p className="text-[16px] leading-relaxed text-white/65">
                  Current process flows were documented for Policy &amp; Claims and Finance, giving business and technology teams a shared
                  starting point for the recommendations and execution sequence.
                </p>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* IMPACT */}
      <section className="bg-paper py-24 md:py-32">
        <div className="wrap">
          <SectionHeading eyebrow="Final impact" title={rre.impact.title} intro={rre.impact.intro} />
          <div className="mt-12">
            <FlowChain steps={rre.impact.steps} />
          </div>
          <Reveal>
            <div className="mt-16 grid gap-6 bg-navy p-8 text-white md:grid-cols-[180px_1fr] md:p-12">
              <p className="label text-gold-light">The result</p>
              <div className="space-y-5">
                {rre.impact.result.map((p, i) => (
                  <p
                    key={p}
                    className={cn(
                      i === 0 ? "font-display text-[clamp(22px,2.4vw,32px)] leading-snug" : "text-[17px] leading-relaxed text-white/75",
                    )}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
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
