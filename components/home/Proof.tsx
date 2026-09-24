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

function PreviousClientCard({ client: c, featured }: { client: PreviousClient; featured: boolean }) {
  const mark = (
    <span className="absolute inset-0 flex items-center justify-center font-display text-[17px] text-navy" aria-hidden>
      {initials(c.name)}
    </span>
  );
  return (
    <li className={featured ? "sm:col-span-2" : undefined}>
      <article className="group flex h-full flex-col border border-navy/15 bg-paper/70 p-6 transition duration-300 hover:-translate-y-0.5 hover:border-navy/30 hover:bg-white hover:shadow-[0_18px_40px_-24px_rgba(12,32,56,0.35)] md:p-7">
        <div className="flex items-start justify-between gap-4">
          {"logo" in c && c.logo ? (
            <SlotImage
              src={c.logo}
              alt={`${c.name} logo`}
              fit="contain"
              className="h-12 w-24 shrink-0 border border-navy/10 bg-white"
              imgClassName="p-2"
              fallback={mark}
            />
          ) : (
            <span className="relative h-12 w-12 shrink-0 border border-navy/10 bg-white">{mark}</span>
          )}
          <span className="label pt-1 text-right text-gold-dark">{country(c.location)}</span>
        </div>

        <h3 className={`mt-6 font-display leading-tight text-navy ${featured ? "text-[30px] md:text-[34px]" : "text-[23px]"}`}>{c.name}</h3>
        <p className="mt-1.5 text-[13px] text-graphite">{c.location}</p>
        <p className={`mt-4 leading-relaxed text-charcoal ${featured ? "max-w-md text-[16px]" : "text-[14.5px]"}`}>{c.project}</p>

        {featured && (
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Delivery areas">
            {c.areas.map((a) => (
              <li key={a} className="border border-navy/15 px-2.5 py-1 font-mono text-[11px] text-graphite">
                {a}
              </li>
            ))}
          </ul>
        )}

        <dl className="mt-auto flex gap-8 border-t border-navy/15 pt-5 [&:not(:first-child)]:mt-8">
          <div>
            <dt className="label text-graphite">Team</dt>
            <dd className="mt-1 font-display text-[22px] text-navy">{c.team}</dd>
          </div>
          <div>
            <dt className="label text-graphite">Value</dt>
            <dd className="mt-1 font-display text-[22px] text-navy">{c.value ?? "—"}</dd>
          </div>
        </dl>
        <span className="mt-5 block h-px w-8 bg-gold transition-all duration-500 group-hover:w-16" aria-hidden />
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

        <dl className="mt-12 grid grid-cols-2 gap-px border border-navy/15 bg-navy/15 lg:grid-cols-4">
          {summarise(previousClients).map((s) => (
            <div key={s.label} className="bg-bone px-5 py-5 md:px-7">
              <dt className="label text-graphite">{s.label}</dt>
              <dd className="mt-2 font-display text-[30px] leading-none text-navy md:text-[36px]">{s.value}</dd>
            </div>
          ))}
        </dl>

        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <PreviousClientCard client={lead} featured />
          {rest.map((c) => (
            <PreviousClientCard key={c.name} client={c} featured={false} />
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
                  className={`group block overflow-hidden ${flip ? "lg:order-1" : ""}`}
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
                    <ClientMark name={v.name} logo={v.logo} className="aspect-[16/9] w-full border border-navy/10" />
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
    <section className="blueprint relative bg-midnight py-24 text-white md:py-32" aria-labelledby="spot-title">
      <div className="wrap">
        <div id="spot-title">
          <SectionHeading tone="dark" eyebrow="Project spotlight" title="From assessment to action" intro={rre.impact.text} />
        </div>
        <ol className="mt-14 grid gap-px border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {rre.achievements.map((a, i) => (
            <li key={a.title} className="bg-midnight p-7">
              <span className="font-mono text-[12px] text-gold-light">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-5 text-[24px] leading-tight text-white">{a.title}</h3>
              <p className="mt-4 text-[14.5px] leading-relaxed text-white/65">{a.text}</p>
            </li>
          ))}
        </ol>
        <Link href="/case-studies/renaissance-re" className="btn btn-gold mt-12">
          Explore the RenaissanceRe case study <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
