import { useContext } from "react";
import { I18nContext, I18nContextValue } from "@/i18n/I18nContext";

/**
 * Hook to access the i18n context.
 * Must be used within an I18nProvider.
 */
export const useI18n = (): I18nContextValue => {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return ctx;
};
