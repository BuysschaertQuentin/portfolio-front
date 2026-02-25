import { PERSONAL } from "@/constants/personal";
import { useI18n } from "@/i18n";
import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";

interface NavItem {
  readonly label: string;
  /** React Router path for page links */
  readonly to?: string;
  /** Anchor ID for home section links (e.g. "experience") */
  readonly sectionId?: string;
}

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useI18n();
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const navLinks: readonly NavItem[] = useMemo(
    () => [
      { sectionId: "experience", label: t("nav.experience") },
      { sectionId: "formation", label: t("nav.formation") },
      { sectionId: "contact", label: t("nav.contact") },
      { to: "/about", label: t("nav.about") },
      { to: "/competences", label: t("nav.competences") },
      { to: "/realisations", label: t("nav.realisations") },
      { to: "/parcours", label: t("nav.parcours") },
    ],
    [t],
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

  // Scroll to hash target after navigation to home
  useEffect(() => {
    if (isHome && location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        // Small delay to let the DOM render after route change
        requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth" }));
      }
    }
  }, [isHome, location.hash]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  /**
   * Handle section link clicks.
   * If already on home, smooth scroll. Otherwise, navigate to /#sectionId.
   */
  const handleSectionClick = useCallback(
    (sectionId: string) => {
      closeMobile();
      if (isHome) {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate(`/#${sectionId}`);
      }
    },
    [isHome, navigate, closeMobile],
  );

  const renderNavItem = (item: NavItem, isMobile: boolean) => {
    const baseClass = isMobile
      ? "block text-sm font-mono transition-colors"
      : "text-xs font-mono transition-colors";

    if (item.sectionId) {
      return (
        <button
          key={item.sectionId}
          type="button"
          onClick={() => handleSectionClick(item.sectionId!)}
          className={`${baseClass} text-muted-foreground hover:text-foreground cursor-pointer`}
        >
          {item.label}
        </button>
      );
    }

    const isActive = location.pathname === item.to;
    return (
      <Link
        key={item.to}
        to={item.to!}
        onClick={closeMobile}
        className={`${baseClass} ${
          isActive
            ? "text-primary font-semibold"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-current={isActive ? "page" : undefined}
      >
        {item.label}
      </Link>
    );
  };

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
          onClick={(e) => {
            if (isHome) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          {`<${PERSONAL.fullName}/>`}
        </Link>

        {/* Desktop links — centered */}
        <div className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((item) => renderNavItem(item, false))}
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
          {navLinks.map((item) => renderNavItem(item, true))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
