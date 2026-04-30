// components/ui/tech-tooltip.tsx

import { type TechItem } from "@/constants/stack";
import { useI18n } from "@/hooks/use-i18n";
import { TechService } from "@/services/TechService";
import { memo } from "react";

interface TechTooltipProps {
  readonly tech: TechItem;
}

export const TechTooltip = memo(({ tech }: TechTooltipProps) => {
  const { t, locale } = useI18n();
  const hasInfo = tech.description || tech.since;
  if (!hasInfo) return null;

  const description = tech.description
    ? tech.description[locale as keyof typeof tech.description]
    : undefined;

  return (
    <div
      className={[
        "absolute bottom-full left-1/2 mb-3 -translate-x-1/2",
        "w-55",
        "bg-card border-border rounded-xl border px-3.5 py-3 shadow-xl",
        "pointer-events-none z-50",
        "translate-y-1 opacity-0",
        "group-hover:translate-y-0 group-hover:opacity-100",
        "transition-all duration-200 ease-out",
      ].join(" ")}
      role="tooltip"
    >
      {description && (
        <p className="text-muted-foreground mb-2 text-[11px] leading-relaxed">{description}</p>
      )}

      {tech.since && (
        <div className="flex items-center gap-1.5">
          <span className="text-primary font-mono text-xs tracking-wide">
            {TechService.getExperienceText(tech.since, t)}{" "}
            {t("techTooltip.experience.ofExperience")}
          </span>
        </div>
      )}
    </div>
  );
});

TechTooltip.displayName = "TechTooltip";
