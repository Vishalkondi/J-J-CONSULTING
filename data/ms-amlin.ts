/**
 * MS Amlin — System Strategy & Governance Programme (Data Lead & Project Manager, Sep 2019 – Mar 2020).
 * Source: the supplied programme brief. Only the stated facts are used (title, role, period, value, team,
 * business domains, technology, programme streams). No outcomes, savings or results are claimed.
 * Further scope themes in the brief (data quality, lineage, remediation, operating model…) are NOT
 * published until confirmed as delivered scope.
 */
export const msAmlin = {
  slug: "ms-amlin",
  client: "MS Amlin",
  logo: "/images/ms-amlin-logo.png",
  visual: {
    src: "/images/ms-amlin-programme-visual.jpg",
    alt: "A programme lead presenting a governance and data architecture to colleagues in a London meeting room",
    width: 1800,
    height: 1013,
    caption: "Illustrative visual — not a client system or screenshot.",
  },
  eyebrow: "Selected project experience",
  title: "System Strategy & Governance Programme",
  role: "Data Lead & Project Manager",
  period: "September 2019 – March 2020",
  value: "£1.8 million",
  team: "16",
  domains: ["Finance", "Underwriting", "Actuarial", "Claims", "Lloyd’s", "London Market", "Bordereaux"],
  technology: ["Subscribe / S2000", "ECF", "Trax — Charles Taylor", "Alteryx", "Power BI", "SQL Server", "Excel"],
  streams: ["Business Process", "Systems", "Data Quality", "Governance", "Reporting", "Change", "Training"],
  statement:
    "Leading a programme across finance, underwriting, actuarial and claims, with a focus on systems strategy, data and governance in the Lloyd’s and London Market.",
  seo: {
    title: "Data Lead & Project Manager — System Strategy & Governance Programme | MS Amlin",
    description:
      "Data Lead and Project Manager on the MS Amlin System Strategy & Governance Programme (September 2019 – March 2020, £1.8 million, 16 people) across finance, underwriting, actuarial, claims and the London Market.",
  },
} as const;
