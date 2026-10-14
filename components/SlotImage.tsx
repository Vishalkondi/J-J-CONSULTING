"use client";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Image with a graceful, on-brand fallback while the real asset is still to be supplied.
 * In development the fallback shows the expected file path so nothing is forgotten.
 */
export function SlotImage({
  src,
  alt,
  className,
  imgClassName,
  label,
  fit = "cover",
  eager = false,
  fallback,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  label?: string;
  fit?: "cover" | "contain";
  eager?: boolean;
  fallback?: ReactNode;
}) {
  const [failed, setFailed] = useState(false);
  const dev = process.env.NODE_ENV !== "production";
  return (
    <div className={cn("relative overflow-hidden bg-navy", className)}>
      {!failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          onError={() => setFailed(true)}
          className={cn("absolute inset-0 h-full w-full", fit === "cover" ? "object-cover" : "object-contain", imgClassName)}
        />
      )}
      {failed && fallback}
      {failed && !fallback && (
        <div className="hero-fallback blueprint absolute inset-0 flex items-end p-4" role="img" aria-label={alt}>
          {dev && <span className="font-mono text-[10px] text-white/50">{label ?? src}</span>}
        </div>
      )}
    </div>
  );
}
