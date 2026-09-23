/**
 * MS Amlin — Solvency II Business Change (Nov 2015 – Oct 2016), an earlier engagement than the 2019–20
 * System Strategy & Governance Programme (see data/ms-amlin.ts).
 * Source: the supplied brief + the master resume (Solvency II BA — Business Change, MS Amlin, Nov 2015 – Oct 2016).
 */
export const MS_AMLIN_URL = "https://global.msamlin.com/";

export const msaSolvency = {
  slug: "ms-amlin-solvency-ii",
  client: "MS Amlin",
  logo: "/images/ms-amlin-logo.png",
  category: "Regulatory transformation · Insurance · Data & business change",
  role: "Solvency II Business Analyst — Business Change",
  title: "Solvency II\nBusiness Change",
  tagline: "From regulatory complexity to a stronger, more resilient tomorrow.",
  scene: {
    src: "/images/ms-amlin-solvency-scene.jpg",
    alt: "A business change lead presenting Solvency II reporting, data flow and target operating model diagrams to colleagues in a London meeting room",
    caption: "Illustrative visual — not a client system or screenshot.",
  },
  pillars: ["Regulatory readiness", "Data governance", "Process transformation", "Sustainable business change"],
  period: "November 2015 – October 2016",
  metrics: [
    { value: "£5.5M", label: "Programme value" },
    { value: "28", label: "Team members" },
    { value: "Solvency II", label: "Regulatory transformation" },
    { value: "PRA / Lloyd’s", label: "Reporting environment" },
  ],
  concept: [
    "Regulatory transformation",
    "Business processes",
    "Financial & actuarial data",
    "Data governance",
    "Regulatory reporting",
    "Technology systems",
    "Business change",
  ],
  story: {
    title: "From regulatory complexity to controlled business change",
    stages: [
      "Data discovery",
      "Business & data requirements",
      "Data standardisation",
      "Regulatory reporting",
      "Solution design",
      "Testing & change",
      "Target operating model",
      "Service transition",
    ],
  },
  architecture: [
    { label: "Business areas", items: ["Finance", "Actuarial", "Underwriting", "Policy & Claims", "Capital Modelling"] },
    { label: "Data sources" },
    { label: "Data quality & standardisation" },
    { label: "Transformation rules" },
    { label: "Regulatory reporting" },
    { label: "PRA / Lloyd’s" },
  ],
  tom: {
    title: "Target operating model",
    steps: ["Current state", "Gap analysis", "Target operating model", "Process re-engineering", "BAU transition"],
  },
  featureGlossary: {
    "Solvency II": "The EU/UK prudential regime for insurers.",
    "Data discovery": "Identifying where relevant data lives.",
    "Data standardisation": "Aligning data to consistent formats and definitions.",
    "Data governance": "Ownership, controls and accountability for data.",
    "Data quality": "Accuracy, completeness and consistency of data.",
    "Pillar III": "The Solvency II public disclosure and reporting pillar.",
    "Risk & capital": "Capital requirements and risk-based reporting.",
    "Regulatory reporting": "QRT and narrative reporting to regulators.",
    "Business change": "Process, people and operating-model change alongside the technical work.",
  },
  feature: {
    title: "Solvency II as a data & business transformation journey",
    terms: [
      "Solvency II",
      "Data discovery",
      "Data standardisation",
      "Data governance",
      "Data quality",
      "Pillar III",
      "Risk & capital",
      "Regulatory reporting",
      "Business change",
    ],
  },
  governance: {
    title: "Data governance as a business foundation",
    layers: [
      { label: "Data ownership" },
      { label: "Data quality" },
      { label: "Data standards" },
      { label: "Data controls" },
      { label: "Regulatory reporting" },
    ],
  },
  gdpr: {
    kicker: "GDPR data discovery & scoping",
    title: "Understanding where personal data sits",
    layers: [
      { label: "Source systems" },
      { label: "Personal data" },
      { label: "Data flows" },
      { label: "Access & permissions" },
      { label: "Third-party / offshore transfers" },
      { label: "Scoping & findings" },
    ],
    note: "Discovery and scoping activity.",
  },
  technology: ["Subscribe S2000", "Igloo Standard Formula", "Tagetik", "SQL Server", "Excel"],
  areas: ["Finance", "Actuarial", "Underwriting", "Policy & Claims", "Capital Modelling"],
  /** Short, generic domain descriptors (not engagement-specific claims) for the business-area cards. */
  areaDescriptors: {
    Finance: "General ledger, reporting and financial control.",
    Actuarial: "Reserving, pricing and capital analysis.",
    Underwriting: "Risk selection, pricing and policy terms.",
    "Policy & Claims": "Policy administration and claims handling.",
    "Capital Modelling": "Capital requirements and risk-based modelling.",
  },
  leadership: {
    title: "Business change × Technology × Delivery",
    layers: [
      { label: "Business users" },
      { label: "Business analysis" },
      { label: "Technical teams" },
      { label: "Data / systems" },
      { label: "Testing" },
      { label: "BAU / service transition" },
    ],
  },
  closing: {
    title: "Regulatory change. Data intelligence. Business transformation.",
    text: "Solvency II business change for MS Amlin, November 2015 – October 2016: a £5.5M programme with a 28-person team, reporting to PRA and Lloyd’s.",
  },
  seo: {
    title: "Solvency II Business Change — MS Amlin (Nov 2015 – Oct 2016, £5.5M, 28-person team)",
    description:
      "MS Amlin Solvency II Business Change programme, November 2015 – October 2016: a £5.5M, 28-person regulatory transformation covering data, governance and PRA / Lloyd’s reporting.",
  },
} as const;
