import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CurrentClients } from "@/components/home/Proof";
import { CtaBand } from "@/components/CtaBand";
import { pageMeta } from "@/lib/seo";
import { ExperienceGrid } from "@/components/ExperienceGrid";
import { ClientMark } from "@/components/ClientMark";
import { previousClients } from "@/data/site";

export const metadata: Metadata = pageMeta({
  title: "Clients",
  description:
    "Current and recent client experience with Westfield Specialty and Liberty Specialty Markets, and selected previous enterprise engagements.",
  path: "/clients",
});

export default function Clients() {
  return (
    <>
      <PageHero
        eyebrow="Clients"
        title="Client experience."
        intro="Current and recent engagements are shown separately from historical ones."
        image={{ src: "/images/boardroom-team-london.jpg", alt: "" }}
      />
      <CurrentClients />
      <section id="insurance" className="scroll-mt-24 bg-paper py-24 md:py-28" aria-labelledby="ins-title">
        <div className="wrap">
          <div id="ins-title">
            <SectionHeading
              eyebrow="Trusted experience"
              title="Experience across the London Market & beyond"
              intro="Insurers, reinsurers, brokers and InsurTech organisations across our consulting experience."
            />
          </div>
          <div className="mt-14">
            <ExperienceGrid />
          </div>
          <p className="mt-6 font-mono text-[11px] text-graphite">
            These are organisations from our documented experience and are not necessarily current clients. Project detail is shown only
            where documented.
          </p>
        </div>
      </section>
      <section id="previous" className="scroll-mt-24 bg-bone py-24 md:py-32">
        <div className="wrap">
          <SectionHeading eyebrow="Selected Former Clients" title="Previous client project details" />
          <div className="mt-14 border-t border-navy/20">
            {previousClients.map((c) => (
              <article key={c.name} className="grid gap-8 border-b border-navy/20 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
                <div>
                  {c.logo && <ClientMark name={c.name} logo={c.logo} className="mb-6 h-16 w-16 border border-navy/10" />}
                  <h3 className="text-[34px] leading-tight text-navy">
                    {c.website ? (
                      <a
                        href={c.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-navy/25 underline-offset-4 transition-colors hover:decoration-navy"
                      >
                        {c.name}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ) : (
                      c.name
                    )}
                  </h3>
                  <p className="mt-2 text-[14px] text-graphite">{c.location}</p>
                  <p className="mt-6 text-[17px] leading-relaxed text-charcoal">{c.project}</p>
                  <dl className="mt-6 flex gap-10">
                    <div>
                      <dt className="label text-graphite">Team</dt>
                      <dd className="mt-1 font-display text-[28px] text-navy">{c.team}</dd>
                    </div>
                    {c.value && (
                      <div>
                        <dt className="label text-graphite">Project value</dt>
                        <dd className="mt-1 font-display text-[28px] text-navy">{c.value}</dd>
                      </div>
                    )}
                  </dl>
                </div>
                <ul className="flex flex-wrap content-start gap-x-6 gap-y-3 font-mono text-[12.5px] text-graphite">
                  {c.areas.map((a) => (
                    <li key={a} className="border-b border-navy/20 pb-1">
                      {a}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-8 font-mono text-[11px] text-graphite">Historical engagements. These are not current clients.</p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
