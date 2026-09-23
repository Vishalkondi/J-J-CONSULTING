import Link from "next/link";
import { SectionHeading } from "../SectionHeading";
import { CorporateVideo } from "../CorporateVideo";
import { ContactForm } from "../ContactForm";
import { articles, spotlight } from "@/data/insights";
import { company } from "@/data/site";
import { formatDate } from "@/lib/utils";

export function NewsInsights() {
  const list = [
    { href: spotlight.href, type: spotlight.type, category: spotlight.category, title: spotlight.title, date: null as string | null },
    ...articles.slice(0, 3).map((a) => ({ href: `/insights/${a.slug}`, type: a.type, category: a.category, title: a.title, date: a.date })),
  ];
  return (
    <section className="bg-paper py-24 md:py-36" aria-labelledby="news-title">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div id="news-title">
            <SectionHeading eyebrow="News & insights" title="Perspectives from the field" />
          </div>
          <Link href="/insights" className="link-arrow text-navy">
            All insights <span aria-hidden>→</span>
          </Link>
        </div>
        <ul className="mt-14 border-t border-navy/20">
          {list.map((a) => (
            <li key={a.href} className="group border-b border-navy/20">
              <Link href={a.href} className="grid gap-3 py-8 md:grid-cols-[220px_1fr_140px] md:items-baseline md:gap-10">
                <span className="label text-gold-dark">{a.type}</span>
                <span className="font-display text-[clamp(22px,2.4vw,32px)] leading-snug text-navy transition-colors group-hover:text-steel">
                  {a.title}
                </span>
                <span className="font-mono text-[12px] text-graphite md:text-right">{a.date ? formatDate(a.date) : a.category}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function CorporateVideoSection() {
  return (
    <section className="bg-midnight py-24 text-white md:py-32" aria-labelledby="film-title">
      <div className="wrap">
        <div id="film-title">
          <SectionHeading tone="dark" eyebrow="Corporate video" title="J & J Consulting, in motion" />
        </div>
        <div className="mt-12">
          <CorporateVideo />
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="bg-paper py-24 md:py-36" id="contact" aria-labelledby="contact-title">
      <div className="wrap grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div>
          <h2 id="contact-title" className="text-[clamp(40px,5.6vw,84px)] leading-[1.02] text-navy">
            Let&rsquo;s Build What&rsquo;s Next.
          </h2>
          <p className="mt-8 max-w-md text-[18px] leading-relaxed text-graphite">
            Whether you are looking for technology expertise, specialist talent, workforce solutions, management consulting or professional
            technology training, speak with J &amp; J Consulting.
          </p>
          <address className="mt-12 border-l-2 border-gold pl-6 not-italic">
            <p className="label text-graphite">J &amp; J Consulting</p>
            <p className="mt-3 text-[16px] leading-[1.8] text-charcoal">
              {company.address.lines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </p>
          </address>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
