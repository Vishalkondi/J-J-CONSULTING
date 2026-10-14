import Image from "next/image";
import { SectionHeading } from "./SectionHeading";
import { leadership } from "@/data/site";

const initials = (name: string) =>
  name
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

/** Leadership team cards. Renders nothing until `leadership` in data/site.ts has entries. */
export function Leadership() {
  if (!leadership.length) return null;
  return (
    <section className="bg-paper py-24 md:py-32" aria-labelledby="leadership-title">
      <div className="wrap">
        <div id="leadership-title">
          <SectionHeading eyebrow="Leadership" title="Meet our leadership team" />
        </div>
        <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {leadership.map((p) => (
            <li
              key={p.name}
              className="flex flex-col items-center rounded-2xl border border-navy/10 bg-white p-8 text-center shadow-[0_10px_30px_-22px_rgba(12,32,56,0.35)]"
            >
              <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-paper bg-navy shadow-[0_0_0_1px_rgba(184,152,90,0.5)]">
                {p.photo ? (
                  <Image src={p.photo} alt={p.name} fill sizes="112px" className="object-cover" />
                ) : (
                  <span className="flex h-full w-full items-center justify-center font-display text-[34px] text-gold-light" aria-hidden>
                    {initials(p.name)}
                  </span>
                )}
              </div>
              <h3 className="mt-6 font-display text-[24px] leading-tight text-navy">{p.name}</h3>
              <p className="mt-1 text-[14px] font-medium text-gold-dark">{p.role}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-graphite">{p.bio}</p>
              {p.highlights?.length ? (
                <ul className="mt-5 flex flex-wrap justify-center gap-2">
                  {p.highlights.map((h) => (
                    <li key={h} className="rounded-full border border-navy/15 px-3 py-1 font-mono text-[11px] text-graphite">
                      {h}
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
