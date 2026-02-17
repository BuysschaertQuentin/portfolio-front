import orangeImg from "@/assets/developpeur_alternance_orange.png";
import { useI18n } from "@/i18n";

const ExperienceSection = () => {
  const { t } = useI18n();

  const stack = [
    "Angular",
    "NestJS",
    "TypeScript",
    "PostgreSQL",
    "Git",
    "Docker",
  ];

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
          <div className="glass-card rounded-xl p-8 border-orange/20 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-orange animate-pulse" />
              <span className="text-sm text-muted-foreground font-mono">
                {t("experience.status")}
              </span>
            </div>
            <p className="text-secondary-foreground leading-relaxed">
              {t("experience.description")}
            </p>
            <div className="flex flex-wrap gap-2">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono rounded-full bg-orange-muted text-orange-foreground border border-orange/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
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
