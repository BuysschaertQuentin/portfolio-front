import orangeImg from "@/assets/developpeur_alternance_orange.png";
import orangeLogo from "@/assets/orange.png";
import { EXPERIENCE_STACK_BAC3, EXPERIENCE_STACK_BAC5 } from "@/constants/home";
import { useI18n } from "@/i18n";
import { ArrowRight } from "lucide-react";
import { ExperienceEntry } from "./ui/cards/ExperienceEntry";
import SectionChevron from "./ui/navigation/SectionChevron";
import { Button } from "./ui/buttons/Button";
import { SectionHeader } from "./ui/headers/SectionHeader";

const ExperienceSection = () => {
  const { t } = useI18n();

  return (
    <section
      id="experience"
      className="relative flex h-full w-full shrink-0 snap-center snap-always flex-col items-center justify-center overflow-hidden px-4 py-8 md:px-6"
    >
      {/* Orange subtle top gradient */}
      <div className="from-orange-muted/20 to-background pointer-events-none absolute inset-0 bg-linear-to-b" />

      <div className="relative z-10 flex w-full max-w-6xl flex-col gap-8">
        <SectionHeader
          index="03"
          label={t("experience.sectionLabel")}
          title={t("experience.title")}
          titleHighlight={t("experience.company")}
          accentColor="orange"
        />

        <div className="grid items-start gap-8 md:grid-cols-2">
          {/* Left: 2 experience entries stacked */}
          <div className="space-y-4">
            <ExperienceEntry
              period={t("parcours.entries.orange2.period")}
              title={t("parcours.entries.orange2.title")}
              status={t("parcours.entries.orange2.status")}
              description={t("parcours.entries.orange2.missions")}
              stack={EXPERIENCE_STACK_BAC5}
              logo={orangeLogo}
            />
            <ExperienceEntry
              period={t("parcours.entries.orange1.period")}
              title={t("parcours.entries.orange1.title")}
              status={t("parcours.entries.orange1.status")}
              description={t("parcours.entries.orange1.missions")}
              stack={EXPERIENCE_STACK_BAC3}
              logo={orangeLogo}
            />
            <div className="pt-2">
              <Button
                to="/realisations"
                variant="secondary"
                className="border-orange/20 hover:border-orange/40 hover:bg-orange/5"
              >
                {t("experience.cta")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right: illustration */}
          <div className="flex justify-center">
            <img
              src={orangeImg}
              alt={t("experience.imgAlt")}
              className="pixel-image w-full max-w-xs drop-shadow-[0_0_20px_hsla(var(--orange)/0.2)] sm:max-w-sm"
              width={384}
              height={384}
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="absolute right-0 bottom-4 left-0 flex justify-center">
        <SectionChevron targetId="projects" label={t("chevrons.projects")} />
      </div>
    </section>
  );
};

export default ExperienceSection;

