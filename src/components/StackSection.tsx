const coreStack = [
  { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "NestJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "CloudFoundry", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudfoundry/cloudfoundry-original.svg" },
];

const transversalStack = [
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
];

const TechCard = ({ name, logo }: { name: string; logo: string }) => (
  <div className="group glass-card rounded-xl p-5 border-primary/10 flex flex-col items-center gap-3 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_20px_hsla(var(--primary)/0.15)] hover:-translate-y-1">
    <img
      src={logo}
      alt={name}
      className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
      loading="lazy"
    />
    <span className="text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors">
      {name}
    </span>
  </div>
);

const StackSection = () => {
  return (
    <section id="stack" className="relative">
      <div className="section-container">
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2 text-center">
          Compétences
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center text-glow-primary">
          Stack Technique
        </h2>

        {/* Core Stack */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <h3 className="text-lg font-mono font-semibold text-foreground">
              Stack principale
            </h3>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {coreStack.map((tech) => (
              <TechCard key={tech.name} {...tech} />
            ))}
          </div>
        </div>

        {/* Transversal Stack */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-2 rounded-full bg-muted-foreground" />
            <h3 className="text-lg font-mono font-semibold text-muted-foreground">
              Compétences transversales
            </h3>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {transversalStack.map((tech) => (
              <TechCard key={tech.name} {...tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StackSection;
