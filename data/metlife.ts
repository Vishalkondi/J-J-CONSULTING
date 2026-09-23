/**
 * MetLife UK — Business Analyst & Project Manager, Oct 2018 – Aug 2019.
 * All copy is exactly as supplied by the client (see the supplied MetLife brief). Do not add metrics beyond it.
 */
export type Block = { title: string; text?: string; tags?: string[] };
export type Workstream = {
  index: string;
  kicker: string;
  title: string;
  lead?: string;
  leadTags?: string[];
  blocks: Block[];
  closing?: { text: string; flow: string[] };
};

export const metlife = {
  slug: "metlife-uk",
  client: "MetLife UK",
  logo: "/images/metlife-logo.png",
  role: "Business Analyst & Project Manager",
  period: "October 2018 – August 2019",
  value: "£4.4M",
  team: "24",
  scope: "EMEA",
  keywords: ["Big Data", "Data Lake", "Single Customer View", "Data Quality", "EMEA Transformation"],
  domains: ["Policy Administration", "Employee Benefits", "Underwriting", "Claims", "Finance"],
  eyebrow: "Big Data, Data Lake & Single Customer View Programme",
  headline: ["One Data Foundation.", "One Customer View."],
  subhead: "Building the EMEA Data & Analytics Foundation",
  summary:
    "A UK£4.4M EMEA-wide transformation programme establishing a centralised data platform, Single Customer View, Data Quality Management and self-service analytics across Policy Administration, Employee Benefits, Underwriting, Claims and Finance.",
  chips: ["24-person team", "EMEA programme", "Big Data · Data Lake · DQM · SCV"],
  intro: {
    kicker: "Big Data, Data Lake & Single Customer View",
    title: "Creating a Unified Data Foundation for EMEA",
    paragraphs: [
      "A strategic EMEA-wide transformation programme focused on establishing a centralised Big Data Platform and Data Lake, enabling Single Customer View, data governance, data quality, analytics and self-service reporting across the organisation.",
      "The programme brought together data from multiple source systems, data warehouses and structured and unstructured datasets into a centralised environment designed to support enterprise reporting, analytics and data-driven decision-making.",
    ],
  },
  journey: {
    title: "The EMEA Data Journey",
    layers: [
      { label: "Multiple EMEA source systems", sub: "Customers · Policies · Claims · Employee Data" },
      { label: "Data ingestion", sub: "" },
      { label: "Hadoop / Data Lake", sub: "Hadoop · HortonWorks", core: true },
      { label: "Data Quality / MDM", sub: "Informatica" },
      { label: "Single Customer View", sub: "" },
      { label: "Analytics & Reporting", sub: "" },
      { label: "Qlik Sense", sub: "" },
      { label: "Business insights", sub: "" },
    ],
  },
  seo: {
    title: "Business Analyst & Project Manager — Big Data, Data Lake & Single Customer View | MetLife UK",
    description:
      "Business Analyst and Project Manager on MetLife UK's £4.4M EMEA Big Data, Data Lake and Single Customer View programme: data quality, governance and self-service analytics, October 2018 – August 2019.",
  },
} as const;

export const workstreams: Workstream[] = [
  {
    index: "01",
    kicker: "Big Data & Data Lake",
    title: "Building the EMEA Data Foundation",
    lead: "Supported the implementation of an EMEA-wide Data Hub / Data Lake using the Hadoop ecosystem to provide centralised storage and processing for:",
    leadTags: ["Customers", "Policies", "Claims", "Employee Data"],
    blocks: [
      {
        title: "Data ingestion",
        text: "Supported ingestion from multiple source systems, data warehouses, structured datasets and unstructured datasets into the central data environment.",
      },
      {
        title: "Hadoop data ecosystem",
        text: "Created a scalable foundation for data ingestion, processing, storage and downstream analytics.",
        tags: ["Apache Hadoop", "HortonWorks", "Hive", "Sqoop", "Oozie"],
      },
      {
        title: "Data processing",
        text: "Used technologies including the following to support data processing and analytical workloads.",
        tags: ["Hive", "Apache Pig", "Sqoop", "Oozie"],
      },
      {
        title: "Single Customer View",
        text: "Built the data foundation required to bring customer-related information together across EMEA, enabling a more connected view of customers, policies, claims and employee benefits.",
      },
    ],
  },
  {
    index: "02",
    kicker: "Single Customer View & Business Intelligence",
    title: "Turning Enterprise Data Into Actionable Insight",
    lead: "Enabled business teams to explore and analyse centralised data through:",
    leadTags: ["Qlik Sense", "Apache Pig", "Data Mining Tools", "MS Excel"],
    blocks: [
      {
        title: "Interactive dashboards",
        text: "Supported the development of analytics, dashboards and interactive visualisations designed to provide greater visibility across EMEA data.",
      },
      {
        title: "Self-service analytics",
        text: "Enabled business users to perform self-service analysis and reporting, reducing dependence on manually prepared information.",
      },
      {
        title: "Customer intelligence",
        text: "Established the data foundation supporting a Single Customer View, bringing together information across business domains.",
      },
    ],
  },
  {
    index: "03",
    kicker: "Data Quality Management",
    title: "Embedding Quality Into the Data Lifecycle",
    lead: "A dedicated Data Quality Management (DQM) workstream was established alongside the Big Data & Data Lake initiative.",
    blocks: [
      { title: "Automated data quality", text: "Used Informatica to automate data-quality checks across five internal source systems." },
      { title: "Exception management", text: "Identified invalid records and routed exceptions for review, correction and remediation." },
      {
        title: "Source-system correction",
        text: "Corrected data was automatically pushed back toward the relevant source systems, helping establish a continuous quality-improvement process.",
      },
      {
        title: "Master data management",
        text: "Embedded Data Quality and Master Data Management (MDM) capabilities into the broader data transformation.",
      },
      {
        title: "Data governance",
        text: "Established data governance frameworks, controls and processes around managing information within the Data Lake.",
      },
    ],
  },
  {
    index: "04",
    kicker: "Data Governance & Business Glossary",
    title: "Creating Structure Around Enterprise Data",
    blocks: [
      {
        title: "Data governance framework",
        text: "Supported the creation and implementation of a structured Data Governance Framework, including controls and processes for managing data within the central platform.",
      },
      {
        title: "Business glossary",
        text: "Created a Business Glossary to establish common understanding of business terminology and data concepts.",
      },
      {
        title: "Data management",
        text: "Supported improved management of enterprise information across:",
        tags: ["Customers", "Policies", "Claims", "Employee Benefits", "Finance"],
      },
      {
        title: "Target operating model",
        text: "Contributed to the Target Operating Model and supported transition toward the new way of working.",
      },
    ],
  },
  {
    index: "05",
    kicker: "Process & Data Capture Improvement",
    title: "Improving Data Quality From the Point of Capture",
    lead: "Identified opportunities to improve upstream processes and data capture across external brokers and agents.",
    blocks: [
      { title: "Workflow improvement", text: "Supported streamlined workflows and improved data-capture practices." },
      { title: "Error reduction", text: "Addressed data-quality issues at earlier stages of the information lifecycle." },
      {
        title: "Broker & agent data",
        text: "Supported improvements to information captured from external distribution and business partners.",
      },
    ],
    closing: { text: "This created a stronger connection between:", flow: ["Data capture", "Data quality", "Data platform", "Analytics"] },
  },
  {
    index: "06",
    kicker: "Product Ownership & Project Leadership",
    title: "Leading a Complex EMEA Transformation",
    lead: "Alongside Business Analysis responsibilities, acted as Product Owner for the UK Single Customer View and Data Quality Management solutions.",
    blocks: [
      {
        title: "Product ownership",
        text: "Owned and coordinated requirements and delivery for application components supporting the UK SCV & DQM solutions.",
      },
      { title: "Multi-location delivery", text: "Led and coordinated teams distributed across multiple EMEA locations." },
      {
        title: "Vendor management",
        text: "Worked with offshore services vendor TCS and onshore services vendor BI4ALL to support delivery.",
      },
      {
        title: "Programme planning",
        text: "Established and managed:",
        tags: ["Scope", "Requirements", "Deliverables", "Timelines", "Stakeholders", "Resources", "Dependencies", "Budgets"],
      },
      {
        title: "Project governance",
        text: "Created and maintained the Project Plan, tracked progress and produced status reporting for programme sponsors and stakeholders.",
      },
      {
        title: "RAID management",
        text: "Managed:",
        tags: ["Risks", "Assumptions", "Issues", "Dependencies", "Actions", "Decisions", "Impacts", "Escalations"],
      },
      {
        title: "Stakeholder leadership",
        text: "Chaired the following, and managed meeting outputs, actions and follow-up activities:",
        tags: ["Project Steering Meetings", "Stakeholder Meetings", "Sponsor Meetings"],
      },
    ],
  },
];

export const impact = [
  {
    title: "EMEA data foundation",
    text: "Established a centralised Big Data and Data Lake environment supporting enterprise information across EMEA.",
  },
  {
    title: "Single Customer View",
    text: "Created the data foundation for a connected view of customers, policies, claims and employee data.",
  },
  { title: "Data quality", text: "Embedded automated quality checks and exception management across five internal source systems." },
  { title: "Data governance", text: "Introduced governance frameworks, controls and processes for managing data within the Data Lake." },
  {
    title: "Self-service analytics",
    text: "Enabled business users to analyse data using Qlik Sense, Apache Pig, data-mining tools and Excel.",
  },
  {
    title: "Project leadership",
    text: "Coordinated a 24-person, multi-location programme team across a UK£4.4M transformation programme.",
  },
];

export const ecosystem = [
  { group: "Big Data & Data Lake", items: ["Hadoop", "HortonWorks", "Hive", "Sqoop", "Oozie", "Apache Pig"] },
  { group: "Data Quality", items: ["Informatica", "Master Data Management", "Data Quality Management"] },
  { group: "Business Intelligence", items: ["Qlik Sense", "Data Mining", "Excel"] },
  { group: "Database", items: ["SQL Server"] },
];

export const capabilities = [
  {
    group: "Data transformation",
    items: ["Big Data", "Data Lakes", "Data Integration", "Data Ingestion", "Data Modelling", "Data Quality"],
  },
  { group: "Data governance", items: ["Data Governance", "MDM", "Business Glossary", "Data Controls", "Data Management"] },
  {
    group: "Business intelligence",
    items: ["Qlik Sense", "Analytics", "Dashboards", "Interactive Visualisation", "Self-Service Reporting"],
  },
  {
    group: "Project management",
    items: ["Programme Planning", "Workstream Management", "RAID Management", "Stakeholder Management", "Vendor Management"],
  },
  {
    group: "Business analysis",
    items: ["Requirements Engineering", "Process Analysis", "Workshop Facilitation", "Stakeholder Engagement", "Business Change"],
  },
  {
    group: "Product ownership",
    items: ["Product Ownership", "Backlog / Requirements Management", "Delivery Coordination", "Solution Alignment"],
  },
];

export const closing = {
  title: "From Fragmented Data to Connected Intelligence",
  text: "Connecting source systems, strengthening data quality, establishing governance and enabling analytics to create a more unified view of customers, policies, claims and employee data across EMEA.",
};
