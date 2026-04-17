import orangeImg from "@/assets/developpeur_alternance_orange.png";
import orangeLogo from "@/assets/orange.png";
import { useI18n } from "@/i18n";
import { ArrowRight } from "lucide-react";
import SectionChevron from "./SectionChevron";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";

import { EXPERIENCE_STACK } from "@/constants/home";

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

          <h2 className="text-glow-orange text-center text-2xl font-bold sm:text-3xl leading-tight">
            {t("experience.title")} <span className="text-orange">{t("experience.company")}</span>
          </h2>
        </div>

        <div className="grid items-center gap-6 md:grid-cols-2">
          <Card className="border-orange/20 animate-fade-in order-2 space-y-4 rounded-xl p-5 md:order-1">
            {/* Logo + company name */}
            <div className="flex items-center gap-4">
              <div className="bg-orange/5 border-orange/10 rounded-lg border p-2">
                <img
                  src={orangeLogo}
                  alt=""
                  className="h-10 w-10 object-contain"
                  width={40}
                  height={40}
                  loading="lazy"
                />
              </div>
              <div>
                <span className="text-foreground text-lg font-semibold">
                  {t("experience.company")}
                </span>
                <p className="text-muted-foreground font-mono text-xs">{t("experience.status")}</p>
              </div>
            </div>

            <p className="text-secondary-foreground text-sm leading-relaxed md:text-base">
              {t("experience.description")}
            </p>

            <div className="flex flex-wrap gap-2">
              {EXPERIENCE_STACK.map((tech) => (
                <span
                  key={tech}
                  className="bg-orange-muted text-orange-foreground border-orange/20 rounded-full border px-3 py-1 font-mono text-[10px]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="border-orange/20 border-t pt-4">
              <Button
                to="/realisations"
                variant="secondary"
                className="border-orange/20 hover:border-orange/40 hover:bg-orange/5"
              >
                {t("experience.cta")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Card>

          <div className="order-1 flex justify-center md:order-2">
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

      <SectionChevron targetId="stack" label="Mes Compétences" />
    </section>
  );
};

export default ExperienceSection;
