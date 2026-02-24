import orangeImg from "@/assets/developpeur_alternance_orange.png";
import orangeLogo from "@/assets/orange.png";
import { useI18n } from "@/i18n";
import { Card } from "./ui/Card";

const STACK = [
  "Angular",
  "NestJS",
  "TypeScript",
  "PostgreSQL",
  "Git",
  "Docker",
] as const;

const ExperienceSection = () => {
  const { t } = useI18n();

  return (
    <section id="experience" className="relative">
      {/* Orange subtle top gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-orange-muted/50 to-background pointer-events-none" />

      <div className="section-container relative z-10">
        <p className="text-orange font-mono text-sm tracking-widest uppercase mb-2">
          {t("experience.sectionLabel")}
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-glow-orange">
          {t("experience.title")}{" "}
          <span className="text-orange">{t("experience.company")}</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Card className="rounded-xl p-8 border-orange/20 space-y-6">
            {/* Logo + company name */}
            <div className="flex items-center gap-4">
              <img
                src={orangeLogo}
                alt=""
                className="w-10 h-10 object-contain"
                width={40}
                height={40}
                loading="lazy"
              />
              <div>
                <span className="text-foreground font-semibold">
                  {t("experience.company")}
                </span>
                <p className="text-xs text-muted-foreground font-mono">
                  {t("experience.status")}
                </p>
              </div>
            </div>

            <p className="text-secondary-foreground leading-relaxed">
              {t("experience.description")}
            </p>
            <div className="flex flex-wrap gap-2">
              {STACK.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono rounded-full bg-orange-muted text-orange-foreground border border-orange/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>
          <div className="flex justify-center">
            <img
              src={orangeImg}
              alt={t("experience.imgAlt")}
              className="pixel-image w-full max-w-md"
              width={448}
              height={448}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
