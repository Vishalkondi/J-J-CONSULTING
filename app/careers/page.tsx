import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SlotImage } from "@/components/SlotImage";
import { CtaBand } from "@/components/CtaBand";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Careers",
  description: "Speak to J & J Consulting about specialist technology, business and leadership roles.",
  path: "/careers",
});

export default function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Talent connects everything we do."
        intro="If you are looking for your next role in technology, business or professional services, speak with our recruitment team."
      />
      <section className="bg-paper py-24 md:py-32">
        <div className="wrap grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <SlotImage
            src="/images/developer-coding-desk.jpg"
            alt="A developer working at a dual-monitor desk in an open-plan office"
            className="aspect-[3/2] w-full"
          />
          <div>
            <h2 className="text-[clamp(30px,3.6vw,50px)] leading-[1.06] text-navy">Talk to our recruitment team</h2>
            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-graphite">
              We connect specialist professionals and leadership talent with organizations across technology, business and professional
              services.
            </p>
            <Link href="/contact" className="btn btn-navy mt-9">
              Start a Conversation <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
