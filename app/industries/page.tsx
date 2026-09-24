import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { SlotImage } from "@/components/SlotImage";
import { CtaBand } from "@/components/CtaBand";
import { pageMeta } from "@/lib/seo";
import { industries, insuranceExpertise } from "@/data/site";

const iconProps = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

/** Decorative line icon per industry. */
const industryIcons: Record<string, React.ReactElement> = {
  Insurance: (
    <svg {...iconProps}>
      <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  "Financial Services": (
    <svg {...iconProps}>
      <path d="M4 19h16M6 16V9M10 16V9M14 16V9M18 16V9M3 8l9-5 9 5z" />
    </svg>
  ),
  Banking: (
    <svg {...iconProps}>
      <rect x="3" y="6" width="18" height="12" rx="1.5" />
      <path d="M3 10h18M7 15h3" />
    </svg>
  ),
  Technology: (
    <svg {...iconProps}>
      <rect x="7" y="7" width="10" height="10" rx="1" />
      <path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4" />
    </svg>
  ),
  "Professional Services": (
    <svg {...iconProps}>
      <rect x="3" y="7" width="18" height="13" rx="1.5" />
      <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 12h18" />
    </svg>
  ),
  "Risk & Compliance": (
    <svg {...iconProps}>
      <path d="M12 3L2 20h20z" />
      <path d="M12 10v4M12 17h.01" />
    </svg>
  ),
  "Digital Transformation": (
    <svg {...iconProps}>
      <path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3" />
      <path d="M18 4v3h-3M6 20v-3h3" />
    </svg>
  ),
  default: (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="8" />
    </svg>
  ),
};

export const metadata: Metadata = pageMeta({
  title: "Industries",
  description:
    "Expertise in insurance, financial services, banking, technology, professional services, risk and compliance, and digital transformation.",
  path: "/industries",
});

export default function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Expertise in Complex Industries"
        intro="Insurance and financial services sit at the centre of our experience, alongside technology and professional services."
        image={{ src: "/images/capabilities-terrace-sunset.jpg", alt: "" }}
      />
      <section id="insurance" className="scroll-mt-24 bg-paper py-24 md:py-32">
        <div className="wrap grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          <div>
            <SectionHeading
              eyebrow="Insurance"
              title="Insurance"
              intro="More than 16 years in insurance and financial services, including the London Market."
            />
            <SlotImage
              src="/images/london-skyline.jpg"
              alt="The City of London skyline, home of the London insurance market"
              className="mt-12 aspect-[16/10] w-full"
            />
          </div>
          <ul className="grid content-start gap-3 sm:grid-cols-2">
            {insuranceExpertise.map((e) => (
              <li
                key={e}
                className="group border border-navy/15 bg-white p-5 font-display text-[19px] leading-tight text-navy transition duration-300 hover:-translate-y-0.5 hover:border-navy/30 hover:shadow-[0_14px_30px_-18px_rgba(12,32,56,0.35)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                {e}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section id="financial-services" className="scroll-mt-24 bg-bone py-24 md:py-32">
        <div className="wrap">
          <SectionHeading eyebrow="Beyond insurance" title="Financial services and connected industries" />
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((i, idx) => {
              const featured = idx === 0; // Insurance: the core sector, and spanning two columns fills the 7-item grid
              return (
                <li key={i} className={featured ? "sm:col-span-2" : undefined}>
                  <article
                    className={`group flex h-full flex-col justify-between gap-10 border p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(12,32,56,0.35)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${
                      featured ? "blueprint border-navy bg-navy text-white" : "border-navy/15 bg-white text-navy hover:border-navy/30"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <span className={featured ? "text-gold-light" : "text-gold-dark"}>{industryIcons[i] ?? industryIcons.default}</span>
                      <span className={`font-mono text-[12px] ${featured ? "text-white/50" : "text-graphite"}`}>
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <h3 className={`font-display leading-tight ${featured ? "text-[34px]" : "text-[24px]"}`}>{i}</h3>
                      {featured && (
                        <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-white/70">
                          Our core sector, including the London Market.
                        </p>
                      )}
                      <span aria-hidden className="mt-5 block h-px w-8 bg-gold transition-all duration-500 group-hover:w-14" />
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
