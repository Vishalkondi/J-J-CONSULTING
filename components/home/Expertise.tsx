import Link from "next/link";
import { SectionHeading } from "../SectionHeading";
import { SlotImage } from "../SlotImage";
import { Reveal } from "../Reveal";
import { TechCarousel } from "./TechCarousel";
import { CapabilityCards } from "../CapabilityCards";
import { industryIcons } from "../IndustryIcons";
import { industries, insuranceExpertise, technologyPartners } from "@/data/site";

export function InsuranceFinancial() {
  return (
    <section className="bg-bone py-24 md:py-36" id="industries" aria-labelledby="ins-title">
      <div className="wrap">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          <div>
            <div id="ins-title">
              <SectionHeading
                eyebrow="Insurance & financial services"
                title="Expertise in Complex Industries"
                intro="Our depth is in insurance and financial services, with the technology, data and regulatory context that comes with them."
              />
            </div>
            <ul className="mt-12 grid gap-3 sm:grid-cols-2">
              {industries.map((i) => (
                <li
                  key={i}
                  className="group flex items-center gap-4 rounded-xl border border-navy/15 bg-white/60 px-5 py-4 font-display text-[19px] leading-tight text-navy transition duration-300 hover:-translate-y-0.5 hover:border-navy/30 hover:bg-white motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <span className="shrink-0 text-gold-dark [&_svg]:h-6 [&_svg]:w-6">{industryIcons[i] ?? industryIcons.default}</span>
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-12">
            <Reveal>
              {/* Deliberately a different photo from the /industries insurance section. */}
              <SlotImage src="/images/team-desk-dashboards.jpg" alt="A financial services team at work" className="aspect-[16/10] w-full" />
            </Reveal>
            <div>
              <p className="label text-gold-dark">Insurance expertise</p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {insuranceExpertise.map((e) => (
                  <li
                    key={e}
                    className="border-b border-navy/15 py-3 text-[16px] text-charcoal transition-colors duration-300 hover:border-navy/30 hover:text-navy"
                  >
                    {e}
                  </li>
                ))}
              </ul>
              <Link href="/industries" className="link-arrow mt-8 text-navy">
                Industries we work in <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Capabilities() {
  return (
    <section className="bg-paper py-24 md:py-36" aria-labelledby="cap-title">
      <div className="wrap">
        <div id="cap-title">
          <SectionHeading
            eyebrow="Technology & transformation"
            title="Business analysis and consulting capabilities"
            intro="What sits behind successful change: clear requirements, well-understood processes, governed data and aligned stakeholders."
          />
        </div>
        <CapabilityCards className="mt-14" />
      </div>
    </section>
  );
}

export function TechEcosystem({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const dark = tone === "dark";
  return (
    <section
      className={dark ? "blueprint relative bg-midnight py-24 text-white md:py-32" : "bg-paper py-24 md:py-32"}
      aria-labelledby="eco-title"
      id="technology"
    >
      <div className="wrap">
        <div id="eco-title">
          <SectionHeading
            tone={dark ? "dark" : "light"}
            eyebrow="Technology ecosystem"
            title="The platforms and tools we work with"
            intro="Experience across cloud, data, enterprise platforms, engineering and AI."
          />
        </div>
        <TechnologyPartners dark={dark} />
        <div className="mt-14">
          <TechCarousel tone={dark ? "dark" : "light"} />
        </div>
        <p
          className={
            dark
              ? "mt-8 max-w-2xl font-mono text-[11px] leading-relaxed text-white/50"
              : "mt-8 max-w-2xl font-mono text-[11px] leading-relaxed text-graphite"
          }
        >
          Technology partners: Microsoft and Amazon Web Services. Other platforms and tools shown are ones we have worked with; product
          names belong to their respective owners and do not imply a formal partnership.
        </p>
      </div>
    </section>
  );
}

function MicrosoftMark() {
  return (
    <svg viewBox="0 0 23 23" className="h-9 w-9 shrink-0" aria-hidden>
      <rect x="0" y="0" width="11" height="11" fill="#F25022" />
      <rect x="12" y="0" width="11" height="11" fill="#7FBA00" />
      <rect x="0" y="12" width="11" height="11" fill="#00A4EF" />
      <rect x="12" y="12" width="11" height="11" fill="#FFB900" />
    </svg>
  );
}

export function TechnologyPartners({ dark }: { dark: boolean }) {
  return (
    <div className="mt-12">
      <p className={dark ? "label text-gold-light" : "label text-gold-dark"}>Technology partners</p>
      <ul className="mt-5 flex flex-wrap gap-4">
        {technologyPartners.map((p) => (
          <li key={p.name}>
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-navy/10 bg-white px-6 py-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              aria-label={`${p.label} (opens in a new tab)`}
            >
              {p.name === "Microsoft" ? (
                <MicrosoftMark />
              ) : (
                <span className="flex h-9 shrink-0 items-center font-sans text-[26px] font-bold lowercase leading-none tracking-tight text-[#232F3E]">
                  aws
                </span>
              )}
              <span className="flex flex-col leading-tight">
                <span className="font-sans text-[20px] font-semibold text-[#5E5E5E]">{p.name}</span>
                <span className="font-sans text-[15px] text-[#737373]">Partner</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

const pillarIcon = {
  shield: <path d="M12 3 5 6v5c0 4.4 3 8.4 7 9.5 4-1.1 7-5.1 7-9.5V6l-7-3Zm-3 9 2 2 4-4" />,
  chart: <path d="M4 20h16M7 16v-4m4 4V9m4 7v-6m4-6-5 5-3-3-4 4" />,
  globe: <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-9-9h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3Z" />,
  people: <path d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-6 9c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5m1-9a2.5 2.5 0 1 0 0-5m2 14c0-2.6-1.2-4.4-3-5.2" />,
};

const insurancePillars: { label: string; icon: keyof typeof pillarIcon; gold?: boolean }[] = [
  { label: "Insurance expertise", icon: "shield" },
  { label: "Financial services", icon: "chart", gold: true },
  { label: "London Market", icon: "globe" },
  { label: "Clients, people & partnerships", icon: "people", gold: true },
];

export function InsuranceYears() {
  return (
    <section className="blueprint relative overflow-hidden bg-midnight py-24 text-white md:py-32" aria-labelledby="years-title">
      {/* gold glow behind the headline, navy glow behind the photo */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[520px] w-[520px] rounded-full bg-gold/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[560px] w-[560px] rounded-full bg-navy-700/60 blur-3xl" aria-hidden />
      <div className="wrap relative grid items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div>
          <p className="pill bg-white/5 text-gold-light">Insurance &amp; financial services</p>
          <h2 id="years-title" className="mt-8 font-display leading-[0.95]">
            <span className="block text-[clamp(40px,5.6vw,76px)] text-white">More than</span>
            <span className="block bg-gradient-to-r from-gold-light via-gold to-gold-light bg-clip-text text-[clamp(64px,9.5vw,132px)] text-transparent">
              16 Years
            </span>
          </h2>
          <p className="mt-6 max-w-xl text-[clamp(19px,1.8vw,24px)] leading-snug text-white/75">
            in insurance and financial services, including the London Market.
          </p>
          <span className="mt-8 block h-px w-24 bg-gradient-to-r from-gold to-gold/0" aria-hidden />

          <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
            {insurancePillars.map((p) => (
              <li key={p.label} className="group flex flex-col items-center text-center">
                <span
                  className={`flex h-[72px] w-[72px] items-center justify-center rounded-full shadow-[0_14px_30px_-14px_rgba(0,0,0,0.8)] transition duration-300 group-hover:-translate-y-1 motion-reduce:transition-none ${
                    p.gold
                      ? "bg-gradient-to-br from-gold-light to-gold-dark text-midnight"
                      : "border border-gold/50 bg-navy-800 text-gold-light group-hover:border-gold"
                  }`}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8" aria-hidden>
                    {pillarIcon[p.icon]}
                  </svg>
                </span>
                <span className="mt-4 max-w-[9rem] text-[14.5px] font-semibold leading-tight text-white/90">{p.label}</span>
              </li>
            ))}
          </ul>

          <Link href="/industries" className="link-arrow mt-12 text-gold-light">
            Insurance &amp; financial services expertise <span aria-hidden>→</span>
          </Link>
        </div>

        <Reveal>
          <div className="relative mx-auto max-w-[480px] lg:max-w-none">
            <SlotImage
              src="/images/london-market-insurance.jpg"
              alt="A consultant looking out over the City of London skyline, with an insurance shield on the desk"
              className="aspect-[736/1024] w-full rounded-2xl border border-white/10 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)]"
            />
            {/* navy grade so the photo's pale sky sits in the brand palette */}
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-midnight/85 via-navy/25 to-navy/40 mix-blend-multiply"
              aria-hidden
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-gold/20" aria-hidden />
            <div className="absolute -bottom-6 -left-4 rounded-2xl border border-gold/30 bg-midnight/85 px-5 py-4 shadow-[0_24px_50px_-24px_rgba(0,0,0,0.9)] backdrop-blur-md sm:-left-8">
              <p className="font-display text-[34px] leading-none text-white">
                16<span className="text-gold">+</span>
              </p>
              <p className="label mt-1.5 text-gold-light">Years · London Market</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
