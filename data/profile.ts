// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE. Everything on the site AND everything the AI
// assistant knows about you comes from here.
// ─────────────────────────────────────────────────────────────

export type Profile = {
  name: string;
  title: string;
  location: string;
  rightToWork: string;
  availability: string;
  email: string;
  cvUrl: string;
  links: { linkedin: string; credly: string; hackerrank: string; github?: string };
  summary: string;
  skills: { group: string; items: string[] }[];
  experience: {
    role: string;
    company: string;
    location: string;
    start: string;
    end: string;
    highlights: string[];
    tech: string[];
  }[];
  achievements: { metric: string; title: string; detail: string }[];
  certifications: { name: string; issuer: string; date: string; url: string }[];
  education: {
    degree: string;
    institution: string;
    location: string;
    start: string;
    end: string;
    result: string;
    notes?: string;
  }[];
  extraFacts: string[];
  suggestedQuestions: string[];
};

export const profile: Profile = {
  name: "Saw Thu Naing",
  title: "Senior Software Engineer",
  location: "United Kingdom", // TODO: add your city if you'd like it shown
  rightToWork: "Full right to work in the UK",
  availability: "Open to senior backend / FinTech engineering roles in the UK.", // TODO: add notice period and hybrid/remote/on-site preference
  email: "sawthunaing@gmail.com",
  cvUrl: "https://drive.google.com/file/d/1lq7CkK-ZJrk39n7W9LKtq1jUDfIylgA_/view?usp=sharing",

  links: {
    linkedin: "https://www.linkedin.com/in/saw-thu-naing",
    credly: "http://credly.com/users/saw-thu-naing.4595b72a/badges/credly", 
    hackerrank: "https://www.hackerrank.com/profile/sawthunaing",
    github: "https://github.com/sawthunaing",
  },

  summary:
    "Senior Software Engineer with 10+ years of experience designing, developing, and maintaining high-scale, secure systems in the FinTech and streaming domains. Expert in building API gateways, payment platforms, and microservices architectures integrated with card schemes (VISA, Mastercard) and alternative payment methods (Alipay, WeChat). Proficient in AWS, Azure and Google Cloud, Docker, ECS, GKE and CI/CD pipelines, delivering fault-tolerant and cost-efficient systems. Experienced in leading cross-functional teams, driving complex projects, and optimising system operations.",

  skills: [
    {
      group: "Languages & Frameworks",
        items: ["C#", "ASP.NET", ".NET Core / .NET 6 / .NET 8", "TypeScript", "Python", "Java", "Spring Boot", "Angular", "JavaScript", "HTML", "CSS", "jQuery"],
    },
    {
      group: "AI & Agentic Development",
      items: ["AI-Assisted Development", "Agentic AI", "Claude", "OpenAI Codex"],
    },
    {
      group: "Databases",
      items: ["SQL Server (MSSQL)", "MySQL", "PostgreSQL", "MongoDB", "Oracle", "Redis"],
    },
    {
      group: "Cloud & DevOps",
      items: ["AWS (ECS, ECR, Lambda, RDS, S3, SNS, SQS, Secrets Manager)", "Azure", "Google Cloud (GKE)", "Docker", "Kubernetes", "Git", "GitHub Actions", "CI/CD"],
    },
    {
      group: "Systems & Tools",
      items: ["IIS", "Nginx", "Ocelot API Gateway", "Visual Studio", "IntelliJ", "Jira", "Confluence", "Trello"],
    },
    {
      group: "Architecture & Domain",
      items: ["Microservices", "SOA", "Secure API Development", "Payment Gateways", "Card Schemes (VISA, Mastercard)", "EMV QR Code", "Digital Wallets", "Core Banking"],
    },
    {
      group: "Ways of working",
      items: ["Agile / Scrum", "Team Leadership & Mentorship", "Stakeholder Management", "Release Management"],
    },
  ],
 

  experience: [
    {
      role: "Software Engineer",
      company: "Synergy Logic",
      location: "London, UK / Remote",
      start: "Sep 2025",
      end: "Present",
      highlights: [
        "Developed and maintained a CMS portal and backend APIs using .NET 8 / .NET Core and SQL Server 2019 for SaaS applications hosted on Azure, improving reliability and performance.",
        "Enhanced payment-related microservices, reducing message processing errors by ~30% and improving service stability.",
        "Designed and implemented RESTful APIs in .NET 8 integrating SQL Server, Redis, and AWS (Secrets Manager, S3, ECR, SNS, SQS) for a scalable cloud architecture.",
        "Built a configurable, JSON-driven API simulator in .NET 6 / .NET 8, speeding up integration testing and development cycles.",
        "Maintained and enhanced legacy ASP.NET Framework, Web Forms and XML web service systems.",
        "Optimised SQL queries, database scripts and data access layers for high-volume transactions.",
      ],
      tech: [".NET 8", ".NET Core", "SQL Server 2019", "Azure", "AWS", "Redis", "ASP.NET Web Forms"],
    },
    {
      role: "Senior Developer",
      company: "Shwe Digit",
      location: "Myanmar / Remote",
      start: "May 2024",
      end: "Aug 2025",
      highlights: [
        "Developed and maintained Customs Department software APIs using .NET Framework 4.6 (MVC) and SQL Server 2019, improving API reliability and performance.",
        "Enhanced the NSW-RP system for stable data routing across customs processes, reducing message errors by ~30%.",
        "Developed RESTful APIs using .NET Core 3, .NET 6 and .NET 8 with SQL Server, Redis and AWS (Secrets Manager, S3, ECR, SNS, SQS).",
        "Built an API simulator producing mock responses from JSON settings using .NET 6 and .NET 8.",
        "Fixed bugs and enhanced legacy ASP.NET Framework, Web Forms and XML web service applications.",
        "Tuned SQL scripts and database performance.",
      ],
      tech: [".NET Framework 4.6 (MVC)", ".NET Core 3", ".NET 6", ".NET 8", "SQL Server 2019", "Redis", "AWS"],
    },
    {
      role: "Senior Backend Engineer",
      company: "Codigo Mobile (Spotv Project)",
      location: "Singapore / Remote",
      start: "Dec 2023",
      end: "Dec 2024",
      highlights: [
        "Designed and built a live sports streaming system (Spotv) serving five countries using .NET Core 6, Docker, MySQL and AWS ECS, integrated with Brightcove streaming.",
        "Spearheaded a centralised data migration system consolidating five legacy databases, reducing migration costs by ~40%.",
        "Optimised vendor payment and telecom systems through improved logging and archiving, reducing maintenance overhead.",
      ],
      tech: [".NET Core 6", "Docker", "MySQL", "AWS ECS", "Brightcove"],
    },
    {
      role: "Technical Lead – FinTech",
      company: "Abank",
      location: "Myanmar",
      start: "Jun 2021",
      end: "Aug 2023",
      highlights: [
        "Engineered a customised API Gateway using Ocelot with .NET Core 7, PostgreSQL and Nginx, supporting VISA card integration and third-party access to core banking systems.",
        "Developed a dynamic Bill Payment System on an SOA architecture, allowing new billers to be added without core system changes and significantly reducing development time.",
        "Integrated a dynamic Disbursement System with Dee Money for cross-border remittance, including API documentation and integration support.",
      ],
      tech: [".NET Core 7", "Ocelot", "PostgreSQL", "Nginx", "VISA", "SOA"],
    },
    {
      role: "Technical Lead – FinTech",
      company: "uab bank",
      location: "Myanmar",
      start: "May 2020",
      end: "Apr 2021",
      highlights: [
        "Maintained the uabpay system, reducing vendor costs and enabling new features.",
        "Developed and maintained the uabpay payment gateway, owning API documentation, system design, security measures and client integration support.",
        "Managed financial transaction reconciliation for the finance department.",
      ],
      tech: ["ASP.NET 4.6", "MySQL", "AWS RDS", "AWS ECS"],
    },
    {
      role: "Senior Software Engineer – FinTech",
      company: "ACE Data System Co Ltd",
      location: "Myanmar",
      start: "Sep 2017",
      end: "Apr 2021",
      highlights: [
        "Led development of the Onepay wallet system for Asia Green Development Bank – the first locally developed wallet in Myanmar – delivered on time to high quality standards, significantly boosting company profits.",
        "Engineered Internet Banking for Ayeyarwaddy Farmers Development Bank, integrating Android and iOS apps with a backend API; delivered both mobile and web components in just 6 months.",
      ],
      tech: ["ASP.NET 4.6", "MySQL", "MSSQL", "AWS RDS", "AWS ECS", "IIS"],
    },
  ],

  achievements: [
    { metric: "~40%", title: "Lower migration costs", detail: "Centralised data migration across five legacy databases for Spotv." },
    { metric: "~30%", title: "Fewer message errors", detail: "Improved stability of payment microservices and customs data routing." },
    { metric: "1st", title: "Myanmar-built digital wallet", detail: "Led development of Onepay for Asia Green Development Bank." },
  ],

  certifications: [
    { name: "Google Professional Cloud Architect", issuer: "Google Cloud", date: ": January 31, 2026 ", url: "https://www.credly.com/badges/5205efeb-18c1-4f3e-9510-b305f82be5ea" }, // TODO: add date and verification link
    { name: "AWS Certified Solutions Architect – Associate", issuer: "Amazon Web Services", date: "October 26, 2023 ", url: "https://www.credly.com/badges/9a47a895-b921-42c3-ab74-8d0a8a48fa1e" }, // TODO: add date and verification link
    { name: "Get Started with Jira", issuer: "Atlassian", date: "", url: "" }, // TODO: add date and link
    { name: "Full UK Driving Licence", issuer: "Driver and Vehicle Licensing Agency (DVLA)", date: "Issued May 2026 · Expires May 2036", url: "" },
  ],

  education: [
    {
      degree: "BSc (Hons) Business Information Technology",
      institution: "University of Greenwich",
      location: "London, UK",
      start: "Oct 2013",
      end: "Mar 2015",
      result: "2nd Upper Class (2:1)", // TODO: add classification (e.g. 2:1) if you'd like it shown
      notes: "ISO 9001-2008 Cert No 683180",
    },
    {
      degree: "BA English",
      institution: "Dagon University",
      location: "Yangon, Myanmar",
      start: "Mar 2009",
      end: "Mar 2012",
      result: "2:1",
    },
  ],

  // Extra facts the AI can use to answer questions (not shown as a section).
  extraFacts: [
    "Has full right to work in the UK – no sponsorship required.",
    "Payment integrations experience: VISA, Mastercard, Alipay, WeChat Pay, cross-border remittance (Dee Money).",
    "Awarded a Certificate of Achievement by the Founder and Chairman for contributing to Onepay, launched in Yangon in August 2019.",
    "Awarded a Certificate of Appreciation by the CEO and President of ACE Data System Group for contributing to the TALENT Myanmar programme, launched in March 2020.",
    "Leadership strengths: team leadership and mentoring, stakeholder management, cross-functional collaboration, product roadmaps, release management and digital transformation.",
    "Soft skills: problem-solving, conflict resolution, presentations and client communication, time management.",
    "Holds a BA in English and works fluently in English.",
  ],

  suggestedQuestions: [
    "What payment systems have you built?",
    "Tell me about your latest role",
    "Which cloud certifications do you hold?",
    "What is your right to work status?",
  ],
};
