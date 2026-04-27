import { Clock, Heart, Shield, Users, type LucideIcon } from "lucide-react";

export interface HomeSection {
  readonly id: string;
  readonly label: string;
}

export const HOME_SECTIONS: readonly HomeSection[] = [
  { id: "hero", label: "Intro" },
  { id: "past", label: "Origines" },
  { id: "formation", label: "Transition" },
  { id: "experience", label: "Aujourd'hui" },
  { id: "projects", label: "Réalisations" },
];

// Sorted by descending mastery level
export const FORMATION_SKILLS = [
  "JavaScript",
  "HTML5",
  "CSS3",
  "Node.js",
  "React",
  "SQL",
  "API REST",
  "Git",
  "TypeScript",
  "Express",
] as const;

export const EXPERIENCE_STACK = [
  "Angular",
  "NestJS",
  "TypeScript",
  "MySQL",
  "Git",
  "Docker",
  "CloudFoundry",
  "Java",
  "Flutter",
] as const;

export const EXPERIENCE_STACK_BAC3 = [
  "Angular",
  "NestJS",
  "TypeScript",
  "MySQL",
  "Git",
  "CloudFoundry",
] as const;

export const EXPERIENCE_STACK_BAC5 = [
  "Angular",
  "Flutter",
  "Dart",
  "TypeScript",
  "Java",
  "Docker",
  "Git",
] as const;


export interface SoftSkill {
  readonly icon: LucideIcon;
  readonly labelKey: string;
  readonly descKey: string;
}

export const PAST_SOFT_SKILLS: readonly SoftSkill[] = [
  { icon: Heart, labelKey: "past.empathy", descKey: "past.empathyDesc" },
  { icon: Shield, labelKey: "past.resilience", descKey: "past.resilienceDesc" },
  { icon: Clock, labelKey: "past.priorities", descKey: "past.prioritiesDesc" },
  { icon: Users, labelKey: "past.teamwork", descKey: "past.teamworkDesc" },
];
