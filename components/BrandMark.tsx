import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * The earlier blue-and-gold J & J mark, drawn inline as vector with a soft top highlight; kept
 * for Logo finish="brand". Gradient ids are made unique per instance so several marks on one
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
 * Metallic variant of the mark (the reference hero artwork): a pinwheel of two folded gold pieces
 * and two gunmetal squares around a dark square opening. Gold top-left and bottom-right, each with
 * a large rounded outer corner, a curved inner corner and a darker fold facet; gunmetal top-right
 * and bottom-left. Geometry is shared with public/brand/jj-mark.svg and app/icon.svg.
 */
export const METAL_PATHS = {
  gold: "M0 136V38A38 38 0 0 1 38 0H96V58H84A20 20 0 0 0 64 78V136Z",
  gold2: "M200 64V162A38 38 0 0 1 162 200H104V142H116A20 20 0 0 0 136 122V64Z",
  // darker lower face of each gold fold, split from the lit face by a curved crease
  fold: "M0 136V126C14 92 44 64 84 58A20 20 0 0 0 64 78V136Z",
  fold2: "M200 64V74C186 108 156 136 116 142A20 20 0 0 0 136 122V64Z",
  silver: "M107 0H197A3 3 0 0 1 200 3V57A3 3 0 0 1 197 60H107A3 3 0 0 1 104 57V3A3 3 0 0 1 107 0Z",
  silver2: "M3 140H93A3 3 0 0 1 96 143V197A3 3 0 0 1 93 200H3A3 3 0 0 1 0 197V143A3 3 0 0 1 3 140Z",
} as const;

export function MetalIcon({ className }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  const u = (n: string) => `${n}-${id}`;
  const { gold, gold2, fold, fold2, silver, silver2 } = METAL_PATHS;
  return (
    <svg viewBox="-2 -2 204 204" className={className} aria-hidden>
      <defs>
        <linearGradient id={u("au")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F2C566" />
          <stop offset="0.45" stopColor="#FBE3A0" />
          <stop offset="1" stopColor="#D9A23F" />
        </linearGradient>
        <linearGradient id={u("au2")} x1="1" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#F2C566" />
          <stop offset="0.45" stopColor="#FBE3A0" />
          <stop offset="1" stopColor="#D9A23F" />
        </linearGradient>
        <linearGradient id={u("fd")} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#8E5F1A" />
          <stop offset="0.55" stopColor="#C68B2C" />
          <stop offset="1" stopColor="#F0C468" />
        </linearGradient>
        <linearGradient id={u("fd2")} x1="1" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8E5F1A" />
          <stop offset="0.55" stopColor="#C68B2C" />
          <stop offset="1" stopColor="#F0C468" />
        </linearGradient>
        <linearGradient id={u("ag")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8C8F95" />
          <stop offset="0.5" stopColor="#6A6D73" />
          <stop offset="1" stopColor="#45484E" />
        </linearGradient>
      </defs>
      <path d={gold} fill={`url(#${u("au")})`} />
      <path d={fold} fill={`url(#${u("fd")})`} />
      <path d={gold2} fill={`url(#${u("au2")})`} />
      <path d={fold2} fill={`url(#${u("fd2")})`} />
      <path d={silver} fill={`url(#${u("ag")})`} />
      <path d={silver2} fill={`url(#${u("ag")})`} />
      {/* bright metal rim on every piece */}
      {[gold, gold2].map((d) => (
        <path key={d} d={d} fill="none" stroke="#FFE7A6" strokeOpacity="0.85" strokeWidth="1.4" />
      ))}
      {[silver, silver2].map((d) => (
        <path key={d} d={d} fill="none" stroke="#E9C77A" strokeOpacity="0.55" strokeWidth="1.2" />
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
        <MetalIcon className="h-[7.6em] w-auto drop-shadow-[0_0_1.2em_rgba(240,180,70,0.55)]" />
      ) : (
        <BrandIcon className="h-[6.4em] w-auto drop-shadow-[0_0.4em_0.9em_rgba(0,0,0,0.35)]" />
      )}
      <span className={cn("mt-[0.4em] text-[2.8em] font-medium tracking-[0.03em]", ink)} aria-hidden>
        J<span className={cn("mx-[0.22em]", gold)}>&amp;</span>J
      </span>
      <span
        className={cn(
          "mt-[0.15em] text-[0.82em] font-medium tracking-[0.22em] [-webkit-text-stroke:0.02em_currentColor] [margin-right:-0.24em]",
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
