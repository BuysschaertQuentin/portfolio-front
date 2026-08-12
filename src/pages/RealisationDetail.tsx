import { Card } from "@/components/ui/cards/Card";
import { ReturnButton } from "@/components/ui/buttons/ReturnButton";
import { CONTEXT_COLORS, findRealisationBySlug } from "@/constants/realisations";
import { findSkillBySlug } from "@/constants/skills";
import { useI18n } from "@/i18n";
import { renderFormattedText } from "@/lib/formatText";
import {
  type LucideIcon,
  BookOpen,
  ClipboardList,
  Code2,
  Eye,
  Layers,
  Lightbulb,
  Target,
  TrendingUp,
} from "lucide-react";
import { memo, useMemo, useState } from "react";
import { Link, Navigate, useParams, useLocation } from "react-router-dom";

// --- Detail block ---

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
      <div className="text-muted-foreground leading-relaxed space-y-2">
        {renderFormattedText(content)}
      </div>
    </Card>
  ),
);

DetailBlock.displayName = "DetailBlock";

// --- Slug to i18n key mapping ---

const SLUG_TO_KEY: Record<string, string> = {
  "portail-rh": "portailRh",
  "repos-compensateurs": "reposComp",
  "app-mobile-competences": "mobileComp",
  "o-voyage": "ovoyage",
  portfolio: "portfolio",
};

// --- Portail RH Tabs Configuration ---

interface TabConfig {
  readonly id: string;
  readonly icon: LucideIcon;
  readonly accentColor: string;
  readonly isSituation?: boolean;
}

const PROJECT_TABS: Record<string, readonly TabConfig[]> = {
  "portail-rh": [
    { id: "project", icon: BookOpen, accentColor: "primary" },
    { id: "situation1", icon: Layers, accentColor: "cyan", isSituation: true },
    { id: "situation2", icon: Code2, accentColor: "orange", isSituation: true },
    { id: "situation3", icon: Target, accentColor: "violet-foreground", isSituation: true },
    { id: "situation4", icon: ClipboardList, accentColor: "primary", isSituation: true },
    { id: "situation5", icon: TrendingUp, accentColor: "cyan", isSituation: true },
    { id: "synthesis", icon: Eye, accentColor: "primary" },
  ],
  "repos-compensateurs": [
    { id: "project", icon: BookOpen, accentColor: "primary" },
    { id: "situation1", icon: Code2, accentColor: "cyan", isSituation: true },
    { id: "situation2", icon: Target, accentColor: "violet-foreground", isSituation: true },
    { id: "synthesis", icon: Eye, accentColor: "primary" },
  ],
  "app-mobile-competences": [
    { id: "project", icon: BookOpen, accentColor: "primary" },
    { id: "situation1", icon: Layers, accentColor: "cyan", isSituation: true },
    { id: "situation2", icon: Code2, accentColor: "orange", isSituation: true },
    { id: "situation3", icon: TrendingUp, accentColor: "violet-foreground", isSituation: true },
    { id: "synthesis", icon: Eye, accentColor: "primary" },
  ],
  "o-voyage": [
    { id: "project", icon: BookOpen, accentColor: "primary" },
    { id: "situation1", icon: Layers, accentColor: "cyan", isSituation: true },
    { id: "situation2", icon: Code2, accentColor: "orange", isSituation: true },
    { id: "situation3", icon: TrendingUp, accentColor: "violet-foreground", isSituation: true },
    { id: "synthesis", icon: Eye, accentColor: "primary" },
  ],
};

// --- Main page ---

const RealisationDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useI18n();
  const location = useLocation();
  const [activeTabId, setActiveTabId] = useState<string>("project");

  const realisation = useMemo(() => (slug ? findRealisationBySlug(slug) : undefined), [slug]);
  const i18nKey = slug ? SLUG_TO_KEY[slug] : undefined;

  const backTo = (location.state as { from?: string } | null)?.from ?? "/realisations";

  const backLabel =
    backTo === "/"
      ? t("notFound.backHome")
      : backTo.startsWith("/competences/")
        ? t("competences.backToList")
        : t("realisations.backToList");

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

  const activeTabs = slug ? PROJECT_TABS[slug] : undefined;
  const isTabbed = !!activeTabs;
  const currentTab = activeTabs ? (activeTabs.find((tab) => tab.id === activeTabId) ?? activeTabs[0]) : undefined;

  return (
    <section className="section-container space-y-8 pt-10">
      {/* Back link */}
      <ReturnButton to={backTo} label={backLabel} />

      {/* Header */}
      <div className="flex items-center gap-4">
        <div className={`rounded-xl p-3 bg-${color}/10`}>
          <Icon className={`h-8 w-8 text-${color}`} aria-hidden="true" />
        </div>
        <div>
          <p className="text-muted-foreground font-mono text-xs tracking-widest uppercase">
            {t(contextKey)}
          </p>
          <h1 className="text-glow-primary text-3xl font-bold sm:text-4xl">
            {t(realisation.titleKey)}
          </h1>
        </div>
      </div>

      {/* Tabbed view for tabbed projects */}
      {isTabbed && currentTab && activeTabs ? (
        <div className="space-y-6">
          {/* Tabs Navigation Bar */}
          <div className="flex flex-wrap gap-2 border-b border-border/40 pb-4">
            {activeTabs.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = tab.id === activeTabId;
              const label = t(`${base}.tabs.${tab.id}.label`);

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTabId(tab.id)}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 font-mono text-xs sm:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-primary/20 text-primary border border-primary/40 shadow-sm"
                      : "bg-secondary/40 text-muted-foreground hover:bg-secondary/80 hover:text-foreground border border-transparent"
                  }`}
                >
                  <TabIcon className="h-4 w-4" aria-hidden="true" />
                  <span>{label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Header */}
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
              {t(`${base}.tabs.${currentTab.id}.badge`)}
            </span>
            <h2 className="text-xl font-bold text-foreground sm:text-2xl">
              {t(`${base}.tabs.${currentTab.id}.title`)}
            </h2>
          </div>

          {/* Active Tab Content */}
          {currentTab.isSituation ? (
            <div className="grid gap-6">
              <DetailBlock
                icon={Target}
                title={t("realisations.detail.framingTitle")}
                content={t(`${base}.tabs.${currentTab.id}.framing`)}
                accentColor={color}
              />
              <DetailBlock
                icon={ClipboardList}
                title={t("realisations.detail.actionTitle")}
                content={t(`${base}.tabs.${currentTab.id}.action`)}
                accentColor="cyan"
              />
              <DetailBlock
                icon={TrendingUp}
                title={t("realisations.detail.resultsTitle")}
                content={t(`${base}.tabs.${currentTab.id}.results`)}
                accentColor={color}
              />
            </div>
          ) : (
            <DetailBlock
              icon={currentTab.icon}
              title={currentTab.id === "project" ? t("realisations.detail.definitionTitle") : t("realisations.detail.criticalTitle")}
              content={t(`${base}.tabs.${currentTab.id}.content`)}
              accentColor={currentTab.accentColor}
            />
          )}
        </div>
      ) : (
        /* Classic Grid View for other achievements */
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
      )}

      {/* Linked skills */}
      <div>
        <div className="mb-4 flex items-center gap-3">
          <div className="bg-primary h-2 w-2 rounded-full" aria-hidden="true" />
          <Lightbulb className="text-primary h-5 w-5" aria-hidden="true" />
          <h2 className="text-foreground font-mono font-semibold">
            {t("realisations.detail.linkedSkillsTitle")}
          </h2>
          <div className="bg-border h-px flex-1" aria-hidden="true" />
        </div>
        <div className="flex flex-wrap gap-3">
          {realisation.linkedSkills.map((skillSlug) => {
            const skill = findSkillBySlug(skillSlug);
            if (!skill) return null;
            const Icon = skill.icon;
            const CustomIcon = skill.customIcon;
            return (
              <Link key={skillSlug} to={`/competences/${skillSlug}`} className="group">
                <Card
                  className="border-primary/10 hover:border-primary/30 flex items-center gap-2 rounded-lg px-4 py-2 transition-all duration-200"
                  focusable={false}
                >
                  {Icon && (
                    <Icon
                      className="text-muted-foreground group-hover:text-primary h-4 w-4 transition-colors"
                      aria-hidden="true"
                    />
                  )}
                  {skill.logoUrl && (
                    <img
                      src={skill.logoUrl}
                      alt=""
                      className="h-4 w-4 object-contain"
                    />
                  )}
                  {CustomIcon && (
                    <CustomIcon
                      className="text-muted-foreground group-hover:text-primary h-4 w-4 transition-colors"
                      aria-hidden="true"
                    />
                  )}
                  <span className="text-muted-foreground group-hover:text-primary font-mono text-sm transition-colors">
                    {skill.titleKey ? t(skill.titleKey) : skill.techName}
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
