/**
 * Single source of truth for verified site content.
 * RULE: nothing here may be invented. Unknowns are marked [TO BE CONFIRMED]
 * and are NOT rendered publicly (see `pending` at the bottom).
 */

export const company = {
  legalName: "J & J Incorporated Ltd",
  brand: "J & J Consulting",
  compact: "J & J",
  established: 2010,
  yearsInExistence: "16+",
  tagline: "Technology. Transformation. Talent.",
  strapline: "Consulting, technology and talent solutions for complex business environments.",
  address: {
    lines: ["Hamilton House", "87–89 Bell Street", "Reigate", "Surrey", "RH2 7AN", "United Kingdom"],
    oneLine: "Hamilton House, 87–89 Bell Street, Reigate, Surrey, RH2 7AN, United Kingdom",
  },
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.jjconsulting.example",
  corporateVideoId: "ZSKtvO5OKvk", // company YouTube video (click-to-play, privacy-enhanced embed)
  // No phone / email supplied. Do not invent. Add here when confirmed.
  phone: null as string | null,
  email: null as string | null,
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Expertise", href: "/expertise" },
  { label: "Clients", href: "/clients" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const heroCategories = [
  "Technology Consultancy",
  "Management Consultancy",
  "Recruitment",
  "Technology Training",
  "Workforce Solutions",
];

/** Verified figures only. */
export const stats = [
  { value: 25, suffix: "+", label: "Years of professional experience" },
  { value: 16, suffix: "+", label: "Years in insurance & financial services" },
  { value: 6, suffix: "+", label: "Years in consulting" },
  { value: 25, suffix: "+", label: "International projects" },
  { value: 8, suffix: "", label: "Full-cycle solution implementations" },
  { value: 5, suffix: "", label: "Countries of international experience" },
];

export const countries = [
  { name: "United Kingdom", lon: -1.5, lat: 52.5 },
  { name: "United States", lon: -98, lat: 39 },
  { name: "Malaysia", lon: 102, lat: 4.2 },
  { name: "Singapore", lon: 103.8, lat: 1.35 },
  { name: "India", lon: 78.5, lat: 21 },
];

export type Service = {
  slug: string;
  index: string;
  node: "TECHNOLOGY" | "CONSULTING" | "TALENT" | "TRAINING" | "WORKFORCE";
  title: string;
  short: string;
  description: string;
  items: string[];
  cta: string;
};

export const services: Service[] = [
  {
    slug: "it-consultancy",
    index: "01",
    node: "TECHNOLOGY",
    title: "Information Technology Consultancy",
    short: "IT Consultancy",
    description:
      "Helping organizations use technology to solve business challenges, improve operations and build scalable digital capabilities.",
    items: [
      "Technology Consulting",
      "Software Development",
      "Cloud Solutions",
      "AWS",
      "Microsoft Azure",
      "DevOps",
      "CI/CD",
      "AI & Automation",
      "Cybersecurity",
      "Digital Transformation",
      "Enterprise Technology",
      "IT Infrastructure",
      "System Integration",
    ],
    cta: "Explore IT Consultancy",
  },
  {
    slug: "management-consultancy",
    index: "02",
    node: "CONSULTING",
    title: "Management Consultancy",
    short: "Management Consultancy",
    description: "Supporting organizations with strategic thinking, operational improvement and technology-enabled transformation.",
    items: [
      "Business Strategy",
      "Technology Strategy",
      "Digital Transformation",
      "Business Analysis",
      "Process Optimization",
      "Operational Improvement",
      "Change Management",
      "Project Management",
      "Programme Management",
    ],
    cta: "Explore Management Consultancy",
  },
  {
    slug: "recruitment",
    index: "03",
    node: "TALENT",
    title: "Head Hunting & Recruitment",
    short: "Recruitment",
    description:
      "Connecting organizations with specialist professionals and leadership talent across technology, business and professional services.",
    items: [
      "Executive Search",
      "Head Hunting",
      "IT Recruitment",
      "Technical Recruitment",
      "Leadership Hiring",
      "Specialist Recruitment",
      "Permanent Recruitment",
      "Contract Recruitment",
      "Talent Acquisition",
    ],
    cta: "Find Talent",
  },
  {
    slug: "technology-training",
    index: "04",
    node: "TRAINING",
    title: "IT & Technology Training",
    short: "Technology Training",
    description: "Technology training across software engineering, cloud, DevOps, data, AI and quality engineering.",
    items: [
      "Full Stack Development",
      "Cloud Computing",
      "AWS",
      "Azure",
      "DevOps",
      "Kubernetes",
      "AI & Machine Learning",
      "Data Engineering",
      "Cybersecurity",
      "QA Automation",
      "Software Engineering",
    ],
    cta: "Explore Training",
  },
  {
    slug: "workforce-solutions",
    index: "05",
    node: "WORKFORCE",
    title: "Manpower Resourcing & Placements",
    short: "Workforce Solutions",
    description: "Resourcing and placement support, from individual specialists to dedicated project teams.",
    items: [
      "IT Staffing",
      "Contract Staffing",
      "Permanent Placement",
      "Technical Staffing",
      "Dedicated Teams",
      "Workforce Outsourcing",
      "Project-Based Resourcing",
      "Talent Deployment",
    ],
    cta: "Explore Workforce Solutions",
  },
];

export const industries = [
  "Insurance",
  "Financial Services",
  "Banking",
  "Technology",
  "Professional Services",
  "Risk & Compliance",
  "Digital Transformation",
];

export const insuranceExpertise = [
  "Underwriting",
  "Claims",
  "Actuarial",
  "Pricing",
  "Finance",
  "Reinsurance",
  "Delegated Authority",
  "London Market",
  "Policy Administration",
  "Data & Analytics",
  "Regulatory & Compliance",
];

export const capabilities = [
  { title: "Business Change", text: "Framing change so it is understood, owned and adopted by the people who run the business." },
  { title: "Requirements", text: "Turning business needs into clear, testable requirements that delivery teams can build against." },
  { title: "Transformation", text: "Connecting strategy, process and technology into a single, sequenced change programme." },
  { title: "Business Process Re-engineering", text: "Mapping how work really flows, then redesigning it around outcomes." },
  { title: "Data Management", text: "Bringing structure to how data is sourced, held, mapped and used." },
  { title: "Data Governance", text: "Defining ownership, quality standards and controls around critical data." },
  { title: "Analytics", text: "Reporting and analysis that give decision-makers a dependable view." },
  { title: "Project Management", text: "Planning, tracking and steering delivery across teams and vendors." },
  { title: "Stakeholder Management", text: "Aligning business areas, technology teams and third parties around shared objectives." },
  { title: "Architecture", text: "Understanding system landscapes and how components connect." },
  { title: "Testing", text: "Verifying that solutions behave as the business intended." },
  { title: "Regulatory & Compliance", text: "Keeping change aligned with regulatory and compliance obligations." },
];

export const techGroups = [
  { group: "Cloud", items: ["AWS", "Microsoft Azure"] },
  { group: "Data & Analytics", items: ["SQL Server", "Power BI", "Qlik", "Tableau", "Databricks", "Informatica", "Alteryx"] },
  { group: "Enterprise", items: ["Guidewire", "Salesforce", "Pega", "Oracle", "SAP"] },
  { group: "Engineering", items: ["APIs", "Docker", "Kubernetes", "CI/CD", "Cloud Infrastructure"] },
  { group: "AI", items: ["Generative AI", "LLMs", "Prompt Engineering", "Agentic AI"] },
];

/**
 * Official vendor sites for technology-ecosystem items where linking is unambiguous (a link is not
 * a partnership claim — see the "Technology Ecosystem, not partners" note already on this page).
 * Shreynor and Data Master (deliveryNetwork, below) are intentionally NOT linked here — their exact
 * official sites haven't been confirmed, and those are common enough business names that guessing
 * a URL risks linking to the wrong company.
 */
export const techLinks: Record<string, string> = {
  AWS: "https://aws.amazon.com/",
  "Microsoft Azure": "https://azure.microsoft.com/",
};

export const currentClients = [
  {
    slug: "westfield-specialty",
    name: "Westfield Specialty",
    logo: "/images/westfield-specialty-logo.png",
    role: "Business Analyst",
    period: "April 2025 – February 2026",
    project: "New Company Market Entity Setup in Luxembourg — Project Goldcrest",
    areas: [
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
    systems: [
      "Verisk Sequel Claims",
      "Eclipse",
      "Touchstone",
      "Sequel Impact",
      "OneHedex",
      "ECF / ECF2",
      "Aon Tyche",
      "Watertrace BDX",
      "SpiraPlan",
    ],
  },
  {
    slug: null,
    name: "Liberty Specialty Markets",
    website: "https://www.libertyspecialtymarkets.com/gb-en",
    logo: "/images/liberty-specialty-markets-logo.png",
    role: null,
    period: null,
    project: null,
    areas: [],
    systems: [],
  },
];

/**
 * Insurance & financial services organisations from the documented experience list.
 * `logo`: path in /public when an official logo has been supplied, otherwise null (a wordmark is shown).
 * To add a logo: drop the file in /public/images/clients/ (SVG preferred) and set its path here.
 * These are organisations within the experience history — NOT all current clients.
 */
export type ExperienceOrg = { slug: string; name: string; logo: string | null };
export const insuranceExperience: ExperienceOrg[] = [
  { slug: "westfield-specialty", name: "Westfield Specialty", logo: "/images/westfield-specialty-logo.png" },
  { slug: "ascot-group", name: "Ascot Group", logo: "/images/ascot-group-logo.png" },
  { slug: "beazley-group", name: "Beazley Group", logo: "/images/beazley-logo.png" },
  { slug: "renaissancere", name: "RenaissanceRe", logo: "/images/renaissance-re-logo.png" },
  { slug: "tokio-marine-hcc", name: "Tokio Marine HCC", logo: "/images/tokio-marine-hcc-logo.png" },
  { slug: "howden-group", name: "Howden Group", logo: null },
  { slug: "hyperion-x", name: "Hyperion X (HX) InsurTech", logo: null },
  { slug: "ms-amlin", name: "MS Amlin", logo: "/images/ms-amlin-logo.png" },
  { slug: "metlife-uk", name: "MetLife UK", logo: "/images/metlife-logo.png" },
  { slug: "collinson-group", name: "Collinson Group", logo: "/images/collinson-logo.png" },
  { slug: "brit-insurance", name: "BRIT Insurance", logo: "/images/brit-logo.png" },
  { slug: "hastings-insurance-group", name: "Hastings Insurance Group", logo: "/images/hastings-direct-logo.png" },
  { slug: "axa-xl", name: "AXA XL", logo: "/images/axa-logo.png" },
  { slug: "xl-group", name: "XL Group", logo: null },
  { slug: "catlin-group", name: "Catlin Group", logo: null },
];

/** Order and selection for the homepage marquee. */
export const marqueeOrder = [
  "westfield-specialty",
  "ascot-group",
  "beazley-group",
  "renaissancere",
  "tokio-marine-hcc",
  "howden-group",
  "ms-amlin",
  "metlife-uk",
  "collinson-group",
  "axa-xl",
];

export const previousClients = [
  {
    name: "Actuant Corp.",
    website: "http://www.actuant.com/",
    location: "Spring Grove, Illinois, USA",
    project: "Systems Integration for BI / Data Warehouse & ERP Solutions",
    team: 22,
    value: "US$3.2 million",
    areas: ["BI", "Data Warehouse", "ERP", "Oracle OBIEE", "Oracle E-Business Suite", "Data Integration", "Data Governance"],
  },
  {
    name: "Mercury Marine Group",
    website: "http://www.mercurymarine.com/",
    logo: "/images/mercury-marine-logo.png",
    location: "Fond Du Lac, Wisconsin, USA",
    project: "BI / Data Warehouse Solution Implementation",
    team: 12,
    value: "US$2.4 million",
    areas: [
      "Business Intelligence",
      "Data Warehouse",
      "Data Profiling",
      "Data Quality",
      "Data Mapping",
      "Data Transformation",
      "Reporting",
    ],
  },
  {
    name: "Port of Tanjung Pelepas",
    website: "http://www.ptp.com.my/",
    logo: "/images/port-of-tanjung-pelepas-logo.png",
    location: "Johor Bahru, Malaysia",
    project: "Oracle EBS ERP & CRM Implementation",
    team: 16,
    value: "US$2.7 million",
    areas: [
      "Oracle Financials",
      "Order Management",
      "Procurement",
      "CRM",
      "Marketing",
      "Sales",
      "Customer Service",
      "Order-to-Cash",
      "Procure-to-Pay",
    ],
  },
  {
    name: "Dialogic Inc.",
    website: "http://www.dialogic.com/",
    location: "Needham, Massachusetts, USA",
    project: "BI Reporting Solution Implementation",
    team: 14,
    value: "US$1.4 million",
    areas: ["Supply Chain", "Distribution", "CRM", "Business Intelligence", "Reporting"],
  },
  {
    name: "Primo Group",
    website: "http://www.primo.com/",
    location: "Massachusetts, USA",
    project: "Oracle EBS Finance & Accounting Rollout",
    team: 8,
    value: "US$0.8 million",
    areas: ["Invoicing", "Payments", "Billing", "Accounting", "General Ledger"],
  },
  {
    name: "Molecular Devices Corp.",
    website: "http://www.moleculardevices.com/",
    logo: "/images/molecular-devices-logo.png",
    location: "Sunnyvale, California, USA",
    project: "Oracle EBS Finance & Supply Chain Rollout",
    team: 9,
    value: "US$0.9 million",
    areas: ["Supply Chain Planning", "Order Management", "Procurement", "Payables", "Receivables", "General Ledger"],
  },
  {
    name: "Telex Communications Inc.",
    website: "http://www.telex.com/",
    logo: "/images/telex-communications-logo.png",
    location: "Hyderabad, India",
    project: "Oracle EBS ERP & CRM Implementation",
    team: 15,
    value: null as string | null, // value not supplied — do not invent
    areas: ["Marketing", "Sales", "Service", "Order Capture", "Shipping"],
  },
];

/** Employer names and years exactly as supplied in the brief. */
export const experienceTimeline = [
  { years: "2001–2003", title: "Early Career" },
  { years: "2003–2004", title: "Brigade Corporation / HP Customer Support" },
  { years: "2004–2008", title: "Hitachi Solutions" },
  { years: "2008–2010", title: "CGI Group" },
  { years: "2010–2014", title: "AXA XL / XL Group / Catlin Group" },
  { years: "2014–2015", title: "Hastings Insurance Group" },
  { years: "2015–2016", title: "MS Amlin" },
  { years: "2017", title: "BRIT Insurance" },
  { years: "2017–2018", title: "Collinson Group" },
  { years: "2018–2019", title: "MetLife UK" },
  { years: "2019–2020", title: "MS Amlin" },
  { years: "2020", title: "Howden / Hyperion X" },
  { years: "2021–2023", title: "Tokio Marine HCC" },
  { years: "2024", title: "RenaissanceRe" },
  { years: "2024", title: "Beazley Group" },
  { years: "2024–2025", title: "Ascot Group" },
  { years: "2025–2026", title: "Westfield Specialty" },
];

export const cities = [
  {
    name: "London",
    note: "The centre of the London Market and the home ground for much of our insurance and financial-services experience.",
    compulsory: true,
  },
  { name: "Frankfurt", note: "A leading European banking and insurance centre." },
  { name: "Paris", note: "One of Europe's principal corporate and financial capitals." },
  { name: "Zurich", note: "A global centre for insurance, reinsurance and private banking." },
  { name: "Geneva", note: "An international hub for finance, trade and professional services." },
  { name: "Dublin", note: "A European centre for financial services and technology." },
  { name: "Amsterdam", note: "A financial and technology gateway to continental Europe." },
];

export const deliveryNetwork = [
  { name: "Shreynor", location: "Hyderabad", website: null as string | null },
  { name: "Data Master", location: "Solapur", website: "https://www.thedatamaster.in/" },
];

export const serviceOptions = [
  "IT Consultancy",
  "Management Consultancy",
  "Head Hunting & Recruitment",
  "Technology Training",
  "Manpower Resourcing",
  "Software Development",
  "Cloud & DevOps",
  "AI & Automation",
  "Other",
];

export const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Experience", href: "/experience" },
      { label: "Industries", href: "/industries" },
      { label: "Clients", href: "/clients" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "IT Consultancy", href: "/services/it-consultancy" },
      { label: "Management Consultancy", href: "/services/management-consultancy" },
      { label: "Recruitment", href: "/services/recruitment" },
      { label: "Technology Training", href: "/services/technology-training" },
      { label: "Manpower Resourcing", href: "/services/workforce-solutions" },
    ],
  },
  {
    title: "Expertise",
    links: [
      { label: "Insurance", href: "/industries#insurance" },
      { label: "Financial Services", href: "/industries#financial-services" },
      { label: "Technology", href: "/expertise#technology" },
      { label: "Data & Analytics", href: "/expertise#data" },
      { label: "Transformation", href: "/expertise#transformation" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "Insights", href: "/insights" },
      { label: "News", href: "/insights" },
      { label: "Training", href: "/services/technology-training" },
    ],
  },
];

/** Items still needed from the client. Not rendered on the public site. */
export const pending = [
  "[CLIENT COUNT TO BE PROVIDED]",
  "[PHONE / EMAIL TO BE CONFIRMED]",
  "[TECHNOLOGY PARTNER STATUS TO BE CONFIRMED — shown as 'Technology Ecosystem' until then]",
  "[LIBERTY SPECIALTY MARKETS — project description and logo permission]",
  "[LEGAL TEXT: Privacy, Cookie, Terms]",
  "[CORPORATE VIDEO: the YouTube ID previously configured (ZSKtvO5OKvk) pointed to an unrelated 'London From Above' Google Earth flyover video, not a J & J Consulting film — section removed from the homepage until a genuine corporate video ID is supplied. The component (components/CorporateVideo.tsx, components/home/Closing.tsx → CorporateVideoSection) is intact and ready to re-add.]",
];
