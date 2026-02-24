/**
 * Publication status for a realization.
 */
export type RealizationStatus = "draft" | "published" | "archived";

/**
 * Realization entity matching the backend API response.
 * @see Bruno: Realizations/Create Realization.bru
 */
export interface Realization {
  readonly id: string;
  readonly experienceId: string | null;
  readonly title: string;
  readonly slug: string;
  readonly shortDescription: string;
  readonly fullPresentation: string;
  readonly objectives: string;
  readonly context: string;
  readonly stakes: string;
  readonly steps: string;
  readonly actorsInteractions: string;
  readonly results: string;
  readonly nextSteps: string;
  readonly criticalView: string;
  readonly thumbnailUrl: string | null;
  readonly demoUrl: string | null;
  readonly repoUrl: string | null;
  readonly status: RealizationStatus;
  readonly projectDate: string;
  readonly isFeatured: boolean;
  readonly displayOrder: number;
  readonly metaTitle: string;
  readonly metaDescription: string;
  readonly skillIds: readonly string[];
  readonly createdAt: string;
  readonly updatedAt: string;
}
