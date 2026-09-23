import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { FeaturedCaseStudies } from "@/components/home/Proof";
import { CtaBand } from "@/components/CtaBand";
import { pageMeta } from "@/lib/seo";
import { images } from "@/data/howden-hx";

export const metadata: Metadata = pageMeta({
  title: "Case Studies",
  description:
    "Business analyst case studies from insurance and specialty markets, including the RenaissanceRe systems and integrations evaluation.",
  path: "/case-studies",
});

export default function CaseStudies() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Business analysis in practice."
        intro="Selected project experience, described only as documented."
        image={images.teamDeskDashboards}
      />
      <FeaturedCaseStudies />
      <CtaBand />
    </>
  );
}
