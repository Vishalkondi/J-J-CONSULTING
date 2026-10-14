import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { SlotImage } from "@/components/SlotImage";
import { CtaBand } from "@/components/CtaBand";
import { pageMeta } from "@/lib/seo";
import { industries, insuranceExpertise } from "@/data/site";

export const metadata: Metadata = pageMeta({
  title: "Industries",
  description:
    "Expertise in insurance, financial services, banking, technology, professional services, risk and compliance, and digital transformation.",
  path: "/industries",
});

export default function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Expertise in Complex Industries"
        intro="Insurance and financial services sit at the centre of our experience, alongside technology and professional services."
      />
      <section id="insurance" className="scroll-mt-24 bg-paper py-24 md:py-32">
        <div className="wrap grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          <div>
            <SectionHeading
              eyebrow="Insurance"
              title="Insurance"
              intro="More than 16 years in insurance and financial services, including the London Market."
            />
            <SlotImage
              src="/images/london-financial-district.jpg"
              alt="London financial district at dusk"
              className="mt-12 aspect-[16/10] w-full"
              label="/public/images/london-financial-district.jpg"
            />
          </div>
          <ul className="grid content-start gap-3 sm:grid-cols-2">
            {insuranceExpertise.map((e) => (
              <li
                key={e}
                className="group border border-navy/15 bg-white p-5 font-display text-[19px] leading-tight text-navy transition duration-300 hover:-translate-y-0.5 hover:border-navy/30 hover:shadow-[0_14px_30px_-18px_rgba(12,32,56,0.35)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                {e}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section id="financial-services" className="scroll-mt-24 bg-bone py-24 md:py-32">
        <div className="wrap">
          <SectionHeading eyebrow="Beyond insurance" title="Financial services and connected industries" />
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((i) => (
              <li
                key={i}
                className="group border border-navy/15 bg-white p-7 font-display text-[24px] leading-tight text-navy transition duration-300 hover:-translate-y-1 hover:border-navy/30 hover:shadow-[0_18px_40px_-20px_rgba(12,32,56,0.35)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                {i}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
