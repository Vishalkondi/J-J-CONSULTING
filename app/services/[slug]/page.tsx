import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { pageMeta } from "@/lib/seo";
import { services } from "@/data/site";

/**
 * Hero background per service — every page below has its own distinct photo (no repeats among
 * these five, and none reuse the homepage's London aerial video). This is the page's only photo;
 * an earlier version also had a second "below-hero strip" image, which was removed because it
 * duplicated two of these five photos on their own pages.
 */
const heroImages: Record<string, { src: string; alt: string }> = {
  "it-consultancy": {
    src: "/images/analyst-dashboards-desk.jpg",
    alt: "An analyst reviewing multi-monitor dashboards at a desk overlooking Tower Bridge",
  },
  "technology-training": { src: "/images/engineering-team.jpg", alt: "A team reviewing code together in an open-plan office" },
  recruitment: {
    src: "/images/boardroom-team-london.jpg",
    alt: "A boardroom meeting with St Paul's Cathedral and the City skyline behind",
  },
  "workforce-solutions": { src: "/images/operations-team.jpg", alt: "A team gathered around screens in a modern office" },
  "management-consultancy": {
    src: "/images/headset-call-meeting.jpg",
    alt: "A colleague on a headset call with the team in a meeting behind, City of London skyline through the window",
  },
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return pageMeta({ title: s.title, description: s.description, path: `/services/${s.slug}` });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const others = services.filter((x) => x.slug !== s.slug);
  const ctaText = s.slug === "recruitment" ? "Find Talent" : "Talk to Us";
  return (
    <>
      <PageHero
        eyebrow={`${s.index} · ${s.node.charAt(0) + s.node.slice(1).toLowerCase()}`}
        title={s.title}
        intro={s.description}
        image={heroImages[s.slug]}
      >
        <Link href="/contact" className="btn btn-gold mt-10">
          {ctaText} <span aria-hidden>→</span>
        </Link>
      </PageHero>
      <section className="bg-paper py-24 md:py-32">
        <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="label text-gold-dark">{s.short}</p>
            <h2 className="mt-5 text-[clamp(30px,3.6vw,48px)] leading-[1.08] text-navy">
              {s.slug === "technology-training" ? "Training areas" : "What this covers"}
            </h2>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {s.items.map((i, idx) => (
              <li key={i}>
                <Reveal delay={(idx % 6) * 0.05} className="h-full">
                  <article className="group h-full border border-navy/15 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-navy/30 hover:shadow-[0_18px_40px_-20px_rgba(12,32,56,0.35)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                    <span aria-hidden className="block h-px w-8 bg-gold transition-all duration-500 group-hover:w-14" />
                    <p className="mt-5 font-display text-[19px] leading-snug text-navy">{i}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="bg-bone py-20">
        <div className="wrap">
          <p className="label text-gold-dark">Other disciplines</p>
          <ul className="mt-6 grid gap-x-8 border-t border-navy/20 md:grid-cols-2">
            {others.map((o) => (
              <li key={o.slug} className="border-b border-navy/15">
                <Link
                  href={`/services/${o.slug}`}
                  className="group flex items-center justify-between py-5 font-display text-[24px] text-navy hover:text-steel"
                >
                  {o.title}
                  <span aria-hidden className="text-gold-dark transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
