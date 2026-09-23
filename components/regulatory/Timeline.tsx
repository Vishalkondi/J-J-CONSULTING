import { Reveal } from "../Reveal";

/** Eight-stage journey: vertical on mobile, 4×2 on tablet, single horizontal row on wide screens. */
export function Timeline({ stages }: { stages: readonly string[] }) {
  return (
    <ol
      className="relative mt-14 grid gap-0 border-l border-navy/20 pl-8 md:grid-cols-4 md:gap-x-6 md:gap-y-12 md:border-l-0 md:pl-0 xl:grid-cols-8 xl:gap-x-4"
      aria-label="Transformation journey"
    >
      {stages.map((s, i) => (
        <li key={s} className="relative pb-10 md:pb-0">
          <Reveal delay={i * 0.06} y={14}>
            <span aria-hidden className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full border border-navy bg-paper md:hidden" />
            <div className="hidden items-center gap-3 md:flex" aria-hidden>
              <span className="h-2.5 w-2.5 shrink-0 rounded-full border border-navy bg-paper" />
              <span className="h-px flex-1 bg-navy/20" />
            </div>
            <p className="font-mono text-[12px] tracking-[0.1em] text-gold-dark md:mt-5">{String(i + 1).padStart(2, "0")}</p>
            <h3 className="mt-2 font-display text-[22px] leading-tight text-navy">{s}</h3>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
