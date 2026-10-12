import { BrandIcon, BrandLockup, MetalIcon } from "./BrandMark";
import { company } from "@/data/site";
import { cn } from "@/lib/utils";

type Props = {
  variant?: "compact" | "full";
  tone?: "light" | "dark"; // light = sits on a dark background
  size?: "hero" | "footer" | "default";
  /** "metal" = the gold-and-silver mark (home hero and navbar). */
  finish?: "brand" | "metal";
  className?: string;
};

/** Font size drives the whole stacked lockup (it is built in em units). */
const FULL_SIZES = {
  hero: "text-[clamp(13px,2.8vh,34px)]",
  footer: "text-[17px]",
  default: "text-[16px]",
} as const;

/**
 * J & J Consulting logo, fully vector (components/BrandMark.tsx): sharp at any size, no image
 * requests. `compact` = icon + "J & J" for the navbar/footer; `full` = the stacked brand lockup.
 * public/brand/jj-mark.svg remains for the favicon and other non-React uses.
 */
export function Logo({ variant = "compact", tone = "light", size = "default", finish = "brand", className }: Props) {
  const ink = tone === "light" ? "text-white" : "text-navy";

  if (variant === "compact" && finish === "metal") {
    return (
      <span className={cn("inline-flex items-center gap-3", ink, className)} aria-label="J & J Consulting">
        <MetalIcon className="h-10 w-auto sm:h-11" />
        <span className="flex flex-col items-center font-[Cinzel,serif] leading-none">
          <span className="text-[22px] font-medium tracking-[0.03em] sm:text-[24px]">
            J<span className="mx-[4px] text-gold-light">&amp;</span>J
          </span>
          <span className="mt-1 text-[9px] font-medium tracking-[0.24em] text-gold-light [margin-right:-0.24em]">CONSULTING</span>
        </span>
      </span>
    );
  }

  if (variant === "compact") {
    return (
      <span className={cn("inline-flex items-center gap-3", ink, className)} aria-label="J & J">
        <BrandIcon className="h-9 w-auto sm:h-10" />
        <span className="font-display text-[24px] leading-none tracking-[0.04em] sm:text-[26px]">
          J<span className="mx-[3px] text-gold">&amp;</span>J
        </span>
      </span>
    );
  }

  return <BrandLockup tone={tone} finish={finish} established={company.established} className={cn(FULL_SIZES[size], className)} />;
}
