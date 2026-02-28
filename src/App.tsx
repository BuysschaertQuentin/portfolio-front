import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { I18nProvider } from "./i18n";
import Layout from "./layouts/Layout";
import Index from "./pages/Index";

const About = lazy(() => import("./pages/About"));
const Competences = lazy(() => import("./pages/Competences"));
const CompetenceDetail = lazy(() => import("./pages/CompetenceDetail"));
const Realisations = lazy(() => import("./pages/Realisations"));
const RealisationDetail = lazy(() => import("./pages/RealisationDetail"));
const Parcours = lazy(() => import("./pages/Parcours"));
const NotFound = lazy(() => import("./pages/NotFound"));

/**
 * Main application entry point with routing configuration.
 * All routes (except index) are lazy-loaded and wrapped in a central Suspense via Layout.
 */
const App = () => (
  <I18nProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* Home — one-page portfolio */}
          <Route path=\"/\" element={<Index />} />

          {/* About */}
          <Route path=\"/about\" element={<About />} />

          {/* Skills */}
          <Route path=\"/competences\" element={<Competences />} />
          <Route path=\"/competences/:slug\" element={<CompetenceDetail />} />

          {/* Achievements */}
          <Route path=\"/realisations\" element={<Realisations />} />
          <Route path=\"/realisations/:slug\" element={<RealisationDetail />} />

          {/* Career timeline */}
          <Route path=\"/parcours\" element={<Parcours />} />

          {/* 404 fallback */}
          <Route path=\"*\" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </I18nProvider>
);

export default App;
