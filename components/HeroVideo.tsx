"use client";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Logo } from "./Logo";
import { company, heroCategories, stats } from "@/data/site";
import { cn } from "@/lib/utils";

// One hero video today. To enable the two-video crossfade, add public/videos/hero-video-02.mp4
// and set NEXT_PUBLIC_HERO_VIDEO_2=1 in .env.local.
const HAS_SECOND = process.env.NEXT_PUBLIC_HERO_VIDEO_2 === "1";
const SOURCES: string[] = ["/videos/hero-video-01.mp4", ...(HAS_SECOND ? ["/videos/hero-video-02.mp4"] : [])];
const POSTER = "/images/hero-poster.jpg";
// Colour grade applied to the footage and poster: richer, warmer and darker, for the sunset look.
const DUSK_GRADE = "saturate(1.75) contrast(1.28) brightness(0.82) sepia(0.06)";

/**
 * Behaviour
 *  - Video 1 autoplays (muted, inline). On end → crossfade into Video 2, then back. Loops forever.
 *  - Never black: a branded gradient sits under the videos and is what visitors see until playback starts.
 *  - Plays for everyone (it is a slow, silent ambient clip) with a Pause control, per WCAG 2.2.2; reduced motion
 *    still disables the other decorative animations. If the browser refuses autoplay: poster + "Play film".
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
  const [paused, setPaused] = useState(false);

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

  // Start video 1 immediately.
  useEffect(() => {
    tryPlay(0);
  }, [tryPlay]);

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

  const togglePause = () => {
    const v = refs.current[active];
    if (!v) return;
    if (paused) {
      v.play()
        .then(() => setPaused(false))
        .catch(() => {});
    } else {
      v.pause();
      setPaused(true);
    }
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
      className="relative isolate flex min-h-[max(100svh,640px)] w-full flex-col overflow-hidden bg-midnight text-white"
      aria-label="J & J Consulting introduction"
    >
      {/* Fallback layer — always present so the hero is never empty/black. .site-hero-poster is
          dedicated to this one section; see the comment in globals.css for why. */}
      <div className="hero-fallback blueprint site-hero-poster absolute inset-0 -z-30" style={{ filter: DUSK_GRADE }} aria-hidden />

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
          // Always false here; playback is started by the tryPlay() effect above, which can detect a
          // refused autoplay and show the "Play film" fallback.
          autoPlay={false}
          preload="metadata"
          aria-hidden
          tabIndex={-1}
          onPlaying={() => setPlaying((p) => p.map((x, k) => (k === i ? true : x)))}
          style={{ filter: DUSK_GRADE }}
          onEnded={() => handleEnded(i)}
          onError={() => setFailed((f) => f.map((x, k) => (k === i ? true : x)))}
        />
      ))}

      {/* Dusk grade: deep blue-violet sky at the top, an amber sun glow upper-right and a warm wash
          over the city, so the daytime footage reads as golden-hour sunset. */}
      <div
        className="absolute inset-0 -z-10 mix-blend-soft-light"
        aria-hidden
        style={{
          background:
            "radial-gradient(900px 520px at 92% 38%, rgba(255,170,60,0.9), transparent 65%), linear-gradient(180deg, rgba(20,24,70,0.9) 0%, rgba(120,60,40,0.5) 35%, rgba(255,140,40,0.55) 60%, rgba(40,25,20,0.6) 100%)",
        }}
      />
      <div
        className="absolute inset-0 -z-10 mix-blend-screen"
        aria-hidden
        style={{
          background:
            "radial-gradient(140px 140px at 99% 42%, rgba(255,214,140,0.85), transparent 70%), radial-gradient(620px 360px at 98% 42%, rgba(255,150,40,0.4), transparent 70%), linear-gradient(180deg, rgba(18,26,66,0.6) 0%, rgba(40,40,90,0.2) 25%, transparent 45%)",
        }}
      />

      {/* Deep blue dusk sky over the top third, behind the navbar. */}
      <div
        className="absolute inset-0 -z-10"
        aria-hidden
        style={{ background: "linear-gradient(180deg, rgba(12,18,48,0.7) 0%, rgba(30,30,70,0.35) 22%, transparent 42%)" }}
      />

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
      <div className="wrap relative flex w-full flex-1 flex-col justify-end pb-6 pt-24 md:pb-8">
        <motion.h1 {...fadeIn(0.35)} className="!font-sans">
          <span className="sr-only">J &amp; J Consulting</span>
          <span aria-hidden>
            <Logo variant="full" size="hero" finish="metal" className="drop-shadow-[0_10px_30px_rgba(0,0,0,0.55)]" />
          </span>
        </motion.h1>

        <motion.p {...fadeIn(0.8)} className="mt-5 font-display text-[clamp(26px,3.6vw,52px)] leading-[1.1] text-white">
          {company.tagline}
        </motion.p>

        <motion.p {...fadeIn(1.05)} className="mt-4 max-w-xl text-[17px] leading-relaxed text-white/80">
          {company.strapline}
        </motion.p>

        <motion.div {...fadeIn(1.3)} className="mt-7 flex flex-wrap gap-4">
          <Link href="/services" className="btn btn-gold">
            Explore Our Expertise <span aria-hidden>→</span>
          </Link>
          <Link href="/contact" className="btn btn-ghost">
            Talk to Us <span aria-hidden>→</span>
          </Link>
        </motion.div>

        {/* Floating stat card (desktop): the headline figures, from the same data as the counters. */}
        <motion.div
          {...fadeIn(1.5)}
          className="absolute right-14 top-[24%] hidden w-[300px] rounded-2xl border border-white/15 bg-midnight/55 p-6 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)] backdrop-blur-md xl:block"
        >
          <p className="pill bg-white/5 text-gold-light">Since {company.established}</p>
          <dl className="mt-5 space-y-4">
            {stats.slice(0, 3).map((s) => (
              <div key={s.label} className="flex items-baseline gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0">
                <dd className="w-16 shrink-0 font-display text-[30px] leading-none text-white">
                  {s.value}
                  {s.suffix}
                </dd>
                <dt className="order-last text-[13px] leading-snug text-white/70">{s.label}</dt>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          {...fadeIn(1.6)}
          className="mt-8 flex items-end justify-between gap-6 border-t border-white/20 pt-4 md:mt-10"
        >
          <ul className="hidden min-w-0 flex-wrap items-center gap-y-2 font-mono xl:flex-nowrap text-[10.5px] tracking-[0.1em] text-white/75 md:flex" aria-label="What we do">
            {heroCategories.map((c) => (
              <li key={c} className="whitespace-nowrap border-r border-white/30 px-4 leading-none first:pl-0 last:border-0 xl:px-5">
                {c}
              </li>
            ))}
          </ul>

          <div className="ml-auto flex items-center gap-5">
            {/* Video controls (only once a video is actually running) */}
            {anyPlaying && !allFailed && (
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={togglePause}
                  aria-label={paused ? "Play background video" : "Pause background video"}
                  className="flex h-8 w-8 items-center justify-center border border-white/30 bg-black/20 text-white/80 backdrop-blur-sm transition-colors hover:border-white hover:text-white"
                >
                  <svg viewBox="0 0 24 24" className="h-3 w-3 fill-current" aria-hidden>
                    {paused ? <path d="M8 5v14l11-7z" /> : <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" />}
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => setMuted((m) => !m)}
                  aria-pressed={!muted}
                  aria-label={muted ? "Turn video sound on" : "Turn video sound off"}
                  className="flex h-8 w-8 items-center justify-center border border-white/30 bg-black/20 text-white/80 backdrop-blur-sm transition-colors hover:border-white hover:text-white"
                >
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-current" strokeWidth="2" aria-hidden>
                    <path d="M4 9v6h4l5 4V5L8 9z" className="fill-current" />
                    {muted ? <path d="M17 9l5 6M22 9l-5 6" /> : <path d="M17 8.5a5 5 0 0 1 0 7M19.5 6a8.5 8.5 0 0 1 0 12" />}
                  </svg>
                </button>
              </div>
            )}
            <a
              href="#introduction"
              className="hidden flex-col items-center gap-1.5 whitespace-nowrap font-mono text-[10px] tracking-[0.3em] text-white/75 hover:text-white md:flex"
            >
              SCROLL TO EXPLORE{" "}
              <span className="nudge" aria-hidden>
                ↓
              </span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Autoplay refused by the browser */}
      {blocked && !allFailed && !anyPlaying && (
        <button
          type="button"
          onClick={enter}
          className="absolute bottom-6 right-5 z-10 flex items-center gap-2 border border-white/30 bg-black/20 px-3 py-2 font-mono text-[10px] tracking-[0.18em] text-white/80 backdrop-blur-sm transition-colors hover:border-white hover:text-white sm:right-8 lg:right-14"
        >
          <svg viewBox="0 0 24 24" className="h-3 w-3 fill-current" aria-hidden>
            <path d="M8 5v14l11-7z" />
          </svg>
          PLAY FILM
        </button>
      )}
    </section>
  );
}
