/**
 * Westfield Specialty — Business Analyst, April 2025 – February 2026.
 * Source: the master resume (Pradeep Jella). Only stated facts are used; no invented outcomes.
 */
export const westfield = {
  slug: "westfield-specialty",
  client: "Westfield Specialty",
  logo: "/images/westfield-specialty-logo.png",
  eyebrow: "Selected project experience",
  title: "Project Goldcrest",
  subtitle: "New Company Market Entity Setup in Luxembourg",
  role: "Business Analyst",
  period: "April 2025 – February 2026",
  statement:
    "Business analysis for the setup of a new Company Market entity in Luxembourg, delivered through three workstreams: claims, actuarial systems, and underwriting workbench and pricing. The work prepared systems, data flows and processes for writing Company Market business.",
  stats: [
    { value: "3", label: "Deliveries" },
    { value: "10", label: "Business areas" },
    { value: "5", label: "Company Market message types configured and tested" },
  ],
  domains: [
    "Underwriting",
    "Claims",
    "Reserving",
    "Pricing",
    "Capital Modelling",
    "CAT Modelling",
    "Exposure Management",
    "Finance",
    "Reinsurance",
    "Delegated Authority",
  ],
  deliveries: [
    {
      title: "Sequel Claims",
      text: "System upgrade, setup of new entities and configuration of Company Market messages.",
    },
    {
      title: "Actuarial Systems",
      text: "Systems configuration, with new mappings and data flows for end-to-end integrations.",
    },
    {
      title: "UW Workbench & Pricing",
      text: "Requirements for proof of concept and MVP definition using the HX and SEND platforms.",
    },
  ],
  messages: ["LIRMA", "LIMCLM", "DSIGN", "IPCDSM", "WSETT"],
  achievements: [
    "Business requirements agreed and signed off, with work prioritised into releases and delivery planned.",
    "Produced as-is and to-be systems landscape, data flow and business process flow documentation.",
    "Configured and tested the Company Market LIRMA, LIMCLM, DSIGN, IPCDSM and WSETT messages.",
    "Completed end-to-end changes to systems, databases, workflows, data flows and reports.",
    "Implemented enhancements and tactical system changes in readiness to write Company Market business.",
    "Evaluated pricing and underwriting workbench platforms through to system selection and vendor finalisation.",
  ],
  responsibilities: [
    "Workstream Lead for the Claims and Actuarial workstreams.",
    "Full end-to-end business analysis, from requirements capture through to delivery.",
    "Analysed existing as-is processes, systems and flows; produced as-is and to-be process designs and flows.",
    "Elicited requirements and user stories in SpiraPlan.",
    "Single point of contact for business stakeholders, vendor teams, and delivery and testing teams.",
  ],
  vendors: ["Verisk", "Velonetic", "Aon", "Wipro", "Prudentia", "Watertrace"],
  technology: [
    "Verisk Sequel Claims",
    "Eclipse",
    "Touchstone",
    "Sequel Impact",
    "OneHedex",
    "ECF / ECF2",
    "Aon Tyche Pricing",
    "Analyze Re",
    "Watertrace BDX",
    "Psicle",
    "Ndex",
    "Inward Risk (bespoke PAS)",
    "Data Warehouse",
    "SpiraPlan",
  ],
  seo: {
    title: "Business Analyst — Project Goldcrest | Westfield Specialty",
    description:
      "Business Analyst on Westfield Specialty's Project Goldcrest, a new Company Market entity setup in Luxembourg, April 2025 – February 2026: Sequel Claims, actuarial systems, and underwriting workbench and pricing.",
  },
} as const;
