/**
 * Beazley Group — Modernisation Programme: Pricing & Rating System Delivery.
 * Source: the supplied programme visual + the master resume (Beazley Group, Apr–Nov 2024).
 * Only what is stated there is used. Exact dates, responsibilities and outcomes are NOT invented.
 * Do not describe outcomes (e.g. "went live", "delivered", "saved") unless the client supplies them.
 */
export const beazley = {
  slug: "beazley",
  client: "Beazley Group",
  logo: "/images/beazley-logo.png",
  visual: "/images/beazley-programme-visual.jpg",
  eyebrow: "Selected project experience",
  title: "Modernisation Programme",
  subtitle: "Pricing & Rating System Delivery",
  role: "Senior Business Analyst",
  period: "April 2024 – November 2024",
  areas: ["Actuarial", "Underwriting", "Capital Modelling", "Finance", "Policy", "Claims"],
  lifecycle: ["Requirements", "Analysis", "Design & Mapping", "Testing", "UAT", "Go-Live"],
  systems: ["HyperXponential (HX)", "UW Workbench", "Data Warehouse", "SQL Databases", "Excel", "MS Office"],
  statement:
    "Business analysis across actuarial, underwriting, capital modelling, finance, policy and claims in support of a pricing and rating system modernisation programme.",
  disclaimers: {
    visual: "Illustrative visual — not a screenshot of a client system.",
    lifecycle: "Conceptual representation of programme delivery stages.",
  },
} as const;
