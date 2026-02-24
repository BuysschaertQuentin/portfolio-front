import { useI18n } from "@/i18n";
import { useParams } from "react-router-dom";

/**
 * Achievement detail page — individual project breakdown.
 */
const RealisationDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useI18n();

  return (
    <section className="section-container pt-24">
      <h1 className="text-3xl sm:text-4xl font-bold text-glow-primary mb-8">
        {t("realisations.detailTitle")} — {slug}
      </h1>
      <p className="text-muted-foreground">
        {t("realisations.detailPlaceholder")}
      </p>
    </section>
  );
};

export default RealisationDetail;
