"use client";
import Link from "next/link";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { LayerFlow } from "../regulatory/LayerFlow";
import { Timeline } from "../regulatory/Timeline";
import { Tags } from "../Tags";
import { hastings as h } from "@/data/hastings";

export function Challenge() {
  return (
    <section id="overview" className="scroll-mt-24 bg-paper py-24 md:py-32" aria-labelledby="challenge-title">
      <div className="wrap grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_1.1fr] lg:gap-24">
        <div>
          <p className="label text-red-600">Business challenge</p>
          <h2 id="challenge-title" className="mt-5 text-[clamp(30px,4vw,52px)] leading-[1.06] text-navy">
            {h.challenge.title}
          </h2>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-graphite">{h.challenge.text}</p>
        </div>
        <LayerFlow layers={h.challenge.flow.map((label) => ({ label }))} tone="light" label="Regulation to business change" />
      </div>
    </section>
  );
}

export function BusinessLandscape() {
  return (
    <section className="bg-bone py-24 md:py-28" aria-labelledby="landscape-title">
      <div className="wrap">
        <div id="landscape-title">
          <SectionHeading eyebrow="Business landscape" title="Connected across the insurance value chain" />
        </div>
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {h.businessAreas.map((a) => (
            <li key={a.name}>
              <Reveal className="h-full">
                <article className="group h-full border border-navy/15 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-navy/30 hover:shadow-[0_18px_40px_-20px_rgba(12,32,56,0.35)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                  <span aria-hidden className="block h-px w-8 bg-red-600 transition-all duration-500 group-hover:w-14" />
                  <h3 className="mt-5 font-display text-[22px] leading-tight text-navy">{a.name}</h3>
                  <p className="mt-2 text-[14px] leading-snug text-graphite">{a.note}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function SolvencyProject() {
  const p = h.projects[0];
  return (
    <section id="solvency-ii" className="blueprint scroll-mt-24 bg-midnight py-24 text-white md:py-32" aria-labelledby="proj1-title">
      <div className="wrap">
        <p className="label text-gold-light">Project 01</p>
        <h2 id="proj1-title" className="mt-5 max-w-3xl text-[clamp(32px,4.4vw,60px)] leading-[1.05]">
          {p.title}
        </h2>
        <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-white/70">
          From regulatory requirements to a sustainable reporting and operating model.
        </p>

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-16">
          <div>
            <p className="font-display text-[clamp(64px,8vw,110px)] leading-none text-gold-light">{h.qrtCount}</p>
            <p className="mt-2 text-[14px] text-white/60">QRT reports delivered</p>
            <div className="mt-8">
              <Tags items={[...p.technology]} label="Solvency II technology" />
            </div>
          </div>
          <Reveal>
            <ul className="grid gap-3 sm:grid-cols-2">
              {p.achievements.map((a) => (
                <li key={a} className="border border-white/15 bg-white/[0.03] p-5 text-[15px] leading-relaxed text-white/85">
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function RegulatoryFlow() {
  return (
    <section className="bg-paper py-24 md:py-28" aria-labelledby="flow-title">
      <div className="wrap">
        <div id="flow-title">
          <SectionHeading eyebrow="Regulatory data flow" title="From internal systems to regulatory submission" />
        </div>
        <div className="mt-14">
          <LayerFlow layers={h.dataFlow.map((label) => ({ label }))} tone="light" label="Internal systems to PRA, FSC and Gibraltar" />
        </div>
      </div>
    </section>
  );
}

export function RegulatoryReporting() {
  return (
    <section className="bg-bone py-24 md:py-28" aria-labelledby="reg-title">
      <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,0.7fr)_1.3fr] lg:gap-20">
        <h2 id="reg-title" className="text-[clamp(40px,6vw,84px)] leading-[0.95] text-navy">
          Solvency
          <br />
          II
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          {h.regulatoryTerms.map((t) => (
            <li key={t.term}>
              <Reveal className="h-full">
                <article className="h-full border border-navy/15 bg-white p-6">
                  <p className="font-display text-[24px] text-navy">{t.term}</p>
                  <p className="mt-2 text-[14px] leading-snug text-graphite">{t.note}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function OperatingModel() {
  return (
    <section className="bg-paper py-24 md:py-28" aria-labelledby="tom-title">
      <div className="wrap">
        <p className="label text-red-600">Target Operating Model</p>
        <h2 id="tom-title" className="mt-5 max-w-2xl text-[clamp(28px,3.6vw,46px)] leading-[1.1] text-navy">
          {h.tom.title}
        </h2>
        <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-graphite">{h.tom.text}</p>
        <Timeline stages={h.tom.stages} />
      </div>
    </section>
  );
}

export function Responsibilities() {
  return (
    <section className="bg-bone py-24 md:py-28" aria-labelledby="resp-title">
      <div className="wrap">
        <div id="resp-title">
          <SectionHeading eyebrow="Key responsibilities" title="Role in practice" />
        </div>
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {h.responsibilityGroups.map((g, i) => (
            <li key={g.title}>
              <Reveal className="h-full">
                <article className="h-full border border-navy/15 bg-white p-7 transition duration-300 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                  <span className="font-mono text-[12px] text-red-600">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 font-display text-[20px] leading-tight text-navy">{g.title}</h3>
                  <ul className="mt-4 space-y-1.5 text-[14px] text-graphite">
                    {g.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function UnderwritingProject() {
  const p = h.projects[1];
  return (
    <section id="underwriting" className="scroll-mt-24 bg-paper py-24 md:py-28" aria-labelledby="proj2-title">
      <div className="wrap">
        <p className="label text-red-600">Project 02</p>
        <h2 id="proj2-title" className="mt-5 max-w-3xl text-[clamp(30px,3.8vw,52px)] leading-[1.08] text-navy">
          {p.title}
        </h2>
        <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-graphite">
          Evaluating strategic insurance technology platforms across the underwriting value chain.
        </p>
        <ul className="mt-12 grid gap-4 sm:grid-cols-3">
          {p.technology.map((v) => (
            <li key={v}>
              <Reveal className="h-full">
                <div className="flex h-full items-center justify-center border border-navy/20 bg-bone p-10 text-center">
                  <span className="font-display text-[22px] text-navy">{v}</span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <h3 className="label text-graphite">Business areas</h3>
          <Tags items={[...p.domains]} label="Underwriting platform business areas" />
        </div>
      </div>
    </section>
  );
}

export function VendorEvaluation() {
  return (
    <section className="bg-bone py-24 md:py-28" aria-labelledby="vendor-title">
      <div className="wrap">
        <div id="vendor-title">
          <SectionHeading eyebrow="Vendor evaluation" title="A documented path to system selection" />
        </div>
        <ol className="mt-14 flex flex-wrap items-center gap-x-2 gap-y-4" aria-label="Vendor evaluation journey">
          {h.vendorEvaluation.map((s, i) => (
            <li key={s} className="flex items-center gap-2">
              <span className="border border-navy/25 bg-white px-4 py-2 font-mono text-[13px] text-navy">{s}</span>
              {i < h.vendorEvaluation.length - 1 && (
                <span aria-hidden className="text-red-600">
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
        <p className="mt-10 max-w-2xl text-[17px] leading-relaxed text-graphite">
          Guidewire was selected as the vendor solution for implementation, following the RFP and evaluation process.
        </p>
      </div>
    </section>
  );
}

export function TechnologyStack() {
  const groups = [
    { title: "Core systems", items: h.projects[0].technology },
    { title: "Insurance platform evaluation", items: h.projects[1].technology },
    { title: "Regulatory", items: ["Solvency II", ...h.regulatoryTerms.map((t) => t.term)] },
  ];
  return (
    <section className="blueprint bg-midnight py-20 text-white md:py-28" aria-labelledby="tech-title">
      <div className="wrap">
        <h2 id="tech-title" className="label text-gold-light">
          Technology &amp; business systems
        </h2>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="font-display text-[20px] text-white/90">{g.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label={g.title}>
                {g.items.map((it) => (
                  <li key={it} className="border border-white/25 px-3 py-1.5 font-mono text-[12px] text-white/85">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Capabilities() {
  const items = [
    { n: "01", t: "Business strategy", d: "Connecting regulatory requirements to a future-state operating process." },
    { n: "02", t: "Regulatory change", d: "Solvency II compliance and reporting for PRA, FSC and Gibraltar." },
    { n: "03", t: "Vendor strategy", d: "RFP and evaluation across regulatory and underwriting platforms." },
    { n: "04", t: "Programme delivery", d: "Scope, resourcing, risk and reporting from initiation to handover." },
    { n: "05", t: "Technology enablement", d: "Selection and use of Tagetik, Aon ASTRA and SAP." },
    { n: "06", t: "Change & adoption", d: "Training, documentation and handover into BAU." },
  ];
  return (
    <section className="bg-paper py-24 md:py-32" aria-labelledby="cap-title">
      <div className="wrap">
        <div id="cap-title">
          <SectionHeading eyebrow="Business analysis capabilities" title="Connecting strategy with execution" />
        </div>
        <ul className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((c) => (
            <li key={c.n}>
              <span className="font-mono text-[13px] text-red-600">{c.n}</span>
              <h3 className="mt-3 font-display text-[22px] leading-tight text-navy">{c.t}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-graphite">{c.d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Impact() {
  const stats = [
    { v: h.qrtCount, l: "QRT reports" },
    { v: h.value, l: "Project value" },
    { v: h.team, l: "Team members" },
    { v: "1", l: "Target Operating Model" },
  ];
  return (
    <section className="blueprint bg-midnight py-24 text-white md:py-32" aria-labelledby="impact-title">
      <div className="wrap">
        <h2 id="impact-title" className="max-w-3xl text-[clamp(30px,4.4vw,58px)] leading-[1.06]">
          Building a sustainable regulatory capability
        </h2>
        <dl className="mt-14 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l}>
              <dd className="font-display text-[clamp(32px,4vw,56px)] leading-none text-gold-light">{s.v}</dd>
              <dt className="mt-2 text-[13px] text-white/60">{s.l}</dt>
            </div>
          ))}
        </dl>
        <p className="mt-14 max-w-2xl text-[18px] leading-relaxed text-white/75">
          Regulatory reporting was transitioned into an ongoing BAU capability supported by defined processes, training, documentation and
          operating-model design.
        </p>
      </div>
    </section>
  );
}

export function HastingsCta() {
  return (
    <section className="bg-paper py-24 md:py-32" aria-labelledby="hcta-title">
      <div className="wrap">
        <h2 id="hcta-title" className="max-w-3xl text-[clamp(30px,4vw,52px)] leading-[1.08] text-navy">
          Complex insurance transformation, structured for business.
        </h2>
        <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-graphite">
          Business analysis, regulatory change, technology evaluation and delivery expertise across the insurance value chain.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link href="/experience" className="btn btn-navy">
            Explore experience <span aria-hidden>→</span>
          </Link>
          <Link href="/case-studies" className="btn btn-line">
            Back to case studies
          </Link>
        </div>
      </div>
    </section>
  );
}
