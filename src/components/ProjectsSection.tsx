import { ExternalLink, Github } from "lucide-react";

interface Project {
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly type?: "pro";
  readonly link?: string;
  readonly github?: string;
}

const projects: readonly Project[] = [
  {
    title: "Application interne Orange",
    description:
      "Développement d'une application de gestion interne avec Angular et NestJS, déployée sur CloudFoundry.",
    tags: ["Angular", "NestJS", "TypeScript", "Docker"],
    type: "pro",
  },
];

const personalProjects: readonly Project[] = [
  {
    title: "Portfolio personnel",
    description:
      "Ce portfolio en React avec un design retro-futuriste, mode sombre et pixel art.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Bot Discord",
    description:
      "Bot communautaire avec commandes personnalisées et intégration d'APIs externes.",
    tags: ["Node.js", "TypeScript", "Docker"],
    github: "#",
  },
];

const ProjectCard = ({ title, description, tags, link, github }: Project) => (
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
            aria-label={`Code source de ${title}`}
          >
            <Github className="w-4 h-4" />
          </a>
        )}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label={`Voir le projet ${title}`}
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
}

const ProjectGroup = ({ title, items, dotColor }: ProjectGroupProps) => (
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
        <ProjectCard key={p.title} {...p} />
      ))}
    </div>
  </div>
);

const ProjectsSection = () => (
  <section id="projects" className="relative">
    <div className="section-container">
      <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2 text-center">
        Réalisations
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center text-glow-primary">
        Projets
      </h2>

      <ProjectGroup
        title="Projets professionnels"
        items={projects}
        dotColor="bg-orange"
      />
      <ProjectGroup
        title="Projets personnels"
        items={personalProjects}
        dotColor="bg-cyan"
      />
    </div>
  </section>
);

export default ProjectsSection;
