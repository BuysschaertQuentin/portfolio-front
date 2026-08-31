// components/ui/tech-badge.tsx

import { getTechItem } from "@/constants/stack";
import { memo } from "react";
import { TechTooltip } from "../tooltips/TechTooltip";

interface TechBadgeProps {
  readonly name: string;
  readonly size?: "small" | "medium" | "large";
}

export const TechBadge = memo(({ name, size = "large" }: TechBadgeProps) => {
  const tech = getTechItem(name);
  if (!tech) return null;

  const Icon = tech.iconComponent;

  if (size === "small") {
    return (
      <div
        className="bg-secondary/40 border-border/50 flex items-center gap-1.5 rounded-md border px-2 py-1"
        title={name}
      >
        {Icon ? (
          <Icon className="text-foreground h-3 w-3" aria-hidden="true" />
        ) : tech.logo ? (
          <img src={tech.logo} alt="" className="h-3 w-3" loading="lazy" />
        ) : null}
        <span className="text-secondary-foreground font-mono text-[10px] tracking-wide uppercase">
          {name}
        </span>
      </div>
    );
  }

  if (size === "medium") {
    return (
      <div
        className="bg-secondary/35 border-border/50 flex items-center gap-2 rounded-lg border px-2.5 py-1.5"
        title={name}
      >
        {Icon ? (
          <Icon className="text-foreground h-4 w-4" aria-hidden="true" />
        ) : tech.logo ? (
          <img src={tech.logo} alt="" className="h-4 w-4" loading="lazy" />
        ) : null}
        <span className="text-secondary-foreground font-mono text-xs tracking-wide uppercase">
          {name}
        </span>
      </div>
    );
  }

  return (
    <div className="group relative">
      <div
        className="bg-secondary/30 border-border/50 hover:border-primary/40 hover:bg-primary/5 flex cursor-default items-center gap-2.5 rounded-xl border px-3 py-2 transition-all duration-200 hover:scale-105"
        aria-describedby={`tooltip-${name}`}
      >
        {Icon ? (
          <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
        ) : tech.logo ? (
          <img src={tech.logo} alt="" className="h-5 w-5 shrink-0" loading="lazy" />
        ) : null}
        <span className="text-foreground font-mono text-sm whitespace-nowrap">{name}</span>
      </div>

      <TechTooltip tech={tech} />
    </div>
  );
});

TechBadge.displayName = "TechBadge";
