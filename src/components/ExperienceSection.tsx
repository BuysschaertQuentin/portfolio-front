import orangeImg from "@/assets/developpeur_alternance_orange.png";
import orangeLogo from "@/assets/orange.png";
import { EXPERIENCE_STACK_BAC3, EXPERIENCE_STACK_BAC5 } from "@/constants/home";
import { useI18n } from "@/i18n";
import { ArrowRight } from "lucide-react";
import { memo } from "react";
import SectionChevron from "./SectionChevron";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";

interface ExperienceEntryProps {
  readonly period: string;
  readonly title: string;
  readonly status: string;
  readonly description: string;
  readonly stack: readonly string[];
  readonly stackColor: string;
}

/** Single experience card (Bac+3 or Bac+5). */
const ExperienceEntry = memo(
  ({ period, title, status, description, stack, stackColor }: ExperienceEntryProps) => (
    <Card className="border-orange/20 space-y-3 rounded-xl p-5">
      <div className="flex items-center gap-4">
        <div className="bg-orange/5 border-orange/10 rounded-lg border p-2">
          <img
            src={orangeLogo}
            alt=""
            className="h-8 w-8 object-contain"
            width={32}
            height={32}
            loading="lazy"
          />
        </div>
        <div>
          <p className="text-foreground font-semibold">{title}</p>
          <p className="text-muted-foreground font-mono text-xs">{status}</p>
          <p className="text-orange font-mono text-[10px] opacity-70">{period}</p>
        </div>
      </div>
      <p className="text-secondary-foreground text-sm leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span
            key={tech}
            className={`${stackColor} rounded-full border px-3 py-1 font-mono text-[10px]`}
          >
            {tech}
          </span>
        ))}
      </div>
    </Card>
  ),
);

ExperienceEntry.displayName = "ExperienceEntry";

const ExperienceSection = () => {
  const { t } = useI18n();

  return (
    <section
      id="experience"
      className="relative flex h-full w-full shrink-0 snap-center snap-always flex-col justify-between overflow-hidden pt-12 md:pt-16"
    >
      {/* Orange subtle top gradient */}
      <div className="from-orange-muted/20 to-background pointer-events-none absolute inset-0 bg-linear-to-b" />

      <div className="section-container scrollbar-styled mask-bottom-fade relative z-10 flex-1 overflow-x-hidden overflow-y-auto p-2">
        <div className="mb-6 flex flex-col items-center">
          <div className="mb-2 flex items-center gap-4">
            <span className="text-orange font-mono text-xl opacity-50">03 /</span>
            <p className="text-orange font-mono text-sm tracking-widest uppercase">
              {t("experience.sectionLabel")}
            </p>
          </div>

          <h2 className="text-glow-orange text-center text-2xl font-bold leading-tight sm:text-3xl">
            {t("experience.title")}{" "}
            <span className="text-orange">{t("experience.company")}</span>
          </h2>
        </div>

        <div className="grid items-start gap-6 md:grid-cols-2">
          {/* Left: 2 experience entries stacked */}
          <div className="space-y-4">
            <ExperienceEntry
              period={t("parcours.entries.orange2.period")}
              title={t("parcours.entries.orange2.title")}
              status={t("parcours.entries.orange2.status")}
              description={t("parcours.entries.orange2.missions")}
              stack={EXPERIENCE_STACK_BAC5}
              stackColor="bg-orange-muted text-orange-foreground border-orange/20"
            />
            <ExperienceEntry
              period={t("parcours.entries.orange1.period")}
              title={t("parcours.entries.orange1.title")}
              status={t("parcours.entries.orange1.status")}
              description={t("parcours.entries.orange1.missions")}
              stack={EXPERIENCE_STACK_BAC3}
              stackColor="bg-orange-muted text-orange-foreground border-orange/20"
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

      <SectionChevron targetId="projects" label="Mes Réalisations" />
    </section>
  );
};

export default ExperienceSection;
