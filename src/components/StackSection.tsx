import { coreStack, type TechItem, transversalStack } from "@/constants/stack";
import { useI18n } from "@/i18n";
import { ArrowRight } from "lucide-react";
import { memo } from "react";
import SectionChevron from "./SectionChevron";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";

const TechCard = memo(({ name, logo, iconComponent: Icon }: TechItem) => (
  <Card
    className="group border-primary/10 hover:border-primary/40 flex flex-col items-center gap-2 rounded-xl p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_hsla(var(--primary)/0.15)]"
    aria-label={name}
  >
    {Icon ? (
      <Icon
        className="text-muted-foreground group-hover:text-foreground h-8 w-8 transition-transform duration-300 group-hover:scale-110"
        aria-hidden="true"
      />
    ) : (
      <img
        src={logo}
        alt=""
        className="h-8 w-8 transition-transform duration-300 group-hover:scale-110"
        loading="lazy"
        width={32}
        height={32}
      />
    )}
    <span className="text-muted-foreground group-hover:text-foreground font-mono text-[10px] tracking-wider uppercase transition-colors">
      {name}
    </span>
  </Card>
));

TechCard.displayName = "TechCard";

import { StackGroupProps } from "@/types/skill";

const StackGroup = ({
  title,
  items,
  dotColor,
  titleColor = "text-foreground",
}: StackGroupProps) => (
  <div className="mb-4 last:mb-0">
    <div className="mb-3 flex items-center gap-2">
      <div className={`h-2 w-2 rounded-full ${dotColor}`} aria-hidden="true" />
      <h3 className={`font-mono text-sm font-semibold tracking-widest uppercase ${titleColor}`}>
        {title}
      </h3>
      <div className="bg-border h-px flex-1 opacity-20" aria-hidden="true" />
    </div>
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
      {items.map((tech) => (
        <TechCard key={tech.name} {...tech} />
      ))}
    </div>
  </div>
);

const StackSection = () => {
  const { t } = useI18n();

  return (
    <section
      id="stack"
      className="relative flex h-full w-full shrink-0 snap-center snap-always flex-col justify-between overflow-hidden pt-12 md:pt-16"
    >
      <div className="section-container scrollbar-styled mask-bottom-fade flex-1 overflow-x-hidden overflow-y-auto p-2">
        <div className="mb-6 flex flex-col items-center">
          <div className="mb-2 flex items-center gap-4">
            <span className="text-primary font-mono text-xl opacity-50">04 /</span>
            <p className="text-primary font-mono text-sm tracking-widest uppercase">
              {t("stack.sectionLabel")}
            </p>
          </div>
          <h2 className="text-glow-primary text-center text-2xl font-bold sm:text-3xl">
            {t("stack.title")}
          </h2>
        </div>

        <StackGroup title={t("stack.core")} items={coreStack} dotColor="bg-primary" />
        <StackGroup
          title={t("stack.transversal")}
          items={transversalStack}
          dotColor="bg-muted-foreground"
          titleColor="text-muted-foreground"
        />

        <div className="mt-6 flex justify-center pb-4">
          <Button
            to="/competences"
            variant="secondary"
            className="border-primary/20 hover:border-primary/40"
          >
            {t("stack.cta")}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <SectionChevron targetId="past" label={t("chevrons.past")} />
    </section>
  );
};

export default StackSection;
