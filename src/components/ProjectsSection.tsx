import { REALISATIONS, REALISATION_TAGS } from "@/constants/realisations";
import { getTechItem } from "@/constants/stack";
import { useI18n } from "@/i18n";
import { ArrowRight } from "lucide-react";
import { memo } from "react";
import SectionChevron from "./SectionChevron";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";

import { ProjectCardProps } from "@/types/realization";

const ProjectCard = memo(
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
          {tags.map((tag) => {
            const tech = getTechItem(tag);
            return (
              <div
                key={tag}
                className="bg-secondary/50 border-border/50 flex items-center gap-1 rounded border py-0.5 pr-1.5 pl-1"
                title={tag}
              >
                {tech?.iconComponent ? (
                  <tech.iconComponent className="text-foreground h-2.5 w-2.5" aria-hidden="true" />
                ) : tech?.logo ? (
                  <img src={tech.logo} alt="" className="h-2.5 w-2.5" loading="lazy" />
                ) : null}
                <span className="text-secondary-foreground font-mono text-[8px] tracking-wider uppercase">
                  {tag}
                </span>
              </div>
            );
          })}
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

const ProjectsSection = () => {
  const { t } = useI18n();

  return (
    <section
      id="projects"
      className="relative flex h-full w-full shrink-0 snap-center snap-always flex-col justify-between overflow-hidden pt-8 md:pt-12"
    >
      <div className="section-container relative z-10 flex flex-1 flex-col justify-center overflow-hidden p-2">
        <div className="mb-6 flex flex-col items-center">
          <div className="mb-2 flex items-center gap-4">
            <span className="text-primary font-mono text-xl opacity-50">05 /</span>
            <p className="text-primary font-mono text-sm tracking-widest uppercase">
              {t("projects.sectionLabel")}
            </p>
          </div>
          <h2 className="text-glow-primary text-center text-2xl font-bold sm:text-3xl">
            {t("projects.title")}
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {REALISATIONS.map((project) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              title={t(project.titleKey)}
              description={t(project.shortDescKey)}
              tags={REALISATION_TAGS[project.slug] || []}
              context={project.context}
              detailsCta={t("projects.detailsCta")}
            />
          ))}
        </div>

        <div className="mt-6 flex justify-center pb-2">
          <Button
            to="/realisations"
            variant="secondary"
            className="border-primary/20 hover:border-primary/40"
          >
            {t("projects.cta")}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <SectionChevron targetId="contact" label={t("chevrons.contact")} />
    </section>
  );
};

export default ProjectsSection;
