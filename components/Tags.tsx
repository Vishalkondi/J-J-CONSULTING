import { TechBadge } from "./howden/TechBadge";

export function Tags({ items, label }: { items: string[]; label: string }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2" aria-label={label}>
      {items.map((t) => (
        <TechBadge key={t}>{t}</TechBadge>
      ))}
    </ul>
  );
}
