import { cn } from "@/lib/utils";

/** Numbered tile grid for systems, tools and partner lists on case-study pages. */
export function TileGrid({ items, label, className }: { items: readonly string[]; label: string; className?: string }) {
  return (
    <ul aria-label={label} className={cn("grid grid-cols-2 border-l border-t border-navy/15 sm:grid-cols-3", className)}>
      {items.map((it, i) => (
        <li
          key={it}
          className="flex min-h-[104px] flex-col justify-between gap-4 border-b border-r border-navy/15 bg-white p-5 transition-colors hover:bg-paper"
        >
          <span className="font-mono text-[11px] text-gold-dark">{String(i + 1).padStart(2, "0")}</span>
          <span className="font-display text-[18px] leading-tight text-navy">{it}</span>
        </li>
      ))}
    </ul>
  );
}
