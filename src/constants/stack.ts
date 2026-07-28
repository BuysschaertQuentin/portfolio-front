// constants/stack.ts

import { CloudFoundryIcon, ExpressIcon } from "@/components/ui/icons";
import { Database } from "lucide-react";
import { type ComponentPropsWithoutRef, type ComponentType } from "react";

export interface TechItem {
  readonly name: string;
  readonly logo?: string;
  readonly iconComponent?: ComponentType<ComponentPropsWithoutRef<"svg">>;
  /** Short description of the technology in multiple languages */
  readonly description?: {
    readonly fr: string;
    readonly en: string;
  };
  /** Month since you've been using this tech, format "YYYY-MM" */
  readonly since?: string;
  /** Display in the main stack? */
  readonly showInMain?: boolean;
  /** Display in the transversal stack? */
  readonly showInTransversal?: boolean;
  /** Category of the technology */
  readonly category: "front-end" | "back-end" | "devops" | "transversale" | "cloud" | "ia";
  /** Is this technology a specialty? */
  readonly specialty?: boolean;
  /** Is this technology something I would like to do? */
  readonly wish?: boolean;
  /** Is this technology clickable? */
  readonly clickable?: boolean;
}

export const TECH_STACK: readonly TechItem[] = [
  {
    name: "Angular",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    description: {
      fr: "Framework front-end robuste développé par Google, basé sur TypeScript pour des applications structurées.",
      en: "Robust front-end framework developed by Google, based on TypeScript for structured applications.",
    },
    since: "2023-04",
    showInMain: true,
    category: "front-end",
    specialty: true,
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    description: {
      fr: "Superset de JavaScript ajoutant un typage statique fort pour un code plus robuste et maintenable.",
      en: "JavaScript superset adding strong static typing for more robust and maintainable code.",
    },
    since: "2023-04",
    showInMain: true,
    category: "transversale",
  },
  {
    name: "NestJS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
    description: {
      fr: "Framework Node.js progressif basé sur l'architecture Angular, idéal pour créer des APIs backend scalables.",
      en: "Progressive Node.js framework based on Angular architecture, ideal for building scalable backend APIs.",
    },
    since: "2023-04",
    showInMain: true,
    category: "back-end",
    specialty: true,
  },
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    description: {
      fr: "Outil de conteneurisation permettant de packager et déployer facilement des applications avec leurs dépendances.",
      en: "Containerization tool for easily packaging and deploying applications along with their dependencies.",
    },
    since: "2024-01",
    showInMain: true,
    category: "devops",
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    description: {
      fr: "Système de gestion de base de données relationnelle très populaire et performant.",
      en: "Highly popular and high-performance relational database management system.",
    },
    since: "2024-01",
    showInMain: true,
    category: "back-end",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    description: {
      fr: "Système de base de données relationnelle open-source avancé, robuste et hautement extensible.",
      en: "Advanced, robust, and highly extensible open-source relational database system.",
    },
    since: "2023-04",
    showInMain: true,
    category: "back-end",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    description: {
      fr: "Environnement d'exécution JavaScript côté serveur rapide et performant, basé sur le moteur V8.",
      en: "Fast and efficient server-side JavaScript runtime environment, based on the V8 engine.",
    },
    since: "2023-03",
    showInMain: true,
    category: "back-end",
  },
  {
    name: "Java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    description: {
      fr: "Langage de programmation orienté objet robuste, multi-plateforme, largement utilisé en entreprise.",
      en: "Robust, cross-platform object-oriented programming language, widely used in enterprise environments.",
    },
    since: "2025-03",
    showInMain: true,
    category: "back-end",
    wish: true,
  },
  {
    name: "CloudFoundry",
    iconComponent: CloudFoundryIcon,
    description: {
      fr: "Plateforme cloud PaaS open-source facilitant le déploiement continu et la gestion d'applications.",
      en: "Open-source PaaS cloud platform facilitating continuous deployment and application management.",
    },
    since: "2024-06",
    showInMain: true,
    category: "cloud",
  },
  {
    name: "SQL",
    iconComponent: Database,
    description: {
      fr: "Langage standard pour interagir avec les bases de données relationnelles.",
      en: "Standard language for interacting with relational databases.",
    },
    since: "2023-04",
    showInMain: true,
    category: "back-end",
  },
  {
    name: "Express",
    iconComponent: ExpressIcon,
    description: {
      fr: "Framework web minimaliste et flexible pour Node.js, idéal pour des APIs rapides.",
      en: "Minimalist and flexible web framework for Node.js, ideal for fast APIs.",
    },
    since: "2023-02",
    showInTransversal: true,
    category: "transversale",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    description: {
      fr: "Système de contrôle de version incontournable pour le suivi des modifications et la collaboration.",
      en: "Essential version control system for tracking changes and facilitating collaboration.",
    },
    since: "2021-01",
    showInMain: true,
    category: "transversale",
  },
  {
    name: "HTML5",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    description: {
      fr: "Dernière version du langage de balisage standard pour structurer les pages web.",
      en: "Latest version of the standard markup language for structuring web pages.",
    },
    since: "2022-10",
    showInTransversal: true,
    category: "transversale",
  },
  {
    name: "CSS3",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    description: {
      fr: "Langage de feuilles de style pour concevoir des interfaces web modernes et responsives.",
      en: "Stylesheet language for designing modern and responsive web interfaces.",
    },
    since: "2022-10",
    showInTransversal: true,
    category: "transversale",
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    description: {
      fr: "Framework CSS utilitaire permettant de créer rapidement des designs sur mesure sans quitter le HTML.",
      en: "Utility-first CSS framework for rapidly building custom designs without leaving HTML.",
    },
    since: "2023-06",
    showInTransversal: true,
    category: "transversale",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    description: {
      fr: "Langage de programmation essentiel du web pour des interfaces interactives et dynamiques.",
      en: "Essential web programming language for interactive and dynamic interfaces.",
    },
    since: "2023-01",
    showInTransversal: true,
    category: "transversale",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description: {
      fr: "Bibliothèque UI performante développée par Meta pour créer des interfaces utilisateurs à base de composants.",
      en: "High-performance UI library developed by Meta for creating component-based user interfaces.",
    },
    since: "2023-01",
    showInTransversal: true,
    category: "front-end",
  },
  {
    name: "Vue.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    description: {
      fr: "Framework JavaScript progressif et intuitif pour développer rapidement des interfaces utilisateur réactives.",
      en: "Progressive and intuitive JavaScript framework for rapidly developing reactive user interfaces.",
    },
    since: "2025-06",
    showInTransversal: true,
    category: "front-end",
  },
  {
    name: "Flutter",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    description: {
      fr: "SDK UI de Google pour créer des applications multi-plateformes natives à partir d'un code unique.",
      en: "Google's UI SDK for creating native cross-platform applications from a single codebase.",
    },
    since: "2024-06",
    showInTransversal: true,
    category: "front-end",
  },
  {
    name: "Supabase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
    description: {
      fr: "Alternative open-source à Firebase, offrant une base de données PostgreSQL, de l'authentification et du stockage.",
      en: "Open-source Firebase alternative, providing a PostgreSQL database, authentication, and storage.",
    },
    since: "2025-04",
    showInTransversal: true,
    category: "cloud",
  },
  {
    name: "VS Code & IDEs",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    description: {
      fr: "Éditeur de code léger, performant et hautement extensible développé par Microsoft.",
      en: "Lightweight, high-performance, and highly extensible code editor developed by Microsoft.",
    },
    since: "2022-10",
    showInTransversal: true,
    category: "transversale",
  },
  {
    name: "Figma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    description: {
      fr: "Outil collaboratif en ligne pour concevoir des interfaces utilisateur et des prototypes interactifs.",
      en: "Online collaborative tool for designing user interfaces and interactive prototypes.",
    },
    since: "2024-01",
    showInTransversal: true,
    category: "transversale",
  },
  {
    name: "Dart",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
    description: {
      fr: "Langage de programmation optimisé pour la création d'applications rapides sur toutes les plateformes avec Flutter.",
      en: "Programming language optimized for building fast applications on any platform with Flutter.",
    },
    since: "2024-06",
    showInTransversal: true,
    category: "transversale",
  },
  {
    name: "API REST",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", // Fallback, wait in view it was nodejs icon, let's keep it as is
    description: {
      fr: "Style d'architecture standard pour concevoir des services web en réseau simples et scalables.",
      en: "Standard architectural style for designing simple and scalable networked web services.",
    },
    since: "2023-02",
    showInTransversal: true,
    category: "transversale",
  },
  {
    name: "Kubernetes",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg",
    description: {
      fr: "Orchestrateur de conteneurs pour automatiser le déploiement et la mise à l'échelle d'applications.",
      en: "Container orchestrator for automating deployment and scaling of applications.",
    },
    category: "devops",
    wish: true,
    clickable: false,
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    description: {
      fr: "Framework React pour la production avec rendu côté serveur et génération de sites statiques.",
      en: "React framework for production with server-side rendering and static site generation.",
    },
    category: "front-end",
    wish: true,
    clickable: false,
  },
  {
    name: "GCP",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    description: {
      fr: "Google Cloud Platform pour l'hébergement et les services cloud managés.",
      en: "Google Cloud Platform for hosting and managed cloud services.",
    },
    category: "cloud",
    wish: true,
    clickable: false,
  },
  {
    name: "AWS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    description: {
      fr: "Amazon Web Services, leader mondial des solutions cloud d'infrastructure.",
      en: "Amazon Web Services, global leader in cloud infrastructure solutions.",
    },
    category: "cloud",
    wish: true,
    clickable: false,
  },
  {
    name: "MCP Server",
    description: {
      fr: "Standard Model Context Protocol pour interconnecter les agents IA aux outils et données.",
      en: "Standard Model Context Protocol connecting AI agents to tools and data sources.",
    },
    since: "2025-01",
    showInMain: true,
    category: "ia",
    clickable: true,
  },
  {
    name: "Antigravity IDE",
    description: {
      fr: "Environnement de développement assisté par agents IA autonomes (Google DeepMind).",
      en: "Autonomous AI agent-assisted development environment (Google DeepMind).",
    },
    since: "2025-01",
    showInMain: true,
    category: "ia",
    clickable: true,
  },
];

export const allTech = TECH_STACK;

export const coreStack = TECH_STACK.filter((tech) => tech.showInMain);

export const transversalStack = TECH_STACK.filter((tech) => tech.showInTransversal);

export const MAIN_STACK = coreStack.map((tech) => tech.name);

export const TRANSVERSAL_STACK = transversalStack.map((tech) => tech.name);

export const getTechItem = (name: string): TechItem | undefined => {
  return TECH_STACK.find((tech) => tech.name.toLowerCase() === name.toLowerCase());
};
