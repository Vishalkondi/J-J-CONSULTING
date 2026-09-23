"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cities } from "@/data/site";
import { SlotImage } from "./SlotImage";
import { slugify, cn } from "@/lib/utils";

/**
 * Global business hubs. Drop imagery into /public/images/cities/<city>.jpg
 * and optional aerial clips into /public/videos/cities/<city>.mp4 (London strongly recommended).
 * These are reference cities, NOT office locations.
 */
export function CityShowcase() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [videoOk, setVideoOk] = useState<Record<string, boolean>>({});
  // The city video is only rendered once mounted=true, so the server and the client's first
  // paint agree (neither renders it) and only reveal/hide it after we know the real
  // reduced-motion preference — useReducedMotion() is unknown during SSR, so gating the video's
  // presence directly on `reduce` would cause a hydration mismatch.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (reduce || paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % cities.length), 6500);
    return () => clearInterval(t);
  }, [reduce, paused]);

  const c = cities[i];
  const slug = slugify(c.name);

  return (
    <div className="grid gap-8 lg:grid-cols-[280px_1fr]" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <ul
        className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:px-0"
        role="tablist"
        aria-label="Business hubs"
      >
        {cities.map((ct, k) => (
          <li key={ct.name} className="shrink-0">
            <button
              role="tab"
              aria-selected={k === i}
              onClick={() => setI(k)}
              className={cn(
                "flex w-full items-baseline gap-3 border-white/15 py-3 text-left font-display text-[26px] transition-colors lg:border-b lg:text-[32px]",
                k === i ? "text-white" : "text-white/40 hover:text-white/75",
              )}
            >
              <span className={cn("h-px transition-all duration-500", k === i ? "w-8 bg-gold" : "w-3 bg-white/30")} aria-hidden />
              {ct.name}
            </button>
          </li>
        ))}
      </ul>

      <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/9]" role="tabpanel" aria-live="polite">
        <AnimatePresence mode="sync">
          <motion.div
            key={c.name}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={reduce ? { duration: 0 } : { duration: 1.1, ease: "easeOut" }}
          >
            <SlotImage
              src={`/images/cities/${slug}.jpg`}
              alt={`${c.name} business district`}
              label={`/public/images/cities/${slug}.jpg`}
              className="h-full w-full"
            />
            {mounted && !reduce && videoOk[slug] !== false && (
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src={`/videos/cities/${slug}.mp4`}
                muted
                loop
                playsInline
                autoPlay
                preload="none"
                aria-hidden
                onError={() => setVideoOk((v) => ({ ...v, [slug]: false }))}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/20 to-transparent" aria-hidden />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
              <p className="font-display text-[clamp(40px,7vw,96px)] leading-none text-white">{c.name}</p>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/80">{c.note}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
