import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ClientMark } from "@/components/ClientMark";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { company } from "@/data/site";
import { images } from "@/data/howden-hx";
import { collinson as c } from "@/data/collinson";

const url = `${company.url}/case-studies/${c.slug}`;

export const metadata: Metadata = {
  title: { absolute: c.seo.title },
  description: c.seo.description,
  alternates: { canonical: url },
  openGraph: { title: c.seo.title, description: c.seo.description, url, siteName: company.brand, locale: "en_GB", type: "article" },
  twitter: { card: "summary_large_image", title: c.seo.title, description: c.seo.description },
};

export default function CollinsonPage() {
  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} intro={`${c.role} · ${c.period}`} image={images.citySkylineDusk} />

      <section className="bg-paper py-20 md:py-28" aria-label="Overview">
        <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-24">
          <ClientMark name={c.client} logo={c.logo} className="aspect-square w-full max-w-[280px] border border-navy/10" />
          <p className="max-w-2xl text-[19px] leading-relaxed text-graphite">{c.statement}</p>
        </div>
      </section>

      <section className="bg-bone py-20 md:py-28" aria-labelledby="prog-title">
        <div className="wrap">
          <h2 id="prog-title" className="text-[clamp(30px,3.6vw,48px)] leading-[1.08] text-navy">
            Two programmes
          </h2>
          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {c.programmes.map((p) => (
              <li key={p.title}>
                <Reveal className="h-full">
                  <article className="h-full border border-navy/15 bg-white p-8 md:p-10">
                    <h3 className="text-[clamp(24px,2.4vw,32px)] leading-tight text-navy">{p.title}</h3>
                    <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-5 border-t border-navy/15 pt-6">
                      <div>
                        <dt className="label text-graphite">Programme value</dt>
                        <dd className="mt-2 font-display text-[36px] leading-none text-navy">{p.value}</dd>
                      </div>
                      <div>
                        <dt className="label text-graphite">Team</dt>
                        <dd className="mt-2 font-display text-[36px] leading-none text-navy">{p.team}</dd>
                      </div>
                      {p.note && (
                        <div>
                          <dt className="label text-graphite">Scale</dt>
                          <dd className="mt-2 font-display text-[24px] leading-tight text-navy">{p.note}</dd>
                        </div>
                      )}
                    </dl>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="wrap grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <h2 className="label text-graphite">Business areas</h2>
            <ul className="mt-5 grid gap-x-8 sm:grid-cols-2">
              {c.domains.map((d) => (
                <li key={d} className="border-b border-navy/10 py-3 text-[17px] text-charcoal">
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="label text-graphite">Technology and systems</h2>
            <ul className="mt-5 grid gap-x-8 font-mono text-[14px] text-charcoal sm:grid-cols-2">
              {c.technology.map((d) => (
                <li key={d} className="border-b border-navy/10 py-3">
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
