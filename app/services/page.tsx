import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { serviceHeroImages } from "@/data/service-images";
import { PageHero } from "@/components/PageHero";
import { SignatureVisual } from "@/components/SignatureVisual";
import { CtaBand } from "@/components/CtaBand";
import {
  ServicesApproachSteps,
  ServicesCapabilities,
  ServicesCaseStudies,
  ServicesIndustries,
  ServicesStats,
  ServicesTechnology,
} from "@/components/ServicesPageSections";
import { ExperienceMarquee } from "@/components/home/ExperienceMarquee";
import { DeliveryNetwork, GlobalHubs } from "@/components/home/World";
import { CorporateVideoSection, NewsInsights } from "@/components/home/Closing";
import { SectionSubnav } from "@/components/SectionSubnav";
import { pageMeta } from "@/lib/seo";
import { services } from "@/data/site";
import { nodeIcons } from "@/components/ServiceIcons";

export const metadata: Metadata = pageMeta({
  title: "Services",
  description:
    "IT consultancy, management consultancy, head hunting and recruitment, technology training, and manpower resourcing and placements from J & J Consulting.",
  path: "/services",
});


/** Sticky in-page menu, in page order. */
const subnav = [
  { id: "how-we-work", label: "Approach" },
  { id: "disciplines", label: "Services" },
  { id: "capabilities", label: "Capabilities" },
  { id: "industries", label: "Industries" },
  { id: "technology", label: "Technology" },
  { id: "case-studies", label: "Case studies" },
  { id: "video", label: "Video" },
  { id: "hubs", label: "Global hubs" },
  { id: "insights", label: "Insights" },
];

const label = (node: string) => node.charAt(0) + node.slice(1).toLowerCase();

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Technology, consulting, talent, <span className="text-gold-light">training and workforce.</span>
          </>
        }
        intro="Five disciplines that work together around one client need."
        image={{ src: "/images/city-skyline-dusk.jpg", alt: "" }}
      >
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/contact" className="btn btn-gold">
            Talk to us <span aria-hidden>→</span>
          </Link>
          <a href="#how-we-work" className="btn btn-ghost">
            How we work <span aria-hidden>↓</span>
          </a>
        </div>

        {/* Jump straight to a discipline further down the page */}
        <nav aria-label="Our services" className="mt-14 md:mt-20">
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/15 sm:grid-cols-3 lg:grid-cols-5">
            {services.map((s, i) => (
              <li key={s.slug} className={i === services.length - 1 ? "col-span-2 sm:col-span-1" : undefined}>
                <a
                  href={`#${s.slug}`}
                  className="group flex h-full flex-col bg-midnight/70 p-5 backdrop-blur-sm transition-colors duration-300 hover:bg-navy/90 sm:p-6"
                >
                  <span className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold-light transition-colors group-hover:border-gold [&_svg]:h-[18px] [&_svg]:w-[18px]" aria-hidden>
                      {nodeIcons[s.slug]}
                    </span>
                    <span className="font-mono text-[11px] text-gold-light">{s.index}</span>
                  </span>
                  <span className="mt-5 font-display text-[19px] leading-tight text-white">{label(s.node)}</span>
                  <span className="mt-1.5 text-[13.5px] leading-snug text-white/65">{s.short}</span>
                  <span aria-hidden className="mt-4 block h-px w-6 bg-gold transition-all duration-500 group-hover:w-12" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      <SectionSubnav items={subnav} />

      <section className="blueprint relative bg-midnight py-24 text-white md:py-32">
        <div className="wrap">
          <SignatureVisual />
        </div>
      </section>

      <ServicesApproachSteps />
      <ServicesStats />

      <section id="disciplines" className="scroll-mt-32 bg-paper py-24 md:py-32">
        <div className="wrap space-y-24 md:space-y-32">
          {services.map((s, i) => {
            const img = serviceHeroImages[s.slug];
            return (
              <article key={s.slug} id={s.slug} className="grid scroll-mt-36 items-center gap-10 lg:grid-cols-2 lg:gap-20">
                <Link
                  href={`/services/${s.slug}`}
                  className={`group relative block aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_30px_60px_-30px_rgba(12,32,56,0.45)] ${i % 2 ? "lg:order-2" : ""}`}
                  aria-label={s.title}
                >
                  {img && (
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/75 via-midnight/10 to-transparent" aria-hidden />
                  <span className="absolute bottom-5 left-6 font-display text-[64px] leading-none text-white/90">{s.index}</span>
                  <span className="absolute bottom-7 right-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition-colors group-hover:border-gold-light group-hover:bg-gold group-hover:text-midnight" aria-hidden>
                    →
                  </span>
                </Link>
                <div>
                  <p className="pill text-gold-dark">
                    {s.index} · {label(s.node)}
                  </p>
                  <h2 className="mt-5 text-[clamp(30px,3.4vw,48px)] leading-[1.06] text-navy">{s.title}</h2>
                  <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-graphite">{s.description}</p>
                  <ul className="mt-8 flex flex-wrap gap-2" aria-label={`${s.short} areas`}>
                    {s.items.map((item) => (
                      <li key={item} className="rounded-full border border-navy/15 bg-white px-3.5 py-1.5 text-[13.5px] text-charcoal">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10 flex flex-wrap items-center gap-6">
                    <Link href={`/services/${s.slug}`} className="btn btn-navy">
                      {s.cta} <span aria-hidden>→</span>
                    </Link>
                    <Link href="/contact" className="link-arrow text-navy">
                      Talk to us
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <ServicesCapabilities />
      <ServicesIndustries />
      <ServicesTechnology />
      <ServicesCaseStudies />
      <div id="video" className="scroll-mt-32">
        <CorporateVideoSection />
      </div>
      <ExperienceMarquee />
      <div id="hubs" className="scroll-mt-32">
        <GlobalHubs />
      </div>
      <DeliveryNetwork />
      <div id="insights" className="scroll-mt-32">
        <NewsInsights />
      </div>
      <CtaBand />
    </>
  );
}
