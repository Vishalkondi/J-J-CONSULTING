import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SlotImage } from "@/components/SlotImage";
import { CtaBand } from "@/components/CtaBand";
import { Chips } from "@/components/experience/Chips";
import { pageMeta } from "@/lib/seo";
import { services } from "@/data/site";

export const metadata: Metadata = pageMeta({
  title: "Careers",
  description:
    "Speak to J & J Consulting about specialist technology, business and leadership roles, including permanent and contract opportunities.",
  path: "/careers",
});

const recruitment = services.find((s) => s.slug === "recruitment")!;
const workforce = services.find((s) => s.slug === "workforce-solutions")!;

const paths = [
  {
    kicker: "For professionals",
    title: "Looking for your next role",
    text: "Specialist and leadership opportunities across technology, business and professional services, with a particular depth in insurance and financial services.",
    points: ["Permanent and contract roles", "Specialist and leadership positions", "Technology, data and business change"],
    href: "/contact",
    cta: "Share your profile",
    dark: true,
  },
  {
    kicker: "For organisations",
    title: "Hiring specialist talent",
    text: recruitment.description,
    points: ["Executive search and head hunting", "Permanent and contract recruitment", "Dedicated project teams"],
    href: `/services/${recruitment.slug}`,
    cta: recruitment.cta,
    dark: false,
  },
];

const steps = [
  {
    title: "Get in touch",
    text: "Send us a message through the contact form, telling us about your experience and the kind of role you are looking for.",
  },
  { title: "Have a conversation", text: "We talk through your background, strengths and what you want from your next move." },
  {
    title: "Explore opportunities",
    text: "Where there is a good fit, we discuss relevant opportunities with you before any introduction is made.",
  },
];

const disciplines = [
  "Business Analysis",
  "Project & Programme Management",
  "Data & Analytics",
  "Software Engineering",
  "Cloud & DevOps",
  "AI & Automation",
  "Enterprise Architecture",
  "Testing & Quality",
  "Regulatory Change",
  "Leadership",
];

export default function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Talent connects everything we do."
        intro="If you are looking for your next role in technology, business or professional services, speak with our recruitment team."
        image={{ src: "/images/headset-call-meeting.jpg", alt: "" }}
      />

      {/* INTRO */}
      <section className="bg-paper py-24 md:py-32">
        <div className="wrap grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <figure className="relative">
            <SlotImage
              src="/images/developer-coding-desk.jpg"
              alt="A developer working at a dual-monitor desk in an open-plan office"
              className="aspect-[3/2] w-full"
            />
            <div className="absolute -bottom-6 right-6 hidden bg-navy px-6 py-5 text-white shadow-[0_24px_50px_-24px_rgba(12,32,56,0.6)] sm:block">
              <p className="font-display text-[34px] leading-none">16+</p>
              <p className="mt-1.5 font-mono text-[11px] tracking-[0.1em] text-white/65">YEARS IN BUSINESS</p>
            </div>
          </figure>
          <div>
            <p className="pill mb-5 bg-white text-gold-dark">Talent</p>
            <h2 className="text-balance text-[clamp(30px,3.6vw,50px)] leading-[1.06] text-navy">Talk to our recruitment team</h2>
            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-graphite">
              We connect specialist professionals and leadership talent with organisations across technology, business and professional
              services. Current opportunities are discussed directly, so the best first step is a conversation.
            </p>
            <Link href="/contact" className="btn btn-navy mt-9">
              Start a Conversation <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* TWO PATHS */}
      <section className="bg-bone py-24 md:py-32" aria-labelledby="paths-title">
        <div className="wrap">
          <p className="pill mb-5 bg-white text-gold-dark">How we can help</p>
          <h2 id="paths-title" className="max-w-3xl text-balance text-[clamp(32px,4.4vw,60px)] leading-[1.05] text-navy">
            Whether you are hiring or looking
          </h2>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {paths.map((p) => (
              <article
                key={p.title}
                className={
                  p.dark
                    ? "blueprint relative flex flex-col bg-navy p-8 text-white md:p-10"
                    : "flex flex-col border border-navy/15 bg-white p-8 text-navy md:p-10"
                }
              >
                <p className={p.dark ? "label text-gold-light" : "label text-gold-dark"}>{p.kicker}</p>
                <h3 className="mt-4 font-display text-[clamp(26px,2.8vw,36px)] leading-tight">{p.title}</h3>
                <p className={p.dark ? "mt-4 text-[16px] leading-relaxed text-white/75" : "mt-4 text-[16px] leading-relaxed text-graphite"}>
                  {p.text}
                </p>
                <ul className="mt-8 flex-1 space-y-3">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-3 text-[16px]">
                      <span
                        aria-hidden
                        className={p.dark ? "h-1.5 w-1.5 rounded-full bg-gold-light" : "h-1.5 w-1.5 rounded-full bg-gold"}
                      />
                      {pt}
                    </li>
                  ))}
                </ul>
                <Link href={p.href} className={p.dark ? "btn btn-gold mt-10 self-start" : "btn btn-navy mt-10 self-start"}>
                  {p.cta} <span aria-hidden>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DISCIPLINES */}
      <section className="blueprint relative bg-midnight py-24 text-white md:py-32" aria-labelledby="disc-title">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          <div>
            <p className="label text-gold-light">Where we work</p>
            <h2 id="disc-title" className="mt-4 text-balance text-[clamp(32px,4.4vw,56px)] leading-[1.05]">
              Disciplines and engagement types
            </h2>
            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-white/70">
              Our consulting work spans these disciplines, and our recruitment and resourcing covers the full range of engagement types.
            </p>
          </div>
          <div className="space-y-10">
            <div>
              <p className="label text-gold-light">Disciplines</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {disciplines.map((d) => (
                  <li key={d} className="border border-white/20 px-3 py-1.5 text-[14px] text-white/85">
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label text-gold-light">Recruitment</p>
              <Chips items={recruitment.items} dark className="mt-4" />
            </div>
            <div>
              <p className="label text-gold-light">Resourcing</p>
              <Chips items={workforce.items} dark className="mt-4" />
            </div>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="bg-paper py-24 md:py-32" aria-labelledby="steps-title">
        <div className="wrap">
          <p className="pill mb-5 bg-white text-gold-dark">For professionals</p>
          <h2 id="steps-title" className="text-[clamp(32px,4.4vw,60px)] leading-[1.05] text-navy">
            How it works
          </h2>
          <ol className="mt-14 grid gap-px border border-navy/15 bg-navy/15 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="flex flex-col gap-4 bg-white p-8">
                <span className="font-display text-[44px] leading-none text-gold">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-[24px] leading-tight text-navy">{s.title}</h3>
                <p className="text-[16px] leading-relaxed text-graphite">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        title="Ready for your next move?"
        text="Tell us about your experience and the role you are looking for."
        label="Start a Conversation"
      />
    </>
  );
}
