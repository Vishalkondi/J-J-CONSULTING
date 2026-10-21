"use client";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cities } from "@/data/site";
import { SlotImage } from "./SlotImage";
import { slugify, cn } from "@/lib/utils";

const ROTATE_MS = 6500;

/**
 * Global business hubs. Drop imagery into /public/images/cities/<city>.jpg
 * and optional aerial clips into /public/videos/cities/<city>.mp4, then set `video: true` on that city in data/site.ts.
 * These are reference cities, NOT office locations.
 *
 * Tabs down the side (arrow keys move between them), a progress bar on the current city while it
 * rotates on its own, and a rounded panel with a counter and previous/next buttons.
 */
export function CityShowcase() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false); // hover or keyboard focus inside
  const [chosen, setChosen] = useState(false); // a visitor picked a city: stop auto-rotating for good
  const [videoOk, setVideoOk] = useState<Record<string, boolean>>({});
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  // The city video is only rendered once mounted=true, so the server and the client's first
  // paint agree (neither renders it) and only reveal/hide it after we know the real
  // reduced-motion preference — useReducedMotion() is unknown during SSR, so gating the video's
  // presence directly on `reduce` would cause a hydration mismatch.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const rotating = mounted && !reduce && !paused && !chosen;
  useEffect(() => {
    if (!rotating) return;
    const t = setInterval(() => setI((v) => (v + 1) % cities.length), ROTATE_MS);
    return () => clearInterval(t);
  }, [rotating]);

  const pick = (k: number, focus = false) => {
    const n = (k + cities.length) % cities.length;
    setI(n);
    setChosen(true);
    if (focus) tabs.current[n]?.focus();
  };

  const onTabKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    const keys: Record<string, number> = { ArrowDown: i + 1, ArrowRight: i + 1, ArrowUp: i - 1, ArrowLeft: i - 1, Home: 0, End: cities.length - 1 };
    if (e.key in keys) {
      e.preventDefault();
      pick(keys[e.key], true);
    }
  };

  const c = cities[i];
  const slug = slugify(c.name);

  return (
    <div
      className="grid gap-6 lg:grid-cols-[300px_1fr] lg:gap-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
      }}
    >
      <div
        className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:border-t lg:border-white/15 lg:px-0"
        role="tablist"
        aria-label="Business hubs"
        aria-orientation="vertical"
      >
        {cities.map((ct, k) => {
          const on = k === i;
          return (
            <button
              key={ct.name}
              ref={(el) => {
                tabs.current[k] = el;
              }}
              id={`hub-tab-${slugify(ct.name)}`}
              role="tab"
              aria-selected={on}
              aria-controls="hub-panel"
              tabIndex={on ? 0 : -1}
              onClick={() => pick(k)}
              onKeyDown={onTabKey}
              className={cn(
                "group relative shrink-0 rounded-full border px-4 py-2 text-left transition-colors lg:rounded-none lg:border-0 lg:border-b lg:border-white/15 lg:px-0 lg:py-4",
                on ? "border-gold/60 bg-white/[0.06] lg:bg-transparent" : "border-white/15 hover:border-white/30",
              )}
            >
              <span className="flex items-baseline gap-3">
                <span className={cn("font-mono text-[11px] transition-colors", on ? "text-gold-light" : "text-white/35")}>
                  {String(k + 1).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "font-display text-[18px] leading-tight transition-colors lg:text-[28px]",
                    on ? "text-white" : "text-white/45 group-hover:text-white/80",
                  )}
                >
                  {ct.name}
                </span>
              </span>
              <span className={cn("ml-7 mt-1 is-hidden font-mono text-[10.5px] uppercase tracking-[0.14em] lg:block", on ? "text-white/60" : "text-white/30")}>
                {ct.country}
              </span>
              {/* time left before the next city (only while rotating on its own) */}
              {on && (
                <span aria-hidden className="absolute inset-x-0 -bottom-px is-hidden h-px overflow-hidden lg:block">
                  <motion.span
                    key={`${i}-${rotating}`}
                    className="block h-full origin-left bg-gold"
                    initial={{ scaleX: rotating ? 0 : 1 }}
                    animate={{ scaleX: 1 }}
                    transition={rotating ? { duration: ROTATE_MS / 1000, ease: "linear" } : { duration: 0 }}
                  />
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div
        id="hub-panel"
        className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/10 sm:aspect-[16/9] lg:aspect-auto lg:min-h-[460px]"
        role="tabpanel"
        aria-labelledby={`hub-tab-${slug}`}
        aria-live={chosen ? "polite" : "off"}
      >
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
            {mounted && !reduce && c.video && videoOk[slug] !== false && (
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
            <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/25 to-midnight/10" aria-hidden />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-gold-light">{c.country}</p>
              <p className="mt-2 font-display text-[clamp(40px,7vw,96px)] leading-none text-white">{c.name}</p>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/80">{c.note}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* counter and previous / next */}
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 sm:p-6">
          <p className="rounded-full bg-midnight/60 px-3 py-1 font-mono text-[11px] tracking-[0.14em] text-white/85 backdrop-blur-sm">
            {String(i + 1).padStart(2, "0")} / {String(cities.length).padStart(2, "0")}
          </p>
          <div className="flex gap-2">
            {[
              { d: -1, label: "Previous city", path: "M15 6l-6 6 6 6" },
              { d: 1, label: "Next city", path: "M9 6l6 6-6 6" },
            ].map((b) => (
              <button
                key={b.d}
                type="button"
                onClick={() => pick(i + b.d)}
                aria-label={b.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-midnight/50 text-white backdrop-blur-sm transition-colors hover:border-gold-light hover:bg-gold hover:text-midnight"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d={b.path} />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
