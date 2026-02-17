/**
 * Type of media attached to a realization.
 */
export type MediaType = "image" | "video";

/**
 * Media entity matching the backend API response.
 * @see Bruno: Medias/Create Media.bru
 */
export interface Media {
  readonly id: string;
  readonly realizationId: string;
  readonly type: MediaType;
  readonly url: string;
  readonly altText: string;
  readonly caption: string;
  readonly displayOrder: number;
  readonly createdAt: string;
  readonly updatedAt: string;
}
