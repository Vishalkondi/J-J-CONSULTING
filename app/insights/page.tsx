import type { Metadata } from "next";
import { InsightCard } from "@/components/InsightCard";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { pageMeta } from "@/lib/seo";
import { articles, insightCategories, spotlight } from "@/data/insights";

export const metadata: Metadata = pageMeta({
  title: "News & Insights",
  description: "Insights on enterprise integration, insurance operations, document management and business analysis from J & J Consulting.",
  path: "/insights",
});

export default function Insights() {
  return (
    <>
      <PageHero
        eyebrow="News & insights"
        title="Perspectives from the field."
        intro="Industry and technology insight, project spotlights and business analyst perspectives."
        image={{ src: "/images/analyst-dashboards-desk.jpg", alt: "" }}
      />
      <section className="bg-paper py-24 md:py-32">
        <div className="wrap grid gap-16 lg:grid-cols-[1fr_240px] lg:gap-16">
          <div>
            <InsightCard {...spotlight} featured headingLevel="h2" />
            <ul className="mt-6 grid gap-5 sm:grid-cols-2">
              {articles.map((a) => (
                <li key={a.slug}>
                  <InsightCard href={`/insights/${a.slug}`} {...a} headingLevel="h2" />
                </li>
              ))}
            </ul>
          </div>
          <aside aria-label="Topics">
            <p className="label text-graphite">Topics</p>
            <ul className="mt-5 border-t border-navy/20">
              {insightCategories.map((c) => (
                <li key={c} className="border-b border-navy/15 py-3 text-[15px] text-charcoal">
                  {c}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
