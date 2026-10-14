import { brit as b } from "@/data/brit";
import { cn } from "@/lib/utils";

type Step = { title: string; detail: string };

/**
 * Code-built programme board: headline figures and the two documented workstreams as step flows.
 * Every label comes from the documented engagement; nothing here is an invented metric.
 */
const workstreams: { kicker: string; title: string; steps: Step[] }[] = [
  {
    kicker: "Workstream 01",
    title: "Solvency II reporting",
    steps: [
      { title: "Source systems", detail: "Sequel Eclipse · Velocity · Data Warehouse" },
      { title: "Extraction & calculation", detail: "Complex datasets prepared; calculations built in Excel" },
      { title: "Validation", detail: "Regulator-provided tools and portals; exceptions analysed" },
      { title: "Reporting", detail: "Solvency II reports and QRTs for Lloyd’s, FSC and Gibraltar" },
    ],
  },
  {
    kicker: "Workstream 02",
    title: "GDPR compliance",
    steps: [
      { title: "PII discovery", detail: "Delegated Authority · Managing Agents · Coverholders" },
      { title: "Data flows & integrations", detail: "Transfer points, interfaces and business process maps" },
      { title: "Third parties & access", detail: "Outsourcing, third-party access and security frameworks" },
      { title: "Remediation", detail: "Compliance gaps documented for the GDPR programme" },
    ],
  },
];

export function ProgrammeVisual() {
  const figures = [
    { value: b.programme.value, label: "Programme value" },
    { value: "8", label: "People" },
    { value: "Jan – May 2017", label: "Engagement" },
    { value: String(b.domains.length), label: "Business areas" },
  ];

  return (
    <section className="bg-midnight pb-16 pt-4 md:pb-24" aria-label="Programme overview">
      <figure className="wrap">
        <div className="relative overflow-hidden border border-white/15 bg-gradient-to-br from-navy-700 via-navy to-midnight text-white">
          <div className="blueprint pointer-events-none absolute inset-0" aria-hidden />

          {/* Figures */}
          <dl className="relative grid grid-cols-2 border-b border-white/15 md:grid-cols-4">
            {figures.map((f, i) => (
              <div
                key={f.label}
                className={cn("p-6 md:p-8", i > 0 && "md:border-l md:border-white/15", i % 2 === 1 && "border-l border-white/15")}
              >
                <dt className="sr-only">{f.label}</dt>
                <dd className="font-display text-[clamp(22px,2.4vw,34px)] leading-none md:whitespace-nowrap">{f.value}</dd>
                <dd className="mt-2 font-mono text-[11px] tracking-[0.1em] text-white/60">{f.label.toUpperCase()}</dd>
              </div>
            ))}
          </dl>

          {/* Workstreams */}
          <div className="relative grid md:grid-cols-2">
            {workstreams.map((w, wi) => (
              <div key={w.title} className={cn("p-6 md:p-10", wi === 1 && "border-t border-white/15 md:border-l md:border-t-0")}>
                <p className="font-mono text-[11px] tracking-[0.14em] text-gold-light">{w.kicker.toUpperCase()}</p>
                <h3 className="mt-2 font-display text-[clamp(24px,2.4vw,32px)] leading-tight">{w.title}</h3>
                <ol className="relative mt-8">
                  <span
                    aria-hidden
                    className="absolute bottom-5 left-[15px] top-5 w-px bg-gradient-to-b from-gold via-gold/40 to-gold/10"
                  />
                  {w.steps.map((s, i) => (
                    <li key={s.title} className="relative grid grid-cols-[32px_1fr] gap-4 pb-6 last:pb-0">
                      <span
                        className={cn(
                          "relative z-10 flex h-8 w-8 items-center justify-center rounded-full border font-mono text-[11px]",
                          i === w.steps.length - 1 ? "border-gold bg-gold text-navy" : "border-gold/70 bg-navy text-gold-light",
                        )}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="pt-1">
                        <p className="font-display text-[19px] leading-tight">{s.title}</p>
                        <p className="mt-1 text-[14.5px] leading-relaxed text-white/65">{s.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>

          {/* Convergence */}
          <div className="relative flex flex-col gap-3 border-t border-white/15 bg-white/[0.03] px-6 py-5 md:flex-row md:items-center md:justify-between md:px-10">
            <p className="font-display text-[20px] leading-snug">
              From regulatory complexity to <span className="text-gold-light">structured compliance</span>
            </p>
            <p className="font-mono text-[11px] tracking-[0.1em] text-white/60">{b.domains.join(" · ").toUpperCase()}</p>
          </div>
        </div>
        <figcaption className="mt-3 font-mono text-[11px] text-white/55">
          Programme summary drawn from the documented engagement. Not a client system or screenshot.
        </figcaption>
      </figure>
    </section>
  );
}
