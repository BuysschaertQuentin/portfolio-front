import profileImg from "@/assets/photo_profil.jpg";
import { HERO_CORE_STACK, HERO_SECONDARY_STACK } from "@/constants/hero";
import { PERSONAL } from "@/constants/personal";
import { useI18n } from "@/i18n";
import { Download } from "lucide-react";
import SectionChevron from "./ui/navigation/SectionChevron";
import { BentoTile } from "./ui/tiles/BentoTile";
import { Button } from "./ui/buttons/Button";
import { Card } from "./ui/cards/Card";
import { TechBadge } from "./ui/badges/TechBadge";

const HeroSection = () => {
  const { t } = useI18n();

  return (
    <section
      id="hero"
      className="relative flex h-full w-full shrink-0 snap-center snap-always flex-col justify-between overflow-hidden pt-8 md:pt-12"
    >
      <div className="from-secondary/40 to-background absolute inset-0 bg-linear-to-b" />

      {/*
        Use h-0 + min-h-full trick: the flex-1 container fills remaining height
        without ever triggering overflow. overflow-hidden prevents scrollbar.
      */}
      <div className="relative z-10 flex flex-1 flex-col overflow-hidden">
        <div className="flex flex-1 items-center overflow-hidden px-4 py-3 md:px-6">
          {/* ── Bento Grid ── */}
          <div className="mx-auto grid w-full max-w-[1100px] grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-5 lg:grid-rows-[1fr_1fr_auto]">
            {/* ── Presentation tile (3 cols × 2 rows) ── */}
            <Card className="border-primary/20 bg-background/60 flex flex-col justify-center rounded-xl p-5 backdrop-blur-md sm:p-6 md:col-span-2 md:p-8 lg:col-span-3 lg:row-span-2">
              <div className="space-y-4">
                {/* Identity */}
                <div className="flex items-center gap-3">
                  <img
                    src={profileImg}
                    alt={PERSONAL.fullName}
                    className="border-primary/40 h-12 w-12 rounded-full border-2 object-cover shadow-[0_0_12px_hsla(var(--primary)/0.2)] sm:h-14 sm:w-14"
                    width={56}
                    height={56}
                    fetchPriority="high"
                  />
                  <div>
                    <span className="text-foreground block font-semibold">{PERSONAL.fullName}</span>
                    <span className="text-primary font-mono text-[10px] tracking-widest uppercase">
                      {t("hero.subtitle")}
                    </span>
                  </div>
                </div>

                {/* Headline */}
                <div>
                  <h1 className="text-glow-primary mb-2 text-2xl leading-tight font-bold sm:text-3xl lg:text-4xl">
                    {t("hero.title")}{" "}
                    <span className="text-primary">{t("hero.titleHighlight")}</span>
                  </h1>
                  <p className="text-muted-foreground max-w-lg text-sm leading-relaxed sm:text-base">
                    {t("hero.description")}{" "}
                    <span className="text-foreground font-medium">{t("hero.quality1")}</span>,{" "}
                    <span className="text-foreground font-medium">{t("hero.quality2")}</span>{" "}
                    {t("hero.and")}{" "}
                    <span className="text-foreground font-medium">{t("hero.quality3")}</span>.
                  </p>
                </div>

                {/* CTAs */}
                <div className="flex gap-3 pt-1">
                  <Button href={PERSONAL.cvPath} download variant="primary">
                    <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                    {t("hero.downloadCv")}
                  </Button>
                </div>
              </div>
            </Card>

            {/* ── Core stack tile (2 cols × 2 rows) — visible impact ── */}
            <Card className="border-primary/30 bg-primary/5 flex flex-col gap-3 rounded-xl p-4 md:col-span-2 lg:col-span-2 lg:row-span-2">
              <h3 className="text-primary font-mono text-[10px] tracking-widest uppercase">
                {t("hero.coreStackLabel")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {HERO_CORE_STACK.map((name) => (
                  <TechBadge key={name} name={name} />
                ))}
              </div>
            </Card>

            {/* ── Secondary stack tile (5 cols × 1 row) ── */}
            <BentoTile
              className="border-border/30 bg-background/40 rounded-xl md:col-span-2 lg:col-span-5"
              title={t("hero.secondaryStackLabel")}
              techNames={HERO_SECONDARY_STACK}
            />
          </div>
        </div>
      </div>

      <SectionChevron targetId="past" label={t("chevrons.past")} title={t("hero.discoverPath")} />
    </section>
  );
};

export default HeroSection;
