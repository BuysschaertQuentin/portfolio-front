import profileImg from "@/assets/photo_profil.jpg";
import { HERO_CORE_STACK, HERO_SECONDARY_STACK } from "@/constants/hero";
import { PERSONAL } from "@/constants/personal";
import { useI18n } from "@/i18n";
import { Download } from "lucide-react";
import { TechBadge } from "./ui/badges/TechBadge";
import { Button } from "./ui/buttons/Button";
import { Card } from "./ui/cards/Card";
import SectionChevron from "./ui/navigation/SectionChevron";
import { BentoTile } from "./ui/tiles/BentoTile";

const HeroSection = () => {
  const { t } = useI18n();

  return (
    <section
      id="hero"
      className="relative flex h-full w-full shrink-0 snap-center snap-always flex-col items-center justify-center overflow-hidden px-4 py-8 md:px-6"
    >
      {/* Background Gradient */}
      <div className="from-secondary/40 to-background absolute inset-0 bg-linear-to-b" />

      {/* Main Content Container */}
      <div className="relative z-10 flex w-full max-w-6xl flex-col gap-4">
        {/* Top Section: Presentation & Core Stack */}
        <div className="flex flex-col gap-4 lg:flex-row">
          {/* Presentation Card */}
          <Card className="flex flex-1 flex-col justify-center rounded-lg p-6 md:p-8 lg:w-3/5">
            <div className="space-y-6">
              {/* Identity */}
              <div className="flex items-center gap-4">
                <img
                  src={profileImg}
                  alt={PERSONAL.fullName}
                  className="border-primary/40 h-16 w-16 rounded-full border-2 object-cover shadow-[0_0_15px_hsla(var(--primary)/0.2)]"
                  fetchPriority="high"
                />
                <div>
                  <span className="text-foreground block font-semibold">
                    {PERSONAL.fullName}
                  </span>
                  <span className="text-primary font-mono text-xs tracking-widest uppercase">
                    {t("hero.subtitle")}
                  </span>
                </div>
              </div>

              {/* Headline */}
              <div className="space-y-3">
                <h1 className="text-glow-primary text-3xl leading-tight font-bold sm:text-4xl lg:text-4xl">
                  {t("hero.title")} <span className="text-primary">{t("hero.titleHighlight")}</span>
                </h1>
                <p className="text-muted-foreground max-w-xl text-base leading-relaxed">
                  {t("hero.description")}{" "}
                  <span className="text-foreground font-medium">{t("hero.quality1")}</span>,{" "}
                  <span className="text-foreground font-medium">{t("hero.quality2")}</span>{" "}
                  {t("hero.and")}{" "}
                  <span className="text-foreground font-medium">{t("hero.quality3")}</span>.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex gap-4">
                <Button href={PERSONAL.cvPath} download variant="primary">
                  <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                  {t("hero.downloadCv")}
                </Button>
              </div>
            </div>
          </Card>

          {/* Core Stack Card */}
          <Card className="flex flex-col gap-4 rounded-lg p-6 lg:w-2/5">
            <h3 className="text-primary font-mono text-xs tracking-widest uppercase">
              {t("hero.coreStackLabel")}
            </h3>
            <div className="flex flex-wrap gap-2">
              {HERO_CORE_STACK.map((name) => (
                <TechBadge key={name} name={name} />
              ))}
            </div>
          </Card>
        </div>

        {/* Bottom Section: Secondary Stack */}
        <BentoTile
          className="w-full rounded-lg"
          title={t("hero.secondaryStackLabel")}
          techNames={HERO_SECONDARY_STACK}
        />
      </div>

      {/* Navigation Chevron */}
      <div className="absolute right-0 bottom-4 left-0 flex justify-center">
        <SectionChevron targetId="past" label={t("chevrons.past")} title={t("hero.discoverPath")} />
      </div>
    </section>
  );
};

export default HeroSection;
