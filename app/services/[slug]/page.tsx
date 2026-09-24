import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { pageMeta } from "@/lib/seo";
import { services } from "@/data/site";
import { serviceCoverImages, serviceHeroImages } from "@/data/service-images";

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
        image={serviceHeroImages[s.slug]}
      >
        <Link href="/contact" className="btn btn-gold mt-10">
          {ctaText} <span aria-hidden>→</span>
        </Link>
      </PageHero>
      <section className="bg-paper py-24 md:py-32">
        <div className="wrap grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="label text-gold-dark">{s.short}</p>
            <h2 className="mt-5 text-[clamp(30px,3.6vw,48px)] leading-[1.08] text-navy">
              {s.slug === "technology-training" ? "Training areas" : "What this covers"}
            </h2>
            <p className="mt-5 max-w-md text-[16px] leading-relaxed text-graphite">
              {s.items.length} {s.slug === "technology-training" ? "training areas" : "areas of focus"}, delivered as one joined-up service.
            </p>
            {serviceCoverImages[s.slug] && (
              <div className="relative mt-10 aspect-[4/3] overflow-hidden">
                <Image
                  src={serviceCoverImages[s.slug].src}
                  alt={serviceCoverImages[s.slug].alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/45 to-transparent" aria-hidden />
              </div>
            )}
            <Link href="/contact" className="link-arrow mt-8 text-navy">
              Discuss your requirements <span aria-hidden>→</span>
            </Link>
          </div>
          <ul className="grid content-start gap-4 sm:grid-cols-2">
            {s.items.map((i, idx) => (
              <li key={i} className="sm:[&:last-child:nth-child(odd)]:col-span-2">
                <Reveal delay={(idx % 6) * 0.05} className="h-full">
                  <article className="group flex h-full items-start gap-5 border border-navy/15 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-navy/30 hover:shadow-[0_18px_40px_-20px_rgba(12,32,56,0.35)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                    <span className="pt-1 font-mono text-[12px] text-gold-dark">{String(idx + 1).padStart(2, "0")}</span>
                    <div className="flex-1">
                      <p className="font-display text-[20px] leading-snug text-navy">{i}</p>
                      <span aria-hidden className="mt-4 block h-px w-8 bg-gold transition-all duration-500 group-hover:w-14" />
                    </div>
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
