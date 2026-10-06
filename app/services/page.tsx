import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesIntro } from "@/components/services/ServicesIntro";
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
      <WhyJJ />
      <ServicesApproach />
      <TrainingPartner />
      <TechnologyEcosystem />
      <ServicesCTA />
    </>
  );
}
