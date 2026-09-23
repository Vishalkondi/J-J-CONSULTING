import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { TechEcosystem } from "@/components/home/Expertise";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { capabilityIcons } from "@/components/CapabilityIcons";
import { pageMeta } from "@/lib/seo";
import { capabilities } from "@/data/site";

/**
 * One photo, used as a consistent background across all 12 cards below — the same "one system,
 * not twelve different stock photos" pattern already used for MS Amlin's business-area cards.
 * This keeps the card grid visually premium without needing twelve distinct images (none are
 * available without reusing a photo that's already placed uniquely elsewhere on the site).
 */
const capabilityPhoto = {
  src: "/images/capabilities-terrace-sunset.jpg",
  alt: "A London office terrace at sunset, overlooking St Paul's Cathedral and the City skyline",
};

export const metadata: Metadata = pageMeta({
  title: "Expertise",
  description:
    "Business analysis, transformation, data governance, architecture, testing and regulatory expertise, plus the technology ecosystem J & J Consulting works with.",
  path: "/expertise",
});

export default function Expertise() {
  return (
    <>
      <PageHero
        eyebrow="Expertise"
        title="Capabilities behind successful change."
        intro="Business analysis, data, architecture and delivery capabilities, and the technology ecosystem we work with."
      />
      <section id="transformation" className="scroll-mt-24 bg-paper py-24 md:py-32">
        <div className="wrap">
          <SectionHeading eyebrow="Business analysis & consulting" title="Business analysis and consulting capabilities" />
          <ul id="data" className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => {
              const Icon = capabilityIcons[c.title];
              return (
                <li key={c.title}>
                  <Reveal className="h-full">
                    <article className="group relative isolate flex aspect-[4/5] flex-col justify-end overflow-hidden border border-navy/15 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(12,32,56,0.45)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                      <Image
                        src={capabilityPhoto.src}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 33vw, 50vw"
                        className="-z-20 object-cover transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transform-none"
                      />
                      <div className="absolute inset-0 -z-10 bg-navy/55" aria-hidden />
                      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy/95 via-navy/45 to-transparent" aria-hidden />
                      <span className="text-white/85">{Icon && <Icon />}</span>
                      <h2 className="mt-5 text-[21px] leading-tight text-white">{c.title}</h2>
                      <p className="mt-2 text-[13.5px] leading-relaxed text-white/75">{c.text}</p>
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ul>
          <p className="mt-3 font-mono text-[11px] text-graphite">{capabilityPhoto.alt}</p>
        </div>
      </section>
      <TechEcosystem />
      <CtaBand />
    </>
  );
}
