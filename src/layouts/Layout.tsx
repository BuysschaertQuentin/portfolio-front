import { useI18n } from "@/i18n";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

/**
 * Shared layout wrapper for all pages.
 * Renders the persistent Navbar, skip-to-content link, and Footer.
 */
const Layout = () => {
  const { t } = useI18n();

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-100 focus:p-4 focus:bg-background focus:text-primary focus:font-bold focus:outline-none focus:ring-2 focus:ring-primary"
      >
        {t("nav.skipToContent")}
      </a>
      <Navbar />
      <main
        id="main-content"
        className="min-h-screen bg-background text-foreground overflow-x-hidden"
        tabIndex={-1}
      >
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
