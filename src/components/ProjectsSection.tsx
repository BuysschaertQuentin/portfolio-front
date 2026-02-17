import { useI18n } from "@/i18n";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";

interface Project {
  readonly titleKey: string;
  readonly descriptionKey: string;
  readonly tags: readonly string[];
  readonly type?: "pro";
  readonly link?: string;
  readonly github?: string;
}

const proProjects: readonly Project[] = [
  {
    titleKey: "projects.proProjects.orangeTitle",
    descriptionKey: "projects.proProjects.orangeDesc",
    tags: ["Angular", "NestJS", "TypeScript", "Docker"],
    type: "pro",
  },
];

const personalProjects: readonly Project[] = [
  {
    titleKey: "projects.persoProjects.portfolioTitle",
    descriptionKey: "projects.persoProjects.portfolioDesc",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    link: "#",
  },
  {
    titleKey: "projects.persoProjects.botTitle",
    descriptionKey: "projects.persoProjects.botDesc",
    tags: ["Node.js", "TypeScript", "Docker"],
    github: "#",
  },
];

interface ProjectCardProps {
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly link?: string;
  readonly github?: string;
  readonly sourceCodeAria: string;
  readonly viewProjectAria: string;
}

const ProjectCard = ({
  title,
  description,
  tags,
  link,
  github,
  sourceCodeAria,
  viewProjectAria,
}: ProjectCardProps) => (
  <div className="glass-card rounded-xl p-6 border-primary/10 space-y-4 hover:border-primary/30 transition-colors">
    <div className="flex items-start justify-between">
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <div className="flex gap-2">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label={`${sourceCodeAria} ${title}`}
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        )}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label={`${viewProjectAria} ${title}`}
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
    <p className="text-sm text-muted-foreground leading-relaxed">
      {description}
    </p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="px-2 py-0.5 text-xs font-mono rounded-full bg-secondary text-secondary-foreground border border-border"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

interface ProjectGroupProps {
  readonly title: string;
  readonly items: readonly Project[];
  readonly dotColor: string;
  readonly sourceCodeAria: string;
  readonly viewProjectAria: string;
  readonly t: (key: string) => string;
}

const ProjectGroup = ({
  title,
  items,
  dotColor,
  sourceCodeAria,
  viewProjectAria,
  t,
}: ProjectGroupProps) => (
  <div className="mb-16 last:mb-0">
    <div className="flex items-center gap-3 mb-8">
      <div className={`w-2 h-2 rounded-full ${dotColor}`} />
      <h3 className="text-lg font-mono font-semibold text-foreground">
        {title}
      </h3>
      <div className="flex-1 h-px bg-border" />
    </div>
    <div className="grid md:grid-cols-2 gap-6">
      {items.map((p) => (
        <ProjectCard
          key={p.titleKey}
          title={t(p.titleKey)}
          description={t(p.descriptionKey)}
          tags={p.tags}
          link={p.link}
          github={p.github}
          sourceCodeAria={sourceCodeAria}
          viewProjectAria={viewProjectAria}
        />
      ))}
    </div>
  </div>
);

const ProjectsSection = () => {
  const { t } = useI18n();

  return (
    <section id="projects" className="relative">
      <div className="section-container">
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2 text-center">
          {t("projects.sectionLabel")}
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center text-glow-primary">
          {t("projects.title")}
        </h2>

        <ProjectGroup
          title={t("projects.professional")}
          items={proProjects}
          dotColor="bg-orange"
          sourceCodeAria={t("projects.sourceCodeAria")}
          viewProjectAria={t("projects.viewProjectAria")}
          t={t}
        />
        <ProjectGroup
          title={t("projects.personal")}
          items={personalProjects}
          dotColor="bg-cyan"
          sourceCodeAria={t("projects.sourceCodeAria")}
          viewProjectAria={t("projects.viewProjectAria")}
          t={t}
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
