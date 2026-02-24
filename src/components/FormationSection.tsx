import bootcampImg from "@/assets/bootcamp_o_clock.png";
import { useI18n } from "@/i18n";

const FormationSection = () => {
  const { t } = useI18n();

  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Node.js",
    "SQL",
    "API REST",
    "Git",
  ];

  return (
    <section id="formation" className="relative bg-violet-deep">
      <div className="absolute inset-0 bg-linear-to-b from-background via-violet-deep to-background pointer-events-none" />

      <div className="section-container relative z-10">
        <p className="text-violet-foreground font-mono text-sm tracking-widest uppercase mb-2">
          {t("formation.sectionLabel")}
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-glow-violet">
          {t("formation.title")}{" "}
          <span className="text-violet-foreground">
            {t("formation.school")}
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center md:order-1">
            <img
              src={bootcampImg}
              alt={t("formation.imgAlt")}
              className="pixel-image w-full max-w-md"
              width={448}
              height={448}
              loading="lazy"
            />
          </div>
          <div className="glass-card rounded-xl p-8 border-violet/30 space-y-6 md:order-2">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-violet-foreground animate-pulse" />
              <span className="text-sm text-muted-foreground font-mono">
                {t("formation.duration")}
              </span>
            </div>
            <p className="text-secondary-foreground leading-relaxed">
              {t("formation.description")}{" "}
              <span className="text-violet-foreground font-medium">
                {t("formation.quality1")}
              </span>{" "}
              {t("formation.and")}{" "}
              <span className="text-violet-foreground font-medium">
                {t("formation.quality2")}
              </span>{" "}
              {t("formation.forCode")}
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs font-mono rounded-full bg-violet-muted text-violet-foreground border border-violet/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormationSection;
