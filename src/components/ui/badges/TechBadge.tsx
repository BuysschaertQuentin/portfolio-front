import { getTechItem } from "@/constants/stack";
import { memo } from "react";

interface TechBadgeProps {
  /** Tech name — must match a key in constants/stack.ts */
  readonly name: string;
  /**
   * Visual size variant.
   * - "md" (default): used in Hero bento tiles
   * - "sm": compact variant used in ProjectCard tags
   */
  readonly size?: "md" | "sm";
}

/**
 * Displays a technology badge with its icon and name.
 * Resolves the icon/logo automatically from the global stack registry.
 */
export const TechBadge = memo(({ name, size = "md" }: TechBadgeProps) => {
  const tech = getTechItem(name);
  if (!tech) return null;

  const Icon = tech.iconComponent;

  if (size === "sm") {
    return (
      <div
        className="bg-secondary/50 border-border/50 flex items-center gap-1 rounded border py-0.5 pr-1.5 pl-1"
        title={name}
      >
        {Icon ? (
          <Icon className="text-foreground h-2.5 w-2.5" aria-hidden="true" />
        ) : tech.logo ? (
          <img src={tech.logo} alt="" className="h-2.5 w-2.5" loading="lazy" />
        ) : null}
        <span className="text-secondary-foreground font-mono text-[8px] tracking-wider uppercase">
          {name}
        </span>
      </div>
    );
  }

  return (
    <div className="bg-secondary/30 border-border/50 hover:border-primary/40 hover:bg-primary/5 flex cursor-default items-center gap-2 rounded-xl border px-3 py-2 transition-all duration-200 hover:scale-105">
      {Icon ? (
        <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
      ) : tech.logo ? (
        <img src={tech.logo} alt="" className="h-5 w-5 shrink-0" loading="lazy" />
      ) : null}
      <span className="text-foreground font-mono text-sm whitespace-nowrap">{name}</span>
    </div>
  );
});

TechBadge.displayName = "TechBadge";
