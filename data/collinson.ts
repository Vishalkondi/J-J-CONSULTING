/**
 * Collinson Group — Senior Business Analyst, May 2017 – October 2018.
 * Source: the supplied programme brief. Only stated facts are used (role, period, two programmes with value/team,
 * 95+ client data connections, business areas, technology). Scope themes shown in the brief's image scenes
 * (client onboarding, data lake formats, cloud migration, Solvency II reporting detail, reconciliation) are NOT
 * published until confirmed as delivered scope. No outcomes are claimed.
 */
export const collinson = {
  slug: "collinson-group",
  client: "Collinson Group",
  logo: "/images/collinson-logo.png",
  eyebrow: "Selected project experience",
  title: "Business & Systems Transformation and Data Strategy",
  role: "Senior Business Analyst",
  period: "May 2017 – October 2018",
  statement:
    "Business analysis across two programmes for a global travel insurance and assistance business: business and systems transformation with a data strategy, and Solvency II regulatory compliance.",
  programmes: [
    {
      title: "Business & Systems Transformation + Data Strategy",
      value: "£1.5M",
      team: "14 people",
      note: "95+ client data connections",
    },
    { title: "Solvency II Regulatory Compliance", value: "£0.5M", team: "4 people", note: null },
  ],
  domains: [
    "Travel Insurance",
    "Assistance",
    "Policy Administration",
    "Claims",
    "Finance",
    "Underwriting",
    "Actuarial",
    "Regulatory Reporting",
  ],
  technology: [
    "SAP",
    "Alteryx",
    "Microsoft Azure Data Lake",
    "Tableau",
    "Nordic",
    "Magenta",
    "Leo",
    "Actisure",
    "Gravitas",
    "SQL Server",
    "Excel",
    "Invoke Software",
    "AWS",
  ],
  seo: {
    title: "Senior Business Analyst — Business & Systems Transformation and Data Strategy | Collinson Group",
    description:
      "Senior Business Analyst on two Collinson Group programmes, May 2017 – October 2018: business and systems transformation with data strategy (£1.5M, 14 people) and Solvency II regulatory compliance (£0.5M, 4 people).",
  },
} as const;
