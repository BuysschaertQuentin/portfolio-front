import orangeImg from "@/assets/developpeur_alternance_orange.png";
import orangeLogo from "@/assets/orange.png";
import { useI18n } from "@/i18n";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/buttons/Button";
import { ExperienceEntry } from "./ui/cards/ExperienceEntry";
import { SectionHeader } from "./ui/headers/SectionHeader";
import SectionChevron from "./ui/navigation/SectionChevron";

interface ExperienceSectionProps {
  readonly id: string;
  readonly index: string;
  readonly label: string;
  readonly entryKey: "orange1" | "orange2";
  readonly stack: readonly string[];
  readonly nextSectionId: string;
  readonly nextSectionLabel: string;
}

const ExperienceSection = ({
  id,
  index,
  label,
  entryKey,
  stack,
  nextSectionId,
  nextSectionLabel,
}: ExperienceSectionProps) => {
  const { t } = useI18n();

  return (
    <section
      id={id}
      className="relative flex h-full w-full shrink-0 snap-center snap-always flex-col items-center justify-center overflow-hidden px-4 py-8 md:px-6"
    >
      {/* Orange subtle top gradient */}
      <div className="from-orange-muted/20 to-background pointer-events-none absolute inset-0 bg-linear-to-b" />

      <div className="relative z-10 flex w-full max-w-6xl flex-col gap-8">
        <SectionHeader
          index={index}
          label={label}
          title={t(`parcours.entries.${entryKey}.title`)}
          titleHighlight={t("experience.company")}
          accentColor="orange"
        />

        <div className="grid items-start gap-8 md:grid-cols-2">
          {/* Left: experience entry */}
          <div className="space-y-4">
            <ExperienceEntry
              period={t(`parcours.entries.${entryKey}.period`)}
              title={t(`parcours.entries.${entryKey}.title`)}
              status={t(`parcours.entries.${entryKey}.status`)}
              description={t(`parcours.entries.${entryKey}.missions`)}
              stack={stack}
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
        <SectionChevron targetId={nextSectionId} label={nextSectionLabel} />
      </div>
    </section>
  );
};

export default ExperienceSection;
