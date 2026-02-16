# Portfolio — Frontend

Portfolio de développeur Fullstack construit avec React, TypeScript et Tailwind CSS.

## Stack technique

| Catégorie     | Technologies                                    |
| ------------- | ----------------------------------------------- |
| **Framework** | [React 18](https://react.dev/) + TypeScript     |
| **Build**     | [Vite 5](https://vitejs.dev/)                   |
| **Styling**   | [Tailwind CSS 3](https://tailwindcss.com/)      |
| **Routing**   | [React Router 6](https://reactrouter.com/)      |
| **Data**      | [TanStack Query](https://tanstack.com/query)    |
| **Icônes**    | [Lucide React](https://lucide.dev/)             |
| **Tests**     | [Vitest](https://vitest.dev/) + Testing Library |

## Prérequis

- **Node.js** ≥ 18
- **npm** ≥ 9

## Installation

```bash
npm install
```

## Scripts disponibles

| Commande             | Description                          |
| -------------------- | ------------------------------------ |
| `npm run dev`        | Serveur de développement (port 8080) |
| `npm run build`      | Build de production                  |
| `npm run preview`    | Prévisualisation du build            |
| `npm run lint`       | Lint ESLint                          |
| `npm test`           | Exécution des tests (une fois)       |
| `npm run test:watch` | Tests en mode watch                  |

## Structure du projet

```
src/
├── assets/          # Images et ressources statiques
├── components/      # Composants React (sections du portfolio)
├── hooks/           # Hooks personnalisés (auth)
├── pages/           # Pages (Index, NotFound)
├── test/            # Configuration et fichiers de test
├── App.tsx          # Composant racine + routing
├── index.css        # Design tokens + styles globaux (Tailwind)
└── main.tsx         # Point d'entrée
```

## Sections du portfolio

- **Navbar** — Navigation fixe avec glassmorphism
- **Hero** — Présentation + CTA
- **Expérience** — Parcours professionnel (alternance Orange)
- **Formation** — Bootcamp O'Clock
- **Parcours** — Reconversion depuis auxiliaire de vie
- **Projets** — Réalisations techniques
- **Stack** — Technologies maîtrisées
- **Contact** — Formulaire de contact
- **Footer** — Liens sociaux

## Licence

Projet privé.
