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
  { id: "stack", label: "Stack" },
  { id: "projects", label: "Réalisations" },
  { id: "contact", label: "Contact" },
];

export const FORMATION_SKILLS = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Node.js",
  "SQL",
  "API REST",
  "Git",
  "TypeScript",
  "GraphQL",
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
