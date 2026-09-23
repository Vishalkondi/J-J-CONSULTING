import type { Metadata } from "next";
import { HastingsHero } from "@/components/hastings/Hero";
import {
  Capabilities,
  Challenge,
  BusinessLandscape,
  HastingsCta,
  Impact,
  OperatingModel,
  RegulatoryFlow,
  RegulatoryReporting,
  Responsibilities,
  SolvencyProject,
  TechnologyStack,
  UnderwritingProject,
  VendorEvaluation,
} from "@/components/hastings/Sections";
import { company } from "@/data/site";
import { hastings as h } from "@/data/hastings";

const url = `${company.url}/case-studies/${h.slug}`;

export const metadata: Metadata = {
  title: { absolute: h.seo.title },
  description: h.seo.description,
  alternates: { canonical: url },
  openGraph: {
    title: h.seo.title,
    description: h.seo.description,
    url,
    siteName: company.brand,
    locale: "en_GB",
    type: "article",
    images: [{ url: h.hero.src, width: 2000, height: 1126, alt: h.hero.alt }],
  },
  twitter: { card: "summary_large_image", title: h.seo.title, description: h.seo.description, images: [h.hero.src] },
};

export default function HastingsPage() {
  return (
    <>
      <HastingsHero />
      <Challenge />
      <BusinessLandscape />
      <SolvencyProject />
      <RegulatoryFlow />
      <RegulatoryReporting />
      <OperatingModel />
      <Responsibilities />
      <UnderwritingProject />
      <VendorEvaluation />
      <TechnologyStack />
      <Capabilities />
      <Impact />
      <HastingsCta />
    </>
  );
}
