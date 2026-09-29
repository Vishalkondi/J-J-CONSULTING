/**
 * Beazley Group — Modernisation Programme: Pricing & Rating System Delivery.
 * Source: the supplied programme visual + the master resume (Beazley Group, Apr–Nov 2024).
 * Only what is stated there is used; achievements and responsibilities are taken from the resume.
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
  overviewHeading: "Modernising pricing and rating across specialty lines",
  stats: [
    { value: "6", label: "Business areas" },
    { value: "6", label: "Delivery stages, requirements to go-live" },
    { value: "8", label: "Months, April – November 2024" },
  ],
  achievements: [
    "Captured and agreed business requirements, system handling and migration requirements.",
    "Learned and analysed existing raters in Excel and the underwriting workbench, identifying gaps and issues.",
    "Provided input into data mapping specifications and migration mappings.",
    "Handled end-to-end delivery from requirements workshops through testing, user training and UAT.",
    "Took multiple raters live, including migration, across various Specialty Insurance lines of business.",
  ],
  responsibilities: [
    "User story capture and management, with production of documentation and diagrams.",
    "Collaborated with business SMEs and vendor teams, including analysts, architects, developers and testers.",
    "Prepared test scripts, user guide documentation, end-user training and post go-live support.",
    "Managed multiple third-party vendors based in various parts of the world.",
    "Reviewed and supported developers and testers; handled CAB submissions and sign-offs for go-live.",
  ],
  disclaimers: {
    visual: "Illustrative visual — not a screenshot of a client system.",
    lifecycle: "Conceptual representation of programme delivery stages.",
  },
} as const;
