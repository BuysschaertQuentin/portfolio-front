import auxImg from "@/assets/auxiliaire_de_vie.png";
import { PAST_SOFT_SKILLS } from "@/constants/home";
import { useI18n } from "@/i18n";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/buttons/Button";
import { Card } from "./ui/cards/Card";
import { SoftSkillCard } from "./ui/cards/SoftSkillCard";
import { SectionHeader } from "./ui/headers/SectionHeader";
import SectionChevron from "./ui/navigation/SectionChevron";

const PastSection = () => {
  const { t } = useI18n();

  return (
    <section
      id="past"
      className="relative flex h-full w-full shrink-0 snap-center snap-always flex-col items-center justify-center overflow-hidden px-4 py-8 md:px-6"
    >
      <div
        className="from-background via-cyan-muted/10 to-background pointer-events-none absolute inset-0 bg-linear-to-b"
        aria-hidden="true"
      />

      <div className="relative z-10 flex w-full max-w-6xl flex-col gap-8">
        <SectionHeader
          index="01"
          label={t("past.sectionLabel")}
          title={t("past.title")}
          titleHighlight={t("past.titleHighlight")}
          accentColor="cyan"
        />

        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <Card className="border-cyan/20 space-y-4 rounded-lg p-6">
              <p className="text-secondary-foreground text-base leading-relaxed">
                {t("past.description")}
              </p>
              <div className="pt-2">
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
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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

      <div className="absolute right-0 bottom-4 left-0 flex justify-center">
        <SectionChevron targetId="formation" label={t("chevrons.formation")} />
      </div>
    </section>
  );
};

export default PastSection;
