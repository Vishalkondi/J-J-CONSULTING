/** Copy for the /services page sections. Service names, descriptions and capabilities live in data/site.ts (`services`). */

export const servicesHero = {
  label: "Services",
  title: ["Technology, consulting", "and talent that move", "businesses forward."],
  intro:
    "We help organizations modernize their technology, sharpen how they operate, find the specialists they need and build the capabilities to compete in a rapidly changing digital world.",
};

export const servicesIntro = {
  label: "Our services",
  title: ["Five disciplines.", "One partner."],
  text: "From technology and management consultancy to specialist recruitment, technology training and workforce resourcing, J & J Consulting brings together the expertise organizations need to build scalable, resilient and future-ready businesses.",
};

/** Editorial line shown under each service title, keyed by service slug. */
export const serviceHeadlines: Record<string, string> = {
  "it-consultancy": "Technology that solves real business problems.",
  "management-consultancy": "Strategy that becomes operational change.",
  recruitment: "The right people for the work that matters.",
  "technology-training": "Build teams ready for what comes next.",
  "workforce-solutions": "Capacity where and when the work needs it.",
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
  tagline: "Empowering organizations to harness the transformative power of data and AI through expert consulting and training services.",
  name: "Naval Yemul",
  role: "CEO & Founder",
  photo: "/images/team/naval-yemul.png",
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
    },
    {
      title: "Consulting",
      lead: "Accelerate your data & AI initiatives.",
      text: "Expert guidance in data engineering, analytics and AI, from cloud migration and data lakehouse implementation to modern analytics, with end-to-end support aligned to your goals.",
    },
  ],
  /** Figures as published on thedatamaster.in. */
  stats: [
    { value: "10+", label: "Projects successfully completed", note: "Corporate training and consulting engagements delivered by Data Master." },
    { value: "50+", label: "Professionals trained in one session", note: "Databricks Learning Festival, November 2023." },
  ],
  /** "Your Trusted Partner in Data Transformation", thedatamaster.in. Photo: Unsplash (Unsplash License), as used on that site. */
  trusted: {
    title: "Your trusted partner in data transformation.",
    text: "With years of experience in data science and AI implementation, Data Master brings proven methodologies and real-world expertise to help organizations succeed in the data-driven economy.",
    photo: "/images/partners/data-master-team-desk.jpg",
    alt: "Two engineers working at desks with code on screen",
    points: [
      { title: "Proven results", text: "A track record of successful implementations across various industries." },
      { title: "Expert team", text: "Certified data scientists and AI specialists with industry experience." },
      { title: "Customized approach", text: "Tailored solutions that fit each organization’s specific needs and goals." },
    ],
  },
  /** Microsoft Training Services Partner, as stated on thedatamaster.in. */
  microsoft: {
    title: "Microsoft Training Services Partner",
    text: "Data Master Consulting Pvt. Ltd. is a Microsoft-certified training partner, empowering organizations to build future-ready teams with cutting-edge technical skills.",
    stack: ["Azure", "Azure Data Engineering", "Azure Databricks", "Microsoft Fabric", "Power BI", "Power Platform", "AI Foundry", "Copilot", "Microsoft Purview"],
    points: ["Hands-on, expert-led training", "Microsoft-certified curriculum", "Enterprise-ready skill development"],
  },
  coFounder: {
    name: "Priyanka Yemul",
    role: "Co-Founder, Head of Digital Marketing & Talent Acquisition",
    photo: "/images/team/priyanka-yemul.png",
    bio: "Shapes Data Master’s brand identity and talent strategy, bringing a strong background in digital marketing and human capital management.",
  },
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
