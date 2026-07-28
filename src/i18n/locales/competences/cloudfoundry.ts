export const cloudfoundryFr = {
  title: "CloudFoundry",
  shortDesc: "Plateforme PaaS d'entreprise (Platform-as-a-Service) pour le déploiement applicatif",
  definition:
    "Pour moi, **CloudFoundry** est une plateforme PaaS (*Platform-as-a-Service*) open-source d'entreprise conçue pour simplifier et automatiser le déploiement, la gestion et le passage à l'échelle d'applications. Elle masque la complexité des infrastructures sous-jacentes pour permettre aux développeurs de se concentrer exclusivement sur la livraison du code applicatif.\n\nEn s'appuyant sur des **Buildpacks** dédiés qui détectent et compilent automatiquement les environnements d'exécution (Node.js, Java, etc.), CloudFoundry permet de déployer des conteneurs isolés et hautement disponibles.",
  proofs:
    "J'utilise au quotidien une solution PaaS d'entreprise basée sur **CloudFoundry** pour gérer le cycle de vie et l'hébergement de nos applications d'entreprise :\n\n- **Administration et gestion des Buildpacks via la CLI** : J'utilise régulièrement l'interface en ligne de commande (CLI `cf`) pour administrer nos déploiements applicatifs. Cela comprend la configuration et la gestion des **Buildpacks** spécifiques requis pour compiler nos applications web et back-end, la gestion des variables d'environnement et la configuration des ressources allouées.\n\n- **Intégration CI/CD avec GitLab CI** : Dans le cadre de nos pipelines de livraison continue, **GitLab CI** pousse directement les images et artéfacts compilés vers la plateforme basée sur CloudFoundry. Cette automatisation garantit un déploiement continu fluide et sécurisé dès qu'un commit est validé sur les branches cibles.\n\n- **Supervision quotidienne et gestion du statut applicatif** : Au quotidien, j'utilise la plateforme pour surveiller l'état de santé des applications déployées (vérification du statut des instances, analyse des logs d'exécution via la CLI ou la console, gestion des redémarrages et suivi des métriques de performance).",
  selfCritique:
    "L'abstraction apportée par une plateforme PaaS comme CloudFoundry simplifie grandement les déploiements, mais elle peut masquer le fonctionnement de l'infrastructure sous-jacente. J'accorde une attention particulière au paramétrage des contraintes mémoire et des bilans de santé (*health checks*) pour m'assurer que les conteneurs restent stables.",
  hindsight:
    "L'utilisation d'une plateforme PaaS basée sur CloudFoundry au sein d'un grand groupe démontre l'intérêt majeur de l'automatisation du déploiement. L'intégration transparente avec la CI/CD réduit drastiquement les risques d'erreur humaine lors des mises en production.",
  evolution:
    "Je souhaite continuer à consolider mes compétences sur les environnements PaaS d'entreprise et les outils de conteneurisation (Docker, Kubernetes) pour maîtriser l'ensemble des architectures de déploiement cloud modernes.",
};

export const cloudfoundryEn = {
  title: "CloudFoundry",
  shortDesc: "Enterprise Platform-as-a-Service (PaaS) for application deployment",
  definition:
    "For me, **CloudFoundry** is an enterprise open-source PaaS (*Platform-as-a-Service*) designed to simplify and automate the deployment, management, and scaling of applications. It abstracts low-level infrastructure complexity, enabling developers to focus exclusively on delivering application code.\n\nLeveraging dedicated **Buildpacks** that automatically detect and compile runtime environments (Node.js, Java, etc.), CloudFoundry deploys isolated, highly available containers.",
  proofs:
    "I daily utilize an enterprise PaaS solution built on **CloudFoundry** to manage the lifecycle and hosting of corporate applications:\n\n- **Administration and Buildpack Management via CLI**: I regularly use the command-line interface (`cf` CLI) to manage application deployments. This includes configuring specific **Buildpacks** required to compile our web and backend applications, managing environment variables, and configuring container resource allocations.\n\n- **CI/CD Integration with GitLab CI**: As part of our continuous delivery pipelines, **GitLab CI** directly pushes compiled artifacts and images to our CloudFoundry-based platform. This automation guarantees smooth, secure continuous deployments upon validating commits on target branches.\n\n- **Daily Monitoring & Application Status Management**: On a daily basis, I use the platform to monitor deployed application health (checking instance statuses, analyzing execution logs via CLI or web console, handling restarts, and tracking performance metrics).",
  selfCritique:
    "The abstraction provided by a PaaS platform like CloudFoundry greatly simplifies deployment workflows, but can conceal underlying infrastructure mechanisms. I pay careful attention to memory limits and health check configurations to ensure container stability.",
  hindsight:
    "Utilizing a CloudFoundry-based PaaS platform in an enterprise setting demonstrates the immense value of deployment automation. Seamless integration with CI/CD pipelines drastically reduces human error during production releases.",
  evolution:
    "I aim to continue consolidating my expertise across enterprise PaaS environments and containerization tools (Docker, Kubernetes) to master modern cloud deployment architectures.",
};
