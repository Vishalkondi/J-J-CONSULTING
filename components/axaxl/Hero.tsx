import Image from "next/image";
import { ClientMark } from "../ClientMark";
import { images } from "@/data/howden-hx";
import { axaXl as a } from "@/data/axa-xl";

/**
 * These four figures are the exact facts already stated in data/axa-xl.ts -> about
 * ("assets worth 15+ billion USD and 2,400+ employees worldwide... global specialty
 * insurer and reinsurer"), just broken into chips for the hero. No new figures - restyling only.
 */
const companyChips = [
  { icon: "globe", value: "US$15B+", label: "Assets" },
  { icon: "people", value: "2,400+", label: "Employees" },
  { icon: "world", value: "Global", label: "Operations" },
  { icon: "shield", value: "Specialty", label: "Insurance & Reinsurance" },
] as const;

function ChipIcon({ kind }: { kind: (typeof companyChips)[number]["icon"] }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (kind === "globe")
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.6 4 6 4 9s-1.5 6.4-4 9c-2.5-2.6-4-6-4-9s1.5-6.4 4-9Z" />
      </svg>
    );
  if (kind === "people")
    return (
      <svg {...common}>
        <circle cx="9" cy="8" r="3" />
        <path d="M2 20c0-3.3 3.1-6 7-6s7 2.7 7 6M16 8a3 3 0 1 1 0 5.9M22 20c0-2.6-1.9-4.8-4.5-5.6" />
      </svg>
    );
  if (kind === "world")
    return (
      <svg {...common}>
        <path d="M4 6h16M4 12h16M4 18h16" />
        <circle cx="6" cy="6" r="1.4" fill="currentColor" stroke="none" />
        <circle cx="14" cy="12" r="1.4" fill="currentColor" stroke="none" />
        <circle cx="9" cy="18" r="1.4" fill="currentColor" stroke="none" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="M12 3l7 3v6c0 5-3 8-7 9-4-1-7-4-7-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function AxaXlHero() {
  return (
    <section className="relative isolate overflow-hidden bg-midnight text-white" aria-labelledby="axl-title">
      <Image src={images.skyline.src} alt={images.skyline.alt} fill priority sizes="100vw" quality={92} className="-z-20 object-cover" />
      <div
        className="absolute inset-0 -z-10"
        aria-hidden
        style={{
          background:
            "linear-gradient(100deg, rgba(8,18,31,0.97) 0%, rgba(8,18,31,0.92) 38%, rgba(8,18,31,0.55) 72%, rgba(8,18,31,0.32) 100%)",
        }}
      />
      <div className="wrap relative pb-16 pt-36 md:pb-24 md:pt-48">
        {/* LOGOS + BRAND HISTORY NOTE */}
        <div className="flex flex-wrap items-center gap-5">
          <ClientMark name="AXA" logo={a.logos.axa} className="h-14 w-14 shrink-0 border border-white/15" />
          <ClientMark name="XL Insurance Reinsurance" logo={a.logos.xl} className="h-14 w-36 shrink-0 border border-white/15" />
          <span aria-hidden className="hidden h-8 w-px bg-white/20 sm:block" />
          <p className="max-w-sm text-[12.5px] leading-snug text-white/55">
            Experience spanning the Catlin Group and XL Group era, subsequently becoming part of AXA XL.
          </p>
        </div>

        <p className="label mt-10 text-gold-light">Business analysis · Insurance · Data transformation</p>
        <h1 id="axl-title" className="mt-5 max-w-4xl text-[clamp(36px,5.6vw,76px)] leading-[1.03]">
          Transforming insurance data into enterprise intelligence
        </h1>
        <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-white/80">
          Business analysis, data transformation, business intelligence and regulatory groundwork across Finance, Underwriting, Actuarial,
          Claims, Reinsurance, Recoveries and Enterprise Risk Management.
        </p>
        <p className="mt-7 font-mono text-[12px] tracking-[0.1em] text-white/60">
          {a.role.toUpperCase()} · {a.clientLabel.toUpperCase()} · {a.period.toUpperCase()}
        </p>

        {/* COMPANY FACT CHIPS - same figures as the about text, restyled */}
        <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {companyChips.map((c) => (
            <div key={c.label} className="flex items-start gap-2.5 border border-white/15 bg-white/[0.03] p-4">
              <span className="mt-0.5 text-gold-light">
                <ChipIcon kind={c.icon} />
              </span>
              <div>
                <dd className="font-display text-[17px] leading-tight">{c.value}</dd>
                <dt className="mt-0.5 text-[11.5px] leading-tight text-white/55">{c.label}</dt>
              </div>
            </div>
          ))}
        </dl>

        {/* HISTORY TIMELINE */}
        <ol className="mt-10 flex flex-wrap gap-x-8 gap-y-3" aria-label="Corporate history">
          {a.history.map((h, i) => (
            <li key={h.year} className="flex items-baseline gap-2">
              <span className="font-mono text-[12px] text-gold-light">{h.year}</span>
              <span className="text-[13px] text-white/75">{h.label}</span>
              {h.note && <span className="text-[11px] text-white/45">({h.note})</span>}
              {i < a.history.length - 1 && (
                <span aria-hidden className="ml-6 text-white/30">
                  →
                </span>
              )}
            </li>
          ))}
        </ol>

        {/* PROGRAMME STATS */}
        <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {a.stats.map((s) => (
            <div key={s.label} className="border border-white/20 p-5">
              <dd className="font-display text-[clamp(24px,2.6vw,34px)] leading-none">{s.value}</dd>
              <dt className="mt-2 text-[12.5px] text-white/60">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
