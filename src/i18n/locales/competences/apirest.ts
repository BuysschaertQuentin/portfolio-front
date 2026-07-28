export const apirestFr = {
  title: "API REST & BFF",
  shortDesc: "Architectures d'interconnexion de services et Backend-For-Frontend",
  definition:
    "Pour moi, une **API REST** (Representational State Transfer) est l'architecture standard qui permet de faire communiquer des applications clientes (Web, Mobile) avec des services serveur via le protocole HTTP (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`) et des formats de données structurés en JSON.\n\nIl est important de distinguer une **API REST classique** (qui expose des ressources génériques réutilisables par plusieurs clients) d'un **BFF (Backend-For-Frontend)**, un microservice serveur spécialement conçu et dédié aux besoins d'agrégation de données et d'expérience utilisateur d'une interface Front-End spécifique.",
  proofs:
    "J'applique et différencie ces deux modèles d'architecture sur mes projets chez Orange Business et en projet personnel :\n\n- **API REST classique (Portail RH chez Orange Business)** : Sur le portail RH (Back-End NestJS), j'utilise une architecture d'API REST classique. L'API expose des endpoints génériques et normalisés pour manipuler les ressources d'administration RH, consommés directement par le Front-End Angular.\n\n- **Architecture BFF (Backend-For-Frontend sur les Repos Compensateurs)** : Sur l'application des Repos Compensateurs, l'architecture Back-End repose sur le pattern **BFF** (développé en Java / Spring Boot 3). Ce microservice dédié fait l'intermédiaire entre l'application Front-End et l'écosystème de microservices de l'entreprise : il agrège les données de plusieurs services internes, adapte les réponses exactement au besoin de l'écran et simplifie l'expérience utilisateur.\n\n- **Consommation multi-plateforme (Angular & Flutter)** : Côté client, je consomme ces endpoints via les services HTTP d'Angular et le SDK Flutter, en gérant le traitement des jetons JWT dans les intercepteurs et la gestion propre des codes de statut HTTP (`200`, `201`, `400`, `401`, `403`, `404`, `500`).",
  selfCritique:
    "Savoir choisir entre une API REST générique et un BFF est une compétence clé d'architecture. Un BFF évite de multiplier les allers-retours réseau côté Front-End, mais exige de maintenir un service dédié pour chaque interface utilisateur.",
  hindsight:
    "Comprendre la nuance entre une API REST standard et un BFF permet de concevoir des architectures adaptées à l'échelle de l'entreprise, en optimisant à la fois la réutilisabilité des données et la performance d'affichage des applications.",
  evolution:
    "Je souhaite continuer à me tenir au courant des dernières architectures alternatives à REST afin de toujours faire évoluer mes choix d'ingénierie et répondre au mieux aux besoins métiers de mes clients.",
};

export const apirestEn = {
  title: "REST API & BFF",
  shortDesc: "Service interconnection architectures and Backend-For-Frontend",
  definition:
    "For me, a **REST API** (Representational State Transfer) is the standard architecture for communicating between client applications (Web, Mobile) and server services using HTTP methods (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`) and structured JSON data payloads.\n\nIt is essential to differentiate a **classic REST API** (which exposes generic resources reusable across multiple client apps) from a **BFF (Backend-For-Frontend)**, a server microservice specifically designed to serve the exact data aggregation and UX needs of one dedicated Front-End client.",
  proofs:
    "I apply and differentiate these two architecture models across enterprise projects at Orange Business:\n\n- **Classic REST API (HR Portal at Orange Business)**: On the HR portal (NestJS Back-End), I utilize a traditional REST API architecture. The API exposes generic, standardized endpoints to manipulate HR administration resources, consumed by the Angular Front-End.\n\n- **BFF Architecture (Backend-For-Frontend on Compensatory Leave)**: On the Compensatory Leave application, the backend relies on the **BFF** pattern (built in Java / Spring Boot 3). This dedicated microservice acts as an intermediary between the Front-End app and the enterprise microservice ecosystem: it aggregates data across multiple internal services, tailors responses directly to screen requirements, and simplifies the user experience.\n\n- **Multi-Platform Consumption (Angular & Flutter)**: On the client side, I consume these endpoints via Angular HTTP services and the Flutter SDK, handling JWT authentication tokens in interceptors and managing HTTP status codes (`200`, `201`, `400`, `401`, `403`, `404`, `500`).",
  selfCritique:
    "Knowing when to choose a generic REST API versus a BFF is a key architectural skill. A BFF prevents excessive network roundtrips on the client side, but requires maintaining a dedicated service layer per user interface.",
  hindsight:
    "Understanding the distinction between a standard REST API and a BFF enables designing scalable enterprise architectures, optimizing both data reusability and application rendering performance.",
  evolution:
    "I plan to keep informed on emerging architectures alternative to REST in order to continuously refine my engineering choices and best match client business requirements.",
};
