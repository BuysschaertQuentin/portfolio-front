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
    name: "Vue.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  {
    name: "Flutter",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  {
    name: "Supabase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
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
    className="group border-primary/10 hover:border-primary/40 flex flex-col items-center gap-3 rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_hsla(var(--primary)/0.15)]"
    aria-label={name}
  >
    {Icon ? (
      <Icon
        className="text-muted-foreground group-hover:text-foreground h-10 w-10 transition-transform duration-300 group-hover:scale-110"
        aria-hidden="true"
      />
    ) : (
      <img
        src={logo}
        alt=""
        className="h-10 w-10 transition-transform duration-300 group-hover:scale-110"
        loading="lazy"
        width={40}
        height={40}
      />
    )}
    <span className="text-muted-foreground group-hover:text-foreground font-mono text-xs transition-colors">
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
    <div className="mb-8 flex items-center gap-3">
      <div className={`h-2 w-2 rounded-full ${dotColor}`} aria-hidden="true" />
      <h3 className={`font-mono text-lg font-semibold ${titleColor}`}>{title}</h3>
      <div className="bg-border h-px flex-1" aria-hidden="true" />
    </div>
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
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
        <p className="text-primary mb-2 text-center font-mono text-sm tracking-widest uppercase">
          {t("stack.sectionLabel")}
        </p>
        <h2 className="text-glow-primary mb-16 text-center text-3xl font-bold sm:text-4xl">
          {t("stack.title")}
        </h2>

        <StackGroup title={t("stack.core")} items={coreStack} dotColor="bg-primary" />
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
