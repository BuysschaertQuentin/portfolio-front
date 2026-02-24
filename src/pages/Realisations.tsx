import { useI18n } from "@/i18n";

/**
 * Achievements overview page — grid of all projects/achievements.
 */
const Realisations = () => {
  const { t } = useI18n();

  return (
    <section className="section-container pt-24">
      <h1 className="text-3xl sm:text-4xl font-bold text-glow-primary mb-8">
        {t("realisations.title")}
      </h1>
      <p className="text-muted-foreground">{t("realisations.placeholder")}</p>
    </section>
  );
};

export default Realisations;
