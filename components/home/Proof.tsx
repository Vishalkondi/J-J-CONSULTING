import Image from "next/image";
import Link from "next/link";
import { ClientMark } from "../ClientMark";
import { SectionHeading } from "../SectionHeading";
import { SlotImage } from "../SlotImage";
import { CaseVisual } from "../marketing/CaseVisual";
import { rreVisualData } from "../marketing/rre-visual";
import { currentClients, previousClients } from "@/data/site";
import { rre } from "@/data/renaissance-re";
import { featuredCases } from "@/data/case-studies";

export function CurrentClients() {
  const [w, l] = currentClients;
  return (
    <section className="bg-paper py-24 md:py-36" aria-labelledby="cur-title" id="clients">
      <div className="wrap">
        <div id="cur-title">
          <SectionHeading eyebrow="Current / recent client experience" title="Working with leading specialty insurers" />
        </div>
        <div className="mt-16 grid gap-10 border-t border-navy/20 pt-12 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-20">
          <ClientMark name={w.name} logo={w.logo} className="aspect-[4/3] w-full border border-navy/10" />
          <div>
            <p className="label text-gold-dark">
              {w.role} · {w.period}
            </p>
            <h3 className="mt-4 text-[clamp(28px,3.4vw,46px)] leading-[1.1] text-navy">{w.project}</h3>
            <div className="mt-10 grid gap-10 md:grid-cols-2">
              <div>
                <p className="label text-graphite">Business areas</p>
                <ul className="mt-4 space-y-2 text-[16px] text-charcoal">
                  {w.areas.map((a) => (
                    <li key={a} className="border-b border-navy/10 pb-2">
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="label text-graphite">Documented systems</p>
                <ul className="mt-4 space-y-2 font-mono text-[13px] text-charcoal">
                  {w.systems.map((a) => (
                    <li key={a} className="border-b border-navy/10 pb-2">
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Link href="/case-studies/westfield-specialty" className="link-arrow mt-10 text-navy">
              Westfield Specialty engagement <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        <div className="mt-16 grid items-center gap-8 border-y border-navy/20 py-10 md:grid-cols-[minmax(0,420px)_1fr] lg:gap-20">
          <ClientMark name={l.name} logo={l.logo} className="aspect-[16/7] w-full border border-navy/10" />
          <div>
            <h3 className="text-[32px] leading-tight text-navy">
              {l.website ? (
                <a
                  href={l.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-navy/25 underline-offset-4 transition-colors hover:decoration-navy"
                >
                  {l.name}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : (
                l.name
              )}
            </h3>
            <p className="label mt-3 text-graphite">Current / recent client</p>
          </div>
        </div>
      </div>
    </section>
  );
}

type PreviousClient = (typeof previousClients)[number];

const initials = (name: string) =>
  name
    .replace(/(Corp|Inc|Group)\.?$/i, "")
    .split(/\s+/)
    .filter((w) => /^[A-Z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

const country = (location: string) => location.split(",").pop()!.trim();

/** Headline figures derived from the data, so they stay correct when a client is added or edited. */
function summarise(clients: PreviousClient[]) {
  const millions = clients.reduce((sum, c) => sum + (c.value ? parseFloat(c.value.replace(/[^\d.]/g, "")) : 0), 0);
  const undisclosed = clients.some((c) => !c.value);
  return [
    { label: "Programmes", value: String(clients.length) },
    { label: "Consultants deployed", value: String(clients.reduce((sum, c) => sum + c.team, 0)) },
    { label: "Combined value", value: `US$${millions.toFixed(1)}m${undisclosed ? "+" : ""}` },
    { label: "Countries", value: String(new Set(clients.map((c) => country(c.location))).size) },
  ];
}

function ClientLogoPlate({ client: c, className }: { client: PreviousClient; className: string }) {
  const mark = (
    <span className="absolute inset-0 flex items-center justify-center font-display text-[22px] text-navy" aria-hidden>
      {initials(c.name)}
    </span>
  );
  return (
    <div className={`relative flex items-center justify-center bg-white ${className}`}>
      {"logo" in c && c.logo ? (
        <SlotImage
          src={c.logo}
          alt={`${c.name} logo`}
          fit="contain"
          className="h-14 w-40 bg-white transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transition-none"
          fallback={mark}
        />
      ) : (
        <span className="relative h-14 w-14">{mark}</span>
      )}
    </div>
  );
}

const TeamIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-3.5 w-3.5" aria-hidden>
    <circle cx="7.5" cy="7" r="2.75" />
    <path d="M2.5 16c0-2.8 2.2-4.5 5-4.5s5 1.7 5 4.5" strokeLinecap="round" />
    <circle cx="14" cy="7.5" r="2.25" />
    <path d="M13.5 11.6c2.3.1 4 1.6 4 4.4" strokeLinecap="round" />
  </svg>
);

const ValueIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-3.5 w-3.5" aria-hidden>
    <path d="M3 15.5 8 10l3 3 6-7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13 6h4v4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-3.5 w-3.5 shrink-0" aria-hidden>
    <path d="M10 17.5s5.5-5 5.5-9.5a5.5 5.5 0 0 0-11 0c0 4.5 5.5 9.5 5.5 9.5Z" strokeLinejoin="round" />
    <circle cx="10" cy="8" r="2" />
  </svg>
);

function ClientStats({ client: c, dark }: { client: PreviousClient; dark: boolean }) {
  const tile = dark ? "border-white/10 bg-white/[0.06]" : "border-navy/10 bg-bone/60";
  const muted = dark ? "text-white/55" : "text-graphite";
  const figure = dark ? "text-white" : "text-navy";
  const accent = dark ? "text-gold-light" : "text-gold-dark";
  return (
    <dl className="grid grid-cols-2 gap-2.5">
      <div className={`rounded-xl border px-4 py-3 ${tile}`}>
        <dt className={`label flex items-center gap-1.5 ${muted}`}>
          <span className={accent}>
            <TeamIcon />
          </span>
          Team
        </dt>
        <dd className={`mt-2 font-display text-[22px] leading-none ${figure}`}>{c.team}</dd>
      </div>
      <div className={`rounded-xl border px-4 py-3 ${tile}`}>
        <dt className={`label flex items-center gap-1.5 ${muted}`}>
          <span className={accent}>
            <ValueIcon />
          </span>
          Value
        </dt>
        <dd className={`mt-2 leading-none ${c.value ? `font-display text-[22px] ${figure}` : `pt-1 text-[13px] ${muted}`}`}>
          {c.value ? c.value.replace(" million", "m") : "Undisclosed"}
        </dd>
      </div>
    </dl>
  );
}

function AreaChips({ areas, max, dark }: { areas: string[]; max?: number; dark: boolean }) {
  const shown = max ? areas.slice(0, max) : areas;
  const more = areas.length - shown.length;
  const chip = dark ? "border-white/15 bg-white/[0.04] text-white/75" : "border-navy/10 bg-bone/50 text-graphite";
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Delivery areas">
      {shown.map((a) => (
        <li key={a} className={`rounded-full border px-2.5 py-1 font-mono text-[10.5px] ${chip}`}>
          {a}
        </li>
      ))}
      {more > 0 && (
        <li className={`px-1.5 py-1 font-mono text-[10.5px] ${dark ? "text-gold-light" : "text-gold-dark"}`}>+{more} more</li>
      )}
    </ul>
  );
}

function FeaturedClientCard({ client: c }: { client: PreviousClient }) {
  return (
    <li className="sm:col-span-2">
      <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-navy-700 via-navy to-midnight p-6 text-white shadow-[0_24px_60px_-30px_rgba(12,32,56,0.7)] md:p-8">
        {/* Grid on its own layer: .blueprint is a background-image and would replace the gradient. */}
        <div className="blueprint pointer-events-none absolute inset-0" aria-hidden />
        <div className="relative flex items-start justify-between gap-4">
          <ClientLogoPlate client={c} className="h-20 w-48 rounded-xl shadow-[0_16px_40px_-18px_rgba(0,0,0,0.6)]" />
          <div className="flex flex-col items-end gap-2.5">
            <span className="rounded-full border border-gold/50 bg-gold/10 px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.14em] text-gold-light">
              Largest programme
            </span>
            <span className="label text-white/55">{country(c.location)}</span>
          </div>
        </div>

        <h3 className="relative mt-7 font-display text-[30px] leading-tight md:text-[36px]">{c.name}</h3>
        <p className="relative mt-2 flex items-center gap-1.5 text-[13px] text-white/60">
          <PinIcon />
          {c.location}
        </p>
        <p className="relative mt-4 max-w-md text-[16px] leading-relaxed text-white/85">{c.project}</p>
        <div className="relative mt-6">
          <AreaChips areas={c.areas} dark />
        </div>
        <div className="relative mt-auto pt-8">
          <ClientStats client={c} dark />
        </div>
      </article>
    </li>
  );
}

function PreviousClientCard({ client: c }: { client: PreviousClient }) {
  return (
    <li>
      <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[0_10px_30px_-22px_rgba(12,32,56,0.35)] transition duration-300 hover:-translate-y-1 hover:border-navy/20 hover:shadow-[0_22px_44px_-24px_rgba(12,32,56,0.4)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
        {/* gold accent that sweeps across on hover */}
        <span
          className="absolute inset-x-0 top-0 z-10 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-gold to-gold-light transition-transform duration-500 group-hover:scale-x-100 motion-reduce:transition-none"
          aria-hidden
        />
        <div className="relative border-b border-navy/[0.07]">
          <ClientLogoPlate client={c} className="h-28" />
          <span className="label absolute right-4 top-3.5 text-gold-dark">{country(c.location)}</span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-[22px] leading-tight text-navy">{c.name}</h3>
          <p className="mt-1.5 flex items-center gap-1.5 text-[12.5px] text-graphite">
            <PinIcon />
            {c.location}
          </p>
          <p className="mt-4 text-[14.5px] leading-relaxed text-charcoal">{c.project}</p>
          <div className="mt-4">
            <AreaChips areas={c.areas} max={3} dark={false} />
          </div>
          <div className="mt-auto pt-6">
            <ClientStats client={c} dark={false} />
          </div>
        </div>
      </article>
    </li>
  );
}

export function PreviousClients() {
  // Lead with the largest programme; spanning two columns also closes the gap a 7-card grid would leave.
  const [lead, ...rest] = [...previousClients].sort((a, b) => b.team - a.team);
  return (
    <section className="bg-bone py-24 md:py-32" aria-labelledby="prev-title">
      <div className="wrap">
        <div id="prev-title">
          <SectionHeading
            eyebrow="Selected Former Clients"
            title="A record of large-scale enterprise delivery"
            intro="Historical engagements across business intelligence, data warehousing and Oracle E-Business Suite."
          />
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-navy/15 bg-navy/15 lg:grid-cols-4">
          {summarise(previousClients).map((s) => (
            <div key={s.label} className="bg-bone px-5 py-5 md:px-7">
              <dt className="label text-graphite">{s.label}</dt>
              <dd className="mt-2 font-display text-[30px] leading-none text-navy md:text-[36px]">{s.value}</dd>
            </div>
          ))}
        </dl>

        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <FeaturedClientCard client={lead} />
          {rest.map((c) => (
            <PreviousClientCard key={c.name} client={c} />
          ))}
        </ul>

        <Link href="/clients#previous" className="link-arrow mt-10 text-navy">
          Project details <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}

export function FeaturedCaseStudies({ limit }: { limit?: number }) {
  const cases = limit ? featuredCases.slice(0, limit) : featuredCases;
  return (
    <section className="bg-paper py-24 md:py-36" aria-labelledby="cs-title">
      <div className="wrap">
        <div id="cs-title">
          <SectionHeading eyebrow="Featured case studies" title="Business analysis in practice" />
        </div>
        <div className="mt-16 space-y-20">
          {cases.map((c, i) => {
            const flip = i % 2 === 1;
            const v = c.visual;
            return (
              <article
                key={c.href}
                className={`grid items-center gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-16 ${i > 0 ? "border-t border-navy/20 pt-16" : ""}`}
              >
                <Link
                  href={c.href}
                  className={`group block overflow-hidden rounded-2xl ${flip ? "lg:order-1" : ""}`}
                  aria-label={`${c.client} case study`}
                >
                  {v.kind === "image" ? (
                    <SlotImage
                      src={v.src}
                      alt={v.alt}
                      className={`${v.aspect ?? "aspect-[16/9]"} w-full transition-transform duration-700 group-hover:scale-[1.02]`}
                      fallback={
                        v.rreFallback ? (
                          <div className="absolute inset-0">
                            <CaseVisual variant="banner" data={rreVisualData} />
                          </div>
                        ) : undefined
                      }
                    />
                  ) : (
                    // Logo-only case studies get a branded panel (matching the RenaissanceRe banner) instead of a bare white box.
                    <div className="relative flex aspect-[16/9] w-full flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-navy-700 via-navy to-midnight p-7 text-white sm:p-10">
                      {/* Grid on its own layer: .blueprint is a background-image and would replace the gradient. */}
                      <div className="blueprint pointer-events-none absolute inset-0" aria-hidden />
                      <p className="label relative text-gold-light">Selected project experience</p>
                      <ClientMark
                        name={v.name}
                        logo={v.logo}
                        pad="p-4"
                        className="relative h-24 w-56 self-center shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] transition-transform duration-700 group-hover:scale-[1.03] sm:h-28 sm:w-64"
                      />
                      <div className="relative flex items-end justify-between gap-4 border-t border-white/15 pt-4">
                        <span className="font-display text-[22px] leading-tight">{v.name}</span>
                        <span className="font-mono text-[11px] tracking-[0.2em] text-white/60">
                          J<span className="text-gold">&amp;</span>J CONSULTING
                        </span>
                      </div>
                    </div>
                  )}
                </Link>
                <div className={flip ? "lg:order-2" : ""}>
                  <p className="label text-gold-dark">{c.label}</p>
                  <h3 className="mt-4 text-[clamp(30px,3.4vw,48px)] leading-[1.08] text-navy">
                    <span className="block">{c.client}</span>
                    {c.title}
                  </h3>
                  <p className="mt-6 text-[17px] leading-relaxed text-graphite">{c.blurb}</p>
                  <Link href={c.href} className="link-arrow mt-8 text-navy">
                    {c.cta} <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
        {limit && featuredCases.length > limit && (
          <Link href="/case-studies" className="btn btn-navy mt-16">
            All case studies <span aria-hidden>→</span>
          </Link>
        )}
      </div>
    </section>
  );
}

export function ProjectSpotlight() {
  return (
    <section className="blueprint relative overflow-hidden bg-midnight py-24 text-white md:py-32" aria-labelledby="spot-title">
      <div className="wrap">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div>
            <div id="spot-title">
              <SectionHeading tone="dark" eyebrow="Project spotlight" title="From assessment to action" intro={rre.impact.text} />
            </div>
            <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-6">
              {[
                ["Client", rre.client],
                ["Role", rre.role],
                ["Period", rre.period],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="label text-white/45">{k}</dt>
                  <dd className="mt-1.5 font-display text-[19px] text-white">{v}</dd>
                </div>
              ))}
            </dl>
            <Link href="/case-studies/renaissance-re" className="btn btn-gold mt-10">
              Explore the RenaissanceRe case study <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/images/team-lobby.jpg"
                alt="A delivery team gathered in a modern office with data dashboards on the walls"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-transparent to-transparent" aria-hidden />
            </div>
            <div className="absolute -bottom-6 left-4 max-w-[80%] rounded-2xl border border-white/15 bg-midnight/85 px-5 py-4 shadow-[0_24px_50px_-24px_rgba(0,0,0,0.9)] backdrop-blur-md sm:left-8">
              <p className="label text-gold-light">{rre.title}</p>
              <p className="mt-1.5 text-[14px] text-white/75">{rre.areas.join(" · ")}</p>
            </div>
          </div>
        </div>

        {/* four steps as a connected sequence */}
        <ol className="relative mt-20 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          <span
            className="absolute left-[12.5%] right-[12.5%] top-0 hidden h-px bg-gradient-to-r from-gold/0 via-gold/50 to-gold/0 lg:block"
            aria-hidden
          />
          {rre.achievements.map((a, i) => (
            <li
              key={a.title}
              className="relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.035] p-7 pt-0 transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-white/[0.06] motion-reduce:hover:translate-y-0"
            >
              <span className="-mt-[1px] flex h-14 w-14 -translate-y-1/2 items-center justify-center self-start rounded-full border border-gold/60 bg-midnight font-mono text-[13px] text-gold-light shadow-[0_0_24px_-6px_rgba(184,152,90,0.6)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="-mt-2 text-[22px] leading-tight text-white">{a.title}</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-white/65">{a.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
