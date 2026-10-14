import { Reveal } from "./Reveal";
import { capabilityIcons } from "./CapabilityIcons";
import { capabilities } from "@/data/site";
import { cn } from "@/lib/utils";

/** Icon cards for the twelve business-analysis capabilities (home + /expertise). */
export function CapabilityCards({ className, id, headingLevel = "h3" }: { className?: string; id?: string; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <ul id={id} className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {capabilities.map((c, idx) => {
        const Icon = capabilityIcons[c.title];
        return (
          <li key={c.title}>
            <Reveal delay={(idx % 3) * 0.06} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white p-7 shadow-[0_10px_30px_-22px_rgba(12,32,56,0.35)] transition duration-300 hover:-translate-y-1 hover:border-navy/25 hover:shadow-[0_24px_50px_-24px_rgba(12,32,56,0.45)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-8">
                {/* Gold rule that draws across the top edge on hover. */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-gold-dark via-gold to-gold-light transition-transform duration-500 group-hover:scale-x-100 motion-reduce:transition-none"
                />
                {/* Oversized index numeral as a quiet watermark. */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute right-6 top-5 select-none font-display text-[72px] leading-none text-navy/[0.05] transition-colors duration-500 group-hover:text-gold/20"
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold-light shadow-[0_8px_18px_-10px_rgba(12,32,56,0.8)] transition duration-300 group-hover:scale-105 motion-reduce:transition-none">
                  {Icon ? <Icon /> : null}
                </span>
                <Heading className="relative mt-7 text-[23px] leading-tight text-navy">{c.title}</Heading>
                <span aria-hidden className="relative mt-4 block h-px w-8 bg-gold transition-all duration-500 group-hover:w-14" />
                <p className="relative mt-4 text-[15px] leading-relaxed text-graphite">{c.text}</p>
              </article>
            </Reveal>
          </li>
        );
      })}
    </ul>
  );
}
