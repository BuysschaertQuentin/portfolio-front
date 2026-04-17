# Portfolio Front

Portfolio personnel de **Quentin Buysschaert**, développeur Fullstack.

## Stack

| Outil | Version |
|---|---|
| React | 19 |
| Vite | 7 |
| TailwindCSS | 4 |
| TypeScript | 5 |
| Vitest | 4 |
| react-router-dom | 7 |
| lucide-react | 0.574 |

## Prérequis

- [Node.js](https://nodejs.org/) ≥ 20
- [pnpm](https://pnpm.io/) ≥ 9

## Installation

```bash
pnpm install
```

Copier `.env.example` en `.env` et renseigner les variables :

```bash
cp .env.example .env
```

| Variable | Description |
|---|---|
| `VITE_FULL_NAME` | Nom complet affiché dans la navbar et le titre |
| `VITE_EMAIL` | Adresse mail pour le lien `mailto:` |
| `VITE_LINKEDIN_URL` | URL du profil LinkedIn |
| `VITE_GITHUB_URL` | URL du profil GitHub |

## Scripts

```bash
pnpm dev          # Serveur de développement (http://localhost:5173)
pnpm build        # Build de production dans dist/
pnpm preview      # Prévisualiser le build de production
pnpm test         # Lancer les tests (Vitest, run once)
pnpm test:watch   # Lancer les tests en mode watch
pnpm lint         # ESLint
pnpm format       # Prettier
```

## Structure des dossiers

```
src/
├── assets/          # Images, PDF (CV), pixel art
├── components/      # Composants React réutilisables
│   ├── a11y/        # Composants d'accessibilité (ExternalLink, SkipToContent)
│   ├── icons/       # Icônes SVG custom (GitHub, LinkedIn, CloudFoundry)
│   └── ui/          # Composants de base (Button, Card) — Tailwind pur
├── constants/       # Données statiques (sections, stack, personal info)
├── hooks/           # Hooks personnalisés
├── i18n/            # Internationalisation FR/EN
│   └── locales/     # Fichiers de traduction (fr.ts, en.ts)
├── layouts/         # Layout principal (Navbar, Footer)
├── lib/             # Utilitaires divers (spa-redirect)
├── pages/           # Pages React Router (Index, About, Parcours…)
├── test/            # Setup Vitest + tests unitaires
└── types/           # Types TypeScript partagés
```

## Tests

Les tests utilisent [Vitest](https://vitest.dev/) + [@testing-library/react](https://testing-library.com/).

```bash
pnpm test
```

## Déploiement

Le projet est déployé via GitLab CI/CD (`.github/` pour GitHub Actions si besoin). Le build `pnpm build` génère le dossier `dist/` prêt à être servi.

> Le fichier `src/lib/spa-redirect.ts` gère la redirection SPA sur GitHub Pages (hash routing fallback).

## Internationalisation

Le portfolio supporte le français 🇫🇷 et l'anglais 🇬🇧. Le switcher est accessible depuis la navbar.

Les traductions sont dans `src/i18n/locales/fr.ts` et `src/i18n/locales/en.ts`.
