/**
 * Hastings Insurance Group — Business Analyst, August 2014 – November 2015.
 * Source: the master resume (Pradeep Jella) + the client's own case-study brief (facts identical to the
 * resume). Only stated facts are used; no invented outcomes, percentages or client statistics.
 */
export const hastings = {
  slug: "hastings-insurance-group",
  client: "Hastings Insurance Group",
  logo: "/images/hastings-direct-logo.png",
  hero: {
    src: "/images/hastings-hero.jpg",
    alt: "A London office entrance overlooking Tower Bridge and the City skyline at golden hour",
  },
  eyebrow: "Selected project experience",
  role: "Business Analyst",
  period: "August 2014 – November 2015",
  value: "£1.4 million",
  team: "12",
  qrtCount: "70+",
  streams: "2",
  about:
    "Hastings Insurance Group is a leading Europe-based motor and general insurance provider with 1.9 million customers and 2,000+ employees.",
  statement:
    "Business analysis across two projects for Hastings Insurance Group: Solvency II regulatory compliance, and an underwriting platform solutions evaluation and RFP.",
  challenge: {
    title: "From regulatory complexity to business capability",
    text: "Hastings Insurance Group needed a structured approach to Solvency II regulatory compliance, reporting and data reconciliation, and a documented future-state operating process, while separately evaluating strategic underwriting platforms.",
    flow: ["Regulation", "Data", "Operating model", "Technology", "Business change"],
  },
  businessAreas: [
    { name: "Finance", note: "Reporting inputs and reconciliation" },
    { name: "Underwriting", note: "Platform evaluation and RFP" },
    { name: "Actuarial", note: "Data sourced into regulatory returns" },
    { name: "Capital Modelling", note: "Part of the regulatory scope" },
    { name: "Claims", note: "Covered by both projects" },
    { name: "Policy Admin", note: "Covered by both projects" },
  ],
  tom: {
    title: "Designing the future-state operating model",
    text: "Agreed, specified and documented the Target Operating Model for the future state of the business process.",
    stages: ["Current state", "Assess", "Design", "Document", "Enable", "BAU"],
  },
  responsibilityGroups: [
    { title: "Programme management", items: ["Scope", "Resources", "Risks", "Issues", "Reporting"] },
    { title: "Regulatory change", items: ["Solvency II", "Regulatory requirements", "Business change"] },
    { title: "Stakeholder management", items: ["Business", "PRA", "FSC", "Senior management"] },
    { title: "Vendor management", items: ["RFP", "Evaluation", "Selection"] },
    { title: "Technical delivery", items: ["Technical resources", "Project deliverables", "Implementation"] },
    { title: "Change & adoption", items: ["Training", "Documentation", "Workshops", "Handover"] },
  ],
  regulatoryTerms: [
    { term: "Pillar 3", note: "Regulatory disclosure requirement" },
    { term: "QRT", note: "Quantitative Reporting Template" },
    { term: "SFCR", note: "Solvency and Financial Condition Report" },
    { term: "RSR", note: "Regular Supervisory Report" },
  ],
  dataFlow: ["Internal systems", "Data validation", "Tagetik", "70+ QRT reports", "Regulatory reporting", "PRA / FSC / Gibraltar"],
  vendorEvaluation: ["Discovery", "Solution evaluation", "Vendor comparison", "RFP", "System selection"],
  projects: [
    {
      title: "Solvency II Regulatory Compliance",
      domains: ["Finance", "Underwriting", "Actuarial", "Capital Modelling", "Claims", "Policy Admin"],
      technology: ["Tagetik", "Aon ASTRA", "SAP", "Excel"],
      achievements: [
        "Lone starter on the programme, built the team to full size and delivered within timelines and under budget.",
        "Independently progressed the project from initiation to completion and handover with little supervision.",
        "Handled a thorough vendor selection and RFP process for a Pillar 3 regulatory reporting solution; selected and successfully implemented the reporting tool Tagetik.",
        "Validated and delivered 70+ QRT reports sourcing data from internal systems through the Tagetik solution for FSC, Gibraltar and PRA.",
        "Delivered and enabled regular reporting of Solvency II reports for the first year and every year in BAU.",
        "Facilitated narrative regulatory reporting, namely SFCR (Solvency and Financial Condition Report) and RSR (Regular Supervisory Report), from within BAU every reporting year.",
        "Agreed, specified and documented the Target Operating Model for the future state of the business process.",
        "Successfully handled the internal change management process for a seamless handover to the business.",
        "Handled user training, training manuals documentation, training exercises and workshops.",
        "Validated data input, and data and reports reconciliation for 70+ regulatory reports.",
      ],
      responsibilities: [
        "Independently progressed the project from initiation to completion and handover with little supervision.",
        "Central contact between the business and regulators PRA and FSC.",
        "Handled all aspects of project management, including scope, resource team, risks and issues, and regular update reports to the programme board and senior management.",
        "Responsible as Subject Matter Expert for Regulatory Business Change and Solvency II requirements.",
        "Managed technical resources on the project to enable timely delivery of project deliverables.",
      ],
    },
    {
      title: "Underwriting Platform Solutions Evaluation & RFP",
      domains: ["Policy Admin", "Claims", "Finance", "Underwriting", "Actuarial"],
      technology: ["Sequel Eclipse", "Guidewire", "Velocity"],
      achievements: [
        "Deep evaluation of vendor solutions for the Underwriting Platform from Eclipse (Sequel), Guidewire and Velocity.",
        "Successful RFP and system selection for implementation of Guidewire as the selected vendor solution.",
      ],
      responsibilities: [
        "Handled the vendor and selection process through RFP and points-scoring criteria, engaging with all stakeholders.",
      ],
    },
  ],
  seo: {
    title: "Business Analyst — Solvency II & Underwriting Platform Evaluation | Hastings Insurance Group",
    description:
      "Business Analyst on two Hastings Insurance Group projects, August 2014 – November 2015: Solvency II regulatory compliance (£1.4M, 12-person team) and an underwriting platform solutions evaluation and RFP.",
  },
} as const;
