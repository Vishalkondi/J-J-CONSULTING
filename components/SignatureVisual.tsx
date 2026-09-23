"use client";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { services } from "@/data/site";
import { cn } from "@/lib/utils";

const R = 36; // orbit radius (% of box)
const pos = (i: number) => {
  const a = ((-90 + i * 72) * Math.PI) / 180;
  return { x: 50 + R * Math.cos(a), y: 50 + R * Math.sin(a) };
};

/**
 * The signature moment: J & J CONSULTING at the centre, five disciplines in orbit.
 * Hover, focus or tap a node to see its related services.
 */
export function SignatureVisual() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const s = services[active];

  return (
    <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-20">
      <div className="relative mx-auto aspect-square w-full max-w-[600px]">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
          {/* orbit ring */}
          <circle cx="50" cy="50" r={R} fill="none" stroke="#8FB0D6" strokeOpacity="0.18" strokeWidth="0.25" strokeDasharray="0.8 1.2" />
          {/* outer pentagon */}
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
                strokeOpacity={on ? 1 : 0.35}
                strokeWidth={on ? 0.45 : 0.25}
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={reduce ? { duration: 0 } : { duration: 1.2, delay: 0.15 * i, ease: "easeOut" }}
              />
            );
          })}
          {/* travelling pulse on active line — always mounted (same on server and client) so
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

        {/* centre */}
        <div className="absolute left-1/2 top-1/2 flex h-[30%] w-[30%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-gold/50 bg-midnight text-center">
          <span className="font-display text-[clamp(20px,4vw,34px)] leading-none text-white">
            J<span className="text-gold">&amp;</span>J
          </span>
          <span className="mt-1 font-mono text-[clamp(6px,1.1vw,9px)] tracking-[0.3em] text-white/70">CONSULTING</span>
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
              onClick={() => setActive(i)}
              aria-pressed={on}
              aria-label={`${sv.node.charAt(0) + sv.node.slice(1).toLowerCase()}: ${sv.short}`}
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
              className={cn(
                "absolute -translate-x-1/2 -translate-y-1/2 border px-2.5 py-1.5 font-mono text-[clamp(8px,1.6vw,11px)] tracking-[0.14em] transition-colors duration-300 sm:px-3.5 sm:py-2",
                on
                  ? "border-gold bg-gold text-midnight"
                  : "border-white/25 bg-midnight text-white/80 hover:border-gold-light hover:text-white",
              )}
            >
              {sv.node}
            </button>
          );
        })}
      </div>

      {/* detail */}
      <div className="min-h-[360px]" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -6 }}
            transition={reduce ? { duration: 0 } : { duration: 0.3 }}
          >
            <p className="label text-gold-light">{s.node}</p>
            <h3 className="mt-3 text-[clamp(28px,3.2vw,44px)] leading-[1.08] text-white">{s.title}</h3>
            <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-white/70">{s.description}</p>
            <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[12px] text-white/60">
              {s.items.slice(0, 8).map((it) => (
                <li key={it} className="border-b border-white/15 pb-1">
                  {it}
                </li>
              ))}
            </ul>
            <Link href={`/services/${s.slug}`} className="link-arrow mt-9 text-gold-light">
              {s.cta} <span aria-hidden>→</span>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
