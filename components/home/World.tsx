import { CityShowcase } from "../CityShowcase";
import { WorldMap } from "../WorldMap";
import { SectionHeading } from "../SectionHeading";
import { deliveryNetwork } from "@/data/site";

export function GlobalHubs() {
  return (
    <section className="blueprint relative bg-midnight py-24 text-white md:py-32" aria-labelledby="hubs-title">
      <div className="wrap">
        <div id="hubs-title">
          <SectionHeading
            tone="dark"
            eyebrow="Global business hubs"
            title="Connected to Global Business Hubs"
            intro="The financial and professional-services centres that shape the markets we work in."
          />
        </div>
        <div className="mt-14">
          <CityShowcase />
        </div>
        <p className="mt-8 font-mono text-[11px] text-white/50">
          These cities illustrate the markets we follow. They are not J &amp; J offices.
        </p>
      </div>
    </section>
  );
}

export function DeliveryNetwork() {
  return (
    <section className="bg-bone py-24 md:py-32" aria-labelledby="del-title">
      <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
        <div id="del-title">
          <SectionHeading eyebrow="Delivery & outsourcing network" title="Delivery & Outsourcing Network" />
        </div>
        <ul className="border-t border-navy/20">
          {deliveryNetwork.map((d) => (
            <li key={d.name} className="flex items-baseline justify-between gap-6 border-b border-navy/20 py-8">
              <span className="font-display text-[clamp(30px,4vw,52px)] leading-none text-navy">
                {d.website ? (
                  <a
                    href={d.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-navy/25 underline-offset-8 transition-colors hover:decoration-navy"
                  >
                    {d.name}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : (
                  d.name
                )}
              </span>
              <span className="label text-graphite">{d.location}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function InternationalExperience() {
  return (
    <section className="bg-midnight py-24 text-white md:py-32" aria-labelledby="intl-title">
      <div className="wrap">
        <div id="intl-title">
          <SectionHeading
            tone="dark"
            eyebrow="International experience"
            title="International Consulting Experience"
            intro="Consulting engagements across the United Kingdom, United States, Malaysia, Singapore and India."
          />
        </div>
        <div className="mt-14">
          <WorldMap />
        </div>
      </div>
    </section>
  );
}
