import { PERSONAL } from "@/constants/personal";
import { useI18n } from "@/i18n";
import { Mail, Send } from "lucide-react";
import { type ChangeEvent, type FormEvent, useCallback, useMemo, useState } from "react";
import { ExternalLink } from "./a11y/ExternalLink";
import { GithubIcon, LinkedinIcon } from "./icons";
import { Button } from "./ui/Button";

interface ContactFormData {
  readonly name: string;
  readonly email: string;
  readonly message: string;
}

const INITIAL_FORM_DATA: ContactFormData = {
  name: "",
  email: "",
  message: "",
};

const ContactSection = () => {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);
  const { t } = useI18n();

  const socialLinks = useMemo(
    () => [
      {
        href: `mailto:${PERSONAL.email}`,
        icon: Mail,
        label: PERSONAL.email,
        external: false,
      },
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
    ],
    [],
  );

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      window.location.href = `mailto:${PERSONAL.email}?subject=Contact de ${formData.name}&body=${encodeURIComponent(formData.message)}`;
    },
    [formData.name, formData.message],
  );

  return (
    <section
      id="contact"
      className="relative flex h-dvh w-full shrink-0 snap-center snap-always flex-col justify-between overflow-hidden pt-12 md:pt-16"
    >
      <div className="section-container no-scrollbar flex-1 overflow-x-hidden overflow-y-auto p-2">
        <div className="mb-6 flex flex-col items-center">
          <div className="mb-2 flex items-center gap-4">
            <span className="text-primary font-mono text-xl opacity-50">06 /</span>
            <p className="text-primary font-mono text-sm tracking-widest uppercase">
              {t("contact.sectionLabel")}
            </p>
          </div>
          <h2 className="text-glow-primary text-center text-3xl font-bold sm:text-4xl">
            {t("contact.title")}
          </h2>
        </div>

        <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-2">
          {/* Info */}
          <div className="animate-fade-in space-y-8">
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t("contact.description")}
            </p>
            <ul className="space-y-4" role="list">
              {socialLinks.map(({ href, icon: Icon, label, external }) => {
                const LinkComponent = external ? ExternalLink : "a";
                return (
                  <li key={label}>
                    <LinkComponent
                      href={href}
                      className="text-muted-foreground hover:text-primary group flex items-center gap-3 transition-all duration-300"
                    >
                      <div className="bg-secondary group-hover:bg-primary/10 rounded-md p-2 transition-colors">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <span className="font-mono text-sm">{label}</span>
                    </LinkComponent>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="glass-card border-primary/10 animate-fade-in space-y-4 rounded-xl p-8 shadow-xl"
          >
            <div>
              <label
                htmlFor="contact-name"
                className="text-muted-foreground mb-1 block font-mono text-xs tracking-wider uppercase"
              >
                {t("contact.nameLabel")}
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground focus:ring-primary/50 w-full rounded-lg border px-4 py-2.5 text-sm transition-all focus:ring-2 focus:outline-none"
                placeholder={t("contact.namePlaceholder")}
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="text-muted-foreground mb-1 block font-mono text-xs tracking-wider uppercase"
              >
                {t("contact.emailLabel")}
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground focus:ring-primary/50 w-full rounded-lg border px-4 py-2.5 text-sm transition-all focus:ring-2 focus:outline-none"
                placeholder={t("contact.emailPlaceholder")}
              />
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="text-muted-foreground mb-1 block font-mono text-xs tracking-wider uppercase"
              >
                {t("contact.messageLabel")}
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground focus:ring-primary/50 w-full resize-none rounded-lg border px-4 py-2.5 text-sm transition-all focus:ring-2 focus:outline-none"
                placeholder={t("contact.messagePlaceholder")}
              />
            </div>
            <Button
              type="submit"
              variant="primary"
              className="h-12 w-full font-mono text-xs tracking-widest uppercase"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              {t("contact.send")}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
