export const ovoyageFr = {
  title: "O'Voyage — Planificateur de Voyage Collaboratif",
  shortDesc:
    "Application web collaborative d'organisation de voyages — Vue 3, NestJS, GraphQL, TypeORM, PostgreSQL, Sqitch, DigitalOcean.",
  definition:
    "**O'Voyage** est un planificateur de voyage collaboratif développé initialement en équipe lors du projet d'apothéose de la formation O'Clock (Titre Pro DWWM Bac +2), puis intégralement refondu et optimisé par mes soins. L'application permet à des groupes d'amis, des familles ou des voyageurs solo de centraliser sur un espace unique l'organisation de leurs séjours : itinéraires, hébergements, activités quotidiennes interactivement planifiées et calcul de budget en temps réel.",
  framing:
    "Ce projet a été réalisé en équipe de 5 développeurs sous la méthodologie **SCRUM Agile** (4 sprints d'une semaine). Lors des sprints collectifs, j'ai pris la responsabilité de l'architecture Back-End sous **NestJS, GraphQL, TypeORM et PostgreSQL avec Sqitch**. Après la formation, animé par le désir de me surpasser et d'optimiser l'expérience utilisateur, j'ai entrepris la **refonte intégrale du Front-End en Vue 3 (Composition API, Pinia, Vue Router, Tailwind CSS)**, en portant une attention particulière au SEO sémantique, à l'accessibilité WCAG et aux performances.",
  action:
    "Mon travail s'est articulé autour de 4 axes d'ingénierie majeurs : le pilotage agile en équipe (SCRUM, gestion de projet GitHub Projects, revues de PR systématiques) ; l'architecture Back-End GraphQL & SGBD (NestJS, TypeORM, optimisation DataLoader contre le problème N+1, migrations Sqitch réversibles et fonctions stockées SQL) ; le déploiement DevOps autonome sur **DigitalOcean et AlwaysData** ; et la refonte Front-End Vue 3 avec optimisation de la sémantique HTML5, gestion SEO dynamique via `@unhead` et audits Lighthouse.",
  results:
    "J'ai présenté et validé le projet **O'Voyage** avec mon équipe devant la promotion et le jury O'Clock. Ma refonte personnelle en Vue 3 a permis d'obtenir une application ultra-performante, parfaitement accessible et déployée en ligne de manière pérenne sur infrastructure cloud.",
  critical:
    "Ce projet a été une étape humaine et technique fondatrice. Il m'a appris à surmonter les moments de doute grâce au soutien du collectif, à piloter un projet agile avec rigueur et à maîtriser des architectures de données complexes (GraphQL, DataLoader, ORM) tout en poussant l'exigence jusqu'à la refonte autonome du Front-End.",

  tabs: {
    project: {
      label: "Le Projet",
      title: "Vue d'ensemble, Contexte Agile & Refonte Personnelle",
      badge: "Contexte Applicatif & Esprit d'Équipe",
      content:
        "### Le Problème Métier : Organiser un Voyage en Groupe\nOrganiser un séjour à plusieurs (en famille, entre amis ou en couple) est souvent source de désorganisation : fichiers éparpillés sur Drive, conversations Messenger noyées sous les liens et courriels interminables. **O'Voyage** résout ce problème en centralisant l'intégralité du séjour sur une plateforme web unique et intuitive.\n\n### Fonctionnalités Principales\n- **Création & Gestion de Voyages** : Définition des dates, destination, budget global et invitation de collaborateurs.\n- **Planning d'Activités & Timeline** : Organisation jour par jour des activités avec affichage dynamique sur une timeline horaire.\n- **Calcul de Budget en Temps Réel** : Suivi automatique des dépenses par catégorie (hébergement, repas, transports) et déduction du solde restant.\n- **Espace Administrateur & Sécurité** : Back-office d'administration et gestion des rôles (Admin / Utilisateur) sécurisée par tokens JWT.\n\n### Stack Technique Globale\n- **Front-End (Refonte)** : Vue 3 (Composition API), Pinia (gestion d'état), Vue Router, Tailwind CSS, `@unhead` (SEO dynamique).\n- **Back-End** : NestJS (framework TypeScript), Express.js, GraphQL (API Apollo Server), TypeORM.\n- **Base de Données & DevOps** : PostgreSQL, Sqitch (migrations SQL versionnées), Bcrypt, hébergement cloud sur DigitalOcean et AlwaysData.\n\n### Organisation Agile & Refonte Autonome\n- **Projet d'Équipe initial (Apothéose O'Clock)** : Réalisé à 5 développeurs sous méthodologie **SCRUM** en 4 sprints (Sprint 0 : User Stories, MCD/MLD, wireframes Figma ; Sprint 1 : socle et premier déploiement ; Sprint 2 : développement des fonctionnalités ; Sprint 3 : recette et présentation finale).\n- **Initiative de Refonte Personnelle** : N'ayant géré que le Back-End lors du projet d'équipe (le Front-End initial étant un prototype React/Redux), j'ai décidé de refaire l'intégralité du Front-End en **Vue 3** afin de me challenger, d'appliquer les meilleures pratiques de sémantique HTML5, de SEO et d'accessibilité WCAG.",
    },

    situation1: {
      label: "1. Agilité & Démarche d'Équipe",
      title: "Situation 1 — Organisation Agile SCRUM, Collaboration & Dépassement de Soi",
      badge: "Gestion de Projet & Dynamique d'Équipe",
      framing:
        "Le projet O'Voyage s'est déroulé à la fin d'un cursus intensif de 6 mois. Après 4 mois de tronc commun et 1 mois de spécialisation Data, j'ai traversé une période de fatigue et de doute quant à mes capacités à assimiler des notions complexes. Mon premier défi d'ingénieur a été de surmonter ce doute grâce à la force du collectif et de prendre des responsabilités clés au sein de l'équipe.",
      action:
        "### Dynamique de Groupe & Entraide (Les Starships)\nSoutenu par mes 4 camarades de promotion, j'ai retrouvé ma motivation et décidé de me surpasser pour l'apothéose. J'ai proposé à l'équipe de mettre en œuvre des technologies exigeantes abordées en spécialisation Data (GraphQL, TypeORM, Sqitch) et d'en assumer l'architecture Back-End.\n\n### Organisation Agile SCRUM & Workflow Git\nNous avons mis en place une gestion de projet rigoureuse via **GitHub Projects** et un workflow Git structuré :\n- **Branches & Revues de Code** : Création de branches de fonctionnalités (`feat/`), obligation de faire relire et valider chaque Pull Request par un collègue avant fusion sur la branche `dev`.\n- **Synchronisation d'Équipe** : Envoi de notifications d'équipe lors des PRs, limitation du nombre de tâches en parallèle par développeur et fusion sur la branche `main` la veille de chaque fin de sprint après vérification globale des régressions.\n- **Sprint 0 Collaboratif** : Rédaction en commun des User Stories, élaboration de la matrice des rôles (Visiteur, Utilisateur, Organisateur, Admin), modélisation du MCD avec MOCODO et création des wireframes sur Figma.",
      results:
        "Cette dynamique collaborative m'a redonné une confiance totale en mes capacités. L'équipe a fonctionné en parfaite harmonie et a livré les 4 sprints dans les délais avec un code propre et révisé par les pairs.",
    },

    situation2: {
      label: "2. Back-End GraphQL & Sqitch",
      title: "Situation 2 — Architecture Back-End NestJS, GraphQL, TypeORM & Migrations Sqitch",
      badge: "Architecture de Données & Performance SQL",
      framing:
        "La conception du Back-End exigeait une API flexible capable de servir des données fortement imbriquées (voyages, journées, activités, utilisateurs) sans multiplier les requêtes HTTP ni surcharger la bande passante.",
      action:
        "### API GraphQL avec NestJS & Apollo Server\nJ'ai conçu l'API sous **NestJS** en intégrant **GraphQL et Apollo Server**. Plutôt que de multiplier les endpoints REST, j'ai mis en place une route unique GraphQL permettant au Front-End d'exprimer exactement les champs requis sous forme de requêtes et mutations JSON.\n\n### Résolution du Problème N+1 avec DataLoader\nLors du requêtage des entités liées (ex: récupérer les voyages avec leurs activités et participants), nous avons fait face à des risques de surcroît de requêtes SQL (problème N+1). J'ai recherché, configuré et intégré **DataLoader** pour grouper et mettre en cache les requêtes de récupération de données en mémoire. Bien que cette implémentation ait été l'une des plus complexes du projet, elle a considérablement optimisé les temps de réponse du serveur.\n\n### Modélisation BDD PostgreSQL & Migrations Sqitch\n- **TypeORM & Query Builder** : Définition des entités TypeScript réutilisables avec gestion des relations (`one-to-many`, `many-to-many`) et écriture de requêtes SQL sur-mesure via le Query Builder.\n- **Migrations Sqitch** : Gestion du schéma de base de données PostgreSQL via **Sqitch** (`sqitch.plan`, dossiers `deploy`, `revert`, `verify`). Cette approche m'a permis d'effectuer des modifications de schéma SQL versionnées et réversibles sans jamais altérer les données de production.\n- **Sécurité RBAC & Hachage** : Implémentation des guards NestJS (`AuthGuard`, `AdminGuard`), hachage des mots de passe avec **Bcrypt** et chiffrement **AES-256-GCM**.",
      results:
        "J'ai conçu un Back-End GraphQL robuste, sécurisé et hautement performant, capable de gérer des données complexes avec des temps de réponse optimisés grâce à DataLoader et Sqitch.",
    },

    situation3: {
      label: "3. Déploiement DevOps & Refonte Vue 3",
      title: "Situation 3 — Déploiement Cloud DevOps & Refonte Intégrale du Front-End en Vue 3",
      badge: "DevOps, SEO, Accessibilité & Vue.js",
      framing:
        "Après la fin du projet d'équipe, j'ai identifié deux axes d'amélioration majeurs : lever les contraintes d'hébergement temporaires et refondre l'interface Front-End (initialement en React) en **Vue 3** pour appliquer des standards élevés de sémantique, SEO et accessibilité.",
      action:
        "### Déploiement Cloud DevOps (DigitalOcean & AlwaysData)\nLors des tests, la VM de démonstration d'O'Clock s'arrêtait automatiquement au bout de 8 heures. Pour assurer la disponibilité permanente du site pour mon diplôme, j'ai pris l'initiative d'héberger le projet sur **DigitalOcean** en utilisant mon crédit GitHub Student Pack :\n- **Déploiement BDD** : Hébergement de la base PostgreSQL sur **AlwaysData** et rejeu de l'intégralité des scripts de migration `sqitch.plan`.\n- **Déploiement Back-End & Front-End** : Configuration des variables d'environnement sur DigitalOcean et connexion fluide de l'API GraphQL au client.\n\n### Refonte Intégrale du Front-End en Vue 3\nJ'ai réécrit l'intégralité de l'interface en **Vue 3 (Composition API)** et **Tailwind CSS** :\n- **Composants Réutilisables & Carrousel Animé** : Création d'une interface responsive avec carrousel d'images auto-défilant (gestion d'intervalles propre pour éviter les fuites mémoire lors de la destruction du composant).\n- **SEO Dynamique & Sémantique HTML5** : Intégration de `@unhead` pour modifier dynamiquement les balises `<title>` et `<meta description>` par page. Utilisation stricte des balises sémantiques (`<header>`, `<nav>`, `<article>`, `<aside>`) et hiérarchie de titres (`<h1>` à `<h3>`).\n- **Accessibilité WCAG & Audits Lighthouse** : Ajout systématique d'attributs `aria-label`, navigation complète au clavier (`Tab`) et optimisation du chargement des images d'après les audits Google Lighthouse.",
      results:
        "J'ai déployé l'application de manière pérenne en production cloud et livré un Front-End Vue 3 fluide, sémantique et accessible, salué pour sa qualité lors de ma présentation.",
    },

    synthesis: {
      label: "Mon Bilan & Regard Critique",
      title: "Bilan global, Regard Critique & Lendemains du projet",
      badge: "Auto-Évaluation, Dépassement & Posture d'Expert",
      content:
        "### Compétences confirmées et apprentissages majeurs\nLe projet **O'Voyage** a été le tremplin de ma reconversion et a concrétisé l'obtention de mon diplôme **DWWM (Bac +2)**. Il m'a permis de développer une maturité d'ingénieur complète :\n- **Résilience & Confiance en Soi** : Capacité à surmonter les moments de doute intense et la fatigue intellectuelle grâce au travail d'équipe et au soutien des camarades.\n- **Conduite de Projet Agile SCRUM** : Pratique rigoureuse des workflows Git (`feat/`, PRs relues entre pairs), des User Stories et de la planification par sprints.\n- **Ingénierie de Données Avancée** : Maîtrise de **NestJS, GraphQL, Apollo Server**, résolution du problème N+1 via **DataLoader**, et gestion de migrations SQL avec **Sqitch**.\n- **Sens de la Finition & Initiative** : Volonté d'aller au-delà des exigences initiales en déployant le projet sur **DigitalOcean** et en refondant le Front-End en **Vue 3** avec exigence SEO et WCAG.\n\n### Valeur ajoutée & Résultats clés\n- **Présentation d'Apothéose Réussie** : Démonstration finale devant la promotion et le jury O'Clock vivement félicitée.\n- **Application Pérenne & Accessible** : Déploiement en ligne continu et interface Vue 3 optimisée pour tous les supports.\n\n### Lendemains du Projet\nCe projet d'apothéose a ouvert la voie à mon embauche chez Orange Business et à ma poursuite d'études vers le Titre Pro CDA puis l'Expertise en Ingénierie du Logiciel (Bac +5 EIL).",
    },
  },
};

export const ovoyageEn = {
  title: "O'Voyage — Collaborative Travel Planner & Vue 3 / NestJS GraphQL Overhaul",
  shortDesc:
    "Collaborative travel organization web application — Vue 3, NestJS, GraphQL, TypeORM, PostgreSQL, Sqitch, DigitalOcean.",
  definition:
    "**O'Voyage** is a collaborative travel planner initially built as a team project during the O'Clock bootcamp final apotheosis (DWWM Associate Degree), then fully refactored and optimized by myself. The application allows groups of friends, families, or solo travelers to centralize trip planning on a single platform: itineraries, accommodations, daily activity timelines, and real-time budget tracking.",
  framing:
    "This project was initially developed by a team of 5 developers under **SCRUM Agile methodology** (4 one-week sprints). During collective sprints, I took ownership of the Back-End architecture using **NestJS, GraphQL, TypeORM, and PostgreSQL with Sqitch**. Following the bootcamp, driven by the desire to challenge myself and improve user experience, I undertook a **complete Front-End refactoring in Vue 3 (Composition API, Pinia, Vue Router, Tailwind CSS)**, emphasizing semantic SEO, WCAG accessibility, and performance.",
  action:
    "My work was structured around 4 major engineering pillars: agile team project management (SCRUM, GitHub Projects, systematic PR code reviews); Back-End GraphQL & database architecture (NestJS, TypeORM, DataLoader optimization against the N+1 problem, reversible Sqitch migrations, and SQL stored procedures); autonomous DevOps deployment on **DigitalOcean and AlwaysData**; and the Vue 3 Front-End overhaul featuring semantic HTML5, dynamic `@unhead` SEO management, and Lighthouse audits.",
  results:
    "I presented and validated the **O'Voyage** project with my team before the cohort and O'Clock jury. My personal Vue 3 refactoring resulted in an ultra-performant, accessible application permanently deployed on cloud infrastructure.",
  critical:
    "This project was a foundational human and technical milestone. It taught me to overcome moments of self-doubt through team support, lead an agile project with discipline, and master complex data architectures (GraphQL, DataLoader, ORM) while pushing engineering standards through an autonomous Front-End rewrite.",

  tabs: {
    project: {
      label: "The Project",
      title: "Overview, Agile Context & Personal Overhaul",
      badge: "Application Scope & Team Dynamics",
      content:
        "### The Business Problem: Group Travel Planning\nOrganizing group trips (with family, friends, or couples) often leads to disorganization: scattered Drive files, Messenger chats drowned under links, and endless email threads. **O'Voyage** solves this by centralizing the entire trip on a single, intuitive web platform.\n\n### Core Features\n- **Trip Creation & Management**: Define dates, destination, overall budget, and invite collaborators.\n- **Activity Schedule & Timeline**: Day-by-day activity organization displayed dynamically on an hourly timeline.\n- **Real-Time Budget Tracking**: Automatic expense tracking by category (accommodation, meals, transport) and remaining balance deduction.\n- **Admin Space & Security**: Back-office administration and role management (Admin / User) secured via JWT tokens.\n\n### Global Tech Stack\n- **Front-End (Refactoring)**: Vue 3 (Composition API), Pinia (state management), Vue Router, Tailwind CSS, `@unhead` (dynamic SEO).\n- **Back-End**: NestJS (TypeScript framework), Express.js, GraphQL (Apollo Server API), TypeORM.\n- **Database & DevOps**: PostgreSQL, Sqitch (versioned SQL migrations), Bcrypt, cloud hosting on DigitalOcean and AlwaysData.\n\n### Agile Organization & Autonomous Overhaul\n- **Initial Team Project (O'Clock Apotheosis)**: Built by 5 developers under **SCRUM** methodology across 4 sprints (Sprint 0: User Stories, MCD/MLD, Figma wireframes; Sprint 1: foundation & first deployment; Sprint 2: feature development; Sprint 3: testing & final presentation).\n- **Personal Refactoring Initiative**: Having handled only the Back-End during the team project (the initial Front-End being a React/Redux prototype), I decided to rewrite the complete Front-End in **Vue 3** to challenge myself, applying best practices for HTML5 semantics, SEO, and WCAG accessibility.",
    },

    situation1: {
      label: "1. Agility & Teamwork",
      title: "Situation 1 — SCRUM Agile Organization, Collaboration & Overcoming Doubt",
      badge: "Project Management & Team Dynamics",
      framing:
        "The O'Voyage project took place at the end of an intensive 6-month bootcamp. Following 4 months of core curriculum and 1 month of Data specialization, I experienced a period of fatigue and self-doubt regarding my ability to absorb complex notions. My first engineering challenge was overcoming this doubt through team solidarity and taking key responsibilities within the group.",
      action:
        "### Group Dynamics & Peer Support (The Starships)\nSupported by my 4 cohort teammates, I regained my motivation and decided to excel for the apotheosis project. I proposed implementing demanding Data specialization technologies (GraphQL, TypeORM, Sqitch) and taking responsibility for the Back-End architecture.\n\n### SCRUM Agile Organization & Git Workflow\nWe established rigorous project management via **GitHub Projects** and a structured Git workflow:\n- **Branches & Code Reviews**: Feature branch creation (`feat/`), mandatory PR review and validation by a teammate before merging into `dev`.\n- **Team Sync**: Notification alerts upon PR submissions, limiting parallel tasks per developer, and merging into `main` prior to sprint presentations following full regression testing.\n- **Collaborative Sprint 0**: Joint authoring of User Stories, role matrix definition (Visitor, User, Organizer, Admin), MCD modeling with MOCODO, and wireframe design on Figma.",
      results:
        "This collaborative dynamic restored my confidence completely. The team operated in harmony and delivered all 4 sprints on schedule with clean, peer-reviewed code.",
    },

    situation2: {
      label: "2. Back-End GraphQL & Sqitch",
      title: "Situation 2 — NestJS Back-End Architecture, GraphQL, TypeORM & Sqitch Migrations",
      badge: "Data Architecture & SQL Performance",
      framing:
        "Designing the Back-End required a flexible API capable of serving deeply nested data (trips, days, activities, users) without multiplying HTTP requests or overloading network bandwidth.",
      action:
        "### GraphQL API with NestJS & Apollo Server\nI architected the API under **NestJS** integrating **GraphQL and Apollo Server**. Instead of multiplying REST endpoints, I implemented a single GraphQL route allowing the Front-End to request exact required fields via JSON queries and mutations.\n\n### Solving the N+1 Problem with DataLoader\nWhen querying linked entities (e.g., retrieving trips with activities and participants), we faced SQL query overhead risks (the N+1 problem). I researched, configured, and integrated **DataLoader** to batch and cache data retrieval queries in memory. Although one of the most complex implementations of the project, it significantly optimized server response times.\n\n### PostgreSQL DB Modeling & Sqitch Migrations\n- **TypeORM & Query Builder**: Defined reusable TypeScript entities managing relationships (`one-to-many`, `many-to-many`) and authored custom SQL queries via Query Builder.\n- **Sqitch Migrations**: Managed the PostgreSQL database schema via **Sqitch** (`sqitch.plan`, `deploy`, `revert`, `verify` folders). This approach enabled versioned, reversible SQL schema modifications without altering production data.\n- **RBAC Security & Hashing**: Implemented NestJS guards (`AuthGuard`, `AdminGuard`), password hashing via **Bcrypt**, and **AES-256-GCM** encryption.",
      results:
        "I engineered a robust, secure, and performant GraphQL Back-End capable of managing complex data with optimized response times thanks to DataLoader and Sqitch.",
    },

    situation3: {
      label: "3. Cloud DevOps & Vue 3 Overhaul",
      title: "Situation 3 — Cloud DevOps Deployment & Complete Front-End Overhaul in Vue 3",
      badge: "DevOps, SEO, Accessibility & Vue.js",
      framing:
        "Following the team project, I identified two major improvement areas: removing temporary hosting limitations and refactoring the Front-End interface (originally in React) to **Vue 3** to apply high semantic, SEO, and accessibility standards.",
      action:
        "### Cloud DevOps Deployment (DigitalOcean & AlwaysData)\nDuring testing, O'Clock's demonstration Cloud VM auto-stopped every 8 hours. To guarantee permanent site availability for my diploma exam, I took the initiative to host the project on **DigitalOcean** using my GitHub Student Pack credits:\n- **DB Deployment**: Hosted the PostgreSQL database on **AlwaysData** and replayed all `sqitch.plan` migration scripts.\n- **Back-End & Front-End Deployment**: Configured environment variables on DigitalOcean and established smooth GraphQL API communication.\n\n### Complete Front-End Overhaul in Vue 3\nI rewrote the entire interface in **Vue 3 (Composition API)** and **Tailwind CSS**:\n- **Reusable Components & Animated Carousel**: Created a responsive interface with an auto-scrolling image carousel (managing interval cleanup to prevent memory leaks on component unmount).\n- **Dynamic SEO & HTML5 Semantics**: Integrated `@unhead` to dynamically update page `<title>` and `<meta description>` tags. Enforced strict semantic tags (`<header>`, `<nav>`, `<article>`, `<aside>`) and heading hierarchy (`<h1>` to `<h3>`).\n- **WCAG Accessibility & Lighthouse Audits**: Systematically added `aria-label` attributes, full keyboard navigation (`Tab`), and optimized image loading based on Google Lighthouse audits.",
      results:
        "I deployed the application permanently on cloud infrastructure and delivered a fluid, semantic, accessible Vue 3 Front-End praised during my presentation.",
    },

    synthesis: {
      label: "My Summary & Critical View",
      title: "Overall Retrospective, Critical View & Project Aftermath",
      badge: "Self-Evaluation, Resilience & Expert Posture",
      content:
        "### Confirmed Skills & Key Learnings\nThe **O'Voyage** project was the stepping stone of my career pivot and culminated in earning my **DWWM Associate Degree (Bac +2)**. It allowed me to develop complete engineering maturity:\n- **Resilience & Self-Confidence**: Capability to overcome intense self-doubt and intellectual fatigue through teamwork and peer encouragement.\n- **SCRUM Agile Project Management**: Rigorous practice of Git workflows (`feat/`, peer-reviewed PRs), User Stories, and sprint planning.\n- **Advanced Data Engineering**: Mastery of **NestJS, GraphQL, Apollo Server**, N+1 resolution via **DataLoader**, and SQL migration management with **Sqitch**.\n- **Craftsmanship & Initiative**: Drive to exceed initial requirements by deploying the project on **DigitalOcean** and refactoring the Front-End into **Vue 3** with strict SEO and WCAG standards.\n\n### Business Value & Key Results\n- **Successful Apotheosis Presentation**: Final live demonstration praised by the cohort and O'Clock jury.\n- **Permanent & Accessible Application**: Continuous online cloud deployment and responsive Vue 3 UI optimized across devices.\n\n### Project Aftermath\nThis apotheosis project paved the way for my hiring at Orange Business and my continued studies toward the CDA Bachelor's Degree and Master's Software Engineering Expertise (Bac +5 EIL).",
    },
  },
};
