export const portailRhFr = {
  title: "Portail RH & Redirection d'Outils",
  shortDesc:
    "Application web d'entreprise centralisant les outils RH d'Orange — Angular 18, NestJS, MariaDB, Docker & Analytics Power BI.",
  definition:
    "Le **Portail RH** est une application web d'entreprise développée chez Orange Business. Il sert de point d'entrée unique et centralisé pour l'ensemble des collaborateurs d'Orange France, leur permettant d'accéder rapidement à leurs outils métiers et ressources RH via des redirections dynamiques.",
  framing:
    "Application stratégique d'entreprise basée sur Angular 18, NestJS, MariaDB (TypeORM) et conteneurisée sous Docker pour un déploiement CloudFoundry.",
  action:
    "Répartition des interventions en 5 situations clés : de la reprise du projet et du refactoring de BDD, à l'onboarding d'un collaborateur via Docker, la résolution d'une crise Front-End, l'enrichissement du Back-Office et la conception d'un module Analytics pour Power BI.",
  results:
    "Application livrée à terme avec succès et grande satisfaction client. Module Analytics déployé en Préproduction sans régression.",
  critical:
    "Une expérience majeure qui a forgé ma rigueur d'architecture, mon sang-froid en situation de crise, mon esprit critique sur l'IA et mon autonomie de conception.",

  tabs: {
    project: {
      label: "Le Projet",
      title: "Présentation générale du Portail RH",
      badge: "Contexte Applicatif & Métier",
      content:
        "### Qu'est-ce que le Portail RH ?\nLe **Portail RH** est une application web d'entreprise développée au sein d'Orange Business. Il constitue le point d'entrée centralisé pour l'ensemble des salariés d'Orange France afin de consulter et naviguer vers les différents outils, services et actualités RH de l'entreprise.\n\n### Fonctionnalités principales\n- **Moteur de recherche & Favoris** : Recherche rapide parmi des dizaines d'outils RH et personnalisation de l'espace de travail.\n- **Système de redirection d'URL** : Routage dynamique vers les plateformes internes d'Orange.\n- **Espace Administrateur** : Back-office complet pour la gestion des actualités RH (News), la diffusion de bandeaux d'alerte urgente en temps réel et la gestion des utilisateurs.\n\n### Stack Technique Globale\n- **Front-End** : Angular 18, TypeScript, RxJS, HTML5 / CSS3.\n- **Back-End** : NestJS (Node.js framework), TypeScript.\n- **Base de données** : MariaDB / MySQL managée via l'ORM TypeORM.\n- **DevOps & Infrastructure** : Docker multi-stage, Docker Compose, plateforme CloudFoundry.\n\n### Mon Rôle & Période\nJ'ai travaillé sur ce projet en tant que **Développeur Fullstack alternant** pendant ma 2ème année de Titre Pro CDA (Bac+3). J'ai d'abord repris la Tierce Maintenance Applicative (TMA) avant d'assumer la responsabilité complète des évolutions majeures et de l'architecture.",
    },

    situation1: {
      label: "1. Reprise & BDD",
      title: "Situation 1 — Reprise du projet & Refactoring BDD/NestJS",
      badge: "Dette Technique & Architecture",
      framing:
        "Après la démission du développeur initial, j'ai pris en main le projet en binôme avec mon Lead Dev.\n\n**Constat initial & Problématiques** :\n- **Absence d'intégrité référentielle** : La base de données MariaDB ne comportait aucune clé étrangère ni relation définie entre les tables.\n- **Manipulation directe des entités** : Les services du backend NestJS exposaient et modifiaient directement les entités BDD sans validation de données (absence de DTOs).\n- **Bypass du framework** : Présence de scripts en JavaScript pur contournant le contexte de NestJS et le cycle de vie d'Angular.",
      action:
        "**Actions réalisées par Quentin** :\n1. **Modélisation BDD & TypeORM** : Reconstitution des relations d'entités, ajout des clés étrangères et des contraintes d'intégrité sous MariaDB.\n2. **Pattern DTO (Data Transfer Objects)** : Implémentation systématique de DTOs avec `class-validator` pour étanchéifier les APIs et conversion dans les services NestJS.\n3. **Nettoyage d'architecture** : Élimination du code JS brut au profit des mécanismes natifs du framework.",
      results:
        "**Bilan & Résultats** :\n- Éradication des fuites de données et des comportements instables de l'API.\n- Validation stricte des entrées utilisateurs au niveau NestJS.\n- Socle back-end assaini et maintenable pour les futures fonctionnalités.",
    },

    situation2: {
      label: "2. Onboarding & Docker",
      title: "Situation 2 — Onboarding d'un collaborateur & Dockerisation",
      badge: "Mentorat & DevOps",
      framing:
        "Face à un fort pic de demandes de fonctionnalités et d'exigences graphiques de la part du client, le Chef de Projet a affecté un collaborateur de l'équipe (spécialiste mobile/Flutter) pour me prêter main-forte et monter en compétences sur le web.\n\n**Enjeux & Défis** :\n- Permettre au collaborateur de travailler en local immédiatement sans qu'il n'ait à installer manuellement MariaDB ou PHPMyAdmin.\n- Transmettre les fondamentaux d'Angular 18, de TypeScript et des requêtes HTTP REST dans un délai très court.",
      action:
        "**Actions réalisées par Quentin** :\n1. **Dockerisation 1-click sur-mesure** : Création d'un environnement **Docker multi-stage** (NestJS + MariaDB + PHPMyAdmin) orchestré par `docker compose up -d --build` pour automatiser le lancement du backend en local.\n2. **Formations matinales & Documentation** : Organisation de sessions de formation quotidiennes sur Angular 18 et les flux d'API.\n3. **Alerte préventive au Chef de Projet** : Ayant identifié des difficultés importantes sur les concepts web chez ce collaborateur, j'ai émis une alerte auprès du CP avant mon départ en vacances de 3 semaines pour anticiper le besoin d'accompagnement.",
      results:
        "**Bilan & Résultats** :\n- Environnement de dev local 1-click opérationnel via Docker.\n- Plan de montée en compétences formalisé et transmission transparente des risques de planning au management.",
    },

    situation3: {
      label: "3. Gestion de crise",
      title: "Situation 3 — Gestion de crise & Restructuration Front-End",
      badge: "Résilience & Sang-froid",
      framing:
        "Pendant mes 3 semaines de vacances, mon Lead Dev a été absent de façon imprévue, laissant le collaborateur sans accompagnement.\n\n**Constat au retour de vacances** :\n- Le code Front-End produit était très dégradé (pages sans architecture Angular, absence de typage, composants monolithiques).\n- Découverte de copier-coller bruts de réponses d'IA générative non relues ni vérifiées.\n- Risque immédiat de retard de livraison et de dépassement de budget.",
      action:
        "**Actions réalisées par Quentin** :\n1. **Garder son sang-froid & Diagnostic** : Analyse à froid des dégâts avec le Lead Dev et réorganisation du backlog des tickets restants.\n2. **Réécriture & Refactoring Front-End** : Réallocation de plusieurs jours pour réécrire la couche Front défaillante (découpage en composants réutilisables, typage TypeScript strict, gestion des erreurs HTTP).\n3. **Sécurisation du Sprint** : Prise en charge des tickets les plus complexes pour garantir la date de livraison.",
      results:
        "**Bilan & Résultats** :\n- Projet livré à terme avec une grande satisfaction du client malgré le léger réajustement budgétaire.\n- Retours d'expérience (REX) d'équipe formalisés sur l'accompagnement des juniors et l'utilisation encadrée des outils d'IA.",
    },

    situation4: {
      label: "4. Back-Office & RGPD",
      title: "Situation 4 — Back-Office, Traçabilité RGPD & Export CSV",
      badge: "Fonctionnalités Métier & Administration",
      framing:
        "La crise résolue, le calme est revenu sur le projet. J'ai continué la TMA en autonomie complète (revu par le Lead Dev) et le client a sollicité de nouvelles fonctionnalités d'administration RH et de conformité légale.",
      action:
        "**Actions réalisées par Quentin** :\n1. **Refonte du module News RH** : Refonte complète de la gestion des articles d'actualités RH destinés aux collaborateurs.\n2. **Bandeau d'alerte d'urgence en temps réel** : Création d'un composant d'alerte à la main de l'administrateur pour notifier immédiatement les utilisateurs en cas d'incident technique.\n3. **Conformité RGPD & Export CSV** : Implémentation du système de suivi et de consentement RGPD avec génération et téléchargement d'exports CSV auditables.",
      results:
        "**Bilan & Résultats** :\n- Back-office RH enrichi et autonomie totale des administrateurs pour la communication d'urgence.\n- Auditabilité RGPD garantie avec génération d'exports CSV performants.",
    },

    situation5: {
      label: "5. Analytics Power BI",
      title: "Situation 5 — Module Analytics sur-mesure pour Power BI",
      badge: "Innovation & Autonomie",
      framing:
        "Récemment, le client a souhaité mesurer l'audience et les parcours utilisateurs (outils RH les plus consultés, fréquence des recherches et des favoris) pour alimenter des tableaux de bord Power BI de la direction.",
      action:
        "**Actions réalisées par Quentin** :\n1. **Étude & Choix d'architecture** : Proposition et validation d'une **solution Analytics maison** intégrée (préférée à Grafana pour sa légèreté).\n2. **Développement 100% Autonome** : Conception de l'API de tracking sous NestJS, capture des événements utilisateurs et stockage structuré des métriques en BDD MariaDB.\n3. **Validation & Préproduction** : Développement réalisé seul, relu par le Lead Dev, et poussé en Préproduction avec zéro bug (en attente du Go Prod).",
      results:
        "**Bilan & Résultats** :\n- Module d'Analytics 100% opérationnel en Préproduction.\n- Flux de données prêt à alimenter les dashboards Power BI de la direction RH.",
    },

    synthesis: {
      label: "Mon Bilan",
      title: "Bilan global & Regard critique de l'expérience",
      badge: "Auto-Évaluation & Posture Professionnelle",
      content:
        "### Synthèse de mon approche\nMon aventure sur le Portail RH chez Orange Business m'a fait passer du statut de développeur en reprise de code à celui de **référent technique autonome** capable de cadrer, sécuriser et innover sur une application critique d'entreprise.\n\n### Ce qui m'a le plus stimulé\n- **L'autonomie technique** : Concevoir à 100% le module d'Analytics pour Power BI et restructurer l'architecture BDD/NestJS.\n- **Le mentorat & la pédagogie** : Transmettre mes connaissances et préparer des outils d'onboarding (environnement Docker).\n\n### Les défis et aspects formateurs\n- **La gestion de crise (Post-vacances)** : Être confronté aux dérives du copier-coller d'IA non relu m'a appris à conserver mon sang-froid sous pression, à réorganiser un sprint et à défendre la qualité logicielle.\n\n### Valeur ajoutée pour les recruteurs & le jury RNCP\n1. **Rigueur d'Ingénierie** (Clean Code, DTOs, Docker, Angular 18, NestJS).\n2. **Résilience & Gestion des Imprévus** (capacité à résoudre une crise de livraison).\n3. **Esprit Critique sur l'IA** (maîtrise du code généré et revues rigoureuses).\n4. **Posture de Mentor & Communication** (alertes préventives, onboarding).",
    },
  },
};

export const portailRhEn = {
  title: "HR Portal & Tool Redirection",
  shortDesc:
    "Enterprise web app centralizing Orange HR tools — Angular 18, NestJS, MariaDB, Docker & Power BI Analytics.",
  definition:
    "The **HR Portal** is an enterprise web application built at Orange Business. It serves as a single, centralized entry point for all Orange France employees to quickly access HR tools and resources via dynamic redirections.",
  framing:
    "Enterprise application built on Angular 18, NestJS, MariaDB (TypeORM), containerized using Docker for CloudFoundry cloud deployment.",
  action:
    "Work structured around 5 key situations: from project takeover and DB refactoring, to team member onboarding via Docker, Front-End crisis resolution, Back-Office enhancement, and designing an Analytics engine for Power BI.",
  results:
    "Application successfully delivered on time with high client satisfaction. Analytics module deployed to Preproduction without regressions.",
  critical:
    "A major experience that forged my architectural discipline, crisis management composure, critical stance on AI, and design autonomy.",

  tabs: {
    project: {
      label: "The Project",
      title: "General HR Portal Overview",
      badge: "Business Context & Application Scope",
      content:
        "### What is the HR Portal?\nThe **HR Portal** is an enterprise web application developed at Orange Business. It serves as the centralized gateway for all Orange France employees to discover and navigate to HR tools, services, and corporate news.\n\n### Core Features\n- **Search Engine & Favorites**: Quick search across dozens of HR tools with personalized workspace shortcuts.\n- **URL Redirection System**: Dynamic routing to internal Orange platforms.\n- **Admin Space**: Complete back-office for managing HR news, broadcasting real-time emergency alert banners, and user management.\n\n### Global Tech Stack\n- **Front-End**: Angular 18, TypeScript, RxJS, HTML5 / CSS3.\n- **Back-End**: NestJS (Node.js framework), TypeScript.\n- **Database**: MariaDB / MySQL managed via TypeORM.\n- **DevOps & Infrastructure**: Multi-stage Docker, Docker Compose, CloudFoundry platform.\n\n### My Role & Period\nI worked on this project as a **Fullstack Work-Study Developer** during my 2nd year of Bachelor's degree (Application Designer). I initially took over maintenance before assuming full ownership of major evolutions and architecture.",
    },

    situation1: {
      label: "1. Takeover & DB",
      title: "Situation 1 — Project Takeover & BDD/NestJS Refactoring",
      badge: "Technical Debt & Architecture",
      framing:
        "Following the resignation of the initial developer, I took over the project paired with my Lead Dev.\n\n**Initial Assessment & Issues**:\n- **No Relational Integrity**: The MariaDB database lacked foreign keys and defined table relationships.\n- **Direct Entity Manipulation**: NestJS backend services exposed and modified BDD entities directly without data validation (lack of DTOs).\n- **Framework Bypasses**: Presence of raw JavaScript scripts bypassing NestJS context and Angular lifecycle.",
      action:
        "**Actions Performed by Quentin**:\n1. **DB Modeling & TypeORM**: Reconstructed entity relationships, added foreign keys and relational integrity constraints in MariaDB.\n2. **DTO Pattern**: Systematically implemented DTOs with `class-validator` to seal APIs, incorporating conversion mappers in NestJS services.\n3. **Architecture Cleanup**: Replaced raw JS scripts with native framework mechanisms.",
      results:
        "**Results & Key Outcomes**:\n- Complete elimination of data leaks and unstable API behaviors.\n- Strict user input validation enforced at the NestJS layer.\n- Sanitized and maintainable back-end codebase for future features.",
    },

    situation2: {
      label: "2. Onboarding & Docker",
      title: "Situation 2 — Team Member Onboarding & Dockerization",
      badge: "Mentorship & DevOps",
      framing:
        "Facing a high influx of client feature requests and UI redesign demands, the Project Manager assigned a team member (Flutter mobile specialist) to assist me and build web skills.\n\n**Challenges**:\n- Enable the team member to work locally immediately without requiring manual MariaDB or PHPMyAdmin setup.\n- Teach core Angular 18, TypeScript, and HTTP REST API concepts within a tight timeframe.",
      action:
        "**Actions Performed by Quentin**:\n1. **1-Click Custom Dockerization**: Designed a **multi-stage Docker** environment (NestJS + MariaDB + PHPMyAdmin) orchestrated via `docker compose up -d --build` to automate local backend startup.\n2. **Morning Training & Documentation**: Organized daily training sessions on Angular 18 and API flows.\n3. **Preventive Alert to PM**: Identifying fundamental web concept gaps, I alerted the Project Manager before my 3-week vacation to arrange necessary support.",
      results:
        "**Results & Key Outcomes**:\n- Operational 1-click local dev environment via Docker.\n- Formalized skill development plan and transparent risk communication to management.",
    },

    situation3: {
      label: "3. Crisis Management",
      title: "Situation 3 — Crisis Management & Front-End Rework",
      badge: "Resilience & Composure",
      framing:
        "During my 3-week vacation, my Lead Dev was unexpectedly absent, leaving the team member unassisted.\n\n**Assessment Upon Return**:\n- Front-End code produced was degraded (pages missing Angular architecture, no typing, monolithic components).\n- Discovered unverified, raw AI copy-pasted code snippets.\n- Immediate risk of delivery delay and budget overflow.",
      action:
        "**Actions Performed by Quentin**:\n1. **Composure & Diagnosis**: Analyzed damages calmly with the Lead Dev and restructured the remaining ticket backlog.\n2. **Front-End Rewriting & Refactoring**: Reallocated several days to rewrite the failing Front layer (modular Angular components, strict TypeScript typing, HTTP error handling).\n3. **Sprint Securing**: Took charge of complex tickets to guarantee delivery date.",
      results:
        "**Results & Key Outcomes**:\n- Delivered the project on time with high client satisfaction despite minor budget adjustment.\n- Formalized team retrospectives on junior onboarding and governed AI coding assistant usage.",
    },

    situation4: {
      label: "4. Back-Office & GDPR",
      title: "Situation 4 — Back-Office, GDPR Auditability & CSV Export",
      badge: "Business Features & Admin",
      framing:
        "With the crisis resolved and stability restored, I continued maintenance independently (reviewed by Lead Dev). The client requested advanced HR administration and legal compliance features.",
      action:
        "**Actions Performed by Quentin**:\n1. **HR News Module Redesign**: Complete overhaul of corporate news management for employees.\n2. **Real-Time Emergency Alert Banner**: Built an admin-controlled alert component to instantly notify users during technical incidents.\n3. **GDPR Compliance & CSV Export**: Implemented GDPR consent tracking with auditable CSV export generation and download.",
      results:
        "**Results & Key Outcomes**:\n- Enriched HR back-office and full admin autonomy for emergency communications.\n- Guaranteed GDPR auditability with high-performance CSV exports.",
    },

    situation5: {
      label: "5. Power BI Analytics",
      title: "Situation 5 — Custom Analytics Engine for Power BI",
      badge: "Innovation & Autonomy",
      framing:
        "Recently, executive HR management sought to track user engagement and navigation journeys (most consulted tools, search and favorite usage) to feed Power BI dashboards.",
      action:
        "**Actions Performed by Quentin**:\n1. **Study & Architectural Choice**: Proposed and validated a lightweight **in-house Analytics engine** (preferred over Grafana).\n2. **100% Autonomous Development**: Designed the NestJS tracking API, user event capture, and structured metric storage in MariaDB.\n3. **Validation & Preproduction**: Built solo, reviewed by Lead Dev, pushed to Preproduction with zero bugs (awaiting Production Go-Live).",
      results:
        "**Results & Key Outcomes**:\n- 100% operational Analytics module in Preproduction.\n- Data stream ready to feed executive HR Power BI dashboards.",
    },

    synthesis: {
      label: "My Summary",
      title: "Overall Summary & Critical Retrospective",
      badge: "Self-Evaluation & Professional Growth",
      content:
        "### Approach Summary\nMy journey on the HR Portal evolved from maintaining legacy code to becoming an **autonomous technical reference** capable of framing, securing, and innovating on critical enterprise applications.\n\n### What Stimulated Me Most\n- **Technical Autonomy**: Designing the Power BI Analytics module 100% from scratch and refactoring the DB/NestJS architecture.\n- **Mentorship & Pedagogy**: Sharing knowledge and preparing onboarding tooling (Docker environment).\n\n### Challenges & Learning Moments\n- **Crisis Management (Post-Vacation)**: Facing unverified AI copy-pasted debt taught me composure under pressure, sprint reorganization, and defending software quality.\n\n### Key Value for Recruiters & Certification Jury\n1. **Engineering Discipline** (Clean Code, DTOs, Docker, Angular 18, NestJS).\n2. **Resilience & Crisis Handling** (resolving delivery bottlenecks).\n3. **Critical Stance on AI** (strict code review and governance).\n4. **Mentorship & Communication** (preventive alerts, structured onboarding).",
    },
  },
};
