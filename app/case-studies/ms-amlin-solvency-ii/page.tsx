import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ClientMark } from "@/components/ClientMark";
import { Reveal } from "@/components/Reveal";
import { Tags } from "@/components/Tags";
import { icons, pillarIcons } from "@/components/regulatory/Icons";
import { TomStepper } from "@/components/regulatory/TomStepper";
import { LayerFlow } from "@/components/regulatory/LayerFlow";
import { Timeline } from "@/components/regulatory/Timeline";
import { VisitMsAmlin } from "@/components/regulatory/ExternalLink";
import { company } from "@/data/site";
import { images } from "@/data/howden-hx";
import { MS_AMLIN_URL, msaSolvency as m } from "@/data/ms-amlin-solvency";

const url = `${company.url}/case-studies/${m.slug}`;

export const metadata: Metadata = {
  title: { absolute: m.seo.title },
  description: m.seo.description,
  alternates: { canonical: url },
  openGraph: { title: m.seo.title, description: m.seo.description, url, siteName: company.brand, locale: "en_GB", type: "article" },
  twitter: { card: "summary_large_image", title: m.seo.title, description: m.seo.description },
};

export default function MsAmlinSolvencyPage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="relative isolate overflow-hidden bg-midnight text-white" aria-labelledby="msa-title">
        <Image
          quality={92}
          src={m.scene.src}
          alt={m.scene.alt}
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[75%_center]"
        />
        <div
          className="absolute inset-0 -z-10 lg:hidden"
          aria-hidden
          style={{ background: "linear-gradient(180deg, rgba(8,18,31,0.9) 0%, rgba(8,18,31,0.94) 100%)" }}
        />
        <div
          className="absolute inset-0 -z-10 hidden lg:block"
          aria-hidden
          style={{
            background:
              "linear-gradient(90deg, rgba(8,18,31,0.97) 0%, rgba(8,18,31,0.9) 36%, rgba(8,18,31,0.45) 68%, rgba(8,18,31,0.25) 100%)",
          }}
        />
        <div className="wrap relative pb-14 pt-36 md:pt-44">
          <div className="max-w-2xl">
            <p className="label text-gold-light">{m.category}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href={MS_AMLIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MS Amlin website (opens in a new tab)"
                className="block transition-opacity duration-300 hover:opacity-90"
              >
                <ClientMark name={m.client} logo={m.logo} className="h-14 w-40 shrink-0" />
              </a>
              <VisitMsAmlin tone="dark" className="!px-5 !py-3" />
            </div>
            <h1 id="msa-title" className="mt-9 leading-[0.98]">
              <span className="block font-mono text-[clamp(14px,1.6vw,18px)] tracking-[0.2em] text-steel-light">
                {m.client.toUpperCase()}
              </span>
              <span className="mt-3 block text-[clamp(40px,6.4vw,92px)]">
                {m.title.split("\n").map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-[clamp(18px,1.8vw,24px)] leading-snug text-white/80">{m.tagline}</p>

            <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4" aria-label="Themes">
              {m.pillars.map((p) => {
                const Icon = pillarIcons[p];
                return (
                  <li key={p} className="group flex flex-col gap-3">
                    <span className="text-steel-light transition-colors duration-300 group-hover:text-gold-light">{Icon && <Icon />}</span>
                    <span className="text-[13.5px] leading-snug text-white/80">{p}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* 2. METRIC BAR */}
          <dl className="mt-14 grid grid-cols-2 overflow-hidden border border-white/25 bg-midnight/55 backdrop-blur-md lg:max-w-4xl lg:grid-cols-4">
            {m.metrics.map((x, i) => (
              <div
                key={x.label}
                className={`p-5 transition-colors duration-300 hover:bg-white/[0.06] md:p-6 ${i % 2 === 0 ? "border-r border-white/15" : ""} ${i < 2 ? "border-b border-white/15 lg:border-b-0" : ""} lg:border-r lg:border-white/15 lg:last:border-r-0`}
              >
                <dt className="mt-2 text-[12.5px] text-white/65">{x.label}</dt>
                <dd className="font-display text-[clamp(22px,2.4vw,34px)] leading-none">{x.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <p className="flex items-center gap-3 font-display text-[clamp(18px,1.8vw,24px)] text-white/90">
              <svg
                aria-hidden
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                className="text-steel-light"
              >
                <rect x="3" y="5" width="18" height="16" rx="1" />
                <path d="M3 10h18M8 3v4M16 3v4" />
              </svg>
              {m.role} · {m.period}
            </p>
            <p className="font-mono text-[11px] text-white/50">{m.scene.caption}</p>
          </div>
        </div>
      </section>

      {/* MARKETING STATEMENT */}
      <section className="bg-paper py-24 md:py-32" aria-labelledby="statement-title">
        <div className="wrap grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-24">
          <h2 id="statement-title" className="text-[clamp(32px,4.6vw,64px)] leading-[1.04] text-navy">
            From regulatory
            <br />
            complexity to
            <br />
            business clarity.
          </h2>
          <p className="self-end text-[19px] leading-relaxed text-graphite">
            A structured business-change approach connecting regulatory requirements, data quality, governance, systems and operating model
            design across the insurance environment.
          </p>
        </div>
      </section>

      {/* 4. TRANSFORMATION STORY */}
      <section className="bg-paper py-20 md:py-28" aria-labelledby="story-title">
        <div className="wrap">
          <p className="label text-gold-dark">Structure. Governance. Transformation.</p>
          <h2 id="story-title" className="mt-5 max-w-3xl text-[clamp(30px,4vw,56px)] leading-[1.06] text-navy">
            {m.story.title}
          </h2>
          <Timeline stages={m.story.stages} />
        </div>
      </section>

      {/* 5. ARCHITECTURE */}
      <section className="blueprint bg-midnight py-24 text-white md:py-32" aria-labelledby="arch-title">
        <div className="wrap grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_1.2fr] lg:gap-24">
          <div>
            <p className="label text-gold-light">Regulatory data. Business change.</p>
            <h2 id="arch-title" className="mt-5 text-[clamp(30px,4vw,54px)] leading-[1.06]">
              From data discovery to decision support
            </h2>
            <p className="mt-6 max-w-sm text-[16px] leading-relaxed text-white/65">
              Conceptual representation of how business data flowed toward regulatory reporting.
            </p>
          </div>
          <LayerFlow layers={m.architecture} tone="dark" label="Business to regulatory reporting, top to bottom" />
        </div>
      </section>

      {/* 6. SOLVENCY II FEATURE */}
      <section className="relative overflow-hidden bg-bone py-24 md:py-32" aria-labelledby="feat-title">
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]"
          preserveAspectRatio="none"
          viewBox="0 0 100 60"
        >
          {Array.from({ length: 12 }).map((_, r) => (
            <line key={`r${r}`} x1="0" x2="100" y1={5 + r * 5} y2={5 + r * 5} stroke="#0C2038" strokeWidth="0.15" />
          ))}
          {Array.from({ length: 9 }).map((_, c) => (
            <line key={`c${c}`} y1="0" y2="60" x1={10 + c * 10} x2={10 + c * 10} stroke="#0C2038" strokeWidth="0.15" />
          ))}
        </svg>
        <div className="wrap relative">
          <h2 id="feat-title" className="max-w-4xl text-[clamp(34px,5vw,72px)] leading-[1.03] text-navy">
            {m.feature.title}
          </h2>
          <ul className="mt-14 grid gap-px border border-navy/20 bg-navy/20 sm:grid-cols-2 lg:grid-cols-3">
            {m.feature.terms.map((t) => (
              <li key={t} className="group relative overflow-hidden bg-bone p-8 transition-colors duration-300 hover:bg-white">
                <span aria-hidden className="mb-6 block h-px w-8 bg-gold transition-all duration-500 group-hover:w-16" />
                <p className="font-display text-[clamp(22px,2.4vw,32px)] leading-tight text-navy">{t}</p>
                {/* Hover reveal on devices with a pointer; always visible on touch (no hover) and reduced-motion — see .tile-glossary in globals.css */}
                <p className="tile-glossary mt-3 max-h-0 overflow-hidden text-[14px] leading-snug text-graphite opacity-0 transition-all duration-300 group-hover:max-h-20 group-hover:opacity-100 motion-reduce:max-h-20 motion-reduce:opacity-100">
                  {m.featureGlossary[t]}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TARGET OPERATING MODEL */}
      <section className="blueprint bg-navy py-24 text-white md:py-32" aria-labelledby="tom-title">
        <div className="wrap">
          <p className="label text-gold-light">From current state to BAU</p>
          <h2 id="tom-title" className="mt-5 max-w-3xl text-[clamp(30px,4vw,54px)] leading-[1.06]">
            {m.tom.title}
          </h2>
          <TomStepper steps={m.tom.steps} />
        </div>
      </section>

      {/* 7. DATA GOVERNANCE */}
      <section className="bg-paper py-24 md:py-32" aria-labelledby="gov-title">
        <div className="wrap grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_1.2fr] lg:gap-24">
          <div>
            <p className="label text-gold-dark">Framework</p>
            <h2 id="gov-title" className="mt-5 text-[clamp(30px,4vw,54px)] leading-[1.06] text-navy">
              {m.governance.title}
            </h2>
            <p className="mt-6 max-w-sm text-[16px] leading-relaxed text-graphite">
              Conceptual framework connecting data discovery to reporting.
            </p>
          </div>
          <LayerFlow layers={m.governance.layers} tone="light" label="Data governance framework, top to bottom" />
        </div>
      </section>

      {/* 8. GDPR SCOPING */}
      <section className="blueprint bg-navy py-24 text-white md:py-32" aria-labelledby="gdpr-title">
        <div className="wrap grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_1.2fr] lg:gap-24">
          <div>
            <p className="label text-gold-light">{m.gdpr.kicker}</p>
            <h2 id="gdpr-title" className="mt-5 text-[clamp(30px,4vw,54px)] leading-[1.06]">
              {m.gdpr.title}
            </h2>
            <p className="mt-6 max-w-sm font-mono text-[12px] text-white/60">{m.gdpr.note}</p>
          </div>
          <LayerFlow layers={m.gdpr.layers} tone="dark" label="GDPR data discovery and scoping, top to bottom" />
        </div>
      </section>

      {/* 9. TECHNOLOGY */}
      <section className="bg-paper py-20 md:py-24" aria-labelledby="tech-title">
        <div className="wrap">
          <h2 id="tech-title" className="label text-graphite">
            Technology ecosystem
          </h2>
          <Tags items={[...m.technology]} label="Technology ecosystem" />
        </div>
      </section>

      {/* 10. BUSINESS AREAS */}
      <section className="bg-bone py-20 md:py-28" aria-labelledby="areas-title">
        <div className="wrap">
          <h2 id="areas-title" className="max-w-2xl text-[clamp(30px,4vw,54px)] leading-[1.08] text-navy">
            One transformation. Multiple business domains.
          </h2>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {m.areas.map((a) => {
              const Icon = icons[a];
              return (
                <li key={a}>
                  <Reveal className="h-full">
                    <article className="group relative isolate flex aspect-[4/5] flex-col justify-end overflow-hidden border border-navy/15 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(12,32,56,0.45)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                      <Image
                        src={images.office.src}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 20vw, 50vw"
                        className="-z-20 object-cover transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transform-none"
                      />
                      <div className="absolute inset-0 -z-10 bg-navy/55" aria-hidden />
                      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy/95 via-navy/40 to-transparent" aria-hidden />
                      <span className="text-white/85">{Icon && <Icon />}</span>
                      <h3 className="mt-5 font-display text-[22px] leading-tight text-white">{a}</h3>
                      <p className="mt-1.5 text-[13px] leading-snug text-white/70">{m.areaDescriptors[a]}</p>
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* 11. LEADERSHIP */}
      <section className="bg-paper py-24 md:py-32" aria-labelledby="lead-title">
        <div className="wrap grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_1.2fr] lg:gap-24">
          <div>
            <p className="label text-gold-dark">Connecting the work</p>
            <h2 id="lead-title" className="mt-5 text-[clamp(30px,4vw,54px)] leading-[1.06] text-navy">
              {m.leadership.title}
            </h2>
          </div>
          <LayerFlow layers={m.leadership.layers} tone="light" link="swap" label="Business users to service transition" />
        </div>
      </section>

      {/* 12. CLOSING CTA */}
      <section className="blueprint bg-midnight py-24 text-white md:py-32" aria-labelledby="close-title">
        <div className="wrap">
          <h2 id="close-title" className="max-w-4xl text-[clamp(32px,5vw,68px)] leading-[1.04]">
            {m.closing.title}
          </h2>
          <p className="mt-7 max-w-2xl text-[18px] leading-relaxed text-white/70">{m.closing.text}</p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/case-studies" className="btn btn-gold">
              Explore case studies <span aria-hidden>→</span>
            </Link>
            <VisitMsAmlin tone="dark" />
          </div>
          <p className="mt-12 font-mono text-[12px] text-white/55">
            Also at MS Amlin:{" "}
            <Link href="/case-studies/ms-amlin" className="underline underline-offset-4 hover:text-white">
              System Strategy &amp; Governance Programme, 2019 – 2020
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
