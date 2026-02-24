import { useI18n } from "@/i18n";

/**
 * Skills overview page — grid of all 10 skills.
 */
const Competences = () => {
  const { t } = useI18n();

  return (
    <section className="section-container pt-24">
      <h1 className="text-3xl sm:text-4xl font-bold text-glow-primary mb-8">
        {t("competences.title")}
      </h1>
      <p className="text-muted-foreground">{t("competences.placeholder")}</p>
    </section>
  );
};

export default Competences;
