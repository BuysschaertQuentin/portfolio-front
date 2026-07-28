export const expressFr = {
  title: "Express.js",
  shortDesc: "Framework web minimaliste pour Node.js et moteur sous-jacent de NestJS",
  definition:
    "Pour moi, **Express.js** est le framework web fondamental de l'écosystème Node.js. C'est l'outil avec lequel j'ai appris les concepts clés de l'architecture serveur : le modèle client-serveur, la gestion du routage HTTP et la chaîne de traitements des requêtes.\n\nIl sert également de moteur HTTP par défaut sous le capot du framework **NestJS**, faisant d'Express un standard incontournable de la plateforme Node.js.",
  proofs:
    "J'ai découvert et pratiqué Express.js lors de ma formation **DWWM chez O'clock** pour appréhender la création d'architectures Back-End :\n\n- **Apprentissage de l'architecture Client-Serveur** : C'est avec Express.js que j'ai structuré mes premières APIs serveur, en organisant le code selon le modèle contrôleurs (réception des requêtes `req` et renvoi des réponses `res`), services (logique métier) et répertoires/repositories (accès aux données).\n\n- **Utilisation de l'ORM Sequelize** : Lors de mes projets sous Express.js, j'ai manipulé l'ORM **Sequelize** pour gérer la modélisation des entités, l'exécution des requêtes SQL et la persistance des données en base de données relationnelle.\n\n- **Moteur sous-jacent de NestJS** : En entreprise chez Orange Business, ma maîtrise d'Express.js me permet de mieux comprendre le fonctionnement bas niveau des contrôleurs et des filtres du framework NestJS, qui s'appuie nativement sur Express pour traiter les flux HTTP.",
  selfCritique:
    "L'utilisation d'Express.js m'a appris à ne pas me reposer uniquement sur la magie des frameworks haut niveau, en comprenant précisément comment une requête HTTP est capturée, transformée et renvoyée par le serveur Node.js.",
  hindsight:
    "Express.js a été ma porte d'entrée dans l'ingénierie Back-End. La compréhension de son fonctionnement est essentielle pour appréhender les frameworks d'entreprise modernes comme NestJS.",
  evolution:
    "Je conserve une veille constante sur l'écosystème Express.js et les middlewares Node.js pour pouvoir intervenir rapidement sur des architectures existantes ou des prototypes légers.",
};

export const expressEn = {
  title: "Express.js",
  shortDesc: "Minimalist web framework for Node.js and underlying engine for NestJS",
  definition:
    "For me, **Express.js** is the foundational web framework of the Node.js ecosystem. It is the tool with which I learned core server architecture concepts: client-server models, HTTP route handling, and request pipelines.\n\nIt also serves as the default underlying HTTP engine beneath **NestJS**, making Express a staple standard across Node.js platforms.",
  proofs:
    "I discovered and practiced Express.js during my **DWWM bootcamp at O'clock** to learn Back-End architecture fundamentals:\n\n- **Learning Client-Server Architecture**: With Express.js, I built my first server APIs, structuring code around controllers (intercepting `req` requests and returning `res` responses), services (business logic), and repositories (database access).\n\n- **Using Sequelize ORM**: On Express.js projects, I utilized the **Sequelize** ORM to handle entity modeling, execute SQL queries, and persist data to relational databases.\n\n- **Underlying NestJS Engine**: At Orange Business, mastering Express.js helps me understand low-level request handling within NestJS controllers, which natively rely on Express for HTTP processing.",
  selfCritique:
    "Using Express.js taught me not to rely blindly on high-level framework abstractions, providing a clear understanding of how HTTP requests are intercepted, processed, and returned by Node.js servers.",
  hindsight:
    "Express.js was my gateway into Back-End engineering. Understanding its core mechanics is essential for mastering modern enterprise frameworks like NestJS.",
  evolution:
    "I keep updated on Express.js and Node.js middlewares to work effectively on legacy architectures or lightweight server prototypes.",
};
