import { memo } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../buttons/Button";
import { Card } from "./Card";
import { TechBadge } from "../badges/TechBadge";

export interface ProjectCardProps {
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly context: string;
  readonly detailsCta: string;
}

/**
 * Project preview card displayed in ProjectsSection grid.
 * Interface co-located in this file. Uses TechBadge (size="sm") for tech tags.
 */
export const ProjectCard = memo(
  ({ slug, title, description, tags, context, detailsCta }: ProjectCardProps) => (
    <Card className="border-primary/10 hover:border-primary/30 flex flex-col justify-between space-y-2 rounded-xl p-4 transition-all duration-300">
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-2">
          <h4 className="text-foreground text-sm leading-tight font-semibold">{title}</h4>
          <span className="border-primary/20 text-primary/70 shrink-0 rounded border px-2 py-0.5 font-mono text-[8px] tracking-wider uppercase">
            {context}
          </span>
        </div>
        <p className="text-muted-foreground line-clamp-2 min-h-[2.5rem] text-xs leading-relaxed italic">
          {description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <TechBadge key={tag} name={tag} size="sm" />
          ))}
        </div>
      </div>
      <div className="flex justify-end pt-2">
        <Button to={`/realisations/${slug}`} variant="secondary" className="h-6 px-2 text-[9px]">
          {detailsCta}
          <ArrowRight className="ml-1 h-2.5 w-2.5" />
        </Button>
      </div>
    </Card>
  ),
);

ProjectCard.displayName = "ProjectCard";
