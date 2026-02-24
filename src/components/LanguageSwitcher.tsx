import { SUPPORTED_LOCALES, useI18n } from "@/i18n";
import { memo, useCallback, useMemo } from "react";

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

  const currentLabel = useMemo(
    () => SUPPORTED_LOCALES.find((l) => l.code === locale)?.label ?? locale,
    [locale],
  );

  return (
    <button
      onClick={handleToggle}
      className="px-2 py-1 text-xs font-mono rounded border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
      aria-label={`Switch language (current: ${currentLabel})`}
      type="button"
    >
      {currentLabel}
    </button>
  );
});

LanguageSwitcher.displayName = "LanguageSwitcher";

export default LanguageSwitcher;
