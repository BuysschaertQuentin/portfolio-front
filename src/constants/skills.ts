import type { LucideIcon } from "lucide-react";
import {
  Clock,
  Eye,
  Heart,
  Shield,
  UserRoundCheckIcon,
  Users
} from "lucide-react";
import type { ComponentPropsWithoutRef, ComponentType } from "react";
import { TECH_STACK } from "./stack";

export type SkillType = "human" | "technical";

export interface Skill {
  readonly slug: string;
  readonly type: SkillType;
  readonly icon?: LucideIcon;
  readonly logoUrl?: string;
  readonly customIcon?: ComponentType<ComponentPropsWithoutRef<"svg">>;
  readonly titleKey?: string;
  readonly shortDescKey?: string;
  readonly techName?: string;
  readonly techDescription?: {
    readonly fr: string;
    readonly en: string;
  };
  readonly category?: "front-end" | "back-end" | "devops" | "transversale" | "cloud";
  readonly specialty?: boolean;
  readonly wish?: boolean;
  readonly clickable?: boolean;
}

/**
 * All portfolio skills — human + technical (generated dynamically).
 * Order determines display order on the overview page.
 */
const HUMAN_SKILLS: readonly Skill[] = [
  {
    slug: "autonome",
    type: "human",
    icon: UserRoundCheckIcon,
    titleKey: "competences.skills.autonome.title",
    shortDescKey: "competences.skills.autonome.shortDesc",
  },
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
];

const TECHNICAL_SKILLS: readonly Skill[] = TECH_STACK
  .filter((tech) => tech.showInMain || tech.showInTransversal || tech.wish)
  .map((tech) => ({
    slug: tech.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    type: "technical",
    logoUrl: tech.logo,
    customIcon: tech.iconComponent,
    techName: tech.name,
    techDescription: tech.description,
    category: tech.category,
    specialty: tech.specialty,
    wish: tech.wish,
    clickable: tech.clickable,
  }));

export const SKILLS: readonly Skill[] = [...HUMAN_SKILLS, ...TECHNICAL_SKILLS];

/** Helper to find a skill by slug */
export const findSkillBySlug = (slug: string): Skill | undefined =>
  SKILLS.find((s) => s.slug === slug);
