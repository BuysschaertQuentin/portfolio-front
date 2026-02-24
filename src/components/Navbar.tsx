import { PERSONAL } from "@/constants/personal";
import { useI18n } from "@/i18n";
import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";

interface NavItem {
  readonly href: string;
  readonly label: string;
  /** If true, uses an anchor link (<a>) instead of React Router <Link> */
  readonly isAnchor?: boolean;
}

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useI18n();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navLinks: readonly NavItem[] = useMemo(
    () => [
      // Anchor links — visible only on home
      ...(isHome
        ? [
            { href: "#experience", label: t("nav.experience"), isAnchor: true },
            { href: "#formation", label: t("nav.formation"), isAnchor: true },
            { href: "#contact", label: t("nav.contact"), isAnchor: true },
          ]
        : []),
      // Route links — always visible
      { href: "/about", label: t("nav.about") },
      { href: "/competences", label: t("nav.competences") },
      { href: "/realisations", label: t("nav.realisations") },
      { href: "/parcours", label: t("nav.parcours") },
    ],
    [t, isHome],
  );

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
        <Link
          to="/"
          className="font-mono text-sm font-bold text-primary"
          aria-label={`${PERSONAL.fullName} — Home`}
        >
          {`<${PERSONAL.fullName}/>`}
        </Link>

        {/* Desktop links — centered */}
        <div className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((l) =>
            l.isAnchor ? (
              <a
                key={l.href}
                href={l.href}
                className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                to={l.href}
                className={`text-xs font-mono transition-colors ${
                  location.pathname === l.href
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-current={location.pathname === l.href ? "page" : undefined}
              >
                {l.label}
              </Link>
            ),
          )}
        </div>

        {/* Desktop language switcher — right */}
        <div className="hidden md:block">
          <LanguageSwitcher />
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-muted-foreground hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md p-1"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            type="button"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden glass-card border-t border-border/50 px-4 py-4 space-y-3"
        >
          {navLinks.map((l) =>
            l.isAnchor ? (
              <a
                key={l.href}
                href={l.href}
                onClick={closeMobile}
                className="block text-sm font-mono text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                to={l.href}
                onClick={closeMobile}
                className={`block text-sm font-mono transition-colors ${
                  location.pathname === l.href
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-current={location.pathname === l.href ? "page" : undefined}
              >
                {l.label}
              </Link>
            ),
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
