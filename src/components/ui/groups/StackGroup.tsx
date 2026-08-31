import { type TechItem } from "@/constants/stack";
import { memo } from "react";
import { Card } from "../cards/Card";

export interface StackGroupProps {
  readonly title: string;
  readonly items: readonly TechItem[];
  readonly dotColor: string;
  readonly titleColor?: string;
}

/** Single tech card in the stack grid */
const TechCard = memo(({ name, logo, iconComponent: Icon }: TechItem) => (
  <Card
    className="group border-primary/10 hover:border-primary/40 flex flex-col items-center gap-2 rounded-xl p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_hsla(var(--primary)/0.15)]"
    aria-label={name}
  >
    {Icon ? (
      <Icon
        className="text-muted-foreground group-hover:text-foreground h-8 w-8 transition-transform duration-300 group-hover:scale-110"
        aria-hidden="true"
      />
    ) : (
      <img
        src={logo}
        alt=""
        className="h-8 w-8 transition-transform duration-300 group-hover:scale-110"
        loading="lazy"
        width={32}
        height={32}
      />
    )}
    <span className="text-muted-foreground group-hover:text-foreground font-mono text-[10px] tracking-wider uppercase transition-colors">
      {name}
    </span>
  </Card>
));

TechCard.displayName = "TechCard";

/**
 * Labeled group of tech cards displayed in a responsive grid.
 * Used in StackSection. Interface and TechCard sub-component co-located in this file.
 */
export const StackGroup = memo(
  ({ title, items, dotColor, titleColor = "text-foreground" }: StackGroupProps) => (
    <div className="mb-4 last:mb-0">
      <div className="mb-3 flex items-center gap-2">
        <div className={`h-2 w-2 rounded-full ${dotColor}`} aria-hidden="true" />
        <h3 className={`font-mono text-sm font-semibold tracking-widest uppercase ${titleColor}`}>
          {title}
        </h3>
        <div className="bg-border h-px flex-1 opacity-20" aria-hidden="true" />
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
        {items.map((tech) => (
          <TechCard key={tech.name} {...tech} />
        ))}
      </div>
    </div>
  ),
);

StackGroup.displayName = "StackGroup";
