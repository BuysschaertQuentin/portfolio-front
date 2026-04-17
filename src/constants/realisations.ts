import type { LucideIcon } from "lucide-react";
import { Code2, Globe, GraduationCap, Layers, Smartphone } from "lucide-react";

export type RealisationContext = "pro" | "perso" | "formation";

export interface Realisation {
  readonly slug: string;
  readonly context: RealisationContext;
  readonly icon: LucideIcon;
  readonly titleKey: string;
  readonly shortDescKey: string;
  /** Slugs of linked skills */
  readonly linkedSkills: readonly string[];
}

/**
 * All 5 portfolio achievements — real projects only.
 */
export const REALISATIONS: readonly Realisation[] = [
  {
    slug: "portail-rh",
    context: "pro",
    icon: Layers,
    titleKey: "realisations.items.portailRh.title",
    shortDescKey: "realisations.items.portailRh.shortDesc",
    linkedSkills: [
      "angular-typescript",
      "nestjs-nodejs",
      "bases-de-donnees",
      "cicd-devops",
      "travail-equipe",
    ],
  },
  {
    slug: "repos-compensateurs",
    context: "pro",
    icon: Code2,
    titleKey: "realisations.items.reposComp.title",
    shortDescKey: "realisations.items.reposComp.shortDesc",
    linkedSkills: ["angular-typescript", "bases-de-donnees", "travail-equipe", "gestion-priorites"],
  },
  {
    slug: "app-mobile-competences",
    context: "pro",
    icon: Smartphone,
    titleKey: "realisations.items.mobileComp.title",
    shortDescKey: "realisations.items.mobileComp.shortDesc",
    linkedSkills: ["cicd-devops", "travail-equipe", "pedagogie"],
  },
  {
    slug: "o-voyage",
    context: "formation",
    icon: GraduationCap,
    titleKey: "realisations.items.ovoyage.title",
    shortDescKey: "realisations.items.ovoyage.shortDesc",
    linkedSkills: ["nestjs-nodejs", "travail-equipe", "gestion-priorites"],
  },
  {
    slug: "portfolio",
    context: "perso",
    icon: Globe,
    titleKey: "realisations.items.portfolio.title",
    shortDescKey: "realisations.items.portfolio.shortDesc",
    linkedSkills: ["react", "cicd-devops"],
  },
] as const;

/**
 * Tech tags for each realization (used in home section).
 */
export const REALISATION_TAGS: Record<string, string[]> = {
  "portail-rh": ["Angular", "NestJS", "MySQL", "CloudFoundry"],
  "repos-compensateurs": ["Angular", "Java", "Spring Boot", "Microservices"],
  "app-mobile-competences": ["Flutter", "Dart", "Supabase"],
  "o-voyage": ["Vue.js", "NestJS", "SQL", "Teamwork"],
  portfolio: ["React", "TypeScript", "Tailwind CSS"],
};

/** Helper to find a realisation by slug */
export const findRealisationBySlug = (slug: string): Realisation | undefined =>
  REALISATIONS.find((r) => r.slug === slug);

/** Context display colors */
export const CONTEXT_COLORS: Record<RealisationContext, string> = {
  pro: "orange",
  perso: "primary",
  formation: "violet-foreground",
};
