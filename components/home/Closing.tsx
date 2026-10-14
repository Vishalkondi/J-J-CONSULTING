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
          <div className="mt-12 border-t border-navy/15 pt-10">
            <p className="label text-gold-dark">What happens next</p>
            <ol className="relative mt-6">
              <span aria-hidden className="absolute bottom-4 left-[15px] top-4 w-px bg-gradient-to-b from-gold to-gold/15" />
              {[
                [
                  "We review your enquiry",
                  "Your message goes to the right discipline: technology, consulting, talent, training or workforce.",
                ],
                ["We get in touch", "A member of the team contacts you to understand your requirements in more detail."],
                ["We agree next steps", "Together we define the scope and the most practical way forward."],
              ].map(([t, d], i) => (
                <li key={t} className="relative grid grid-cols-[32px_1fr] gap-4 pb-6 last:pb-0">
                  <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-gold bg-paper font-mono text-[11px] text-gold-dark">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="pt-1">
                    <p className="font-display text-[19px] leading-tight text-navy">{t}</p>
                    <p className="mt-1 max-w-sm text-[14.5px] leading-relaxed text-graphite">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="self-start rounded-2xl border border-navy/10 bg-white p-6 shadow-[0_24px_60px_-30px_rgba(12,32,56,0.4)] sm:p-10">
          <p className="label text-gold-dark">Enquiries</p>
          <p className="mt-3 font-display text-[30px] leading-tight text-navy">Send us a message</p>
          <p className="mb-8 mt-2 text-[14.5px] text-graphite">
            Tell us what you need and we will respond. Fields marked <span className="text-gold-dark">*</span> are required.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
