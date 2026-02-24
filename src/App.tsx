import { lazy, Suspense } from "react";
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

const App = () => (
  <I18nProvider>
    <BrowserRouter basename="/portfolio-front">
      <Routes>
        <Route element={<Layout />}>
          {/* Home — one-page portfolio */}
          <Route path="/" element={<Index />} />

          {/* About */}
          <Route
            path="/about"
            element={
              <Suspense>
                <About />
              </Suspense>
            }
          />

          {/* Skills */}
          <Route
            path="/competences"
            element={
              <Suspense>
                <Competences />
              </Suspense>
            }
          />
          <Route
            path="/competences/:slug"
            element={
              <Suspense>
                <CompetenceDetail />
              </Suspense>
            }
          />

          {/* Achievements */}
          <Route
            path="/realisations"
            element={
              <Suspense>
                <Realisations />
              </Suspense>
            }
          />
          <Route
            path="/realisations/:slug"
            element={
              <Suspense>
                <RealisationDetail />
              </Suspense>
            }
          />

          {/* Career timeline */}
          <Route
            path="/parcours"
            element={
              <Suspense>
                <Parcours />
              </Suspense>
            }
          />

          {/* 404 fallback */}
          <Route
            path="*"
            element={
              <Suspense>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </I18nProvider>
);

export default App;
