import auxImg from "@/assets/auxiliaire_de_vie.png";
import { useI18n } from "@/i18n";
import { type LucideIcon, ArrowRight } from "lucide-react";
import { memo } from "react";
import SectionChevron from "./SectionChevron";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";

import { PAST_SOFT_SKILLS } from "@/constants/home";

interface SoftSkillCardProps {
  readonly icon: LucideIcon;
  readonly label: string;
  readonly desc: string;
}

const SoftSkillCard = memo(({ icon: Icon, label, desc }: SoftSkillCardProps) => (
  <Card className="border-cyan/15 hover:border-cyan/30 flex items-start gap-3 rounded-lg p-4 transition-colors">
    <div className="bg-cyan-muted rounded-md p-2">
      <Icon className="text-cyan h-4 w-4" aria-hidden="true" />
    </div>
    <div>
      <p className="text-foreground text-sm font-semibold">{label}</p>
      <p className="text-muted-foreground text-xs leading-relaxed">{desc}</p>
    </div>
  </Card>
));

SoftSkillCard.displayName = "SoftSkillCard";

const PastSection = () => {
  const { t } = useI18n();

  return (
    <section
      id="past"
      className="relative flex h-full w-full shrink-0 snap-center snap-always flex-col justify-between overflow-hidden pt-8 md:pt-12"
    >
      <div
        className="from-background via-cyan-muted/10 to-background pointer-events-none absolute inset-0 bg-linear-to-b"
        aria-hidden="true"
      />

      <div className="section-container relative z-10 flex flex-1 flex-col justify-center overflow-hidden p-2">
        <div className="mb-6 flex flex-col items-center">
          <div className="mb-2 flex items-center gap-3">
            <span className="text-cyan font-mono text-xl opacity-50">01 /</span>
            <p className="text-cyan font-mono text-sm tracking-widest uppercase">
              {t("past.sectionLabel")}
            </p>
          </div>

          <h2 className="text-glow-cyan text-center text-2xl leading-tight font-bold sm:text-3xl">
            {t("past.title")} <span className="text-cyan">{t("past.titleHighlight")}</span>
          </h2>
        </div>

        <div className="grid items-center gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <Card className="border-cyan/20 space-y-3 rounded-xl p-5">
              <p className="text-secondary-foreground text-sm leading-relaxed md:text-base">
                {t("past.description")}
              </p>
              <div className="pt-4">
                <Button
                  to="/competences"
                  variant="secondary"
                  className="border-cyan/20 hover:border-cyan/40 hover:bg-cyan/5"
                >
                  {t("past.cta")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {PAST_SOFT_SKILLS.map((skill) => (
                <SoftSkillCard
                  key={skill.labelKey}
                  icon={skill.icon}
                  label={t(skill.labelKey)}
                  desc={t(skill.descKey)}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={auxImg}
              alt={t("past.imgAlt")}
              className="pixel-image w-full max-w-xs drop-shadow-[0_0_20px_hsla(var(--cyan)/0.15)] sm:max-w-sm"
              width={384}
              height={384}
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <SectionChevron targetId="formation" label={t("chevrons.formation")} />
    </section>
  );
};

export default PastSection;
