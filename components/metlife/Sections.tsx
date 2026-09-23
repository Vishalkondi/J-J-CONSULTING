import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { Tags } from "../Tags";
import { capabilities, ecosystem, impact, metlife as m } from "@/data/metlife";

export function ImpactCards() {
  return (
    <section className="bg-paper py-24 md:py-32" aria-labelledby="impact-title">
      <div className="wrap">
        <div id="impact-title">
          <SectionHeading eyebrow="Transformation impact" title="What the programme put in place" />
        </div>
        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {impact.map((c) => (
            <li key={c.title}>
              <Reveal className="h-full">
                <article className="h-full border border-navy/15 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-navy/30 hover:shadow-[0_18px_40px_-20px_rgba(12,32,56,0.35)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                  <span aria-hidden className="block h-px w-10 bg-[#3FB6A8]" />
                  <h3 className="mt-6 text-[26px] leading-tight text-navy">{c.title}</h3>
                  <p className="mt-4 text-[16px] leading-relaxed text-graphite">{c.text}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Ecosystem() {
  return (
    <section className="bg-bone py-24 md:py-28" aria-labelledby="eco-title">
      <div className="wrap">
        <div id="eco-title">
          <SectionHeading eyebrow="Technology ecosystem" title="Platforms and tools referenced" />
        </div>
        <div className="mt-12 grid gap-10 border-t border-navy/20 pt-10 md:grid-cols-2">
          {ecosystem.map((g) => (
            <div key={g.group}>
              <h3 className="label text-graphite">{g.group}</h3>
              <Tags items={[...g.items]} label={g.group} />
            </div>
          ))}
          <div className="md:col-span-2">
            <h3 className="label text-graphite">Business domains</h3>
            <Tags items={[...m.domains]} label="Business domains" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Capabilities() {
  return (
    <section className="blueprint bg-midnight py-20 text-white md:py-28" aria-labelledby="cap-title">
      <div className="wrap">
        <h2 id="cap-title" className="label text-gold-light">
          Core capabilities
        </h2>
        <div className="mt-10 grid border-l border-t border-white/20 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <div key={c.group} className="border-b border-r border-white/20 p-7">
              <h3 className="font-display text-[26px] leading-tight">{c.group}</h3>
              <ul className="mt-4 space-y-1.5 text-[14.5px] text-white/70">
                {c.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
