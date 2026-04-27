/**
 * Tech stacks displayed in the Hero section bento grid.
 * Names must match keys in constants/stack.ts (used by getTechItem).
 */

/** Primary technologies — shown in the highlighted bento tile. */
export const HERO_CORE_STACK = [
  "Angular",
  "NestJS",
  "TypeScript",
  "Node.js",
  "Java",
  "MySQL",
  "PostgreSQL",
  "Docker",
  "Git",
  "CloudFoundry",
] as const;

/** Secondary / transversal technologies — shown in the wide bottom tile. */
export const HERO_SECONDARY_STACK = [
  "React",
  "Vue.js",
  "Flutter",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Supabase",
  "Figma",
] as const;
