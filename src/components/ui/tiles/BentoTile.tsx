import { memo } from "react";
import { Card } from "../cards/Card";
import { TechBadge } from "../badges/TechBadge";

export interface BentoTileProps {
  readonly className?: string;
  /** Section title displayed above the badges */
  readonly title: string;
  /** Tailwind color class applied to the title (e.g. "text-primary") */
  readonly accentClass?: string;
  /** Tech names — must match keys in constants/stack.ts */
  readonly techNames: readonly string[];
}

/**
 * Bento grid tile displaying a category title and a list of TechBadge items.
 * Used in HeroSection to showcase tech stacks.
 */
export const BentoTile = memo(
  ({ className = "", title, accentClass = "", techNames }: BentoTileProps) => (
    <Card className={`flex flex-col gap-3 p-4 ${className}`}>
      <h3
        className={`font-mono text-[10px] tracking-widest uppercase ${accentClass || "text-muted-foreground"}`}
      >
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {techNames.map((name) => (
          <TechBadge key={name} name={name} />
        ))}
      </div>
    </Card>
  ),
);

BentoTile.displayName = "BentoTile";
