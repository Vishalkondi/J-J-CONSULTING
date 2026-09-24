"use client";
import { useCallback, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Consistent client-logo treatment: subtle monochrome by default, original colours on hover/focus.
 * Falls back to a typographic wordmark when no official logo has been supplied (never a broken image).
 */
export function ClientLogo({ name, logo, className }: { name: string; logo: string | null; className?: string }) {
  const [failed, setFailed] = useState(false);
  const showImage = logo && !failed;
  // A server-rendered <img> can fail before hydration attaches onError, so also check on mount.
  const checkLoaded = useCallback((img: HTMLImageElement | null) => {
    if (img?.complete && img.naturalWidth === 0) setFailed(true);
  }, []);
  return (
    <span className={cn("flex h-full w-full items-center justify-center", className)}>
      {showImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={checkLoaded}
          src={logo}
          alt={`${name} logo`}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className="h-14 w-auto max-w-[70%] object-contain opacity-60 mix-blend-multiply grayscale transition duration-300 group-focus-within:opacity-100 group-focus-within:grayscale-0 group-hover:opacity-100 group-hover:grayscale-0 sm:h-16"
        />
      ) : (
        <span className="text-center font-display text-[clamp(18px,1.7vw,24px)] leading-tight text-graphite/65 transition-colors duration-300 group-focus-within:text-navy group-hover:text-navy">
          {name}
        </span>
      )}
    </span>
  );
}
