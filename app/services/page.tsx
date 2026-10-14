import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { serviceHeroImages } from "@/data/service-images";
import { PageHero } from "@/components/PageHero";
import { SignatureVisual } from "@/components/SignatureVisual";
import { CtaBand } from "@/components/CtaBand";
import { pageMeta } from "@/lib/seo";
import { services } from "@/data/site";

export const metadata: Metadata = pageMeta({
  title: "Services",
  description:
    "IT consultancy, management consultancy, head hunting and recruitment, technology training, and manpower resourcing and placements from J & J Consulting.",
  path: "/services",
});

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Technology, consulting, talent, training and workforce."
        intro="Five disciplines that work together around one client need."
        image={{ src: "/images/city-skyline-dusk.jpg", alt: "" }}
      />
      <section className="blueprint relative bg-midnight py-24 text-white md:py-32">
        <div className="wrap">
          <SignatureVisual />
        </div>
      </section>
      <section className="bg-paper py-24 md:py-32">
        <div className="wrap space-y-20 md:space-y-28">
          {services.map((s, i) => {
            const img = serviceHeroImages[s.slug];
            return (
              <article key={s.slug} id={s.slug} className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-20">
                <Link
                  href={`/services/${s.slug}`}
                  className={`group relative block aspect-[4/3] overflow-hidden ${i % 2 ? "lg:order-2" : ""}`}
                  aria-label={s.title}
                >
                  {img && (
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-midnight/10 to-transparent" aria-hidden />
                  <span className="absolute bottom-5 left-6 font-display text-[64px] leading-none text-white/90">{s.index}</span>
                </Link>
                <div>
                  <p className="label text-gold-dark">{s.node.charAt(0) + s.node.slice(1).toLowerCase()}</p>
                  <h2 className="mt-4 text-[clamp(30px,3.4vw,48px)] leading-[1.06] text-navy">{s.title}</h2>
                  <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-graphite">{s.description}</p>
                  <ul className="mt-8 flex flex-wrap gap-2" aria-label={`${s.short} areas`}>
                    {s.items.map((item) => (
                      <li key={item} className="border border-navy/15 bg-white px-3 py-1.5 text-[13.5px] text-charcoal">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/services/${s.slug}`} className="btn btn-navy mt-10">
                    {s.cta} <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
