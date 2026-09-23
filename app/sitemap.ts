import type { MetadataRoute } from "next";
import { company, services } from "@/data/site";
import { articles } from "@/data/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = [
    "",
    "/about",
    "/services",
    "/industries",
    "/expertise",
    "/clients",
    "/case-studies",
    "/case-studies/renaissance-re",
    "/case-studies/westfield-specialty",
    "/case-studies/ascot-group",
    "/case-studies/beazley",
    "/case-studies/ms-amlin",
    "/case-studies/ms-amlin-solvency-ii",
    "/case-studies/metlife-uk",
    "/case-studies/collinson-group",
    "/case-studies/brit-insurance",
    "/case-studies/hastings-insurance-group",
    "/case-studies/axa-xl",
    "/case-studies/howden-hyperion-x",
    "/insights",
    "/experience",
    "/careers",
    "/contact",
  ];
  return [
    ...base.map((p) => ({ url: `${company.url}${p}`, lastModified: now, priority: p === "" ? 1 : 0.7 })),
    ...services.map((s) => ({ url: `${company.url}/services/${s.slug}`, lastModified: now, priority: 0.7 })),
    ...articles.map((a) => ({ url: `${company.url}/insights/${a.slug}`, lastModified: new Date(a.date), priority: 0.6 })),
  ];
}
