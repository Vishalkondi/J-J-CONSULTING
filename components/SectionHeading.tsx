import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow && <p className={cn("label mb-5", tone === "dark" ? "text-gold-light" : "text-gold-dark")}>{eyebrow}</p>}
      <h2 className={cn("text-[clamp(32px,4.4vw,60px)] leading-[1.05]", tone === "dark" ? "text-white" : "text-navy")}>{title}</h2>
      {intro && <p className={cn("mt-6 text-[18px] leading-relaxed", tone === "dark" ? "text-white/70" : "text-graphite")}>{intro}</p>}
    </div>
  );
}
