/**
 * Type of skill: hard or soft.
 */
export type SkillType = "hard_skill" | "soft_skill";

/**
 * SkillCategory entity matching the backend API response.
 * @see Bruno: Skills/Create Category.bru
 */
export interface SkillCategory {
  readonly id: string;
  readonly name: string;
  readonly iconUrl: string | null;
  readonly displayOrder: number;
  readonly createdAt: string;
  readonly updatedAt: string;
}

/**
 * Skill entity matching the backend API response.
 * @see Bruno: Skills/Create Skill.bru
 */
export interface Skill {
  readonly id: string;
  readonly categoryId: string;
  readonly name: string;
  readonly type: SkillType;
  readonly iconUrl: string | null;
  readonly proficiencyLevel: number;
  readonly definition: string;
  readonly professionalContext: string;
  readonly selfCriticism: string;
  readonly isHighlighted: boolean;
  readonly displayOrder: number;
  readonly createdAt: string;
  readonly updatedAt: string;
}
