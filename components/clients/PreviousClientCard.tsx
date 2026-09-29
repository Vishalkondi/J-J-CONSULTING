import { ClientMark } from "@/components/ClientMark";
import { Chips } from "@/components/experience/Chips";
import type { previousClients } from "@/data/site";

type PreviousClient = (typeof previousClients)[number];

/** Card for an earlier-career client project: identity, project, headline figures and scope. */
export function PreviousClientCard({ c }: { c: PreviousClient }) {
  return (
    <article className="flex flex-col border border-navy/15 bg-white transition-shadow hover:shadow-[0_18px_40px_-24px_rgba(12,32,56,0.35)]">
      <div className="flex items-center gap-5 border-b border-navy/10 p-6">
        <ClientMark name={c.name} logo={c.logo} pad="p-2" className="h-16 w-28 shrink-0" />
        <div className="min-w-0">
          <h3 className="font-display text-[22px] leading-tight text-navy">
            {c.website ? (
              <a
                href={c.website}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-navy/20 underline-offset-4 transition-colors hover:decoration-navy"
              >
                {c.name}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : (
              c.name
            )}
          </h3>
          <p className="mt-1 text-[13.5px] text-graphite">{c.location}</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-[11px] tracking-[0.1em] text-gold-dark">{c.period.toUpperCase()}</p>
        <p className="mt-2 font-display text-[20px] leading-snug text-navy">{c.project}</p>

        <dl className="mt-6 grid grid-cols-2 border-y border-navy/10">
          <div className="py-4 pr-4">
            <dt className="label text-graphite">Team</dt>
            <dd className="mt-1 font-display text-[30px] leading-none text-navy">{c.team}</dd>
          </div>
          {c.value && (
            <div className="border-l border-navy/10 py-4 pl-5">
              <dt className="label text-graphite">Project value</dt>
              <dd className="mt-1 font-display text-[30px] leading-none text-navy">{c.value}</dd>
            </div>
          )}
        </dl>

        <p className="label mt-6 text-gold-dark">Scope</p>
        <Chips items={c.areas} className="mt-3" />
      </div>
    </article>
  );
}
