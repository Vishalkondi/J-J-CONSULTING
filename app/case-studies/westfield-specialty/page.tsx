import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ClientMark } from "@/components/ClientMark";
import { CtaBand } from "@/components/CtaBand";
import { pageMeta } from "@/lib/seo";
import { currentClients } from "@/data/site";

export const metadata: Metadata = pageMeta({
  title: "Business Analyst — Project Goldcrest | Westfield Specialty",
  description:
    "Business Analyst engagement on the new company market entity setup in Luxembourg for Westfield Specialty, April 2025 to February 2026.",
  path: "/case-studies/westfield-specialty",
});

export default function Westfield() {
  const w = currentClients[0];
  return (
    <>
      <PageHero
        eyebrow="Selected project experience"
        title={
          <>
            Project Goldcrest<span className="block text-[0.5em] text-white/70">New Company Market Entity Setup in Luxembourg</span>
          </>
        }
        intro={`${w.role} · ${w.period}`}
      />
      <section className="bg-paper py-24 md:py-32">
        <div className="wrap grid gap-14 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-24">
          <ClientMark name={w.name} logo={w.logo} className="aspect-[4/3] w-full border border-navy/10" />
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="label text-graphite">Business areas</h2>
              <ul className="mt-5 space-y-2 text-[17px] text-charcoal">
                {w.areas.map((a) => (
                  <li key={a} className="border-b border-navy/10 pb-2">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="label text-graphite">Documented systems</h2>
              <ul className="mt-5 space-y-2 font-mono text-[13.5px] text-charcoal">
                {w.systems.map((a) => (
                  <li key={a} className="border-b border-navy/10 pb-2">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
