import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CurrentClients } from "@/components/home/Proof";
import { CtaBand } from "@/components/CtaBand";
import { pageMeta } from "@/lib/seo";
import { ExperienceGrid } from "@/components/ExperienceGrid";
import { PreviousClientCard } from "@/components/clients/PreviousClientCard";
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
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-20">
            <SectionHeading eyebrow="Selected former clients" title="Previous client project details" />
            <p className="text-[17px] leading-relaxed text-graphite">
              International ERP, CRM and BI programmes across the USA, Malaysia and India, delivered through Hitachi Solutions between 2004
              and 2008, before J &amp; J Incorporated was established.
            </p>
          </div>
          <dl className="mt-12 grid grid-cols-2 border-l border-t border-navy/15 md:grid-cols-4">
            {[
              [String(previousClients.length), "Client programmes"],
              [String(previousClients.reduce((n, c) => n + c.team, 0)), "Team members across programmes"],
              ["3", "Countries"],
              ["2004 – 2008", "Through Hitachi Solutions"],
            ].map(([v, l]) => (
              <div key={l} className="border-b border-r border-navy/15 bg-white/60 p-6">
                <dt className="sr-only">{l}</dt>
                <dd className="font-display text-[clamp(28px,3vw,40px)] leading-none text-navy">{v}</dd>
                <dd className="mt-2 text-[14px] text-graphite">{l}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {previousClients.map((c) => (
              <PreviousClientCard key={c.name} c={c} />
            ))}
          </div>
          <p className="mt-8 font-mono text-[11px] text-graphite">Historical engagements. These are not current clients.</p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
