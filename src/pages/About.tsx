import { useI18n } from "@/i18n";

/**
 * About page — values, professional project, soft skills, interests.
 */
const About = () => {
  const { t } = useI18n();

  return (
    <section className="section-container pt-24">
      <h1 className="text-3xl sm:text-4xl font-bold text-glow-primary mb-8">
        {t("about.title")}
      </h1>
      <p className="text-muted-foreground">{t("about.placeholder")}</p>
    </section>
  );
};

export default About;
