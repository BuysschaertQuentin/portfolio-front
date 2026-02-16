import { LogIn, Menu, X } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";

const navLinks = [
  { href: "#experience", label: "Expérience" },
  { href: "#formation", label: "Formation" },
  { href: "#past", label: "Parcours" },
  { href: "#projects", label: "Projets" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
        <a href="#" className="font-mono text-sm font-bold text-primary">
          {"<Dev />"}
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <button
              onClick={logout}
              className="text-xs font-mono px-3 py-1.5 rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
            >
              Déconnexion
            </button>
          ) : (
            <button
              onClick={login}
              className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
            >
              <LogIn className="w-3 h-3" />
              Connexion
            </button>
          )}

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-muted-foreground hover:text-foreground"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass-card border-t border-border/50 px-4 py-4 space-y-3">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-mono text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
