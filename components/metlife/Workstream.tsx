import { Reveal } from "../Reveal";
import { Tags } from "../Tags";
import type { Workstream as W } from "@/data/metlife";

export function WorkstreamSection({ w, tone }: { w: W; tone: "paper" | "bone" }) {
  return (
    <section className={tone === "paper" ? "bg-paper py-20 md:py-28" : "bg-bone py-20 md:py-28"} aria-labelledby={`ws-${w.index}`}>
      <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_1.15fr] lg:gap-24">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-mono text-[12px] tracking-[0.1em] text-gold-dark">
            {w.index} · {w.kicker}
          </p>
          <h2 id={`ws-${w.index}`} className="mt-5 text-[clamp(30px,3.6vw,50px)] leading-[1.08] text-navy">
            {w.title}
          </h2>
          {w.lead && <p className="mt-6 text-[17px] leading-relaxed text-graphite">{w.lead}</p>}
          {w.leadTags && <Tags items={w.leadTags} label={`${w.kicker} scope`} />}
        </div>
        <Reveal>
          <div className="divide-y divide-navy/15 border-y border-navy/15">
            {w.blocks.map((b) => (
              <div key={b.title} className="py-6">
                <h3 className="label text-graphite">{b.title}</h3>
                {b.text && <p className="mt-3 text-[17px] leading-relaxed text-charcoal">{b.text}</p>}
                {b.tags && <Tags items={b.tags} label={b.title} />}
              </div>
            ))}
          </div>
          {w.closing && (
            <div className="mt-8">
              <p className="text-[17px] text-charcoal">{w.closing.text}</p>
              <ol className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 font-display text-[22px] text-navy">
                {w.closing.flow.map((f, i) => (
                  <li key={f} className="flex items-center gap-3">
                    {f}
                    {i < w.closing!.flow.length - 1 && (
                      <span aria-hidden className="text-gold-dark">
                        →
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
