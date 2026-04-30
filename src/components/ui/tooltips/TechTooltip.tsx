// components/ui/tech-tooltip.tsx

import { type TechItem } from "@/constants/stack";
import { memo } from "react";

interface TechTooltipProps {
  readonly tech: TechItem;
}

function formatExperience(since: number): string {
  const now = new Date();
  const years = now.getFullYear() - since;
  if (years === 0) return "Moins d'un an";
  if (years === 1) return "1 an";
  return `${years} ans`;
}

export const TechTooltip = memo(({ tech }: TechTooltipProps) => {
  const hasInfo = tech.description || tech.since;
  if (!hasInfo) return null;

  return (
    <div
      className={[
        "absolute bottom-full left-1/2 mb-3 -translate-x-1/2",
        "w-55",
        "glass-card rounded-xl px-3.5 py-3",
        "pointer-events-none z-50",
        "translate-y-1 opacity-0",
        "group-hover:translate-y-0 group-hover:opacity-100",
        "transition-all duration-200 ease-out",
      ].join(" ")}
      role="tooltip"
    >
      {tech.description && (
        <p className="text-muted-foreground mb-2 text-[11px] leading-relaxed">{tech.description}</p>
      )}

      {tech.since && (
        <div className="flex items-center gap-1.5">
          <span className="bg-primary h-1.5 w-1.5 shrink-0 rounded-full" aria-hidden="true" />
          <span className="text-primary font-mono text-[10px] tracking-wide">
            {formatExperience(tech.since)} d'expérience
          </span>
        </div>
      )}
    </div>
  );
});

TechTooltip.displayName = "TechTooltip";
