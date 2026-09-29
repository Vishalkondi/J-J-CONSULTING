/**
 * RenaissanceRe — Systems & Integrations Evaluation, Document Storage.
 * This was an EVALUATION and RECOMMENDATION engagement.
 * Vocabulary allowed: identified, documented, assessed, evaluated, recommended, planned.
 * Vocabulary NOT allowed unless explicitly supported: implemented, deployed, migrated, completed.
 */

export const rre = {
  slug: "renaissance-re",
  client: "RenaissanceRe",
  eyebrow: "Selected project experience",
  title: "Systems & Integrations Evaluation",
  subtitle: "Document Storage",
  role: "Business Analyst",
  period: "May 2024 — August 2024",
  areas: ["Policy & Claims", "Finance"],
  tools: ["ImageRight", "IT Infrastructure", "System Architectures", "MS Office", "Microsoft Excel"],
  statement:
    "Evaluating the enterprise technology landscape to identify architectural gaps, streamline system and document flows, strengthen integration capabilities, and establish a structured roadmap for a scalable, future-ready target state.",
  story: ["Current state", "Assessment", "Gap identification", "Recommendations", "Target objectives", "Execution plan"],
  assessmentAreas: ["System Architecture", "Integrations", "Process Flows", "IT Infrastructure", "Document Storage", "Performance"],
  assessmentDetails: [
    { title: "System Architecture", text: "How the existing IT systems fit together and where the architecture falls short." },
    { title: "Integrations", text: "The interfaces between systems, including shortcomings and redundant integrations." },
    { title: "Process Flows", text: "Current process flows documented for Policy & Claims and Finance." },
    { title: "IT Infrastructure", text: "The infrastructure underpinning the systems in scope." },
    { title: "Document Storage", text: "Document production and storage in ImageRight." },
    { title: "Performance", text: "Performance pitfalls affecting day-to-day system use." },
  ],
  architecture: [
    { layer: "Business areas", items: ["Policy & Claims", "Finance"] },
    { layer: "Business processes", items: ["Document Production", "Process Flows"] },
    { layer: "Systems", items: ["ImageRight", "Existing IT Systems"] },
    { layer: "Integrations", items: ["Existing Integration Landscape"] },
    { layer: "Infrastructure", items: ["IT Infrastructure"] },
  ],
  gap: {
    existing: ["Existing Architecture", "Existing Integrations", "Existing Processes", "ImageRight", "Document Production"],
    gaps: ["Architecture Gaps", "Integration Shortcomings", "Process Improvement Opportunities", "Redundant Integrations", "System Issues"],
    recommendations: ["Improvement Areas", "Integration Streamlining", "System Flow Improvements"],
  },
  imageRight: {
    title: "Deep dive — ImageRight",
    subtitle: "Document storage platform assessment",
    text: "The project included a deep evaluation of ImageRight to identify issues, gaps and improvement opportunities.",
    outputs: ["Issues", "Gaps", "Improvement Opportunities"],
    findings: [
      { title: "Issues", text: "System issues and performance pitfalls affecting how documents are stored and retrieved were identified and documented." },
      { title: "Gaps", text: "Gaps between ImageRight, document production and the wider integration landscape were assessed across Policy & Claims and Finance." },
      { title: "Improvement Opportunities", text: "Opportunities to improve and streamline document flows were captured as input to the recommendations." },
    ],
    scope: ["Document production", "Document storage", "Integrations", "Performance"],
  },
  processFlow: ["Business Area", "Process", "Document Creation", "Document Storage", "System / Integration", "Output"],
  recommendationFlow: ["Identify", "Improve", "Streamline", "Decommission", "Target State"],
  recommendationDetails: [
    { title: "Identify", text: "Areas for improvement across architecture, integrations and process flows." },
    { title: "Improve", text: "Recommendations to address system issues and architecture gaps." },
    { title: "Streamline", text: "Simpler system flows with fewer hand-offs between applications." },
    { title: "Decommission", text: "Redundant integrations documented as candidates for decommissioning." },
    { title: "Target State", text: "A clear picture of the target objectives the business is working towards." },
  ],
  roadmap: ["Plan of action", "Prioritise", "Sequence", "Execute", "Achieve target objectives"],
  collaboration: ["Business Areas", "Business Analyst", "Third-Party Vendors", "Assessment", "Findings", "Recommendations"],
  collaborationText: "The role involved coordinating multiple third-party vendors across onshore and offshore teams.",
  parties: [
    { title: "Business areas", text: "Policy & Claims and Finance teams provided the business context and current process knowledge." },
    { title: "Business Analyst", text: "Coordinated the assessment, documented process flows and consolidated findings into recommendations." },
    { title: "Third-party vendors", text: "Onshore and offshore vendor teams contributed system and integration knowledge." },
  ],
  achievements: [
    { title: "Architecture assessment", text: "Identified gaps and shortcomings in existing architecture and integrations." },
    { title: "Improvement opportunities", text: "Documented areas for improvement and redundant integrations for decommissioning." },
    { title: "System flow streamlining", text: "Produced recommendations for improving and streamlining system flows." },
    { title: "Execution plan", text: "Presented a plan of action and order of sequence for execution." },
  ],
  responsibilities: [
    {
      title: "Full-scale assessment",
      text: "Assessment of integrations, IT system architectures, process flows and performance pitfalls.",
    },
    { title: "Process documentation", text: "Documentation of current process flow diagrams for relevant business areas." },
    { title: "ImageRight evaluation", text: "Deep evaluation of ImageRight to identify issues and gaps." },
    { title: "Stakeholder coordination", text: "Coordination with multiple third-party vendors across onshore and offshore teams." },
  ],
  clarity: ["Understand", "Analyse", "Map", "Identify", "Recommend", "Plan"],
  systemsThinking: {
    center: "Business Analysis",
    nodes: ["Business", "Systems", "Integrations", "Processes", "Documents"],
    intro:
      "No system works in isolation. The assessment looked at how business areas, applications, integrations, processes and documents depend on each other, so that each recommendation improved the whole flow rather than one part of it.",
    connections: [
      { node: "Business", text: "Policy & Claims and Finance needs set the priorities." },
      { node: "Systems", text: "Applications assessed for gaps, issues and fit." },
      { node: "Integrations", text: "Interfaces mapped to find redundancy and shortcomings." },
      { node: "Processes", text: "Process flows traced end to end across teams." },
      { node: "Documents", text: "Document production and ImageRight storage reviewed together." },
    ],
  },
  impact: {
    title: "From assessment to action",
    steps: ["Assess", "Identify", "Document", "Recommend", "Sequence"],
    text: "The assessment provided a structured view of the existing architecture, integrations and document storage landscape, together with recommendations and an execution sequence for achieving target objectives.",
  },
  disclaimers: {
    conceptual: "Conceptual representation of assessment scope. Not a depiction of the client's actual systems.",
    visual: "Illustrative visual. Not a client system screenshot.",
  },
};

export const westfield = {
  slug: "westfield-specialty",
  client: "Westfield Specialty",
  role: "Business Analyst",
  period: "April 2025 – February 2026",
  project: "New Company Market Entity Setup in Luxembourg — Project Goldcrest",
};
