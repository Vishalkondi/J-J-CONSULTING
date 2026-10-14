import Link from "next/link";
import { SignatureVisual } from "../SignatureVisual";
import { SectionHeading } from "../SectionHeading";
import { services } from "@/data/site";

export function WhatWeDo() {
  return (
    <>
      <section className="blueprint relative bg-midnight py-24 text-white md:py-32" aria-labelledby="wwd">
        <div className="wrap">
          <div id="wwd">
            <SectionHeading
              tone="dark"
              eyebrow="What we do"
              title="Five disciplines. One connected firm."
              intro="Technology, consulting, talent, training and workforce solutions, working together around a single client need."
            />
          </div>
          <div className="mt-16">
            <SignatureVisual />
          </div>
        </div>
      </section>

      <section className="bg-paper py-24 md:py-32">
        <div className="wrap">
          <ul className="border-t border-navy/20">
            {services.map((s) => (
              <li key={s.slug} className="group border-b border-navy/20">
                <Link
                  href={`/services/${s.slug}`}
                  className="grid gap-x-10 gap-y-4 py-9 md:grid-cols-[90px_1.1fr_1.4fr_auto] md:items-start md:py-12"
                >
                  <span className="font-mono text-[13px] text-gold-dark">{s.index}</span>
                  <h3 className="text-[clamp(26px,3vw,40px)] leading-[1.1] text-navy transition-colors group-hover:text-steel">
                    {s.title}
                  </h3>
                  <div>
                    <p className="max-w-xl text-[16px] leading-relaxed text-graphite">{s.description}</p>
                    <p className="mt-4 hidden max-w-xl font-mono text-[11.5px] leading-[1.9] text-graphite/70 md:block">
                      {s.items.slice(0, 6).join("  /  ")}
                    </p>
                  </div>
                  <span className="mt-2 inline-flex items-center gap-2 text-[14px] font-medium text-navy md:justify-self-end">
                    <span className="border-b border-gold/60 pb-0.5 transition-colors group-hover:border-navy">{s.cta}</span>
                    <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
