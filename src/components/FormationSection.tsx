import bootcampImg from "@/assets/bootcamp_o_clock.png";
import oclockLogo from "@/assets/oclock.png";
import { EXTERNAL_LINKS } from "@/constants/personal";
import { useI18n } from "@/i18n";
import { ExternalLink } from "./a11y/ExternalLink";
import { Card } from "./ui/Card";

const SKILLS = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Node.js",
  "SQL",
  "API REST",
  "Git",
  "TypeScript",
  "GraphQL",
  "Express",
] as const;

const FormationSection = () => {
  const { t } = useI18n();

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
          <Card className="rounded-xl p-8 border-violet/30 space-y-6 md:order-2">
            {/* Logo + school name + link */}
            <div className="flex items-center gap-4">
              <ExternalLink
                href={EXTERNAL_LINKS.oclock}
                aria-label={t("formation.school")}
              >
                <img
                  src={oclockLogo}
                  alt=""
                  className="w-10 h-10 object-contain"
                  width={40}
                  height={40}
                  loading="lazy"
                />
              </ExternalLink>
              <div>
                <ExternalLink
                  href={EXTERNAL_LINKS.oclock}
                  className="text-foreground font-semibold hover:text-violet-foreground transition-colors"
                >
                  {t("formation.school")}
                </ExternalLink>
                <p className="text-xs text-muted-foreground font-mono">
                  {t("formation.duration")}
                </p>
              </div>
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
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs font-mono rounded-full bg-violet-muted text-violet-foreground border border-violet/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FormationSection;
