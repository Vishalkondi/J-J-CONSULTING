import Image from "next/image";
import type { ReactNode } from "react";
import { trainingPartner as p } from "@/data/services-page";
import { Reveal } from "@/components/Reveal";
import { RevealFrame } from "./RevealFrame";

const d = p.databricks;

const svg = (children: ReactNode) => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    {children}
  </svg>
);

/** Icon + tile colours per expertise item (amber / sky / emerald, as on thedatamaster.in). */
const icons: Record<string, { icon: ReactNode; tile: string }> = {
  engineering: { icon: svg(<path d="M4 20V4M4 20h16M9 16v-5M13 16V8M17 16v-3" />), tile: "bg-amber-400/15 text-amber-300" },
  ml: {
    icon: svg(
      <>
        <path d="M9 4a3 3 0 0 0-3 3v.5A3 3 0 0 0 4 10.3 3 3 0 0 0 5 15a3 3 0 0 0 4 4.5V4z" />
        <path d="M15 4a3 3 0 0 1 3 3v.5a3 3 0 0 1 2 2.8 3 3 0 0 1-1 4.7 3 3 0 0 1-4 4.5V4z" />
      </>,
    ),
    tile: "bg-dm-sky/15 text-dm-sky",
  },
  governance: {
    icon: svg(
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" />
      </>,
    ),
    tile: "bg-emerald-400/15 text-emerald-300",
  },
};

/** Data Master's specialised Databricks consulting: intro, three areas of expertise, photo with a figure card. */
export function DatabricksConsulting() {
  return (
    <div className="mt-20 md:mt-28" role="group" aria-labelledby="databricks-title">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="inline-flex items-center rounded-full border border-dm-sky/50 bg-white/[0.06] px-3.5 py-1 text-[12.5px] font-medium text-dm-mist">
          {d.label}
        </p>
        {/* eslint-disable-next-line @next/next/no-img-element -- small vector logo, nothing to optimise */}
        <img src={d.logo.src} alt="Databricks" width={d.logo.w} height={d.logo.h} className="mx-auto mt-9 h-10 w-auto sm:h-12 md:h-16" />
        <h3 id="databricks-title" className="mt-7 font-sans text-[clamp(30px,3.6vw,48px)] font-bold leading-[1.06] tracking-[-0.03em]">
          {d.title}
        </h3>
        <p className="mt-5 text-[17px] leading-[1.7] text-dm-mist/80">{d.text}</p>
      </Reveal>

      <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
        <Reveal className="lg:col-span-6">
          <p className="font-sans text-[22px] font-bold tracking-[-0.01em]">{d.heading}</p>
          <ul className="mt-7 space-y-4">
            {d.items.map((it) => (
              <li
                key={it.title}
                className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.05] p-5 transition hover:border-white/25 hover:bg-white/[0.08]"
              >
                <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${icons[it.icon].tile}`}>
                  {icons[it.icon].icon}
                </span>
                <span>
                  <span className="block font-sans text-[17px] font-semibold">{it.title}</span>
                  <span className="mt-1.5 block text-[15px] leading-relaxed text-dm-mist/80">{it.text}</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="relative pb-10 lg:col-span-6 lg:pb-12">
          <RevealFrame>
            <div className="relative aspect-[3/2] overflow-hidden rounded-3xl shadow-[0_40px_80px_-30px_rgba(5,10,40,0.9)] ring-1 ring-white/10">
              <Image src={d.photo} alt={d.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </RevealFrame>
          <div className="absolute bottom-0 left-4 flex items-center gap-4 rounded-2xl bg-white px-5 py-4 text-charcoal shadow-[0_24px_50px_-20px_rgba(5,10,40,0.7)] sm:-left-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              {svg(
                <>
                  <circle cx="12" cy="12" r="9" />
                  <path d="M8 12.5l2.5 2.5L16 9.5" />
                </>,
              )}
            </span>
            <span>
              <span className="block font-sans text-[17px] font-bold text-[#111827]">{d.stat.value}</span>
              <span className="block text-[13.5px] text-[#4B5563]">{d.stat.label}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
