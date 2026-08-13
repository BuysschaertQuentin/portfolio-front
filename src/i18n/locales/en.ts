import type { Translations } from "../types";
import { skillsEn } from "./competences";
import { realisationsEn } from "./realisations";

const en: Translations = {
  nav: {
    experience: "Experience",
    formation: "Education",
    past: "Background",
    projects: "Projects",
    stack: "Stack",
    contact: "Contact",
    skipToContent: "Skip to main content",
    about: "Profile",
    competences: "Skills",
    realisations: "Achievements",
    parcours: "Career",
    sendEmail: "Send an email",
  },
  hero: {
    subtitle: "Portfolio 2026",
    title: "Developer",
    titleHighlight: "Fullstack",
    description: "From human support to code, I build web solutions with",
    quality1: "rigor",
    quality2: "empathy",
    quality3: "passion",
    and: "and",
    downloadCv: "Download CV",
    discoverPath: "Discover my atypical journey",
    heroAlt: "Fullstack developer welcomed in a company, pixel art style",
    coreStackLabel: "Core stack",
    secondaryStackLabel: "Transversal stack",
  },
  experience: {
    sectionLabel: "Current experience",
    bac3Label: "Bac+3 Experience",
    bac5Label: "Bac+5 Experience",
    title: "Fullstack Developer —",
    company: "Orange Business",
    status: "Work-study program — Nov. 2023 to Mar. 2027",
    description:
      "On a work-study program at Orange Business, I participate in the development of internal applications using modern technologies. I work within an agile team, contributing to the design and implementation of front-end and back-end features.",
    imgAlt:
      "Developer on a work-study program at Orange Business working on Angular and NestJS, pixel art style",
    cta: "View my achievements",
  },
  formation: {
    sectionLabel: "Education",
    title: "Bootcamp",
    school: "O'clock",
    duration: "Intensive training — Jan. to Jun. 2023 (Transitions Pro)",
    description:
      "A total immersion in web development. 6 months of intensive training to master front-end and back-end fundamentals. A demanding pace that forged my",
    quality1: "rigor",
    and: "and confirmed my",
    quality2: "passion",
    forCode: "for code.",
    imgAlt: "Student at O'clock bootcamp learning HTML, CSS, and JavaScript, pixel art style",
    cta: "Discover my detailed career path",
  },
  past: {
    sectionLabel: "Previous background",
    title: "Care assistant —",
    titleHighlight: "9 years of humanity",
    description:
      "From October 2014 to September 2023, I supported vulnerable people on a daily basis. This deeply human experience gave me cross-cutting skills that are now my strength as a developer.",
    imgAlt: "Care assistant helping an elderly person, pixel art style",
    empathy: "Empathy",
    empathyDesc: "Active listening and daily kindness",
    resilience: "Resilience",
    resilienceDesc: "Stress management and constant adaptation",
    priorities: "Priority management",
    prioritiesDesc: "Rigorous organization and autonomy",
    teamwork: "Teamwork",
    teamworkDesc: "Collaboration with families and professionals",
    cta: "Explore my human skills",
  },
  projects: {
    sectionLabel: "Achievements",
    title: "Projects",
    professional: "Professional projects",
    personal: "Personal projects",
    sourceCodeAria: "Source code of",
    viewProjectAria: "View the project",
    cta: "View all detailed projects",
    detailsCta: "Project details",
    proProjects: {
      orangeTitle: "Orange internal application",
      orangeDesc:
        "Development of an internal management application with Angular and NestJS, deployed on CloudFoundry.",
    },
    persoProjects: {
      portfolioTitle: "Personal portfolio",
      portfolioDesc:
        "This portfolio in React with a retro-futuristic design, dark mode, and pixel art.",
      botTitle: "Discord Bot",
      botDesc: "Community bot with custom commands and external API integrations.",
    },
  },
  stack: {
    sectionLabel: "Skills",
    title: "Tech Stack",
    core: "Core stack",
    transversal: "Transversal skills",
    cta: "Explore my technical & human skills",
  },
  contact: {
    sectionLabel: "Let's chat",
    title: "Contact",
    description:
      "You have a project, an opportunity, or simply want to chat? Feel free to contact me.",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "your@email.com",
    messageLabel: "Message",
    messagePlaceholder: "Your message...",
    send: "Send",
  },
  footer: {
    copyright: import.meta.env.VITE_FULL_NAME + " — Fullstack Developer",
  },
  notFound: {
    title: "404",
    message: "Oops! Page not found",
    backHome: "Return to Home",
  },
  a11y: {
    newTab: "(opens in a new tab)",
  },
  common: {
    loading: "Loading...",
  },
  about: {
    title: "Profile",
    intro:
      "Passionate and rigorous Fullstack Developer at Orange Business, combining strong technical expertise (React, Angular, NestJS, Flutter, Java) with solid human soft skills forged through 8 years in home care. My approach centers on software quality, continuous curiosity, and team engagement.",
    proProjectTitle: "Professional project",
    proProjectDesc:
      "Validate my **Master's Degree in Software Engineering (Bac +5 EIL)** and grow as a **Fullstack Software Engineer / Architect**, ideally within my current company at **Orange Business**.\n\n- **Core Stack**: Continue deepening my expertise in **Angular** and **Java / Spring Boot**.\n- **DevOps Skills**: Expand my expertise in container orchestration (**Kubernetes**).\n- **Cloud Ecosystem**: Evolve toward major Cloud solutions (**AWS**, **GCP**).",
    persoProjectTitle: "Personal project",
    persoProjectDesc:
      "Design independent web browser games using Phaser.js, while exploring advances in autonomous AI agents and open-source ecosystems.",
    softSkillsTitle: "Human qualities",
    softSkillsSubtitle: "Overview of my main qualities — details on the Skills page.",
    seeMore: "Learn more →",
    interestsTitle: "Interests",
    interests: {
      interest1: "Game Development",
      interest1Desc: "Building reactive mechanics and web games with Phaser.js and Flutter.",
      interest2: "AI Tech & Autonomous Agents",
      interest2Desc: "Exploring MCP servers, generative AI, and agentic coding tools.",
      interest3: "Hardware & DevOps",
      interest3Desc: "Passion for Docker containers, server architectures, and cloud platforms.",
      interest4: "Tech Watch & Self-Learning",
      interest4Desc: "Continuous learning of new frameworks (Java 17, Spring Boot 3, Vue 3).",
    },
  },
  competences: {
    title: "Skills",
    subtitle: "10 key skills — human and technical",
    humanTitle: "Human skills",
    technicalTitle: "Technical skills",
    categories: {
      "front-end": "Front-end",
      "back-end": "Back-end",
      devops: "DevOps",
      cloud: "Cloud",
      ia: "AI Skills",
      transversale: "Transversal",
    },
    legend: {
      filterTitle: "Filter by tag:",
      specialty: "Specialty",
      wish: "What I would like to do",
    },
    backToList: "Back to skills",
    detail: {
      definitionTitle: "Definition",
      proofsTitle: "In practice",
      selfCritiqueTitle: "Self-assessment",
      hindsightTitle: "Hindsight",
      evolutionTitle: "Evolution",
      linkedRealisationsTitle: "Linked achievements",
      noLinkedRealisations: "No linked achievements for now.",
    },
    skills: skillsEn,
  },
  realisations: {
    title: "Achievements",
    subtitle: "Projects — professional, personal and academic",
    contextPro: "Professional project",
    contextPerso: "Personal project",
    contextFormation: "Academic project",
    backToList: "Back to achievements",
    detail: {
      definitionTitle: "Overview",
      framingTitle: "Context & objectives",
      actionTitle: "Action",
      resultsTitle: "Results",
      criticalTitle: "Critical review",
      linkedSkillsTitle: "Skills involved",
    },
    items: {
      portailRh: realisationsEn.portailRh,
      reposComp: realisationsEn.reposComp,
      mobileComp: realisationsEn.mylab,
      ovoyage: realisationsEn.ovoyage,
      portfolio: realisationsEn.portfolio,
    },
  },
  parcours: {
    title: "Career Path",
    subtitle: "Anti-chronological timeline — most recent first",
    experienceTitle: "Professional experience",
    formationTitle: "Education",
    certificationTitle: "Certifications & degrees",
    showDetails: "Show details",
    hideDetails: "Hide details",
    status: "Status",
    presentation: "Overview",
    missions: "Missions",
    vision: "Vision",
    entries: {
      orangeBac5: {
        period: "Mar. 2025 — Mar. 2027",
        title: "Fullstack Developer — Master's in Software Engineering (Bac +5)",
        place: "Orange Business",
        status: "Work-study program (2nd year - EIL Title)",
        missions:
          "MS-TP-RC microservice development (Angular 18, Java 17 / Spring Boot 3), HR Portal Third-Party Maintenance (TMA) and feature evolutions, and modern web architecture design.",
        vision:
          "Orange Business vision centers on operational excellence, robust enterprise IT security, and continuous innovation driving B2B digital transformation.",
      },
      orangeBac3: {
        period: "Nov. 2023 — Dec. 2024",
        title: "Fullstack Developer — Application Designer & Developer (Bac +3)",
        place: "Orange Business",
        status: "Work-study program (1st year - CDA Title)",
        missions:
          "Complete refactoring of the HR Redirection Portal (Angular 18, NestJS, TypeORM, MySQL, Docker Compose, CloudFoundry) and contribution to the MyLab mobile project.",
        vision:
          "Hands-on immersion within an enterprise software engineering unit emphasizing methodological rigor, SCRUM agility, systematic code reviews, and continuous deployment.",
      },
      oclock: {
        period: "Jan. 2023 — Jun. 2023",
        title: "Fullstack JavaScript Web Developer Bootcamp (Bac +2)",
        place: "O'clock",
        presentation:
          "Intensive 6-month remote training (644h via Transitions Pro). 476h core curriculum (HTML/CSS, JavaScript, Node.js, SQL, MVC) followed by a 168h Data specialization (advanced SQL, GraphQL, ORM, PostgreSQL).",
        vision:
          "Active pedagogy based on daily practice, agile teamwork, and a collaborative apotheosis project (O'Voyage).",
      },
      care: {
        period: "Oct. 2014 — Aug. 2023",
        title: "Home Care Assistant",
        place: "APF France Handicap — Villeneuve d'Ascq",
        status: "Permanent contract (8 years experience)",
        missions:
          "Daily support for individuals with disabilities. Autonomous schedule planning, priority management, and complex care interventions (endotracheal aspiration certification).",
        vision:
          "The foundational human experience that forged my key soft skills: empathy, active listening, resilience, and rigorous organization.",
      },
    },
    certifications: {
      master: {
        date: "Mar. 2027 (expected)",
        title: "Master's in Software Engineering — RNCP 35419 (Level 7) 🔄 In progress",
      },
      cda: {
        date: "Dec. 2024",
        title: "Professional Title 'Application Designer & Developer' — RNCP 31678 (Level 6)",
      },
      dwwm: {
        date: "Jun. 2023",
        title: "Professional Title 'Web and Mobile Web Developer' — RNCP 31114 (Level 5)",
      },
      assp: {
        date: "Jun. 2013",
        title: "Vocational Baccalaureate ASSP (Accompanying, Care and Services to People)",
      },
    },
  },
  chevrons: {
    stack: "My stack",
    past: "My background",
    formation: "The transition",
    experience: "Today",
    projects: "My projects",
    contact: "Contact",
  },
  techTooltip: {
    experience: {
      yearsAndMonths: "{{years}} years and {{months}} months",
      yearsOnly: "{{years}} years",
      monthsOnly: "{{months}} months",
      lessThanMonth: "Less than a month",
      lessThanYear: "Less than a year",
      ofExperience: "of experience",
    },
  },
};

export default en;
