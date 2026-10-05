import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { services } from "@/data/site";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesIntro } from "@/components/services/ServicesIntro";
import { ServiceSection } from "@/components/services/ServiceSection";
import { TrainingPartner } from "@/components/services/TrainingPartner";
import { WhyJJ } from "@/components/services/WhyJJ";
import { ServicesApproach } from "@/components/services/ServicesApproach";
import { TechnologyEcosystem } from "@/components/services/TechnologyEcosystem";
import { ServicesCTA } from "@/components/services/ServicesCTA";

export const metadata: Metadata = pageMeta({
  title: "Services",
  description:
    "IT consultancy, management consultancy, head hunting and recruitment, technology training, and manpower resourcing and placements from J & J Consulting.",
  path: "/services",
});

export default function Services() {
  return (
    <>
      <ServicesHero />
      <ServicesIntro />
      <section id="services" className="scroll-mt-20 bg-white py-12 md:py-20" aria-label="Our five services">
        <div className="wrap">
          {services.map((s, i) => (
            <ServiceSection key={s.slug} service={s} flip={i % 2 === 1} />
          ))}
        </div>
      </section>
      <WhyJJ />
      <ServicesApproach />
      <TrainingPartner />
      <TechnologyEcosystem />
      <ServicesCTA />
    </>
  );
}
