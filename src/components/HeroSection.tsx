import heroImg from "@/assets/nouvelles_opportunite.png";
import profileImg from "@/assets/photo_profil.jpg";
import { PERSONAL } from "@/constants/personal";
import { useI18n } from "@/i18n";
import { Download } from "lucide-react";
import SectionChevron from "./SectionChevron";
import { Button } from "./ui/Button";

const HeroSection = () => {
  const { t } = useI18n();

  return (
    <section
      id="hero"
      className="relative flex h-full w-full shrink-0 snap-center snap-always flex-col justify-between overflow-hidden pt-12 md:pt-16"
    >
      {/* Subtle gradient background */}
      <div className="from-secondary/50 to-background absolute inset-0 bg-linear-to-b" />

      <div className="section-container scrollbar-styled mask-bottom-fade relative z-10 flex flex-1 flex-col justify-center overflow-x-hidden overflow-y-auto p-2">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="space-y-6 text-center md:text-left">
            {/* Profile photo + name */}
            <div className="flex items-center justify-center gap-4 md:justify-start">
              <img
                src={profileImg}
                alt={PERSONAL.fullName}
                className="border-primary/50 h-16 w-16 rounded-full border-2 object-cover shadow-[0_0_15px_hsla(var(--primary)/0.2)]"
                width={64}
                height={64}
                fetchPriority="high"
              />
              <span className="text-foreground text-lg font-semibold">{PERSONAL.fullName}</span>
            </div>

            <p className="text-primary font-mono text-sm tracking-widest uppercase">
              {t("hero.subtitle")}
            </p>
            <h1 className="text-glow-primary text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
              {t("hero.title")} <span className="text-primary">{t("hero.titleHighlight")}</span>
            </h1>
            <p className="text-muted-foreground max-w-lg text-lg leading-relaxed">
              {t("hero.description")}{" "}
              <span className="text-foreground font-medium">{t("hero.quality1")}</span>,{" "}
              <span className="text-foreground font-medium">{t("hero.quality2")}</span>{" "}
              {t("hero.and")}{" "}
              <span className="text-foreground font-medium">{t("hero.quality3")}</span>.
            </p>
            <div className="flex justify-center gap-4 md:justify-start">
              <Button href={PERSONAL.cvPath} download variant="primary">
                <Download className="h-4 w-4" aria-hidden="true" />
                {t("hero.downloadCv")}
              </Button>
              <Button href="#past" variant="secondary">
                {t("hero.discoverPath")}
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={heroImg}
              alt={t("hero.heroAlt")}
              className="pixel-image animate-float w-full max-w-md drop-shadow-[0_0_20px_hsla(var(--primary)/0.2)]"
              width={448}
              height={448}
              fetchPriority="high"
            />
          </div>
        </div>
      </div>

      <SectionChevron targetId="past" label="Mes origines" />
    </section>
  );
};

export default HeroSection;
