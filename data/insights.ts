export const insightCategories = [
  "Technology",
  "Insurance",
  "Financial Services",
  "Consulting",
  "Data & Analytics",
  "Digital Transformation",
  "Recruitment",
  "Technology Training",
] as const;

export const insightTypes = [
  "Project Spotlight",
  "Industry Insight",
  "Technology Insight",
  "Business Analyst Perspective",
  "Case Study",
  "Company Update",
] as const;

export type Block = { h?: string; p?: string[]; list?: string[] };

export type Article = {
  slug: string;
  title: string;
  type: (typeof insightTypes)[number];
  category: (typeof insightCategories)[number];
  date: string; // ISO. Editable by the site owner.
  readMinutes: number;
  excerpt: string;
  body: Block[];
};

export const articles: Article[] = [
  {
    slug: "why-enterprise-integration-assessments-matter",
    title: "Why Enterprise Integration Assessments Matter",
    type: "Industry Insight",
    category: "Insurance",
    date: "2026-09-22",
    readMinutes: 4,
    excerpt: "Integrations accumulate quietly. An assessment brings them back into view before they shape every future decision.",
    body: [
      {
        p: [
          "Most enterprise system landscapes were not designed as a whole. They grew: a system added for one business area, an interface built to solve one urgent problem, a workaround that outlived the person who wrote it. Each decision was reasonable when it was made. Together, they form a landscape that few people fully understand.",
          "An integration assessment is the act of making that landscape visible again.",
        ],
      },
      {
        h: "What an assessment brings into view",
        list: [
          "Which systems exchange information, and in which direction",
          "Where the same data is passed through more than one route",
          "Where a process depends on a manual step between two systems",
          "Which connections nobody can confidently explain any more",
        ],
      },
      {
        h: "Why it matters before change, not after",
        p: [
          "Every transformation programme, system replacement or vendor change touches integrations. If the current landscape is not documented, plans are built on assumption, and assumptions are where delivery risk hides.",
          "A structured assessment gives programme teams a shared, evidence-based picture of the current state. It turns a vague sense that things are complicated into a specific list of gaps, shortcomings and improvement opportunities that can be prioritised.",
        ],
      },
      {
        h: "What good looks like",
        p: [
          "A useful assessment does not stop at a diagram. It connects the technical picture to the business processes that depend on it, identifies where flows can be simplified, and ends with recommendations in a sensible order of execution.",
        ],
      },
    ],
  },
  {
    slug: "from-current-state-architecture-to-actionable-recommendations",
    title: "From Current-State Architecture to Actionable Recommendations",
    type: "Business Analyst Perspective",
    category: "Consulting",
    date: "2026-09-22",
    readMinutes: 5,
    excerpt: "Documenting the current state is only the first step. The value is in the path from what exists to what should happen next.",
    body: [
      {
        p: [
          "Current-state documentation has a reputation for producing thick reports that sit on a shared drive. The reason is usually not the quality of the documentation. It is that the work stopped before it reached a decision.",
        ],
      },
      {
        h: "A path in six steps",
        list: [
          "Understand the business areas and what they need from their systems",
          "Analyse the architecture, integrations and process flows as they exist",
          "Map how work and documents move between people and systems",
          "Identify gaps, shortcomings and redundancy",
          "Recommend specific improvements",
          "Plan the order in which those improvements should happen",
        ],
      },
      {
        h: "Keep the business in the frame",
        p: [
          "The technical view answers what is connected to what. The business view answers why it matters. A recommendation that ignores the second question is difficult to prioritise, and easy to defer.",
        ],
      },
      {
        h: "Sequence is part of the recommendation",
        p: [
          "Recommendations are more useful when they arrive with an order of execution. Some improvements unlock others. Some carry dependencies on third parties. Some can be done quickly and build momentum. Stating the sequence turns a list of ideas into a plan a programme can act on.",
        ],
      },
    ],
  },
  {
    slug: "the-role-of-document-management-in-insurance-operations",
    title: "The Role of Document Management in Insurance Operations",
    type: "Industry Insight",
    category: "Insurance",
    date: "2026-09-22",
    readMinutes: 4,
    excerpt: "Insurance runs on documents. How they are created, stored and connected to core systems shapes how smoothly operations run.",
    body: [
      {
        p: [
          "Policies, endorsements, claims correspondence, financial records: insurance operations produce and depend on a constant flow of documents. Document management is therefore not a back-office detail. It sits inside the day-to-day work of policy, claims and finance teams.",
        ],
      },
      {
        h: "Where document management touches operations",
        list: [
          "Document creation and production within business processes",
          "Storage, retrieval and audit of the record",
          "Connections to policy, claims and finance systems",
          "Access and controls appropriate to regulated data",
        ],
      },
      {
        h: "Where friction tends to appear",
        p: [
          "Friction rarely comes from the storage platform alone. It tends to appear at the boundaries: where a document is created in one place, stored in another and referenced from a third. Each hand-off is an integration, and each integration is a place where the flow can be simplified or, if neglected, can add cost and delay.",
        ],
      },
      {
        h: "A practical starting point",
        p: [
          "Begin with the process, not the platform. Map how a document is created, where it is stored, which systems use it and what output it feeds. That picture shows where the platform helps, where it is being asked to do too much, and where flows could be streamlined.",
        ],
      },
    ],
  },
  {
    slug: "five-questions-to-ask-when-reviewing-enterprise-integrations",
    title: "Five Questions to Ask When Reviewing Enterprise Integrations",
    type: "Technology Insight",
    category: "Technology",
    date: "2026-09-22",
    readMinutes: 3,
    excerpt: "A short list of questions that turns an integration review from a technical inventory into a decision-making tool.",
    body: [
      {
        p: ["Reviews of enterprise integrations can easily become inventories. These five questions keep them focused on decisions."],
      },
      {
        h: "1. What business process does this integration serve?",
        p: ["If nobody can name the process, that is itself a finding."],
      },
      {
        h: "2. Is there more than one route for the same information?",
        p: ["Parallel routes are a common source of redundancy and inconsistency."],
      },
      {
        h: "3. Where does a person still bridge the gap?",
        p: ["Manual steps between systems are often invisible in architecture diagrams but visible to the people doing the work."],
      },
      {
        h: "4. What depends on it, and who owns it?",
        p: ["Knowing dependencies and ownership tells you how safe it is to change, and who must be involved."],
      },
      {
        h: "5. What would the target state need from it?",
        p: ["Some integrations should be kept, some improved, some streamlined and some retired. The target state decides which."],
      },
    ],
  },
];

export const spotlight = {
  title: "Project spotlight: Systems & Integrations Evaluation for RenaissanceRe",
  type: "Project Spotlight" as const,
  category: "Insurance" as const,
  excerpt:
    "Business Analyst experience assessing systems architecture, integrations, process flows and ImageRight document storage across Policy & Claims and Finance.",
  href: "/case-studies/renaissance-re",
};
