import { useI18n } from "@/i18n";

const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="border-border bg-background z-10 border-t">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-muted-foreground font-mono text-sm">
            © {new Date().getFullYear()} {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
