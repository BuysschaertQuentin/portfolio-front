import { memo } from "react";

interface SkillBadgeProps {
  /** Displayed label */
  readonly label: string;
  /** Tailwind classes for background, text and border colors */
  readonly colorClass: string;
}

/**
 * Pill-shaped badge for displaying a skill or technology label.
 * Used in FormationSection and ExperienceSection.
 *
 * @example
 * <SkillBadge label="TypeScript" colorClass="bg-violet-muted text-violet-foreground border-violet/30" />
 */
export const SkillBadge = memo(({ label, colorClass }: SkillBadgeProps) => (
  <span
    className={`${colorClass} rounded-full border px-3 py-1 font-mono text-[10px]`}
  >
    {label}
  </span>
));

SkillBadge.displayName = "SkillBadge";
