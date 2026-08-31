export const ovoyageFr = {
  title: "O'Voyage — Planificateur de Voyage Collaboratif & Refonte Vue 3 / NestJS GraphQL",
  shortDesc:
    "Application web collaborative d'organisation de voyages — Vue 3, NestJS, GraphQL, TypeORM, PostgreSQL, Sqitch, DigitalOcean.",
  definition:
    "**O'Voyage** est un planificateur de voyage collaboratif né lors de notre projet d'apothéose de fin de formation chez O'Clock (Titre Pro DWWM Bac +2), puis entièrement réarchitecturé et refondu par mes soins. L'application résout le problème de l'organisation de séjours en groupe en centralisant sur une plateforme web unique et intuitive tout ce qui était autrefois dispersé : l'itinéraire des destinations, le planning d'activités sur timeline horaire, le budget estimé et le calcul en temps réel des dépenses restantes.",
  framing:
    "Ce projet a marqué un tournant personnel majeur dans mon parcours de reconversion. Après 4 mois intensifs de socle web et 1 mois de spécialisation Data, j'ai traversé une période d'épuisement et de doute. Grâce à l'entraide de mes camarades de la promotion *Starship*, j'ai retrouvé toute ma motivation et relevé le défi de concrétiser ce projet en équipe de 5 sous la méthode **SCRUM Agile** (4 sprints d'une semaine). Responsable de l'architecture Back-End (**NestJS, GraphQL, TypeORM, Sqitch**), j'ai ensuite poussé l'exigence jusqu'à **refondre intégralement le Front-End en Vue 3 (Composition API, Pinia, Tailwind CSS)** pour me prouver de quoi j'étais capable.",
  action:
    "Mon aventure s'est déroulée en quatre étapes clés : la conduite agile du projet au sein du collectif (Sprint 0 à 3, User Stories, wireframes Figma, revues de PR sur GitHub) ; la conception d'un Back-End GraphQL sous NestJS avec résolution du problème N+1 via **DataLoader** et gestion des migrations réversibles sous **Sqitch** ; le déploiement cloud autonome sur **DigitalOcean et AlwaysData** pour affranchir l'application des limites d'hébergement temporaires ; et la refonte intégrale de l'interface en **Vue 3** avec optimisation du SEO sémantique (`@unhead`), de l'accessibilité WCAG et des performances Lighthouse.",
  results:
    "Ensemble avec mon équipe, nous avons présenté et défendu **O'Voyage** en direct devant la promotion et les formateurs O'Clock avec un immense sentiment de fierté collective. Ma refonte personnelle du Front-End en Vue 3 m'a permis d'obtenir une application d'une grande fluidité, parfaitement accessible et hébergée en ligne de manière pérenne sur infrastructure cloud.",
  critical:
    "Cette expérience d'apothéose a été le socle de ma maturité d'ingénieur. Elle m'a prouvé que la persévérance et le soutien du collectif permettent de franchir les caps les plus difficiles. Elle m'a appris à piloter un projet agile avec méthode, à dompter des technologies complexes de gestion de données (GraphQL, DataLoader, ORM) et à aller au bout de mes exigences de qualité logicielle.",

  tabs: {
    project: {
      label: "Le Projet",
      title: "Vue d'ensemble, Contexte d'Équipe & Histoire du Projet",
      badge: "Histoire du Projet & Esprit d'Équipe",
      content:
        "### Le Problème Métier : L'Enfer de l'Organisation d'un Voyage à Plusieurs\nPartir en voyage en famille, en couple ou entre amis est toujours un défi d'organisation : des dizaines de fichiers éparpillés sur Drive, des conversations Messenger où les liens utiles se perdent dans le fil des messages et des courriels à rallonge avec des idées éparpillées. **O'Voyage** a été imaginé pour mettre fin à ce chaos en centralisant l'intégralité du séjour au même endroit.\n\n### Fonctionnalités Clés de l'Application\n- **Création & Personnalisation de Voyages** : Saisie des dates, destinations de départ et d'arrivée, budget prévisionnel et invitation des participants.\n- **Planning d'Activités & Timeline Horaire** : Organisation des journées avec affichage des activités sur une timeline visuelle découpée par tranches horaires.\n- **Gestion & Déduction du Budget** : Calcul automatique des coûts d'activités, d'hébergement et de transport avec mise à jour du budget restant en temps réel.\n- **Espace Administrateur & Sécurité** : Back-office dédié à la modération et gestion des comptes utilisateurs sécurisée par tokens JWT.\n\n### Stack Technique Globale\n- **Front-End (Refonte)** : Vue 3 (Composition API), Pinia (gestion d'état), Vue Router, Tailwind CSS, `@unhead` (gestion SEO dynamique).\n- **Back-End** : NestJS (TypeScript framework), Express.js, GraphQL (Apollo Server API), TypeORM.\n- **Base de Données & Infrastructure** : PostgreSQL, Sqitch (migrations versionnées SQL), Bcrypt, hébergement cloud sur DigitalOcean et AlwaysData.\n\n### L'Histoire du Projet : Du Prototype d'Équipe à la Refonte Vue 3\nLe projet s'est déroulé en deux temps forts. D'abord, le projet d'apothéose initial réalisé en équipe de 5 développeurs sous méthodologie **SCRUM Agile** pendant les 4 sprints de fin de formation O'Clock. N'ayant développé que la partie Back-End lors de cette phase (le Front-End initial étant un prototype sous React), j'ai refusé d'en rester là. Animé par l'envie de me challenger et de consolider mes compétences, j'ai décidé après la formation de **reprendre l'ensemble du projet depuis le cahier des charges et de reconstruire seul tout le Front-End en Vue 3**.",
    },

    situation1: {
      label: "1. Surmontement du Doute & SCRUM",
      title: "Situation 1 — Le Dépassement des Doutes, la Force du Collectif & la Méthode SCRUM",
      badge: "Histoire Humaine & Gestion de Projet Agile",
      framing:
        "Lorsque nous avons abordé le projet d'apothéose après 5 mois de formation intensive (4 mois de socle et 1 mois de spécialisation Data), mon cerveau et ma motivation étaient au plus bas. Épuisé par le rythme et intimidé par la complexité des notions avancées, j'ai traversé une période de doute profond où j'ai craint de ne jamais y arriver.",
      action:
        "### La Force du Collectif : Les Starships\nC'est l'esprit d'équipe et l'entraide de mes camarades de la promotion *Starship* qui ont tout changé. En discutant et en partageant nos inquiétudes, j'ai retrouvé ma détermination. J'ai fait le choix audacieux de me dépasser et de proposer à l'équipe de mettre en pratique les technologies les plus exigeantes abordées lors de la spécialisation Data (GraphQL, TypeORM, Sqitch) en prenant en charge l'architecture Back-End.\n\n### Organisation Agile SCRUM & Workflow Git Rigoureux\nEnsemble à 5, nous avons structuré notre travail autour de la méthode **SCRUM Agile** et d'une organisation Git exemplaire :\n- **Sprint 0 (Cadrage & Maquettage)** : Élaboration en groupe des User Stories, définition des rôles (Visiteur, Utilisateur, Organisateur, Administrateur), modélisation du MCD sous MOCODO et réalisation des wireframes responsive sous Figma.\n- **Sprints 1 à 3 (Développement & Recette)** : Organisation de notre backlog sur **GitHub Projects**. Pour chaque tâche, nous créions une branche dédiée (`feat/`). Chaque commit et push donnait lieu à une Pull Request relue, commentée et testée par un collègue avant toute fusion sur la branche `dev`.\n- **Discipline & Communication** : Nous limitions les tâches parallèles pour rester concentrés. La veille de chaque présentation de sprint, nous effectuions une mise à jour globale de la branche `dev`, testions l'harmonisation des fonctionnalités et ne poussions vers la branche `main` qu'après validation complète.",
      results:
        "Grâce à cette cohésion et à cette rigueur, nous avons livré l'intégralité des 4 sprints sans retard. Ce travail d'équipe m'a redonné une confiance inébranlable dans mes capacités d'ingénieur et a prouvé la valeur de la solidarité collective.",
    },

    situation2: {
      label: "2. Back-End GraphQL & Sqitch",
      title: "Situation 2 — Conception du Back-End NestJS, GraphQL, TypeORM & Migrations Sqitch",
      badge: "Ingénierie de Données & Optimisation SQL",
      framing:
        "Sur la partie Back-End dont j'avais la charge, le défi technique consistait à construire une API robuste et souple, capable de distribuer des données complexes et fortement imbriquées (voyages, journées, activités, utilisateurs) sans ralentir l'application.",
      action:
        "### Architecture GraphQL sous NestJS & Apollo Server\nJ'ai fait le choix de développer le Back-End sous **NestJS** en m'appuyant sur **GraphQL et Apollo Server**. Plutôt que d'exposer une multitude de routes REST, j'ai configuré une route unique GraphQL. Cela permettait au Front-End de formuler des requêtes sur-mesure et de ne recevoir exactement que les attributs JSON nécessaires, évitant ainsi tout transfert de données superflu sur le réseau.\n\n### Le Défi Technique : Résolution du Problème N+1 avec DataLoader\nLors du requêtage des voyages et de leurs activités associées, j'ai été confronté au problème classique de surcroît de requêtes SQL (le problème N+1). Pour résoudre ce défi complexe, j'ai étudié la documentation et implémenté **DataLoader**. DataLoader regroupe et met en cache en mémoire les requêtes d'accès aux données. Bien que l'intégration des résolveurs avec DataLoader ait été la fonctionnalité la plus difficile à mettre en œuvre de tout le projet, elle a considérablement accéléré les performances du serveur.\n\n### Persistance PostgreSQL, ORM & Migrations Sqitch\n- **TypeORM & Query Builder** : J'ai modélisé nos entités sous forme de classes TypeScript avec gestion des relations (`one-to-many`, `many-to-many`) et utilisé le Query Builder pour optimiser les requêtes complexes.\n- **Migrations SQL avec Sqitch** : Pour faire évoluer notre schéma PostgreSQL sans risquer de perdre des données, j'ai initialisé **Sqitch**. Cette approche m'a permis d'appliquer et d'annuler des scripts SQL versionnés de manière 100% réversible et sécurisée.\n- **Sécurité & Authentification** : J'ai sécurisé les accès avec des gardes NestJS, haché les mots de passe avec **Bcrypt** et chiffré les données sensibles en **AES-256-GCM**.",
      results:
        "J'ai livré un Back-End GraphQL hautement performant, sécurisé et évolutif. L'intégration de DataLoader et Sqitch a garanti une stabilité irréprochable et des requêtes SQL parfaitement optimisées.",
    },

    situation3: {
      label: "3. Déploiement DevOps & Refonte Vue 3",
      title: "Situation 3 — Déploiement Cloud DevOps & Refonte Intégrale du Front-End en Vue 3",
      badge: "DevOps, SEO, Accessibilité & Vue.js",
      framing:
        "À l'issue de la soutenance collective, j'ai voulu aller plus loin : l'hébergement initial sur la VM O'Clock s'arrêtait automatiquement toutes les 8 heures, et le Front-End React de l'équipe méritait une refonte complète pour atteindre des standards supérieurs de sémantique et d'accessibilité.",
      action:
        "### Déploiement Cloud DevOps sur DigitalOcean & AlwaysData\nPour offrir une disponibilité continue à notre application, j'ai pris l'initiative d'orchestrer un déploiement cloud complet en utilisant mon crédit GitHub Student Pack :\n- **Base de Données** : Déploiement de PostgreSQL sur **AlwaysData** et exécution de toutes les migrations définies dans nos scripts SQL.\n- **Serveurs & API** : Hébergement du Back-End et du Front-End sur **DigitalOcean**, configuration rigoureuse des variables d'environnement et vérification de la fluidité des flux de communication HTTP/GraphQL.\n\n### Refonte Intégrale du Front-End en Vue 3\nJ'ai reconstruit entièrement l'interface utilisateur de zéro en utilisant **Vue 3 (Composition API)** et **Tailwind CSS** :\n- **Composants Dynamiques & Carrousel d'Images** : Création d'une page d'accueil avec carrousel d'images inspirantes défilant toutes les 3,5 secondes (avec nettoyage de l'intervalle lors de la destruction du composant pour éviter toute fuite mémoire).\n- **Sémantique HTML5 & SEO Dynamique avec `@unhead`** : Structuration sémantique stricte (`<header>`, `<nav>`, `<article>`, `<aside>`, hiérarchie `<h1>` à `<h3>`). Utilisation de la bibliothèque `@unhead` pour injecter dynamiquement les balises `<title>` et `<meta description>` selon la page visitée.\n- **Accessibilité WCAG & Audits Lighthouse** : Ajout systématique d'attributs `aria-label` sur les boutons, navigation complète au clavier (`Tab`) sans souris, et optimisation du temps de chargement des images d'après les rapports Google Lighthouse.",
      results:
        "J'ai réussi le pari d'héberger O'Voyage en ligne de manière permanente et de livrer une interface Vue 3 ultra-rapide, sémantique et accessible à tous les utilisateurs.",
    },

    synthesis: {
      label: "Mon Bilan & Regard Critique",
      title: "Bilan global, Regard Critique & Lendemains du projet",
      badge: "Auto-Évaluation, Dépassement & Posture d'Expert",
      content:
        "### Compétences confirmées et apprentissages majeurs\nCe projet d'apothéose **O'Voyage** a été le véritable révélateur de mon potentiel et a concrétisé l'obtention de mon diplôme **DWWM (Bac +2)**. Il m'a apporté une maturité technique et humaine déterminante :\n- **Confiance en Soi & Persévérance** : La démonstration que même dans les moments d'épuisement ou de doute, le travail et l'entraide permettent de surmonter tous les obstacles.\n- **Rigueur d'Ingénierie Agile** : Pratique accomplie des méthodes agiles SCRUM, de la gestion de backlog sur GitHub Projects et des revues de code entre pairs.\n- **Maîtrise de la Data & de la Performance** : Conception d'APIs **GraphQL**, résolution du problème N+1 avec **DataLoader**, persistance **TypeORM** et migrations SQL **Sqitch**.\n- **Autonomie DevOps & Exigence UI** : Déploiement cloud sur **DigitalOcean/AlwaysData** et refonte autonome en **Vue 3** avec exigence SEO et WCAG.\n\n### Lendemains du Projet\nCette réussite de fin de formation m'a donné toute la confiance nécessaire pour aborder le marché du travail. Elle a directement ouvert la voie à mon embauche en alternance chez Orange Business et à ma poursuite d'études vers le Titre Pro CDA puis l'Expertise en Ingénierie du Logiciel (Bac +5 EIL).",
    },
  },
};

export const ovoyageEn = {
  title: "O'Voyage — Collaborative Travel Planner & Vue 3 / NestJS GraphQL Overhaul",
  shortDesc:
    "Collaborative travel organization web application — Vue 3, NestJS, GraphQL, TypeORM, PostgreSQL, Sqitch, DigitalOcean.",
  definition:
    "**O'Voyage** is a collaborative travel planner created during our bootcamp apotheosis final project at O'Clock (DWWM Associate Degree), then completely re-architected and refactored by myself. The application solves group travel disorganization by centralizing everything on a single, intuitive web platform: destinations, daily activity timelines, estimated budgets, and real-time expense calculations.",
  framing:
    "This project marked a major personal turning point in my career pivot. Following 4 intensive months of core web development and 1 month of Data specialization, I experienced a period of exhaustion and self-doubt. Thanks to the support of my *Starship* cohort teammates, I regained my motivation and took on the challenge of building this project in a team of 5 under **SCRUM Agile methodology** (4 one-week sprints). Responsible for the Back-End architecture (**NestJS, GraphQL, TypeORM, Sqitch**), I pushed engineering standards further by **completely rewriting the Front-End in Vue 3 (Composition API, Pinia, Tailwind CSS)** to prove to myself what I was capable of.",
  action:
    "My journey unfolded across four key steps: agile team leadership (Sprint 0 to 3, User Stories, Figma wireframes, GitHub PR code reviews); designing a GraphQL Back-End under NestJS resolving the N+1 query problem via **DataLoader** and managing reversible migrations under **Sqitch**; autonomous cloud DevOps deployment on **DigitalOcean and AlwaysData**; and a complete interface overhaul in **Vue 3** optimizing semantic SEO (`@unhead`), WCAG accessibility, and Lighthouse performance.",
  results:
    "Together with my team, we presented and defended **O'Voyage** live before the cohort and O'Clock instructors with immense collective pride. My personal Front-End overhaul in Vue 3 resulted in an ultra-smooth, accessible application permanently hosted on cloud infrastructure.",
  critical:
    "This apotheosis experience served as the foundation of my engineering maturity. It proved that perseverance and team support overcome the toughest obstacles. It taught me to lead an agile project methodically, master complex data architectures (GraphQL, DataLoader, ORM), and uphold rigorous software quality standards.",

  tabs: {
    project: {
      label: "The Project",
      title: "Overview, Team Context & Project History",
      badge: "Project Story & Team Spirit",
      content:
        "### The Business Problem: Group Travel Organization Chaos\nPlanning trips with family, couples, or friends is always an organizational challenge: dozens of scattered Drive files, Messenger chats drowned under links, and endless email threads. **O'Voyage** was designed to end this chaos by centralizing the entire trip in one place.\n\n### Key Application Features\n- **Trip Creation & Personalization**: Input dates, departure and arrival destinations, estimated budget, and invite participants.\n- **Activity Schedule & Hourly Timeline**: Day-by-day activity organization displayed on a visual hourly timeline.\n- **Budget Management & Deduction**: Automatic calculation of activity, accommodation, and transport costs with real-time remaining balance updates.\n- **Admin Space & Security**: Back-office administration and user account management secured via JWT tokens.\n\n### Global Tech Stack\n- **Front-End (Refactoring)**: Vue 3 (Composition API), Pinia (state management), Vue Router, Tailwind CSS, `@unhead` (dynamic SEO management).\n- **Back-End**: NestJS (TypeScript framework), Express.js, GraphQL (Apollo Server API), TypeORM.\n- **Database & Infrastructure**: PostgreSQL, Sqitch (versioned SQL migrations), Bcrypt, cloud hosting on DigitalOcean and AlwaysData.\n\n### Project Story: From Team Prototype to Vue 3 Overhaul\nThe project unfolded in two phases. First, the initial apotheosis project built by a team of 5 developers under **SCRUM Agile** methodology across 4 sprints at O'Clock. Having built only the Back-End during this phase (the initial Front-End being a React prototype), I refused to stop there. Driven by the desire to challenge myself and consolidate my skills, I decided after the bootcamp to **revisit the entire project from specifications and rebuild the Front-End solo in Vue 3**.",
    },

    situation1: {
      label: "1. Overcoming Doubt & SCRUM",
      title: "Situation 1 — Overcoming Doubt, Team Solidarity & SCRUM Methodology",
      badge: "Human Story & Agile Project Management",
      framing:
        "When we started the apotheosis project after 5 months of intensive training (4 months core + 1 month Data specialization), my brain and motivation were at their lowest. Exhausted by the pace and intimidated by complex concepts, I went through a period of deep self-doubt, fearing I would never succeed.",
      action:
        "### Group Dynamics & Peer Support (The Starships)\nIt was the team spirit and mutual support of my *Starship* cohort mates that changed everything. By talking and sharing our concerns, I regained my determination. I made the bold choice to push myself and propose using demanding Data specialization technologies (GraphQL, TypeORM, Sqitch) while taking charge of the Back-End architecture.\n\n### SCRUM Agile Organization & Rigorous Git Workflow\nTogether as a team of 5, we structured our work using **SCRUM Agile** and exemplary Git practices:\n- **Sprint 0 (Framing & Wireframing)**: Collaborative creation of User Stories, role definitions (Visitor, User, Organizer, Admin), MCD modeling with MOCODO, and responsive Figma wireframes.\n- **Sprints 1 to 3 (Development & Testing)**: Backlog management on **GitHub Projects**. For every task, we created dedicated feature branches (`feat/`). Every commit and push resulted in a Pull Request reviewed, commented on, and tested by a teammate before merging into `dev`.\n- **Discipline & Communication**: We limited parallel tasks to stay focused. Prior to sprint presentations, we performed a global update of the `dev` branch, verified feature harmony, and merged into `main` only after full validation.",
      results:
        "Thanks to this cohesion and discipline, we delivered all 4 sprints on schedule. This teamwork restored my unwavering confidence in my engineering capabilities and proved the value of team solidarity.",
    },

    situation2: {
      label: "2. Back-End GraphQL & Sqitch",
      title: "Situation 2 — NestJS Back-End Design, GraphQL, TypeORM & Sqitch Migrations",
      badge: "Data Engineering & SQL Optimization",
      framing:
        "On the Back-End side under my responsibility, the technical challenge was building a robust, flexible API capable of serving deeply nested data (trips, days, activities, users) without slowing down the application.",
      action:
        "### GraphQL Architecture under NestJS & Apollo Server\nI chose to develop the Back-End in **NestJS** leveraging **GraphQL and Apollo Server**. Instead of exposing multiple REST routes, I configured a single GraphQL endpoint. This allowed the Front-End to formulate custom queries and receive exactly the required JSON fields, avoiding unnecessary network data overhead.\n\n### Technical Challenge: Solving N+1 Problem with DataLoader\nWhen querying trips and their associated activities, I faced the classic SQL query overhead challenge (N+1 problem). To solve this, I studied documentation and implemented **DataLoader**. DataLoader batches and caches data retrieval queries in memory. Although integrating resolvers with DataLoader was the most difficult feature of the project, it significantly accelerated server performance.\n\n### PostgreSQL Persistence, ORM & Sqitch Migrations\n- **TypeORM & Query Builder**: Modeled entities as TypeScript classes managing relationships (`one-to-many`, `many-to-many`) and utilized Query Builder for complex queries.\n- **SQL Migrations with Sqitch**: To evolve our PostgreSQL schema safely without data loss, I initialized **Sqitch**. This enabled versioned, 100% reversible SQL schema modifications.\n- **Security & Authentication**: Secured endpoints with NestJS guards, hashed passwords with **Bcrypt**, and encrypted sensitive data with **AES-256-GCM**.",
      results:
        "I delivered a high-performance, secure, and scalable GraphQL Back-End. DataLoader and Sqitch integration guaranteed flawless stability and optimized SQL queries.",
    },

    situation3: {
      label: "3. Cloud DevOps & Vue 3 Overhaul",
      title: "Situation 3 — Cloud DevOps Deployment & Complete Front-End Overhaul in Vue 3",
      badge: "DevOps, SEO, Accessibility & Vue.js",
      framing:
        "Following our collective presentation, I wanted to go further: the initial hosting on O'Clock's VM auto-stopped every 8 hours, and the team's React Front-End deserved a complete rewrite to reach higher semantic and accessibility standards.",
      action:
        "### Cloud DevOps Deployment on DigitalOcean & AlwaysData\nTo provide continuous availability, I orchestrated a complete cloud deployment using my GitHub Student Pack credits:\n- **Database**: Deployed PostgreSQL on **AlwaysData** and executed all migrations defined in our SQL scripts.\n- **Servers & API**: Hosted Back-End and Front-End on **DigitalOcean**, configured environment variables, and verified HTTP/GraphQL flow smoothness.\n\n### Complete Front-End Overhaul in Vue 3\nI completely rebuilt the user interface from scratch using **Vue 3 (Composition API)** and **Tailwind CSS**:\n- **Dynamic Components & Image Carousel**: Built a landing page with an inspiring image carousel rotating every 3.5 seconds (with interval cleanup on component unmount to prevent memory leaks).\n- **HTML5 Semantics & Dynamic SEO with `@unhead`**: Enforced strict semantic structure (`<header>`, `<nav>`, `<article>`, `<aside>`, `<h1>` to `<h3>`). Used `@unhead` to dynamically inject `<title>` and `<meta description>` tags per page.\n- **WCAG Accessibility & Lighthouse Audits**: Systematically added `aria-label` attributes to buttons, enabled full keyboard navigation (`Tab`), and optimized image loading based on Google Lighthouse reports.",
      results:
        "I successfully hosted O'Voyage permanently online and delivered an ultra-fast, semantic, accessible Vue 3 interface.",
    },

    synthesis: {
      label: "My Summary & Critical View",
      title: "Overall Retrospective, Critical View & Project Aftermath",
      badge: "Self-Evaluation, Resilience & Expert Posture",
      content:
        "### Confirmed Skills & Key Learnings\nThis **O'Voyage** apotheosis project served as the true catalyst of my potential and culminated in earning my **DWWM Associate Degree (Bac +2)**. It brought me key technical and human maturity:\n- **Self-Confidence & Perseverance**: Proof that even in moments of exhaustion or self-doubt, hard work and peer support overcome all obstacles.\n- **Agile Engineering Discipline**: Accomplished practice of SCRUM agile methods, GitHub Projects backlog management, and peer code reviews.\n- **Data Mastery & Performance**: Designing **GraphQL** APIs, N+1 problem resolution with **DataLoader**, **TypeORM** persistence, and **Sqitch** SQL migrations.\n- **DevOps Autonomy & UI Craftsmanship**: Cloud deployment on **DigitalOcean/AlwaysData** and autonomous **Vue 3** overhaul with strict SEO and WCAG standards.\n\n### Project Aftermath\nThis apotheosis success provided the confidence needed to enter the job market. It directly paved the way for my hiring at Orange Business and my continued studies toward the CDA Bachelor's Degree and Master's Software Engineering Expertise (Bac +5).",
    },
  },
};
