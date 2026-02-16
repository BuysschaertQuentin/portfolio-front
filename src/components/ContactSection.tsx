import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:contact@example.com?subject=Contact de ${formData.name}&body=${encodeURIComponent(formData.message)}`;
  };

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
              Vous avez un projet, une opportunité ou simplement envie d'échanger ? 
              N'hésitez pas à me contacter.
            </p>
            <div className="space-y-4">
              <a href="mailto:contact@example.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <div className="p-2 rounded-md bg-secondary"><Mail className="w-4 h-4" /></div>
                <span className="text-sm">contact@example.com</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <div className="p-2 rounded-md bg-secondary"><Linkedin className="w-4 h-4" /></div>
                <span className="text-sm">LinkedIn</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <div className="p-2 rounded-md bg-secondary"><Github className="w-4 h-4" /></div>
                <span className="text-sm">GitHub</span>
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="glass-card rounded-xl p-6 border-primary/10 space-y-4">
            <div>
              <label htmlFor="name" className="text-sm font-mono text-muted-foreground mb-1 block">Nom</label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-lg bg-secondary border border-border px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-mono text-muted-foreground mb-1 block">Email</label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-lg bg-secondary border border-border px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="votre@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-mono text-muted-foreground mb-1 block">Message</label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
