export const portailRhFr = {
  title: "Portail de Redirection RH — Administration & Services RH",
  shortDesc:
    "Plateforme web d'entreprise centralisant les outils RH d'Orange — Angular 18, NestJS, TypeORM, MySQL, Docker, Power BI Analytics.",
  definition:
    "Le **Portail de Redirection RH** est une plateforme web d'entreprise stratégique développée au sein d'Orange Business. Il constitue le point d'entrée unique et centralisé pour l'ensemble des salariés d'Orange France, leur permettant d'accéder rapidement à leurs outils métiers, ressources RH et actualités via des redirections dynamiques.",
  framing:
    "Le projet s'inscrit dans un contexte applicatif critique basé sur Angular 18, NestJS, MariaDB/MySQL avec TypeORM, et conteneurisé sous Docker Compose pour un hébergement sur la plateforme PaaS d'entreprise basée sur CloudFoundry. Mes enjeux principaux étaient de garantir une haute disponibilité, d'optimiser les performances des requêtes SQL sur les traitements d'export et d'assurer une conformité RGPD irréprochable.",
  action:
    "Mon intervention full-stack s'est articulée autour de cinq chantiers majeurs : la réingénierie du modèle de données et le refactoring NestJS/TypeORM, la création d'un environnement Docker Compose 1-click pour l'onboarding de mes collaborateurs, la gestion d'une crise de livraison et la restructuration intégrale du Front-End, la conduite en solo d'une mise en production impromptue avec traçabilité RGPD, et la conception en autonomie complète d'un moteur d'Analytics maison pour Power BI.",
  results:
    "J'ai livré l'application dans les délais avec une haute satisfaction du client. Mes optimisations sur la base de données ont permis de **gagner plusieurs jours d'exécution sur le traitement d'export**, mon environnement Docker a réduit l'onboarding des développeurs à 5 minutes, et j'ai réalisé avec succès un déploiement de production autonome sans la moindre régression.",
  critical:
    "Cette expérience majeure a forgé ma rigueur d'ingénierie logicielle (pattern DTO, intégrité BDD), mon sang-froid lors de mises en production sous pression, ma posture de mentor d'équipe et ma maîtrise des déploiements PaaS CloudFoundry.",

  tabs: {
    project: {
      label: "Le Projet",
      title: "Vue d'ensemble & Périmètre Métier",
      badge: "Contexte Applicatif",
      content:
        "Le **Portail de Redirection RH** est la plateforme centrale développée au sein d'Orange Business pour servir de point d'entrée quotidien à l'ensemble des salariés d'Orange France. Il leur permet de rechercher, personnaliser et consulter en un clic l'intégralité de leurs applications métiers, services et actualités RH.\n\n### Fonctionnalités principales\n- **Moteur de recherche & Favoris** : Recherche instantanée parmi des dizaines d'applications internes avec gestion d'un espace de travail personnalisé.\n- **Système de redirection d'URL** : Routage dynamique et sécurisé vers les plateformes RH de l'entreprise.\n- **Espace Administrateur RH** : Back-office complet pour la rédaction des actualités, la diffusion en temps réel de bandeaux d'alerte d'urgence et la gestion fine des accès utilisateurs.\n- **Module d'Analytics Power BI** : Moteur de collecte de métriques d'usage alimentant les tableaux de bord décisionnels de la direction.\n\n### Stack Technique Globale\n- **Front-End** : Angular 18, TypeScript, RxJS, HTML5, CSS3.\n- **Back-End** : NestJS (Node.js framework), **TypeORM**, TypeScript.\n- **Base de données** : MariaDB / MySQL managée via l'ORM TypeORM.\n- **DevOps & Cloud** : Multi-stage Docker, Docker Compose, solution interne PaaS basée sur CloudFoundry.\n\n### Mon Rôle & Mon Implication\nJ'ai travaillé sur ce projet en tant que **Développeur Fullstack alternant** pendant mon Titre Pro CDA (Bac +3). Après avoir pris en main la Tierce Maintenance Applicative (TMA), j'ai progressivement pris la responsabilité complète de l'architecture, du refactoring de la BDD et du développement des fonctionnalités stratégiques.",
    },

    situation1: {
      label: "1. Reprise & BDD",
      title: "Situation 1 — Reprise du projet & Refactoring BDD / NestJS",
      badge: "Dette Technique & Modélisation SQL",
      framing:
        "Lorsque j'ai pris en main le projet à la suite du départ du développeur initial, j'ai réalisé un diagnostic approfondi de la codebase en binôme avec mon Lead Dev. Le constat était préoccupant : la base de données MariaDB ne comportait aucune clé étrangère ni contrainte d'intégrité référentielle, les services du Back-End NestJS manipulaient directement les entités BDD sans passer par des DTOs, et plusieurs scripts JavaScript bruts contournaient le contexte de NestJS et le cycle de vie d'Angular.",
      action:
        "Pour assainir cette dette technique majeure, j'ai entrepris une restructuration en profondeur. J'ai d'abord modélisé l'ensemble des relations d'entités sous **TypeORM** en réintroduisant les clés étrangères et les contraintes d'intégrité SQL manquantes. J'ai ensuite généralisé le **pattern DTO (Data Transfer Objects)** en utilisant `class-validator` sur toutes les requêtes de l'API NestJS afin de garantir l'étanchéité des entrées. Enfin, j'ai nettoyé le code parasite pour réaligner l'application sur les standards natifs du framework.",
      results:
        "Grâce à ces actions, j'ai définitivement éliminé les fuites de données et les comportements instables de l'API. Sur le plan des performances, la réingénierie des tables et l'écriture de Vues SQL optimisées ont permis de **gagner plusieurs jours d'exécution sur le traitement d'export**, offrant à l'équipe un socle technique robuste, typé et maintenable.",
    },

    situation2: {
      label: "2. Onboarding & Docker",
      title: "Situation 2 — Onboarding d'un collaborateur & Dockerisation 1-Click",
      badge: "Mentorat & DevOps",
      framing:
        "Pendant un pic d'activité marqué par de nombreuses demandes de fonctionnalités et d'exigences graphiques de la part du client, mon Chef de Projet a affecté une collaboratrice de l'équipe (spécialisée en développement mobile Flutter) pour venir me prêter main-forte sur le Web. Mon défi était double : lui permettre de démarrer immédiatement son environnement local sans subir la complexité d'installation de MariaDB ou PHPMyAdmin, et l'accompagner dans sa montée en compétences sur Angular 18 et TypeScript.",
      action:
        "Pour résoudre le problème d'installation local, j'ai conçu un environnement **Docker Compose** sur-mesure combinant un `Dockerfile` optimisé pour NestJS, un conteneur MariaDB et une interface PHPMyAdmin. En une seule commande (`docker compose up -d --build`), ma collègue pouvait lancer l'intégralité du serveur en **5 minutes**. En parallèle, j'ai animé des sessions de **mentorat quotidien** pour lui transmettre les bases d'Angular 18. Ayant toutefois identifié chez elle des difficultés persistantes sur les concepts web fondamentaux, j'ai pris l'initiative d'alerter le Chef de Projet en toute transparence avant mon départ en vacances de 3 semaines afin d'anticiper les besoins d'encadrement.",
      results:
        "Mon environnement Docker a réduit le temps d'onboarding local de plusieurs heures à **seulement 5 minutes** via Docker Desktop. Mon alerte préventive a permis au management de maintenir une vision claire des risques de planning et de préparer le suivi de l'équipe.",
    },

    situation3: {
      label: "3. Gestion de crise",
      title: "Situation 3 — Gestion de crise & Restructuration du Front-End",
      badge: "Résilience & Sang-froid",
      framing:
        "À mon retour de 3 semaines de vacances, j'ai découvert une situation critique : mon Lead Dev ayant été absent de manière imprévue, ma collègue s'était retrouvée sans accompagnement. Le code Front-End produit pendant mon absence était très fortement dégradé, avec des composants monolithiques sans architecture Angular, aucun typage TypeScript, et surtout l'intégration brute de copier-coller de réponses d'IA générative non relues ni testées. La livraison approchait et le risque de retard était immense.",
      action:
        "J'ai immédiatement gardé mon **sang-froid** et dressé un diagnostic précis de l'état du code avec le Lead Dev. J'ai réorganisé le backlog de sprint et réalloué plusieurs jours d'urgence pour effectuer un **refactoring complet du Front-End**. J'ai découpé les pages en composants réutilisables, réintroduit un **typage TypeScript strict** et mis en place des intercepteurs pour la gestion propre des erreurs HTTP. J'ai également pris en charge les tickets les plus complexes pour sécuriser le calendrier.",
      results:
        "Grâce à cette mobilisation intensive, j'ai permis à l'équipe de **livrer le projet dans les temps impartis**, avec une excellente satisfaction du client malgré un léger réajustement budgétaire. À la suite de cet événement, j'ai animé un retour d'expérience (REX) avec l'équipe pour formaliser les règles d'encadrement des collaborateurs juniors et établir une **gouvernance stricte sur l'utilisation des assistants d'IA**.",
    },

    situation4: {
      label: "4. Back-Office & RGPD",
      title: "Situation 4 — Back-Office RH, Mise en Prod en Solo & Traçabilité RGPD",
      badge: "Fonctionnalités Métier & Déploiement",
      framing:
        "Une fois la stabilité de l'application retrouvée, j'ai poursuivi la TMA en autonomie complète. Le client RH m'a confié la conception de nouvelles fonctionnalités avancées d'administration, d'exigences de conformité légale (RGPD), ainsi qu'une **mise en production imprévue lancée un matin à 10h00**.",
      action:
        "J'ai entièrement repensé le module de gestion des actualités RH et développé un système de bandeau d'alerte d'urgence en temps réel. J'ai également conçu le module de traçabilité des consentements RGPD avec génération d'exports CSV.\n\nLorsque le client a demandé au dernier moment la mise en production des fonctionnalités validées en préproduction, mon Lead Dev était absent. J'ai accepté de prendre en charge ce **déploiement en solo** en appliquant scrupuleusement nos règles de sécurité d'entreprise :\n- **Sauvegarde préventive** : Réalisation préalable d'un dump complet de la base de données de production pour parer à toute anomalie.\n- **Déploiement CI/CD** : Exécution du déploiement via notre chaîne automatisée sur la solution PaaS CloudFoundry.\n- **Recette de non-régression** : Exécution d'un plan de tests E2E complet en production pour vérifier le bon fonctionnement des nouvelles features tout en m'assurant qu'aucune régression n'impacte l'existant.",
      results:
        "La mise en production en solo a été un **succès total avec zéro interruption de service** et zéro régression. J'ai offert une autonomie complète aux administrateurs RH pour leur communication d'urgence tout en garantissant une conformité RGPD irréprochable.",
    },

    situation5: {
      label: "5. Analytics Power BI",
      title: "Situation 5 — Moteur d'Analytics sur-mesure pour Power BI",
      badge: "Innovation & Autonomie",
      framing:
        "La direction RH d'Orange a souhaité disposer de métriques précises sur l'utilisation du portail (outils les plus consultés, recherches récurrentes, comportements de favoris) afin d'alimenter les tableaux de bord décisionnels de la direction sous Power BI.",
      action:
        "J'ai mené une étude d'architecture et proposé au client le développement d'un **moteur d'Analytics sur-mesure et intégré**, préféré à des outils lourds comme Grafana pour préserver l'empreinte mémoire de nos serveurs. J'ai développé en **autonomie complète** l'API de tracking sous NestJS, la capture asynchrone des événements utilisateurs et la structuration du stockage des métriques en BDD MySQL. J'ai ensuite géré la phase de recette et poussé le module en Préproduction.",
      results:
        "Mon module d'Analytics est **100% opérationnel en Préproduction**, prêt à alimenter les dashboards Power BI de la direction dès l'ouverture des flux. J'ai livré ce composant complexe en autonomie complète, avec zéro bug remonté lors de la qualification.",
    },

    synthesis: {
      label: "Mon Bilan & Regard Critique",
      title: "Bilan global, Regard Critique & Lendemains du projet",
      badge: "Auto-Évaluation & Posture d'Expert",
      content:
        "### Compétences confirmées et apprentissages majeurs\nCe projet d'envergure sur le **Portail de Redirection RH** m'a fait franchir un cap déterminant dans mon profil d'ingénieur logiciel. Il m'a permis de **confirmer et consolider mes compétences Full-Stack** sur l'ensemble de la chaîne de valeur :\n- **Front-End** : Angular, RxJS, découpage en composants et typage strict TypeScript.\n- **Back-End & ORM** : NestJS, architecture modulaire, pattern DTO et requêtage avancé avec **TypeORM**.\n- **Gestion & Performance de BDD** : MySQL/MariaDB, modélisation relationnelle et création de Vues SQL pour optimiser les traitements d'export.\n- **DevOps & Cloud PaaS** : Manipulation quotidienne de la conteneurisation Docker Compose et déploiement continu sur une solution cloud d'entreprise basée sur **CloudFoundry**, une expérience d'infrastructure qui m'a particulièrement passionné.\n\n### Valeur ajoutée pour l'entreprise & Résultats clés\n- **Performance BDD** : J'ai permis de **gagner plusieurs jours d'exécution sur le traitement d'export** grâce au refactoring des tables et aux Vues SQL.\n- **Productivité DevOps** : J'ai réduit l'onboarding des développeurs à **seulement 5 minutes** via Docker Compose.\n- **Résilience & Autonomie en Prod** : J'ai géré avec succès un **déploiement en production en solo à 10h00** sous contrainte client (sauvegarde BDD, déploiement CI/CD, tests de non-régression), tout en instaurant une revue stricte sur le code généré par IA.\n\n### Lendemains du Projet & Perspectives\nLe module d'Analytics est actuellement **qualifié en Préproduction**, prêt pour l'ouverture du flux vers les dashboards Power BI. À l'heure où j'écris ces lignes, je poursuis activement la **Tierce Maintenance Applicative (TMA)** et l'évolution du portail dans le cadre de mes missions chez Orange Business. C'est une expérience particulièrement enrichissante que j'ambitionne vivement de **prolonger au-delà de mon alternance**.",
    },
  },
};

export const portailRhEn = {
  title: "HR Redirection Portal — HR Services & Administration Platform",
  shortDesc:
    "Enterprise web platform centralizing Orange HR tools — Angular 18, NestJS, TypeORM, MySQL, Docker, Power BI Analytics.",
  definition:
    "The **HR Redirection Portal** is a strategic web application built at Orange Business. It serves as a single, centralized entry point for all Orange France employees to quickly access HR tools, corporate news, and resources via dynamic redirections.",
  framing:
    "The project was built within a critical enterprise context using Angular 18, NestJS, MariaDB/MySQL with TypeORM, and containerized with Docker Compose for deployment on an internal enterprise PaaS platform based on CloudFoundry. My main objectives were to ensure high availability, optimize SQL query performance over export processing, and guarantee strict GDPR compliance.",
  action:
    "My full-stack work was structured around five core pillars: data model refactoring & NestJS/TypeORM architecture cleanup, creating a 1-click Docker Compose environment for developer onboarding, crisis management & full Front-End code rewriting, conducting a solo unannounced production deployment with GDPR auditability, and autonomous design of a custom Analytics engine for Power BI.",
  results:
    "I delivered the application on schedule with high client satisfaction. My database optimizations **gained several days of execution time on export processing**, my Docker setup reduced developer onboarding to 5 minutes, and I successfully completed a solo production deployment with zero regressions.",
  critical:
    "This major experience forged my software engineering discipline (DTO pattern, DB relational integrity), crisis management composure during solo production deployments, team mentorship posture, and mastery over CloudFoundry PaaS deployments.",

  tabs: {
    project: {
      label: "The Project",
      title: "General Overview & Business Scope",
      badge: "Application Context",
      content:
        "The **HR Redirection Portal** is the central web platform developed at Orange Business serving as the daily entry point for all Orange France employees. It enables searching, customizing, and accessing internal tools, services, and HR news in a single click.\n\n### Core Features I Maintained & Developed\n- **Search Engine & Favorites**: Instant search across dozens of internal applications with a personalized workspace.\n- **URL Redirection System**: Dynamic, secure routing to corporate HR platforms.\n- **HR Admin Space**: Complete back-office for managing news articles, broadcasting real-time emergency alert banners, and user access management.\n- **Power BI Analytics Module**: Metrics collection engine feeding executive dashboards.\n\n### Global Tech Stack\n- **Front-End**: Angular 18, TypeScript, RxJS, HTML5, CSS3.\n- **Back-End**: NestJS (Node.js framework), **TypeORM**, TypeScript.\n- **Database**: MariaDB / MySQL managed via TypeORM.\n- **DevOps & Cloud**: Multi-stage Docker, Docker Compose, internal PaaS platform based on CloudFoundry.\n\n### My Role & Responsibilities\nI worked on this project as a **Fullstack Work-Study Developer** during my Bachelor's degree. After taking over application maintenance, I progressively assumed full ownership of the architecture, DB refactoring, and major feature developments.",
    },

    situation1: {
      label: "1. Takeover & DB",
      title: "Situation 1 — Project Takeover & BDD / NestJS Refactoring",
      badge: "Technical Debt & Data Modeling",
      framing:
        "When I took over the project following the initial developer's departure, I conducted a deep audit of the codebase alongside my Lead Dev. The initial state was concerning: the MariaDB database lacked foreign keys and relational integrity constraints, NestJS services directly modified DB entities without DTOs, and raw JavaScript scripts bypassed the NestJS and Angular lifecycles.",
      action:
        "To resolve this major technical debt, I undertook a deep architecture overhaul. I first modeled all entity relationships in **TypeORM**, reintroducing missing foreign keys and SQL integrity constraints. I then systematically implemented the **DTO (Data Transfer Objects) pattern** using `class-validator` across all NestJS API endpoints to seal input data. Finally, I eliminated raw JS scripts to realign the codebase with native framework standards.",
      results:
        "Through these actions, I completely eradicated data leaks and API instabilities. On the performance front, table redesigns and custom SQL Views **gained several days of execution time on export processing**, delivering a robust, strongly-typed, and maintainable backend foundation.",
    },

    situation2: {
      label: "2. Onboarding & Docker",
      title: "Situation 2 — Team Member Onboarding & 1-Click Dockerization",
      badge: "Mentorship & DevOps",
      framing:
        "During a period of intense workload, my Project Manager assigned a team member (a Flutter mobile specialist) to assist me on the Web. My challenge was twofold: enable her to spin up her local server environment instantly without manual MariaDB/PHPMyAdmin installation hurdles, and guide her skill development on Angular 18 and TypeScript.",
      action:
        "To solve the local setup friction, I designed a custom **Docker Compose** environment combining an optimized NestJS `Dockerfile`, a MariaDB container, and a PHPMyAdmin interface. With a single command (`docker compose up -d --build`), my colleague could launch the full backend in **5 minutes**. In parallel, I conducted daily **mentorship sessions** to teach her Angular 18 fundamentals. Recognizing persistent difficulties with core web concepts, I proactively alerted the Project Manager before my 3-week vacation to ensure proper team support.",
      results:
        "My Docker environment reduced local dev onboarding time from hours to **just 5 minutes** via Docker Desktop. My preventive alert provided management with clear planning visibility and allowed them to prepare team support.",
    },

    situation3: {
      label: "3. Crisis Management",
      title: "Situation 3 — Crisis Management & Front-End Rework",
      badge: "Resilience & Composure",
      framing:
        "Upon returning from my 3-week vacation, I faced a critical situation: due to the unexpected absence of my Lead Dev, my colleague had been left without guidance. The Front-End code produced during my absence was severely degraded, featuring monolithic components without Angular architecture, no TypeScript typing, and unverified AI copy-pasted code snippets. The delivery deadline was approaching and budget overflow was an immediate risk.",
      action:
        "I maintained my **composure** and conducted a precise code diagnostic with my Lead Dev. I restructured the sprint backlog and reallocated urgent days to perform a **complete Front-End refactoring**. I decomposed pages into modular components, enforced **strict TypeScript typing**, and added HTTP error handling interceptors. I also took charge of complex tickets to secure the delivery date.",
      results:
        "Thanks to this intensive effort, I enabled the team to **deliver the project on schedule** with high client satisfaction despite sprint adjustments. Following this event, I led a team retrospective (REX) to establish junior onboarding guidelines and strict **governance over AI coding assistants**.",
    },

    situation4: {
      label: "4. Back-Office & GDPR",
      title: "Situation 4 — HR Back-Office, Solo Production Deployment & GDPR",
      badge: "Business Features & Deployment",
      framing:
        "With stability restored, I continued maintenance with complete autonomy. The HR client entrusted me with designing advanced administration features, legal compliance (GDPR) requirements, and an **unannounced production deployment requested one morning at 10:00 AM**.",
      action:
        "I redesigned the HR news module and built a real-time emergency alert banner component. I also engineered the GDPR consent tracking module with CSV export capabilities.\n\nWhen the client requested an unannounced same-day production deployment of preproduction-validated features, my Lead Dev was absent. I accepted to execute this **solo production deployment** by strictly applying our corporate security standards:\n- **Preventive Backup**: Conducted a full database dump of the production database prior to deployment.\n- **CI/CD Deployment**: Executed the deployment pipeline on our CloudFoundry PaaS platform.\n- **Non-Regression Testing**: Executed a comprehensive E2E test plan in production to verify new feature functionality while ensuring zero regression on existing features.",
      results:
        "The solo production deployment was a **total success with zero downtime** and zero regressions. I provided full autonomy to HR administrators for emergency communications while guaranteeing strict GDPR auditability.",
    },

    situation5: {
      label: "5. Power BI Analytics",
      title: "Situation 5 — Custom Analytics Engine for Power BI",
      badge: "Innovation & Autonomy",
      framing:
        "Executive HR management sought precise usage metrics (most consulted tools, recurring searches, favorite behavior) to feed executive Power BI decision dashboards.",
      action:
        "I conducted an architectural study and proposed building a **custom in-house Analytics engine** integrated into NestJS (preferred over heavy tools like Grafana to preserve server footprint). I **autonomously** developed the tracking API, asynchronous event capture, and optimized metric storage in MySQL. I then managed qualification and pushed the module to Preproduction.",
      results:
        "My Analytics module is **100% operational in Preproduction**, ready to feed executive Power BI dashboards. I delivered this complex component with full autonomy and zero bugs reported during testing.",
    },

    synthesis: {
      label: "My Summary & Critical View",
      title: "Overall Retrospective & Critical View",
      badge: "Self-Evaluation & Expert Posture",
      content:
        "### Confirmed Skills & Key Learnings\nThis major project on the **HR Redirection Portal** enabled me to **confirm and consolidate my Full-Stack engineering skills** across the entire software lifecycle:\n- **Modern Front-End**: Angular 18, RxJS, component modularization, and strict TypeScript typing.\n- **Back-End & ORM**: NestJS, modular architecture, DTO pattern, and advanced querying with **TypeORM**.\n- **Database Management & Performance**: MySQL/MariaDB, relational data modeling, and custom SQL Views to optimize export processing.\n- **DevOps & Cloud PaaS**: Daily hands-on experience with Docker Compose containerization and continuous deployment on an enterprise PaaS solution based on **CloudFoundry**, an infrastructure domain I thoroughly enjoyed.\n\n### Business Value & Key Achievements\n- **Database Performance**: I achieved **a gain of several days of execution time on export processing** through table redesigns and custom SQL Views.\n- **DevOps Productivity**: I reduced developer local onboarding time to **just 5 minutes** via custom Docker Compose.\n- **Resilience & Production Autonomy**: I successfully managed a **solo 10:00 AM production deployment** under client request (DB backup, CI/CD deployment, non-regression testing), while enforcing strict code review over AI-generated code.\n\n### Project Aftermath & Future Outlook\nThe Analytics module is currently **qualified in Preproduction**, ready for Power BI data stream activation. As I write these lines, I am still actively performing **Third-Party Maintenance (TMA)** and feature evolution for the portal at Orange Business. This has been a deeply rewarding experience that I strongly hope to **extend beyond my work-study program**.",
    },
  },
};
