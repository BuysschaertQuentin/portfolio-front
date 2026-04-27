import auxImg from "@/assets/auxiliaire_de_vie.png";
import { PAST_SOFT_SKILLS } from "@/constants/home";
import { useI18n } from "@/i18n";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/buttons/Button";
import { Card } from "./ui/cards/Card";
import { SectionHeader } from "./ui/headers/SectionHeader";
import SectionChevron from "./ui/navigation/SectionChevron";
import { SoftSkillCard } from "./ui/cards/SoftSkillCard";

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
        <SectionHeader
          index="01"
          label={t("past.sectionLabel")}
          title={t("past.title")}
          titleHighlight={t("past.titleHighlight")}
          accentColor="cyan"
        />

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
