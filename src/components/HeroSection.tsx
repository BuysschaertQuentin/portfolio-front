import heroImg from "@/assets/nouvelles_opportunite.png";
import profileImg from "@/assets/photo_profil.jpg";
import { PERSONAL } from "@/constants/personal";
import { useI18n } from "@/i18n";
import { Download } from "lucide-react";
import { Button } from "./ui/Button";

const HeroSection = () => {
  const { t } = useI18n();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-linear-to-b from-secondary/50 to-background" />

      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            {/* Profile photo + name */}
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <img
                src={profileImg}
                alt={PERSONAL.fullName}
                className="w-16 h-16 rounded-full object-cover border-2 border-primary/50"
                width={64}
                height={64}
                fetchPriority="high"
              />
              <span className="text-lg font-semibold text-foreground">
                {PERSONAL.fullName}
              </span>
            </div>

            <p className="text-primary font-mono text-sm tracking-widest uppercase">
              {t("hero.subtitle")}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-glow-primary">
              {t("hero.title")}{" "}
              <span className="text-primary">{t("hero.titleHighlight")}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              {t("hero.description")}{" "}
              <span className="text-foreground font-medium">
                {t("hero.quality1")}
              </span>
              ,{" "}
              <span className="text-foreground font-medium">
                {t("hero.quality2")}
              </span>{" "}
              {t("hero.and")}{" "}
              <span className="text-foreground font-medium">
                {t("hero.quality3")}
              </span>
              .
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Button href={PERSONAL.cvPath} download variant="primary">
                <Download className="w-4 h-4" aria-hidden="true" />
                {t("hero.downloadCv")}
              </Button>
              <Button href="#experience" variant="secondary">
                {t("hero.discoverPath")}
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={heroImg}
              alt={t("hero.heroAlt")}
              className="pixel-image w-full max-w-md animate-float"
              width={448}
              height={448}
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
