export const siteUrl = "https://eliezer-marques.click";

export const locales = {
  "pt-BR": { code: "PT", name: "Português", path: "/", openGraphLocale: "pt_BR" },
  en: { code: "EN", name: "English", path: "/en.html", openGraphLocale: "en_US" },
} as const;

export type ResumeLocale = keyof typeof locales;

export const resumeCopy = {
  "pt-BR": {
    title: "Eliezer Marques | Engenharia de Software",
    description: "Eliezer Marques, engenheiro de software especialista em arquitetura backend, sistemas distribuídos e agentes de IA para atendimento.",
    skip: "Pular para o conteúdo",
    home: "Eliezer Marques, início",
    navigation: "Navegação principal",
    language: "Idioma",
    projectsTitle: "Projetos",
    experienceTitle: "Experiência",
    skillsTitle: "Competências",
    contactTitle: "Contato",
    headline: "Arquitetura backend para sistemas distribuídos.",
    summary: "Desenvolvo APIs e microsserviços com Python, Go e Node.js. Trabalho com Kafka, Amazon SNS e Amazon SQS para desacoplar serviços e processar eventos de forma assíncrona.",
    linkedin: "Fale comigo no LinkedIn",
    viewProjects: "Ver projetos",
    portraitAlt: "Retrato de Eliezer Marques",
    country: "Brasil",
    metricsLabel: "Destaques da trajetória",
    metrics: [
      { value: "10+", label: "Anos em engenharia de software" },
      { value: "Milhões", label: "Eventos processados nas integrações da Loggi" },
      { value: "Centenas", label: "Landing pages migradas na Olist" },
    ],
    projects: [
      {
        company: "Loggi",
        title: "Rastreamento e dados fiscais para marketplaces",
        description: "Desenvolvo e mantenho, com a equipe de Integrações, os fluxos que enviam atualizações de rastreamento, status de envio e documentos fiscais para plataformas como Amazon, Shopee, SHEIN e Mercado Livre.",
      },
      {
        company: "Olist",
        title: "Catálogo de produtos",
        description: "Dividi o monólito de catálogo em serviços com Django e Django REST Framework. A interface em React usa um BFF em NestJS. A equipe ganhou mais autonomia para manter o catálogo.",
      },
      {
        company: "Olist",
        title: "Publicação de páginas de marketing",
        description: "Liderei a migração de centenas de landing pages do WordPress para Next.js e Strapi. A equipe de marketing passou a editar e publicar páginas pelo CMS.",
      },
    ],
    loggi: {
      role: "Engenheiro de Software Especialista",
      period: <><time dateTime="2025-05">Mai. 2025</time> até o presente</>,
      description: "Atuo em integrações de e-commerce para conectar marketplaces e clientes à operação logística da Loggi.",
      customerExperience: (
        <>
          Também sou responsável pela engenharia do time de Experiência do Cliente (CX), onde desenvolvo agentes de IA para atendimento.
          {" "}O sistema processa em média <strong>200 mil atendimentos por mês</strong>, e os agentes conduzem <strong>mais de 70%</strong> deles do início ao fim.
        </>
      ),
    },
    olist: {
      role: "Engenheiro de Software Sênior",
      period: <><time dateTime="2021-05">Mai. 2021</time> a <time dateTime="2025-05">mai. 2025</time></>,
      description: "Além dos projetos de catálogo e Growth, desenvolvi uma plataforma de onboarding para vários produtos e um painel para automatizar atualizações de preços e gestão de estoque.",
    },
    earlierTitle: "Experiências anteriores",
    earlierDescription: "Desenvolvimento web e mobile na Agilize Contabilidade, Avansys Tecnologia, Falqon e Vasta.",
    viewExperience: "Ver trajetória no LinkedIn",
    skills: [
      { title: "Backend e arquitetura", description: "Python, Django, Go, Node.js, NestJS, APIs e microsserviços." },
      { title: "Dados e infraestrutura", description: "PostgreSQL, Kafka, AWS, SNS, SQS e CI/CD." },
      { title: "Desenvolvimento web", description: "TypeScript, React e Next.js." },
      { title: "Formação e idiomas", description: "Engenharia da Computação, FAINOR. Português e inglês intermediário." },
    ],
    print: "Imprimir currículo",
    backToTop: "Voltar ao início",
  },
  en: {
    title: "Eliezer Marques | Software Engineering",
    description: "Eliezer Marques, software engineering specialist focused on backend architecture, distributed systems, and AI agents for customer support.",
    skip: "Skip to content",
    home: "Eliezer Marques, home",
    navigation: "Main navigation",
    language: "Language",
    projectsTitle: "Projects",
    experienceTitle: "Experience",
    skillsTitle: "Skills",
    contactTitle: "Contact",
    headline: "Backend architecture for distributed systems.",
    summary: "I build APIs and microservices with Python, Go, and Node.js. I use Kafka, Amazon SNS, and Amazon SQS to decouple services and process events asynchronously.",
    linkedin: "Contact me on LinkedIn",
    viewProjects: "View projects",
    portraitAlt: "Portrait of Eliezer Marques",
    country: "Brazil",
    metricsLabel: "Career highlights",
    metrics: [
      { value: "10+", label: "Years in software engineering" },
      { value: "Millions", label: "Events processed by Loggi integrations" },
      { value: "Hundreds", label: "Landing pages migrated at Olist" },
    ],
    projects: [
      {
        company: "Loggi",
        title: "Shipment tracking and tax documents for marketplaces",
        description: "I work with the Integrations team to build and maintain the workflows that send tracking updates, shipment statuses, and tax documents to platforms such as Amazon, Shopee, SHEIN, and Mercado Livre.",
      },
      {
        company: "Olist",
        title: "Product catalog",
        description: "I split the catalog monolith into services using Django and Django REST Framework. A NestJS backend for frontend supports the React UI. The change gave the catalog team more control over maintenance.",
      },
      {
        company: "Olist",
        title: "Publishing marketing pages",
        description: "I led the migration of hundreds of landing pages from WordPress to Next.js and Strapi. The marketing team could then edit and publish pages through the CMS.",
      },
    ],
    loggi: {
      role: "Software Engineering Specialist",
      period: <><time dateTime="2025-05">May 2025</time> to present</>,
      description: "I work on e-commerce integrations that connect marketplaces and customers to Loggi's logistics operations.",
      customerExperience: (
        <>
          I also oversee engineering for the Customer Experience (CX) team, where I develop AI agents for customer support.
          {" "}The system handles an average of <strong>200,000 support requests per month</strong>. AI agents handle <strong>over 70%</strong> of those requests from start to finish.
        </>
      ),
    },
    olist: {
      role: "Senior Software Engineer",
      period: <><time dateTime="2021-05">May 2021</time> to <time dateTime="2025-05">May 2025</time></>,
      description: "Alongside my work on the catalog and growth teams, I built a platform for onboarding users across several products and a dashboard that automated pricing and inventory tasks.",
    },
    earlierTitle: "Earlier roles",
    earlierDescription: "Web and mobile development at Agilize Contabilidade, Avansys Tecnologia, Falqon, and Vasta.",
    viewExperience: "View my experience on LinkedIn",
    skills: [
      { title: "Backend and architecture", description: "Python, Django, Go, Node.js, NestJS, APIs, and microservices." },
      { title: "Data and infrastructure", description: "PostgreSQL, Kafka, AWS, SNS, SQS, and CI/CD." },
      { title: "Web development", description: "TypeScript, React, and Next.js." },
      { title: "Education and languages", description: "Computer Engineering, FAINOR. Portuguese and intermediate English." },
    ],
    print: "Print résumé",
    backToTop: "Back to top",
  },
} as const;
