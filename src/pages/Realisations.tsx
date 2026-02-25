import { Card } from "@/components/ui/Card";
import {
    CONTEXT_COLORS,
    REALISATIONS,
    type Realisation,
    type RealisationContext,
} from "@/constants/realisations";
import { useI18n } from "@/i18n";
import { memo, useMemo } from "react";
import { Link } from "react-router-dom";

// --- Context label mapping ---

const CONTEXT_KEYS: Record<RealisationContext, string> = {
  pro: "realisations.contextPro",
  perso: "realisations.contextPerso",
  formation: "realisations.contextFormation",
};

// --- Realisation card ---

interface RealisationCardProps {
  readonly realisation: Realisation;
  readonly t: (key: string) => string;
}

const RealisationCard = memo(({ realisation, t }: RealisationCardProps) => {
  const Icon = realisation.icon;
  const color = CONTEXT_COLORS[realisation.context];

  return (
    <Link
      to={`/realisations/${realisation.slug}`}
      className="block group"
      aria-label={t(realisation.titleKey)}
    >
      <Card
        className={`rounded-xl p-6 border-${color}/10 space-y-4 hover:border-${color}/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_hsla(var(--primary)/0.1)]`}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div
              className={`p-2 rounded-lg bg-${color}/10 group-hover:bg-${color}/20 transition-colors`}
            >
              <Icon
                className={`w-5 h-5 text-${color} group-hover:scale-110 transition-transform`}
                aria-hidden="true"
              />
            </div>
            <div>
              <h3
                className={`text-base font-semibold text-foreground group-hover:text-${color} transition-colors`}
              >
                {t(realisation.titleKey)}
              </h3>
              <span className={`text-xs font-mono text-${color}`}>
                {t(CONTEXT_KEYS[realisation.context])}
              </span>
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {t(realisation.shortDescKey)}
        </p>
      </Card>
    </Link>
  );
});

RealisationCard.displayName = "RealisationCard";

// --- Main page ---

const Realisations = () => {
  const { t } = useI18n();

  const grouped = useMemo(() => {
    const groups: Record<RealisationContext, Realisation[]> = {
      pro: [],
      perso: [],
      formation: [],
    };
    for (const r of REALISATIONS) {
      groups[r.context].push(r);
    }
    return groups;
  }, []);

  const sections: {
    key: RealisationContext;
    titleKey: string;
    dotColor: string;
    items: Realisation[];
  }[] = [
    {
      key: "pro",
      titleKey: "realisations.contextPro",
      dotColor: "bg-orange",
      items: grouped.pro,
    },
    {
      key: "perso",
      titleKey: "realisations.contextPerso",
      dotColor: "bg-primary",
      items: grouped.perso,
    },
    {
      key: "formation",
      titleKey: "realisations.contextFormation",
      dotColor: "bg-violet-foreground",
      items: grouped.formation,
    },
  ];

  return (
    <section className="section-container pt-24">
      <div className="text-center mb-16">
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">
          {t("realisations.subtitle")}
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-glow-primary">
          {t("realisations.title")}
        </h1>
      </div>

      {sections.map(
        ({ key, titleKey, dotColor, items }) =>
          items.length > 0 && (
            <div key={key} className="mb-16 last:mb-0">
              <div className="flex items-center gap-3 mb-8">
                <div
                  className={`w-2 h-2 rounded-full ${dotColor}`}
                  aria-hidden="true"
                />
                <h2 className="text-lg font-mono font-semibold text-foreground">
                  {t(titleKey)}
                </h2>
                <div className="flex-1 h-px bg-border" aria-hidden="true" />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {items.map((r) => (
                  <RealisationCard key={r.slug} realisation={r} t={t} />
                ))}
              </div>
            </div>
          ),
      )}
    </section>
  );
};

export default Realisations;
