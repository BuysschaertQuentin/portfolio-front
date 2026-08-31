import { REALISATIONS, REALISATION_TAGS } from "@/constants/realisations";
import { useI18n } from "@/i18n";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/buttons/Button";
import { ProjectCard } from "./ui/cards/ProjectCard";
import { SectionHeader } from "./ui/headers/SectionHeader";

const ProjectsSection = () => {
  const { t } = useI18n();

  return (
    <section
      id="projects"
      className="relative flex h-full w-full shrink-0 snap-center snap-always flex-col items-center justify-center overflow-hidden px-4 py-8 md:px-6"
    >
      <div className="relative z-10 flex w-full max-w-6xl flex-col gap-8">
        <SectionHeader
          index="05"
          label={t("projects.sectionLabel")}
          title={t("projects.title")}
          accentColor="primary"
        />

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

        <div className="mt-4 flex justify-center pb-2">
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
    </section>
  );
};

export default ProjectsSection;
