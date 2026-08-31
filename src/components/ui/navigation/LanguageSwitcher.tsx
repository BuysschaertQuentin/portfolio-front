import { SUPPORTED_LOCALES, useI18n } from "@/i18n";
import { memo, useCallback } from "react";

/**
 * Compact language toggle button for the navbar.
 * Cycles through supported locales on click.
 */
const LanguageSwitcher = memo(() => {
  const { locale, setLocale } = useI18n();

  const handleToggle = useCallback(() => {
    const currentIndex = SUPPORTED_LOCALES.findIndex((l) => l.code === locale);
    const nextIndex = (currentIndex + 1) % SUPPORTED_LOCALES.length;
    setLocale(SUPPORTED_LOCALES[nextIndex].code);
  }, [locale, setLocale]);

  return (
    <button
      onClick={handleToggle}
      className="flex items-center gap-2 px-2 py-1 text-sm font-mono rounded-md border border-border bg-background hover:bg-muted/50 hover:border-primary/50 transition-all shadow-sm cursor-pointer"
      aria-label={`Changer de langue (actuelle: ${locale.toUpperCase()})`}
      type="button"
    >
      <span className={`transition-colors ${locale === "fr" ? "text-primary font-bold" : "text-muted-foreground"}`}>
        FR
      </span>
      <span className="text-border">|</span>
      <span className={`transition-colors ${locale === "en" ? "text-primary font-bold" : "text-muted-foreground"}`}>
        EN
      </span>
    </button>
  );
});

LanguageSwitcher.displayName = "LanguageSwitcher";

export default LanguageSwitcher;
