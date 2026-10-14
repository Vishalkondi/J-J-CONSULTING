import { BrandIcon, BrandLockup } from "./BrandMark";
import { company } from "@/data/site";
import { cn } from "@/lib/utils";

type Props = {
  variant?: "compact" | "full";
  tone?: "light" | "dark"; // light = sits on a dark background
  size?: "hero" | "footer" | "default";
  className?: string;
};

/** Font size drives the whole stacked lockup (it is built in em units). */
const FULL_SIZES = {
  hero: "text-[clamp(13px,2.4vh,30px)]",
  footer: "text-[17px]",
  default: "text-[16px]",
} as const;

/**
 * J & J Consulting logo, fully vector (components/BrandMark.tsx): sharp at any size, no image
 * requests. `compact` = icon + "J & J" for the navbar/footer; `full` = the stacked brand lockup.
 * public/brand/jj-mark.svg remains for the favicon and other non-React uses.
 */
export function Logo({ variant = "compact", tone = "light", size = "default", className }: Props) {
  const ink = tone === "light" ? "text-white" : "text-navy";

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

  return <BrandLockup tone={tone} established={company.established} className={cn(FULL_SIZES[size], className)} />;
}
