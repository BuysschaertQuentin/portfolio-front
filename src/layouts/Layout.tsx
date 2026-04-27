import { useI18n } from "@/i18n";
import { Suspense, useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

/**
 * Shared layout wrapper for all pages.
 * Renders the persistent Navbar, skip-to-content link, and Footer.
 * Centralizes Suspense for lazy-loaded pages and manages route transition behaviors (scroll & focus).
 */
const Layout = () => {
  const { t } = useI18n();
  const { pathname } = useLocation();
  const mainRef = useRef<HTMLElement>(null);

  // Reset scroll and focus on route change for accessibility
  useEffect(() => {
    window.scrollTo(0, 0);
    // Focus the main content area for screen readers
    mainRef.current?.focus();
  }, [pathname]);

  return (
    <div className="flex h-dvh flex-col overflow-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:z-100 focus:bg-background focus:p-4 focus:font-bold focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
      >
        {t("nav.skipToContent")}
      </a>
      <Navbar />
      <main
        ref={mainRef}
        id="main-content"
        className="flex-1 overflow-y-auto overflow-x-hidden outline-none"
        tabIndex={-1}
      >
        <Suspense fallback={<div className="flex flex-1 items-center justify-center">{t("common.loading")}</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
