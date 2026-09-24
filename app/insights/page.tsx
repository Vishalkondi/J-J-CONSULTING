import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { pageMeta } from "@/lib/seo";
import { articles, insightCategories, spotlight } from "@/data/insights";
import { formatDate } from "@/lib/utils";

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
        <div className="wrap grid gap-16 lg:grid-cols-[1fr_260px] lg:gap-24">
          <div>
            <Link href={spotlight.href} className="group block border-b border-navy/20 pb-12">
              <p className="label text-gold-dark">
                {spotlight.type} · {spotlight.category}
              </p>
              <h2 className="mt-4 max-w-3xl text-[clamp(30px,4vw,56px)] leading-[1.06] text-navy transition-colors group-hover:text-steel">
                {spotlight.title}
              </h2>
              <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-graphite">{spotlight.excerpt}</p>
            </Link>
            <ul>
              {articles.map((a) => (
                <li key={a.slug} className="border-b border-navy/20">
                  <Link href={`/insights/${a.slug}`} className="group grid gap-3 py-10 md:grid-cols-[190px_1fr] md:gap-10">
                    <div>
                      <p className="label text-gold-dark">{a.type}</p>
                      <p className="mt-2 font-mono text-[12px] text-graphite">
                        {formatDate(a.date)} · {a.readMinutes} min
                      </p>
                    </div>
                    <div>
                      <h2 className="text-[clamp(24px,2.8vw,36px)] leading-tight text-navy transition-colors group-hover:text-steel">
                        {a.title}
                      </h2>
                      <p className="mt-3 max-w-2xl text-[16px] leading-relaxed text-graphite">{a.excerpt}</p>
                      <p className="label mt-4 text-graphite">{a.category}</p>
                    </div>
                  </Link>
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
