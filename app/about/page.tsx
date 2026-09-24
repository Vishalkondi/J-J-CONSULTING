import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { TimelineBar } from "@/components/home/TimelineBar";
import { ExperienceCounters } from "@/components/home/Intro";
import { CtaBand } from "@/components/CtaBand";
import { pageMeta } from "@/lib/seo";
import { services } from "@/data/site";
import Link from "next/link";
import Image from "next/image";
import { serviceHeroImages } from "@/data/service-images";

export const metadata: Metadata = pageMeta({
  title: "About",
  description:
    "J & J Consulting, established 2010: technology consultancy, management consulting, specialist recruitment, technology training and workforce solutions.",
  path: "/about",
});

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About J & J Consulting"
        title="Established Experience. Forward Thinking."
        intro="J & J Incorporated Ltd trades as J & J Consulting. Established in 2010, we combine technology consultancy, management consulting, specialist recruitment, technology training and workforce solutions."
        image={{ src: "/images/boardroom-presentation-large.jpg", alt: "" }}
      />
      <section className="bg-paper py-24 md:py-32">
        <div className="wrap">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
            <SectionHeading eyebrow="Who we are" title="An established professional-services company" />
            <div className="prose-jj">
              <p>
                J &amp; J Consulting is based in Reigate, Surrey, and has been in existence for more than 16 years. Our work sits where
                technology, business change and talent meet.
              </p>
              <p>
                Our depth is in insurance and financial services, supported by international consulting experience across the United
                Kingdom, United States, Malaysia, Singapore and India.
              </p>
              <p>We are organised around five disciplines that work together: technology, consulting, talent, training and workforce.</p>
            </div>
          </div>
          <TimelineBar />
        </div>
      </section>
      <ExperienceCounters />
      <section className="bg-bone py-24 md:py-32">
        <div className="wrap">
          <SectionHeading eyebrow="Our disciplines" title="Five disciplines, one firm" />
          {/* Bento: two wide cards, then three — five services fill two rows with no gaps. */}
          <ul className="mt-14 grid gap-4 md:grid-cols-6">
            {services.map((s, i) => {
              const img = serviceHeroImages[s.slug];
              return (
                <li key={s.slug} className={i < 2 ? "md:col-span-3" : "md:col-span-2"}>
                  <Link
                    href={`/services/${s.slug}`}
                    className={`group relative flex overflow-hidden bg-navy ${i < 2 ? "h-[380px]" : "h-[340px]"}`}
                  >
                    {img && (
                      <Image
                        src={img.src}
                        alt=""
                        fill
                        sizes={i < 2 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/55 to-midnight/5" aria-hidden />
                    <div className="relative mt-auto p-7 text-white">
                      <p className="font-mono text-[12px] text-gold-light">{s.index}</p>
                      <h3 className="mt-2 font-display text-[28px] leading-tight">{s.title}</h3>
                      <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/75">{s.description}</p>
                      <span className="link-arrow mt-5 text-gold-light">
                        {s.cta}{" "}
                        <span aria-hidden className="transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
