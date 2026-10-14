"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  variant?: "compact" | "full";
  tone?: "light" | "dark"; // light = sits on a dark background
  size?: "hero" | "footer" | "default";
  className?: string;
};

const FULL_SIZES = {
  hero: "h-[clamp(130px,24vh,320px)]",
  footer: "h-44",
  default: "h-40",
} as const;

/**
 * Supplied J & J Consulting artwork lives in /public/brand:
 *   jj-mark.svg             vector icon (navbar, favicon)
 *   jj-consulting.png       full lockup for light backgrounds
 *   jj-consulting-light.png full lockup for dark backgrounds (white "J & J")
 * If a file is missing, a typographic placeholder is shown so nothing breaks.
 */
export function Logo({ variant = "compact", tone = "light", size = "default", className }: Props) {
  const [failed, setFailed] = useState(false);
  const ink = tone === "light" ? "text-white" : "text-navy";

  if (variant === "compact") {
    return (
      <span className={cn("inline-flex items-center gap-3", ink, className)} aria-label="J & J">
        {!failed && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src="/brand/jj-mark.svg" alt="" width={40} height={40} onError={() => setFailed(true)} className="h-9 w-auto sm:h-10" />
        )}
        <span className="font-display text-[24px] leading-none tracking-[0.04em] sm:text-[26px]">
          J<span className="mx-[3px] text-gold">&amp;</span>J
        </span>
      </span>
    );
  }

  if (!failed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={tone === "light" ? "/brand/jj-consulting-light.png" : "/brand/jj-consulting.png"}
        alt="J & J Consulting — established 2010"
        width={625}
        height={1093}
        onError={() => setFailed(true)}
        className={cn("w-auto", FULL_SIZES[size], className)}
      />
    );
  }
  return (
    <span className={cn("inline-flex flex-col", ink, className)} aria-label="J & J Consulting">
      <span className="font-display text-[clamp(56px,9vw,120px)] leading-[0.9]">
        J<span className="mx-[0.08em] text-gold">&amp;</span>J
      </span>
      <span className="mt-3 flex items-center gap-4">
        <span className="font-mono text-[clamp(12px,1.5vw,18px)] tracking-[0.5em]">CONSULTING</span>
        <span className="h-px flex-1 bg-gold/70" />
      </span>
    </span>
  );
}
