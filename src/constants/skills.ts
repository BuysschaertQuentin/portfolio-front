import type { LucideIcon } from "lucide-react";
import {
    Brain,
    Clock,
    Code2,
    Container,
    Database,
    Eye,
    Heart,
    Layers,
    Shield,
    Users,
} from "lucide-react";

export type SkillType = "human" | "technical";

export interface Skill {
  readonly slug: string;
  readonly type: SkillType;
  readonly icon: LucideIcon;
  readonly titleKey: string;
  readonly shortDescKey: string;
}

/**
 * All 10 portfolio skills — 5 human + 5 technical.
 * Order determines display order on the overview page.
 */
export const SKILLS: readonly Skill[] = [
  // Human skills
  {
    slug: "empathie",
    type: "human",
    icon: Heart,
    titleKey: "competences.skills.empathy.title",
    shortDescKey: "competences.skills.empathy.shortDesc",
  },
  {
    slug: "resilience",
    type: "human",
    icon: Shield,
    titleKey: "competences.skills.resilience.title",
    shortDescKey: "competences.skills.resilience.shortDesc",
  },
  {
    slug: "gestion-priorites",
    type: "human",
    icon: Clock,
    titleKey: "competences.skills.priorities.title",
    shortDescKey: "competences.skills.priorities.shortDesc",
  },
  {
    slug: "travail-equipe",
    type: "human",
    icon: Users,
    titleKey: "competences.skills.teamwork.title",
    shortDescKey: "competences.skills.teamwork.shortDesc",
  },
  {
    slug: "pedagogie",
    type: "human",
    icon: Eye,
    titleKey: "competences.skills.pedagogy.title",
    shortDescKey: "competences.skills.pedagogy.shortDesc",
  },

  // Technical skills
  {
    slug: "angular-typescript",
    type: "technical",
    icon: Code2,
    titleKey: "competences.skills.angular.title",
    shortDescKey: "competences.skills.angular.shortDesc",
  },
  {
    slug: "nestjs-nodejs",
    type: "technical",
    icon: Layers,
    titleKey: "competences.skills.nestjs.title",
    shortDescKey: "competences.skills.nestjs.shortDesc",
  },
  {
    slug: "bases-de-donnees",
    type: "technical",
    icon: Database,
    titleKey: "competences.skills.database.title",
    shortDescKey: "competences.skills.database.shortDesc",
  },
  {
    slug: "cicd-devops",
    type: "technical",
    icon: Container,
    titleKey: "competences.skills.devops.title",
    shortDescKey: "competences.skills.devops.shortDesc",
  },
  {
    slug: "react",
    type: "technical",
    icon: Brain,
    titleKey: "competences.skills.react.title",
    shortDescKey: "competences.skills.react.shortDesc",
  },
] as const;

/** Helper to find a skill by slug */
export const findSkillBySlug = (slug: string): Skill | undefined =>
  SKILLS.find((s) => s.slug === slug);
