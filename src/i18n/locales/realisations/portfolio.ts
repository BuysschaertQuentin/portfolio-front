export const portfolioFr = {
  title: "Portfolio Professionnel",
  shortDesc:
    "Application web interactive de présentation de parcours, compétences et réalisations — React 19, TypeScript, Tailwind CSS, i18n, Vite.",
  definition:
    "**Portfolio Pro** est l'application web interactive sur laquelle vous naviguez actuellement. Je l'ai conçue et développée sur-mesure pour centraliser et valoriser mon parcours de reconversion, mes compétences techniques Fullstack, mon CV interactif et l'ensemble de mes réalisations professionnelles et académiques.",
  framing:
    "Le cadrage de ce projet repose sur une exigence précise : **respecter la grille d'évaluation et les consignes fournies par mon école** pour répondre aux attentes du certificateur du Titre Professionnel Expert en Ingénierie du Logiciel (Bac +5). J'ai structuré la présentation de chaque projet pour mettre en avant non seulement les choix d'architecture technique (React 19, TypeScript, Flutter, Spring Boot, Vue 3, NestJS), mais également les compétences d'ingénierie transversales : leadership, gestion des aléas d'équipe, médiation métier et méthode agile SCRUM.",
  action:
    "Mon travail sur ce portfolio s'est décomposé en 3 chantiers majeurs : la conception d'une architecture Front-End moderne sous **React 19, TypeScript 5.9, Vite 7 et Tailwind CSS v4** intégrant un système d'internationalisation bilingue (i18n FR/EN) et un moteur de rendu de texte structuré ; la rédaction complète et méthodique des projets selon les directives du certificateur ; et l'application des bonnes pratiques de qualité logicielle (tests unitaires sous Vitest, typage strict TypeScript, accessibilité WCAG et déploiement continu).",
  results:
    "J'ai développé et déployé une application web fluide et réactive qui répond scrupuleusement aux exigences du réferentiel du certificateur, tout en offrant une vitrine claire et accessible de l'ensemble de mon savoir-faire technique et humain.",
  critical:
    "Ce projet a été une immense satisfaction personnelle. J'ai été ravi de réutiliser **React à un niveau d'expertise nettement plus poussé** qu'à l'époque de mon Bac +2. Je suis fier d'avoir réalisé ce portfolio digne de ce nom, démontrant toutes les compétences acquises au cours des dernières années, et j'espère qu'il saura m'ouvrir de nouvelles opportunités professionnelles enrichissantes !",

  tabs: {
    project: {
      label: "Le Projet",
      title: "Vue d'ensemble et Objectifs du Portfolio",
      badge: "Contexte Applicatif",
      content:
        "### Contexte du Portfolio\nAprès plusieurs années d'expérience et l'obtention successive de mes diplômes **DWWM (Bac +2)** et **CDA (Bac +3/4)** chez Orange Business, j'ai entrepris la validation du **Titre Pro Expert en Ingénierie du Logiciel (Bac +5)**. Pour présenter mes travaux et répondre aux exigences de la formation, j'ai créé ce portfolio interactif démontrant ma maîtrise des technologies et des méthodes d'ingénierie logicielle.\n\n### Objectifs Applicatifs\n- **Centralisation du Parcours** : Mettre en valeur ma reconversion réussie depuis mon ancien métier d'auxiliaire de vie à domicile jusqu'à mes fonctions d'ingénieur logiciel chez Orange Business.\n- **Showcase des Réalisations** : Offrir une navigation détaillée par onglets (`Le Projet`, `Situations d'Évaluation`, `Synthèse`) pour chaque réalisation d'envergure.\n- **Internationalisation & Accessibilité** : Proposer un basculement bilingue Français / Anglais (i18n) et un design moderne réactif accessible sur tous les écrans.\n\n### Stack Technique Globale\n- **Core Framework & Build Tool** : React 19, TypeScript 5.9, Vite 7 avec compilateur SWC.\n- **Styling & Design System** : Tailwind CSS v4, Lucide React (iconographie), animations CSS fluides, effets de glassmorphism et contrastes sombres soignés.\n- **Routing & i18n** : React Router DOM v7, système d'internationalisation bilingue basé sur un Contexte React et des hooks personnalisés.\n- **Qualité & Tests** : Vitest, React Testing Library, ESLint 9 et Prettier.\n\n### Méthodologie & Architecture Modulaire\nJ'ai découpé l'application en modules spécialisés suivant les principes SOLID, DRY et KISS pour séparer clairement les composants d'interface, la gestion des routes, le moteur de traduction et l'analyse du texte.",
    },

    situation1: {
      label: "1. Architecture React 19 & i18n",
      title: "Situation 1 — Architecture Front-End React 19, TypeScript & Système i18n Sur-Mesure",
      badge: "Architecture Logicielle & React 19",
      framing:
        "Le premier défi technique de ce portfolio a été de concevoir une architecture Front-End moderne, modulaire et ultra-performante, tout en intégrant un système d'internationalisation léger et un moteur de rendu de contenu structuré.",
      action:
        "### Socle Technique : React 19, Vite 7 & TypeScript\nJ'ai retenu **React 19** combiné à **Vite 7** pour bénéficier d'un temps de démarrage instantané et de builds de production extrêmement rapides grâce au compilateur SWC. L'intégralité du code est strictement typée sous **TypeScript 5.9**, garantissant une auto-complétion parfaite et l'élimination des erreurs à la compilation.\n\n### Moteur i18n Bilingue (FR/EN) par Contexte React\nPlutôt que d'alourdir l'application avec une bibliothèque tierce volumineuse, j'ai développé un **système d'internationalisation sur-mesure** basé sur le Contexte React et un hook personnalisé :\n- Stockage de la langue active dans le stockage local du navigateur pour préserver le choix de l'utilisateur.\n- Découpage modulaire des traductions par domaine applicatif.\n- Chargement dynamique des objets de langue sans rechargement de page.\n\n### Moteur de Rendu de Contenu & Parseur de Texte\nPour afficher proprement le contenu détaillé des fiches projets, j'ai développé un composant utilitaire de formatage de texte :\n- Analyse et transformation dynamique des titres structurés en éléments HTML typés.\n- Conversion sécurisée des styles de mise en forme et des listes en éléments React réactifs.",
      results:
        "J'ai conçu une architecture React 19 / TypeScript élégante, robuste et réactive, offrant un basculement bilingue instantané et une gestion fluide du rendu des contenus.",
    },

    situation2: {
      label: "2. Conformité & Méthodologie",
      title: "Situation 2 — Conformité aux Recommandations du Certificateur & Démarche d'Ingénierie",
      badge: "Conformité Certificateur & Qualité",
      framing:
        "L'objectif central du portfolio était d'apporter une démonstration rigoureuse de mes compétences en respectant les directives fournies par mon école pour le Titre Pro Expert en Ingénierie du Logiciel (Bac +5).",
      action:
        "### Application des Consignes du Certificateur\nJ'ai structuré la présentation de chaque projet pour refléter les exigences du référentiel :\n- **Mise en Avant des Compétences d'Ingénieur** : Au-delà du code, chaque fiche détaille les aspects d'ingénierie transversaux : écoute active des utilisateurs, médiation inter-services, gestion des crises d'effectif, réorganisation des plannings et partenariats d'infrastructure.\n- **Rédaction Réfléchie & Richesse des Récits** : Rédaction méthodique à la 1ère personne du singulier, couvrant le contexte métier, les objectifs, les défis techniques et le bilan critique.\n\n### Navigation Dynamique par Onglets\nJ'ai conçu la page détaillée des projets avec un système d'onglets personnalisés par projet, permettant au lecteur de naviguer intuitivement entre la vue d'ensemble du projet, les différentes situations d'évaluation et le bilan de synthèse.",
      results:
        "L'ensemble des projets du portfolio répond exactement aux consignes du certificateur, offrant une présentation claire et structurée de mon savoir-faire technique et humain.",
    },

    synthesis: {
      label: "Mon Bilan & Regard Critique",
      title: "Bilan global, Regard Critique & Perspectives Professionnelles",
      badge: "Auto-Évaluation, Fierté & Perspectives",
      content:
        "### Bilan du Respect des Consignes\nJ'ai apporté une attention maximale au respect des directives fournies par mon école. Chaque section a été rédigée avec rigueur pour démontrer au certificateur la maturité, la méthode et la posture d'un **Expert en Ingénierie du Logiciel (Bac +5)**.\n\n### Regard Critique & Plaisir de Réutiliser React\nCe projet de portfolio a été une expérience particulièrement stimulante :\n- **Montée en Compétence sur React** : J'ai été ravi de réutiliser **React à un niveau nettement plus poussé** qu'à l'époque de mon Titre Pro DWWM (Bac +2). La découverte des capacités de React 19, de Tailwind CSS v4 et de la puissance du typage sous TypeScript 5.9 a rendu le développement passionnant.\n- **Fierté d'un Portfolio Digne de ce Nom** : Je suis fier d'avoir créé un portfolio moderne, élégant et structuré, retraçant fidèlement mon parcours depuis mes 8 ans comme auxiliaire de vie jusqu'à aujourd'hui.\n\n### Perspectives Professionnelles\nJ'espère que ce portfolio saura valoriser mon parcours et m'ouvrir de nouvelles opportunités professionnelles enrichissantes dans le développement logiciel Fullstack et l'architecture applicative !",
    },
  },
};

export const portfolioEn = {
  title: "Professional Portfolio",
  shortDesc:
    "Interactive web application showcasing career journey, skills, and projects — React 19, TypeScript, Tailwind CSS, i18n, Vite.",
  definition:
    "**Portfolio Pro** is the interactive web application you are currently navigating. I custom-designed and developed it to centralize and highlight my career transition, Fullstack technical skills, interactive resume, and all my professional and academic projects.",
  framing:
    "The framing of this project rests on a strict requirement: **adhere to the evaluation grid and guidelines provided by my school** to fulfill the certifier's expectations for the Master's Degree in Software Engineering (Bac +5). For each project, I structured the presentation to highlight not only technical architecture choices (React 19, TypeScript, Flutter, Spring Boot, Vue 3, NestJS), but also transversal engineering skills: leadership, team volatility management, business mediation, and SCRUM agility.",
  action:
    "My engineering work on this portfolio was broken down into 3 major pillars: designing a modern Front-End architecture under **React 19, TypeScript 5.9, Vite 7, and Tailwind CSS v4** integrating a bilingual internationalization system (i18n FR/EN) and a structured text rendering engine; comprehensive and methodical project authoring according to certifying guidelines; and applying software quality best practices (Vitest unit tests, strict TypeScript typing, WCAG accessibility, and continuous deployment).",
  results:
    "I developed and deployed a fluid and reactive web application that strictly fulfills certifier requirements, providing a clear and accessible showcase of all my technical and human expertise.",
  critical:
    "This project has been a source of immense personal satisfaction. I was delighted to re-engage with **React at a much higher level of mastery** than back during my Associate Degree days. I am proud to have created a portfolio worthy of its name, demonstrating all skills acquired over recent years, and I hope it will open exciting new professional opportunities!",

  tabs: {
    project: {
      label: "The Project",
      title: "Overview & Portfolio Objectives",
      badge: "Application Scope",
      content:
        "### Portfolio Context\nFollowing several years of experience and earning my **DWWM (Bac +2)** and **CDA (Bac +3/4)** degrees at Orange Business, I embarked on validating the **Master's Degree in Software Engineering (Bac +5)**. To present my work and fulfill training requirements, I created this interactive portfolio demonstrating my mastery of software engineering technologies and methods.\n\n### Application Objectives\n- **Career Centralization**: Highlight my successful pivot from 8 years as a home care assistant to my software engineer role at Orange Business.\n- **Projects Showcase**: Provide tabbed navigation (`The Project`, `Evaluation Situations`, `Summary`) for each major project.\n- **Internationalization & Accessibility**: Offer seamless bilingual French / English switching (i18n) and a modern responsive dark design accessible across all screens.\n\n### Global Tech Stack\n- **Core Framework & Build Tool**: React 19, TypeScript 5.9, Vite 7 with SWC compiler.\n- **Styling & Design System**: Tailwind CSS v4, Lucide React (iconography), smooth CSS animations, glassmorphism effects, and refined dark contrast.\n- **Routing & i18n**: React Router DOM v7, custom bilingual internationalization system powered by React Context and custom hooks.\n- **Quality & Testing**: Vitest, React Testing Library, ESLint 9, and Prettier.\n\n### Modular Architecture\nI structured the application into specialized modules following SOLID, DRY, and KISS principles to clearly separate UI components, route management, translation engine, and text parsing.",
    },

    situation1: {
      label: "1. React 19 & i18n Architecture",
      title: "Situation 1 — Front-End Architecture React 19, TypeScript & Custom i18n System",
      badge: "Software Architecture & React 19",
      framing:
        "The primary technical challenge of this portfolio was architecting a modern, modular, high-performance Front-End while building a lightweight internationalization system and content rendering engine.",
      action:
        "### Tech Core: React 19, Vite 7 & TypeScript\nI chose **React 19** paired with **Vite 7** for instant startup and lightning-fast production builds thanks to the SWC compiler. Code is strictly typed under **TypeScript 5.9**, ensuring complete autocompletion and compile-time bug elimination.\n\n### Custom Bilingual i18n System (FR/EN)\nInstead of adding heavy third-party libraries, I developed a **custom internationalization system** powered by React Context and a custom hook:\n- Active language saved in browser local storage to preserve user preference.\n- Modular translation decoupling per domain.\n- Dynamic loading of language objects without page reloads.\n\n### Content Rendering Engine & Text Parser\nTo render detailed project content cleanly, I created a custom text formatting utility:\n- Dynamic parsing of structured headings into typed HTML elements.\n- Secure conversion of text styling and lists into reactive React elements.",
      results:
        "I designed an elegant, robust React 19 / TypeScript architecture delivering instant bilingual language switching and fluid content rendering.",
    },

    situation2: {
      label: "2. Compliance & Methodology",
      title: "Situation 2 — Compliance with Certifier Guidelines & Engineering Approach",
      badge: "Certifier Compliance & Quality",
      framing:
        "The core goal of the portfolio was providing a rigorous demonstration of my competencies respecting the guidelines provided by my school for the Master's Degree in Software Engineering (Bac +5).",
      action:
        "### Application of Certifier Guidelines\nI aligned every project presentation with certifying requirements:\n- **Highlighting Engineering Skills**: Beyond code, each project details transversal engineering aspects: active user listening, inter-departmental mediation, staffing crisis management, schedule reorganization, and infrastructure partnerships.\n- **Methodical Authoring**: Written thoughtfully in the 1st person singular, covering business context, goals, technical challenges, and critical reviews.\n\n### Dynamic Tabbed Navigation\nI designed the project detail page with a custom tab configuration, enabling readers to navigate intuitively between project overview, evaluation situations, and final synthesis.",
      results:
        "All portfolio projects fulfill certifier guidelines, providing a clear and structured showcase of my technical and human expertise.",
    },

    synthesis: {
      label: "My Summary & Critical View",
      title: "Overall Retrospective, Critical View & Career Perspectives",
      badge: "Self-Evaluation, Pride & Future Scope",
      content:
        "### Retrospective on Compliance\nI paid maximum attention to adhering to the guidelines provided by my school. Every section was written with rigor to demonstrate the maturity, methodology, and posture of a **Master's Software Engineer (Bac +5)**.\n\n### Critical View & Joy of Re-engaging with React\nThis portfolio project has been a deeply rewarding experience:\n- **Skill Growth in React**: I was thrilled to re-engage with **React at a much higher level of mastery** than during my Associate Degree. Exploring React 19 capabilities, Tailwind CSS v4, and TypeScript 5.9 strict typing made development exciting.\n- **Pride in a True Portfolio**: I am proud to have created a modern, elegant, and structured portfolio faithfully tracing my journey from 8 years as a home care assistant to software engineer today.\n\n### Career Perspectives\nI hope this portfolio highlights my journey and opens exciting new professional opportunities in Fullstack software development and application architecture!",
    },
  },
};
