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
  nav: { talk: string; langLabel: string; parentCompany: string };
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
    introTitle: string;
    introBody: string;
    purposeEyebrow: string;
    purposeHeading: string;
    purposeBody: string;
    valuesIntro: string;
    values: string[];
    nowOfWorkEyebrow: string;
    nowOfWorkHeading: string;
    nowOfWorkBody: string;
    nowOfWorkTakeaway: string;
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
    approach: PageMeta & { cards: Card[]; executionTitle: string; execution: Card[] };
    financial: PageMeta & { sectorsEyebrow: string; sectors: string[]; practices: Card[] };
    public: PageMeta & { items: Card[] };
    ai: PageMeta & { framework: Card[]; priorities: Card[]; playbook: Card[]; matrixEyebrow: string; matrix: Card[]; focusEyebrow: string; focus: Card[] };
    asset: PageMeta & { classesEyebrow: string; classes: string[]; clients: string[] };
    development: PageMeta & { pillars: Card[]; heavyEyebrow: string; heavy: Card[]; takeaways: string[] };
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
        "Investment solutions for pension funds, endowments, corporates and family offices.",
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
    parentCompany: "Goldman Insurance Limited",
  },
  hero: {
    eyebrow: "Goldman Advisors & Investors — Member of the Goldman Group of Companies",
    headline: "A principal investor mentality, brought to transformation consulting.",
    sub: "Goldman Advisors and Investors brings a Principal investor Mentality to its Transformation Consulting Services, which means we bring skin-in-the-game accountability, focusing on value, capital efficiency, long-term asset performance and risk mitigation. We act as if we have skin in the game when advising versus acting as theoretical external helpers. Goldman Advisors and Investors can do this because we are also principal deal, technology, development and asset investors.",
    ctaPrimary: "Talk to us",
    ctaSecondary: "The Goldman approach",
    primaryCta: "Explore our capabilities",
  },
  slides: [
    {
      kicker: "Principal investor advisory",
      tagline: "Skin-in-the-game transformation consulting across Zambia and Africa.",
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
    { kicker: "Development & EPC", tagline: "Delivering infrastructure with an investor's mindset." },
  ],
  stats: [
    { title: "Principal", body: "Investor mentality" },
    { title: "7", body: "Transformation priorities" },
    { title: "7", body: "Core values" },
    { title: "Africa", body: "Zambia and beyond" },
  ],
  home: {
    whatTitle: "What we do",
    whatSub:
      "Six practices built around one idea: act as a principal, and make clients the owners of their outcomes.",
    learnMore: "Learn more",
    introTitle: "Goldman Advisors and Investors",
    introBody:
      "Goldman Advisors & Investors — Member of the Goldman Group of Companies. Goldman financial advisors, strategy, operations and technology consultants partner with Government, Cooperatives and Businesses large and small to transform their vision, goals, and operations to be 21st Century Sustainable, Resilient and Meaningful to their Stakeholders. Beyond superior advice, we offer tailored creative consultation that includes investments that empowers, mobilizes and educates — which, in turn, ensures sustainable outcomes.",
    purposeEyebrow: "Purpose & Values",
    purposeHeading: "Helping clients advance the public good in the communities they serve.",
    purposeBody:
      "At Goldman we believe that, in a changing world, doing meaningful work — which for us is bringing to our clients in Zambia and across Africa Ingenuity, Sustainability, and Resourcefulness — is the lens to a brighter future for Zambia and Africa's peoples.",
    valuesIntro:
      "Goldman's values guide us in every interaction, decision, and innovation we deliver to our clients. We are grounded in seven core values. These values guide how we engage with one another and serve our clients and communities. They drive our operations, innovation, and leadership, enabling us to create lasting impacts of community empowerment.",
    values: [
      "Excellence",
      "Trust",
      "Holistic approach",
      "Inclusion and equity",
      "Collaboration",
      "Innovation",
      "Sustainable / resilient growth",
    ],
    nowOfWorkEyebrow: "The Now of Work",
    nowOfWorkHeading: "Seven deliverable consulting priorities for 2026 to 2027.",
    nowOfWorkBody:
      "As the realities of 2026 onto 2027 continue to unfold, the narrative has become more complex where real opportunities for transformation are emerging for government and private sector entities with AI. Transformation winners, across the world, are those that can scale AI for lasting impact, embed continuous transformation into a new operating model, treat intelligence as a foundational backbone and bridge the employee-trust gap through experience-centric design. Transformation is a mindset.",
    nowOfWorkTakeaway:
      "The now of work is no longer about launching tools; it's about fostering a digital mindset. Organisations that embed transformation as a core operational capability powered by AI, skills and change capacity will win this half of the year and define the next.",
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
      eyebrow: "The Goldman Organization Transformation Advisory Approach",
      heading: "We act as if we have skin in the game.",
      body: "Not theoretical external helpers — an advisor whose success is tied to the enterprise value it helps create.",
      cta: "Talk to our advisors",
      cards: [
        {
          title: "Transformative Value Creation over Deck Creation",
          body: "Focus on tangible top-line sustainable growth, margin expansion and risk mitigation instead of comprehensive consulting slide decks.",
        },
        {
          title: "Risk-Adjusted Decision Making",
          body: "Prioritize data driven strategic pragmatism and 80/20 solutions over exhaustive, theoretical perfection.",
        },
        {
          title: "Long-Term Alignment",
          body: "Tie our advisory success and milestones directly to the enterprise value and ultimate exit or cash-flow realization of the client, for which we gain a growth fee deal participation.",
        },
      ],
      executionTitle: "We Deliver Excellence in Operational Execution",
      execution: [
        {
          title: "Rigor in Diligence",
          body: "Apply private equity-style operational and commercial deep-dives to diagnose core bottlenecks.",
        },
        {
          title: "Resource Accountability",
          body: "Treat every budget and strategic timeline with strict capital-allocation discipline.",
        },
      ],
    },
    financial: {
      eyebrow: "Financial Consulting",
      heading: "Trusted advice on the matters that decide enterprise value.",
      body: "We advise leaders of businesses and governments on their most important financial and strategic matters, serving as a trusted advisor whose sole mission is to ensure the best result for the clients. We are deeply established in business centers around the world, with meaningful local relationships and insight. And as the world's largest advisory-focused firm, we have exceptional depth of expertise across industry sectors and geographies.",
      cta: "Talk to our advisors",
      sectorsEyebrow: "Corporate, Cooperative, Royal Establishment and PPP Transaction Advisory Sectors",
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
          body: "Goldman's M&A and Strategic Advisory practice partners with public and private corporate, Cooperative and Royal Establishment clients to deliver world-class independent advice on all financial, strategic and tactical elements of evaluating and executing M&A transactions, as well as formulating comprehensive strategies to grow their businesses. Capabilities encompass mergers, buy-side acquisitions, sell-side divestitures and company sale processes, joint ventures, partnerships and more. In addition to executing transactions, we frequently collaborate with clients in the investments taking a position in the ultimate M&A entity.",
        },
        {
          title: "Capital Markets Advisory",
          body: "A hub of expertise on public and private capital markets, capital structure, topics related to public shareholders, and ESG. Goldman provides relevant, timely insights on capital raising and capital structure advisory, leveraging sophisticated data analytics and the combined expertise of our team. Our analysis informs key strategic events under evaluation, including Growth Capital Raising, Equity, Debt, and Private Capital Advisory, as well as changes to capital allocation priorities.",
        },
        {
          title: "Restructuring & Liability Management",
          body: "We serve clients in this practice area with a pioneering liability management service that can provide both out of court, and in court restructuring representation.",
        },
        {
          title: "Specialized Advisory Practice",
          body: "Provides advice on strategic matters facing sovereigns and governments including advice on geopolitical risk. Our Geopolitical Advisory team brings world class experienced geopolitical minds together to provide strategic insights in an evolving geopolitical environment. We assist Government's and sovereign entities in navigating potential risks and restructuring their outstanding direct and contingent liabilities, as well as capturing opportunities to grow their economies or entities in the global context of trends, and possible collaborators and partnerships.",
        },
      ],
    },
    public: {
      eyebrow: "Governments and Royal Establishment Advisory",
      heading: "Funding the infrastructure communities live on.",
      body: "Goldman financial advisors offer expert advice that helps its clients identify the best strategies to help secure the funding they need to make improvements in their communities that ensures the ongoing sustainability of what they plan, finance and operate.",
      cta: "Talk to our advisors",
      items: [
        {
          title: "Higher Education",
          body: "We partner with Colleges, Universities and Training and Research Institutions to master plan and finance student, faculty and staff housing, labs, ICT and Green utility Infrastructure, technology hubs, lecture halls and classrooms, as well as sports facilities.",
        },
        {
          title: "Healthcare",
          body: "Goldman works with healthcare research, lab and all sizes of general and specialized providers of services, as well as health insurers to maintain and enhance their financial well-being, allowing them to focus on community health in a constantly changing healthcare technology and services sector.",
        },
        {
          title: "Transportation & Logistics",
          body: "Our transportation and logistics finance practice helps communities, ground, air and rail transportation entities and developers to build connections.",
        },
        {
          title: "K-12 Schools",
          body: "Goldman helps primary and secondary school clients of all sizes, both private sector and government, to meet expanding demands and expectations for acquiring new enabling technologies and facilities while balancing scarce resources.",
        },
        {
          title: "Power",
          body: "Goldman draws upon our experience with Africa and some of the world's largest power providers to help government and private sector, as well as PPP clients, build green infrastructure including Solar, Wind, Waste to Energy, Hydro, Green Natural Gas and Geo Thermal power generation as well as related trunk and micro grid transmission infrastructure, AI SCADA, billing and distribution systems, that help to optimize rates.",
        },
        {
          title: "Environmental Utilities",
          body: "Our global relationships with water, waste water, sewage treatment, and waste to energy systems providers enables us to provide innovative infrastructure services solutions that are financeable and meet global best practice and regulatory regimes, as well as optimize customer rates for services.",
        },
        {
          title: "Special District and Chiefdom Management",
          body: "We provide comprehensive district and chiefdom management and consulting services creating and managing special government and chiefdom taxing districts, local government and redevelopment agency entities.",
        },
        {
          title: "Provincial, District and Chiefdom Revolving Capital Funds",
          body: "Goldman helps to create and then advise on Revolving Capital Funds — self-replenishing pools of money where loan repayments and interest and cost savings are recycled to finance new loans for projects.",
        },
        {
          title: "Sports, Leisure & Cultural Facilities",
          body: "Our working knowledge of local markets, local regulations and local political networks brings added value to every public purpose and assembly project.",
        },
        {
          title: "Government, Private, Chiefdom and PPP Housing Initiatives",
          body: "We focus on strategic planning, financial risk management, balance sheet optimization, optimal structure and utility technologies, as well as the ultimate financial structure for a bankable sustainable development.",
        },
        {
          title: "Corporations, Cooperatives and PPPs",
          body: "Our Goldman team couples its financial modeling experience with our proprietary financial modeling that provides the underpinning for feasibility studies and then the ultimate financing the entity is seeking.",
        },
      ],
    },
    ai: {
      eyebrow: "Goldman AI & ICT Consulting & Investing Company",
      heading: "Technology as a driver of returns, not an operating expense.",
      body: "Goldman AI and ICT Consulting and Investing Company merges cutting-edge technology identification and deployment with disciplined human capital and funding allocation to maximize enterprise value. The Goldman AI and ICT Consulting and Investing Company transforms technology from a costly operational expense into a primary driver of financial returns and competitive advantage.",
      cta: "Talk to our advisors",
      framework: [
        {
          title: "As a Consultant",
          body: "Focus on integrating models into existing enterprise workflows to drive immediate efficiency, reduce headcount costs, or unlock new revenue lines.",
        },
        {
          title: "As an Investor",
          body: "Focus on defensive moats, data ownership, compute costs, and ensuring that a company Goldman is investing in is not building a thin wrapper over an infrastructure layer that a major tech firm could easily replace.",
        },
      ],
      priorities: [
        {
          title: "Data Moats",
          body: "As an investor, prioritize businesses with exclusive, proprietary datasets, as public data no longer offers a competitive edge for model training.",
        },
        {
          title: "Compute Economics",
          body: "Whether as a consultant or investor, track token costs, inference efficiency, and custom silicon options to prevent margins from being consumed by cloud infrastructure expenses.",
        },
        {
          title: "Architecture Integration",
          body: "Whether as a consultant or investor we combine generative AI with traditional predictive analytics and secure cloud infrastructure to create robust, enterprise-grade solutions.",
        },
        {
          title: "Regulatory Compliance",
          body: "As an investor we audit target companies for strict alignment with evolving global standards on data privacy, copyright protections, and AI safety legislation. As a consultant, we assist companies to achieve the same strict alignment.",
        },
      ],
      playbook: [
        {
          title: "Workflow Mapping",
          body: "Whether as an investor and as a consultant, we audit client operations to pinpoint high-cost, high-repetition tasks perfectly suited for automated LLM orchestration.",
        },
        {
          title: "Vendor Selection",
          body: "Whether as an investor and as a consultant, we evaluate the commercial trade-offs between deploying open-source models on private servers versus using proprietary, third-party APIs.",
        },
      ],
      matrixEyebrow: "The Goldman Investor-Consultant Company's Delivery Matrix",
      matrix: [
        {
          title: "Value Arbitrage",
          body: "Identifying underutilized ICT infrastructure or data assets and injecting AI to multiply their market value.",
        },
        {
          title: "Tech-Stack Due Diligence",
          body: "Assessing target companies' software architecture, technical debt, and data readiness before capital deployment.",
        },
        {
          title: "Scalability Engineering",
          body: "Ensuring technology architectures support 10x business growth without a linear increase in operating costs.",
        },
        {
          title: "Risk Mitigation",
          body: "Evaluating data privacy compliance, cybersecurity vulnerabilities, and AI model drift as core portfolio risks.",
        },
        {
          title: "Training",
          body: "Lifting all levels of an organization's ability to embrace and be innovative with agentic AI tools and platforms.",
        },
      ],
      focusEyebrow: "The Goldman Investor-Consultant Company's High-Impact Focus Areas",
      focus: [
        {
          title: "Infrastructure Modernization",
          body: "Moving from legacy on-premises hardware to optimized multi-cloud and edge computing architectures.",
        },
        {
          title: "Enterprise AI Integration",
          body: "Deploying proprietary Large Language Models (LLMs) and predictive analytics to automate core business workflows.",
        },
        {
          title: "Data Monetization",
          body: "Restructuring unstructured operational data into clean, compliant, and highly valuable commercial data assets.",
        },
        {
          title: "Portfolio Synergies",
          body: "Connecting tech investments across a portfolio to share infrastructure, software licenses, and engineering talent.",
        },
      ],
    },
    asset: {
      eyebrow: "Asset Management",
      heading:
        "Investment solutions for pension funds, endowments, corporates and family offices.",
      body: "Goldman Advisors & Investors Asset Management Company provides investment solutions including offering products across a broad spectrum of asset classes, designed for different client types. Our traditional and alternative investment services cover listed equity and fixed income investments including REITs and other real estate, as well as technology, and development related investments.",
      cta: "Talk to our advisors",
      classesEyebrow: "Asset classes we guide and participate in investing",
      classes: [
        "Equities",
        "Fixed Income",
        "Real Assets",
        "Technology & IP",
        "Multi-Assets",
        "Alternatives",
      ],
      clients: [
        "Pension funds",
        "Endowments",
        "Insurance Companies",
        "Corporates",
        "Family Offices",
      ],
    },
    development: {
      eyebrow: "Goldman Advisors & Investors Development Company",
      heading: "Development, EPC and project management with an investor's mindset.",
      body: "Goldman Advisors & Investors Development Company is a development and consulting engineering, procurement, construction (EPC), and project management firm that teams with leading global enterprises in delivering both its advisory services and development investments to the market. From an investor consultant perspective, the company represents a fascinating study of how an industrial and development company is utilizing AI, ICT infrastructure, and venture investing to fundamentally transform asset classes in Zambia and other areas of Africa.",
      cta: "Talk to our advisors",
      pillars: [
        {
          title: "The Investor Lens: Tech Venture Capital & Brick and Mortar Development",
          body: "Brick & Mortar Ventures: a standalone venture capital firm explicitly targeting \"contech\" (construction tech), early-stage AI, and robotics companies including in Building Information Modeling 7 Dimensional Space. We treat technology as an investable asset class rather than an operational software cost. Macro Infrastructure Plays: Goldman aggressively co-invests and positions itself as a primary infrastructure developer for major global capital allocations into Zambia and other areas of Africa — including the historic Solwezi-Kolwezi Interconnector PPP Development initiative, surrounded by an integrated 500MW of Solar and 150MW of Waste to Energy generation, high speed data cable along the interconnector, located on a 2800 Hectare MFEZ development zone hosting AI factories, modern data centers, specialized grid systems, critical minerals and rare earths nanomaterials refinery, cold storage and logistics supporting Zambia to DRC trade.",
        },
        {
          title: "The Consultant Lens: EPC Digital Transformation",
          body: "C-Suite Restructuring: to overhaul how projects are designed and built, Goldman delivers an EPC Transformation set of services founded on a strategy that treats technology integration such as the use of 7D BIM as a core advisory and engineering service to maximize project delivery speed, quality, sustainability, resiliency and cost optimization. AI Agent Architectures: Goldman is modernizing legacy engineering workflows by deploying Agentic AI frameworks (using tools like LangChain, Python, and ReactJS) to empower 7D BIM — using AI agents to automatically analyze massive thousands of pages of engineering manuals in minutes.",
        },
        {
          title: "The Concrete Value Creation Playbook",
          body: "The Body Composition Strategy: rather than using AI merely to slash headcount and shrink operations, we advise and in our own developments reuse resource savings to improve business outcomes and build entirely new, tech-enabled business models. Physical-Digital Convergence: Generative AI is highly limited without physical infrastructure. The real alpha is found at the intersection of AI models and physical assets — Goldman uses secure edge computing, high-performance data centers, and advanced grid power to deliver the evolving powerful potential of Physical-Digital Convergence.",
        },
      ],
      heavyEyebrow: "Heavy industries including mining, metals, utilities & grid systems",
      heavy: [
        {
          title: "Unstructured Data Dissection",
          body: "Multi-agent systems parse mountains of historical project controls and thousands of pages of equipment maintenance manuals. The agents scan complex operations, map variables across the engineering-to-procurement value chain, and pinpoint hidden breakdown causes in minutes.",
        },
        {
          title: "Autonomous Earthworks Optimization",
          body: "Autonomous equipment — including excavators, dozers, and compactors — operates via localized algorithmic feedback loops. Agents combine drone terrain surveys with real-time payload data to dynamically alter haul routes, boosting overall earthmoving efficiency by up to 40%.",
        },
        {
          title: "Continuous Design & Asset Reasoning",
          body: "AI agents execute 24/7 probabilistic forecasting against infrastructure constraints, asset standards, and evolving environmental regulations. Rather than waiting for quarterly reviews, schedules and cost projections are updated minute-by-minute.",
        },
        {
          title: "Enforceable Security Guardrails",
          body: "Every single automated action creates an unalterable, step-by-step trace from the initial raw input data straight to the final decision output. If an agent flags a critical maintenance anomaly, it cannot automatically alter physical asset operations; it must route an actionable evidence pack to a human supervisor for manual sign-off.",
        },
        {
          title: "4th Generation Industries: Gigawatt-Scale AI Factories",
          body: "Fourth-generation industries require the physical delivery of massive digital infrastructure. Goldman partnered directly with leaders in AI factories to modularize gigawatt-scale AI factories in Zambia and other areas of Africa using platforms such as Omniverse.",
        },
        {
          title: "Procurement Intelligence Agents",
          body: "In hyper-scale data center projects, procurement determines speed-to-market advantage. AI agents manage supply chain logistics 24/7, continuously balancing live global supplier capacity and material pricing with geopolitical risk metrics.",
        },
        {
          title: "Optimizing for the First Revenue Token",
          body: "Instead of managing construction through fragmented, isolated steps, Goldman standardizes design, procurement, and commissioning into a single, cohesive framework. AI agents dynamically coordinate engineering tasks to rapidly reduce the time it takes a data center to process its very first operational workload.",
        },
        {
          title: "Synthetic Safety Training",
          body: "AI agents build dynamic, high-fidelity synthetic environments tailored to complex, real-world project specifications. Craft professionals use these virtual reality setups to practice operating cranes and handling high-tech equipment safely before stepping onto the physical job site.",
        },
      ],
      takeaways: [
        "Structure the Sandbox: We build dedicated, off-balance-sheet vehicles for tech investments, but explicitly tie deal-flow validation to an internal operating business that can immediately run live field tests.",
        "Move Past Simple Automations: Replace linear automation workflows with role-based, multi-agent frameworks. Let LLMs dynamically select tools while using an event-driven system architecture to keep the workflow robust and maintainable.",
        "Target the Time-to-Value Metric: Anchor every single AI deployment to a tangible, operational finish line — such as reducing heavy-equipment mobilization lag, shortening risk modeling from quarterly to minute-by-minute, or accelerating a facility's time-to-market.",
      ],
    },
  },
  footer: {
    about:
      "Goldman Advisors & Investors — Member of the Goldman Group of Companies. Principal investor mentality applied to transformation consulting, technology and development across Zambia and Africa.",
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
        "Solutions d'investissement pour fonds de pension, dotations, entreprises et family offices.",
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
    parentCompany: "Goldman Insurance Limited",
  },
  hero: {
    eyebrow: "Goldman Advisors & Investors — Membre du groupe Goldman",
    headline: "Une mentalité d'investisseur principal, appliquée au conseil en transformation.",
    sub: "Goldman Advisors and Investors apporte une mentalité d'investisseur principal à ses services de conseil en transformation, ce qui signifie que nous assumons une responsabilité « skin-in-the-game », axée sur la valeur, l'efficacité du capital, la performance des actifs à long terme et l'atténuation des risques. Nous agissons comme si nous avions un intérêt dans le jeu, plutôt que comme des experts externes théoriques. Goldman Advisors and Investors le peut parce que nous sommes aussi investisseurs principal dans les opérations, la technologie, le développement et les actifs.",
    ctaPrimary: "Discutons-en",
    ctaSecondary: "L'approche Goldman",
    primaryCta: "Explorer nos services",
  },
  slides: [
    {
      kicker: "Conseil en investissement principal",
      tagline: "Un conseil en transformation engagé à travers la Zambie et l'Afrique.",
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
    { title: "7", body: "Priorités de transformation" },
    { title: "7", body: "Valeurs fondamentales" },
    { title: "Afrique", body: "Zambie et au-delà" },
  ],
  home: {
    whatTitle: "Ce que nous faisons",
    whatSub:
      "Six pratiques fondées sur une même idée : agir comme un principal et faire de nos clients les propriétaires de leurs résultats.",
    learnMore: "En savoir plus",
    introTitle: "Goldman Advisors and Investors",
    introBody:
      "Goldman Advisors & Investors — Membre du groupe Goldman. Nos conseillers financiers, stratèges, consultants en opérations et technologie travaillent avec les gouvernements, les coopératives et les entreprises de toutes tailles pour transformer leur vision, leurs objectifs et leurs opérations afin de les rendre durables, résilients et significatifs au 21e siècle pour leurs parties prenantes. Au-delà de conseils supérieurs, nous offrons une consultation créative sur mesure qui inclut des investissements qui autonomisent, mobilisent et éduquent — ce qui, en retour, assure des résultats durables.",
    purposeEyebrow: "Mission & Valeurs",
    purposeHeading: "Aider nos clients à faire progresser le bien public dans les communautés qu'ils servent.",
    purposeBody:
      "Chez Goldman, nous croyons que, dans un monde en mutation, faire un travail significatif — qui pour nous consiste à apporter à nos clients en Zambie et dans toute l'Afrique de l'ingéniosité, de la durabilité et de la débrouillardise — est le prisme vers un avenir plus radieux pour les peuples de la Zambie et de l'Afrique.",
    valuesIntro:
      "Les valeurs de Goldman nous guident dans chaque interaction, décision et innovation que nous livrons à nos clients. Nous sommes ancrés dans sept valeurs fondamentales. Ces valeurs guident la manière dont nous interagissons entre nous et servons nos clients et nos communautés. Elles pilotent nos opérations, notre innovation et notre leadership, nous permettant de créer des impacts durables d'autonomisation communautaire.",
    values: [
      "Excellence",
      "Confiance",
      "Approche holistique",
      "Inclusion et équité",
      "Collaboration",
      "Innovation",
      "Croissance durable et résiliente",
    ],
    nowOfWorkEyebrow: "Le Nouvel Ordre du Travail",
    nowOfWorkHeading: "Sept priorités de conseil livrables pour 2026-2027.",
    nowOfWorkBody:
      "À mesure que les réalités de 2026 vers 2027 continuent de seomansifester, le récit est devenu plus complexe, où de réelles opportunités de transformation émergent pour les entités gouvernementales et privées grâce à l'IA. Les gagnants de la transformation, dans le monde, sont ceux qui savent-deployer l'IA à un impact durable, intégrer la transformation continue dans de nouveaux modèles opérationnels, traiter l'intelligence comme une colonne vertébrale fondamentale et combler le déficit de confiance des employés par une conception centrée sur l'expérience. La transformation est un état d'esprit.",
    nowOfWorkTakeaway:
      "Le nouvel ordre du travail ne consiste plus à lancer des outils ; il s'agit de nourrir une mentalité numérique. Les organisations qui intègrent la transformation comme capacité opérationnelle fondamentale, alimentée par l'IA, les compétences et la capacité au changement, gagneront cette moitié de l'année et définiront la suite.",
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
      eyebrow: "L'approche de conseil en transformation Goldman",
      heading: "Nous agissons comme si nous avions un intérêt dans le jeu.",
      body: "Pas de simples experts externes théoriques — un conseiller dont le succès est lié à la valeur de l'entreprise qu'il aide à créer.",
      cta: "Parler à nos conseillers",
      cards: [
        {
          title: "Création de valeur transformatrice avant création de présentations",
          body: "Concentrez-vous sur une croissance durable du chiffre d'affaires, l'expansion des marges et l'atténuation des risques, plutôt que sur des séries de diapositives de consultation.",
        },
        {
          title: "Prise de décision ajustée au risque",
          body: "Priorisez un pragmatisme stratégique fondé sur les données et des solutions 80/20 plutôt qu'une perfection théorique exhaustive.",
        },
        {
          title: "Alignement à long terme",
          body: "Liez notre succès et nos jalons de conseil directement à la valeur de l'entreprise et à la réalisation ultime de la sortie ou des flux de trésorerie du client, pour laquelle nous obtenons une participation aux honoraires de croissance.",
        },
      ],
      executionTitle: "Nous livrons l'excellence en exécution opérationnelle",
      execution: [
        {
          title: "Rigueur dans la diligence",
          body: "Appliquez des analyses opérationnelles et commerciales approfondies de style capital-investissement pour diagnostiquer les goulots d'étranglement fondamentaux.",
        },
        {
          title: "Responsabilité des ressources",
          body: "Traitez chaque budget et chaque échéance stratégique avec une discipline stricte d'allocation du capital.",
        },
      ],
    },
    financial: {
      eyebrow: "Conseil financier",
      heading: "Un conseil de confiance sur les sujets qui déterminent la valeur de l'entreprise.",
      body: "Nous conseillons les dirigeants d'entreprises et de gouvernements sur leurs enjeux financiers et stratégiques les plus importants, en tant que conseiller de confiance dont la seule mission est d'assurer le meilleur résultat pour les clients. Nous sommes profondément établis dans les centres d'affaires du monde entier, avec des relations locales significatives et une perspicacité. Et en tant que la plus grande firme axée sur le conseil au monde, nous avons une profondeur d'expertise exceptionnelle à travers les secteurs et les géographies.",
      cta: "Parler à nos conseillers",
      sectorsEyebrow: "Secteurs de conseil transactionnel — Corporate, Coopératives, Établissement Royal et PPP",
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
          body: "La pratique Fusions-acquisitions et conseil stratégique de Goldman s'associe aux clients corporatifs, coopératifs et de l'Établissement Royal, publics et privés, pour fournir des conseils indépendants de classe mondiale sur tous les éléments financiers, stratégiques et tactiques de l'évaluation et de l'exécution des transactions, ainsi que la formulation de stratégies globales de croissance. Nos capacités englobent les fusions, les acquisitions, les cessions et processus de vente, les coentreprises, les partenariats et plus encore.",
        },
        {
          title: "Conseil en marchés de capitaux",
          body: "Un pôle d'expertise sur les marchés de capitaux publics et privés, la structure du capital, les sujets liés aux actionnaires publics et l'ESG. Goldman fournit des perspectives pertinentes et rapides sur la levée de capitaux et le conseil en structure de capital, en s'appuyant sur des analyses de données sophistiquées et l'expertise combinée de notre équipe.",
        },
        {
          title: "Restructuration et gestion du passif",
          body: "Nous servons les clients dans ce domaine avec un service pionnier de gestion du passif pouvant fournir une représentation en restructuration, tanto extrajudiciaire que judiciaire.",
        },
        {
          title: "Pratique de conseil spécialisée",
          body: "Fournit des conseils sur les questions stratégiques facing aux souverains et aux gouvernements, y compris des conseils sur le risque géopolitique. Notre équipe géopolitique réunit des esprits recycleurs de classe mondiale pour fournir des perspectives stratégiques dans un environnement géopolitique en évolution.",
        },
      ],
    },
    public: {
      eyebrow: "Gouvernements et Établissement Royal — Conseil",
      heading: "Financer les infrastructures sur lesquelles vivent les communautés.",
      body: "Nos conseillers financiers offrent des conseils experts qui aident nos clients à identifier les meilleures stratégies pour sécuriser le financement dont ils ont besoin afin d'améliorer leurs communautés, en garantissant la pérennité de ce qu'ils planifient, financent et exploitent.",
      cta: "Parler à nos conseillers",
      items: [
        {
          title: "Enseignement supérieur",
          body: "Nous nous associons aux collèges, universités et institutions de formation et de recherche pour planifier et financer le logement étudiant, du corps professoral et du personnel, les laboratoires, les TIC et les infrastructures d'utilité verte, les pôles technologiques, les amphithéâtres et les salles de classe, ainsi que les installations sportives.",
        },
        {
          title: "Santé",
          body: "Goldman travaille avec la recherche en santé, les laboratoires et toutes les tailles de fournisseurs généralistes et spécialisés de services, ainsi qu'avec les assureurs santé, afin de maintenir et d'améliorer leur bien-être financier.",
        },
        {
          title: "Transports & Logistique",
          body: "Notre pratique de financement des transports et de la logistique aide les communautés, les entités de transport terrestre, aérien et ferroviaire et les promoteurs à construire des connexions.",
        },
        {
          title: "Écoles primaires et secondaires",
          body: "Goldman aide les clients scolaires de toutes tailles, du secteur privé et du gouvernement, à répondre aux exigences croissantes d'acquisition de nouvelles technologies et installations facilitatrices tout en équilibrant des ressources rares.",
        },
        {
          title: "Énergie",
          body: "Goldman s'appuie sur son expérience de l'Afrique et de certains des plus grands fournisseurs d'énergie mondiaux pour aider les clients gouvernementaux, du secteur privé et PPP à construire des infrastructures vertes.",
        },
        {
          title: "Services publics environnementaux",
          body: "Nos relations mondiales avec les fournisseurs de systèmes d'eau, d'eaux usées, de traitement des eaux usées et de valorisation énergétique des déchets nous permettent de fournir des solutions de services d'infrastructure novatrices.",
        },
        {
          title: "Gestion des districts spéciaux et des chefferies",
          body: "Nous fournissons des services complets de gestion et de conseil des districts et chefferies, créant et gérant des districts fiscaux spéciaux, des entités de gouvernement local et des agences de développement.",
        },
        {
          title: "Fonds revolving provinciaux, de district et de chefferie",
          body: "Goldman aide à créer puis à conseiller des fonds revolving — des réserves d'argent auto-renouvelables.",
        },
        {
          title: "Installations sportives, de loisirs et culturelles",
          body: "Notre connaissance du marché local, des réglementations locales et des réseaux politiques locaux ajoute de la valeur à chaque projet d'intérêt public et de rassemblement.",
        },
        {
          title: "Initiatives de logement gouvernemental, privé, de chefferie et PPP",
          body: "Nous nous concentrons sur la planification stratégique, la gestion du risque financier, l'optimisation du bilan, la structure optimale et les technologies d'utilité.",
        },
        {
          title: "Sociétés, coopératives et PPP",
          body: "Notre équipe Goldman associe son expérience de la modélisation financière à notre modélisation financière propriétaire qui fournit la base des études de faisabilité.",
        },
      ],
    },
    ai: {
      eyebrow: "Goldman AI & ICT Consulting & Investing Company",
      heading: "La technologie comme moteur de rendement, et non comme dépense d'exploitation.",
      body: "Goldman AI and ICT Consulting and Investing Company fusionne l'identification et le déploiement de technologies de pointe avec une allocation rigoureuse du capital humain et des fonds pour maximiser la valeur de l'entreprise.",
      cta: "Parler à nos conseillers",
      framework: [
        {
          title: "En tant que Consultant",
          body: "Concentrez-vous sur l'intégration des modèles dans les flux de travail existants de l'entreprise pour stimulus l'efficacité, réduire les coûts de main-d'œuvre ou débloquer de nouvelles sources de revenus.",
        },
        {
          title: "En tant qu'Investisseur",
          body: "Concentrez-vous sur les fossés défensifs, la propriété des données, les coûts de calcul et le fait de s'assurer qu'une entreprise dans laquelle Goldman investit ne construit pas une simple enveloppe au-dessus d'une couche d'infrastructure qu'une grande firme technologique pourrait facilement remplacer.",
        },
      ],
      priorities: [
        {
          title: "Fossés de données",
          body: "En tant qu'investisseur, priorisez les entreprises détenant des jeux de données exclusifs et propriétaires, car les données publiques n'offrent plus d'avantage concurrentiel pour l'entraînement des modèles.",
        },
        {
          title: "Économie du calcul",
          body: "Que vous soyez consultant ou investisseur, suivez les coûts de jetons, l'efficacité de l'inférence et les options de silicium personnalisé pour empêcher les marges d'être consommées par les dépenses d'infrastructure cloud.",
        },
        {
          title: "Intégration architecturale",
          body: "Que vous soyez consultant ou investisseur, nous combinons l'IA générative avec l'analytique prédictive traditionnelle et une infrastructure cloud sécurisée pour créer des solutions robustes de niveau entreprise.",
        },
        {
          title: "Conformité réglementaire",
          body: "En tant qu'investisseur, nous auditons les entreprises ciblées pour un alignement strict sur les normes mondiales émergentes.",
        },
      ],
      playbook: [
        {
          title: "Cartographie des flux de travail",
          body: "Que vous soyez investisseur ou consultant, nous auditons les opérations des clients pour repérer les tâches coûteuses et répétitives.",
        },
        {
          title: "Sélection des fournisseurs",
          body: "Que vous soyez investisseur ou consultant, nous évaluons les compromis commerciaux.",
        },
      ],
      matrixEyebrow: "Matrice d'exécution de Goldman Investor-Consultant Company",
      matrix: [
        {
          title: "Arbitrage de valeur",
          body: "Identifier les infrastructures ou actifs de données sous-utilisés et injecter de l'IA pour multiplier leur valeur marchande.",
        },
        {
          title: "Due diligence de la pile technologique",
          body: "Évaluer l'architecture logicielle, la dette technique et la préparation des données des entreprises ciblées avant le déploiement de capitaux.",
        },
        {
          title: "Ingénierie de l'évolutivité",
          body: "S'assurer que les architectures technologiques prennent en charge une croissance commerciale 10x sans augmentation linéaire des coûts d'exploitation.",
        },
        {
          title: "Atténuation des risques",
          body: "Évaluer la conformité en matière de confidentialité des données, les vulnérabilités de cybersécurité et la dérive des modèles d'IA.",
        },
        {
          title: "Formation",
          body: "Élever la capacité de tous les niveaux d'une organisation à adopter et à être novatrices avec les outils et plateformes d'IA agentique.",
        },
      ],
      focusEyebrow: "Domaines d'impact élevé de Goldman Investor-Consultant Company",
      focus: [
        {
          title: "Modernisation des infrastructures",
          body: "Passer du matériel sur site existant à des architectures de cloud multiple et de computing optimisées.",
        },
        {
          title: "Intégration de l'IA d'entreprise",
          body: "Déployer des modèles de langage propriétaire et de l'analytique prédictive pour automatiser les flux de travail métier essentiels.",
        },
        {
          title: "Monétisation des données",
          body: "Restructurer les données opérationnelles non structurées en actifs de données commerciaux propres, conformes et de grande valeur.",
        },
        {
          title: "Synergies de portefeuille",
          body: "Connecter les investissements technologiques d'un portefeuille pour partager les infrastructures, licences logicielles et talents d'ingénierie.",
        },
      ],
    },
    asset: {
      eyebrow: "Gestion d'actifs",
      heading: "Solutions d'investissement pour fonds de pension, dotations, entreprises et family offices.",
      body: "Goldman Advisors & Investors Asset Management Company fournit des solutions d'investissement, y compris des produits sur un large spectre de classes d'actifs, conçus pour différents types de clients.",
      cta: "Parler à nos conseillers",
      classesEyebrow: "Classes d'actifs dans lesquelles nous guidons et participons aux investissements",
      classes: [
        "Actions",
        "Titres à revenu fixe",
        "Actifs réels",
        "Technologie et PI",
        "Multi-actifs",
        "Alternatives",
      ],
      clients: [
        "Fonds de pension",
        "Dotations",
        "Compagnies d'assurance",
        "Entreprises",
        "Family offices",
      ],
    },
    development: {
      eyebrow: "Goldman Advisors & Investors Development Company",
      heading: "Développement, EPC et gestion de projet avec un état d'esprit d'investisseur.",
      body: "Goldman Advisors & Investors Development Company est une firme de développement et de conseil en ingénierie, approvisionnement, construction (EPC) et gestion de projet qui s'associe à des entreprises mondiales de premier plan.",
      cta: "Parler à nos conseillers",
      pillars: [
        {
          title: "L'optique de l'investisseur : capital-risque tech et développement physique",
          body: "Brick & Mortar Ventures : un fonds de capital-risque autonome ciblant les entreprises de \"contech\" (technologie de la construction), l'IA à un stade précoce et la robotique.",
        },
        {
          title: "L'optique du consultant : transformation numérique EPC",
          body: "Restructuration de la direction générale : Goldman livre un ensemble de services de transformation EPC fondé sur une stratégie qui traite l'intégration technologique comme un service de conseil et d'ingénierie central.",
        },
        {
          title: "Le cadre concret de création de valeur",
          body: "La stratégie de composition corporelle : plutôt que d'utiliser l'IA simplement pour réduire les effectifs, nous réutilisons les économies pour améliorer les résultats et construire de nouveaux modèles économiques activés par la technologie.",
        },
      ],
      heavyEyebrow: "Industries lourdes, y compris les mines, les métaux, les services publics et les systèmes de réseau",
      heavy: [
        {
          title: "Dissection de données non structurées",
          body: "Des systèmes multi-agents analysent des montagnes de contrôles de projets historiques et des milliers de pages de manuels de maintenance.",
        },
        {
          title: "Optimisation des terrassements autonomes",
          body: "Les équipements autonomes fonctionnent via des boucles de rétroaction algorithmiques localisées.",
        },
        {
          title: "Conception continue et raisonnement sur les actifs",
          body: "Les agents IA exécutent des prévisions probabilistes 24/7 contre les contraintes d'infrastructure.",
        },
        {
          title: "Garde-fous de sécurité exécutoires",
          body: "Chaque action automatisée crée une trace inaltérable, étape par étape.",
        },
        {
          title: "Industries de 4e génération : usines IA à l'échelle du gigawatt",
          body: "Les industries de 4e génération nécessitent la livraison physique d'une infrastructure numérique massive.",
        },
        {
          title: "Agents d'intelligence d'approvisionnement",
          body: "Dans les projets de centres de données à très grande échelle, l'approvisionnement détermine l'avantage de vitesse vers le marché.",
        },
        {
          title: "Optimisation du premier jeton de revenus",
          body: "Au lieu de gérer la construction par des étapes fragmentées et isolées, Goldman standardise la conception, l'approvisionnement et la mise en service.",
        },
        {
          title: "Formation synthétique à la sécurité",
          body: "Les agents IA construisent des environnements synthétiques dynamiques et de haute fidélité.",
        },
      ],
      takeaways: [
        "Structurer le bac à sable : nous construisons des véhicules dédiés et hors bilan pour les investissements technologiques.",
        "Aller au-delà des automatisations simples : remplacer les flux de travail d'automatisation linéaires par des frameworks multi-agents.",
        "Cibler la métrique Time-to-Value : ancrer chaque déploiement d'IA sur une ligne d'arrivée opérationnelle tangible.",
      ],
    },
  },
  footer: {
    about:
      "Goldman Advisors & Investors — Membre du groupe Goldman. Une mentalité d'investisseur principal appliquée au conseil en transformation, à la technologie et au développement à travers la Zambie et l'Afrique.",
    expertise: "Expertise",
    company: "Société",
    stayInformed: "Restez informés",
    stayInformedBody:
      "Des perspectives occasionnelles sur les marchés, les infrastructures et la technologie. Pas de spam.",
    subscribe: "S'abonner",
    emailPlaceholder: "Adresse e-mail",
    subscribed: "Merci pour votre abonnement.",
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