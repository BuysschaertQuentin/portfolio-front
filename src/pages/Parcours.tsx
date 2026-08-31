import oclockLogo from "@/assets/oclock.png";
import orangeLogo from "@/assets/orange.png";
import { ExternalLink } from "@/components/ui/a11y/ExternalLink";

import { Card } from "@/components/ui/cards/Card";
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
  orangeBac5: orangeLogo,
  orangeBac3: orangeLogo,
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
          className={`h-4 w-4 rounded-full bg-${color} border-background z-10 mt-1 shrink-0 border-2`}
          aria-hidden="true"
        />
        {!isLast && <div className="bg-border w-0.5 flex-1" aria-hidden="true" />}
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1 pb-12">
        <Card className="border-border/50 space-y-4 rounded-xl p-6">
          {/* Level 1 — always visible */}
          <div className="flex items-start gap-4">
            {logo && (
              <div className="shrink-0">
                {entry.externalLink ? (
                  <ExternalLink href={entry.externalLink} aria-label={t(entry.placeKey)}>
                    <img
                      src={logo}
                      alt=""
                      className="h-10 w-10 rounded object-contain"
                      width={40}
                      height={40}
                      loading="lazy"
                    />
                  </ExternalLink>
                ) : (
                  <img
                    src={logo}
                    alt=""
                    className="h-10 w-10 rounded object-contain"
                    width={40}
                    height={40}
                    loading="lazy"
                  />
                )}
              </div>
            )}
            {!logo && (
              <div className={`rounded-lg p-2 bg-${color}/10 shrink-0`}>
                <Icon className={`h-5 w-5 text-${color}`} aria-hidden="true" />
              </div>
            )}
            <div className="min-w-0 flex-1">
              <p className={`font-mono text-xs text-${color} mb-1`}>{t(entry.periodKey)}</p>
              <h3 className="text-foreground text-base font-semibold">{t(entry.titleKey)}</h3>
              <p className="text-muted-foreground text-sm">
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
              className="text-muted-foreground hover:text-primary flex cursor-pointer items-center gap-1 font-mono text-xs transition-colors"
              aria-expanded={expanded}
              aria-controls={detailId}
            >
              {expanded ? (
                <>
                  <ChevronUp className="h-3 w-3" aria-hidden="true" />
                  {t("parcours.hideDetails")}
                </>
              ) : (
                <>
                  <ChevronDown className="h-3 w-3" aria-hidden="true" />
                  {t("parcours.showDetails")}
                </>
              )}
            </button>
          )}

          {/* Level 2 — expandable */}
          {expanded && (
            <div id={detailId} className="border-border/50 space-y-3 border-t pt-4">
              {entry.detailKeys.status && (
                <div>
                  <p className="text-muted-foreground mb-1 font-mono text-xs tracking-wider uppercase">
                    {t("parcours.status")}
                  </p>
                  <p className="text-foreground text-sm">{t(entry.detailKeys.status)}</p>
                </div>
              )}
              {entry.detailKeys.presentation && (
                <div>
                  <p className="text-muted-foreground mb-1 font-mono text-xs tracking-wider uppercase">
                    {t("parcours.presentation")}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t(entry.detailKeys.presentation)}
                  </p>
                </div>
              )}
              {entry.detailKeys.missions && (
                <div>
                  <p className="text-muted-foreground mb-1 font-mono text-xs tracking-wider uppercase">
                    {t("parcours.missions")}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t(entry.detailKeys.missions)}
                  </p>
                </div>
              )}
              {entry.detailKeys.vision && (
                <div>
                  <p className="text-muted-foreground mb-1 font-mono text-xs tracking-wider uppercase">
                    {t("parcours.vision")}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
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
      <div className="mb-16 text-center">
        <p className="text-primary mb-2 font-mono text-sm tracking-widest uppercase">
          {t("parcours.subtitle")}
        </p>
        <h1 className="text-glow-primary text-3xl font-bold sm:text-4xl">{t("parcours.title")}</h1>
      </div>

      {/* Timeline */}
      <div className="mx-auto max-w-2xl">
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
        <div className="mx-auto mt-16 max-w-2xl">
          <div className="mb-8 flex items-center gap-3">
            <div className="bg-primary h-2 w-2 rounded-full" aria-hidden="true" />
            <Award className="text-primary h-5 w-5" aria-hidden="true" />
            <h2 className="text-foreground font-mono font-semibold">
              {t("parcours.certificationTitle")}
            </h2>
            <div className="bg-border h-px flex-1" aria-hidden="true" />
          </div>
          <div className="space-y-3">
            {CERTIFICATIONS.map((cert) => (
              <Card
                key={cert.id}
                className="border-primary/10 flex items-center justify-between rounded-lg px-5 py-3"
              >
                <span className="text-foreground text-sm">{t(cert.titleKey)}</span>
                <span className="text-muted-foreground font-mono text-xs">{t(cert.dateKey)}</span>
              </Card>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Parcours;
