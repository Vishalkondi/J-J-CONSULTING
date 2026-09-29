import Link from "next/link";
import { ClientMark } from "@/components/ClientMark";
import type { Engagement } from "@/data/experience";
import { Chips } from "./Chips";

/** Full write-up of one engagement: summary, sub-workstreams, scope tags and outcome. */
export function EngagementDetail({ e }: { e: Engagement }) {
  return (
    <div>
      <div className="flex flex-col gap-6 border-b border-navy/10 pb-8 sm:flex-row sm:items-center">
        <ClientMark name={e.client} logo={e.logo} pad="p-3" className="h-24 w-40 shrink-0 border border-navy/10" />
        <div>
          <p className="font-mono text-[12px] tracking-[0.12em] text-gold-dark">{e.period}</p>
          <p className="mt-1 font-display text-[24px] leading-tight text-navy">{e.client}</p>
        </div>
      </div>

      <h3 className="mt-8 text-balance text-[clamp(26px,2.8vw,38px)] leading-[1.12] text-navy">{e.title}</h3>
      <div className="mt-5 space-y-4 text-[17px] leading-relaxed text-graphite">
        {e.summary.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      {e.blocks && (
        <div className="mt-8 grid gap-px border border-navy/15 bg-navy/15 md:grid-cols-2">
          {e.blocks.map((b) => (
            <div key={b.title} className="bg-white p-6">
              <h4 className="font-display text-[20px] leading-tight text-navy">{b.title}</h4>
              <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-graphite">
                {b.text.map((t) => (
                  <p key={t}>{t}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {e.workedOn && (
        <div className="mt-8">
          <p className="label text-gold-dark">{e.workedOnLabel ?? "We worked on"}</p>
          <Chips items={e.workedOn} className="mt-4" />
        </div>
      )}

      {e.focus && (
        <div className="mt-8">
          <p className="label text-gold-dark">Project focus</p>
          <p className="mt-3 font-display text-[20px] leading-snug text-navy">{e.focus.join(" · ")}</p>
        </div>
      )}

      {e.outcome && (
        <div className="mt-8 bg-navy p-6 text-white md:p-7">
          <p className="label text-gold-light">Project outcome</p>
          <p className="mt-3 text-[17px] leading-relaxed text-white/85">{e.outcome}</p>
        </div>
      )}

      {e.caseStudy && (
        <Link href={e.caseStudy} className="btn btn-navy mt-8">
          Read the full case study <span aria-hidden>→</span>
        </Link>
      )}
    </div>
  );
}
