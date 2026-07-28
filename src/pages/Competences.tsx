import { Card } from "@/components/ui/cards/Card";
import { SKILLS, type Skill } from "@/constants/skills";
import { useI18n } from "@/i18n";
import { memo, useMemo, useState } from "react";
import { Link } from "react-router-dom";

// --- Skill card ---

import { SkillCardProps, SkillGroupProps } from "@/types/competences";

const SkillCard = memo(({ skill, t }: SkillCardProps) => {
  const { locale } = useI18n();
  const Icon = skill.icon;
  const CustomIcon = skill.customIcon;

  const title = skill.titleKey ? t(skill.titleKey) : skill.techName || "";
  const desc = skill.shortDescKey
    ? t(skill.shortDescKey)
    : skill.techDescription
      ? skill.techDescription[locale]
      : "";

  const isSpecialty = skill.specialty;
  const isWish = skill.wish;
  const isClickable = skill.clickable !== false;

  const cardContent = (
    <Card className={`border-primary/10 h-full space-y-3 rounded-xl p-6 relative ${
      isClickable
        ? "hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_hsla(var(--primary)/0.1)]"
        : "opacity-75 shadow-none"
    }`}>
      {isSpecialty && (
        <div className="absolute top-4 right-4 flex items-center justify-center" title={t("competences.legend.specialty")}>
          <svg
            className="h-5 w-5 text-amber-400 fill-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.6)] animate-pulse"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </div>
      )}
      {isWish && (
        <div className="absolute top-4 right-4 flex items-center justify-center" title={t("competences.legend.wish")}>
          <svg
            className="h-5 w-5 text-red-500 fill-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)] animate-pulse"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </div>
      )}
      <div className="flex items-center gap-3">
        <div className={`flex items-center justify-center rounded-lg p-2 transition-colors ${
          isClickable
            ? "bg-secondary group-hover:bg-primary/10"
            : "bg-secondary/50"
        }`}>
          {Icon && (
            <Icon
              className={`h-5 w-5 transition-colors ${
                isClickable ? "text-muted-foreground group-hover:text-primary" : "text-muted-foreground/60"
              }`}
              aria-hidden="true"
            />
          )}
          {skill.logoUrl && (
            <img
              src={skill.logoUrl}
              alt={title}
              className={`h-5 w-5 object-contain transition-opacity ${
                isClickable ? "opacity-70 group-hover:opacity-100" : "opacity-50"
              }`}
            />
          )}
          {CustomIcon && (
            <CustomIcon
              className={`h-5 w-5 transition-colors ${
                isClickable ? "text-muted-foreground group-hover:text-primary" : "text-muted-foreground/60"
              }`}
              aria-hidden="true"
            />
          )}
        </div>
        <h3 className={`text-base font-semibold transition-colors ${
          isClickable ? "text-foreground group-hover:text-primary" : "text-muted-foreground"
        }`}>
          {title}
        </h3>
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
    </Card>
  );

  if (isClickable) {
    return (
      <Link to={`/competences/${skill.slug}`} className="group block" aria-label={title}>
        {cardContent}
      </Link>
    );
  }

  return (
    <div className="block" aria-label={title}>
      {cardContent}
    </div>
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

const CATEGORY_ORDER = ["front-end", "back-end", "devops", "cloud", "ia", "transversale"] as const;

const CATEGORY_COLORS: Record<string, string> = {
  "front-end": "bg-primary",
  "back-end": "bg-orange",
  devops: "bg-violet",
  cloud: "bg-sky-500",
  ia: "bg-purple-500",
  transversale: "bg-emerald-500",
};

const Competences = () => {
  const { t } = useI18n();
  const [filterMode, setFilterMode] = useState<"all" | "specialties" | "wishes">("all");

  const { human, technicalCategories } = useMemo(() => {
    const humanList: Skill[] = [];
    const techGrouped: Record<string, Skill[]> = {
      "front-end": [],
      "back-end": [],
      devops: [],
      cloud: [],
      ia: [],
      transversale: [],
    };

    for (const skill of SKILLS) {
      if (filterMode === "specialties" && !skill.specialty) continue;
      if (filterMode === "wishes" && !skill.wish) continue;

      if (skill.type === "human") {
        humanList.push(skill);
      } else if (skill.type === "technical" && skill.category) {
        if (!techGrouped[skill.category]) {
          techGrouped[skill.category] = [];
        }
        techGrouped[skill.category].push(skill);
      }
    }

    return { human: humanList, technicalCategories: techGrouped };
  }, [filterMode]);

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

      {/* Legend & Filters */}
      <div className="mb-12 flex flex-col items-center gap-3">
        <p className="text-muted-foreground/60 text-xs font-mono uppercase tracking-wider">
          {t("competences.legend.filterTitle") || "Filtrer par tag :"}
        </p>
        <div className="glass-card flex flex-wrap items-center justify-center gap-4 rounded-xl p-2 max-w-xl mx-auto border-primary/20">
          <button
            onClick={() => setFilterMode(prev => prev === "specialties" ? "all" : "specialties")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border font-mono text-sm transition-all duration-300 cursor-pointer focus:outline-none ${
              filterMode === "specialties"
                ? "bg-amber-500/15 border-amber-500/40 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.15)]"
                : "border-transparent text-muted-foreground hover:text-foreground hover:bg-secondary/40"
            }`}
            aria-pressed={filterMode === "specialties"}
          >
            <svg
              className={`h-4 w-4 text-amber-400 fill-amber-400 ${filterMode === "specialties" ? "animate-pulse" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span>{t("competences.legend.specialty")}</span>
          </button>

          <div className="w-px h-6 bg-border" aria-hidden="true" />

          <button
            onClick={() => setFilterMode(prev => prev === "wishes" ? "all" : "wishes")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border font-mono text-sm transition-all duration-300 cursor-pointer focus:outline-none ${
              filterMode === "wishes"
                ? "bg-red-500/15 border-red-500/40 text-red-300 shadow-[0_0_15px_rgba(239,68,68,0.15)]"
                : "border-transparent text-muted-foreground hover:text-foreground hover:bg-secondary/40"
            }`}
            aria-pressed={filterMode === "wishes"}
          >
            <svg
              className={`h-4 w-4 text-red-500 fill-red-500 ${filterMode === "wishes" ? "animate-pulse" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            <span>{t("competences.legend.wish")}</span>
          </button>
        </div>
      </div>

      {human.length > 0 && (
        <SkillGroup title={t("competences.humanTitle")} skills={human} dotColor="bg-cyan" t={t} />
      )}

      {CATEGORY_ORDER.map((category) => {
        const skills = technicalCategories[category];
        if (!skills || skills.length === 0) return null;
        return (
          <SkillGroup
            key={category}
            title={t(`competences.categories.${category}`)}
            skills={skills}
            dotColor={CATEGORY_COLORS[category] || "bg-orange"}
            t={t}
          />
        );
      })}
    </section>
  );
};

export default Competences;
