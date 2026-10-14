/**
 * BRIT Insurance — Solvency II Business Analyst, Jan 2017 – May 2017 (Solvency II & GDPR Regulatory Compliance).
 * Copy is exactly as supplied by the client. Do not add metrics beyond it.
 */
export const brit = {
  slug: "brit-insurance",
  client: "BRIT Insurance",
  logo: "/images/brit-logo.png",
  visual: {
    src: "/images/brit-programme-visual-clean.jpg",
    alt: "London skyline at dusk with a subtle data network overlay, representing regulatory data and systems analysis",
    width: 1280,
    height: 540,
    caption: "Illustrative summary graphic — not a client system or screenshot.",
  },
  eyebrow: "Selected project experience",
  title: "Solvency II & GDPR Regulatory Compliance",
  role: "Solvency II Business Analyst",
  period: "January 2017 – May 2017",
  headline: "Transforming Regulatory Data into Structured Compliance",
  summary:
    "A regulatory transformation engagement spanning Solvency II reporting, regulatory data analysis, systems integration and GDPR compliance, connecting business, technology and regulatory requirements across Finance, Actuarial, Underwriting, Policy & Claims and Capital Modelling.",
  programme: { value: "£1.2M", team: "8 people", scope: "Solvency II + GDPR" },
  reporting: {
    kicker: "Regulatory Reporting & Data Intelligence",
    intro:
      "The engagement focused on analysing complex insurance data and systems to support regulatory reporting for Lloyd’s, FSC and Gibraltar, while strengthening the processes surrounding data validation, governance and compliance.",
    title: "Solvency II Reporting",
    items: [
      "Supported the delivery of Solvency II regulatory reports and QRTs for FSC, Gibraltar and Lloyd’s.",
      "Analysed business-as-usual processes and system interfaces within Sequel Eclipse.",
      "Extracted and prepared complex datasets for downstream regulatory reporting.",
      "Developed complex Excel calculations using data from Eclipse, Velocity, Data Warehouse sources and regulatory returns.",
      "Performed validation using regulator-provided tools and portals.",
      "Analysed validation exceptions and supported corrections before internal sign-off and regulatory submission.",
    ],
  },
  gdpr: {
    kicker: "GDPR Data & Compliance Analysis",
    intro:
      "The GDPR workstream focused on understanding where sensitive information moved across systems, processes, integrations and third-party arrangements.",
    discovery: {
      title: "Data discovery",
      text: "Identified systems and datasets containing Personally Identifiable Information (PII), including information associated with:",
      tags: ["Delegated Authority", "Managing Agents", "Coverholders"],
    },
    flow: {
      title: "Integration & data flow assessment",
      lead: "Analysed:",
      items: [
        "Data flows and transfer points",
        "System integrations",
        "Business process maps",
        "Operational workflows",
        "Outsourcing arrangements",
        "Third-party data accessibility",
        "Security and access frameworks",
      ],
      closing: "The analysis identified areas requiring remediation within the GDPR programme.",
    },
  },
  connecting: {
    title: "Connecting Business, Data & Technology",
    text: [
      "The engagement required close collaboration between business stakeholders, SMEs and technical teams.",
      "Workshops were conducted to review findings, understand compliance gaps and establish practical remediation requirements across affected processes and data exchanges.",
    ],
    focus: [
      { title: "Regulatory reporting", text: "Structured reporting and validation for Lloyd’s and FSC." },
      { title: "Data analysis", text: "Analysis of complex insurance data across multiple systems and sources." },
      { title: "Systems integration", text: "Assessment of interfaces, data flows and exchange mechanisms." },
      { title: "GDPR compliance", text: "Identification and documentation of PII-related compliance gaps." },
      { title: "Governance", text: "Inputs into policy governance and remediation processes." },
      {
        title: "Stakeholder management",
        text: "Primary interface for planning, progress updates, analysis reviews, documentation and sign-offs.",
      },
    ],
  },
  technology: ["Sequel Eclipse", "Igloo Standard Formula", "SQL Server", "Microsoft Excel", "Velocity", "Data Warehouse"],
  domains: ["Finance", "Actuarial", "Underwriting", "Policy & Claims", "Capital Modelling"],
  impact: {
    title: "Business impact",
    paragraphs: [
      "The engagement brought together regulatory reporting, systems analysis, data governance and GDPR assessment into a coordinated business-change workstream.",
      "The result was a structured view of regulatory data, system interfaces and PII-related data flows, supporting reporting activities and identifying areas requiring remediation within the GDPR programme.",
    ],
    closingTitle: "From Regulatory Complexity to Structured Insight",
    flow: ["Business", "Data", "Systems", "Compliance", "Reporting"],
  },
  cta: {
    title: "Transforming complexity into clarity.",
    text: "Explore how J & J Consulting connects business strategy, data, technology and regulatory change.",
  },
  seo: {
    title: "Solvency II Business Analyst — Solvency II & GDPR Regulatory Compliance | BRIT Insurance",
    description:
      "Solvency II Business Analyst on BRIT Insurance's £1.2M Solvency II and GDPR regulatory compliance programme, January – May 2017: regulatory reporting for Lloyd's, FSC and Gibraltar, and GDPR data-flow analysis.",
  },
} as const;
