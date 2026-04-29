import { Card } from "@/components/ui/cards/Card";
import { SKILLS, type Skill, type SkillType } from "@/constants/skills";
import { useI18n } from "@/i18n";
import { memo, useMemo } from "react";
import { Link } from "react-router-dom";

// --- Skill card ---

import { SkillCardProps, SkillGroupProps } from "@/types/competences";

const SkillCard = memo(({ skill, t }: SkillCardProps) => {
  const Icon = skill.icon;

  return (
    <Link to={`/competences/${skill.slug}`} className="group block" aria-label={t(skill.titleKey)}>
      <Card className="border-primary/10 hover:border-primary/30 space-y-3 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_hsla(var(--primary)/0.1)]">
        <div className="flex items-center gap-3">
          <div className="bg-secondary group-hover:bg-primary/10 rounded-lg p-2 transition-colors">
            <Icon
              className="text-muted-foreground group-hover:text-primary h-5 w-5 transition-colors"
              aria-hidden="true"
            />
          </div>
          <h3 className="text-foreground group-hover:text-primary text-base font-semibold transition-colors">
            {t(skill.titleKey)}
          </h3>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">{t(skill.shortDescKey)}</p>
      </Card>
    </Link>
  );
});

SkillCard.displayName = "SkillCard";

// --- Skill group ---

const SkillGroup = memo(({ title, skills, dotColor, t }: SkillGroupProps) => (
  <div className="mb-16 last:mb-0">
    <div className="mb-8 flex items-center gap-3">
      <div className={`h-2 w-2 rounded-full ${dotColor}`} aria-hidden="true" />
      <h2 className="text-foreground font-mono font-semibold">{title}</h2>
      <div className="bg-border h-px flex-1" aria-hidden="true" />
    </div>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
    <section className="section-container pt-10">
      <div className="mb-16 text-center">
        <p className="text-primary mb-2 font-mono text-sm tracking-widest uppercase">
          {t("competences.subtitle")}
        </p>
        <h1 className="text-glow-primary text-3xl font-bold sm:text-4xl">
          {t("competences.title")}
        </h1>
      </div>

      <SkillGroup title={t("competences.humanTitle")} skills={human} dotColor="bg-cyan" t={t} />
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
