import type { Metadata } from "next";
import Link from "next/link";
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
      />
      <section className="blueprint relative bg-midnight py-24 text-white md:py-32">
        <div className="wrap">
          <SignatureVisual />
        </div>
      </section>
      <section className="bg-paper py-24 md:py-32">
        <div className="wrap space-y-0">
          {services.map((s) => (
            <article key={s.slug} id={s.slug} className="grid gap-10 border-t border-navy/20 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
              <div>
                <p className="font-mono text-[13px] text-gold-dark">{s.index}</p>
                <h2 className="mt-3 text-[clamp(30px,3.6vw,52px)] leading-[1.06] text-navy">{s.title}</h2>
                <p className="mt-5 max-w-md text-[17px] leading-relaxed text-graphite">{s.description}</p>
                <Link href={`/services/${s.slug}`} className="link-arrow mt-8 text-navy">
                  {s.cta} <span aria-hidden>→</span>
                </Link>
              </div>
              <ul className="grid content-start gap-x-8 sm:grid-cols-2">
                {s.items.map((i) => (
                  <li key={i} className="border-navy/12 border-b py-3 text-[16px] text-charcoal">
                    {i}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
