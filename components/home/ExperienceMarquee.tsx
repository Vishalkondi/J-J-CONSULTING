"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { ArrowButton } from "../ArrowButton";
import { ClientLogo } from "../ClientLogo";
import { insuranceExperience, marqueeOrder } from "@/data/site";

const items = marqueeOrder
  .map((slug) => insuranceExperience.find((o) => o.slug === slug))
  .filter((o): o is NonNullable<typeof o> => Boolean(o));

const AUTO_MS = 3500;

/**
 * Client-logo carousel with previous/next arrows. Advances on its own (paused on hover/focus,
 * stopped once the visitor uses the arrows, off for reduced motion) and loops back at the end.
 */
export function ExperienceMarquee() {
  const trackRef = useRef<HTMLUListElement>(null);
  const reduce = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const [stopped, setStopped] = useState(false);
  const [edges, setEdges] = useState({ start: true, end: false });

  const updateEdges = useCallback(() => {
    const t = trackRef.current;
    if (!t) return;
    setEdges({ start: t.scrollLeft <= 4, end: t.scrollLeft + t.clientWidth >= t.scrollWidth - 4 });
  }, []);

  const step = useCallback((dir: 1 | -1, loop = false) => {
    const t = trackRef.current;
    if (!t) return;
    const card = t.querySelector("li");
    const dx = (card ? card.getBoundingClientRect().width + 20 : 240) * dir;
    const atEnd = t.scrollLeft + t.clientWidth >= t.scrollWidth - 4;
    if (loop && dir === 1 && atEnd) t.scrollTo({ left: 0, behavior: "smooth" });
    else t.scrollBy({ left: dx, behavior: "smooth" });
  }, []);

  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, [updateEdges]);

  useEffect(() => {
    if (reduce || paused || stopped) return;
    const id = setInterval(() => step(1, true), AUTO_MS);
    return () => clearInterval(id);
  }, [reduce, paused, stopped, step]);

  const manual = (dir: 1 | -1) => {
    setStopped(true);
    step(dir);
  };

  return (
    <section className="border-y border-navy/15 bg-paper py-16 md:py-20" aria-labelledby="mq-title">
      <div className="wrap flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="pill bg-white text-gold-dark">Selected experience</p>
          <h2 id="mq-title" className="mt-5 max-w-2xl font-display text-[clamp(24px,2.6vw,36px)] leading-tight text-navy">
            Experience across leading insurance &amp; financial services organisations
          </h2>
        </div>
        <p className="shrink-0 font-mono text-[12px] text-graphite">
          <span className="font-display text-[28px] text-navy">{items.length}</span> organisations
        </p>
      </div>

      <div
        className="wrap mt-10 flex items-center gap-3 sm:gap-5"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
        }}
      >
        <ArrowButton dir="left" tone="light" label="Previous organisations" disabled={edges.start} onClick={() => manual(-1)} />
        <ul
          ref={trackRef}
          onScroll={updateEdges}
          className="no-scrollbar relative -my-6 flex flex-1 snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth py-6"
          aria-label="Organisations within our experience history"
        >
          {items.map((o) => (
            <li
              key={o.slug}
              className="group flex h-32 w-[190px] shrink-0 snap-start items-center justify-center rounded-2xl border border-navy/5 bg-white px-7 shadow-[0_12px_30px_-18px_rgba(12,32,56,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-18px_rgba(12,32,56,0.45)] motion-reduce:hover:translate-y-0 sm:w-[210px]"
            >
              <ClientLogo name={o.name} logo={o.logo} />
              {o.logo && <span className="sr-only">{o.name}</span>}
            </li>
          ))}
        </ul>
        <ArrowButton dir="right" tone="light" label="Next organisations" disabled={edges.end} onClick={() => manual(1)} />
      </div>

      <p className="wrap mt-8 font-mono text-[11px] text-graphite">
        Organisations from documented experience — not all are current clients.
      </p>
    </section>
  );
}
