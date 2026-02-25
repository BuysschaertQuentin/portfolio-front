import type { LucideIcon } from "lucide-react";
import { Bot, Code2, Globe, GraduationCap, Layers } from "lucide-react";

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
 * All 5 portfolio achievements.
 * Titles and descriptions are placeholders — user will provide real content.
 */
export const REALISATIONS: readonly Realisation[] = [
  {
    slug: "application-orange",
    context: "pro",
    icon: Layers,
    titleKey: "realisations.items.orange.title",
    shortDescKey: "realisations.items.orange.shortDesc",
    linkedSkills: [
      "angular-typescript",
      "nestjs-nodejs",
      "bases-de-donnees",
      "cicd-devops",
      "travail-equipe",
    ],
  },
  {
    slug: "portfolio",
    context: "perso",
    icon: Globe,
    titleKey: "realisations.items.portfolio.title",
    shortDescKey: "realisations.items.portfolio.shortDesc",
    linkedSkills: ["react", "cicd-devops"],
  },
  {
    slug: "bot-discord",
    context: "perso",
    icon: Bot,
    titleKey: "realisations.items.bot.title",
    shortDescKey: "realisations.items.bot.shortDesc",
    linkedSkills: ["nestjs-nodejs", "bases-de-donnees"],
  },
  {
    slug: "projet-formation-1",
    context: "formation",
    icon: GraduationCap,
    titleKey: "realisations.items.formation1.title",
    shortDescKey: "realisations.items.formation1.shortDesc",
    linkedSkills: ["react", "gestion-priorites"],
  },
  {
    slug: "projet-formation-2",
    context: "formation",
    icon: Code2,
    titleKey: "realisations.items.formation2.title",
    shortDescKey: "realisations.items.formation2.shortDesc",
    linkedSkills: ["nestjs-nodejs", "travail-equipe", "pedagogie"],
  },
] as const;

/** Helper to find a realisation by slug */
export const findRealisationBySlug = (slug: string): Realisation | undefined =>
  REALISATIONS.find((r) => r.slug === slug);

/** Context display colors */
export const CONTEXT_COLORS: Record<RealisationContext, string> = {
  pro: "orange",
  perso: "primary",
  formation: "violet-foreground",
};
