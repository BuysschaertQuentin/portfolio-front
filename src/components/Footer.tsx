import { useI18n } from "@/i18n";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

const footerLinks = [
  {
    href: "https://linkedin.com",
    icon: LinkedinIcon,
    label: "LinkedIn",
  },
  {
    href: "https://github.com",
    icon: GithubIcon,
    label: "GitHub",
  },
  {
    href: "mailto:contact@example.com",
    icon: Mail,
    label: "Email",
  },
] as const;

const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground font-mono">
            © {new Date().getFullYear()} {t("footer.copyright")}
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
