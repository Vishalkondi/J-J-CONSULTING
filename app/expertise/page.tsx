import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { TechEcosystem } from "@/components/home/Expertise";
import { CtaBand } from "@/components/CtaBand";
import { CapabilityCards } from "@/components/CapabilityCards";
import { pageMeta } from "@/lib/seo";

/** Hero photo for /expertise (the capability cards below are icon cards shared with the home page). */
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
        image={{ src: capabilityPhoto.src, alt: "" }}
      />
      <section id="transformation" className="scroll-mt-24 bg-paper py-24 md:py-32">
        <div className="wrap">
          <SectionHeading eyebrow="Business analysis & consulting" title="Business analysis and consulting capabilities" />
          <CapabilityCards id="data" className="mt-14" headingLevel="h2" />
        </div>
      </section>
      <TechEcosystem />
      <CtaBand />
    </>
  );
}
