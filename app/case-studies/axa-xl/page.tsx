import type { Metadata } from "next";
import { AxaXlHero } from "@/components/axaxl/Hero";
import {
  AxaXlCta,
  BridgeSection,
  BusinessLandscape,
  DeliveryLifecycle,
  ProjectShowcase,
  RegulatoryFoundations,
  TechStack,
} from "@/components/axaxl/Sections";
import { company } from "@/data/site";
import { axaXl as a } from "@/data/axa-xl";

const url = `${company.url}/case-studies/${a.slug}`;

export const metadata: Metadata = {
  title: { absolute: a.seo.title },
  description: a.seo.description,
  alternates: { canonical: url },
  openGraph: { title: a.seo.title, description: a.seo.description, url, siteName: company.brand, locale: "en_GB", type: "article" },
  twitter: { card: "summary_large_image", title: a.seo.title, description: a.seo.description },
};

export default function AxaXlPage() {
  return (
    <>
      <AxaXlHero />
      <BusinessLandscape />
      <ProjectShowcase />
      <RegulatoryFoundations />
      <DeliveryLifecycle />
      <BridgeSection />
      <TechStack />
      <AxaXlCta />
    </>
  );
}
