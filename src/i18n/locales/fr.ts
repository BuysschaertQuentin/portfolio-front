import type { Translations } from "../types";
import { skillsFr } from "./competences";
import { realisationsFr } from "./realisations";

const fr: Translations = {
  nav: {
    experience: "Expérience",
    formation: "Formation",
    past: "Parcours",
    projects: "Projets",
    stack: "Stack",
    contact: "Contact",
    skipToContent: "Aller au contenu principal",
    about: "Profil",
    competences: "Compétences",
    realisations: "Réalisations",
    parcours: "Parcours",
    sendEmail: "Envoyer un e-mail",
  },
  hero: {
    subtitle: "Portfolio 2026",
    title: "Développeur",
    titleHighlight: "Fullstack",
    description: "De l'accompagnement humain au code, je construis des solutions web avec",
    quality1: "rigueur",
    quality2: "empathie",
    quality3: "passion",
    and: "et",
    downloadCv: "Télécharger CV",
    discoverPath: "Découvrir ma reconversion atypique",
    heroAlt: "Développeur fullstack accueilli dans une entreprise, style pixel art",
    coreStackLabel: "Stack principale",
    secondaryStackLabel: "Stack transversale",
  },
  experience: {
    sectionLabel: "Expérience actuelle",
    bac3Label: "Expérience Bac+3",
    bac5Label: "Expérience Bac+5",
    title: "Développeur Fullstack —",
    company: "Orange Business",
    status: "Alternance — Nov. 2023 à Mars 2027",
    description:
      "En alternance chez Orange Business, je participe au développement d'applications internes en utilisant des technologies modernes. Je travaille au sein d'une équipe agile, contribuant à la conception et l'implémentation de fonctionnalités front et back.",
    imgAlt:
      "Développeur en alternance chez Orange Business travaillant sur Angular et NestJS, style pixel art",
    cta: "Voir mes réalisations",
  },
  formation: {
    sectionLabel: "Formation",
    title: "Bootcamp",
    school: "O'clock",
    duration: "Formation intensive — Jan. à Juin 2023 (Transitions Pro)",
    description:
      "Une immersion totale dans le développement web. 6 mois de formation intensive pour maîtriser les fondamentaux du front-end et du back-end. Un rythme exigeant qui a forgé ma",
    quality1: "rigueur",
    and: "et confirmé ma",
    quality2: "passion",
    forCode: "pour le code.",
    imgAlt: "Étudiant en bootcamp O'clock apprenant HTML, CSS et JavaScript, style pixel art",
    cta: "Découvrir mon parcours détaillé",
  },
  past: {
    sectionLabel: "De l'accompagnement médico-social au développement web",
    title: "Auxiliaire de vie —",
    titleHighlight: "9 ans d'humanité",
    description:
      "D'octobre 2014 à septembre 2023, j'ai accompagné des personnes en situation de handicap dans leurs quotidien. Cette expérience profondément humaine m'a doté de compétences transversales qui font aujourd'hui ma force en tant que développeur.",
    imgAlt: "Auxiliaire de vie accompagnant une personne en situation de handicap, style pixel art",
    empathy: "Empathie",
    empathyDesc: "Écoute active et bienveillance au quotidien",
    resilience: "Résilience",
    resilienceDesc: "Gestion du stress et adaptation permanente",
    priorities: "Gestion des priorités",
    prioritiesDesc: "Organisation rigoureuse et autonomie",
    teamwork: "Travail d'équipe",
    teamworkDesc: "Collaboration avec familles et professionnels",
    cta: "Explorer mes compétences humaines",
  },
  projects: {
    sectionLabel: "Réalisations",
    title: "Projets",
    professional: "Projets professionnels",
    personal: "Projets personnels",
    sourceCodeAria: "Code source de",
    viewProjectAria: "Voir le projet",
    cta: "Voir tous les projets détaillés",
    detailsCta: "Détails du projet",
    proProjects: {
      orangeTitle: "Application interne Orange",
      orangeDesc:
        "Développement d'une application de gestion interne avec Angular et NestJS, déployée sur CloudFoundry.",
    },
    persoProjects: {
      portfolioTitle: "Portfolio personnel",
      portfolioDesc:
        "Ce portfolio en React avec un design retro-futuriste, mode sombre et pixel art.",
      botTitle: "Bot Discord",
      botDesc: "Bot communautaire avec commandes personnalisées et intégration d'APIs externes.",
    },
  },
  stack: {
    sectionLabel: "Compétences",
    title: "Stack Technique",
    core: "Stack principale",
    transversal: "Compétences transversales",
    cta: "Explorer mes compétences techniques & humaines",
  },
  contact: {
    sectionLabel: "Échangeons",
    title: "Contact",
    description:
      "Vous avez un projet, une opportunité ou simplement envie d'échanger ? N'hésitez pas à me contacter.",
    nameLabel: "Nom",
    namePlaceholder: "Votre nom",
    emailLabel: "Email",
    emailPlaceholder: "votre@email.com",
    messageLabel: "Message",
    messagePlaceholder: "Votre message...",
    send: "Envoyer",
  },
  footer: {
    copyright: import.meta.env.VITE_FULL_NAME + " — Développeur Fullstack",
  },
  notFound: {
    title: "404",
    message: "Oups ! Page introuvable",
    backHome: "Retour à l'accueil",
  },
  a11y: {
    newTab: "(s'ouvre dans un nouvel onglet)",
  },
  common: {
    loading: "Chargement...",
  },
  about: {
    title: "Profil",
    intro:
      "Développeur Fullstack passionné et rigoureux chez Orange Business, j'allie une solide expertise technique (React, Angular, NestJS, Flutter, Java) à de fortes qualités humaines forgées par 8 ans d'expérience dans le soin. Mon approche est axée sur la qualité logicielle, la curiosité permanente et l'engagement d'équipe.",
    proProjectTitle: "Projet professionnel",
    proProjectDesc:
      "Valider mon **Titre Pro Expert en Ingénierie du Logiciel (Bac +5 EIL)** et évoluer en tant qu'**Ingénieur / Architecte Logiciel Fullstack**, si possible au sein de mon entreprise actuelle chez **Orange Business**.\n\n- **Stack de prédilection** : Continuer à approfondir et pratiquer **Angular** et **Java / Spring Boot**.\n- **Compétences DevOps** : Développer mon expertise sur l'orchestration de conteneurs (**Kubernetes**).\n- **Écosystème Cloud** : Évoluer vers les solutions Cloud majeures (**AWS**, **GCP**).",
    persoProjectTitle: "Projet personnel",
    persoProjectDesc:
      "Concevoir des jeux vidéo indépendants sur navigateur web avec Phaser.js, tout en explorant les avancées des agents IA autonomes et de l'écosystème open-source.",
    softSkillsTitle: "Qualités humaines",
    softSkillsSubtitle: "Aperçu de mes principales qualités — détails dans la page Compétences.",
    seeMore: "En savoir plus →",
    interestsTitle: "Centres d'intérêt",
    interests: {
      interest1: "Développement de Jeux Vidéo",
      interest1Desc: "Création de mécaniques réactives et de jeux web sous Phaser.js et Flutter.",
      interest2: "Technologies IA & Agents",
      interest2Desc:
        "Exploration des serveurs MCP, de l'IA générative et de l'ingénierie assistée.",
      interest3: "Hardware & DevOps",
      interest3Desc: "Passion pour les conteneurs Docker, les architectures serveurs et le cloud.",
      interest4: "Veille & Auto-formation",
      interest4Desc:
        "Apprentissage continu de nouveaux frameworks (Java 17, Spring Boot 3, Vue 3).",
    },
  },
  competences: {
    title: "Compétences",
    subtitle: "Mes compétences clés — humaines et techniques",
    humanTitle: "Compétences humaines",
    technicalTitle: "Compétences techniques",
    categories: {
      "front-end": "Front-end",
      "back-end": "Back-end",
      devops: "DevOps",
      cloud: "Cloud",
      ia: "Compétences IA",
      transversale: "Transversale",
    },
    legend: {
      filterTitle: "Filtrer par tag :",
      specialty: "Spécialité",
      wish: "Ce que je voudrais faire",
    },
    backToList: "Retour aux compétences",
    detail: {
      definitionTitle: "Définition",
      proofsTitle: "Mises en pratique",
      selfCritiqueTitle: "Autocritique",
      hindsightTitle: "Recul",
      evolutionTitle: "Évolution",
      linkedRealisationsTitle: "Réalisations liées",
      noLinkedRealisations: "Aucune réalisation liée pour le moment.",
    },
    skills: skillsFr,
  },
  realisations: {
    title: "Réalisations",
    subtitle: "Projets — professionnels, personnels et de formation",
    contextPro: "Projet professionnel",
    contextPerso: "Projet personnel",
    contextFormation: "Projet de formation",
    backToList: "Retour aux réalisations",
    detail: {
      definitionTitle: "Présentation",
      framingTitle: "Cadrage",
      actionTitle: "Action",
      resultsTitle: "Bilan",
      criticalTitle: "Regard critique",
      linkedSkillsTitle: "Compétences mobilisées",
    },
    items: {
      portailRh: realisationsFr.portailRh,
      reposComp: realisationsFr.reposComp,
      mobileComp: realisationsFr.mylab,
      ovoyage: realisationsFr.ovoyage,
      portfolio: realisationsFr.portfolio,
    },
  },
  parcours: {
    title: "Parcours professionnel",
    subtitle: "Frise anti-chronologique — du plus récent au plus ancien",
    experienceTitle: "Expériences professionnelles",
    formationTitle: "Formations",
    certificationTitle: "Certifications & diplômes",
    showDetails: "Voir le détail",
    hideDetails: "Masquer le détail",
    status: "Statut",
    presentation: "Présentation",
    missions: "Missions",
    vision: "Vision",
    entries: {
      orangeBac5: {
        period: "Mars 2025 — Mars 2027",
        title: "Développeur Fullstack — Master Ingénierie Logicielle (Bac +5)",
        place: "Orange Business",
        status: "Alternance (2ème année - Titre Pro EIL)",
        missions:
          "Développement du microservice MS-TP-RC (Angular 18, Java 17 / Spring Boot 3), Tierce Maintenance Applicative (TMA) et évolutions du Portail RH, et conception d'architectures web modernes.",
        vision:
          "La vision d'Orange Business s'articule autour de l'excellence opérationnelle, de la sécurité renforcée des SI d'entreprise et de l'innovation continue au service de la transformation digitale.",
      },
      orangeBac3: {
        period: "Nov. 2023 — Déc. 2024",
        title: "Développeur Fullstack — Concepteur Développeur d'Applications (Bac +3)",
        place: "Orange Business",
        status: "Alternance (1ère année - Titre Pro CDA)",
        missions:
          "Refactoring complet du Portail de Redirection RH (Angular 18, NestJS, TypeORM, MySQL, Docker Compose, CloudFoundry) et participation au projet mobile MyLab.",
        vision:
          "Une immersion au cœur d'une entité d'ingénierie d'entreprise valorisant la rigueur méthodologique, l'agilité SCRUM, les revues de code systématiques et le déploiement continu.",
      },
      oclock: {
        period: "Janv. 2023 — Juin 2023",
        title: "Bootcamp Développeur Web Fullstack JavaScript (Bac +2)",
        place: "O'clock",
        presentation:
          "Formation intensive de 6 mois en téléprésentiel (644h via Transitions Pro). Socle de 476h (HTML/CSS, JavaScript, Node.js, SQL, MVC) suivi d'une spécialisation Data de 168h (SQL avancé, GraphQL, ORM, PostgreSQL).",
        vision:
          "Une pédagogie active basée sur la pratique quotidienne, le travail en équipe agile et la réalisation d'un projet d'apothéose collaboratif (O'Voyage).",
      },
      care: {
        period: "Oct. 2014 — Août 2023",
        title: "Auxiliaire de vie à domicile",
        place: "APF France Handicap — Villeneuve d'Ascq",
        status: "CDI (8 ans d'expérience)",
        missions:
          "Accompagnement quotidien de personnes en situation de handicap. Organisation autonome des plannings, gestion des priorités et interventions de soin complexes (aspirations endotrachéales).",
        vision:
          "L'expérience humaine fondatrice qui a forgé mes compétences humaines : l'empathie, l'écoute active, la résilience et l'organisation rigoureuse.",
      },
    },
    certifications: {
      master: {
        date: "Mars 2025 - Mars 2027",
        title: "Master Ingénierie Logicielle - RNCP 35419",
      },
      cda: {
        date: "Déc. 2024",
        title: "Titre Professionnel « Concepteur Développeur d'Applications » - RNCP 31678",
      },
      dwwm: {
        date: "Juin 2023",
        title: "Titre Professionnel « Développeur Web et Web Mobile » - RNCP 31114",
      },
      assp: {
        date: "Juin 2013",
        title: "Bac Pro ASSP (Accompagnement, Soins et Services aux Personnes)",
      },
    },
  },
  chevrons: {
    stack: "Ma stack",
    past: "Mes origines",
    formation: "La transition",
    experience: "Aujourd'hui",
    projects: "Mes réalisations",
    contact: "Contact",
  },
  techTooltip: {
    experience: {
      yearsAndMonths: "{{years}} ans et {{months}} mois",
      yearsOnly: "{{years}} ans",
      monthsOnly: "{{months}} mois",
      lessThanMonth: "Moins d'un mois",
      lessThanYear: "Moins d'un an",
      ofExperience: "d'expérience",
    },
  },
};

export default fr;
