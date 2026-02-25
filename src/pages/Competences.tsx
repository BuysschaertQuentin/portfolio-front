import { Card } from "@/components/ui/Card";
import { SKILLS, type Skill, type SkillType } from "@/constants/skills";
import { useI18n } from "@/i18n";
import { memo, useMemo } from "react";
import { Link } from "react-router-dom";

// --- Skill card ---

interface SkillCardProps {
  readonly skill: Skill;
  readonly t: (key: string) => string;
}

const SkillCard = memo(({ skill, t }: SkillCardProps) => {
  const Icon = skill.icon;

  return (
    <Link
      to={`/competences/${skill.slug}`}
      className="block group"
      aria-label={t(skill.titleKey)}
    >
      <Card className="rounded-xl p-6 border-primary/10 space-y-3 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_hsla(var(--primary)/0.1)]">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors">
            <Icon
              className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors"
              aria-hidden="true"
            />
          </div>
          <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
            {t(skill.titleKey)}
          </h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {t(skill.shortDescKey)}
        </p>
      </Card>
    </Link>
  );
});

SkillCard.displayName = "SkillCard";

// --- Skill group ---

interface SkillGroupProps {
  readonly title: string;
  readonly skills: readonly Skill[];
  readonly dotColor: string;
  readonly t: (key: string) => string;
}

const SkillGroup = memo(({ title, skills, dotColor, t }: SkillGroupProps) => (
  <div className="mb-16 last:mb-0">
    <div className="flex items-center gap-3 mb-8">
      <div className={`w-2 h-2 rounded-full ${dotColor}`} aria-hidden="true" />
      <h2 className="text-lg font-mono font-semibold text-foreground">
        {title}
      </h2>
      <div className="flex-1 h-px bg-border" aria-hidden="true" />
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((skill) => (
        <SkillCard key={skill.slug} skill={skill} t={t} />
      ))}
    </div>
  </div>
));

SkillGroup.displayName = "SkillGroup";

// --- Main page ---

const Competences = () => {
  const { t } = useI18n();

  const { human, technical } = useMemo(() => {
    const grouped: Record<SkillType, Skill[]> = { human: [], technical: [] };
    for (const skill of SKILLS) {
      grouped[skill.type].push(skill);
    }
    return grouped;
  }, []);

  return (
    <section className="section-container pt-24">
      <div className="text-center mb-16">
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">
          {t("competences.subtitle")}
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-glow-primary">
          {t("competences.title")}
        </h1>
      </div>

      <SkillGroup
        title={t("competences.humanTitle")}
        skills={human}
        dotColor="bg-cyan"
        t={t}
      />
      <SkillGroup
        title={t("competences.technicalTitle")}
        skills={technical}
        dotColor="bg-orange"
        t={t}
      />
    </section>
  );
};

export default Competences;
