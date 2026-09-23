import { Fragment } from "react";
import { metlife as m } from "@/data/metlife";
import { cn } from "@/lib/utils";

/** Centrepiece: the EMEA data journey. Pure CSS animation (see .flow in globals.css) — no JS, reduced-motion safe. */
export function DataJourney() {
  const layers = m.journey.layers;
  return (
    <section className="blueprint bg-midnight py-24 text-white md:py-32" aria-labelledby="journey-title">
      <div className="wrap">
        <p className="label text-gold-light">Architecture overview</p>
        <h2 id="journey-title" className="mt-5 text-[clamp(32px,4.4vw,60px)] leading-[1.05]">
          {m.journey.title}
        </h2>
        <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-white/70">
          Conceptual representation of the programme’s data flow, from source systems to business insight.
        </p>

        <ol className="mx-auto mt-16 flex max-w-xl flex-col items-stretch" aria-label="Data journey, top to bottom">
          {layers.map((l, i) => {
            const core = "core" in l && l.core;
            return (
              <Fragment key={l.label}>
                <li
                  className={cn(
                    "text-center",
                    core
                      ? "rounded-[28px] border border-[#7ED6C5] bg-navy-800/80 px-8 py-9 shadow-[0_0_60px_-10px_rgba(126,214,197,0.55)]"
                      : "border border-white/20 bg-navy/70 px-6 py-4",
                  )}
                >
                  <p
                    className={cn(
                      "font-display leading-tight",
                      core ? "text-[clamp(30px,3.4vw,44px)] text-white" : "text-[clamp(20px,2vw,26px)] text-white/95",
                    )}
                  >
                    {l.label}
                  </p>
                  {l.sub && (
                    <p className={cn("mt-2 font-mono text-[12px] tracking-wide", core ? "text-[#7ED6C5]" : "text-white/60")}>{l.sub}</p>
                  )}
                </li>
                {i < layers.length - 1 && <li aria-hidden className="flow" style={{ ["--d" as string]: `${i * 0.3}s` }} />}
              </Fragment>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
