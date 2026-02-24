/**
 * Disponibility status for a profile.
 */
export type Disponibility = "available" | "partially_available" | "unavailable";

/**
 * Profile entity matching the backend API response.
 * @see Bruno: Profile/Create Profile.bru, Profile/Update Profile.bru
 */
export interface Profile {
  readonly id: string;
  readonly userId: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly title: string;
  readonly photoUrl: string | null;
  readonly bio: string;
  readonly professionalProject: string;
  readonly personalProject: string;
  readonly qualities: string;
  readonly interests: string;
  readonly cvUrl: string | null;
  readonly disponibility: Disponibility;
  readonly createdAt: string;
  readonly updatedAt: string;
}
