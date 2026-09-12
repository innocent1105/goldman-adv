export type Language = "en" | "fr";

export type NavMeta = {
  title: string;
  description: string;
  bullets: string[];
  cta: string;
};

export type Slide = {
  kicker: string;
  tagline: string;
};

export type Card = {
  title: string;
  body: string;
};

export type Duel = {
  title: string;
  body: string;
};

export type PageMeta = {
  eyebrow: string;
  heading: string;
  body: string;
  cta: string;
};

export type Translations = {
  navItems: NavMeta[];
  nav: { talk: string; langLabel: string };
  hero: {
    eyebrow: string;
    headline: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    primaryCta: string;
  };
  slides: Slide[];
  stats: Duel[];
  home: {
    whatTitle: string;
    whatSub: string;
    learnMore: string;
    purposeEyebrow: string;
    purposeHeading: string;
    purposeBody: string;
    values: string[];
    contactEyebrow: string;
    contactHeading: string;
    contactBody: string;
    contactName: string;
    contactOrg: string;
    contactEmail: string;
    contactMessage: string;
    contactSubmit: string;
    contactSuccess: string;
  };
  pages: {
    approach: PageMeta & { cards: Card[] };
    financial: PageMeta & { sectorsEyebrow: string; sectors: string[]; practices: Card[] };
    public: PageMeta & { items: Card[] };
    ai: PageMeta & { priorities: Card[]; matrixEyebrow: string; matrix: Card[] };
    asset: PageMeta & { classes: string[] };
    development: PageMeta & { pillars: Card[]; heavyEyebrow: string; heavy: Card[] };
  };
  footer: {
    about: string;
    expertise: string;
    company: string;
    stayInformed: string;
    stayInformedBody: string;
    subscribe: string;
    emailPlaceholder: string;
    subscribed: string;
    companyLinks: string[];
    contactHeading: string;
    address: string;
    backToTop: string;
    legal: string;
    tagline: string;
    langLabel: string;
  };
  notFound: {
    code: string;
    heading: string;
    body: string;
    home: string;
  };
  titles: {
    home: string;
    approach: string;
    financial: string;
    public: string;
    ai: string;
    asset: string;
    development: string;
  };
};

const en: Translations = {
  navItems: [
    {
      title: "Approach",
      description:
        "We act as if we have skin in the game — advisory milestones tied to the enterprise value we help create.",
      bullets: [
        "Value creation over deck creation",
        "Risk-adjusted decision making",
        "Long-term alignment and operational execution",
      ],
      cta: "Explore the approach",
    },
    {
      title: "Financial",
      description:
        "M&A, capital markets, restructuring and specialised advisory backed by deep local relationships.",
      bullets: [
        "M&A and strategic advisory",
        "Capital markets and structuring",
        "Restructuring and liability management",
      ],
      cta: "Explore financial consulting",
    },
    {
      title: "Public Sector",
      description:
        "Funding the infrastructure communities live on — government, royal establishment and PPP.",
      bullets: [
        "Government, provincial and local finance",
        "Power, utilities and environmental services",
        "Housing, sports and PPP initiatives",
      ],
      cta: "Explore public sector",
    },
    {
      title: "AI & ICT",
      description:
        "Technology as a driver of returns, not an operating expense — a dual consultant and investor lens.",
      bullets: [
        "Data moats and compute economics",
        "Enterprise architecture integration",
        "Regulatory compliance and AI safety",
      ],
      cta: "Explore AI & ICT",
    },
    {
      title: "Asset Management",
      description:
        "Investment solutions for pension funds, endowments, insurers, corporates and family offices.",
      bullets: [
        "Equities and fixed income",
        "Real assets and alternatives",
        "Technology and development investments",
      ],
      cta: "Explore asset management",
    },
    {
      title: "Development",
      description:
        "Development, EPC and project management with an investor's mindset, powered by AI and 7D BIM.",
      bullets: [
        "Venture investing in construction technology",
        "Macro infrastructure and PPP delivery",
        "EPC digital transformation and agentic AI",
      ],
      cta: "Explore development",
    },
  ],
  nav: {
    talk: "Talk to us",
    langLabel: "Language",
  },
  hero: {
    eyebrow: "Member of the Goldman Insurance Group of Companies",
    headline: "A principal investor mentality, brought to consulting.",
    sub: "Goldman Advisors & Investors advises with skin-in-the-game accountability — focused on value, capital efficiency, long-term asset performance and risk mitigation — because we are also principal deal, technology, development and asset investors.",
    ctaPrimary: "Talk to us",
    ctaSecondary: "The Goldman approach",
    primaryCta: "Explore our capabilities",
  },
  slides: [
    {
      kicker: "Principal investor advisory",
      tagline: "Skin-in-the-game consulting across Zambia and Africa.",
    },
    {
      kicker: "Financial consulting",
      tagline: "M&A, capital markets, restructuring and specialised advisory.",
    },
    { kicker: "Public sector & PPP", tagline: "Funding the infrastructure communities live on." },
    { kicker: "AI & ICT", tagline: "Technology as a driver of returns, not an operating expense." },
    {
      kicker: "Asset management",
      tagline: "Investment solutions for institutions, corporates and family offices.",
    },
    {
      kicker: "Development & EPC",
      tagline: "Delivering infrastructure with an investor's mindset.",
    },
  ],
  stats: [
    { title: "Principal", body: "Investor mentality" },
    { title: "4", body: "Operating companies" },
    { title: "7", body: "Core values" },
    { title: "Africa", body: "Zambia and beyond" },
  ],
  home: {
    whatTitle: "What we do",
    whatSub:
      "Six practices built around one idea: act as a principal, and make clients the owners of their outcomes.",
    learnMore: "Learn more",
    purposeEyebrow: "Purpose & Values",
    purposeHeading: "Helping clients advance the public good in the communities they serve.",
    purposeBody:
      "We partner with government, cooperatives and businesses large and small to make their vision, goals and operations 21st-century sustainable, resilient and meaningful to their stakeholders. In a changing world, ingenuity, sustainability and resourcefulness are our lens to a brighter future for Zambia and Africa's peoples.",
    values: [
      "Excellence",
      "Trust",
      "Holistic approach",
      "Inclusion and equity",
      "Collaboration",
      "Innovation",
      "Sustainable, resilient growth",
    ],
    contactEyebrow: "Contact",
    contactHeading: "Start with the outcome, not the mandate.",
    contactBody:
      "Tell us what you are building, funding or restructuring. We will tell you plainly where the value is, what it will cost and whether we would put our own capital behind it.",
    contactName: "Full name",
    contactOrg: "Organisation",
    contactEmail: "Email address",
    contactMessage: "What are you working on?",
    contactSubmit: "Send enquiry",
    contactSuccess: "Thank you — your enquiry has been received.",
  },
  pages: {
    approach: {
      eyebrow: "The Goldman Advisory Approach",
      heading: "We act as if we have skin in the game.",
      body: "Not theoretical external helpers — an advisor whose success is tied to the enterprise value it helps create.",
      cta: "Talk to our advisors",
      cards: [
        {
          title: "Value Creation over Deck Creation",
          body: "Tangible top-line sustainable growth, margin expansion and risk mitigation instead of comprehensive consulting slide decks.",
        },
        {
          title: "Risk-Adjusted Decision Making",
          body: "Data-driven strategic pragmatism and 80/20 solutions over exhaustive, theoretical perfection.",
        },
        {
          title: "Long-Term Alignment",
          body: "Advisory milestones tied to enterprise value and the client's ultimate exit or cash-flow realisation, with growth-fee deal participation.",
        },
        {
          title: "Operational Execution",
          body: "Private equity-style commercial deep-dives to diagnose bottlenecks, with strict capital-allocation discipline on every budget and timeline.",
        },
      ],
    },
    financial: {
      eyebrow: "Financial Consulting",
      heading: "Trusted advice on the matters that decide enterprise value.",
      body: "We advise leaders of businesses and governments on their most important financial and strategic matters, with meaningful local relationships and depth of expertise across sectors and geographies.",
      cta: "Talk to our advisors",
      sectorsEyebrow: "Transaction advisory sectors",
      sectors: [
        "Consumer and Retail",
        "Financial Institutions",
        "Financial Sponsors",
        "Healthcare",
        "Industrials",
        "Media, Entertainment & Sports",
        "Power, Energy and Infrastructure",
        "Real Estate, Gaming and Lodging",
        "Technology",
        "Telecom & Digital Infrastructure",
      ],
      practices: [
        {
          title: "M&A and Strategic Advisory",
          body: "Independent advice to corporate, cooperative and royal establishment clients on mergers, buy-side acquisitions, sell-side divestitures, joint ventures and partnerships — often investing alongside in the ultimate M&A entity.",
        },
        {
          title: "Capital Markets Advisory",
          body: "A hub of expertise on public and private capital markets, capital structure and ESG — growth capital raising, equity, debt and private capital advisory informed by sophisticated data analytics.",
        },
        {
          title: "Restructuring & Liability Management",
          body: "Pioneering liability management with both out-of-court and in-court restructuring representation.",
        },
        {
          title: "Specialized Advisory Practice",
          body: "Strategic and geopolitical risk advice for sovereigns and governments, restructuring direct and contingent liabilities while capturing growth opportunities.",
        },
      ],
    },
    public: {
      eyebrow: "Government, Royal Establishment & PPP",
      heading: "Funding the infrastructure communities live on.",
      body: "Financeable structures, balance-sheet optimisation and bankable delivery for public purpose projects across Zambia and Africa.",
      cta: "Talk to our advisors",
      items: [
        {
          title: "National, Provincial & Local Government",
          body: "Strategies that secure funding for community improvements and ensure ongoing sustainability of what clients plan, finance and operate.",
        },
        {
          title: "Higher Education",
          body: "Master planning and financing of student, faculty and staff housing, labs, ICT and green utility infrastructure, technology hubs and sports facilities.",
        },
        {
          title: "Healthcare",
          body: "Research, lab, general and specialised providers and health insurers — protecting financial well-being in a fast-changing sector.",
        },
        {
          title: "Transportation & Logistics",
          body: "Financing for communities and ground, air and rail transportation entities and developers building connections.",
        },
        {
          title: "K-12 Schools",
          body: "Helping private and government schools meet expanding demand for enabling technologies and facilities against scarce resources.",
        },
        {
          title: "Power",
          body: "Solar, wind, waste-to-energy, hydro, green natural gas and geothermal generation, plus trunk and micro-grid transmission, AI SCADA, billing and distribution.",
        },
        {
          title: "Environmental Utilities",
          body: "Water, waste water, sewage treatment and waste-to-energy solutions that are financeable, meet global best practice and optimise customer rates.",
        },
        {
          title: "Special District & Chiefdom Management",
          body: "Creation and management of special government and chiefdom taxing districts, local government and redevelopment agency entities.",
        },
        {
          title: "Revolving Capital Funds",
          body: "Self-replenishing pools where repayments, interest and cost savings are recycled to finance new provincial, district and chiefdom projects.",
        },
        {
          title: "Housing, Sports & PPP Initiatives",
          body: "Strategic planning, balance sheet optimisation, utility technology selection and bankable financial structures for public purpose projects.",
        },
      ],
    },
    ai: {
      eyebrow: "Goldman AI & ICT",
      heading: "Technology as a driver of returns, not an operating expense.",
      body: "A dual-lens framework: as a consultant we integrate models into enterprise workflows to unlock efficiency and new revenue lines; as an investor we test for defensible moats, data ownership and compute economics — never a thin wrapper over someone else's infrastructure.",
      cta: "Talk to our advisors",
      priorities: [
        {
          title: "Data Moats",
          body: "Prioritise businesses with exclusive, proprietary datasets — public data no longer offers a competitive edge for model training.",
        },
        {
          title: "Compute Economics",
          body: "Track token costs, inference efficiency and custom silicon options so margins are not consumed by cloud infrastructure expense.",
        },
        {
          title: "Architecture Integration",
          body: "Combine generative AI with traditional predictive analytics and secure cloud infrastructure for enterprise-grade solutions.",
        },
        {
          title: "Regulatory Compliance",
          body: "Strict alignment with evolving global standards on data privacy, copyright protection and AI safety legislation.",
        },
      ],
      matrixEyebrow: "Delivery matrix",
      matrix: [
        {
          title: "Value Arbitrage",
          body: "Injecting AI into underutilised ICT infrastructure and data assets to multiply market value.",
        },
        {
          title: "Tech-Stack Due Diligence",
          body: "Software architecture, technical debt and data readiness assessed before capital deployment.",
        },
        {
          title: "Scalability Engineering",
          body: "Architectures that support 10x growth without a linear increase in operating cost.",
        },
        {
          title: "Risk Mitigation",
          body: "Data privacy, cybersecurity vulnerability and AI model drift treated as core portfolio risks.",
        },
        {
          title: "Training",
          body: "Lifting every level of an organisation's ability to be innovative with agentic AI tools and platforms.",
        },
      ],
    },
    asset: {
      eyebrow: "Asset Management",
      heading:
        "Investment solutions for pension funds, endowments, insurers, corporates and family offices.",
      body: "Products across a broad spectrum of asset classes, designed for different client types. Our traditional and alternative services cover listed equity and fixed income, REITs and other real estate, as well as technology and development related investments.",
      cta: "Talk to our advisors",
      classes: [
        "Equities",
        "Fixed Income",
        "Real Assets",
        "Technology & IP",
        "Multi-Assets",
        "Alternatives",
      ],
    },
    development: {
      eyebrow: "Development Company",
      heading: "Development, EPC and project management with an investor's mindset.",
      body: "We team with leading global enterprises to deliver advisory services and development investments — using AI, ICT infrastructure and venture investing to transform asset classes in Zambia and across Africa.",
      cta: "Talk to our advisors",
      pillars: [
        {
          title: "Investor Lens",
          body: "A venture arm targeting contech, early-stage AI and robotics — including 7D Building Information Modeling — treating technology as an investable asset class rather than a software cost.",
        },
        {
          title: "Macro Infrastructure",
          body: "Partnered on the Solwezi-Kolwezi Interconnector PPP: 500MW solar, 150MW waste-to-energy, high-speed data cable and a 2,800-hectare MFEZ hosting AI factories, data centres and a critical minerals cluster.",
        },
        {
          title: "Consultant Lens",
          body: "EPC digital transformation founded on 7D BIM and agentic AI frameworks that mine thousands of pages of engineering manuals in minutes to maximise delivery speed, quality and cost optimisation.",
        },
      ],
      heavyEyebrow: "Heavy industry, mining, utilities and grid systems",
      heavy: [
        {
          title: "Unstructured Data Dissection",
          body: "Multi-agent systems map the engineering-to-procurement value chain and pinpoint hidden breakdown causes in minutes.",
        },
        {
          title: "Autonomous Earthworks",
          body: "Drone terrain surveys and live payload data dynamically alter haul routes, boosting earthmoving efficiency by up to 40%.",
        },
        {
          title: "Continuous Asset Reasoning",
          body: "24/7 probabilistic forecasting against infrastructure constraints, asset standards and environmental regulation.",
        },
        {
          title: "Enforceable Guardrails",
          body: "Every automated action leaves an unalterable trace; critical anomalies route an evidence pack to a human supervisor for sign-off.",
        },
        {
          title: "Gigawatt-Scale AI Factories",
          body: "Modularised AI factory delivery in Zambia and across Africa using platforms such as Omniverse.",
        },
        {
          title: "Procurement Intelligence",
          body: "Agents balance live supplier capacity and material pricing against geopolitical risk to protect speed-to-market.",
        },
      ],
    },
  },
  footer: {
    about:
      "A member of the Goldman Insurance Group of Companies. Principal investor mentality applied to advisory, technology and development across Zambia and Africa.",
    expertise: "Expertise",
    company: "Company",
    stayInformed: "Stay informed",
    stayInformedBody: "Occasional insight on markets, infrastructure and technology. No spam.",
    subscribe: "Subscribe",
    emailPlaceholder: "Email address",
    subscribed: "Thank you for subscribing.",
    companyLinks: [
      "Home",
      "Approach",
      "Purpose & Values",
      "Financial",
      "Public Sector",
      "AI & ICT",
      "Asset Management",
      "Development",
      "Contact",
    ],
    contactHeading: "Contact",
    address: "Lusaka, Zambia",
    backToTop: "Back to top",
    legal: "All rights reserved.",
    tagline: "Ingenuity · Sustainability · Resourcefulness",
    langLabel: "Language",
  },
  notFound: {
    code: "404",
    heading: "Page not found",
    body: "The page you're looking for doesn't exist or has been moved.",
    home: "Go home",
  },
  titles: {
    home: "Goldman Advisors & Investors | Principal Investor Advisory",
    approach: "Our Approach | Goldman Advisors & Investors",
    financial: "Financial Consulting | Goldman Advisors & Investors",
    public: "Public Sector & PPP | Goldman Advisors & Investors",
    ai: "AI & ICT | Goldman Advisors & Investors",
    asset: "Asset Management | Goldman Advisors & Investors",
    development: "Development & EPC | Goldman Advisors & Investors",
  },
};

const fr: Translations = {
  navItems: [
    {
      title: "Approche",
      description:
        "Nous agissons comme si nous avions un intérêt dans le jeu — des jalons de conseil liés à la valeur de l'entreprise que nous aidons à créer.",
      bullets: [
        "Création de valeur avant création de présentations",
        "Prise de décision ajustée au risque",
        "Alignement à long terme et exécution opérationnelle",
      ],
      cta: "Explorer l'approche",
    },
    {
      title: "Finance",
      description:
        "Fusions-acquisitions, marchés de capitaux, restructuration et conseil spécialisé, appuyés par des relations locales solides.",
      bullets: [
        "Fusions-acquisitions et conseil stratégique",
        "Marchés de capitaux et structuration",
        "Restructuration et gestion du passif",
      ],
      cta: "Explorer le conseil financier",
    },
    {
      title: "Secteur public",
      description:
        "Financer les infrastructures sur lesquelles vivent les communautés — gouvernement, établissement royal et PPP.",
      bullets: [
        "Finances gouvernementales, provinciales et locales",
        "Énergie, services publics et environnement",
        "Logement, sport et initiatives PPP",
      ],
      cta: "Explorer le secteur public",
    },
    {
      title: "IA & TIC",
      description:
        "La technologie comme moteur de rendement, et non comme dépense d'exploitation — un double regard de consultant et d'investisseur.",
      bullets: [
        "Fossés de données et économie du calcul",
        "Intégration dans les architectures d'entreprise",
        "Conformité réglementaire et sécurité de l'IA",
      ],
      cta: "Explorer IA & TIC",
    },
    {
      title: "Gestion d'actifs",
      description:
        "Solutions d'investissement pour fonds de pension, dotations, assureurs, entreprises et family offices.",
      bullets: [
        "Actions et titres à revenu fixe",
        "Actifs réels et alternatives",
        "Investissements technologiques et de développement",
      ],
      cta: "Explorer la gestion d'actifs",
    },
    {
      title: "Développement",
      description:
        "Développement, EPC et gestion de projet avec un état d'esprit d'investisseur, propulsé par l'IA et le BIM 7D.",
      bullets: [
        "Investissement de capital-risque dans la construction",
        "Macro-infrastructures et exécution de PPP",
        "Transformation numérique EPC et IA agentique",
      ],
      cta: "Explorer le développement",
    },
  ],
  nav: {
    talk: "Discutons-en",
    langLabel: "Langue",
  },
  hero: {
    eyebrow: "Membre du groupe Goldman Insurance",
    headline: "Une mentalité d'investisseur principal, appliquée au conseil.",
    sub: "Goldman Advisors & Investors conseille avec une responsabilité « skin-in-the-game » — axée sur la valeur, l'efficacité du capital, la performance des actifs à long terme et l'atténuation des risques — car nous sommes aussi investisseurs principal dans les opérations, la technologie, le développement et les actifs.",
    ctaPrimary: "Discutons-en",
    ctaSecondary: "L'approche Goldman",
    primaryCta: "Explorer nos services",
  },
  slides: [
    {
      kicker: "Conseil en investissement principal",
      tagline: "Un conseil engagé à travers la Zambie et l'Afrique.",
    },
    {
      kicker: "Conseil financier",
      tagline: "Fusions-acquisitions, marchés de capitaux, restructuration et conseil spécialisé.",
    },
    {
      kicker: "Secteur public & PPP",
      tagline: "Financer les infrastructures sur lesquelles vivent les communautés.",
    },
    {
      kicker: "IA & TIC",
      tagline: "La technologie comme moteur de rendement, et non comme dépense d'exploitation.",
    },
    {
      kicker: "Gestion d'actifs",
      tagline: "Solutions d'investissement pour institutions, entreprises et family offices.",
    },
    {
      kicker: "Développement & EPC",
      tagline: "Livrer des infrastructures avec un état d'esprit d'investisseur.",
    },
  ],
  stats: [
    { title: "Principal", body: "Mentalité d'investisseur" },
    { title: "4", body: "Sociétés opérationnelles" },
    { title: "7", body: "Valeurs fondamentales" },
    { title: "Afrique", body: "Zambie et au-delà" },
  ],
  home: {
    whatTitle: "Ce que nous faisons",
    whatSub:
      "Six pratiques fondées sur une même idée : agir comme un principal et faire de nos clients les propriétaires de leurs résultats.",
    learnMore: "En savoir plus",
    purposeEyebrow: "Mission & Valeurs",
    purposeHeading:
      "Aider nos clients à faire progresser le bien public dans les communautés qu'ils servent.",
    purposeBody:
      "Nous travaillons avec les gouvernements, les coopératives et les entreprises, grandes et petites, pour rendre leur vision, leurs objectifs et leurs opérations durables, résilients et porteurs de sens pour leurs parties prenantes au 21e siècle. Dans un monde en mutation, l'ingéniosité, la durabilité et la débrouillardise sont notre prisme vers un avenir plus radieux pour la Zambie et les peuples d'Afrique.",
    values: [
      "Excellence",
      "Confiance",
      "Approche holistique",
      "Inclusion et équité",
      "Collaboration",
      "Innovation",
      "Croissance durable et résiliente",
    ],
    contactEyebrow: "Contact",
    contactHeading: "Commençons par le résultat, pas par le mandat.",
    contactBody:
      "Dites-nous ce que vous construisez, financez ou restructurez. Nous vous dirons clairement où se trouve la valeur, ce qu'elle coûtera et si nous engagerions notre propre capital.",
    contactName: "Nom complet",
    contactOrg: "Organisation",
    contactEmail: "Adresse e-mail",
    contactMessage: "Sur quoi travaillez-vous ?",
    contactSubmit: "Envoyer la demande",
    contactSuccess: "Merci — votre demande a bien été reçue.",
  },
  pages: {
    approach: {
      eyebrow: "L'approche de conseil Goldman",
      heading: "Nous agissons comme si nous avions un intérêt dans le jeu.",
      body: "Pas de simples experts externes — un conseiller dont le succès est lié à la valeur de l'entreprise qu'il aide à créer.",
      cta: "Parler à nos conseillers",
      cards: [
        {
          title: "Création de valeur avant création de présentations",
          body: "Une croissance durable du chiffre d'affaires, l'expansion des marges et l'atténuation des risques, plutôt que d'épais supports de consultation.",
        },
        {
          title: "Prise de décision ajustée au risque",
          body: "Un pragmatisme stratégique fondé sur les données et des solutions 80/20 plutôt qu'une perfection théorique exhaustive.",
        },
        {
          title: "Alignement à long terme",
          body: "Des jalons de conseil liés à la valeur de l'entreprise et à la réalisation ultime de la sortie ou des flux de trésorerie du client, avec participation aux honoraires de croissance.",
        },
        {
          title: "Exécution opérationnelle",
          body: "Des analyses commerciales approfondies de style capital-investissement pour diagnostiquer les goulots d'étranglement, avec une discipline stricte d'allocation du capital sur chaque budget et chaque échéance.",
        },
      ],
    },
    financial: {
      eyebrow: "Conseil financier",
      heading: "Un conseil de confiance sur les sujets qui déterminent la valeur de l'entreprise.",
      body: "Nous conseillons les dirigeants d'entreprises et de gouvernements sur leurs enjeux financiers et stratégiques les plus importants, avec des relations locales solides et une profonde expertise sectorielle et géographique.",
      cta: "Parler à nos conseillers",
      sectorsEyebrow: "Secteurs du conseil en transactions",
      sectors: [
        "Consommation et distribution",
        "Institutions financières",
        "Sponsors financiers",
        "Santé",
        "Industrie",
        "Médias, divertissement et sport",
        "Énergie et infrastructures",
        "Immobilier, jeux et hôtellerie",
        "Technologie",
        "Télécoms et infrastructures numériques",
      ],
      practices: [
        {
          title: "Fusions-acquisitions et conseil stratégique",
          body: "Conseil indépendant aux entreprises, coopératives et établissements royaux sur les fusions, les acquisitions, les cessions, les coentreprises et les partenariats — souvent en investissant aux côtés du client dans l'entité issue de l'opération.",
        },
        {
          title: "Conseil en marchés de capitaux",
          body: "Un pôle d'expertise sur les marchés de capitaux publics et privés, la structure du capital et l'ESG — levée de capitaux de croissance, conseil en actions, en dette et en capital privé appuyé par une analyse de données sophistiquée.",
        },
        {
          title: "Restructuration et gestion du passif",
          body: "Une gestion du passif pionnière avec représentation en restructuration tant extrajudiciaire que judiciaire.",
        },
        {
          title: "Pratique de conseil spécialisée",
          body: "Conseil en risques stratégiques et géopolitiques pour les souverains et les gouvernements, restructuration des passifs directs et conditionnels tout en saisissant les opportunités de croissance.",
        },
      ],
    },
    public: {
      eyebrow: "Gouvernement, Établissement royal & PPP",
      heading: "Financer les infrastructures sur lesquelles vivent les communautés.",
      body: "Des structures finançables, une optimisation du bilan et une exécution bancable pour les projets d'intérêt public à travers la Zambie et l'Afrique.",
      cta: "Parler à nos conseillers",
      items: [
        {
          title: "Gouvernements national, provinciaux et locaux",
          body: "Des stratégies qui sécurisent le financement des améliorations communautaires et assurent la pérennité de ce que les clients planifient, financent et exploitent.",
        },
        {
          title: "Enseignement supérieur",
          body: "Planification maîtresse et financement des logements étudiants, du corps professoral et du personnel, des laboratoires, des TIC et des infrastructures vertes, des pôles technologiques et des installations sportives.",
        },
        {
          title: "Santé",
          body: "Prestataires de recherche, de laboratoire, généraux et spécialisés, et assureurs santé — protection du bien-être financier dans un secteur en pleine mutation.",
        },
        {
          title: "Transports & Logistique",
          body: "Financement pour les communautés et les entités de transport terrestre, aérien et ferroviaire ainsi que les promoteurs qui créent des connexions.",
        },
        {
          title: "Écoles primaires et secondaires",
          body: "Aider les écoles privées et publiques à répondre à la demande croissante de technologies et d'installations malgré des ressources limitées.",
        },
        {
          title: "Énergie",
          body: "Solaire, éolien, valorisation énergétique des déchets, hydroélectricité, gaz naturel vert et géothermie, plus transport principal et micro-réseaux, SCADA IA, facturation et distribution.",
        },
        {
          title: "Services publics environnementaux",
          body: "Solutions d'eau, d'eaux usées, de traitement des eaux et de valorisation énergétique des déchets qui sont finançables, conformes aux meilleures pratiques mondiales et optimisent les tarifs.",
        },
        {
          title: "Gestion des districts spéciaux et des chefferies",
          body: "Création et gestion de districts fiscaux spéciaux gouvernementaux et de chefferies, d'entités de gouvernement local et d'agences de redéveloppement.",
        },
        {
          title: "Fonds de capital renouvelable",
          body: "Des fonds à reconstitution automatique où les remboursements, les intérêts et les économies sont recyclés pour financer de nouveaux projets provinciaux, de district et de chefferie.",
        },
        {
          title: "Logement, Sport et initiatives PPP",
          body: "Planification stratégique, optimisation du bilan, sélection des technologies et structures financières bancables pour les projets d'intérêt public.",
        },
      ],
    },
    ai: {
      eyebrow: "Goldman IA & TIC",
      heading: "La technologie comme moteur de rendement, et non comme dépense d'exploitation.",
      body: "Un cadre à double regard : comme consultant, nous intégrons les modèles dans les flux de travail des entreprises pour débloquer efficacité et nouvelles lignes de revenus ; comme investisseur, nous testons les fossés défendables, la propriété des données et l'économie du calcul — jamais un simple habillage sur l'infrastructure d'un tiers.",
      cta: "Parler à nos conseillers",
      priorities: [
        {
          title: "Fossés de données",
          body: "Privilégier les entreprises aux ensembles de données exclusifs — les données publiques ne confèrent plus d'avantage concurrentiel pour l'entraînement des modèles.",
        },
        {
          title: "Économie du calcul",
          body: "Suivre les coûts de jetons, l'efficacité de l'inférence et les options de silicium personnalisé pour que les marges ne soient pas absorbées par les dépenses d'infrastructure cloud.",
        },
        {
          title: "Intégration architecturale",
          body: "Combiner l'IA générative avec l'analytique prédictive traditionnelle et une infrastructure cloud sécurisée pour des solutions de niveau entreprise.",
        },
        {
          title: "Conformité réglementaire",
          body: "Alignement strict avec les normes mondiales en évolution sur la confidentialité des données, la protection des droits d'auteur et la législation sur la sécurité de l'IA.",
        },
      ],
      matrixEyebrow: "Matrice d'exécution",
      matrix: [
        {
          title: "Arbitrage de valeur",
          body: "Injection de l'IA dans les infrastructures TIC et les actifs de données sous-utilisés pour multiplier la valeur de marché.",
        },
        {
          title: "Due diligence de la pile technologique",
          body: "Architecture logicielle, dette technique et maturité des données évaluées avant le déploiement de capital.",
        },
        {
          title: "Ingénierie de l'évolutivité",
          body: "Des architectures qui soutiennent une croissance 10x sans augmentation linéaire des coûts d'exploitation.",
        },
        {
          title: "Atténuation des risques",
          body: "Confidentialité des données, cybervulnérabilités et dérive des modèles d'IA traités comme des risques de portefeuille fondamentaux.",
        },
        {
          title: "Formation",
          body: "Élever la capacité d'innovation de chaque niveau de l'organisation avec des outils et plateformes d'IA agentique.",
        },
      ],
    },
    asset: {
      eyebrow: "Gestion d'actifs",
      heading:
        "Solutions d'investissement pour fonds de pension, dotations, assureurs, entreprises et family offices.",
      body: "Des produits sur un large spectre de classes d'actifs, conçus pour différents types de clients. Nos services traditionnels et alternatifs couvrent les actions cotées et les titres à revenu fixe, les REIT et autres actifs immobiliers, ainsi que les investissements liés à la technologie et au développement.",
      cta: "Parler à nos conseillers",
      classes: [
        "Actions",
        "Titres à revenu fixe",
        "Actifs réels",
        "Technologie & PI",
        "Multi-actifs",
        "Alternatives",
      ],
    },
    development: {
      eyebrow: "Société de développement",
      heading: "Développement, EPC et gestion de projet avec un état d'esprit d'investisseur.",
      body: "Nous nous associons à de grandes entreprises mondiales pour livrer des services de conseil et des investissements de développement — en utilisant l'IA, les infrastructures TIC et l'investissement à risque pour transformer les classes d'actifs en Zambie et à travers l'Afrique.",
      cta: "Parler à nos conseillers",
      pillars: [
        {
          title: "Optique d'investisseur",
          body: "Un bras de capital-risque ciblant la technologie de la construction, l'IA précoce et la robotique — y compris la modélisation des informations du bâtiment 7D — traitant la technologie comme une classe d'actifs investissable plutôt que comme un coût logiciel.",
        },
        {
          title: "Macro-infrastructures",
          body: "Partenariat sur le PPP de l'interconnexion Solwezi-Kolwezi : 500 MW de solaire, 150 MW de valorisation énergétique des déchets, un câble de données à haut débit et une ZFE de 2 800 hectares accueillant des usines d'IA, des centres de données et un pôle de minéraux critiques.",
        },
        {
          title: "Optique de consultant",
          body: "Transformation numérique EPC fondée sur le BIM 7D et des cadres d'IA agentique qui exploitent des milliers de pages de manuels d'ingénierie en quelques minutes pour maximiser la vitesse, la qualité et l'optimisation des coûts.",
        },
      ],
      heavyEyebrow: "Industrie lourde, mines, services publics et réseaux électriques",
      heavy: [
        {
          title: "Analyse des données non structurées",
          body: "Des systèmes multi-agents cartographient la chaîne de valeur de l'ingénierie à l'approvisionnement et identifient les causes cachées des pannes en quelques minutes.",
        },
        {
          title: "Terrassements autonomes",
          body: "Les levés terrain par drone et les données de charge en direct modifient dynamiquement les itinéraires, augmentant l'efficacité du terrassement jusqu'à 40 %.",
        },
        {
          title: "Raisonnement continu sur les actifs",
          body: "Prévisions probabilistes 24/7 face aux contraintes d'infrastructure, aux normes d'actifs et à la réglementation environnementale.",
        },
        {
          title: "Garde-fous exécutoires",
          body: "Chaque action automatisée laisse une trace inaltérable ; les anomalies critiques transmettent un dossier de preuves à un superviseur humain pour approbation.",
        },
        {
          title: "Usines d'IA à l'échelle du gigawatt",
          body: "Livraison modulaire d'usines d'IA en Zambie et à travers l'Afrique à l'aide de plateformes telles qu'Omniverse.",
        },
        {
          title: "Intelligence d'approvisionnement",
          body: "Des agents équilibrent la capacité des fournisseurs et les prix des matériaux face au risque géopolitique pour protéger la rapidité de mise sur le marché.",
        },
      ],
    },
  },
  footer: {
    about:
      "Un membre du groupe Goldman Insurance. Une mentalité d'investisseur principal appliquée au conseil, à la technologie et au développement à travers la Zambie et l'Afrique.",
    expertise: "Expertise",
    company: "Société",
    stayInformed: "Restez informés",
    stayInformedBody:
      "Des perspectives occasionnelles sur les marchés, les infrastructures et la technologie. Pas de spam.",
    subscribe: "S'abonner",
    emailPlaceholder: "Adresse e-mail",
    subscribed: "Merci de votre abonnement.",
    companyLinks: [
      "Accueil",
      "Approche",
      "Mission & Valeurs",
      "Finance",
      "Secteur public",
      "IA & TIC",
      "Gestion d'actifs",
      "Développement",
      "Contact",
    ],
    contactHeading: "Contact",
    address: "Lusaka, Zambie",
    backToTop: "Haut de page",
    legal: "Tous droits réservés.",
    tagline: "Ingéniosité · Durabilité · Débrouillardise",
    langLabel: "Langue",
  },
  notFound: {
    code: "404",
    heading: "Page introuvable",
    body: "La page que vous recherchez n'existe pas ou a été déplacée.",
    home: "Accueil",
  },
  titles: {
    home: "Goldman Advisors & Investors | Conseil en investissement",
    approach: "Notre approche | Goldman Advisors & Investors",
    financial: "Conseil financier | Goldman Advisors & Investors",
    public: "Secteur public & PPP | Goldman Advisors & Investors",
    ai: "IA & TIC | Goldman Advisors & Investors",
    asset: "Gestion d'actifs | Goldman Advisors & Investors",
    development: "Développement & EPC | Goldman Advisors & Investors",
  },
};

export const translations: Record<Language, Translations> = { en, fr };
