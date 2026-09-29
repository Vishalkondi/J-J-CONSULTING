import { cn } from "@/lib/utils";

/** Wrapped list of short labels ("We worked on", business areas). */
export function Chips({ items, dark, className }: { items: readonly string[]; dark?: boolean; className?: string }) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {items.map((i) => (
        <li
          key={i}
          className={cn(
            "border px-3 py-1.5 text-[13.5px] leading-snug",
            dark ? "border-white/20 text-white/85" : "border-navy/15 bg-white text-navy",
          )}
        >
          {i}
        </li>
      ))}
    </ul>
  );
}
