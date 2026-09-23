"use client";
import { motion, useReducedMotion } from "framer-motion";

/** 2010 → Today. Only two verified points; no invented milestones. */
export function TimelineBar() {
  const reduce = useReducedMotion();
  return (
    <div className="relative mt-16" aria-label="Timeline from 2010 to today">
      <div className="relative h-px bg-navy/15">
        <span
          aria-hidden
          className="absolute left-0 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-gold bg-paper"
        />
        <span aria-hidden className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 translate-x-1/2 rounded-full bg-gold" />
        <motion.span
          className="absolute inset-y-0 left-0 block w-full origin-left bg-gold"
          style={{ height: 2, top: -0.5 }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={reduce ? { duration: 0 } : { duration: 2, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      <div className="mt-5 flex items-start justify-between">
        <div>
          <p className="font-display text-[clamp(40px,6vw,72px)] leading-none text-navy">2010</p>
          <p className="label mt-2 text-graphite">Established</p>
        </div>
        <div className="hidden pt-4 text-center sm:block">
          <p className="label text-gold-dark">16+ years</p>
        </div>
        <div className="text-right">
          <p className="font-display text-[clamp(40px,6vw,72px)] leading-none text-navy">Today</p>
          <p className="label mt-2 text-graphite">Technology · Transformation · Talent</p>
        </div>
      </div>
    </div>
  );
}
