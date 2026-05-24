import { Card } from "@/components/ui/cards/Card";
import { ReturnButton } from "@/components/ui/buttons/ReturnButton";
import { CONTEXT_COLORS, REALISATIONS } from "@/constants/realisations";
import { findSkillBySlug } from "@/constants/skills";
import { useI18n } from "@/i18n";
import {
  type LucideIcon,
  BookOpen,
  Eye,
  Lightbulb,
  MessageSquare,
  Target,
  TrendingUp,
} from "lucide-react";
import { memo, useMemo } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

// --- Detail section block ---

interface DetailBlockProps {
  readonly icon: LucideIcon;
  readonly title: string;
  readonly content: string;
  readonly accentColor?: string;
}

const DetailBlock = memo(
  ({ icon: Icon, title, content, accentColor = "primary" }: DetailBlockProps) => (
    <Card className={`rounded-xl p-6 border-${accentColor}/15 space-y-3`}>
      <div className="flex items-center gap-3">
        <div className={`rounded-lg p-2 bg-${accentColor}/10`}>
          <Icon className={`h-5 w-5 text-${accentColor}`} aria-hidden="true" />
        </div>
        <h2 className="text-foreground font-semibold">{title}</h2>
      </div>
      <p className="text-muted-foreground leading-relaxed">{content}</p>
    </Card>
  ),
);

DetailBlock.displayName = "DetailBlock";

// --- Slug to i18n key mapping ---

const SLUG_TO_KEY: Record<string, string> = {
  empathie: "empathy",
  resilience: "resilience",
  "gestion-priorites": "priorities",
  "travail-equipe": "teamwork",
  pedagogie: "pedagogy",
  "angular-typescript": "angular",
  "nestjs-nodejs": "nestjs",
  "bases-de-donnees": "database",
  "cicd-devops": "devops",
  react: "react",
};

// --- Main page ---

const CompetenceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useI18n();

  const skill = useMemo(() => (slug ? findSkillBySlug(slug) : undefined), [slug]);

  const i18nKey = slug ? SLUG_TO_KEY[slug] : undefined;

  // Find all realisations that reference this skill
  const linkedRealisations = useMemo(
    () => (slug ? REALISATIONS.filter((r) => r.linkedSkills.includes(slug)) : []),
    [slug],
  );

  // Redirect to overview if skill not found
  if (!skill || !i18nKey) {
    return <Navigate to="/competences" replace />;
  }

  const Icon = skill.icon;
  const base = `competences.skills.${i18nKey}`;

  return (
    <section className="section-container space-y-8 pt-10">
      {/* Back link */}
      <ReturnButton to="/competences" label={t("competences.backToList")} />

      {/* Header */}
      <div className="flex items-center gap-4">
        <div className={`rounded-xl p-3 ${skill.type === "human" ? "bg-cyan/10" : "bg-orange/10"}`}>
          <Icon
            className={`h-8 w-8 ${skill.type === "human" ? "text-cyan" : "text-orange"}`}
            aria-hidden="true"
          />
        </div>
        <div>
          <p className="text-muted-foreground font-mono text-xs tracking-widest uppercase">
            {skill.type === "human" ? t("competences.humanTitle") : t("competences.technicalTitle")}
          </p>
          <h1 className="text-glow-primary text-3xl font-bold sm:text-4xl">{t(skill.titleKey)}</h1>
        </div>
      </div>

      {/* Detail blocks */}
      <div className="grid gap-6">
        <DetailBlock
          icon={BookOpen}
          title={t("competences.detail.definitionTitle")}
          content={t(`${base}.definition`)}
          accentColor="primary"
        />
        <DetailBlock
          icon={Target}
          title={t("competences.detail.proofsTitle")}
          content={t(`${base}.proofs`)}
          accentColor={skill.type === "human" ? "cyan" : "orange"}
        />
        <DetailBlock
          icon={Eye}
          title={t("competences.detail.selfCritiqueTitle")}
          content={t(`${base}.selfCritique`)}
          accentColor="violet-foreground"
        />
        <DetailBlock
          icon={MessageSquare}
          title={t("competences.detail.hindsightTitle")}
          content={t(`${base}.hindsight`)}
          accentColor="primary"
        />
        <DetailBlock
          icon={TrendingUp}
          title={t("competences.detail.evolutionTitle")}
          content={t(`${base}.evolution`)}
          accentColor={skill.type === "human" ? "cyan" : "orange"}
        />
      </div>

      {/* Linked realisations — bidirectional navigation */}
      <div>
        <div className="mb-4 flex items-center gap-3">
          <div className="bg-primary h-2 w-2 rounded-full" aria-hidden="true" />
          <Lightbulb className="text-primary h-5 w-5" aria-hidden="true" />
          <h2 className="text-foreground font-mono font-semibold">
            {t("competences.detail.linkedRealisationsTitle")}
          </h2>
          <div className="bg-border h-px flex-1" aria-hidden="true" />
        </div>
        {linkedRealisations.length > 0 ? (
          <div className="flex flex-wrap gap-3">
            {linkedRealisations.map((r) => {
              const RIcon = r.icon;
              const color = CONTEXT_COLORS[r.context];
              return (
                <Link key={r.slug} to={`/realisations/${r.slug}`} className="group">
                  <Card
                    className={`rounded-lg px-4 py-2 border-${color}/10 flex items-center gap-2 hover:border-${color}/30 transition-all duration-200`}
                    focusable={false}
                  >
                    <RIcon
                      className={`text-muted-foreground h-4 w-4 group-hover:text-${color} transition-colors`}
                      aria-hidden="true"
                    />
                    <span
                      className={`text-muted-foreground font-mono text-sm group-hover:text-${color} transition-colors`}
                    >
                      {t(r.titleKey)}
                    </span>
                  </Card>
                </Link>
              );
            })}
          </div>
        ) : (
          <p className="text-muted-foreground text-sm italic">
            {t("competences.detail.noLinkedRealisations")}
          </p>
        )}
      </div>
    </section>
  );
};

export default CompetenceDetail;
