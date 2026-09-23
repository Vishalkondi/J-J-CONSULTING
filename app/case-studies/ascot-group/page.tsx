import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ClientMark } from "@/components/ClientMark";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { Tags } from "@/components/Tags";
import { company } from "@/data/site";
import { images } from "@/data/howden-hx";
import { ascot as a } from "@/data/ascot";

const url = `${company.url}/case-studies/${a.slug}`;

export const metadata: Metadata = {
  title: { absolute: a.seo.title },
  description: a.seo.description,
  alternates: { canonical: url },
  openGraph: { title: a.seo.title, description: a.seo.description, url, siteName: company.brand, locale: "en_GB", type: "article" },
  twitter: { card: "summary_large_image", title: a.seo.title, description: a.seo.description },
};

export default function AscotPage() {
  return (
    <>
      <PageHero eyebrow={a.eyebrow} title={`${a.title}: ${a.subtitle}`} intro={`${a.role} · ${a.period}`} image={images.office} />

      {/* OVERVIEW */}
      <section className="bg-paper py-20 md:py-28" aria-label="Overview">
        <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-24">
          <ClientMark name={a.client} logo={a.logo} className="aspect-square w-full max-w-[280px] border border-navy/10" />
          <div>
            <p className="max-w-2xl text-[19px] leading-relaxed text-graphite">{a.statement}</p>
            <Tags items={[...a.domains]} label="Business areas" />
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="bg-bone py-20 md:py-28" aria-labelledby="ach-title">
        <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_1.15fr] lg:gap-24">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="label text-gold-dark">Delivered</p>
            <h2 id="ach-title" className="mt-5 text-[clamp(30px,3.6vw,50px)] leading-[1.08] text-navy">
              What the engagement put in place
            </h2>
          </div>
          <Reveal>
            <ul className="divide-y divide-navy/15 border-y border-navy/15">
              {a.achievements.map((i) => (
                <li key={i} className="py-5 text-[17px] leading-relaxed text-charcoal">
                  {i}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* RESPONSIBILITIES */}
      <section className="bg-paper py-20 md:py-28" aria-labelledby="resp-title">
        <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_1.15fr] lg:gap-24">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="label text-gold-dark">Role in practice</p>
            <h2 id="resp-title" className="mt-5 text-[clamp(30px,3.6vw,50px)] leading-[1.08] text-navy">
              Key responsibilities
            </h2>
          </div>
          <Reveal>
            <ul className="divide-y divide-navy/15 border-y border-navy/15">
              {a.responsibilities.map((i) => (
                <li key={i} className="py-5 text-[17px] leading-relaxed text-charcoal">
                  {i}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="bg-bone py-20 md:py-24" aria-labelledby="tech-title">
        <div className="wrap">
          <h2 id="tech-title" className="label text-graphite">
            Technology and systems
          </h2>
          <Tags items={[...a.technology]} label="Technology and systems" />
          <Link href="/case-studies" className="link-arrow mt-14 text-navy">
            All case studies <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
