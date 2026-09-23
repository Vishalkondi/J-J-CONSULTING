import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { articles } from "@/data/insights";
import { company } from "@/data/site";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) return {};
  const url = `${company.url}/insights/${a.slug}`;
  return {
    title: a.title,
    description: a.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: a.title,
      description: a.excerpt,
      url,
      type: "article",
      publishedTime: a.date,
      siteName: company.brand,
      locale: "en_GB",
    },
    twitter: { card: "summary_large_image", title: a.title, description: a.excerpt },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) notFound();
  const more = articles.filter((x) => x.slug !== a.slug).slice(0, 3);
  const ld = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.excerpt,
    datePublished: a.date,
    author: { "@type": "Organization", name: company.brand },
    publisher: { "@type": "Organization", name: company.legalName },
  };
  return (
    <>
      <PageHero eyebrow={`${a.type} · ${a.category}`} title={a.title} intro={a.excerpt}>
        <p className="mt-8 font-mono text-[12px] text-white/55">
          {formatDate(a.date)} · {a.readMinutes} min read · J &amp; J Consulting
        </p>
      </PageHero>
      <article className="bg-paper py-20 md:py-28">
        <div className="wrap">
          <div className="prose-jj mx-auto max-w-[720px]">
            {a.body.map((b, i) => (
              <div key={i}>
                {b.h && <h2>{b.h}</h2>}
                {b.p?.map((t, k) => (
                  <p key={k}>{t}</p>
                ))}
                {b.list && (
                  <ul>
                    {b.list.map((l) => (
                      <li key={l}>{l}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <p className="mt-14 border-t border-navy/15 pt-6 font-mono !text-[12px] !leading-relaxed text-graphite">
              This article reflects general industry perspective and does not describe any client&rsquo;s confidential information.
            </p>
          </div>
        </div>
      </article>
      <section className="bg-bone py-20">
        <div className="wrap">
          <p className="label text-gold-dark">Continue reading</p>
          <ul className="mt-6 border-t border-navy/20">
            {more.map((m) => (
              <li key={m.slug} className="border-b border-navy/20">
                <Link
                  href={`/insights/${m.slug}`}
                  className="group flex items-baseline justify-between gap-6 py-6 font-display text-[clamp(20px,2.2vw,28px)] text-navy hover:text-steel"
                >
                  {m.title}
                  <span aria-hidden className="text-gold-dark transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
}
