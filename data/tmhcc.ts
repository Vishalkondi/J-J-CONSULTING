/**
 * Tokio Marine HCC — Architecture Business Analyst, February 2021 – December 2023.
 * Source: the master resume (Pradeep Jella). Only stated facts are used; no invented outcomes.
 */
export const tmhcc = {
  slug: "tokio-marine-hcc",
  client: "Tokio Marine HCC",
  logo: "/images/tokio-marine-hcc-logo.png",
  eyebrow: "Selected project experience",
  title: "Policy Administration, Vendor Selection & Target State Architecture",
  role: "Architecture Business Analyst",
  period: "February 2021 – December 2023",
  statement:
    "Three connected projects across nearly three years: implementing a new policy administration system, running RFPs to select systems vendors and implementation partners, and defining the overall business, systems and data architecture for the target state.",
  linesOfBusiness: ["Professional Risks (Indemnity, Liability)", "Surety", "Trade Credit", "London Market", "New Energies"],
  stats: [
    { value: "3", label: "Projects" },
    { value: "6", label: "Architecture archetypes defined" },
    { value: "5", label: "Lines of business" },
  ],
  pas: {
    title: "Policy Administration System Implementation",
    areas: ["Policy", "Document Generation", "Storage", "User Authentication"],
    achievements: [
      "Captured and agreed business requirements, data handling and data migration requirements.",
      "Learned and analysed source systems, identifying gaps and issues without any legacy documentation.",
      "Analysed IRIS (AS/400), GENIUS, PI Eclipse and other bespoke policy and portal systems.",
      "Analysed as-is workflows in the legacy underwriting workbench to set up workflows in Guidewire.",
      "Produced data migration mapping specifications, and integration mappings for data exchange using APIs.",
      "Completed a Data Protection Impact Assessment (DPIA) with the Data Protection Team and CDO.",
      "Ratified document templates in Newgen with vendor BAs and business document SMEs.",
    ],
    responsibilities: [
      "Integration analysis and mappings between the broker portal (Sitecore) and Guidewire, and product distribution to PPL, Whitespace and Acturis.",
      "Source-to-target data mapping in Erwin, with data analysis, profiling, transformation, cleansing and rules.",
      "Worked with source system vendors and technical SMEs to extract data for migration into Guidewire and Box.com.",
      "Provided inputs into the data warehousing and reporting, integrations, claims and portal workstreams.",
    ],
    technology: [
      "Guidewire PolicyCenter",
      "Erwin",
      "SQL Server Management Studio",
      "Newgen",
      "Box.com",
      "Sitecore",
      "Pega",
      "Salesforce",
      "PPL",
      "Whitespace",
      "Acturis",
    ],
  },
  rfp: {
    title: "RFPs for Systems Vendors & Implementation Partners",
    areas: ["Surety", "Professional Risks", "Policy Admin", "Claims Admin", "Portals", "Finance", "Payments"],
    evaluated: [
      { area: "Surety", options: ["Schumann CAM", "Tinubu"], replacing: "Cascade, Genius, GSA" },
      { area: "Professional Risks", options: ["Guidewire", "Vlocity", "Instanda"], replacing: "IRIS, PI Eclipse, UQA, ContractorShop" },
      { area: "Claims Admin", options: ["Guidewire ClaimCenter", "Sequel Claims"], replacing: null },
      { area: "Document Generation & Storage", options: ["Newgen", "Box", "ImageRight"], replacing: null },
      { area: "Finance & Payments", options: ["PeopleSoft", "Pega Finance", "Bottomline", "Worldpay", "Opayo (Sage Pay)"], replacing: null },
      {
        area: "Other Systems",
        options: ["Pega", "Verisk", "Vipr Intrali", "Guidewire London Market module", "Fuze Telephony (8x8)"],
        replacing: null,
      },
    ],
    partners: ["Guidewire", "Sollers", "EY", "GFT", "Salesforce", "Schumann"],
    achievements: [
      "Defined the RFP process, requirements, non-functional requirements, scoring methodology and evaluation criteria.",
      "Ran a selection process that resulted in contracts signed with multiple vendors and partners.",
    ],
  },
  architecture: {
    title: "Business, Systems & Data Architecture Definition",
    areas: ["Policy & Claims Admin", "Finance", "Payments", "Portals", "Workflow", "CRM", "Document Composition"],
    achievements: [
      "Built a Business Capability and Systems Capability Matrix mapping systems to required business capabilities.",
      "Defined target state architectures after identifying gaps in the existing one-size-fits-all architecture: six distinct types, classified as archetypes.",
      "Agreed a large number of Key Design Decision (KDD) papers through review groups.",
      "Specified the data flows, integrations and infrastructure required for the target state architecture.",
      "Evaluated multiple systems for policy and claims admin, bordereaux and London Market messaging.",
    ],
  },
  seo: {
    title: "Architecture Business Analyst — Policy Administration & Target State Architecture | Tokio Marine HCC",
    description:
      "Architecture Business Analyst at Tokio Marine HCC, February 2021 – December 2023: Guidewire policy administration implementation, vendor and partner RFPs, and target state business, systems and data architecture.",
  },
} as const;
