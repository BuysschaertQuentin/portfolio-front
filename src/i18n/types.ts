/**
 * Supported locales for the application.
 */
export type Locale = "fr" | "en";

/**
 * Shape of the translation dictionary.
 * Keys are dot-separated paths, values are translated strings.
 */
export interface Translations {
  readonly [key: string]: string | Translations;
}

/**
 * Default locale used on first load.
 */
export const DEFAULT_LOCALE: Locale = "fr";

/**
 * All supported locales with their display labels.
 */
export const SUPPORTED_LOCALES: readonly {
  readonly code: Locale;
  readonly label: string;
}[] = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
] as const;
