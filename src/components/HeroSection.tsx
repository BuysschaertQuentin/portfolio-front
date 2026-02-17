import heroImg from "@/assets/nouvelles_opportunite.png";
import { useI18n } from "@/i18n";
import { Download } from "lucide-react";

const HeroSection = () => {
  const { t } = useI18n();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-linear-to-b from-secondary/50 to-background" />

      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
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
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                <Download className="w-4 h-4" />
                {t("hero.downloadCv")}
              </a>
              <a
                href="#experience"
                className="inline-flex items-center px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors"
              >
                {t("hero.discoverPath")}
              </a>
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
