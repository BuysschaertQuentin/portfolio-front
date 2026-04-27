import bootcampImg from "@/assets/bootcamp_o_clock.png";
import oclockLogo from "@/assets/oclock.png";
import { EXTERNAL_LINKS } from "@/constants/personal";
import { useI18n } from "@/i18n";
import { ArrowRight } from "lucide-react";
import { ExternalLink } from "./a11y/ExternalLink";
import SectionChevron from "./SectionChevron";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";

import { FORMATION_SKILLS } from "@/constants/home";

const FormationSection = () => {
  const { t } = useI18n();

  return (
    <section
      id="formation"
      className="bg-violet-deep relative flex h-full w-full shrink-0 snap-center snap-always flex-col justify-between overflow-hidden pt-8 md:pt-12"
    >
      <div className="from-background via-violet-deep/10 to-background pointer-events-none absolute inset-0 bg-linear-to-b" />

      <div className="section-container relative z-10 flex flex-1 flex-col justify-center overflow-hidden p-2">
        <div className="mb-6 flex flex-col items-center">
          <div className="mb-2 flex items-center gap-4">
            <span className="text-violet-foreground font-mono text-xl opacity-50">02 /</span>
            <p className="text-violet-foreground font-mono text-sm tracking-widest uppercase">
              {t("formation.sectionLabel")}
            </p>
          </div>

          <h2 className="text-glow-violet text-center text-2xl leading-tight font-bold sm:text-3xl">
            {t("formation.title")}{" "}
            <span className="text-violet-foreground">{t("formation.school")}</span>
          </h2>
        </div>

        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="flex justify-center md:order-1">
            <img
              src={bootcampImg}
              alt={t("formation.imgAlt")}
              className="pixel-image w-full max-w-xs drop-shadow-[0_0_20px_hsla(var(--violet)/0.15)] sm:max-w-sm"
              width={384}
              height={384}
              loading="lazy"
            />
          </div>
          <Card className="border-violet/30 space-y-4 rounded-xl p-5 md:order-2">
            {/* Logo + school name + link */}
            <div className="flex items-center gap-4">
              <ExternalLink href={EXTERNAL_LINKS.oclock} aria-label={t("formation.school")}>
                <img
                  src={oclockLogo}
                  alt=""
                  className="h-10 w-10 object-contain transition-transform hover:scale-110"
                  width={40}
                  height={40}
                  loading="lazy"
                />
              </ExternalLink>
              <div>
                <ExternalLink
                  href={EXTERNAL_LINKS.oclock}
                  className="text-foreground hover:text-violet-foreground font-semibold transition-colors"
                >
                  {t("formation.school")}
                </ExternalLink>
                <p className="text-muted-foreground font-mono text-xs">{t("formation.duration")}</p>
              </div>
            </div>

            <p className="text-secondary-foreground text-lg leading-relaxed">
              {t("formation.description")}{" "}
              <span className="text-violet-foreground font-medium">{t("formation.quality1")}</span>{" "}
              {t("formation.and")}{" "}
              <span className="text-violet-foreground font-medium">{t("formation.quality2")}</span>{" "}
              {t("formation.forCode")}
            </p>

            <div className="flex flex-wrap gap-2">
              {FORMATION_SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="bg-violet-muted text-violet-foreground border-violet/30 rounded-full border px-3 py-1 font-mono text-[10px]"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="border-violet/20 border-t pt-4">
              <Button
                to="/parcours"
                variant="secondary"
                className="border-violet/20 hover:border-violet/40 hover:bg-violet/5"
              >
                {t("formation.cta")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <SectionChevron targetId="experience" label={t("chevrons.experience")} />
    </section>
  );
};

export default FormationSection;
