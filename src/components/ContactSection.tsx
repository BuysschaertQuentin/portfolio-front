import { Github, Linkedin, Mail, Send } from "lucide-react";
import { type ChangeEvent, type FormEvent, useCallback, useState } from "react";

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

const socialLinks = [
  {
    href: "mailto:contact@example.com",
    icon: Mail,
    label: "contact@example.com",
    external: false,
  },
  {
    href: "https://linkedin.com",
    icon: Linkedin,
    label: "LinkedIn",
    external: true,
  },
  {
    href: "https://github.com",
    icon: Github,
    label: "GitHub",
    external: true,
  },
] as const;

const ContactSection = () => {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    [],
  );

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      window.location.href = `mailto:contact@example.com?subject=Contact de ${formData.name}&body=${encodeURIComponent(formData.message)}`;
    },
    [formData.name, formData.message],
  );

  return (
    <section id="contact" className="relative">
      <div className="section-container">
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2 text-center">
          Échangeons
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center text-glow-primary">
          Contact
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Info */}
          <div className="space-y-8">
            <p className="text-muted-foreground leading-relaxed">
              Vous avez un projet, une opportunité ou simplement envie
              d'échanger ? N'hésitez pas à me contacter.
            </p>
            <div className="space-y-4">
              {socialLinks.map(({ href, icon: Icon, label, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="p-2 rounded-md bg-secondary">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm">{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="glass-card rounded-xl p-6 border-primary/10 space-y-4"
          >
            <div>
              <label
                htmlFor="contact-name"
                className="text-sm font-mono text-muted-foreground mb-1 block"
              >
                Nom
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg bg-secondary border border-border px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="text-sm font-mono text-muted-foreground mb-1 block"
              >
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg bg-secondary border border-border px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="votre@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="text-sm font-mono text-muted-foreground mb-1 block"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-lg bg-secondary border border-border px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                placeholder="Votre message..."
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              <Send className="w-4 h-4" />
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
