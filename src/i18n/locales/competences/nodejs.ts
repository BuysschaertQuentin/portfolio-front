export const nodejsFr = {
  title: "Node.js",
  shortDesc: "Environnement d'exécution JavaScript côté serveur (V8 Engine)",
  definition:
    "Pour moi, **Node.js** est l'environnement d'exécution de référence qui permet de faire tourner du code JavaScript et TypeScript côté serveur. Basé sur le moteur V8 de Google et une architecture événementielle non bloquante (*Event Loop*), Node.js excelle dans le traitement d'entrées/sorties asynchrones et la création de services web légers, réactifs et hautement scalables.",
  proofs:
    "J'utilise Node.js comme moteur d'exécution serveur sur plusieurs architectures clés :\n\n- **Moteur d'exécution du Portail RH (NestJS chez Orange Business)** : Côté entreprise, Node.js constitue la plateforme serveur qui exécute l'application NestJS du portail RH. J'y exploite la gestion asynchrone des flux pour traiter les requêtes HTTP, interagir avec la base MySQL et orchestrer la logique applicative.\n\n- **Projet de fin d'études O'Voyage (Express.js)** : Lors de ma formation chez O'clock, j'ai développé l'API REST du projet *O'Voyage* sous Node.js avec le framework Express. J'y ai conçu l'architecture serveur complète : gestion des routes, middlewares d'authentification par token JWT et requêtage PostgreSQL.\n\n- **Outillage et scripts de build** : En dehors du serveur web, j'utilise quotidiennement Node.js et l'écosystème **NPM** pour exécuter des scripts de build, configurer des serveurs de développement (Vite) et exécuter des outils de qualité de code (ESLint, Prettier, Husky).",
  selfCritique:
    "Le modèle mono-thread basculant sur l'Event Loop exige de ne jamais bloquer la boucle d'événements principale avec des calculs CPU intensifs. J'ai appris à concevoir des fonctions asynchrones réactives (`async/await`) et à déléguer les traitements lourds pour garantir des temps de réponse d'API optimaux.",
  hindsight:
    "Node.js a révolutionné le développement Web en unifiant le langage côté client et côté serveur (JavaScript / TypeScript). Cela permet une réutilisation naturelle des types, des utilitaires de validation et des compétences sur l'ensemble de la stack.",
  evolution:
    "Je souhaite continuer à suivre l'évolution des fonctionnalités natives de Node.js (test runner natif, gestionnaire de dépendances pnpm/bun) et optimiser les performances des APIs serveur.",
};

export const nodejsEn = {
  title: "Node.js",
  shortDesc: "Server-side JavaScript runtime environment (V8 Engine)",
  definition:
    "For me, **Node.js** is the benchmark runtime environment for executing JavaScript and TypeScript code on the server side. Powered by Google's V8 engine and a non-blocking event-driven architecture (*Event Loop*), Node.js excels at asynchronous I/O operations and building responsive, scalable web services.",
  proofs:
    "I utilize Node.js as a server runtime environment across several core architectures:\n\n- **HR Portal Runtime (NestJS at Orange Business)**: In enterprise development, Node.js serves as the underlying server platform executing the HR portal NestJS application. I leverage asynchronous stream handling to process HTTP requests, interact with the MySQL database, and orchestrate application logic.\n\n- **O'Voyage Graduation Project (Express.js)**: During my O'clock bootcamp, I developed the REST API for *O'Voyage* on Node.js using the Express framework. I designed the complete server architecture: route handling, JWT authentication middleware, and PostgreSQL querying.\n\n- **Tooling & Build Scripts**: Beyond server web applications, I use Node.js and the **NPM** ecosystem daily to execute build scripts, configure dev servers (Vite), and run code quality tooling (ESLint, Prettier, Husky).",
  selfCritique:
    "The single-threaded event loop architecture requires ensuring heavy CPU tasks never block main execution. I learned to structure asynchronous handlers (`async/await`) and delegate heavy processing to maintain fast API response times.",
  hindsight:
    "Node.js unified full-stack web development by enabling JavaScript / TypeScript across client and server. This allows seamless sharing of types, validation helpers, and logic across the entire stack.",
  evolution:
    "I plan to continue following native Node.js evolutions (native test runner, pnpm/bun dependency managers) and optimizing server API throughput.",
};
