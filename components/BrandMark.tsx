import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * The J & J mark, drawn inline as vector (same geometry and colours as public/brand/jj-mark.svg,
 * plus a soft top highlight). Gradient ids are made unique per instance so several marks on one
 * page never clash.
 */
export function BrandIcon({ className }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  const u = (n: string) => `${n}-${id}`;
  return (
    <svg viewBox="500 279 600 608" className={className} aria-hidden>
      <defs>
        <linearGradient id={u("b1")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3B82E4" />
          <stop offset="1" stopColor="#6FAEF2" />
        </linearGradient>
        <linearGradient id={u("b2")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2058B8" />
          <stop offset="1" stopColor="#74B0F2" />
        </linearGradient>
        <linearGradient id={u("g1")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#EBB84C" />
          <stop offset="1" stopColor="#EFCB7C" />
        </linearGradient>
        <linearGradient id={u("g2")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FAE6B2" />
          <stop offset="1" stopColor="#F4D590" />
        </linearGradient>
        <linearGradient id={u("hl")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.28" />
          <stop offset="0.35" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path fill={`url(#${u("b1")})`} d="M502 884V471A285 190 0 0 1 787 281V483H735A46 46 0 0 0 689 529V619A46 46 0 0 0 735 665H787V884Z" />
      <path fill={`url(#${u("b2")})`} d="M502 660C545 555 630 505 703 497A46 46 0 0 0 689 529V619A46 46 0 0 0 735 665H787V884H502Z" />
      <path
        fill={`url(#${u("g1")})`}
        d="M817 281H1098V684C1098 810 990 884 817 884V665H840A46 46 0 0 0 886 619V529A46 46 0 0 0 840 483H817Z"
      />
      <path fill={`url(#${u("g2")})`} d="M1098 458C1062 575 975 645 873 652A46 46 0 0 1 840 665H817V884C990 884 1098 810 1098 684Z" />
      {/* soft sheen across the top of both halves */}
      <path fill={`url(#${u("hl")})`} d="M502 884V471A285 190 0 0 1 787 281V483H735A46 46 0 0 0 689 529V619A46 46 0 0 0 735 665H787V884Z" />
      <path
        fill={`url(#${u("hl")})`}
        d="M817 281H1098V684C1098 810 990 884 817 884V665H840A46 46 0 0 0 886 619V529A46 46 0 0 0 840 483H817Z"
      />
    </svg>
  );
}

/**
 * Metallic variant of the mark: a gold-and-silver pinwheel around a dark square (the reference
 * hero artwork). Gold uprights left and right with large rounded outer corners, silver bars along
 * the top-right and bottom-left. Each piece has a bevel highlight.
 */
export function MetalIcon({ className }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  const u = (n: string) => `${n}-${id}`;
  const gold = "M68 8V116A8 8 0 0 1 60 124H8A8 8 0 0 1 0 116V60A60 60 0 0 1 60 0A8 8 0 0 1 68 8Z";
  const gold2 = "M140 76H192A8 8 0 0 1 200 84V140A60 60 0 0 1 140 200A8 8 0 0 1 132 192V84A8 8 0 0 1 140 76Z";
  const silver = "M84 0H192A8 8 0 0 1 200 8V60A8 8 0 0 1 192 68H84A8 8 0 0 1 76 60V8A8 8 0 0 1 84 0Z";
  const silver2 = "M8 132H116A8 8 0 0 1 124 140V192A8 8 0 0 1 116 200H8A8 8 0 0 1 0 192V140A8 8 0 0 1 8 132Z";
  return (
    <svg viewBox="-2 -2 204 204" className={className} aria-hidden>
      <defs>
        <linearGradient id={u("au")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FCE7A8" />
          <stop offset="0.35" stopColor="#E2B04A" />
          <stop offset="0.7" stopColor="#C08A2C" />
          <stop offset="1" stopColor="#8C5F1C" />
        </linearGradient>
        <linearGradient id={u("ag")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#B9BDC2" />
          <stop offset="0.5" stopColor="#7D8188" />
          <stop offset="1" stopColor="#4B4F56" />
        </linearGradient>
        <linearGradient id={u("hl")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.45" />
          <stop offset="0.4" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="78" y="78" width="44" height="44" rx="6" fill="#0B1220" fillOpacity="0.55" />
      {[gold, gold2].map((d) => (
        <path key={d} d={d} fill={`url(#${u("au")})`} />
      ))}
      {[silver, silver2].map((d) => (
        <path key={d} d={d} fill={`url(#${u("ag")})`} />
      ))}
      {/* bevel: a fine light edge and a sheen across the top of every piece */}
      {[gold, gold2, silver, silver2].map((d) => (
        <g key={d}>
          <path d={d} fill={`url(#${u("hl")})`} />
          <path d={d} fill="none" stroke="#fff" strokeOpacity="0.35" strokeWidth="1.5" />
        </g>
      ))}
    </svg>
  );
}

/**
 * Full stacked lockup: mark, "J & J", CONSULTING, EST. 2010 — all vector/live text, so it stays
 * sharp at any size. Everything scales from the font size set by `className` (e.g. text-[20px]).
 * tone: "light" = for dark backgrounds (white lettering), "dark" = for light backgrounds.
 */
export function BrandLockup({
  tone = "light",
  className,
  established = 2010,
  finish = "brand",
}: {
  tone?: "light" | "dark";
  className?: string;
  established?: number;
  /** "metal" swaps in the gold-and-silver MetalIcon, used on the home hero. */
  finish?: "brand" | "metal";
}) {
  const ink = tone === "light" ? "text-white" : "text-navy";
  const gold = tone === "light" ? "text-gold-light" : "text-gold-dark";
  return (
    <span
      className={cn("inline-flex flex-col items-center font-[Cinzel,serif] leading-none", className)}
      role="img"
      aria-label={`J & J Consulting, established ${established}`}
    >
      {finish === "metal" ? (
        <MetalIcon className="h-[7.2em] w-auto drop-shadow-[0_0_1.4em_rgba(235,184,76,0.45)]" />
      ) : (
        <BrandIcon className="h-[6.4em] w-auto drop-shadow-[0_0.4em_0.9em_rgba(0,0,0,0.35)]" />
      )}
      <span className={cn("mt-[0.4em] text-[2.55em] font-medium tracking-[0.03em]", ink)} aria-hidden>
        J<span className={cn("mx-[0.22em]", gold)}>&amp;</span>J
      </span>
      <span
        className={cn(
          "mt-[0.2em] text-[0.66em] font-medium tracking-[0.24em] [-webkit-text-stroke:0.02em_currentColor] [margin-right:-0.24em]",
          gold,
        )}
        aria-hidden
      >
        CONSULTING
      </span>
      <span
        className={cn("mt-[0.65em] flex w-full items-center gap-[0.6em] font-display text-[0.5em] tracking-[0.24em]", gold)}
        aria-hidden
      >
        <span className="h-px flex-1 bg-current opacity-80" />
        <span className="[margin-right:-0.24em]">EST. {established}</span>
        <span className="h-px flex-1 bg-current opacity-80" />
      </span>
    </span>
  );
}
