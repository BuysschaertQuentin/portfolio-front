# 🚀 Portfolio — Quentin Buysschaert

Portfolio personnel développé avec une approche **retro-futuriste** et **pixel-art**, mettant en avant mon parcours de reconversion et mes compétences de développeur Fullstack.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-v7-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-v5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vitest](https://img.shields.io/badge/Vitest-v4-6E9F18?logo=vitest&logoColor=white)](https://vitest.dev/)

---

## ✨ Caractéristiques

- 🌑 **Mode sombre natif** avec design retro-futuriste.
- 🎨 **Esthétique Pixel Art** pour les illustrations et le branding.
- 🌍 **Internationalisation (i18n)** complète (Français / Anglais).
- 🖱️ **Navigation Fluide** : Système de scroll snap chronologique.
- 📱 **Responsive Design** : Optimisé pour tous les écrans.
- ♿ **Accessibilité** : Respect des standards WCAG.

---

## 🛠️ Stack Technique

- **Core** : React 19 + TypeScript 5
- **Build Tool** : Vite 7
- **Styling** : Tailwind CSS v4 (utilisant `@theme` et les variables CSS natives)
- **Navigation** : React Router 7
- **Icônes** : Lucide React + Icônes personnalisées
- **Tests** : Vitest + React Testing Library
- **Linting/Formatting** : ESLint + Prettier

---

## 📂 Structure du projet

```bash
src/
├── assets/          # Images, logos, et illustrations pixel art
├── components/      # Composants atomiques et moléculaires
│   ├── ui/          # Composants de base (Button, Card, Badges...)
│   ├── navigation/  # Navigation (Navbar, ScrollNav, Chevrons)
│   └── a11y/        # Utilitaires d'accessibilité
├── constants/       # Données statiques et configuration des sections
├── hooks/           # Hooks React personnalisés (scroll, i18n...)
├── i18n/            # Configuration i18n (locales fr/en)
├── layouts/         # Templates de mise en page (MainLayout)
├── pages/           # Composants de pages (Home, Realisations, Parcours...)
├── services/        # Logique métier et services (TechService...)
├── test/            # Configuration et utilitaires de test
└── types/           # Définitions TypeScript globales
```

---

## 🚀 Installation & Utilisation

### Prérequis

- [Node.js](https://nodejs.org/) (v20+)
- [pnpm](https://pnpm.io/) (v9+)

### Installation

1. Clonez le dépôt :
   ```bash
   git clone <url-du-repo>
   cd portfolio-front
   ```

2. Installez les dépendances :
   ```bash
   pnpm install
   ```

3. Configurez les variables d'environnement :
   Copiez le fichier `.env.example` vers `.env` et remplissez vos informations.

### Scripts Disponibles

| Commande | Description |
| :--- | :--- |
| `pnpm dev` | Lance le serveur de développement (`http://localhost:5173`) |
| `pnpm build` | Génère le build de production dans le dossier `dist/` |
| `pnpm preview` | Prévisualise localement le build de production |
| `pnpm test` | Exécute les tests unitaires via Vitest |
| `pnpm test:watch` | Exécute les tests en mode interactif |
| `pnpm lint` | Analyse le code pour détecter des erreurs |
| `pnpm format` | Formate le code avec Prettier |

---

## 🧪 Tests

Le projet utilise **Vitest** comme moteur de test. Les tests sont situés à côté des composants ou dans le dossier `src/test`.

```bash
pnpm test
```

---

## 🌐 Déploiement

Le projet est configuré pour un déploiement continu. Le build généré est optimisé pour les plateformes de hosting statiques (Vercel, Netlify, GitHub Pages).

---

## 📝 Licence

© 2026 Quentin Buysschaert — Tous droits réservés.
