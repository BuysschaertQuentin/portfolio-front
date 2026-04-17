import { createContext } from "react";
import { Locale } from "./types";

export interface I18nContextValue {
  /** Current active locale */
  readonly locale: Locale;
  /** Switch to a different locale */
  readonly setLocale: (locale: Locale) => void;
  /** Translate a key path, e.g. "hero.title" */
  readonly t: (key: string) => string;
}

export const I18nContext = createContext<I18nContextValue | null>(null);
