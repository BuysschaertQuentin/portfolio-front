import { ArrowRight } from "lucide-react";
import { memo } from "react";
import { TechBadge } from "../badges/TechBadge";
import { Button } from "../buttons/Button";
import { Card } from "./Card";

export interface ProjectCardProps {
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly context: string;
  readonly detailsCta: string;
}

export const ProjectCard = memo(
  ({ slug, title, description, tags, context, detailsCta }: ProjectCardProps) => (
    <Card className="border-primary/10 hover:border-primary/30 flex flex-col justify-between space-y-2 rounded-xl p-4 transition-all duration-300">
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-2">
          <h4 className="text-foreground text-sm leading-tight font-semibold">{title}</h4>
          <span className="border-primary/20 text-primary/70 rounded border px-3 py-0.5 text-xs tracking-wider uppercase">
            {context}
          </span>
        </div>
        <p className="text-muted-foreground min-h-[4rem] text-sm leading-relaxed italic">
          {description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <TechBadge key={tag} name={tag} size="medium" />
          ))}
        </div>
      </div>
      <div className="flex justify-end">
        <Button
          to={`/realisations/${slug}`}
          state={{ from: "/" }}
          variant="secondary"
          className="h-10 px-2 text-sm"
        >
          {detailsCta}
          <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </Card>
  ),
);

ProjectCard.displayName = "ProjectCard";
