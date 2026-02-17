import { SUPPORTED_LOCALES, useI18n } from "@/i18n";

/**
 * Compact language toggle button for the navbar.
 * Cycles through supported locales on click.
 */
const LanguageSwitcher = () => {
  const { locale, setLocale } = useI18n();

  const handleToggle = () => {
    const currentIndex = SUPPORTED_LOCALES.findIndex((l) => l.code === locale);
    const nextIndex = (currentIndex + 1) % SUPPORTED_LOCALES.length;
    setLocale(SUPPORTED_LOCALES[nextIndex].code);
  };

  const currentLabel =
    SUPPORTED_LOCALES.find((l) => l.code === locale)?.label ?? locale;

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
};

export default LanguageSwitcher;
