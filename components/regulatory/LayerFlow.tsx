import { Fragment } from "react";
import { Reveal } from "../Reveal";
import { cn } from "@/lib/utils";

export type Layer = { label: string; items?: readonly string[] };

/**
 * Layered enterprise-architecture flow. Connectors animate (CSS) top→bottom, or show a two-way marker.
 * Reduced motion: connectors are static. Conceptual diagrams only.
 */
export function LayerFlow({
  layers,
  tone = "light",
  link = "flow",
  label,
  className,
}: {
  layers: readonly Layer[];
  tone?: "light" | "dark";
  link?: "flow" | "swap";
  label: string;
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <ol className={cn("mx-auto flex w-full max-w-xl flex-col", className)} aria-label={label}>
      {layers.map((l, i) => (
        <Fragment key={l.label}>
          <li>
            <Reveal delay={i * 0.04} y={10}>
              <div
                className={cn(
                  "border px-6 py-4 text-center transition-colors duration-300",
                  dark ? "border-white/20 bg-navy/70 hover:border-steel-light" : "border-navy/20 bg-white hover:border-steel",
                )}
              >
                <p className={cn("font-display text-[clamp(20px,2vw,26px)] leading-tight", dark ? "text-white" : "text-navy")}>{l.label}</p>
                {l.items && (
                  <ul
                    className={cn(
                      "mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1 font-mono text-[12px]",
                      dark ? "text-white/65" : "text-graphite",
                    )}
                  >
                    {l.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          </li>
          {i < layers.length - 1 &&
            (link === "flow" ? (
              <li aria-hidden className={cn("flow", !dark && "flow-light")} style={{ ["--d" as string]: `${i * 0.3}s` }} />
            ) : (
              <li aria-hidden className={cn("py-1 text-center text-[18px]", dark ? "text-steel-light" : "text-steel")}>
                ↕
              </li>
            ))}
        </Fragment>
      ))}
    </ol>
  );
}
