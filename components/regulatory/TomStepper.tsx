import { Fragment } from "react";
import { Reveal } from "../Reveal";

/** Five-step target-operating-model transition. Row on wide screens, column on mobile. */
export function TomStepper({ steps }: { steps: readonly string[] }) {
  return (
    <ol className="mt-14 grid gap-3 lg:grid-cols-[repeat(9,auto)] lg:items-stretch lg:gap-0" aria-label="Target operating model transition">
      {steps.map((s, i) => (
        <Fragment key={s}>
          <li className="lg:min-w-0">
            <Reveal delay={i * 0.07} y={12} className="h-full">
              <div className="h-full border border-white/20 bg-navy/60 p-6 transition-colors duration-300 hover:border-steel-light">
                <span className="font-mono text-[12px] tracking-[0.1em] text-gold-light">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-3 font-display text-[clamp(20px,1.8vw,24px)] leading-tight text-white">{s}</p>
              </div>
            </Reveal>
          </li>
          {i < steps.length - 1 && (
            <li aria-hidden className="flex items-center justify-center py-1 text-[20px] text-steel-light lg:px-3 lg:py-0">
              <span className="rotate-90 lg:rotate-0">→</span>
            </li>
          )}
        </Fragment>
      ))}
    </ol>
  );
}
