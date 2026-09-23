"use client";
import { motion, useReducedMotion } from "framer-motion";
import { worldDots } from "@/data/world-dots";
import { countries } from "@/data/site";

const project = (lon: number, lat: number) => [((lon + 180) / 360) * 1000, ((90 - lat) / 180) * 500] as const;

/** Dot-matrix world map marking countries of consulting experience (not offices). */
export function WorldMap() {
  const reduce = useReducedMotion();
  const uk = project(countries[0].lon, countries[0].lat);
  return (
    <figure>
      <div className="no-scrollbar overflow-x-auto">
        <svg
          viewBox="0 60 1000 330"
          className="w-full min-w-[640px]"
          role="img"
          aria-label="Map marking consulting experience in the United Kingdom, United States, Malaysia, Singapore and India"
        >
          <g fill="#8FB0D6" opacity="0.28">
            {worldDots.map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r={1.9} />
            ))}
          </g>
          {countries.slice(1).map((c, i) => {
            const [x, y] = project(c.lon, c.lat);
            const mx = (uk[0] + x) / 2;
            const my = Math.min(uk[1], y) - 70 - Math.abs(uk[0] - x) * 0.08;
            return (
              <motion.path
                key={c.name}
                d={`M${uk[0]},${uk[1]} Q${mx},${my} ${x},${y}`}
                fill="none"
                stroke="#B8985A"
                strokeWidth={1.2}
                strokeDasharray="3 4"
                opacity={0.9}
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={reduce ? { duration: 0 } : { duration: 1.8, delay: 0.3 + i * 0.25, ease: "easeOut" }}
              />
            );
          })}
          {countries.map((c, i) => {
            const [x, y] = project(c.lon, c.lat);
            const left = c.name === "Singapore";
            const below = c.name === "Singapore" || c.name === "Malaysia";
            return (
              <g key={c.name}>
                <motion.circle
                  cx={x}
                  cy={y}
                  r={11}
                  fill="none"
                  stroke="#D2B97F"
                  strokeWidth={1}
                  initial={{ scale: 0.4, opacity: 0 }}
                  whileInView={reduce ? { scale: 0.4, opacity: 0 } : { scale: [0.4, 1.4], opacity: [0.9, 0] }}
                  viewport={{ once: false }}
                  transition={reduce ? { duration: 0 } : { duration: 2.4, repeat: Infinity, delay: i * 0.4 }}
                  style={{ transformOrigin: `${x}px ${y}px` }}
                />
                <circle cx={x} cy={y} r={4.5} fill="#D2B97F" />
                <text
                  x={left ? x + 10 : x + (c.name === "Malaysia" ? -10 : 10)}
                  y={below ? y + (c.name === "Singapore" ? 20 : -8) : y - 12}
                  textAnchor={c.name === "Malaysia" ? "end" : "start"}
                  fontFamily="IBM Plex Mono, monospace"
                  fontSize="13"
                  fill="#F6F3EE"
                  letterSpacing="0.6"
                >
                  {c.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      <figcaption className="mt-4 font-mono text-[11px] text-white/50">
        Locations of consulting experience. These are not J &amp; J offices.
      </figcaption>
    </figure>
  );
}
