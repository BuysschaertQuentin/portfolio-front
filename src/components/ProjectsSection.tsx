import { REALISATIONS } from "@/constants/realisations";
import { getTechItem } from "@/constants/stack";
import { useI18n } from "@/i18n";
import { ArrowRight } from "lucide-react";
import { memo } from "react";
import SectionChevron from "./SectionChevron";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";

interface ProjectCardProps {
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly context: string;
  readonly detailsCta: string;
}

const ProjectCard = memo(
  ({ slug, title, description, tags, context, detailsCta }: ProjectCardProps) => (
    <Card className="border-primary/10 hover:border-primary/30 flex flex-col justify-between space-y-3 rounded-xl p-5 transition-all duration-300">
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <h4 className="text-foreground text-base leading-tight font-semibold">{title}</h4>
          <span className="border-primary/20 text-primary/70 rounded border px-2 py-0.5 font-mono text-[9px] tracking-wider uppercase">
            {context}
          </span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed italic">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => {
            const tech = getTechItem(tag);
            return (
              <div
                key={tag}
                className="bg-secondary/50 border-border/50 flex items-center gap-1.5 rounded border py-1 pr-2 pl-1.5"
                title={tag}
              >
                {tech?.iconComponent ? (
                  <tech.iconComponent className="text-foreground h-3 w-3" aria-hidden="true" />
                ) : tech?.logo ? (
                  <img src={tech.logo} alt="" className="h-3 w-3" loading="lazy" />
                ) : null}
                <span className="text-secondary-foreground font-mono text-[9px] tracking-wider uppercase">
                  {tag}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-end pt-3">
        <Button to={`/realisations/${slug}`} variant="secondary" className="h-7 px-3 text-[10px]">
          {detailsCta}
          <ArrowRight className="ml-2 h-3 w-3" />
        </Button>
      </div>
    </Card>
  ),
);

ProjectCard.displayName = "ProjectCard";

const ProjectsSection = () => {
  const { t } = useI18n();

  // Mapping slugs to tags (could be moved to constants/realisations if needed)
  const tagsMap: Record<string, string[]> = {
    "portail-rh": ["Angular", "NestJS", "MySQL", "CloudFoundry"],
    "repos-compensateurs": ["Angular", "Java", "Spring Boot", "Microservices"],
    "app-mobile-competences": ["Flutter", "Dart", "Supabase"],
    "o-voyage": ["Vue.js", "NestJS", "SQL", "Teamwork"],
    portfolio: ["React", "TypeScript", "Tailwind CSS"],
  };

  return (
    <section
      id="projects"
      className="relative flex h-dvh w-full shrink-0 snap-center snap-always flex-col justify-between overflow-hidden pt-12 md:pt-16"
    >
      <div className="section-container no-scrollbar flex-1 overflow-x-hidden overflow-y-auto p-2">
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
              tags={tagsMap[project.slug] || []}
              context={project.context}
              detailsCta={t("projects.detailsCta")}
            />
          ))}
        </div>

        <div className="mt-6 flex justify-center pb-4">
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

      <SectionChevron targetId="contact" label={t("nav.contact") || "Contact"} />
    </section>
  );
};

export default ProjectsSection;
