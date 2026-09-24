"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { services } from "@/data/site";
import { serviceHeroImages } from "@/data/service-images";
import { cn } from "@/lib/utils";

const R = 36; // orbit radius (% of box)
const pos = (i: number) => {
  const a = ((-90 + i * 72) * Math.PI) / 180;
  return { x: 50 + R * Math.cos(a), y: 50 + R * Math.sin(a) };
};

const icon = {
  width: 14,
  height: 14,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

/** One icon per discipline, keyed by service slug. */
const nodeIcons: Record<string, React.ReactElement> = {
  "it-consultancy": (
    <svg {...icon}>
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <path d="M8 20h8M12 16v4" />
    </svg>
  ),
  "management-consultancy": (
    <svg {...icon}>
      <path d="M4 19V9M10 19V5M16 19v-7M22 19H2" />
    </svg>
  ),
  recruitment: (
    <svg {...icon}>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0M17 11l2 2 3.5-4" />
    </svg>
  ),
  "technology-training": (
    <svg {...icon}>
      <path d="M2 9l10-5 10 5-10 5z" />
      <path d="M6 11v5c3 2 9 2 12 0v-5" />
    </svg>
  ),
  "workforce-solutions": (
    <svg {...icon}>
      <circle cx="7" cy="8" r="2.5" />
      <circle cx="17" cy="8" r="2.5" />
      <path d="M2.5 19a4.5 4.5 0 0 1 9 0M12.5 19a4.5 4.5 0 0 1 9 0" />
    </svg>
  ),
};

const AUTO_MS = 6000;

/**
 * The signature moment: the J & J mark at the centre, five disciplines in orbit.
 * Tours the disciplines on its own (paused on hover/focus, stopped once a visitor picks one,
 * off for reduced motion). Hover, focus or tap a node to see its services.
 */
export function SignatureVisual() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [chosen, setChosen] = useState(false);
  const reduce = useReducedMotion();
  const s = services[active];
  const img = serviceHeroImages[s.slug];
  const auto = !reduce && !paused && !chosen;

  useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => setActive((v) => (v + 1) % services.length), AUTO_MS);
    return () => clearInterval(t);
  }, [auto]);

  const pick = (i: number) => {
    setActive(i);
    setChosen(true);
  };

  return (
    <div
      className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
      }}
    >
      <div className="relative mx-auto aspect-square w-full max-w-[600px]">
        {/* soft glow behind the centre */}
        <div
          className="absolute inset-[18%] rounded-full"
          aria-hidden
          style={{ background: "radial-gradient(circle, rgba(184,152,90,0.16) 0%, rgba(62,111,168,0.10) 45%, transparent 70%)" }}
        />
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
          <circle cx="50" cy="50" r={R + 8} fill="none" stroke="#8FB0D6" strokeOpacity="0.07" strokeWidth="0.2" />
          <circle cx="50" cy="50" r={R} fill="none" stroke="#8FB0D6" strokeOpacity="0.18" strokeWidth="0.25" strokeDasharray="0.8 1.2" />
          <polygon
            points={services
              .map((_, i) => {
                const p = pos(i);
                return `${p.x},${p.y}`;
              })
              .join(" ")}
            fill="none"
            stroke="#8FB0D6"
            strokeOpacity="0.1"
            strokeWidth="0.2"
          />
          {services.map((_, i) => {
            const p = pos(i);
            const on = i === active;
            return (
              <motion.line
                key={i}
                x1="50"
                y1="50"
                x2={p.x}
                y2={p.y}
                stroke={on ? "#D2B97F" : "#8FB0D6"}
                strokeOpacity={on ? 1 : 0.3}
                strokeWidth={on ? 0.45 : 0.22}
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={reduce ? { duration: 0 } : { duration: 1.2, delay: 0.15 * i, ease: "easeOut" }}
              />
            );
          })}
          {/* travelling pulse on the active line — always mounted (same on server and client) so
              hydration can't mismatch; motion is suppressed rather than the element removed. */}
          <motion.circle
            key={active}
            r="0.9"
            fill="#D2B97F"
            initial={{ cx: 50, cy: 50, opacity: 0 }}
            animate={reduce ? { cx: 50, cy: 50, opacity: 0 } : { cx: pos(active).x, cy: pos(active).y, opacity: [0, 1, 1, 0] }}
            transition={reduce ? { duration: 0 } : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>

        {/* centre: brand mark */}
        <div className="absolute left-1/2 top-1/2 flex h-[32%] w-[32%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-[6%] rounded-full border border-gold/50 bg-midnight text-center shadow-[0_0_60px_-10px_rgba(184,152,90,0.45)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/jj-mark.svg" alt="" className="h-[30%] w-auto" />
          <span className="font-display text-[clamp(16px,3vw,28px)] leading-none text-white">
            J<span className="text-gold">&amp;</span>J
          </span>
          <span className="font-mono text-[clamp(7px,1vw,9px)] tracking-[0.3em] text-white/70">CONSULTING</span>
        </div>

        {/* nodes */}
        {services.map((sv, i) => {
          const p = pos(i);
          const on = i === active;
          return (
            <button
              key={sv.slug}
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => pick(i)}
              aria-pressed={on}
              aria-label={`${sv.node.charAt(0) + sv.node.slice(1).toLowerCase()}: ${sv.short}`}
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
              className={cn(
                "absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-md border px-2 py-1.5 font-mono text-[clamp(9px,1.5vw,11px)] tracking-[0.12em] transition duration-300 sm:gap-2 sm:px-3.5 sm:py-2",
                on
                  ? "scale-105 border-gold bg-gold text-midnight shadow-[0_0_30px_-4px_rgba(184,152,90,0.7)]"
                  : "border-white/25 bg-midnight text-white/80 hover:border-gold-light hover:text-white",
              )}
            >
              <span className="hidden sm:inline-flex">{nodeIcons[sv.slug]}</span>
              {sv.node}
            </button>
          );
        })}
      </div>

      {/* detail card */}
      <div aria-live={chosen ? "polite" : "off"}>
        <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
          <div className="relative aspect-[16/8] overflow-hidden bg-navy">
            <AnimatePresence mode="sync" initial={false}>
              <motion.div
                key={s.slug}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={reduce ? { duration: 0 } : { duration: 0.7, ease: "easeOut" }}
              >
                {img && <Image src={img.src} alt="" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />}
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent" aria-hidden />
            <p className="absolute bottom-4 left-6 font-mono text-[12px] tracking-[0.2em] text-white/70">
              <span className="text-gold-light">{s.index}</span> / {String(services.length).padStart(2, "0")}
            </p>
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={s.slug}
              className="p-6 sm:p-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -6 }}
              transition={reduce ? { duration: 0 } : { duration: 0.3 }}
            >
              <p className="label text-gold-light">{s.node}</p>
              <h3 className="mt-3 text-[clamp(26px,2.8vw,38px)] leading-[1.08] text-white">{s.title}</h3>
              <p className="mt-4 max-w-lg text-[15.5px] leading-relaxed text-white/70">{s.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {s.items.slice(0, 8).map((it) => (
                  <li key={it} className="border border-white/15 px-2.5 py-1.5 font-mono text-[11.5px] leading-none text-white/75">
                    {it}
                  </li>
                ))}
              </ul>
              <Link href={`/services/${s.slug}`} className="btn btn-gold mt-8">
                {s.cta} <span aria-hidden>→</span>
              </Link>
            </motion.div>
          </AnimatePresence>
        </article>

        {/* progress: which discipline is showing; also a quick way to switch */}
        <div className="mt-5 grid grid-cols-5 gap-2" role="group" aria-label="Choose a discipline">
          {services.map((sv, i) => (
            <button
              key={sv.slug}
              type="button"
              onClick={() => pick(i)}
              aria-label={sv.short}
              aria-pressed={i === active}
              className="group py-2"
            >
              <span className="block h-0.5 overflow-hidden bg-white/15 transition-colors group-hover:bg-white/30">
                {i === active && (
                  // Fills over the auto-advance interval while touring; shows full once paused or chosen.
                  <motion.span
                    key={`${active}-${paused || chosen}`}
                    className="block h-full bg-gold"
                    // Same initial on server and client (reduced motion is unknown during SSR); only the timing changes.
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={auto ? { duration: AUTO_MS / 1000, ease: "linear" } : { duration: 0 }}
                  />
                )}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
