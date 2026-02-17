/**
 * Type of experience: job, internship, apprenticeship, or freelance.
 */
export type ExperienceType =
  | "job"
  | "internship"
  | "apprenticeship"
  | "freelance";

/**
 * Experience entity matching the backend API response.
 * @see Bruno: Experiences/Create Experience.bru
 */
export interface Experience {
  readonly id: string;
  readonly type: ExperienceType;
  readonly startDate: string;
  readonly endDate: string | null;
  readonly isCurrent: boolean;
  readonly title: string;
  readonly organizationName: string;
  readonly organizationLogoUrl: string | null;
  readonly organizationUrl: string | null;
  readonly location: string;
  readonly description: string;
  readonly missions: string;
  readonly achievements: string;
  readonly isVisible: boolean;
  readonly displayOrder: number;
  readonly skillIds: readonly string[];
  readonly createdAt: string;
  readonly updatedAt: string;
}
