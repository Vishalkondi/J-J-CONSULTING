import { ClientMark } from "@/components/ClientMark";
import { Tags } from "@/components/Tags";

/** Case-study overview: engagement card (logo + key facts) beside the summary, headline stats and tag list. */
export function CaseOverview({
  client,
  logo,
  facts,
  heading,
  statement,
  stats,
  tagsLabel,
  tags,
}: {
  client: string;
  logo: string | null;
  facts: { label: string; value: string }[];
  heading: string;
  statement: string;
  stats: readonly { value: string; label: string }[];
  tagsLabel: string;
  tags: readonly string[];
}) {
  return (
    <section className="bg-paper py-20 md:py-28" aria-label="Overview">
      <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-20">
        <aside className="self-start border border-navy/15 bg-white lg:sticky lg:top-28">
          <ClientMark name={client} logo={logo} className="aspect-[16/10] w-full border-b border-navy/10" />
          <dl className="divide-y divide-navy/10 px-6">
            {facts.map((f) => (
              <div key={f.label} className="grid grid-cols-[96px_1fr] gap-4 py-4">
                <dt className="label pt-0.5 text-graphite">{f.label}</dt>
                <dd className="text-[15px] leading-snug text-navy">{f.value}</dd>
              </div>
            ))}
          </dl>
        </aside>

        <div>
          <p className="label text-gold-dark">Overview</p>
          <h2 className="mt-4 max-w-2xl text-balance text-[clamp(28px,3.2vw,44px)] leading-[1.1] text-navy">{heading}</h2>
          <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-graphite">{statement}</p>

          <dl className="mt-12 grid gap-6 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="border-t-2 border-gold pt-5">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-[clamp(48px,5vw,64px)] leading-none text-navy">{s.value}</dd>
                <dd className="mt-3 max-w-[220px] text-[14px] leading-snug text-graphite">{s.label}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-12 border-t border-navy/10 pt-8">
            <p className="label text-graphite">{tagsLabel}</p>
            <Tags items={[...tags]} label={tagsLabel} />
          </div>
        </div>
      </div>
    </section>
  );
}
