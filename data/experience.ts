/**
 * Content for the /experience page ("Our Client Experience").
 * Source: client-supplied copy, fact-checked against the master resume.
 * Pre-2010 engagements pre-date J & J Incorporated (est. 2010) and are credited to the firm they were delivered through.
 */

export type Block = { title: string; text: string[] };

export type Engagement = {
  id: string;
  client: string;
  logo: string | null;
  period: string;
  title: string;
  summary: string[];
  blocks?: Block[];
  workedOnLabel?: string;
  workedOn?: string[];
  focus?: string[];
  outcome?: string;
  caseStudy?: string;
  via?: string;
};

export const experienceIntro = {
  eyebrow: "Our client experience",
  title: "Transforming complex business, data and technology environments",
  lead: "Across more than two decades of consulting and transformation experience, we have worked with organisations across insurance, financial services, transportation, manufacturing, logistics and technology.",
  text: "Our engagements have covered business transformation, enterprise architecture, systems integration, data platforms, analytics, regulatory change, ERP/CRM implementation, process optimisation and technology strategy.",
};

export const recentEngagements: Engagement[] = [
  {
    id: "westfield-specialty",
    client: "Westfield Specialty",
    logo: "/images/westfield-specialty-logo.png",
    period: "2025 – 2026",
    title: "New Market Entity Setup — Project Goldcrest",
    summary: [
      "We supported the establishment of a new company market entity in Luxembourg, working across Underwriting, Claims, Reserving, Pricing, Capital Modelling, CAT Modelling, Exposure Management, Finance, Reinsurance and Delegated Authority.",
      "Our work covered three major delivery areas: Sequel Claims system upgrades and entity setup, actuarial-system configuration and integration mappings, and requirements definition for underwriting workbench and pricing platforms.",
    ],
    workedOn: [
      "Business requirements and release planning",
      "Claims-system configuration",
      "Company Market messaging",
      "Actuarial system mappings",
      "End-to-end data flows",
      "Underwriting and pricing platforms",
      "As-Is and To-Be process design",
      "Vendor coordination",
      "Testing and delivery",
    ],
    outcome:
      "The engagement supported system readiness for Company Market business, established end-to-end process and data-flow documentation, and supported the evaluation and selection of pricing and underwriting platforms.",
    caseStudy: "/case-studies/westfield-specialty",
  },
  {
    id: "ascot-group",
    client: "Ascot Group",
    logo: "/images/ascot-group-logo.png",
    period: "2024 – 2025",
    title: "Lloyd’s Advanced Status Reporting — Delegated Authority",
    summary: [
      "We worked with business and technology stakeholders to support the delivery of an advanced status-reporting capability for Delegated Authority operations.",
      "The engagement involved requirements definition, data-quality analysis, process assessment, platform requirements and delivery planning.",
    ],
    workedOn: [
      "Business requirements and BRDs",
      "Data-point cataloguing",
      "Data-quality assessment",
      "Data remediation requirements",
      "Data dictionary development",
      "As-Is and To-Be process flows",
      "Azure DevOps requirements",
      "Vendor selection",
      "Delivery planning",
      "Technical Design Authority engagement",
    ],
    outcome:
      "The work established structured business and data requirements, clarified data-quality remediation needs, and created a delivery framework for subsequent platform development.",
    caseStudy: "/case-studies/ascot-group",
  },
  {
    id: "beazley",
    client: "Beazley Group",
    logo: "/images/beazley-logo.png",
    period: "2024",
    title: "Pricing & Rating System Modernisation",
    summary: [
      "We supported the modernisation of pricing and rating capabilities across Actuarial, Capital Modelling, Underwriting, Finance, Policy and Claims.",
      "The engagement involved understanding existing rating models, identifying gaps, defining migration requirements, and supporting implementation through testing and UAT.",
    ],
    workedOn: [
      "Pricing and rating analysis",
      "Business requirements",
      "Migration mapping",
      "User stories",
      "Test scripts",
      "UAT",
      "User training",
      "Vendor coordination",
      "Go-live preparation",
      "Post-go-live support",
    ],
    outcome: "Multiple rating solutions were successfully delivered and migrated across Specialty Insurance lines of business.",
    caseStudy: "/case-studies/beazley",
  },
  {
    id: "renaissance-re",
    client: "RenaissanceRe",
    logo: "/images/renaissance-re-logo.png",
    period: "2024",
    title: "Systems & Integration Evaluation — Document Storage",
    summary: [
      "We assessed the existing systems architecture, integrations, business processes and document-storage environment.",
      "The engagement focused on identifying architectural gaps, integration redundancies, process issues and opportunities to streamline the existing technology landscape.",
    ],
    workedOn: [
      "Systems architecture assessment",
      "Integration analysis",
      "Process-flow mapping",
      "Document-storage assessment",
      "Gap analysis",
      "Identification of redundant integrations",
      "Vendor coordination",
      "Improvement recommendations",
      "Target-state planning",
      "Execution sequencing",
    ],
    outcome:
      "The assessment provided a structured understanding of the existing environment and established recommendations and an action sequence for moving towards the target state.",
    caseStudy: "/case-studies/renaissance-re",
  },
  {
    id: "tokio-marine-hcc",
    client: "Tokio Marine HCC",
    logo: "/images/tokio-marine-hcc-logo.png",
    period: "2021 – 2023",
    title: "Policy Administration & Enterprise Architecture",
    summary: [
      "We worked across a major policy-administration transformation covering Professional Risks, Surety, Trade Credit, London Market and New Energies.",
      "The engagement involved legacy-system analysis, Guidewire implementation, data migration, integration mapping, document generation, storage, portals and architecture definition.",
    ],
    workedOn: [
      "Guidewire PolicyCenter",
      "Legacy-system assessment",
      "Data migration",
      "Source-to-target mapping",
      "API integration",
      "Broker-portal integration",
      "Document management",
      "Policy administration",
      "Claims administration",
      "Data profiling",
      "Data cleansing",
      "Architecture definition",
      "Target-state architecture",
    ],
    blocks: [
      {
        title: "Systems Strategy & Vendor Selection",
        text: [
          "We also supported RFP and vendor-selection activities across Policy Administration, Claims, Finance, Payments, Portals, Document Management and other enterprise capabilities.",
          "The work included requirements, non-functional requirements, evaluation criteria, RFP preparation and vendor assessment.",
        ],
      },
      {
        title: "Enterprise Architecture",
        text: [
          "A business and systems capability matrix was developed to map business capabilities to technology platforms.",
          "Target-state architectures were defined, including multiple architectural archetypes, data flows, integrations and infrastructure requirements.",
        ],
      },
    ],
    caseStudy: "/case-studies/tokio-marine-hcc",
  },
  {
    id: "howden-hyperion-x",
    client: "Howden Group / Hyperion X",
    logo: null,
    period: "2020",
    title: "Data & Analytics Transformation",
    summary: ["We worked on multiple data and analytics initiatives spanning Employee Benefits, Actuarial, Policy, Claims and Finance."],
    blocks: [
      {
        title: "Employee Benefits Data Analytics",
        text: [
          "We designed a data-platform approach for ingesting and analysing information from multiple internal and external sources.",
          "The work included Salesforce data, public statistical datasets, data modelling, Power BI and Master Data Management.",
        ],
      },
      {
        title: "Actuarial Data & Metrics",
        text: [
          "We supported the automation and standardisation of actuarial calculations and reporting.",
          "A central actuarial cube was developed to support standardised metrics and analysis across multiple business dimensions.",
        ],
      },
      {
        title: "Broker Data Platform",
        text: [
          "We supported ingestion of Policy and Claims data from Howden Germany into a central enterprise data platform using Azure Data Factory and related data-management capabilities.",
        ],
      },
    ],
    workedOn: [
      "Azure Data Factory",
      "Azure Data Lake",
      "Databricks",
      "SQL Server",
      "Power BI",
      "Salesforce",
      "MDM",
      "RDM",
      "SSAS",
      "Data modelling",
      "Data ingestion",
      "Analytics",
      "Dashboarding",
    ],
    caseStudy: "/case-studies/howden-hyperion-x",
  },
  {
    id: "ms-amlin",
    client: "MS Amlin",
    logo: "/images/ms-amlin-logo.png",
    period: "2019 – 2020",
    title: "Systems Strategy & Data Governance",
    summary: [
      "As Data Lead and Project Manager, we managed a systems strategy and governance programme covering Finance, Underwriting, Actuarial and Claims.",
      "The programme focused on improving business processes, data quality and governance.",
    ],
    workedOn: [
      "Business-process assessment",
      "Systems analysis",
      "Data profiling",
      "Root-cause analysis",
      "Impact analysis",
      "Data governance",
      "Data lineage",
      "Critical-data-element identification",
      "Data-quality measurement",
      "Power BI dashboards",
      "Alteryx workflows",
      "Stakeholder governance",
      "Target Operating Model",
    ],
    outcome:
      "The engagement established improved processes, stronger data-quality controls, governance mechanisms and dashboards for monitoring critical data and performance indicators.",
    caseStudy: "/case-studies/ms-amlin",
  },
  {
    id: "metlife-uk",
    client: "MetLife UK",
    logo: "/images/metlife-logo.png",
    period: "2018 – 2019",
    title: "Big Data, Data Lake & Single Customer View",
    summary: [
      "We supported an EMEA-wide data transformation programme focused on creating a centralised data platform and improving data quality and reporting.",
    ],
    workedOn: [
      "Big Data",
      "Data Lake",
      "Hadoop",
      "Hive",
      "Sqoop",
      "Oozie",
      "Informatica",
      "Qlik Sense",
      "Data governance",
      "Master Data Management",
      "Data Quality Management",
      "Single Customer View",
      "Self-service analytics",
    ],
    outcome:
      "The programme established a central data environment supporting customer, policy, claims and employee information, together with analytics, data governance and data-quality capabilities.",
    caseStudy: "/case-studies/metlife-uk",
  },
  {
    id: "collinson-group",
    client: "Collinson Group",
    logo: "/images/collinson-logo.png",
    period: "2017 – 2018",
    title: "Business & Systems Transformation",
    summary: [
      "We worked across a broad transformation portfolio covering Finance, Underwriting, Policy Administration, Claims and Actuarial functions.",
    ],
    blocks: [
      {
        title: "Client onboarding",
        text: [
          "We supported onboarding of major travel-insurance clients, covering requirements, systems changes, testing, implementation and transition to BAU.",
        ],
      },
      {
        title: "Policy & Claims Transformation",
        text: ["We analysed existing systems and processes and supported migration towards a strategic Policy and Claims platform."],
      },
      {
        title: "Data Exchange & Bordereau Automation",
        text: [
          "We helped implement an automated data-exchange capability supporting Policy, Claims and Financial data across more than 95 clients and multiple data formats.",
        ],
      },
      {
        title: "Data Warehouse",
        text: ["We supported implementation of a new warehouse bringing together data from multiple Policy, Claims and Finance systems."],
      },
      { title: "Analytics", text: ["We supported the adoption of Alteryx and Tableau for data preparation and visualisation."] },
      {
        title: "Infrastructure",
        text: ["We also supported server migration, hosting strategy, permissions rationalisation and infrastructure planning."],
      },
    ],
    caseStudy: "/case-studies/collinson-group",
  },
  {
    id: "collinson-solvency-ii",
    client: "Collinson Group",
    logo: "/images/collinson-logo.png",
    period: "2017",
    title: "Regulatory Transformation — Solvency II Regulatory Compliance",
    summary: [
      "We delivered a regulatory transformation programme covering Finance, Underwriting, Actuarial, Capital Modelling, Claims and Policy Administration.",
    ],
    workedOn: [
      "Solvency II",
      "Regulatory reporting",
      "QRT reporting",
      "Data reconciliation",
      "Regulatory controls",
      "Data mapping",
      "Process design",
      "Vendor implementation",
      "BAU transition",
      "Stakeholder coordination",
    ],
    outcome: "The programme delivered regulatory reporting capabilities and embedded processes and controls into BAU operations.",
    caseStudy: "/case-studies/collinson-group",
  },
  {
    id: "brit-insurance",
    client: "BRIT Insurance",
    logo: "/images/brit-logo.png",
    period: "2017",
    title: "Solvency II & GDPR Compliance",
    summary: ["We worked across Finance, Actuarial, Underwriting, Policy, Claims and Capital Modelling to support regulatory compliance."],
    blocks: [
      {
        title: "Solvency II",
        text: [
          "The work involved regulatory reporting, complex data extraction, calculations, validation, reconciliation and submission preparation.",
        ],
      },
      {
        title: "GDPR",
        text: [
          "We assessed systems and data flows containing personally identifiable information and analysed integrations, workflows, access controls and third-party data exchanges.",
        ],
      },
    ],
    focus: ["Regulatory Reporting", "Data Governance", "GDPR", "Data Flows", "Integration Analysis", "Compliance"],
    caseStudy: "/case-studies/brit-insurance",
  },
  {
    id: "ms-amlin-solvency-ii",
    client: "MS Amlin",
    logo: "/images/ms-amlin-logo.png",
    period: "2015 – 2016",
    title: "Regulatory Transformation — Solvency II Business Change",
    summary: [
      "We supported a major regulatory business-change programme covering Finance, Actuarial, Underwriting, Policy, Claims and Capital Modelling.",
      "The engagement included data discovery, standardisation, governance, process redesign, solution design, testing and Target Operating Model definition.",
    ],
    workedOn: [
      "Data discovery",
      "Data standardisation",
      "Data governance",
      "Process re-engineering",
      "Target Operating Model",
      "Solution design",
      "Gap remediation",
      "UAT",
      "Regulatory reporting",
      "Change management",
      "BAU transition",
    ],
    caseStudy: "/case-studies/ms-amlin-solvency-ii",
  },
  {
    id: "hastings-insurance-group",
    client: "Hastings Insurance Group",
    logo: "/images/hastings-direct-logo.png",
    period: "2014 – 2015",
    title: "Regulatory Reporting & Underwriting Platform Evaluation",
    summary: ["We supported two major initiatives."],
    blocks: [
      {
        title: "Solvency II Regulatory Compliance",
        text: [
          "The programme involved regulatory reporting, vendor selection, Tagetik implementation, data reconciliation, user training and BAU transition.",
        ],
      },
      {
        title: "Underwriting Platform Evaluation",
        text: [
          "We evaluated underwriting platforms including Eclipse, Guidewire and Velocity as part of an RFP and selection process.",
          "The engagement covered stakeholder evaluation, vendor assessment and system-selection criteria.",
        ],
      },
    ],
    caseStudy: "/case-studies/hastings-insurance-group",
  },
  {
    id: "axa-xl",
    client: "AXA XL / XL Group / Catlin Group",
    logo: "/images/axa-logo.png",
    period: "2010 – 2014",
    title: "Business Intelligence & Data Transformation",
    summary: ["We worked across Finance, Underwriting, Actuarial, Reinsurance, Recoveries and Enterprise Risk Management."],
    blocks: [
      {
        title: "BI Solution",
        text: [
          "We supported implementation and ongoing delivery of a Microsoft SQL Server-based BI solution covering requirements, data analysis, specifications, testing and production release.",
        ],
      },
      {
        title: "Cognos & Netezza",
        text: [
          "We supported reporting modernisation, framework development, data standardisation and operational data-store implementation.",
        ],
      },
      {
        title: "Data Standardisation",
        text: [
          "We helped establish a central data warehouse and Finance and Actuarial data marts, together with data-quality and governance processes.",
        ],
      },
    ],
    workedOn: [
      "SQL Server",
      "SSIS",
      "SSRS",
      "Cognos",
      "Netezza",
      "SAP BusinessObjects",
      "Data Warehousing",
      "Data Marts",
      "Data Governance",
      "Data Quality",
      "Reporting",
      "Bordereaux processing",
    ],
    caseStudy: "/case-studies/axa-xl",
  },
];

export const earlierCareerIntro =
  "Before J & J Incorporated was established in 2010, this experience was built through CGI, Hitachi Solutions and Brigade Corporation, on programmes across the UK, USA, Malaysia, Singapore and India.";

export const hitachiPortfolio = {
  title: "Global ERP, CRM & BI Transformation Portfolio",
  via: "Through Hitachi Solutions · 2004 – 2008",
  text: "Through Hitachi Solutions, we contributed to multiple international transformation programmes across the USA, Malaysia, Singapore and India. The portfolio included ERP, CRM, Business Intelligence, Data Warehousing and enterprise systems integration.",
  capabilities: [
    {
      title: "ERP Transformation",
      text: "Oracle E-Business Suite implementations across Finance, Procurement, Order Management and Supply Chain.",
    },
    { title: "CRM Transformation", text: "Marketing, Sales, Service and Customer Support process transformation." },
    { title: "Business Intelligence", text: "Enterprise BI and reporting solutions across multiple industries." },
    { title: "Data Transformation", text: "Data profiling, mapping, transformation, migration and governance." },
    { title: "Systems Integration", text: "Connecting ERP, CRM, BI and legacy platforms into integrated enterprise environments." },
  ],
};

export const earlierEngagements: Engagement[] = [
  {
    id: "network-rail",
    client: "Network Rail",
    logo: null,
    period: "2008 – 2010",
    via: "Through CGI Group",
    title: "Enterprise BI & Data Warehouse Programme",
    summary: [
      "We worked on a UK-wide BI and Data Warehouse implementation supporting reporting across infrastructure, efficiency, supply chain and works progress.",
      "The engagement brought together business requirements, data architecture, process mapping and technical delivery within a large-scale national infrastructure environment.",
    ],
    workedOn: [
      "Oracle E-Business Suite",
      "Data discovery",
      "Data profiling",
      "Data mapping",
      "Data transformation",
      "Data modelling",
      "Data migration",
      "Data governance",
      "Master Data Management",
      "SQL validation",
      "Testing",
      "Go-live",
    ],
    outcome:
      "The engagement addressed data-quality and availability challenges while establishing structured data flows, governance practices and reporting capabilities.",
  },
  {
    id: "actuant",
    client: "Actuant Corporation",
    logo: "/images/actuant-enerpac-logo.png",
    period: "2007 – 2008",
    via: "Through Hitachi Solutions",
    title: "ERP & Business Intelligence Integration",
    summary: [
      "We supported the integration of ERP and BI platforms following a corporate acquisition.",
      "The engagement involved Oracle E-Business Suite, Oracle BI, data mapping, transformation, migration and reporting.",
    ],
    workedOn: [
      "Oracle EBS",
      "Oracle OBIEE",
      "BI/DW",
      "Data mapping",
      "Data transformation",
      "Data migration",
      "Data quality",
      "Master Data Management",
      "Data governance",
      "Business Objects",
    ],
  },
  {
    id: "mercury-marine",
    client: "Mercury Marine Group",
    logo: "/images/mercury-marine-logo.svg",
    period: "2007",
    via: "Through Hitachi Solutions",
    title: "Enterprise BI & Data Warehouse",
    summary: [
      "We supported a Business Intelligence implementation integrating data from multiple ERP and legacy systems into a central Data Warehouse.",
      "The engagement included mapping data from 17 ERP and legacy source systems into the target warehouse and designing reporting requirements.",
    ],
    workedOn: [
      "Business requirements",
      "Data profiling",
      "Data quality",
      "Data transformation",
      "Data mapping",
      "Technical specifications",
      "SIT",
      "UAT",
      "Data Warehouse",
      "Reporting",
    ],
  },
  {
    id: "port-of-tanjung-pelepas",
    client: "Port of Tanjung Pelepas",
    logo: "/images/port-of-tanjung-pelepas-logo.png",
    period: "2006 – 2007",
    via: "Through Hitachi Solutions",
    title: "Oracle ERP & CRM Transformation",
    summary: [
      "We worked on a full-cycle Oracle EBS implementation covering Order-to-Cash and Procure-to-Pay business processes.",
      "We supported requirements, solution mapping, gap remediation, technical specifications, migration, testing, go-live and handover.",
    ],
    workedOnLabel: "Business areas",
    workedOn: ["Oracle Financials", "Order Management", "Procurement", "CRM", "Marketing", "Sales", "Customer Service", "Customer Support"],
  },
  {
    id: "dialogic",
    client: "Dialogic Inc.",
    logo: "/images/dialogic-logo.png",
    period: "2006",
    via: "Through Hitachi Solutions",
    title: "BI Reporting Solution",
    summary: ["We supported a BI reporting solution for Supply Chain, Distribution and CRM operations."],
  },
  {
    id: "primo",
    client: "Primo Group",
    logo: "/images/primo-logo.svg",
    period: "2005 – 2006",
    via: "Through Hitachi Solutions",
    title: "Finance & Accounting ERP Rollout",
    summary: ["We supported an Oracle EBS rollout covering invoicing, payments, billing, accounting and general ledger."],
  },
  {
    id: "molecular-devices",
    client: "Molecular Devices Corporation",
    logo: "/images/molecular-devices-logo.svg",
    period: "2005",
    via: "Through Hitachi Solutions",
    title: "Finance & Supply Chain ERP Rollout",
    summary: [
      "We supported an Oracle EBS implementation covering supply chain planning, order management, procurement, payables, receivables and general ledger.",
    ],
  },
  {
    id: "telex",
    client: "Telex Communications",
    logo: "/images/telex-communications-logo.png",
    period: "2004 – 2005",
    via: "Through Hitachi Solutions",
    title: "ERP & CRM Implementation",
    summary: ["We supported an Oracle EBS ERP and CRM implementation covering marketing, sales, service, order capture and shipping."],
  },
  {
    id: "hewlett-packard",
    client: "Hewlett Packard",
    logo: null,
    period: "2003 – 2004",
    via: "Through Brigade Corporation",
    title: "Outsourced Customer & Technical Support",
    summary: [
      "We supported outsourced customer and technical support operations for Hewlett Packard, covering customer relationship management, case resolution, escalation handling and service-level delivery.",
    ],
    workedOn: [
      "Customer Support",
      "CRM",
      "Case Management",
      "Customer Relations",
      "Escalation Management",
      "Service Operations",
      "Process Improvement",
    ],
  },
];

export const connects = {
  intro: "Across different organisations, industries and technology landscapes, our work consistently sits at the intersection of:",
  items: [
    { title: "Business Transformation", text: "Turning business objectives into executable transformation programmes." },
    { title: "Systems & Architecture", text: "Understanding complex application landscapes and defining target-state architectures." },
    { title: "Data & Analytics", text: "Creating reliable data platforms, governance frameworks and analytical capabilities." },
    { title: "Integration", text: "Connecting systems, simplifying interfaces and improving information flow." },
    { title: "Regulatory Change", text: "Supporting organisations through complex regulatory and compliance programmes." },
    { title: "ERP & CRM", text: "Transforming core business operations through enterprise platforms." },
    { title: "Process Optimisation", text: "Identifying inefficiencies and redesigning processes for improved operations." },
    {
      title: "Delivery & Change",
      text: "Taking initiatives from requirements and design through testing, implementation and BAU handover.",
    },
  ],
};

export const lifecycle = {
  steps: ["Discover", "Analyse", "Design", "Transform", "Integrate", "Test", "Implement", "Transition", "Optimise"],
  text: "The result is not simply a technology implementation. It is a structured transformation approach that connects people, processes, data, systems and business outcomes.",
};
