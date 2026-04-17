import { type Skill } from "@/constants/skills";

export interface SkillCardProps {
  readonly skill: Skill;
  readonly t: (key: string) => string;
}

export interface SkillGroupProps {
  readonly title: string;
  readonly skills: readonly Skill[];
  readonly dotColor: string;
  readonly t: (key: string) => string;
}
