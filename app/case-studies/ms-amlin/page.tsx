import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { VisitMsAmlin } from "@/components/regulatory/ExternalLink";
import { PageHero } from "@/components/PageHero";
import { ClientMark } from "@/components/ClientMark";
import { CtaBand } from "@/components/CtaBand";
import { company } from "@/data/site";
import { images } from "@/data/howden-hx";
import { msAmlin as m } from "@/data/ms-amlin";

const url = `${company.url}/case-studies/${m.slug}`;

export const metadata: Metadata = {
  title: { absolute: m.seo.title },
  description: m.seo.description,
  alternates: { canonical: url },
  openGraph: { title: m.seo.title, description: m.seo.description, url, siteName: company.brand, locale: "en_GB", type: "article" },
  twitter: { card: "summary_large_image", title: m.seo.title, description: m.seo.description },
};

export default function MsAmlinPage() {
  return (
    <>
      <PageHero eyebrow={m.eyebrow} title={m.title} intro={`${m.role} · ${m.period}`} image={images.londonOfficeDevelopers} />

      <section className="bg-midnight pb-16 pt-4 md:pb-24" aria-label="Programme visual">
        <figure className="wrap">
          <Image
            src={m.visual.src}
            alt={m.visual.alt}
            width={m.visual.width}
            height={m.visual.height}
            sizes="(min-width: 1360px) 1280px, 100vw"
            className="h-auto w-full"
            quality={92}
            priority
          />
          <figcaption className="mt-3 font-mono text-[11px] text-white/55">{m.visual.caption}</figcaption>
        </figure>
      </section>

      <section className="bg-paper py-20 md:py-28" aria-label="Programme facts">
        <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-24">
          <ClientMark name={m.client} logo={m.logo} className="aspect-square w-full max-w-[280px] border border-navy/10" />
          <div>
            <p className="max-w-2xl text-[19px] leading-relaxed text-graphite">{m.statement}</p>
            <dl className="mt-10 grid gap-x-10 gap-y-8 border-t border-navy/20 pt-8 sm:grid-cols-3">
              <div>
                <dt className="label text-graphite">Programme value</dt>
                <dd className="mt-2 font-display text-[36px] leading-none text-navy">{m.value}</dd>
              </div>
              <div>
                <dt className="label text-graphite">Team</dt>
                <dd className="mt-2 font-display text-[36px] leading-none text-navy">{m.team} people</dd>
              </div>
              <div>
                <dt className="label text-graphite">Role</dt>
                <dd className="mt-2 font-display text-[24px] leading-tight text-navy">{m.role}</dd>
              </div>
            </dl>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <VisitMsAmlin tone="light" />
              <Link href="/case-studies/ms-amlin-solvency-ii" className="link-arrow text-navy">
                Earlier MS Amlin engagement: Solvency II Business Change, 2015 – 2016 <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone py-20 md:py-28">
        <div className="wrap grid gap-16 lg:grid-cols-3 lg:gap-12">
          <div>
            <h2 className="label text-graphite">Business domains</h2>
            <ul className="mt-5 space-y-2 text-[17px] text-charcoal">
              {m.domains.map((d) => (
                <li key={d} className="border-b border-navy/10 pb-2">
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="label text-graphite">Programme streams</h2>
            <ul className="mt-5 space-y-2 text-[17px] text-charcoal">
              {m.streams.map((d) => (
                <li key={d} className="border-b border-navy/10 pb-2">
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="label text-graphite">Technology and systems</h2>
            <ul className="mt-5 space-y-2 font-mono text-[14px] text-charcoal">
              {m.technology.map((d) => (
                <li key={d} className="border-b border-navy/10 pb-2">
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="wrap">
          <Link href="/case-studies" className="link-arrow mt-14 text-navy">
            All case studies <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
