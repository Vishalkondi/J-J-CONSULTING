"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/** Subtle scroll reveal. Used sparingly — most content is static. */
export function Reveal({
  children,
  delay = 0,
  y = 18,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  // Always render the same element (motion.div) on server and client, with the same `initial`
  // style, so the very first paint matches and hydration can't mismatch. useReducedMotion() is
  // unknown during SSR, so it must never decide *which element* gets rendered — only how the
  // animation behaves once triggered (safe: whileInView only fires client-side, well after
  // hydration, so branching the transition's duration here causes no mismatch).
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={reduce ? { duration: 0 } : { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
