/**
 * Howden Group / Hyperion X (HX) InsurTech — Business Analyst (BI & Data), Jun–Nov 2020.
 * All copy for the page lives here. Content is exactly as supplied by the client; do not add
 * metrics or claims beyond it.
 */

export type Action = { verb: string; text: string };
export type Img = { src: string; alt: string };

export type CaseStudyContent = {
  id: string;
  title: string;
  focus: string[];
  challenge: string;
  actions: Action[];
  stack: string[];
  image?: Img;
  figure?: Img & { width: number; height: number; caption: string };
};

export type Stat = { value: string; label: string };

export const images = {
  // boardroomLondon and analystDashboards were retired: both source photos are already used
  // exactly once each (Recruitment and IT Consultancy service heroes, in app/services/[slug]/page.tsx),
  // and these registry entries had no live consumer left — removed as dead code rather than
  // risk a second, duplicate usage sneaking back in later.
  presenterDataWall: {
    src: "/images/presenter-data-wall.jpg",
    alt: "A presenter at a data wall briefing colleagues, with the City skyline and St Paul's behind",
  },
  office: {
    // Swap for a licensed image at the same path (Unsplash/Pexels) — keep the filename.
    src: "/images/modern-office-workspace.jpg",
    alt: "Modern open-plan office with floor-to-ceiling windows overlooking a city",
  },
  skyline: {
    src: "/images/london-skyline.jpg",
    alt: "Aerial view of the City of London skyline and the River Thames at golden hour",
  },
  officeTeam: {
    src: "/images/office-team.jpg",
    alt: "A team collaborating around a laptop in a modern office",
  },
  citySkylineDusk: {
    src: "/images/city-skyline-dusk.jpg",
    alt: "The City of London skyline at dusk, with St Paul's Cathedral in view",
  },
  teamDeskDashboards: {
    src: "/images/team-desk-dashboards.jpg",
    alt: "A team reviewing project dashboards together at a desk",
  },
  londonOfficeDevelopers: {
    src: "/images/london-office-developers.jpg",
    alt: "Developers working at desks in a London office overlooking Tower Bridge and the Shard",
  },
} as const satisfies Record<string, Img>;

export const howden = {
  slug: "howden-hyperion-x",
  eyebrow: "Transformation portfolio",
  headline: "Turning fragmented insurance data into a trusted platform for decisions across Employee Benefits, Actuarial and Broking.",
  role: "Business Analyst (BI & Data)",
  company: "Howden Group / Hyperion X (HX) InsurTech",
  dates: "June – November 2020",
  seo: {
    title: "Business Analyst (BI & Data) — Howden Group / Hyperion X (HX) InsurTech",
    description:
      "BI and data business analysis for Howden Group / Hyperion X (HX): Employee Benefits data analytics, an Actuarial Cube and a Broker Data Platform with dashboarding, June to November 2020.",
  },
} as const;

export const stats: Stat[] = [
  { value: "3", label: "Engagements" },
  { value: "10+", label: "Data sources" },
  { value: "60", label: "Dashboards monitored" },
];

export const caseStudies: CaseStudyContent[] = [
  {
    id: "employee-benefits",
    title: "Employee Benefits Data Analytics",
    focus: ["Policy Admin", "Claims", "Finance"],
    challenge: "Benefits data sat across HR systems, Salesforce and custom platforms, with no unified view or reference data standards.",
    actions: [
      { verb: "Defined", text: "the data platform design and data model with architecture and technology teams." },
      { verb: "Established", text: "the MDM and RDM approach." },
      {
        verb: "Delivered",
        text: "a unified view by mapping internal sources with public datasets (Gender Pay Gap, Companies House, ONS).",
      },
      { verb: "Led", text: "stakeholder workshops and coordinated vendors and third-party data suppliers." },
      { verb: "Enabled", text: "insight through wireframes and analytics built on Salesforce data." },
    ],
    stack: ["Azure Data Factory", "MS SQL MDS", "Salesforce", "Reltio", "SQL Server", "Power BI"],
    figure: {
      src: "/images/howden/workshop-data-to-decisions.jpg",
      alt: "A business analyst presenting a data flow from ingest to impact to colleagues in a meeting room",
      width: 876,
      height: 570,
      caption: "Illustrative visual — not a client system or screenshot.",
    },
  },
  {
    id: "actuarial-cube",
    title: "Actuarial Cube & Metric Standardisation",
    focus: ["Actuarial", "Capital Modelling", "Premiums", "Claims"],
    challenge: "Premium and claims triangulation was manual and Excel-based.",
    actions: [
      { verb: "Transformed", text: "manual triangulation into an automated SSAS process." },
      { verb: "Established", text: "a central Actuarial Cube as the single source for key metrics." },
      { verb: "Extended", text: "the cube across multiple sources (Leader, Risk Code, Division, Broker, Underwriter)." },
      { verb: "Enabled", text: "a follow-market strategy." },
      { verb: "Served", text: "as SME on actuarial triangulation." },
    ],
    stack: ["SSAS", "SQL Server", "Excel"],
  },
  {
    id: "broker-data-platform",
    title: "Broker Data Platform & Dashboarding",
    focus: ["Policy", "Claims", "Finance", "User Auth"],
    challenge: "Howden Germany’s data lived in a legacy Firebird system (Assfinet AMS), isolated from Group reporting.",
    actions: [
      { verb: "Delivered", text: "policy and claims ingestion into the central EDW on Azure Data Lake using ADF." },
      { verb: "Established", text: "MDM rules with Data Stewards." },
      { verb: "Enabled", text: "Group and Howden Germany with key metrics in a central dashboard." },
      { verb: "Introduced", text: "a Power BI usage dashboard covering 60 Qlik and Angular dashboards." },
      { verb: "Bridged", text: "business users in Germany, UK teams and offshore technology teams." },
    ],
    stack: ["Azure Data Factory", "Databricks", "SQL Server", "MDS", "Power BI"],
    image: images.skyline,
  },
];

export const capabilities: string[] = [
  "Data Platform Design",
  "MDM / RDM",
  "Actuarial Analytics",
  "ETL / ELT",
  "Stakeholder Workshops",
  "BI Dashboarding",
];

export const cta = {
  title: "Let’s discuss your data challenge",
  text: "Speak with J & J Consulting about data platforms, master data, analytics and dashboarding.",
  label: "Talk to Us",
} as const;
