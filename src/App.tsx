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
  <I18nProvider>\n    <BrowserRouter basename=\"/portfolio-front\">\n      <Routes>\n        <Route element={<Layout />}>\n          {/* Home — one-page portfolio */}\n          <Route path=\"/\" element={<Index />} />\n\n          {/* About */}\n          <Route path=\"/about\" element={<About />} />\n\n          {/* Skills */}\n          <Route path=\"/competences\" element={<Competences />} />\n          <Route path=\"/competences/:slug\" element={<CompetenceDetail />} />\n\n          {/* Achievements */}\n          <Route path=\"/realisations\" element={<Realisations />} />\n          <Route path=\"/realisations/:slug\" element={<RealisationDetail />} />\n\n          {/* Career timeline */}\n          <Route path=\"/parcours\" element={<Parcours />} />\n\n          {/* 404 fallback */}\n          <Route path=\"*\" element={<NotFound />} />\n        </Route>\n      </Routes>\n    </BrowserRouter>\n  </I18nProvider>\n);\n\nexport default App;\n