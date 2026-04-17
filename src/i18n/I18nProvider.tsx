import {
    useCallback,
    useMemo,
    useState,
    type ReactNode,
} from "react";
import { en, fr } from "./locales";
import { DEFAULT_LOCALE, type Locale, type Translations } from "./types";

import { I18nContext } from "./I18nContext";

const LOCALE_STORAGE_KEY = "portfolio_locale";

const localeMap: Record<Locale, Translations> = { fr, en };

/**
 * Resolve a dot-separated key path in a nested translations object.
 */
const resolve = (obj: Translations, path: string): string => {
  const parts = path.split(".");
  let current: string | Translations = obj;

  for (const part of parts) {
    if (typeof current === "string") return path;
    current = current[part];
    if (current === undefined) return path;
  }

  return typeof current === "string" ? current : path;
};

/**
 * Read persisted locale from localStorage, falling back to default.
 */
const getInitialLocale = (): Locale => {
  try {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (stored === "fr" || stored === "en") return stored;
  } catch {
    // SSR or private browsing — ignore
  }
  return DEFAULT_LOCALE;
};

interface I18nProviderProps {
  readonly children: ReactNode;
}

/**
 * Provides i18n context (locale, setLocale, t) to the component tree.
 * Persists the user's locale choice in localStorage.
 */
export const I18nProvider = ({ children }: I18nProviderProps) => {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, next);
    } catch {
      // Ignore write errors
    }
    document.documentElement.lang = next;
  }, []);

  const t = useCallback(
    (key: string): string => resolve(localeMap[locale], key),
    [locale],
  );

  const value = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};
