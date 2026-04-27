import { PERSONAL } from "@/constants/personal";
import { useI18n } from "@/i18n";
import { Mail } from "lucide-react";
import { useMemo } from "react";
import { ExternalLink } from "./ui/a11y/ExternalLink";
import { GithubIcon, LinkedinIcon } from "./ui/icons";

const Footer = () => {
  const { t } = useI18n();

  const footerLinks = useMemo(
    () => [
      {
        href: PERSONAL.linkedIn,
        icon: LinkedinIcon,
        label: "LinkedIn",
        external: true,
      },
      {
        href: PERSONAL.github,
        icon: GithubIcon,
        label: "GitHub",
        external: true,
      },
      {
        href: `mailto:${PERSONAL.email}`,
        icon: Mail,
        label: "Email",
        external: false,
      },
    ],
    [],
  );

  return (
    <footer className="z-10 border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground font-mono">
            © {new Date().getFullYear()} {t("footer.copyright")}
          </p>
          <nav aria-label="Social links">
            <ul className="flex items-center gap-6" role="list">
              {footerLinks.map(({ href, icon: Icon, label, external }) => {
                const LinkComponent = external ? ExternalLink : "a";
                return (
                  <li key={label}>
                    <LinkComponent
                      href={href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={label}
                    >
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </LinkComponent>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
