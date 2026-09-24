"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { worldDots } from "@/data/world-dots";
import { countries, stats } from "@/data/site";
import { cn } from "@/lib/utils";

const project = (lon: number, lat: number) => [((lon + 180) / 360) * 1000, ((90 - lat) / 180) * 500] as const;

/** Geographic region per country (plain geography, used on the cards). */
const regions: Record<string, string> = {
  "United Kingdom": "Europe · Head office",
  "United States": "North America",
  Malaysia: "Southeast Asia",
  Singapore: "Southeast Asia",
  India: "South Asia",
};

/** Label placement tweaks so neighbouring markers (Malaysia/Singapore) don't collide. */
const labelAt: Record<string, { dx: number; dy: number; anchor: "start" | "end" }> = {
  "United Kingdom": { dx: 14, dy: -14, anchor: "start" },
  "United States": { dx: 14, dy: -14, anchor: "start" },
  India: { dx: 14, dy: -12, anchor: "start" },
  Malaysia: { dx: -14, dy: -12, anchor: "end" },
  Singapore: { dx: 14, dy: 22, anchor: "start" },
};

const CONTINENTS = 3; // Europe, North America, Asia — from the five countries above
const intlProjects = stats.find((s) => /international projects/i.test(s.label));

/** Dot-matrix world map marking countries of consulting experience, with linked country cards. */
export function WorldMap() {
  const reduce = useReducedMotion();
  const [hover, setHover] = useState<string | null>(null);
  const home = countries[0];
  const uk = project(home.lon, home.lat);

  const arc = (x: number, y: number) => {
    const mx = (uk[0] + x) / 2;
    const my = Math.min(uk[1], y) - 70 - Math.abs(uk[0] - x) * 0.08;
    return `M${uk[0]},${uk[1]} Q${mx},${my} ${x},${y}`;
  };

  return (
    <figure>
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-3 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)] sm:p-6">
        {/* glow behind the map */}
        <div
          className="pointer-events-none absolute left-[38%] top-[18%] h-[70%] w-[55%] rounded-full"
          aria-hidden
          style={{ background: "radial-gradient(closest-side, rgba(184,152,90,0.14), transparent)" }}
        />
        <svg
          viewBox="0 15 1000 380"
          className="relative w-full"
          role="img"
          aria-label="Map marking consulting experience in the United Kingdom, United States, Malaysia, Singapore and India"
        >
          <defs>
            <linearGradient id="wm-dots" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#8FB0D6" stopOpacity="0.42" />
              <stop offset="1" stopColor="#8FB0D6" stopOpacity="0.16" />
            </linearGradient>
            <linearGradient id="wm-arc" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#D2B97F" />
              <stop offset="1" stopColor="#F4D590" />
            </linearGradient>
            <filter id="wm-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" />
            </filter>
          </defs>

          <g fill="url(#wm-dots)">
            {worldDots.map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r={1.9} />
            ))}
          </g>

          {countries.slice(1).map((c, i) => {
            const [x, y] = project(c.lon, c.lat);
            const d = arc(x, y);
            const on = hover === null || hover === c.name || hover === home.name;
            return (
              <g key={c.name} className="transition-opacity duration-300" style={{ opacity: on ? 1 : 0.2 }}>
                <path d={d} fill="none" stroke="#D2B97F" strokeWidth={4} opacity={0.35} filter="url(#wm-glow)" />
                <motion.path
                  d={d}
                  fill="none"
                  stroke="url(#wm-arc)"
                  strokeWidth={1.6}
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={reduce ? { duration: 0 } : { duration: 1.8, delay: 0.3 + i * 0.25, ease: "easeOut" }}
                />
                {/* travelling light; SMIL animation is simply left out for reduced motion */}
                {!reduce && (
                  <circle r={3} fill="#FFF3D6">
                    <animateMotion dur={`${3.2 + i * 0.4}s`} begin={`${2 + i * 0.35}s`} repeatCount="indefinite" path={d} />
                    <animate
                      attributeName="opacity"
                      values="0;1;1;0"
                      dur={`${3.2 + i * 0.4}s`}
                      begin={`${2 + i * 0.35}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                )}
              </g>
            );
          })}

          {countries.map((c, i) => {
            const [x, y] = project(c.lon, c.lat);
            const l = labelAt[c.name] ?? { dx: 14, dy: -12, anchor: "start" as const };
            const isHome = c.name === home.name;
            const on = hover === null || hover === c.name;
            const label = isHome ? `${c.name} · HQ` : c.name;
            const w = label.length * 7.4 + 22;
            const lx = l.anchor === "end" ? x + l.dx - w : x + l.dx;
            return (
              <g key={c.name} className="transition-opacity duration-300" style={{ opacity: on ? 1 : 0.35 }}>
                <motion.circle
                  cx={x}
                  cy={y}
                  r={12}
                  fill="none"
                  stroke="#D2B97F"
                  strokeWidth={1}
                  initial={{ scale: 0.4, opacity: 0 }}
                  whileInView={reduce ? { scale: 0.4, opacity: 0 } : { scale: [0.4, 1.6], opacity: [0.9, 0] }}
                  transition={reduce ? { duration: 0 } : { duration: 2.4, repeat: Infinity, delay: i * 0.4 }}
                  style={{ transformOrigin: `${x}px ${y}px` }}
                />
                <circle cx={x} cy={y} r={isHome ? 7 : 5.5} fill="#08121F" stroke="#D2B97F" strokeWidth={1.5} />
                <circle cx={x} cy={y} r={isHome ? 3.5 : 2.6} fill="#F4D590" />
                <g className="max-sm:hidden">
                  <rect
                    x={lx}
                    y={y + l.dy - 15}
                    width={w}
                    height={22}
                    rx={11}
                    fill="#08121F"
                    fillOpacity={0.85}
                    stroke="#D2B97F"
                    strokeOpacity={0.45}
                  />
                  <text
                    x={lx + w / 2}
                    y={y + l.dy}
                    textAnchor="middle"
                    fontFamily="Inter Variable, Inter, sans-serif"
                    fontSize="12"
                    fontWeight={500}
                    fill="#F6F3EE"
                  >
                    {label}
                  </text>
                </g>
              </g>
            );
          })}
        </svg>
      </div>

      {/* country cards — hovering one highlights its marker and route */}
      <ul className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-5">
        {countries.map((c, i) => (
          <li
            key={c.name}
            onMouseEnter={() => setHover(c.name)}
            onMouseLeave={() => setHover(null)}
            className={cn(
              "group rounded-2xl border bg-white/[0.03] p-4 transition duration-300 first:col-span-2 sm:p-5 lg:first:col-span-1",
              hover === c.name ? "border-gold/60 bg-white/[0.07]" : "border-white/10 hover:border-white/25",
            )}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-gold-light">{String(i + 1).padStart(2, "0")}</span>
              <span className="h-2 w-2 rounded-full bg-gold shadow-[0_0_10px_2px_rgba(184,152,90,0.6)]" aria-hidden />
            </div>
            <p className="mt-3 font-display text-[19px] leading-tight text-white sm:mt-4 sm:text-[21px]">{c.name}</p>
            <p className="mt-1 text-[13px] text-white/55">{regions[c.name]}</p>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <dl className="flex flex-wrap gap-x-10 gap-y-4">
          {[
            [String(countries.length), "Countries"],
            [String(CONTINENTS), "Continents"],
            ...(intlProjects ? [[`${intlProjects.value}${intlProjects.suffix}`, "International projects"]] : []),
          ].map(([v, k]) => (
            <div key={k} className="flex items-baseline gap-3">
              <dd className="font-display text-[30px] leading-none text-white">{v}</dd>
              <dt className="order-last text-[13px] text-white/55">{k}</dt>
            </div>
          ))}
        </dl>
        <figcaption className="font-mono text-[11px] text-white/45">
          Locations of consulting experience. These are not J &amp; J offices, apart from the UK head office.
        </figcaption>
      </div>
    </figure>
  );
}
