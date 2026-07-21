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
  // --- 2ème alternance Orange (Master) ---
  {
    id: "orangeBac5",
    type: "experience",
    icon: Briefcase,
    periodKey: "parcours.entries.orangeBac5.period",
    titleKey: "parcours.entries.orangeBac5.title",
    placeKey: "parcours.entries.orangeBac5.place",
    externalLink: "https://www.orange.fr",
    detailKeys: {
      status: "parcours.entries.orangeBac5.status",
      missions: "parcours.entries.orangeBac5.missions",
      vision: "parcours.entries.orangeBac5.vision",
    },
  },
  // --- 1ère alternance Orange (Bac+3) ---
  {
    id: "orangeBac3",
    type: "experience",
    icon: Briefcase,
    periodKey: "parcours.entries.orangeBac3.period",
    titleKey: "parcours.entries.orangeBac3.title",
    placeKey: "parcours.entries.orangeBac3.place",
    externalLink: "https://www.orange.fr",
    detailKeys: {
      status: "parcours.entries.orangeBac3.status",
      missions: "parcours.entries.orangeBac3.missions",
      vision: "parcours.entries.orangeBac3.vision",
    },
  },
  // --- O'Clock ---
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
  // --- Auxiliaire de vie ---
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
    id: "master",
    dateKey: "parcours.certifications.master.date",
    titleKey: "parcours.certifications.master.title",
  },
  {
    id: "cda",
    dateKey: "parcours.certifications.cda.date",
    titleKey: "parcours.certifications.cda.title",
  },
  {
    id: "dwwm",
    dateKey: "parcours.certifications.dwwm.date",
    titleKey: "parcours.certifications.dwwm.title",
  },
  {
    id: "assp",
    dateKey: "parcours.certifications.assp.date",
    titleKey: "parcours.certifications.assp.title",
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
