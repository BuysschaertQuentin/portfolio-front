import { Card } from "@/components/ui/cards/Card";
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
      className="group block"
      aria-label={t(realisation.titleKey)}
    >
      <Card
        className={`rounded-xl p-6 border-${color}/10 space-y-4 hover:border-${color}/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_hsla(var(--primary)/0.1)]`}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div
              className={`rounded-lg p-2 bg-${color}/10 group-hover:bg-${color}/20 transition-colors`}
            >
              <Icon
                className={`h-5 w-5 text-${color} transition-transform group-hover:scale-110`}
                aria-hidden="true"
              />
            </div>
            <div>
              <h3
                className={`text-foreground text-base font-semibold group-hover:text-${color} transition-colors`}
              >
                {t(realisation.titleKey)}
              </h3>
              <span className={`font-mono text-xs text-${color}`}>
                {t(CONTEXT_KEYS[realisation.context])}
              </span>
            </div>
          </div>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
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
    <section className="section-container pt-10">
      <div className="mb-16 text-center">
        <p className="text-primary mb-2 font-mono text-sm tracking-widest uppercase">
          {t("realisations.subtitle")}
        </p>
        <h1 className="text-glow-primary text-3xl font-bold sm:text-4xl">
          {t("realisations.title")}
        </h1>
      </div>

      {sections.map(
        ({ key, titleKey, dotColor, items }) =>
          items.length > 0 && (
            <div key={key} className="mb-16 last:mb-0">
              <div className="mb-8 flex items-center gap-3">
                <div className={`h-2 w-2 rounded-full ${dotColor}`} aria-hidden="true" />
                <h2 className="text-foreground font-mono font-semibold">{t(titleKey)}</h2>
                <div className="bg-border h-px flex-1" aria-hidden="true" />
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
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
