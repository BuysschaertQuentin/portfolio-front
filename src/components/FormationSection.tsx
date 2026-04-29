import bootcampImg from "@/assets/bootcamp_o_clock.png";
import oclockLogo from "@/assets/oclock.png";
import { FORMATION_SKILLS } from "@/constants/home";
import { EXTERNAL_LINKS } from "@/constants/personal";
import { useI18n } from "@/i18n";
import { ArrowRight } from "lucide-react";
import { ExternalLink } from "./ui/a11y/ExternalLink";
import SectionChevron from "./ui/navigation/SectionChevron";
import { Button } from "./ui/buttons/Button";
import { Card } from "./ui/cards/Card";
import { SectionHeader } from "./ui/headers/SectionHeader";
import { SkillBadge } from "./ui/badges/SkillBadge";

const FormationSection = () => {
  const { t } = useI18n();

  return (
    <section
      id="formation"
      className="bg-violet-deep relative flex h-full w-full shrink-0 snap-center snap-always flex-col items-center justify-center overflow-hidden px-4 py-8 md:px-6"
    >
      <div className="from-background via-violet-deep/10 to-background pointer-events-none absolute inset-0 bg-linear-to-b" />

      <div className="relative z-10 flex w-full max-w-6xl flex-col gap-8">
        <SectionHeader
          index="02"
          label={t("formation.sectionLabel")}
          title={t("formation.title")}
          titleHighlight={t("formation.school")}
          accentColor="violet"
        />

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
          <Card className="border-violet/30 space-y-4 rounded-lg p-6 md:order-2">
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

            <p className="text-secondary-foreground text-base leading-relaxed">
              {t("formation.description")}{" "}
              <span className="text-violet-foreground font-medium">{t("formation.quality1")}</span>{" "}
              {t("formation.and")}{" "}
              <span className="text-violet-foreground font-medium">{t("formation.quality2")}</span>{" "}
              {t("formation.forCode")}
            </p>

            <div className="flex flex-wrap gap-2">
              {FORMATION_SKILLS.map((skill) => (
                <SkillBadge
                  key={skill}
                  label={skill}
                  colorClass="bg-violet-muted text-violet-foreground border-violet/30"
                />
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

      <div className="absolute right-0 bottom-4 left-0 flex justify-center">
        <SectionChevron targetId="experience" label={t("chevrons.experience")} />
      </div>
    </section>
  );
};

export default FormationSection;

