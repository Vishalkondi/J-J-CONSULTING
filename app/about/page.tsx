import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { TimelineBar } from "@/components/home/TimelineBar";
import { ExperienceCounters } from "@/components/home/Intro";
import { CtaBand } from "@/components/CtaBand";
import { pageMeta } from "@/lib/seo";
import { ServiceCards } from "@/components/ServiceCards";
import { Leadership } from "@/components/Leadership";

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
          <ServiceCards className="mt-14" />
        </div>
      </section>
      <Leadership />
      <CtaBand />
    </>
  );
}
