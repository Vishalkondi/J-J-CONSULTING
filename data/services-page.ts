/** Copy for the /services page sections. Service names, descriptions and capabilities live in data/site.ts (`services`). */

export const servicesHero = {
  label: "Services",
  title: ["Technology, consulting", "and talent that move", "businesses forward."],
  intro:
    "We help organizations modernize their technology, sharpen how they operate, find the specialists they need and build the capabilities to compete in a rapidly changing digital world.",
  /**
   * Per-page overrides for the figures under the hero, keyed by `stats` label in data/site.ts. /services shows
   * 10+ years of professional experience (client instruction, 2026-10-06); the home page and /experience keep 25+.
   */
  statOverrides: { "Years of professional experience": { value: 10 } } as Record<string, { value: number }>,
};

export const servicesIntro = {
  label: "Our services",
  title: ["Five disciplines.", "One partner."],
  text: "From technology and management consultancy to specialist recruitment, technology training and workforce resourcing, J & J Consulting brings together the expertise organizations need to build scalable, resilient and future-ready businesses.",
};

export const why = {
  label: "Why J & J Consulting",
  title: ["Technology expertise.", "Business understanding.", "Practical execution."],
  items: [
    { title: "Strategy", text: "Understand the business challenge before choosing the answer." },
    { title: "Technology", text: "Choose the right modern technology for the organization’s reality." },
    { title: "Implementation", text: "Turn strategy into working solutions and dependable operations." },
    { title: "Enablement", text: "Develop the people and internal capability to sustain the change." },
  ],
};

export const approach = {
  label: "Our approach",
  title: "From ambition to execution.",
  steps: [
    { title: "Discover", verb: "Understand" },
    { title: "Design", verb: "Architect" },
    { title: "Build", verb: "Implement" },
    { title: "Enable", verb: "Train" },
    { title: "Transform", verb: "Optimize" },
  ],
};

export const ecosystem = {
  label: "Technology",
  title: "The technologies behind modern businesses.",
};

/**
 * Founder of Data Master Consulting Pvt Ltd, a J & J delivery partner (see deliveryNetwork in data/site.ts).
 * Bio and highlights as supplied for thedatamaster.in; photo from thedatamaster.in.
 * For an HD logo, save it to /public/images/partners/data-master-logo.png and set `logo` below.
 */
export const trainingPartner = {
  label: "Training & delivery partner",
  company: "Data Master Consulting Pvt Ltd",
  website: "https://www.thedatamaster.in/",
  location: "Solapur, India",
  /** Contact details and social links as published on thedatamaster.in (Contact page and site footer). */
  contact: { email: "naval@thedatamaster.in", phone: "+91 96897 77700", tel: "+919689777700" },
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/naval-yemul-a5803523" },
    { label: "YouTube", href: "https://www.youtube.com/@thedatamaster" },
    { label: "Instagram", href: "https://www.instagram.com/data_master_consulting" },
  ],
  tagline: "Empowering organizations to harness the transformative power of data and AI through expert consulting and training services.",
  name: "Naval Yemul",
  role: "CEO & Founder",
  photo: "/images/team/naval-yemul.jpg",
  /** Set to "/images/partners/data-master-logo.png" once the HD lockup is saved there (null avoids a 404 until then). */
  logo: null as string | null,
  mark: "/images/partners/data-master-mark.png",
  bio: "With over 8 years of hands-on experience in the data industry, Naval leads Data Master with a deep passion for teaching and innovation in data engineering, analytics and AI.",
  highlights: ["Microsoft Certified Trainer", "Certified Databricks Instructor", "Azure & Databricks Expert", "Global Corporate Trainer"],
  /** "Who we are", thedatamaster.in/#about. */
  about:
    "Data Master Consulting Pvt Ltd is a data & AI solutions provider dedicated to empowering organizations and professionals to thrive in an increasingly intelligent, data-driven world, delivering transformative learning experiences and end-to-end services that bridge today’s challenges and tomorrow’s opportunities.",
  pillars: [
    {
      title: "Corporate Training",
      lead: "Upskill your teams with data & AI expertise.",
      text: "Expert-led programmes in data engineering, data analytics and data science, using Power BI, Azure data engineering, Microsoft Fabric, Databricks, Snowflake, Azure Data Factory, Synapse, Python, SQL, AWS, GCP and generative AI.",
      image: { src: "/images/partners/campaign/bus-shelter.jpg", alt: "Data Master Consulting training poster at a city bus shelter" },
    },
    {
      title: "Consulting",
      lead: "Accelerate your data & AI initiatives.",
      text: "Expert guidance in data engineering, analytics and AI, from cloud migration and data lakehouse implementation to modern analytics, with end-to-end support aligned to your goals.",
      image: { src: "/images/partners/campaign/billboard-day.jpg", alt: "Data Master Consulting billboard above a city road" },
    },
  ],
  /** Figures as published on thedatamaster.in. */
  stats: [
    {
      value: "10+",
      label: "Projects successfully completed",
      note: "Corporate training and consulting engagements delivered by Data Master.",
    },
    { value: "50+", label: "Professionals trained in one session", note: "Databricks Learning Festival, November 2023." },
  ],
  /** "Your Trusted Partner in Data Transformation", thedatamaster.in. Image: Data Master campaign poster (concept visual). */
  trusted: {
    title: "Your trusted partner in data transformation.",
    text: "With years of experience in data science and AI implementation, Data Master brings proven methodologies and real-world expertise to help organizations succeed in the data-driven economy.",
    photo: "/images/partners/campaign/ideas-into-impact.jpg",
    alt: "Data Master Consulting “Ideas into Impact” campaign poster",
    points: [
      { title: "Proven results", text: "A track record of successful implementations across various industries." },
      { title: "Expert team", text: "Certified data scientists and AI specialists with industry experience." },
      { title: "Customized approach", text: "Tailored solutions that fit each organization’s specific needs and goals." },
    ],
  },
  /**
   * "Specialized Databricks Consulting", copy as published on thedatamaster.in (Consulting page). Photo: the one that page
   * uses — Unsplash photo-1551434678-e076c223a692 (Unsplash License). The "10+ projects" figure is Data Master's own (see `pending`).
   */
  databricks: {
    label: "Databricks consulting",
    /** Official Databricks logo (Wikimedia Commons File:Databricks-logo.svg) rearranged side by side, lettering recoloured white for the dark section. */
    logo: { src: "/images/partners/databricks-lockup-white.svg", w: 134.204, h: 20.84 },
    title: "Specialized Databricks Consulting",
    text: "End-to-end Databricks consulting specializing in data engineering, data analytics, machine learning, and governance using the Databricks platform.",
    heading: "Our Databricks Expertise",
    items: [
      {
        icon: "engineering",
        title: "Data Engineering on Databricks",
        text: "Build scalable data pipelines with Delta Lake, Unity Catalog, and advanced Spark optimization techniques.",
      },
      {
        icon: "ml",
        title: "Machine Learning & MLOps",
        text: "Implement end-to-end ML workflows with MLflow, AutoML, and feature engineering best practices.",
      },
      {
        icon: "governance",
        title: "Governance & Security",
        text: "Establish comprehensive data governance with Unity Catalog, security policies, and compliance frameworks.",
      },
    ],
    photo: "/images/partners/databricks-team.jpg",
    alt: "Two engineers working at desks with code on their screens",
    stat: { value: "10+ Projects", label: "Databricks implementations" },
  },
  /** Microsoft Training Services Partner, as stated on thedatamaster.in; badge is the image that site shows (/assets/microsoftPartner-*.png). */
  microsoft: {
    badge: "/images/partners/microsoft-partner.png",
    title: "Microsoft Training Services Partner",
    text: "Data Master Consulting Pvt. Ltd. is a Microsoft-certified training partner, empowering organizations to build future-ready teams with cutting-edge technical skills.",
    stack: [
      "Azure",
      "Azure Data Engineering",
      "Azure Databricks",
      "Microsoft Fabric",
      "Power BI",
      "Power Platform",
      "AI Foundry",
      "Copilot",
      "Microsoft Purview",
    ],
    points: ["Hands-on, expert-led training", "Microsoft-certified curriculum", "Enterprise-ready skill development"],
  },
  /**
   * Brand identity panel (AI-generated concept visuals, supplied 2026-10-05; labelled "concept visuals" on the page).
   * Other visuals sit with their content: pillars[].image, trusted.photo, programmesImage; the signage is the /services hero.
   * Originals and what wasn't used: assets-source/README.txt. Slogans are unconfirmed — see `pending`.
   */
  brand: [
    {
      src: "/images/partners/data-master-logo-3d.jpg",
      alt: "Data Master Consulting logo as a dimensional metal mark",
      label: "Identity",
      title: "The mark",
      text: "A cloud, a database and a gear: data, platforms and engineering in one symbol.",
    },
    {
      src: "/images/partners/data-master-brand-desk.jpg",
      alt: "Data Master Consulting branding on a notebook, mug, laptop and business cards",
      label: "Stationery",
      title: "Everyday touchpoints",
      text: "Notebooks, cards and devices carry the same mark and blue palette.",
    },
    {
      src: "/images/partners/campaign/office.jpg",
      alt: "Data Master Consulting signage in an office",
      label: "Workplace",
      title: "In the space",
      text: "Signage that brings the identity into the places where teams work.",
      position: "object-[78%_center]", // keep the wall sign (right of frame) in view
    },
  ],
  /** Brochure cover (cropped: the inside pages carry invented figures), shown beside the training programmes. */
  programmesImage: { src: "/images/partners/campaign/brochure-cover.jpg", alt: "Data Master Consulting brochure cover" },
  event: {
    photo: "/images/partners/databricks-learning-festival.jpg",
    alt: "Professionals gathered after a Databricks Learning Festival training session led by Naval Yemul",
    date: "November 2023",
    text: "Naval Yemul led a corporate training session at the Databricks Learning Festival, attended by more than 50 professionals from around the globe.",
  },
};

export const servicesCta = {
  label: "Start a conversation",
  title: ["Let’s build what", "comes next."],
  text: "Whether you are modernizing a platform, adopting AI, reshaping operations or building a technology team, we are ready to help.",
};

/** Data Master's training programmes, as listed on thedatamaster.in. */
export const partnerProgrammes = [
  {
    title: "Data Engineering",
    text: "Modern data pipelines, ETL processes and cloud-based data architectures for robust data infrastructure.",
    items: ["Azure Data Factory & Synapse", "Databricks & Apache Spark", "Python & SQL Optimization"],
  },
  {
    title: "Data Analytics",
    text: "Turning raw data into actionable insights with advanced analytics tools and business intelligence platforms.",
    items: ["Power BI & Advanced DAX", "Statistical Analysis", "Data Visualization"],
  },
  {
    title: "Data Science",
    text: "Predictive models and machine learning solutions that drive business innovation and decision-making.",
    items: ["Machine Learning Algorithms", "Generative AI Solutions", "MLOps & Model Deployment"],
  },
];
