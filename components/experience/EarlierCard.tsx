import { ClientMark } from "@/components/ClientMark";
import type { Engagement } from "@/data/experience";
import { Chips } from "./Chips";

/** Compact card for an earlier-career engagement, credited to the firm it was delivered through. */
export function EarlierCard({ e }: { e: Engagement }) {
  return (
    <article
      id={e.id}
      className="flex scroll-mt-24 flex-col border border-navy/15 bg-white transition-shadow hover:shadow-[0_18px_40px_-24px_rgba(12,32,56,0.35)]"
    >
      <div className="flex items-center gap-5 border-b border-navy/10 p-6">
        <ClientMark name={e.client} logo={e.logo} pad="p-2" className="h-16 w-24 shrink-0" />
        <div>
          <p className="font-display text-[21px] leading-tight text-navy">{e.client}</p>
          <p className="mt-1 font-mono text-[11px] tracking-[0.1em] text-gold-dark">
            {e.period} · {e.via}
          </p>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-[22px] leading-snug text-navy">{e.title}</h3>
        <div className="mt-3 space-y-3 text-[15.5px] leading-relaxed text-graphite">
          {e.summary.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        {e.workedOn && (
          <div className="mt-6">
            <p className="label text-gold-dark">{e.workedOnLabel ?? "We worked on"}</p>
            <Chips items={e.workedOn} className="mt-4" />
          </div>
        )}
        {e.outcome && <p className="mt-6 border-l-2 border-gold pl-4 text-[15.5px] leading-relaxed text-navy">{e.outcome}</p>}
      </div>
    </article>
  );
}
