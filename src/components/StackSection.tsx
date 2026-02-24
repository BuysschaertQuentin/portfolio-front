import { useI18n } from "@/i18n";
import { type ComponentPropsWithoutRef, type ComponentType, memo } from "react";
import { CloudFoundryIcon } from "./icons";
import { Card } from "./ui/Card";

interface TechItem {
  readonly name: string;
  /** URL to an external logo image */
  readonly logo?: string;
  /** Custom SVG icon component (takes priority over logo URL) */
  readonly iconComponent?: ComponentType<ComponentPropsWithoutRef<"svg">>;
}

const coreStack: readonly TechItem[] = [
  {
    name: "Angular",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "NestJS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
  },
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "CloudFoundry",
    iconComponent: CloudFoundryIcon,
  },
];

const transversalStack: readonly TechItem[] = [
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "HTML5",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "VS Code",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "Figma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
];

const TechCard = memo(({ name, logo, iconComponent: Icon }: TechItem) => (
  <Card
    className="group rounded-xl p-5 border-primary/10 flex flex-col items-center gap-3 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_20px_hsla(var(--primary)/0.15)] hover:-translate-y-1"
    aria-label={name}
  >
    {Icon ? (
      <Icon
        className="w-10 h-10 transition-transform duration-300 group-hover:scale-110 text-muted-foreground group-hover:text-foreground"
        aria-hidden="true"
      />
    ) : (
      <img
        src={logo}
        alt=""
        className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
        loading="lazy"
        width={40}
        height={40}
      />
    )}
    <span className="text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors">
      {name}
    </span>
  </Card>
));

TechCard.displayName = "TechCard";

interface StackGroupProps {
  readonly title: string;
  readonly items: readonly TechItem[];
  readonly dotColor: string;
  readonly titleColor?: string;
}

const StackGroup = ({
  title,
  items,
  dotColor,
  titleColor = "text-foreground",
}: StackGroupProps) => (
  <div className="mb-16 last:mb-0">
    <div className="flex items-center gap-3 mb-8">
      <div className={`w-2 h-2 rounded-full ${dotColor}`} aria-hidden="true" />
      <h3 className={`text-lg font-mono font-semibold ${titleColor}`}>
        {title}
      </h3>
      <div className="flex-1 h-px bg-border" aria-hidden="true" />
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
      {items.map((tech) => (
        <TechCard key={tech.name} {...tech} />
      ))}
    </div>
  </div>
);

const StackSection = () => {
  const { t } = useI18n();

  return (
    <section id="stack" className="relative">
      <div className="section-container">
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2 text-center">
          {t("stack.sectionLabel")}
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center text-glow-primary">
          {t("stack.title")}
        </h2>

        <StackGroup
          title={t("stack.core")}
          items={coreStack}
          dotColor="bg-primary"
        />
        <StackGroup
          title={t("stack.transversal")}
          items={transversalStack}
          dotColor="bg-muted-foreground"
          titleColor="text-muted-foreground"
        />
      </div>
    </section>
  );
};

export default StackSection;
