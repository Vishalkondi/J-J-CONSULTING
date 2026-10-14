import { HeroVideo } from "@/components/HeroVideo";
import { Introduction, ExperienceCounters } from "@/components/home/Intro";
import { WhatWeDo } from "@/components/home/Services";
import { InsuranceFinancial, Capabilities, TechEcosystem } from "@/components/home/Expertise";
import { CurrentClients, PreviousClients, FeaturedCaseStudies, ProjectSpotlight } from "@/components/home/Proof";
import { GlobalHubs, DeliveryNetwork, InternationalExperience } from "@/components/home/World";
import { ExperienceMarquee } from "@/components/home/ExperienceMarquee";
import { NewsInsights, ContactSection } from "@/components/home/Closing";

export default function Home() {
  return (
    <>
      <HeroVideo /> {/* 01 */}
      <Introduction /> {/* 02 */}
      <ExperienceCounters /> {/* 03 */}
      <WhatWeDo /> {/* 04 */}
      <InsuranceFinancial /> {/* 05 */}
      <ExperienceMarquee />
      <Capabilities /> {/* 06 */}
      <GlobalHubs /> {/* 07 */}
      <CurrentClients /> {/* 08 */}
      <PreviousClients /> {/* 09 */}
      <FeaturedCaseStudies limit={3} /> {/* 10 */}
      <ProjectSpotlight /> {/* 11 */}
      <TechEcosystem /> {/* 12 */}
      <DeliveryNetwork /> {/* 13 */}
      <InternationalExperience /> {/* 14 */}
      <NewsInsights /> {/* 15 */}
      <ContactSection /> {/* 17 */}
    </>
  );
}
