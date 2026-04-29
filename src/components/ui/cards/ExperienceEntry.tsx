import { memo } from "react";
import { Card } from "./Card";
import { SkillBadge } from "../badges/SkillBadge";

export interface ExperienceEntryProps {
  readonly period: string;
  readonly title: string;
  readonly status: string;
  readonly description: string;
  readonly stack: readonly string[];
  /** Tailwind classes for background, text and border applied to each SkillBadge */
  readonly stackColorClass: string;
  /** Logo image to display for the company */
  readonly logo: string;
  /** Alt text for the company logo (leave empty string "" for decorative) */
  readonly logoAlt?: string;
}

/**
 * Single experience card — displays a period, role, description and tech stack badges.
 * Extracted from ExperienceSection for reuse and clarity.
 */
export const ExperienceEntry = memo(
  ({
    period,
    title,
    status,
    description,
    stack,
    stackColorClass,
    logo,
    logoAlt = "",
  }: ExperienceEntryProps) => (
    <Card className="border-orange/20 space-y-3 rounded-lg p-5">
      <div className="flex items-center gap-4">
        <div className="bg-orange/5 border-orange/10 rounded-lg border p-2">
          <img
            src={logo}
            alt={logoAlt}
            className="h-8 w-8 object-contain"
            width={32}
            height={32}
            loading="lazy"
          />
        </div>
        <div>
          <p className="text-foreground font-semibold">{title}</p>
          <p className="text-muted-foreground font-mono text-xs">{status}</p>
          <p className="text-orange font-mono text-[10px] opacity-70">{period}</p>
        </div>
      </div>
      <p className="text-secondary-foreground text-sm leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {stack.map((tech) => (
          <SkillBadge key={tech} label={tech} colorClass={stackColorClass} />
        ))}
      </div>
    </Card>
  ),
);

ExperienceEntry.displayName = "ExperienceEntry";
