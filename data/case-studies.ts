import { rre } from "@/data/renaissance-re";
import { beazley } from "@/data/beazley";
import { howden, images } from "@/data/howden-hx";
import { msAmlin } from "@/data/ms-amlin";
import { metlife } from "@/data/metlife";
import { collinson } from "@/data/collinson";
import { brit } from "@/data/brit";
import { ascot } from "@/data/ascot";
import { hastings } from "@/data/hastings";
import { axaXl } from "@/data/axa-xl";
import { msaSolvency } from "@/data/ms-amlin-solvency";

export type FeaturedCase = {
  href: string;
  client: string;
  label: string; // role · period
  title: string;
  blurb: string;
  cta: string;
  visual:
    | { kind: "image"; src: string; alt: string; aspect?: string; rreFallback?: boolean }
    | { kind: "logo"; name: string; logo: string | null };
};

/** Order = display order. The homepage shows the first few; /case-studies shows all. */
export const featuredCases: FeaturedCase[] = [
  {
    href: "/case-studies/renaissance-re",
    client: "RenaissanceRe",
    label: `${rre.role} · ${rre.period}`,
    title: `${rre.title}: ${rre.subtitle}`,
    blurb: rre.statement,
    cta: "Read the case study",
    visual: {
      kind: "image",
      src: "/images/renaissance-re-project.jpg",
      alt: "Illustrative visual for the RenaissanceRe systems and integrations evaluation",
      rreFallback: true,
    },
  },
  {
    href: "/case-studies/westfield-specialty",
    client: "Westfield Specialty",
    label: "Business Analyst · April 2025 – February 2026",
    title: "Project Goldcrest",
    blurb: "New Company Market Entity Setup in Luxembourg.",
    cta: "View the engagement",
    visual: { kind: "logo", name: "Westfield Specialty", logo: "/images/westfield-specialty-logo.png" },
  },
  {
    href: "/case-studies/ascot-group",
    client: "Ascot Group",
    label: `${ascot.role} · ${ascot.period}`,
    title: `${ascot.title}: ${ascot.subtitle}`,
    blurb: ascot.statement,
    cta: "Read the case study",
    visual: { kind: "logo", name: ascot.client, logo: ascot.logo },
  },
  {
    href: "/case-studies/beazley",
    client: "Beazley Group",
    label: `${beazley.role} · ${beazley.period}`,
    title: `${beazley.title}: ${beazley.subtitle}`,
    blurb: beazley.statement,
    cta: "Read the case study",
    visual: {
      kind: "image",
      src: beazley.visual,
      alt: "Illustrative visual for the Beazley modernisation programme",
      aspect: "aspect-[3/2]",
    },
  },
  {
    href: "/case-studies/howden-hyperion-x",
    client: "Howden Group / Hyperion X",
    label: `${howden.role} · ${howden.dates}`,
    title: "Data platforms, cubes and dashboards",
    blurb: "Employee Benefits data analytics, an Actuarial Cube and a Broker Data Platform.",
    cta: "Read the case study",
    visual: { kind: "image", src: images.skyline.src, alt: images.skyline.alt },
  },
  {
    href: "/case-studies/ms-amlin-solvency-ii",
    client: "MS Amlin",
    label: `${msaSolvency.period}`,
    title: msaSolvency.title,
    blurb: "A £5.5M, 28-person regulatory transformation across data, governance and PRA / Lloyd’s reporting.",
    cta: "Read the case study",
    visual: { kind: "logo", name: msaSolvency.client, logo: msaSolvency.logo },
  },
  {
    href: "/case-studies/ms-amlin",
    client: "MS Amlin",
    label: `${msAmlin.role} · ${msAmlin.period}`,
    title: msAmlin.title,
    blurb: msAmlin.statement,
    cta: "Read the case study",
    visual: { kind: "image", src: msAmlin.visual.src, alt: msAmlin.visual.alt },
  },
  {
    href: "/case-studies/metlife-uk",
    client: "MetLife UK",
    label: `${metlife.role} · ${metlife.period}`,
    title: "Big Data, Data Lake & Single Customer View",
    blurb: metlife.summary,
    cta: "Read the case study",
    visual: { kind: "logo", name: metlife.client, logo: metlife.logo },
  },
  {
    href: "/case-studies/collinson-group",
    client: "Collinson Group",
    label: `${collinson.role} · ${collinson.period}`,
    title: collinson.title,
    blurb: collinson.statement,
    cta: "Read the case study",
    visual: { kind: "logo", name: collinson.client, logo: collinson.logo },
  },
  {
    href: "/case-studies/axa-xl",
    client: "AXA XL / XL Group / Catlin Group",
    label: `${axaXl.role} · ${axaXl.period}`,
    title: "BI, data warehousing and enterprise reporting",
    blurb: axaXl.about,
    cta: "Read the case study",
    visual: { kind: "logo", name: "AXA", logo: axaXl.logos.axa },
  },
  {
    href: "/case-studies/hastings-insurance-group",
    client: "Hastings Insurance Group",
    label: `${hastings.role} · ${hastings.period}`,
    title: "Solvency II & underwriting platform evaluation",
    blurb: hastings.statement,
    cta: "Read the case study",
    visual: { kind: "logo", name: hastings.client, logo: hastings.logo },
  },
  {
    href: "/case-studies/brit-insurance",
    client: "BRIT Insurance",
    label: `${brit.role} · ${brit.period}`,
    title: brit.title,
    blurb: brit.summary,
    cta: "Read the case study",
    visual: { kind: "image", src: brit.visual.src, alt: brit.visual.alt, aspect: "aspect-[21/9]" },
  },
];
