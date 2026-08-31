export const reactFr = {
  title: "React / TSX",
  shortDesc: "Bibliothèque Front-End déclarative et réactive",
  definition:
    "Pour moi, **React** est la bibliothèque Front-End de référence pour concevoir des interfaces utilisateur réactives, modulaires et hautement performantes. Basé sur une architecture de composants fonctionnels en **TSX** (TypeScript XML) et un DOM virtuel (*Virtual DOM*), React offre un flux de données unidirectionnel qui garantit une prédictibilité totale de l'état applicatif.\n\nJ'utilise React avec les Hooks modernes (`useState`, `useEffect`, `useCallback`, `useMemo`, `useContext`) pour isoler la logique métier du rendu visuel et concevoir des composants fortement typés et réutilisables.",
  proofs:
    "Toutes mes compétences en React s'illustrent directement dans l'architecture de ce site [portfolio-front](https://github.com/BuysschaertQuentin/portfolio-front), développé from scratch avec React 18, TypeScript et Vite.\n\n**1. Tooling & Configuration Vite moderne**\nLe projet est propulsé par Vite et l'extension SWC (`@vitejs/plugin-react-swc`) pour un bundling instantané, complété par une gestion propre d'alias de chemins (`@/`, `@components/`, `@pages/`, `@i18n/`) configurée dans `vite.config.ts` :\n```typescript\nexport default defineConfig({\n  base: \"/portfolio-front/\",\n  plugins: [react()],\n  resolve: {\n    alias: {\n      \"@\": path.resolve(__dirname, \"./src\"),\n      \"@components\": path.resolve(__dirname, \"./src/components\"),\n    },\n  },\n});\n```\n\n**2. Architecture i18n sur-mesure (React Context & Hooks)**\nPlutôt que d'intégrer une dépendance externe lourde, j'ai conçu un système d'internationalisation réactif et immuable via la Context API (`I18nProvider.tsx`), exploitant `useCallback` et `useMemo` pour optimiser les ré-exécutions et persister la langue dans le `localStorage` :\n```tsx\nexport const I18nProvider = ({ children }: I18nProviderProps) => {\n  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);\n\n  const setLocale = useCallback((next: Locale) => {\n    setLocaleState(next);\n    localStorage.setItem(LOCALE_STORAGE_KEY, next);\n    document.documentElement.lang = next;\n  }, []);\n\n  const t = useCallback(\n    (key: string | undefined): string => resolve(localeMap[locale], key),\n    [locale],\n  );\n\n  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);\n  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;\n};\n```\n\n**3. Code-Splitting, Lazy Loading & Routage**\nDans `App.tsx`, j'ai mis en place un découpage dynamique des bundles par page avec `React.lazy()` et React Router v6, assurant un temps de chargement initial minimal et une navigation fluide :\n```tsx\nconst CompetenceDetail = lazy(() => import(\"./pages/CompetenceDetail\"));\n\nconst App = () => (\n  <I18nProvider>\n    <BrowserRouter basename=\"/portfolio-front\">\n      <Routes>\n        <Route element={<Layout />}>\n          <Route path=\"/competences/:slug\" element={<CompetenceDetail />} />\n        </Route>\n      </Routes>\n    </BrowserRouter>\n  </I18nProvider>\n);\n```",
  selfCritique:
    "Mon choix de créer un `I18nProvider` maison montre ma capacité à calibrer mes solutions techniques aux besoins réels du projet sans sur-ingénierie (YAGNI/KISS). Je veille à éviter le sur-usage de `useCallback` ou `useMemo` en ne les réservant qu'aux valeurs et fonctions à fort impact de ré-exécution.",
  hindsight:
    "La combinaison React + TSX + Vite offre une expérience de développement (*DX*) exceptionnelle et une boucle de feedback ultra-rapide. L'utilisation d'une architecture fonctionnelle basée sur les Hooks rend le code extrêmement lisible et testable.",
  evolution:
    "Je poursuis ma veille sur l'écosystème React en explorant les fonctionnalités de React 19 (Server Components, Hook `use()`, Server Actions) ainsi que le framework Next.js pour l'implémentation de rendus hybrides (SSR / SSG).",
};

export const reactEn = {
  title: "React / TSX",
  shortDesc: "Declarative and reactive Front-End library",
  definition:
    "For me, **React** is the reference Front-End library for crafting reactive, modular, and performant user interfaces. Based on functional **TSX** component architecture and Virtual DOM, React enforces a unidirectional data flow.\n\nI leverage modern Hooks (`useState`, `useEffect`, `useCallback`, `useMemo`, `useContext`) to isolate business logic from visual rendering.",
  proofs:
    "All my React skills are directly showcased in the architecture of this portfolio site [portfolio-front](https://github.com/BuysschaertQuentin/portfolio-front), built from scratch with React 18, TypeScript, and Vite.\n\n**1. Modern Tooling & Vite Configuration**\nPowered by Vite and SWC (`@vitejs/plugin-react-swc`) with path aliases (`@/`, `@components/`, `@pages/`, `@i18n/`) in `vite.config.ts`.\n\n**2. Custom i18n Architecture (React Context & Hooks)**\nRather than adding heavy external dependencies, I designed a reactive i18n system via Context API (`I18nProvider.tsx`) with `useCallback` and `useMemo`.\n\n**3. Code-Splitting, Lazy Loading & Routing**\nImplemented dynamic bundle splitting per route using `React.lazy()` and React Router v6.",
  selfCritique:
    "Designing a custom `I18nProvider` highlights my ability to tailor technical solutions to real project needs without over-engineering (YAGNI/KISS).",
  hindsight:
    "React + TSX + Vite delivers an exceptional developer experience (DX) and ultra-fast feedback loop.",
  evolution:
    "I am continuing to explore React 19 (Server Components, `use()` hook) and Next.js for hybrid SSR/SSG rendering.",
};
