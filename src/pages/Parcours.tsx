import oclockLogo from "@/assets/oclock.png";
import orangeLogo from "@/assets/orange.png";
import { ExternalLink } from "@/components/a11y/ExternalLink";
import { Card } from "@/components/ui/Card";
import {
    CERTIFICATIONS,
    TIMELINE_COLORS,
    TIMELINE_ENTRIES,
    type TimelineEntry,
} from "@/constants/timeline";
import { useI18n } from "@/i18n";
import { Award, ChevronDown, ChevronUp } from "lucide-react";
import { memo, useCallback, useState } from "react";

// --- Logo lookup ---

const LOGOS: Record<string, string> = {
  orange: orangeLogo,
  oclock: oclockLogo,
};

// --- Timeline entry component ---

interface TimelineItemProps {
  readonly entry: Omit<TimelineEntry, "logo">;
  readonly t: (key: string) => string;
  readonly isLast: boolean;
}

const TimelineItem = memo(({ entry, t, isLast }: TimelineItemProps) => {
  const [expanded, setExpanded] = useState(false);
  const color = TIMELINE_COLORS[entry.type];
  const Icon = entry.icon;
  const logo = LOGOS[entry.id];
  const detailId = `timeline-detail-${entry.id}`;

  const toggle = useCallback(() => setExpanded((prev) => !prev), []);

  const hasDetails = Object.values(entry.detailKeys).some(Boolean);

  return (
    <div className="relative flex gap-6">
      {/* Vertical line + dot */}
      <div className="flex flex-col items-center">
        <div
          className={`w-4 h-4 rounded-full bg-${color} border-2 border-background z-10 shrink-0 mt-1`}
          aria-hidden="true"
        />
        {!isLast && (
          <div className="w-0.5 flex-1 bg-border" aria-hidden="true" />
        )}
      </div>

      {/* Content */}
      <div className="pb-12 flex-1 min-w-0">
        <Card className="rounded-xl p-6 border-border/50 space-y-4">
          {/* Level 1 — always visible */}
          <div className="flex items-start gap-4">
            {logo && (
              <div className="shrink-0">
                {entry.externalLink ? (
                  <ExternalLink
                    href={entry.externalLink}
                    aria-label={t(entry.placeKey)}
                  >
                    <img
                      src={logo}
                      alt=""
                      className="w-10 h-10 object-contain rounded"
                      width={40}
                      height={40}
                      loading="lazy"
                    />
                  </ExternalLink>
                ) : (
                  <img
                    src={logo}
                    alt=""
                    className="w-10 h-10 object-contain rounded"
                    width={40}
                    height={40}
                    loading="lazy"
                  />
                )}
              </div>
            )}
            {!logo && (
              <div className={`p-2 rounded-lg bg-${color}/10 shrink-0`}>
                <Icon className={`w-5 h-5 text-${color}`} aria-hidden="true" />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <p className={`text-xs font-mono text-${color} mb-1`}>
                {t(entry.periodKey)}
              </p>
              <h3 className="text-base font-semibold text-foreground">
                {t(entry.titleKey)}
              </h3>
              <p className="text-sm text-muted-foreground">
                {entry.externalLink ? (
                  <ExternalLink
                    href={entry.externalLink}
                    className="hover:text-foreground transition-colors"
                  >
                    {t(entry.placeKey)}
                  </ExternalLink>
                ) : (
                  t(entry.placeKey)
                )}
              </p>
            </div>
          </div>

          {/* Toggle button */}
          {hasDetails && (
            <button
              type="button"
              onClick={toggle}
              className="flex items-center gap-1 text-xs font-mono text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              aria-expanded={expanded}
              aria-controls={detailId}
            >
              {expanded ? (
                <>
                  <ChevronUp className="w-3 h-3" aria-hidden="true" />
                  {t("parcours.hideDetails")}
                </>
              ) : (
                <>
                  <ChevronDown className="w-3 h-3" aria-hidden="true" />
                  {t("parcours.showDetails")}
                </>
              )}
            </button>
          )}

          {/* Level 2 — expandable */}
          {expanded && (
            <div
              id={detailId}
              className="space-y-3 border-t border-border/50 pt-4"
            >
              {entry.detailKeys.status && (
                <div>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">
                    {t("parcours.status")}
                  </p>
                  <p className="text-sm text-foreground">
                    {t(entry.detailKeys.status)}
                  </p>
                </div>
              )}
              {entry.detailKeys.presentation && (
                <div>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">
                    {t("parcours.presentation")}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(entry.detailKeys.presentation)}
                  </p>
                </div>
              )}
              {entry.detailKeys.missions && (
                <div>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">
                    {t("parcours.missions")}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(entry.detailKeys.missions)}
                  </p>
                </div>
              )}
              {entry.detailKeys.vision && (
                <div>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">
                    {t("parcours.vision")}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(entry.detailKeys.vision)}
                  </p>
                </div>
              )}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
});

TimelineItem.displayName = "TimelineItem";

// --- Main page ---

const Parcours = () => {
  const { t } = useI18n();

  return (
    <section className="section-container pt-10">
      <div className="text-center mb-16">
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">
          {t("parcours.subtitle")}
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-glow-primary">
          {t("parcours.title")}
        </h1>
      </div>

      {/* Timeline */}
      <div className="max-w-2xl mx-auto">
        {TIMELINE_ENTRIES.map((entry, index) => (
          <TimelineItem
            key={entry.id}
            entry={entry}
            t={t}
            isLast={index === TIMELINE_ENTRIES.length - 1}
          />
        ))}
      </div>

      {/* Certifications */}
      {CERTIFICATIONS.length > 0 && (
        <div className="max-w-2xl mx-auto mt-16">
          <div className="flex items-center gap-3 mb-8">
            <div
              className="w-2 h-2 rounded-full bg-primary"
              aria-hidden="true"
            />
            <Award className="w-5 h-5 text-primary" aria-hidden="true" />
            <h2 className="text-lg font-mono font-semibold text-foreground">
              {t("parcours.certificationTitle")}
            </h2>
            <div className="flex-1 h-px bg-border" aria-hidden="true" />
          </div>
          <div className="space-y-3">
            {CERTIFICATIONS.map((cert) => (
              <Card
                key={cert.id}
                className="rounded-lg px-5 py-3 border-primary/10 flex items-center justify-between"
              >
                <span className="text-sm text-foreground">
                  {t(cert.titleKey)}
                </span>
                <span className="text-xs font-mono text-muted-foreground">
                  {t(cert.dateKey)}
                </span>
              </Card>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Parcours;
