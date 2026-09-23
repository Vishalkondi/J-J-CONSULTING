"use client";
import { CaseVisual, VISUAL_SPECS, type VisualData, type VisualVariant } from "./CaseVisual";

const ORDER: VisualVariant[] = ["hero", "banner", "square", "portrait", "linkedin", "editorial", "infographic", "architecture"];

function download(id: string, name: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const xml = new XMLSerializer().serializeToString(el);
  const blob = new Blob([`<?xml version="1.0" encoding="UTF-8"?>\n${xml}`], { type: "image/svg+xml" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `${name}.svg`;
  a.click();
  URL.revokeObjectURL(a.href);
}

export function Gallery({ slug, data }: { slug: string; data: VisualData }) {
  return (
    <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
      {ORDER.map((v) => {
        const spec = VISUAL_SPECS[v];
        const id = `${slug}-${v}`;
        const narrow = v === "portrait" || v === "infographic" || v === "square";
        return (
          <figure key={v} className={v === "hero" ? "md:col-span-2" : ""}>
            <div className={narrow ? "mx-auto max-w-[360px]" : ""}>
              <CaseVisual variant={v} data={data} id={id} />
            </div>
            <figcaption className="mt-4 flex items-center justify-between gap-4 font-mono text-[12px] text-graphite">
              <span>
                {spec.label} · {spec.w}×{spec.h}
              </span>
              <button type="button" onClick={() => download(id, id)} className="border-b border-gold pb-0.5 text-navy hover:text-steel">
                Download SVG
              </button>
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}
