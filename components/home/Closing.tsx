import Link from "next/link";
import { InsightCard } from "../InsightCard";
import { ContactDetails } from "../ContactDetails";
import { SectionHeading } from "../SectionHeading";
import { CorporateVideo } from "../CorporateVideo";
import { ContactForm } from "../ContactForm";
import { articles, spotlight } from "@/data/insights";

export function NewsInsights() {
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
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <li>
            <InsightCard {...spotlight} />
          </li>
          {articles.slice(0, 3).map((a) => (
            <li key={a.slug}>
              <InsightCard href={`/insights/${a.slug}`} {...a} />
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
          <ContactDetails className="mt-12" />
        </div>
        <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-[0_24px_60px_-30px_rgba(12,32,56,0.4)] sm:p-10">
          <p className="font-display text-[26px] leading-tight text-navy">Send us a message</p>
          <p className="mb-8 mt-2 text-[14.5px] text-graphite">Tell us what you need and we will respond.</p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
