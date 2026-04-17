import { Card } from "@/components/ui/Card";
import {
    CONTEXT_COLORS,
    findRealisationBySlug,
} from "@/constants/realisations";
import { findSkillBySlug } from "@/constants/skills";
import { useI18n } from "@/i18n";
import {
    type LucideIcon,
    BookOpen,
    ClipboardList,
    Eye,
    Lightbulb,
    Target,
    TrendingUp,
} from "lucide-react";
import { memo, useMemo } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

// --- Detail block ---

interface DetailBlockProps {
  readonly icon: LucideIcon;
  readonly title: string;
  readonly content: string;
  readonly accentColor?: string;
}

const DetailBlock = memo(
  ({
    icon: Icon,
    title,
    content,
    accentColor = "primary",
  }: DetailBlockProps) => (
    <Card className={`rounded-xl p-6 border-${accentColor}/15 space-y-3`}>
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-lg bg-${accentColor}/10`}>
          <Icon className={`w-5 h-5 text-${accentColor}`} aria-hidden="true" />
        </div>
        <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      </div>
      <p className="text-muted-foreground leading-relaxed">{content}</p>
    </Card>
  ),
);

DetailBlock.displayName = "DetailBlock";

// --- Slug to i18n key mapping ---

const SLUG_TO_KEY: Record<string, string> = {
  "application-orange": "orange",
  portfolio: "portfolio",
  "bot-discord": "bot",
  "projet-formation-1": "formation1",
  "projet-formation-2": "formation2",
};

// --- Main page ---

const RealisationDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useI18n();

  const realisation = useMemo(
    () => (slug ? findRealisationBySlug(slug) : undefined),
    [slug],
  );

  const i18nKey = slug ? SLUG_TO_KEY[slug] : undefined;

  if (!realisation || !i18nKey) {
    return <Navigate to="/realisations" replace />;
  }

  const Icon = realisation.icon;
  const color = CONTEXT_COLORS[realisation.context];
  const base = `realisations.items.${i18nKey}`;

  const contextKey =
    realisation.context === "pro"
      ? "realisations.contextPro"
      : realisation.context === "perso"
        ? "realisations.contextPerso"
        : "realisations.contextFormation";

  return (
    <section className="section-container pt-10 space-y-8">
      {/* Back link */}
      <Link
        to="/realisations"
        className="inline-flex items-center text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
      >
        {t("realisations.backToList")}
      </Link>

      {/* Header */}
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-xl bg-${color}/10`}>
          <Icon className={`w-8 h-8 text-${color}`} aria-hidden="true" />
        </div>
        <div>
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
            {t(contextKey)}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-glow-primary">
            {t(realisation.titleKey)}
          </h1>
        </div>
      </div>

      {/* Detail blocks */}
      <div className="grid gap-6">
        <DetailBlock
          icon={BookOpen}
          title={t("realisations.detail.definitionTitle")}
          content={t(`${base}.definition`)}
          accentColor="primary"
        />
        <DetailBlock
          icon={Target}
          title={t("realisations.detail.framingTitle")}
          content={t(`${base}.framing`)}
          accentColor={color}
        />
        <DetailBlock
          icon={ClipboardList}
          title={t("realisations.detail.actionTitle")}
          content={t(`${base}.action`)}
          accentColor="cyan"
        />
        <DetailBlock
          icon={TrendingUp}
          title={t("realisations.detail.resultsTitle")}
          content={t(`${base}.results`)}
          accentColor={color}
        />
        <DetailBlock
          icon={Eye}
          title={t("realisations.detail.criticalTitle")}
          content={t(`${base}.critical`)}
          accentColor="violet-foreground"
        />
      </div>

      {/* Linked skills */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
          <Lightbulb className="w-5 h-5 text-primary" aria-hidden="true" />
          <h2 className="text-lg font-mono font-semibold text-foreground">
            {t("realisations.detail.linkedSkillsTitle")}
          </h2>
          <div className="flex-1 h-px bg-border" aria-hidden="true" />
        </div>
        <div className="flex flex-wrap gap-3">
          {realisation.linkedSkills.map((skillSlug) => {
            const skill = findSkillBySlug(skillSlug);
            if (!skill) return null;
            const SkillIcon = skill.icon;
            return (
              <Link
                key={skillSlug}
                to={`/competences/${skillSlug}`}
                className="group"
              >
                <Card
                  className="rounded-lg px-4 py-2 border-primary/10 flex items-center gap-2
                    hover:border-primary/30 transition-all duration-200"
                  focusable={false}
                >
                  <SkillIcon
                    className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-mono text-muted-foreground group-hover:text-primary transition-colors">
                    {t(skill.titleKey)}
                  </span>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RealisationDetail;
