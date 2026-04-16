import profileImg from "@/assets/photo_profil.jpg";
import { PERSONAL } from "@/constants/personal";
import { useI18n } from "@/i18n";
import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";

interface NavItem {
  readonly label: string;
  readonly to: string;
}

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useI18n();
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Pages only — no section links
  const navLinks: readonly NavItem[] = useMemo(
    () => [
      { to: "/about", label: t("nav.about") },
      { to: "/competences", label: t("nav.competences") },
      { to: "/realisations", label: t("nav.realisations") },
      { to: "/parcours", label: t("nav.parcours") },
    ],
    [t],
  );

  // Close mobile menu on Escape
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
      className="glass-card border-border/50 fixed top-0 right-0 left-0 z-50 border-b"
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="text-primary flex items-center gap-2 font-mono text-sm font-bold"
          aria-label={`${PERSONAL.fullName} — Home`}
          onClick={(e) => {
            if (isHome) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <img
            src={profileImg}
            alt=""
            className="border-primary/50 h-7 w-7 rounded-full border object-cover"
            width={28}
            height={28}
          />
          {`<${PERSONAL.fullName}/>`}
        </Link>

        {/* Desktop links — centered */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 md:flex">
          {navLinks.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`font-mono text-xs transition-colors ${
                  isActive
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
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
            className="text-muted-foreground hover:text-foreground focus-visible:ring-primary rounded-md p-1 focus:outline-none focus-visible:ring-2"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            type="button"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="glass-card border-border/50 space-y-3 border-t px-4 py-4 md:hidden"
        >
          {navLinks.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={closeMobile}
                className={`block font-mono text-sm transition-colors ${
                  isActive
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
