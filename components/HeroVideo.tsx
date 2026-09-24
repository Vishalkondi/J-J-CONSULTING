"use client";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Logo } from "./Logo";
import { company, heroCategories } from "@/data/site";
import { cn } from "@/lib/utils";

// One hero video today. To enable the two-video crossfade, add public/videos/hero-video-02.mp4
// and set NEXT_PUBLIC_HERO_VIDEO_2=1 in .env.local.
const HAS_SECOND = process.env.NEXT_PUBLIC_HERO_VIDEO_2 === "1";
const SOURCES: string[] = ["/videos/hero-video-01.mp4", ...(HAS_SECOND ? ["/videos/hero-video-02.mp4"] : [])];
const POSTER = "/images/hero-poster.jpg";

/**
 * Behaviour
 *  - Video 1 autoplays (muted, inline). On end → crossfade into Video 2, then back. Loops forever.
 *  - Never black: a branded gradient sits under the videos and is what visitors see until playback starts.
 *  - If autoplay is refused (or reduced-motion is on): poster/fallback + "Enter Experience".
 *  - If a video file is missing/broken: that slot is skipped; the other loops on its own.
 */
export function HeroVideo() {
  const reduce = useReducedMotion();
  const refs = useRef<Array<HTMLVideoElement | null>>([null, null]);
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState([false, false]);
  const [failed, setFailed] = useState([false, false]);
  const [blocked, setBlocked] = useState(false);
  const [muted, setMuted] = useState(true);

  const allFailed = SOURCES.every((_, i) => failed[i]); // only the configured slots count
  const anyPlaying = playing[0] || playing[1];

  const tryPlay = useCallback(async (i: number) => {
    const v = refs.current[i];
    if (!v) return;
    try {
      await v.play();
      setBlocked(false);
    } catch {
      setBlocked(true);
    }
  }, []);

  // Start video 1 immediately (unless the visitor prefers reduced motion).
  useEffect(() => {
    if (reduce) {
      setBlocked(true);
      return;
    }
    tryPlay(0);
  }, [reduce, tryPlay]);

  useEffect(() => {
    refs.current.forEach((v) => {
      if (v) v.muted = muted;
    });
  }, [muted]);

  const handleEnded = (i: number) => {
    const next = (i + 1) % SOURCES.length;
    const nv = refs.current[next];
    if (failed[next] || !nv) {
      // Other slot unavailable → loop this one.
      const cur = refs.current[i];
      if (cur) {
        cur.currentTime = 0;
        cur.play().catch(() => setBlocked(true));
      }
      return;
    }
    nv.currentTime = 0;
    nv.play()
      .then(() => setActive(next))
      .catch(() => setBlocked(true));
  };

  const enter = () => {
    const v = refs.current[active];
    if (v) {
      v.muted = muted;
      v.play()
        .then(() => setBlocked(false))
        .catch(() => {});
    } else setBlocked(false);
  };

  // Same initial/animate on server and client (useReducedMotion() is unknown during SSR, so
  // branching them caused a hydration mismatch); reduced motion only makes the fade instant.
  const fadeIn = (delay: number) => ({
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: reduce ? { duration: 0 } : { duration: 1, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section
      className="relative isolate h-[100svh] min-h-[640px] w-full overflow-hidden bg-midnight text-white md:h-screen"
      aria-label="J & J Consulting introduction"
    >
      {/* Fallback layer — always present so the hero is never empty/black. .site-hero-poster is
          dedicated to this one section; see the comment in globals.css for why. */}
      <div className="hero-fallback blueprint site-hero-poster absolute inset-0 -z-30" aria-hidden />

      {SOURCES.map((src, i) => (
        <video
          key={src}
          ref={(el) => {
            refs.current[i] = el;
          }}
          className={cn(
            "absolute inset-0 -z-20 h-full w-full object-cover transition-opacity duration-[1400ms] ease-in-out",
            active === i && playing[i] ? "opacity-100" : "opacity-0",
          )}
          // Second video source is attached only once the first is running, to protect initial load.
          src={i === 0 || anyPlaying ? src : undefined}
          poster={i === 0 ? POSTER : undefined}
          muted
          loop={SOURCES.length === 1}
          playsInline
          // Always false here — deterministic on server and client, avoiding a hydration mismatch
          // (useReducedMotion() is unknown during SSR). Playback is instead started imperatively
          // by the tryPlay() effect above, which already knows the real reduced-motion preference.
          autoPlay={false}
          preload="metadata"
          aria-hidden
          tabIndex={-1}
          onPlaying={() => setPlaying((p) => p.map((x, k) => (k === i ? true : x)))}
          onEnded={() => handleEnded(i)}
          onError={() => setFailed((f) => f.map((x, k) => (k === i ? true : x)))}
        />
      ))}

      {/* Cinematic overlay: darker at the top (navbar) and bottom, plus a navy wash on the left so the
          logo, headline and buttons stay legible over bright footage. */}
      <div
        className="absolute inset-0 -z-10"
        aria-hidden
        style={{
          background:
            "linear-gradient(90deg, rgba(8,18,31,0.72) 0%, rgba(8,18,31,0.45) 45%, rgba(8,18,31,0.05) 80%), linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 22%, rgba(0,0,0,0.25) 55%, rgba(0,0,0,0.8) 100%)",
        }}
      />

      {/* Content */}
      <div className="wrap relative flex h-full flex-col justify-end pb-24 pt-32 md:pb-28">
        <motion.h1 {...fadeIn(0.35)} className="!font-sans">
          <span className="sr-only">J &amp; J Consulting</span>
          <span aria-hidden>
            <Logo variant="full" size="hero" className="drop-shadow-[0_10px_30px_rgba(0,0,0,0.55)]" />
          </span>
        </motion.h1>

        <motion.p {...fadeIn(0.8)} className="mt-8 font-display text-[clamp(26px,3.6vw,52px)] leading-[1.1] text-white">
          {company.tagline}
        </motion.p>

        <motion.p {...fadeIn(1.05)} className="mt-5 max-w-xl text-[17px] leading-relaxed text-white/80">
          {company.strapline}
        </motion.p>

        <motion.div {...fadeIn(1.3)} className="mt-9 flex flex-wrap gap-4">
          <Link href="/services" className="btn btn-gold">
            Explore Our Expertise <span aria-hidden>→</span>
          </Link>
          <Link href="/contact" className="btn btn-ghost">
            Talk to Us <span aria-hidden>→</span>
          </Link>
        </motion.div>

        <motion.ul
          {...fadeIn(1.6)}
          className="mt-12 hidden flex-wrap gap-x-8 gap-y-2 border-t border-white/20 pt-5 font-mono text-[11px] tracking-[0.12em] text-white/70 md:flex"
          aria-label="What we do"
        >
          {heroCategories.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </motion.ul>
      </div>

      {/* Scroll cue */}
      <a
        href="#introduction"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-white/70 hover:text-white md:flex"
      >
        SCROLL TO EXPLORE{" "}
        <span className="nudge" aria-hidden>
          ↓
        </span>
      </a>

      {/* Sound control (only when a video is actually running) */}
      {anyPlaying && !allFailed && (
        <button
          type="button"
          onClick={() => setMuted((m) => !m)}
          aria-pressed={!muted}
          aria-label={muted ? "Turn video sound on" : "Turn video sound off"}
          className="absolute bottom-6 right-5 flex items-center gap-2 border border-white/30 bg-black/20 px-3 py-2 font-mono text-[10px] tracking-[0.18em] text-white/80 backdrop-blur-sm transition-colors hover:border-white hover:text-white sm:right-8 lg:right-14"
        >
          <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: muted ? "#8a8f96" : "#d2b97f" }} />
          {muted ? "SOUND OFF" : "SOUND ON"}
        </button>
      )}

      {/* Autoplay blocked / reduced motion */}
      {blocked && !allFailed && !anyPlaying && (
        <div className="absolute inset-x-0 top-1/2 z-10 flex -translate-y-1/2 justify-center">
          <button type="button" onClick={enter} className="btn btn-ghost bg-black/30 backdrop-blur-sm">
            Enter Experience <span aria-hidden>→</span>
          </button>
        </div>
      )}
    </section>
  );
}
