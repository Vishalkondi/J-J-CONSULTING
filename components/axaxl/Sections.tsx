import Link from "next/link";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { LayerFlow } from "../regulatory/LayerFlow";
import { Timeline } from "../regulatory/Timeline";
import { Tags } from "../Tags";
import { axaXl as a } from "@/data/axa-xl";

export function BusinessLandscape() {
  return (
    <section className="bg-bone py-24 md:py-28" aria-labelledby="landscape-title">
      <div className="wrap">
        <div id="landscape-title">
          <SectionHeading eyebrow="Business landscape" title="Enterprise insurance across the value chain" />
        </div>
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {a.domains.map((d) => (
            <li key={d}>
              <Reveal className="h-full">
                <article className="group h-full border border-navy/15 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-navy/30 hover:shadow-[0_18px_40px_-20px_rgba(12,32,56,0.35)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                  <span aria-hidden className="block h-px w-8 bg-gold transition-all duration-500 group-hover:w-14" />
                  <h3 className="mt-5 font-display text-[20px] leading-tight text-navy">{d}</h3>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** One checkmark glyph, reused for every achievement line across all three projects. */
function Check({ tone }: { tone: "light" | "dark" }) {
  return (
    <svg
      aria-hidden
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`mt-0.5 shrink-0 ${tone === "dark" ? "text-gold-light" : "text-gold-dark"}`}
    >
      <path d="M5 12l5 5L19 7" />
    </svg>
  );
}

/**
 * Three photos per project header strip, drawn from the site's existing vetted photo set
 * (no new images, no AI-generated collage). Purely decorative — carries no factual claim.
 */
// Photo per project, only where one is available that isn't already used as another page's hero
// elsewhere on the site (no repeated images sitewide — see the sitewide photo-assignment note in
// data/howden-hx.ts). Projects 01 and 02 intentionally have none right now rather than reuse the
// Technology Training / Workforce Solutions service-page photos; the card layout already supports
// this (the photo block is conditional).
const projectPhotos: Record<string, { src: string; alt: string }> = {
  "03": {
    src: "/images/boardroom-presentation-large.jpg",
    alt: "A presenter briefing a large boardroom, with the London skyline through floor-to-ceiling windows",
  },
};

function ProjectCard({ p, tone }: { p: (typeof a.projects)[number]; tone: "light" | "dark" }) {
  const dark = tone === "dark";
  const photo = projectPhotos[p.index];
  return (
    <section
      id={`project-${p.index}`}
      className={dark ? "blueprint scroll-mt-24 bg-midnight py-24 text-white md:py-32" : "scroll-mt-24 bg-paper py-24 md:py-32"}
      aria-labelledby={`proj-${p.index}-title`}
    >
      <div className="wrap">
        {/* PROJECT PHOTO */}
        {photo && (
          <Reveal>
            <div className="mb-12 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photo.src} alt={photo.alt} loading="lazy" className="aspect-[21/9] w-full object-cover" />
            </div>
          </Reveal>
        )}

        <p className={dark ? "label text-gold-light" : "label text-gold-dark"}>Project {p.index}</p>
        <h2
          id={`proj-${p.index}-title`}
          className={
            dark
              ? "mt-5 max-w-3xl text-[clamp(30px,4vw,52px)] leading-[1.06]"
              : "mt-5 max-w-3xl text-[clamp(30px,4vw,52px)] leading-[1.06] text-navy"
          }
        >
          {p.title}
        </h2>
        <p className={dark ? "mt-3 font-mono text-[12px] text-white/55" : "mt-3 font-mono text-[12px] text-graphite"}>{p.period}</p>

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-16">
          <div>
            <p
              className={
                dark
                  ? "font-display text-[clamp(48px,6vw,80px)] leading-none text-gold-light"
                  : "font-display text-[clamp(48px,6vw,80px)] leading-none text-navy"
              }
            >
              {p.value}
            </p>
            <p className={dark ? "mt-2 text-[13px] text-white/60" : "mt-2 text-[13px] text-graphite"}>Programme value · team of {p.team}</p>
            {p.domains.length > 0 && (
              <div className="mt-8">
                <Tags items={[...p.domains]} label={`${p.title} business areas`} />
              </div>
            )}
            <div className="mt-8">
              <Tags items={[...p.technology]} label={`${p.title} technology`} />
            </div>
          </div>
          <div>
            <Reveal>
              <LayerFlow layers={p.flow.map((label) => ({ label }))} tone={tone} label={`${p.title} data flow`} />
            </Reveal>
            <Reveal delay={0.1}>
              <p className={dark ? "label mt-10 text-white/55" : "label mt-10 text-graphite"}>Key achievements</p>
              <ul className={dark ? "mt-4 grid gap-3 sm:grid-cols-2" : "mt-4 divide-y divide-navy/15 border-y border-navy/15"}>
                {p.achievements.map((ach) =>
                  dark ? (
                    <li
                      key={ach}
                      className="flex items-start gap-2.5 border border-white/15 bg-white/[0.03] p-5 text-[14.5px] leading-relaxed text-white/85"
                    >
                      <Check tone="dark" />
                      <span>{ach}</span>
                    </li>
                  ) : (
                    <li key={ach} className="flex items-start gap-2.5 py-4 text-[16px] leading-relaxed text-charcoal">
                      <Check tone="light" />
                      <span>{ach}</span>
                    </li>
                  ),
                )}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProjectShowcase() {
  const tones: Array<"dark" | "light"> = ["dark", "light", "dark"];
  return (
    <>
      {a.projects.map((p, i) => (
        <ProjectCard key={p.index} p={p} tone={tones[i]} />
      ))}
    </>
  );
}

export function RegulatoryFoundations() {
  return (
    <section className="bg-bone py-24 md:py-28" aria-labelledby="reg-title">
      <div className="wrap">
        <p className="label text-gold-dark">Data governance &amp; regulatory foundations</p>
        <h2 id="reg-title" className="mt-5 max-w-3xl text-[clamp(28px,3.6vw,46px)] leading-[1.1] text-navy">
          Supporting evolving regulatory requirements
        </h2>
        <ul className="mt-10 flex flex-wrap gap-3" aria-label="Regulatory frameworks">
          {a.regulatory.terms.map((t) => (
            <li key={t} className="border border-navy/25 bg-white px-5 py-2.5 font-display text-[18px] text-navy">
              {t}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-2xl text-[16px] leading-relaxed text-graphite">
          Laid the foundation and groundwork for meeting various compliance and regulatory requirements, which led to the initiation of
          wider projects to meet Solvency II, IFRS, PRA and Lloyd&rsquo;s regulatory requirements.
        </p>
      </div>
    </section>
  );
}

export function DeliveryLifecycle() {
  return (
    <section className="bg-paper py-24 md:py-28" aria-labelledby="life-title">
      <div className="wrap">
        <div id="life-title">
          <SectionHeading eyebrow="Delivery lifecycle" title="Discover to improve" />
        </div>
        <Timeline stages={a.lifecycle.map((l) => l.stage)} />
      </div>
    </section>
  );
}

export function BridgeSection() {
  return (
    <section className="blueprint bg-midnight py-24 text-white md:py-32" aria-labelledby="bridge-title">
      <div className="wrap">
        <p className="label text-gold-light">Bridging business &amp; technology</p>
        <h2 id="bridge-title" className="mt-5 max-w-3xl text-[clamp(28px,3.6vw,46px)] leading-[1.1]">
          Where the role sat
        </h2>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <div className="border border-white/20 p-7">
            <h3 className="label text-white/55">Business</h3>
            <Tags items={[...a.bridge.business]} label="Business stakeholders" />
          </div>
          <div className="border border-gold/60 bg-white/[0.04] p-7">
            <h3 className="label text-gold-light">{a.role}</h3>
            <Tags items={[...a.bridge.role]} label="Role activities" />
          </div>
          <div className="border border-white/20 p-7">
            <h3 className="label text-white/55">Technology</h3>
            <Tags items={[...a.bridge.technology]} label="Technology teams" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function TechStack() {
  return (
    <section className="bg-bone py-20 md:py-28" aria-labelledby="tech-title">
      <div className="wrap">
        <div id="tech-title">
          <SectionHeading eyebrow="Technology &amp; data ecosystem" title="Platforms and tools" />
        </div>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {a.techGroups.map((g) => (
            <div key={g.group}>
              <h3 className="label text-graphite">{g.group}</h3>
              <Tags items={[...g.items]} label={g.group} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const closingPills = ["Data foundations", "Regulatory groundwork", "Business partnership", "Delivery focus"];

export function AxaXlCta() {
  return (
    <section className="blueprint bg-midnight py-20 text-white md:py-28" aria-labelledby="cta-title">
      <div className="wrap">
        <div className="max-w-3xl">
          <h2 id="cta-title" className="text-[clamp(30px,4vw,52px)] leading-[1.08]">
            Connecting business strategy, data and technology
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-white/75">
            Working across business and technology teams to translate complex insurance requirements into practical data, reporting and
            transformation solutions.
          </p>
          <Link href="/case-studies" className="link-arrow mt-9 text-white">
            All case studies <span aria-hidden>→</span>
          </Link>
        </div>
        <ul className="mt-14 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/15 pt-8" aria-label="Themes of this engagement">
          {closingPills.map((p) => (
            <li key={p} className="text-[13px] tracking-wide text-white/60">
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
