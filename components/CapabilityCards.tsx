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
              <article className="group flex h-full flex-col border border-navy/15 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-navy/30 hover:shadow-[0_18px_40px_-20px_rgba(12,32,56,0.35)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center bg-paper text-navy transition-colors duration-300 group-hover:bg-navy group-hover:text-gold-light">
                    {Icon ? <Icon /> : null}
                  </span>
                  <span className="font-mono text-[12px] text-graphite/70">{String(idx + 1).padStart(2, "0")}</span>
                </div>
                <Heading className="mt-6 text-[23px] leading-tight text-navy">{c.title}</Heading>
                <p className="mt-3 text-[15px] leading-relaxed text-graphite">{c.text}</p>
                <span aria-hidden className="mt-auto block pt-6">
                  <span className="block h-px w-8 bg-gold transition-all duration-500 group-hover:w-14" />
                </span>
              </article>
            </Reveal>
          </li>
        );
      })}
    </ul>
  );
}
