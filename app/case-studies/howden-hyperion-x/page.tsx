import type { Metadata } from "next";
import { HowdenHero } from "@/components/howden/Hero";
import { CaseStudyCard } from "@/components/howden/CaseStudyCard";
import { CapabilitiesStrip } from "@/components/howden/CapabilitiesStrip";
import { HowdenCta } from "@/components/howden/Cta";
import { company } from "@/data/site";
import { capabilities, caseStudies, howden, images } from "@/data/howden-hx";

const url = `${company.url}/case-studies/${howden.slug}`;

export const metadata: Metadata = {
  title: { absolute: `${howden.seo.title} | J & J Consulting` },
  description: howden.seo.description,
  alternates: { canonical: url },
  openGraph: {
    title: howden.seo.title,
    description: howden.seo.description,
    url,
    siteName: company.brand,
    locale: "en_GB",
    type: "article",
    images: [{ url: images.presenterDataWall.src, width: 2000, height: 1333, alt: images.presenterDataWall.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: howden.seo.title,
    description: howden.seo.description,
    images: [images.presenterDataWall.src],
  },
};

export default function HowdenPage() {
  return (
    <>
      <HowdenHero />
      <section className="bg-paper py-20 md:py-28" aria-label="Case studies">
        <div className="wrap space-y-10 md:space-y-14">
          {caseStudies.map((c) => (
            <CaseStudyCard key={c.id} {...c} />
          ))}
        </div>
      </section>
      <CapabilitiesStrip items={capabilities} />
      <HowdenCta />
    </>
  );
}
