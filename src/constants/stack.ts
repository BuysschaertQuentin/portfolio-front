// constants/stack.ts

import { CloudFoundryIcon } from "@/components/ui/icons";
import { type ComponentPropsWithoutRef, type ComponentType } from "react";

export interface TechItem {
  readonly name: string;
  readonly logo?: string;
  readonly iconComponent?: ComponentType<ComponentPropsWithoutRef<"svg">>;
  /** Short description of the technology */
  readonly description?: string;
  /** Year since you've been using this tech */
  readonly since?: number;
}

export const coreStack: readonly TechItem[] = [
  {
    name: "Angular",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    description: "Framework front-end TypeScript-first développé par Google.",
    since: 2022,
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    description: "Superset typé de JavaScript pour un code plus robuste.",
    since: 2022,
  },
  {
    name: "NestJS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
    description: "Framework Node.js progressif pour des APIs scalables.",
    since: 2023,
  },
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    description: "Plateforme de conteneurisation d'applications.",
    since: 2023,
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    description: "Système de gestion de base de données relationnelle.",
    since: 2022,
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    description: "Base de données relationnelle open-source avancée.",
    since: 2023,
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    description: "Runtime JavaScript côté serveur basé sur V8.",
    since: 2022,
  },
  {
    name: "Java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    description: "Langage orienté objet robuste et portable.",
    since: 2021,
  },
  {
    name: "CloudFoundry",
    iconComponent: CloudFoundryIcon,
    description: "Plateforme PaaS open-source pour le déploiement cloud.",
    since: 2023,
  },
  {
    name: "SQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    description: "Langage de requête pour bases de données relationnelles.",
    since: 2021,
  },
  {
    name: "Express",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    description: "Framework web minimaliste pour Node.js.",
    since: 2022,
  },
];

export const transversalStack: readonly TechItem[] = [
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    description: "Système de contrôle de version distribué.",
    since: 2021,
  },
  {
    name: "HTML5",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    description: "Langage de balisage standard du web.",
    since: 2020,
  },
  {
    name: "CSS3",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    description: "Langage de style pour la mise en forme des pages web.",
    since: 2020,
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    description: "Framework CSS utility-first pour un styling rapide.",
    since: 2023,
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    description: "Langage de programmation du web côté client et serveur.",
    since: 2020,
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description: "Bibliothèque UI déclarative basée sur les composants.",
    since: 2023,
  },
  {
    name: "Vue.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    description: "Framework JavaScript progressif pour les interfaces.",
    since: 2022,
  },
  {
    name: "Flutter",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    description: "SDK Google pour apps cross-platform depuis un seul code.",
    since: 2023,
  },
  {
    name: "Supabase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
    description: "Alternative open-source à Firebase avec PostgreSQL.",
    since: 2024,
  },
  {
    name: "VS Code",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    description: "Éditeur de code léger et extensible de Microsoft.",
    since: 2020,
  },
  {
    name: "Figma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    description: "Outil de design UI/UX collaboratif en ligne.",
    since: 2022,
  },
  {
    name: "Dart",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
    description: "Langage optimisé pour les apps multi-plateformes.",
    since: 2023,
  },
  {
    name: "API REST",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    description: "Architecture standard pour la communication entre services.",
    since: 2022,
  },
];

export const getTechItem = (name: string): TechItem | undefined => {
  return [...coreStack, ...transversalStack].find(
    (tech) => tech.name.toLowerCase() === name.toLowerCase(),
  );
};
