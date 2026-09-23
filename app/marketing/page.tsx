import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Gallery } from "@/components/marketing/Gallery";
import { rreVisualData } from "@/components/marketing/rre-visual";

export const metadata: Metadata = { title: "Marketing visuals", robots: { index: false, follow: false } };

/**
 * Internal page (noindex, disallowed in robots.txt). Generates the full marketing set for a case study.
 * To add another case study: create a VisualData object (see components/marketing/rre-visual.ts) and render another <Gallery />.
 */
export default function Marketing() {
  return (
    <>
      <PageHero
        eyebrow="Internal"
        title="Marketing image system"
        intro="Every format below is generated from the case-study data — no stock photography, no fake dashboards, no invented statistics."
      />
      <section className="bg-paper py-20">
        <div className="wrap">
          <h2 className="mb-10 text-[32px] text-navy">RenaissanceRe</h2>
          <Gallery slug="renaissance-re" data={rreVisualData} />
        </div>
      </section>
    </>
  );
}
