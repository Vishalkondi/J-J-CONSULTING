import type { Stat } from "@/data/howden-hx";

export function StatChips({ stats }: { stats: Stat[] }) {
  return (
    <dl className="mt-12 flex flex-wrap gap-3" aria-label="Engagement at a glance">
      {stats.map((s) => (
        <div key={s.label} className="flex items-baseline gap-3 border border-white/25 bg-midnight/40 px-5 py-3 backdrop-blur-sm">
          <dt className="order-2 text-[13px] text-white/80">{s.label}</dt>
          <dd className="order-1 font-display text-[32px] leading-none text-gold-light">{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}
