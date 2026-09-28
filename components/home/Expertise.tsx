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

function TechnologyPartners({ dark }: { dark: boolean }) {
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
