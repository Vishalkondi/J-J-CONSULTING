import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CaseOverview } from "@/components/case/CaseOverview";
import { NumberedListSection } from "@/components/case/NumberedListSection";
import { TechnologySection } from "@/components/case/TechnologySection";
import { CtaBand } from "@/components/CtaBand";
import { company } from "@/data/site";
import { images } from "@/data/howden-hx";
import { westfield as w } from "@/data/westfield";

const url = `${company.url}/case-studies/${w.slug}`;

export const metadata: Metadata = {
  title: { absolute: w.seo.title },
  description: w.seo.description,
  alternates: { canonical: url },
  openGraph: { title: w.seo.title, description: w.seo.description, url, siteName: company.brand, locale: "en_GB", type: "article" },
  twitter: { card: "summary_large_image", title: w.seo.title, description: w.seo.description },
};

const pad = (n: number) => String(n).padStart(2, "0");

export default function WestfieldPage() {
  return (
    <>
      <PageHero
        eyebrow={w.eyebrow}
        title={
          <>
            {w.title}
            <span className="mt-3 block text-[0.5em] leading-tight text-white/75">{w.subtitle}</span>
          </>
        }
        intro={`${w.role} · ${w.period}`}
        image={images.citySkylineDusk}
      />

      {/* OVERVIEW */}
      <CaseOverview
        client={w.client}
        logo={w.logo}
        facts={[
          { label: "Role", value: w.role },
          { label: "Period", value: w.period },
          { label: "Project", value: w.title },
          { label: "Location", value: "Luxembourg" },
        ]}
        heading="Preparing a new Luxembourg entity to write Company Market business"
        statement={w.statement}
        stats={w.stats}
        tagsLabel="Business areas"
        tags={w.domains}
      />

      {/* DELIVERIES */}
      <section className="blueprint relative bg-midnight py-20 text-white md:py-28" aria-labelledby="del-title">
        <div className="wrap">
          <p className="label text-gold-light">Three deliveries</p>
          <h2 id="del-title" className="mt-5 max-w-3xl text-balance text-[clamp(30px,3.6vw,50px)] leading-[1.08]">
            One entity setup, three workstreams
          </h2>
          <ol className="mt-12 grid gap-px border border-white/15 bg-white/15 md:grid-cols-3">
            {w.deliveries.map((d, i) => (
              <li key={d.title} className="flex flex-col gap-4 bg-midnight p-7 md:p-9">
                <span className="font-mono text-[12px] text-gold-light">Delivery {pad(i + 1)}</span>
                <h3 className="font-display text-[clamp(24px,2.4vw,30px)] leading-tight">{d.title}</h3>
                <p className="text-[16px] leading-relaxed text-white/70">{d.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12 flex flex-col gap-4 border-l-2 border-gold pl-6 md:flex-row md:items-center md:gap-8">
            <p className="label text-gold-light">Company Market messages</p>
            <ul className="flex flex-wrap gap-2">
              {w.messages.map((m) => (
                <li key={m} className="border border-white/20 px-3 py-1.5 font-mono text-[12px] tracking-[0.08em] text-white/85">
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <NumberedListSection id="ach-title" eyebrow="Delivered" title="What the engagement put in place" items={w.achievements} tone="bone" />

      <NumberedListSection
        id="resp-title"
        eyebrow="Role in practice"
        title="Key responsibilities"
        items={w.responsibilities}
        aside={
          <div className="blueprint relative mt-10 bg-navy p-7 text-white md:p-8">
            <p className="label text-gold-light">Vendor teams managed</p>
            <p className="mt-2 font-display text-[40px] leading-none">{w.vendors.length}</p>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 border-t border-white/15 pt-5" aria-label="Vendor teams managed">
              {w.vendors.map((v) => (
                <li key={v} className="flex items-center gap-2.5 py-1.5 font-display text-[19px]">
                  <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {v}
                </li>
              ))}
            </ul>
          </div>
        }
      />

      <TechnologySection items={w.technology} />
      <CtaBand />
    </>
  );
}
