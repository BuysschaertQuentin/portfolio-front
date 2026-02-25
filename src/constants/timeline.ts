import type { LucideIcon } from "lucide-react";
import { Award, Briefcase, GraduationCap, Heart } from "lucide-react";

export type TimelineEntryType = "experience" | "formation" | "certification";

export interface TimelineEntry {
  readonly id: string;
  readonly type: TimelineEntryType;
  readonly icon: LucideIcon;
  readonly periodKey: string;
  readonly titleKey: string;
  readonly placeKey: string;
  /** Optional logo path (imported asset) */
  readonly logo?: string;
  /** Optional external link (e.g. school website) */
  readonly externalLink?: string;
  /** Level 2 detail — expandable content */
  readonly detailKeys: {
    readonly status?: string;
    readonly missions?: string;
    readonly vision?: string;
    readonly presentation?: string;
  };
}

/**
 * Timeline entries in anti-chronological order (most recent first).
 * Logos are passed as props from the page component (to avoid circular imports).
 */
export const TIMELINE_ENTRIES: readonly Omit<TimelineEntry, "logo">[] = [
  {
    id: "orange",
    type: "experience",
    icon: Briefcase,
    periodKey: "parcours.entries.orange.period",
    titleKey: "parcours.entries.orange.title",
    placeKey: "parcours.entries.orange.place",
    externalLink: "https://www.orange.fr",
    detailKeys: {
      status: "parcours.entries.orange.status",
      missions: "parcours.entries.orange.missions",
      vision: "parcours.entries.orange.vision",
    },
  },
  {
    id: "oclock",
    type: "formation",
    icon: GraduationCap,
    periodKey: "parcours.entries.oclock.period",
    titleKey: "parcours.entries.oclock.title",
    placeKey: "parcours.entries.oclock.place",
    externalLink: "https://oclock.io",
    detailKeys: {
      presentation: "parcours.entries.oclock.presentation",
      vision: "parcours.entries.oclock.vision",
    },
  },
  {
    id: "care",
    type: "experience",
    icon: Heart,
    periodKey: "parcours.entries.care.period",
    titleKey: "parcours.entries.care.title",
    placeKey: "parcours.entries.care.place",
    detailKeys: {
      status: "parcours.entries.care.status",
      missions: "parcours.entries.care.missions",
      vision: "parcours.entries.care.vision",
    },
  },
] as const;

/**
 * Certifications — separate section.
 */
export interface CertificationEntry {
  readonly id: string;
  readonly dateKey: string;
  readonly titleKey: string;
}

export const CERTIFICATIONS: readonly CertificationEntry[] = [
  {
    id: "rncp-dev",
    dateKey: "parcours.certifications.rncpDev.date",
    titleKey: "parcours.certifications.rncpDev.title",
  },
] as const;

/** Colors per entry type */
export const TIMELINE_COLORS: Record<TimelineEntryType, string> = {
  experience: "orange",
  formation: "violet-foreground",
  certification: "primary",
};

/** Icon per entry type (for section headers) */
export const TIMELINE_ICONS: Record<TimelineEntryType, LucideIcon> = {
  experience: Briefcase,
  formation: GraduationCap,
  certification: Award,
};
