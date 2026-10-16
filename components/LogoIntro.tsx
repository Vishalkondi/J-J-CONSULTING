"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const LANDSCAPE = "/videos/logo-intro.mp4"; // 1.5 MB, fast-start; logo-intro.webm (VP9) is offered first
const LANDSCAPE_WEBM = "/videos/logo-intro.webm";
const PORTRAIT = "/videos/logo-intro-portrait.mp4";
const SEEN_KEY = "jj-logo-intro-seen";
const HOLD_MS = 900; // keep the finished lockup on screen before fading
const FADE_MS = 1000;

/**
 * Full-screen logo reveal that plays over the home hero, then fades away to show it.
 *  - Sits under the navbar (z-50) so the menu stays usable while it plays.
 *  - Landscape cut on wide screens, portrait cut on phones.
 *  - Plays once per browser session; "Skip intro" dismisses it at any time.
 *  - Skipped entirely for reduced motion, refused autoplay or a missing file.
 */
export function LogoIntro() {
  const ref = useRef<HTMLVideoElement>(null);
  const [src, setSrc] = useState<string | null>(null);
  const [state, setState] = useState<"show" | "fading" | "gone">("show");

  const dismiss = () => {
    setState((s) => (s === "show" ? "fading" : s));
    try {
      sessionStorage.setItem(SEEN_KEY, "1");
    } catch {}
  };

  // Decide on mount whether to play, and which cut.
  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SEEN_KEY) === "1";
    } catch {}
    if (seen || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setState("gone");
      return;
    }
    setSrc(window.matchMedia("(max-aspect-ratio: 1/1)").matches ? PORTRAIT : LANDSCAPE);
  }, []);

  useEffect(() => {
    if (!src || !ref.current) return;
    ref.current.play().catch(dismiss);
    const failsafe = window.setTimeout(dismiss, 14000);
    return () => window.clearTimeout(failsafe);
  }, [src]);

  useEffect(() => {
    if (state === "fading") {
      const t = window.setTimeout(() => setState("gone"), FADE_MS);
      return () => window.clearTimeout(t);
    }
  }, [state]);

  // Hold the page still while the intro covers it.
  useEffect(() => {
    if (state === "gone") return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prev;
    };
  }, [state]);

  if (state === "gone") return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[45] bg-midnight transition-opacity ease-out",
        state === "fading" ? "pointer-events-none opacity-0" : "opacity-100",
      )}
      style={{ transitionDuration: `${FADE_MS}ms` }}
      aria-hidden={state === "fading"}
    >
      {src && (
        <video
          ref={ref}
          src={src === PORTRAIT ? src : undefined}
          className="h-full w-full object-cover"
          muted
          playsInline
          preload="auto"
          aria-label="J & J Consulting logo reveal"
          onEnded={() => window.setTimeout(dismiss, HOLD_MS)}
          onError={dismiss}
        >
          {src === LANDSCAPE && (
            <>
              <source src={LANDSCAPE_WEBM} type="video/webm" />
              {/* Errors on <source> don't reach the video element; the last one failing means none could play. */}
              <source src={LANDSCAPE} type="video/mp4" onError={dismiss} />
            </>
          )}
        </video>
      )}
      <button
        type="button"
        onClick={dismiss}
        className="absolute bottom-6 left-5 flex items-center gap-2 border border-white/30 bg-black/30 px-3 py-2 font-mono text-[10px] tracking-[0.18em] text-white/80 backdrop-blur-sm transition-colors hover:border-white hover:text-white sm:left-8 lg:left-14"
      >
        SKIP INTRO <span aria-hidden>→</span>
      </button>
    </div>
  );
}
