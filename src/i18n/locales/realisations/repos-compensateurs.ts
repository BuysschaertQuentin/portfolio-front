export const reposCompensateursFr = {
  title: "Microservice MS-TP-RC — Temps Partiels & Repos Compensateurs",
  shortDesc: "Application d'entreprise de gestion des régimes de temps partiels et repos compensateurs — Angular 18, Java 17, Spring Boot 3, Microservices.",
  definition:
    "Le **Microservice MS-TP-RC** (Temps Partiels & Repos Compensateurs) est une application d'entreprise stratégique développée au sein d'Orange Business. Il s'intègre dans un écosystème distribué de plusieurs microservices dédiés à la gestion des régimes de travail des salariés (temps partiels parentaux, règles d'aménagement du temps de travail, justificatifs) et au suivi des soldes de repos compensateurs.",
  framing:
    "Le projet repose sur une architecture distribuée combinant un Front-End moderne sous Angular 18 et un Back-End Java 17 / Spring Boot 3, orchestrés via Docker Compose et déployés sur la plateforme PaaS CloudFoundry. Mes enjeux ont couvert la création from scratch de l'interface Front-End en autonomie complète, l'adaptation agile aux évolutions de données et la résolution d'anomalies au runtime Java.",
  action:
    "Mon rôle s'est articulé en deux temps forts : en 2025, la conception et le développement intégral du Front-End Angular 18 from scratch selon les meilleures pratiques (contrats d'interfaces, lazy loading, hooks Husky) tout en absorbant les ajustements de schéma BDD sans aucun retard de planning ; puis en 2026, ma montée en compétences sur le Back-End Java 17 / Spring Boot 3 avec la résolution d'une erreur 500 critique au runtime Java lors du workflow de validation RH.",
  results:
    "J'ai livré l'interface Front-End à **100% dans les temps impartis**, avec zéro jour de dépassement sur mon planning de dev. Côté Back-End, j'ai identifié et corrigé un bug silencieux au runtime Java lié aux doublons de pièces jointes, débloquant définitivement la validation des demandes de temps partiel par la filière RH.",
  critical:
    "Cette expérience a confirmé la grande confiance que m'accorde mon Lead Dev pour la création d'interfaces complexes en autonomie. Elle a également marqué ma montée en puissance sur le Back-End d'entreprise en Java / Spring Boot 3 au sein d'un écosystème de microservices.",

  tabs: {
    project: {
      label: "Le Projet",
      title: "Vue d'ensemble & Périmètre Métier",
      badge: "Contexte Applicatif & Écosystème",
      content:
        "Le **Microservice MS-TP-RC** (Temps Partiels & Repos Compensateurs) s'inscrit dans une suite applicative d'entreprise chez Orange Business dédiée à la gestion des temps de travail et régimes spécifiques des salariés. Il permet notamment la saisie et le suivi des demandes de temps partiels (tels que les temps partiels parentaux), l'importation de pièces justificatives obligatoires et l'exécution d'un workflow d'approbation à plusieurs niveaux (soumission par le salarié, validation par le manager, puis validation finale par la filière RH).\n\n### Périmètre & Fonctionnalités Métiers\n- **Gestion des Régimes de Temps Partiels** : Saisie et modification des demandes de temps partiels parentaux et régimes spécifiques via des formulaires dynamiques.\n- **Workflow d'Approbation Multi-Niveaux** : Transmission des dossiers avec suivi des statuts en temps réel entre le collaborateur, son manager et le service RH.\n- **Gestion des Pièces Justificatives** : Importation, consultation et contrôle des documents obligatoires joints à chaque étape de validation.\n- **Suivi des Repos Compensateurs** : Calcul et restitution des soldes de repos au sein de l'écosystème RH.\n\n### Stack Technique Globale\n- **Front-End** : Angular 18, TypeScript, RxJS, HTML5, CSS3.\n- **Back-End** : Java 17, Spring Boot 3, Hibernate / JPA, APIs REST (Architecture BFF).\n- **Qualité & DevOps** : Hooks Husky (pre-commit / pre-push), Docker Compose (orchestration à 8 conteneurs), plateforme PaaS CloudFoundry.\n\n### Mon Rôle & Évolution\nRejoint au départ pour **créer intégralement l'application Front-End**, j'ai conçu seul l'interface Angular 18. Par la suite, j'ai rejoint l'équipe Back-End pour étendre mon périmètre d'intervention sur les APIs Java / Spring Boot 3 de l'ensemble du système de microservices.",
    },

    situation1: {
      label: "1. Front-End From Scratch",
      title: "Conception du Front-End Angular 18 From Scratch & Agilité",
      badge: "Architecture & Bonnes Pratiques",
      framing:
        "Lorsqu'il m'a été confié la création de la nouvelle application MS-TP-RC en 2025, l'interface utilisateur n'existait pas. Mon objectif était de concevoir l'intégralité du Front-End sous **Angular 18** en appliquant les normes de qualité logicielle les plus exigeantes d'entreprise.",
      action:
        "Avant d'écrire la moindre ligne de code d'affichage, j'ai commencé par définir l'ensemble des **interfaces TypeScript** avec l'équipe Back-End afin d'établir un contrat de données strict entre le Front et l'API. J'ai ensuite configuré **Husky** pour automatiser les contrôles de qualité (linter, typage) lors des pre-commits et pre-pushs.\n\nSur le plan architectural, j'ai structuré l'application avec un système de **lazy loading** par routes et découpé l'interface en composants réutilisables (composants de structure Header/Footer/Navbar, formulaires réactifs dynamiques, et tableaux génériques). À mi-parcours de mon développement, l'équipe Back-End a fait face à des ajustements et impondérables métiers sur la structure des données serveur. Grâce à l'isolation et au découplage strict de ma couche Front-End, j'ai adapté mes services et mappers HTTP rapidement sans impacter les composants visuels ni subir de retard.",
      results:
        "J'ai livré l'interface utilisateur à **100% dans les temps impartis**, avec zéro jour de dépassement sur mon nombre de jours de dev planifié. Mon Lead Dev a relu l'ensemble de mes Pull Requests avec des retours très constructifs, confirmant sa totale confiance dans ma gestion autonome du Front-End.",
    },

    situation2: {
      label: "2. Bug 500 Java Runtime",
      title: "Montée en Compétence Java & Résolution d'un Bug 500 Runtime",
      badge: "Investigation & Java Spring Boot 3",
      framing:
        "Récemment, j'ai rejoint l'équipe Back-End afin d'élargir mes compétences sur l'ensemble de la suite de microservices (**Java 17 / Spring Boot 3**) aux côtés d'une développeuse senior. Un ticket critique m'a été attribué : lors du workflow de validation RH d'un temps partiel, une **erreur 500 silencieuse** bloquait la validation finale lorsqu'un justificatif avait été importé par le manager.",
      action:
        "J'ai mené une investigation approfondie dans la codebase Java. En retraçant la pile d'exécution, j'ai découvert que le problème ne résidait pas dans la persistance BDD, mais dans une méthode du **runtime Java** chargée d'assembler la liste des pièces justificatives et leurs chemins d'accès. Lorsqu'un manager réimportait 'au cas où' un fichier joint déjà auto-généré portant le même nom, la méthode tentait de traiter deux références de fichiers identiques dans une collection mémoire, provoquant une **exception Java Runtime silencieuse** qui renvoyait une erreur HTTP 500 sans message explicite.\n\nJ'ai analysé cette mécanique et conçu un correctif en Java : j'ai sécurisé la méthode pour dédoublonner les références de fichiers en mémoire et gérer proprement les doublons de chemins. J'ai soumis ma Pull Request, qui a été relue, validée et déployée.",
      results:
        "J'ai **résolu l'erreur 500 et débloqué le workflow de validation RH**. Cette intervention a confirmé mes capacités d'analyse à froid du code Java et ma maîtrise du cycle d'exécution au runtime.",
    },

    synthesis: {
      label: "Mon Bilan & Regard Critique",
      title: "Bilan global & Regard Critique",
      badge: "Auto-Évaluation & Posture d'Expert",
      content:
        "Mon expérience sur le **Microservice MS-TP-RC** a été une étape clé dans l'élargissement de mes compétences d'ingénierie :\n- **Maîtrise d'Angular 18 From Scratch** : Conception autonome d'une interface complète, mise en place des hooks **Husky**, lazy loading et typage strict des contrats d'interfaces.\n- **Montée en puissance Java 17 / Spring Boot 3** : Investigation avancée au runtime Java, résolution d'exceptions complexes et manipulation d'APIs au sein d'une architecture distribuée.\n- **Culture de la Qualité & Confiance** : Travail en revue de code avec mon Lead Dev/Mentor, renforçant la confiance mutuelle sur la livraison de composants critiques.\n\n### Valeur ajoutée pour l'entreprise & Résultats clés\n- **Livraison Front-End à 100% dans les temps** : Respect intégral du calendrier de développement sur la partie Angular sans aucun dépassement de jours dev.\n- **Fiabilité du Workflow RH** : Résolution du **bug 500 Java runtime**, débloquant la validation des temps partiels par les responsables RH.\n- **Rigueur DevOps** : Automatisation des vérifications pre-commit/pre-push via Husky et orchestration Docker Compose sur 8 microservices.\n\n### Lendemains du Projet & Perspectives\nÀ l'heure où j'écris ces lignes, je poursuis activement la **Tierce Maintenance Applicative (TMA)** sur l'ensemble de l'écosystème de microservices chez Orange Business. Je continue de développer mes compétences sur les APIs Java / Spring Boot 3 et d'assurer l'évolution des fonctionnalités des régimes de travail.",
    },
  },
};

export const reposCompensateursEn = {
  title: "MS-TP-RC Microservice — Part-Time Regimes & Compensatory Leave Management",
  shortDesc: "Enterprise working arrangements and compensatory leave management app — Angular 18, Java 17, Spring Boot 3, Microservices.",
  definition:
    "The **MS-TP-RC Microservice** (Part-Time Regimes & Compensatory Leave) is a strategic enterprise application built within Orange Business. It operates within a distributed ecosystem of multiple microservices dedicated to managing employee working arrangements (parental part-time regimes, schedule rules, supporting documents) and tracking compensatory leave balances.",
  framing:
    "The project relies on a distributed architecture combining a modern Angular 18 Front-End and a Java 17 / Spring Boot 3 Back-End, orchestrated via Docker Compose and deployed on the CloudFoundry PaaS platform. My responsibilities encompassed building the Front-End interface from scratch in complete autonomy, agile adaptation to server schema shifts, and resolving complex Java runtime exceptions.",
  action:
    "My role unfolded in two key phases: in 2025, designing and building the complete Angular 18 Front-End from scratch following best practices (interface contracts, lazy loading, Husky hooks) while absorbing backend data schema shifts with zero schedule delay; then in 2026, expanding into Java 17 / Spring Boot 3 Back-End development by investigating and resolving a critical HTTP 500 runtime error blocking HR validations.",
  results:
    "I delivered the Front-End interface **100% on schedule**, with zero days of delay on my planned dev days. On the Back-End, I identified and fixed a silent Java runtime bug caused by duplicate file attachments, unblocking part-time validations for the HR department.",
  critical:
    "This experience validated the strong trust placed in me by my Lead Dev for building complex interfaces autonomously. It also marked my skill expansion into enterprise Java / Spring Boot 3 within a microservice ecosystem.",

  tabs: {
    project: {
      label: "The Project",
      title: "General Overview & Business Scope",
      badge: "Application Context & Ecosystem",
      content:
        "The **MS-TP-RC Microservice** (Part-Time Regimes & Compensatory Leave) is part of an enterprise application suite at Orange Business dedicated to managing working hours and specific employee regimes. It enables submitting and tracking part-time requests (such as parental part-time), attaching mandatory supporting documents, and executing a multi-level approval workflow (employee submission, manager validation, and final HR validation).\n\n### Business Scope & Features\n- **Part-Time Regime Management**: Form submission and modification for parental part-time and specific regimes via dynamic forms.\n- **Multi-Level Approval Workflow**: Application routing with real-time status tracking between employee, manager, and HR department.\n- **Supporting Document Management**: Upload, review, and verification of mandatory attachments at each validation step.\n- **Compensatory Leave Tracking**: Calculation and rendering of leave balances across the HR ecosystem.\n\n### Global Tech Stack\n- **Front-End**: Angular 18, TypeScript, RxJS, HTML5, CSS3.\n- **Back-End**: Java 17, Spring Boot 3, Hibernate / JPA, REST APIs (BFF Architecture).\n- **Quality & DevOps**: Husky hooks (pre-commit / pre-push), Docker Compose (8-container orchestration), CloudFoundry PaaS platform.\n\n### My Role & Evolution\nInitially joined to **build the Front-End application from scratch**, I engineered the Angular 18 interface solo. Subsequently, I joined the Back-End team to expand my scope across Java 17 / Spring Boot 3 APIs for the microservice ecosystem.",
    },

    situation1: {
      label: "1. Front-End From Scratch",
      title: "Situation 1 — Designing the Angular 18 Front-End From Scratch & Agility",
      badge: "Architecture & Best Practices",
      framing:
        "When I was entrusted with creating the new MS-TP-RC application in 2025, the user interface did not exist. My goal was to engineer the complete Front-End using **Angular 18** while adhering to strict enterprise code quality standards.",
      action:
        "Before writing UI code, I defined all **TypeScript interfaces** with the Back-End team to establish a strict data contract between Front and API. I then configured **Husky** to automate quality checks (linter, typing) on pre-commits and pre-pushes.\n\nArchitecturally, I structured the app with **lazy loading** routing and decomposed the UI into reusable components (Header/Footer/Navbar structure, dynamic reactive forms, and generic data tables). Halfway through development, the Back-End team encountered business data structure shifts. Thanks to the strict decoupling of my Front-End layer, I quickly adapted my HTTP services and mappers without impacting visual components or incurring dev schedule delays.",
      results:
        "I delivered the user interface **100% on schedule**, with zero days of delay on my dev planning. My Lead Dev reviewed all my Pull Requests with constructive feedback, confirming full confidence in my autonomous Front-End management.",
    },

    situation2: {
      label: "2. Bug 500 Java Runtime",
      title: "Situation 2 — Java Skill Expansion & Resolving a Runtime 500 Exception",
      badge: "Investigation & Java Spring Boot 3",
      framing:
        "Recently, I joined the Back-End team to expand my skills across the microservice suite (**Java 17 / Spring Boot 3**) alongside a senior developer. I was assigned a critical ticket: during HR validation of part-time requests, a **silent 500 Server Error** blocked final approval when supporting files were attached by managers.",
      action:
        "I conducted a thorough investigation in the Java codebase. Tracing the execution stack, I discovered the issue was not in database persistence, but in a **Java runtime** method responsible for assembling file attachments and their file paths. When a manager re-uploaded an auto-generated file 'just in case' bearing the exact same filename, the method attempted to process duplicate file references in a memory collection, triggering a **silent Java Runtime Exception** returning an uninformative HTTP 500 error.\n\nI analyzed this mechanic and engineered a Java fix: I secured the method to deduplicate in-memory file references and handle duplicate file paths gracefully. I submitted my Pull Request, which was reviewed, approved, and deployed.",
      results:
        "I **resolved the 500 error and unblocked the HR validation workflow**. This task validated my Java code diagnostic skills and runtime execution analysis.",
    },

    synthesis: {
      label: "My Summary & Critical View",
      title: "Overall Retrospective & Critical View",
      badge: "Self-Evaluation & Expert Posture",
      content:
        "This experience on the **MS-TP-RC Microservice** was a key milestone expanding my software engineering profile:\n- **Angular 18 From Scratch Mastery**: Autonomous UI design, **Husky** hook configuration, lazy loading, and strict interface typing.\n- **Java 17 / Spring Boot 3 Growth**: Advanced Java runtime investigation, resolving complex exceptions, and handling REST APIs in a distributed architecture.\n- **Quality Culture & Trust**: Code review collaboration with my Lead Dev/Mentor, strengthening mutual trust on critical feature delivery.\n\n### Business Value & Key Achievements\n- **100% On-Time Front-End Delivery**: Complete adherence to development schedule on Angular components with zero dev days delay.\n- **HR Workflow Reliability**: Resolved the **Java runtime 500 bug**, unblocking part-time approval workflows for HR managers.\n- **DevOps Rigor**: Automated pre-commit/pre-push quality checks via Husky and Docker Compose 8-container orchestration.\n\n### Project Aftermath & Outlook\nI am currently performing active **Third-Party Maintenance (TMA)** across the microservice ecosystem at Orange Business. I continue expanding my skills on Java 17 / Spring Boot 3 APIs and supporting feature evolutions.",
    },
  },
};
