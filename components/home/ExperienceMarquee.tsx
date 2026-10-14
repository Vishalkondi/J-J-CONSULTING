import { ClientLogo } from "../ClientLogo";
import { insuranceExperience, marqueeOrder } from "@/data/site";

const items = marqueeOrder
  .map((slug) => insuranceExperience.find((o) => o.slug === slug))
  .filter((o): o is NonNullable<typeof o> => Boolean(o));

/** Slim, infinite logo strip. Pauses on hover/focus; static + scrollable under prefers-reduced-motion. */
export function ExperienceMarquee() {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((o) => (
        <li key={o.slug} className="group flex h-24 w-[220px] shrink-0 items-center justify-center px-8 sm:w-[260px]">
          <ClientLogo name={o.name} logo={o.logo} />
        </li>
      ))}
    </ul>
  );
  return (
    <section className="border-y border-navy/15 bg-paper py-12" aria-labelledby="mq-title">
      <div className="wrap">
        <h2 id="mq-title" className="max-w-2xl font-display text-[clamp(22px,2.4vw,32px)] leading-tight text-navy">
          Experience across leading insurance &amp; financial services organisations
        </h2>
      </div>
      <div className="marquee mt-8" tabIndex={0} aria-label="Organisations within our experience history">
        <div className="marquee-track">
          {row(false)}
          {row(true)}
        </div>
      </div>
      <p className="wrap mt-6 font-mono text-[11px] text-graphite">
        Organisations from documented experience — not all are current clients.
      </p>
    </section>
  );
}
