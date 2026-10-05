"use client";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { approach } from "@/data/services-page";

/** Five-stage timeline; the gradient line draws with scroll (horizontal on desktop, vertical on mobile). */
export function ServicesApproach() {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  // Always the same motion value on server and client (useReducedMotion() is unknown during SSR);
  // reduced motion shows the line fully drawn via CSS instead.

  return (
    <section className="bg-white py-24 md:py-32" aria-labelledby="approach-title">
      <div className="wrap">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center rounded-full bg-[#EAF2FD] px-3.5 py-1 text-[12.5px] font-semibold text-[#2058B8]">{approach.label}</p>
          <h2 id="approach-title" className="mt-6 font-sans text-[clamp(34px,4.2vw,56px)] font-bold leading-[1.08] tracking-[-0.03em] text-[#0F172A]">
            From ambition to <span className="brand-text-blue">execution.</span>
          </h2>
        </div>

        <ol ref={ref} className="relative mt-16 grid gap-6 pl-12 md:mt-20 lg:grid-cols-5 lg:gap-5 lg:pl-0 lg:pt-16">
          <span aria-hidden className="absolute bottom-6 left-[19px] top-6 w-0.5 rounded bg-[#E2E8F0] lg:hidden" />
          <span aria-hidden className="absolute left-[10%] right-[10%] top-[19px] hidden h-0.5 rounded bg-[#E2E8F0] lg:block" />
          <motion.span
            aria-hidden
            className="absolute bottom-6 left-[19px] top-6 w-0.5 origin-top rounded bg-gradient-to-b from-[#2058B8] to-[#3B82E4] motion-reduce:!transform-none lg:hidden"
            style={{ scaleY: progress }}
          />
          <motion.span
            aria-hidden
            className="absolute left-[10%] right-[10%] top-[19px] hidden h-0.5 origin-left rounded bg-gradient-to-r from-[#2058B8] to-[#3B82E4] motion-reduce:!transform-none lg:block"
            style={{ scaleX: progress }}
          />
          {approach.steps.map((s, i) => (
            <motion.li
              key={s.title}
              className="relative"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={reduce ? { duration: 0 } : { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span
                aria-hidden
                className="absolute -left-12 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#2058B8] to-[#3B82E4] text-[13px] font-bold text-white ring-4 ring-white lg:-top-16 lg:left-1/2 lg:-translate-x-1/2"
              >
                {i + 1}
              </span>
              <div className="h-full rounded-2xl border border-[#E2E8F0] bg-[#F7FAFE] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(32,88,184,0.45)] lg:text-center">
                <h3 className="font-sans text-[13px] font-bold uppercase tracking-[0.14em] text-[#2058B8]">{s.title}</h3>
                <p className="mt-2 font-sans text-[22px] font-bold text-[#0F172A]">{s.verb}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
