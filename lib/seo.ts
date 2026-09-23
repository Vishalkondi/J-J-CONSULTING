import type { Metadata } from "next";
import { company } from "@/data/site";

export function pageMeta(opts: { title: string; description: string; path: string; noindex?: boolean }): Metadata {
  const url = `${company.url}${opts.path}`;
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    robots: opts.noindex ? { index: false, follow: false } : undefined,
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: company.brand,
      locale: "en_GB",
      type: "website",
    },
    twitter: { card: "summary_large_image", title: opts.title, description: opts.description },
  };
}
