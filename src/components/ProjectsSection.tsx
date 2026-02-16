import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Application interne Orange",
    description: "Développement d'une application de gestion interne avec Angular et NestJS, déployée sur CloudFoundry.",
    tags: ["Angular", "NestJS", "TypeScript", "Docker"],
    type: "pro" as const,
  },
  {
    title: "Projet e-commerce",
    description: "Application fullstack avec gestion des produits, panier et paiement. API REST complète.",
    tags: ["React", "Node.js", "PostgreSQL", "API REST"],
    type: "pro" as const,
  },
];

const personalProjects = [
  {
    title: "Portfolio personnel",
    description: "Ce portfolio en React avec un design retro-futuriste, mode sombre et pixel art.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Bot Discord",
    description: "Bot communautaire avec commandes personnalisées et intégration d'APIs externes.",
    tags: ["Node.js", "TypeScript", "Docker"],
    github: "#",
  },
];

const ProjectCard = ({
  title,
  description,
  tags,
  link,
  github,
}: {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
}) => (
  <div className="glass-card rounded-xl p-6 border-primary/10 space-y-4 hover:border-primary/30 transition-colors">
    <div className="flex items-start justify-between">
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <div className="flex gap-2">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-4 h-4" />
          </a>
        )}
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className="px-2 py-0.5 text-xs font-mono rounded-full bg-secondary text-secondary-foreground border border-border">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative">
      <div className="section-container">
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2 text-center">
          Réalisations
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center text-glow-primary">
          Projets
        </h2>

        {/* Professional Projects */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-2 rounded-full bg-orange" />
            <h3 className="text-lg font-mono font-semibold text-foreground">Projets professionnels</h3>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </div>

        {/* Personal Projects */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-2 rounded-full bg-cyan" />
            <h3 className="text-lg font-mono font-semibold text-foreground">Projets personnels</h3>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {personalProjects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
