import { useI18n } from "@/i18n";

/**
 * Career timeline page — anti-chronological professional path.
 */
const Parcours = () => {
  const { t } = useI18n();

  return (
    <section className="section-container pt-24">
      <h1 className="text-3xl sm:text-4xl font-bold text-glow-primary mb-8">
        {t("parcours.title")}
      </h1>
      <p className="text-muted-foreground">{t("parcours.placeholder")}</p>
    </section>
  );
};

export default Parcours;
