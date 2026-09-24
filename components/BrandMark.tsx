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
 * Full stacked lockup: mark, "J & J", CONSULTING, EST. 2010 — all vector/live text, so it stays
 * sharp at any size. Everything scales from the font size set by `className` (e.g. text-[20px]).
 * tone: "light" = for dark backgrounds (white lettering), "dark" = for light backgrounds.
 */
export function BrandLockup({
  tone = "light",
  className,
  established = 2010,
}: {
  tone?: "light" | "dark";
  className?: string;
  established?: number;
}) {
  const ink = tone === "light" ? "text-white" : "text-navy";
  const gold = tone === "light" ? "text-gold-light" : "text-gold-dark";
  return (
    <span
      className={cn("inline-flex flex-col items-center font-[Cinzel,serif] leading-none", className)}
      role="img"
      aria-label={`J & J Consulting, established ${established}`}
    >
      <BrandIcon className="h-[6.4em] w-auto drop-shadow-[0_0.4em_0.9em_rgba(0,0,0,0.35)]" />
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
