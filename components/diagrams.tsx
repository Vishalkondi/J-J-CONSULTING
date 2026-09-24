"use client";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type Tone = "light" | "dark";

export function ConceptualNote({ children, tone = "light" }: { children: string; tone?: Tone }) {
  return (
    <p
      className={cn(
        "mt-6 border-l border-gold pl-4 font-mono text-[11px] leading-relaxed",
        tone === "dark" ? "text-white/55" : "text-graphite",
      )}
    >
      {children}
    </p>
  );
}

/** Sequential chain: horizontal from lg, vertical below (six steps don't fit side by side on tablets). */
export function FlowChain({ steps, tone = "light", numbered = true }: { steps: string[]; tone?: Tone; numbered?: boolean }) {
  const reduce = useReducedMotion();
  return (
    <ol className="flex flex-col gap-0 lg:flex-row lg:items-stretch">
      {steps.map((s, i) => (
        <li key={s} className="flex flex-col items-stretch lg:min-w-0 lg:flex-1 lg:flex-row lg:items-center">
          <motion.div
            className={cn(
              "flex flex-1 flex-col justify-between gap-6 border px-4 py-4 lg:min-h-[112px] lg:min-w-0",
              tone === "dark" ? "border-white/20 text-white" : "border-navy/20 bg-white text-navy",
            )}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={reduce ? { duration: 0 } : { duration: 0.6, delay: i * 0.08 }}
          >
            {numbered && <span className="font-mono text-[11px] text-gold">{String(i + 1).padStart(2, "0")}</span>}
            <span className="hyphens-auto font-display text-[20px] leading-tight lg:text-[17px] xl:text-[20px]">{s}</span>
          </motion.div>
          {i < steps.length - 1 && (
            <span aria-hidden className={cn("flex items-center justify-center py-1 text-gold lg:px-1.5 lg:py-0")}>
              <span className="lg:hidden">↓</span>
              <span className="hidden lg:inline">→</span>
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}

/** Layered conceptual architecture with animated connector lines. */
export function ArchitectureStack({ layers }: { layers: { layer: string; items: string[] }[] }) {
  const reduce = useReducedMotion();
  return (
    <div className="relative">
      {layers.map((l, i) => (
        <div key={l.layer}>
          <motion.div
            className="grid items-center gap-4 border border-white/20 bg-white/[0.03] p-5 md:grid-cols-[200px_1fr]"
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-6% 0px" }}
            transition={reduce ? { duration: 0 } : { duration: 0.6, delay: i * 0.1 }}
          >
            <p className="label text-gold-light">{l.layer}</p>
            <ul className="flex flex-wrap gap-3">
              {l.items.map((it) => (
                <li key={it} className="border border-steel-light/40 px-4 py-2.5 font-display text-[19px] text-white">
                  {it}
                </li>
              ))}
            </ul>
          </motion.div>
          {i < layers.length - 1 && (
            <div className="flex h-10 justify-center md:justify-start md:pl-[100px]" aria-hidden>
              <motion.span
                className="block w-px origin-top bg-gradient-to-b from-gold to-gold/20"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={reduce ? { duration: 0 } : { duration: 0.6, delay: 0.3 + i * 0.1 }}
                style={{ height: "100%" }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/** Three-stage gap analysis: existing → gaps → recommendations */
export function GapAnalysis({ existing, gaps, recommendations }: { existing: string[]; gaps: string[]; recommendations: string[] }) {
  const col = (title: string, items: string[], accent?: boolean) => (
    <div className={cn("flex-1 border p-6", accent ? "border-gold bg-gold/[0.06]" : "border-navy/20 bg-white")}>
      <p className="label text-gold-dark">{title}</p>
      <ul className="mt-5 space-y-3">
        {items.map((i) => (
          <li key={i} className="border-b border-navy/10 pb-3 font-display text-[19px] leading-snug text-navy last:border-0">
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-stretch">
      {col("What exists", existing)}
      <span aria-hidden className="flex items-center justify-center text-gold">
        <span className="md:hidden">↓</span>
        <span className="hidden md:inline">→</span>
      </span>
      {col("What was identified", gaps)}
      <span aria-hidden className="flex items-center justify-center text-gold">
        <span className="md:hidden">↓</span>
        <span className="hidden md:inline">→</span>
      </span>
      {col("What was recommended", recommendations, true)}
    </div>
  );
}

/** Radial systems-thinking diagram. */
export function SystemsRadial({ center, nodes, tone = "dark" }: { center: string; nodes: string[]; tone?: Tone }) {
  const reduce = useReducedMotion();
  const R = 36;
  const pts = nodes.map((_, i) => {
    const a = ((-90 + (360 / nodes.length) * i) * Math.PI) / 180;
    return { x: 50 + R * Math.cos(a), y: 50 + R * Math.sin(a) };
  });
  const dark = tone === "dark";
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
        <circle
          cx="50"
          cy="50"
          r={R}
          fill="none"
          stroke={dark ? "#8FB0D6" : "#0C2038"}
          strokeOpacity="0.15"
          strokeWidth="0.25"
          strokeDasharray="0.8 1.2"
        />
        {pts.map((p, i) => (
          <motion.line
            key={i}
            x1="50"
            y1="50"
            x2={p.x}
            y2={p.y}
            stroke="#B8985A"
            strokeWidth="0.3"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={reduce ? { duration: 0 } : { duration: 1, delay: i * 0.12 }}
          />
        ))}
      </svg>
      <div
        className={cn(
          "absolute left-1/2 top-1/2 flex h-[30%] w-[30%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold p-2 text-center font-display text-[clamp(13px,2.4vw,20px)] leading-tight",
          dark ? "bg-midnight text-white" : "bg-white text-navy",
        )}
      >
        {center}
      </div>
      {nodes.map((n, i) => (
        <span
          key={n}
          style={{ left: `${pts[i].x}%`, top: `${pts[i].y}%` }}
          className={cn(
            "absolute -translate-x-1/2 -translate-y-1/2 border px-3 py-1.5 font-mono text-[clamp(9px,1.7vw,12px)] tracking-[0.12em]",
            dark ? "border-white/30 bg-midnight text-white/85" : "border-navy/30 bg-white text-navy",
          )}
        >
          {n.toUpperCase()}
        </span>
      ))}
    </div>
  );
}
