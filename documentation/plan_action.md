# Plan d'Action — Amélioration du Portfolio

**Référence** : `grille_evaluation.md` — Expert Ingénierie du Logiciel (EIL)
**Date de rédaction** : 24 février 2026
**Score potentiel actuel estimé** : ~15 / 100
**Score cible** : 95+ / 100

---

## Vue d'ensemble des phases

```
Phase 0 — CI/CD & déploiement GitHub Pages        (~1h)   → mise en ligne
Phase 1 — Infos réelles & corrections rapides     (~1h)   → +10 pts
Phase 2 — Architecture multi-pages                (~2h)   → débloque tout
Phase 3 — Section "À propos"                      (~2h)   → +15 pts
Phase 4 — Détail compétences                      (~4h)   → +30 pts
Phase 5 — Détail réalisations                     (~4h)   → +20 pts
Phase 6 — Parcours professionnel (frise)          (~2h)   → +5 pts
Phase 7 — Navigation circulaire                   (~1h)   → +5 pts
Phase 8 — Finitions & relecture                   (~1h)   → sécuriser les pts
Phase 9 — Validation déploiement final            (~30min)→ vérification en prod
```

---

## Phase 0 — CI/CD & déploiement GitHub Pages

> **Objectif** : Avoir le site en ligne dès le début pour tester chaque phase en conditions réelles.
> ⚠️ Infos requises : nom exact du repo GitHub + pseudo GitHub.

- [x] **0.1** Confirmer la structure du repo (repo dédié `portfolio-front`)
- [x] **0.2** Nom du repo : `BuysschaertQuentin/portfolio-front` (base: `/portfolio-front/`)
  - Si `<pseudo>.github.io` → URL propre, `base: "/"` dans Vite
  - Si autre nom (ex: `portfolio`) → URL `<pseudo>.github.io/portfolio`, configurer `base: "/portfolio/"` dans `vite.config.ts`
- [x] **0.3** Activer GitHub Pages dans les settings du repo (Source : GitHub Actions)
- [x] **0.4** Créer le workflow `.github/workflows/deploy.yml` dans `portfolio-front`
  - Trigger : push sur `main`
  - Steps : checkout → setup Node 20 → `npm ci` → `npm run build` → `npm test` → deploy `dist/` sur `gh-pages`
- [x] **0.5** Vérificatio déploiement initial OK
- [x] **0.6** SPA Routing Fallback (Correction 404 GitHub Pages via script de redirection)

---

## Phase 1 — Infos réelles & corrections rapides

> **Objectif** : Corriger les placeholders et données factices. Sans ça, tout le reste est invalide.

- [x] **1.1** Remplacer email (quentin.buysschaert@gmail.com)
- [x] **1.2** Remplacer URLs LinkedIn et GitHub
- [x] **1.3** Ajouter le **prénom et nom complet** dans la Navbar
- [x] **1.4** Ajouter la **photo de profil** dans `HeroSection`
- [x] **1.5** Ajouter le **lien de téléchargement CV** (`public/cv.pdf`)
- [x] **1.6** Ajouter les **dates** réelles (Care assistant, O'Clock, Orange)
- [x] **1.7** Ajouter les **logos Orange et O'Clock**
- [x] **Bonus** : Refactoring Clean Code (constants, memoization, a11y)

---

## Phase 2 — Architecture multi-pages (React Router)

> **Objectif** : Passer d'un one-page à un site multi-pages. C'est le prérequis technique pour les phases 3, 4 et 5.

- [x] **2.1** Définir la structure de routes dans `App.tsx` :
  ```
  /                         → page d'accueil (one-page actuelle)
  /about                    → À propos
  /competences              → Synthèse des compétences
  /competences/:slug        → Détail d'une compétence
  /realisations             → Synthèse des réalisations
  /realisations/:slug       → Détail d'une réalisation
  /parcours                 → Parcours professionnel (frise)
  ```
- [x] **2.2** Créer les pages vides correspondantes dans `src/pages/`
- [x] **2.3** Mettre à jour la `Navbar` pour utiliser des `<Link>` React Router vers ces nouvelles routes (en plus des ancres `#section` sur la home)
- [x] **2.4** Créer un composant `Layout.tsx` avec `Navbar` + `Footer` pour toutes les pages
- [x] **2.5** S'assurer que la Navbar est présente et identique sur toutes les pages (critère "persistant partout")

---

## Phase 3 — Section "À propos" (15 pts)

> **Objectif** : Page dédiée `/about` avec contenu structuré.
> La grille attend : valeurs, projet pro/perso, soft skills, centres d'intérêt.

- [x] **3.1** Créer la page `src/pages/About.tsx`
- [x] **3.2** Rédiger et intégrer le contenu en plusieurs blocs :
  - **Bloc "Mes valeurs"** : 3–4 valeurs clés (ex : rigueur, empathie, engagement) avec paragraphes explicatifs. Axé sur l'expert humain et responsable.
  - **Bloc "Mon projet professionnel"** : Où tu vas, quel type de poste tu cibles, dans quel secteur, pourquoi.
  - **Bloc "Mon projet personnel"** : Ce qui te motive au-delà du travail.
  - **Bloc "Soft skills"** : Reprendre et enrichir les 4 de `PastSection` (empathie, résilience, gestion des priorités, travail en équipe).
  - **Bloc "Centres d'intérêt"** : Passions personnelles avec un peu de détail.
- [x] **3.3** Ajouter un lien "À propos" dans la Navbar
- [x] **3.4** Éviter les formulations auto-centrées ("Je suis passionné par...", "Je suis quelqu'un qui...") — préférer des formulations factuelles

> ⚠️ Le contenu textuel est en **placeholder** — voir `contenu_a_rediger.md` pour remplir.

---

## Phase 4 — Détail des compétences (30 pts)

> **Objectif** : 10 compétences (4–7 humaines + 4–6 techniques), chacune avec sa propre page détaillée.

### Étape 4.1 — Définir les 10 compétences

Proposition à valider/adapter :

| #   | Compétence                                  | Type      |
| --- | ------------------------------------------- | --------- |
| 1   | Empathie                                    | Humaine   |
| 2   | Résilience                                  | Humaine   |
| 3   | Gestion des priorités                       | Humaine   |
| 4   | Travail en équipe                           | Humaine   |
| 5   | Pédagogie / vulgarisation                   | Humaine   |
| 6   | Angular / TypeScript                        | Technique |
| 7   | NestJS / Node.js                            | Technique |
| 8   | Conception de bases de données (PostgreSQL) | Technique |
| 9   | CI/CD & DevOps (Docker, Git)                | Technique |
| 10  | Développement React                         | Technique |

### Étape 4.2 — Page synthèse `/competences`

- [x] Schéma/grille visuelle comparant les 10 compétences (ex : jauge de niveau, radar chart, ou tableau clair)
- [x] Division visible humain / technique
- [x] Chaque compétence = carte cliquable vers sa page détail

### Étape 4.3 — Page détail `/competences/:slug`

Pour **chaque compétence**, rédiger et structurer :

- [x] **Définition** : contexte professionnel + actualité de la compétence
- [x] **Preuves** : 1–3 anecdotes concrètes avec résultat chiffré/observable, liens vers les réalisations associées
- [x] **Autocritique** : niveau de maîtrise honnête, place dans ton profil d'expert, vitesse d'acquisition
- [x] **Recul** : conseils que tu te donnerais ou donnerais à quelqu'un qui débute
- [x] **Évolution** : objectif à moyen terme, formations prévues
- [x] **Réalisations liées** : liste en bas de page avec liens

> ⚠️ La **structure des pages** est en place. Le contenu textuel est en **placeholder** — voir `contenu_a_rediger.md`.

---

## Phase 5 — Détail des réalisations (20 pts)

> **Objectif** : Au moins 5 réalisations avec page détaillée chacune.

### Étape 5.1 — Définir les 5 réalisations

Proposition à valider/adapter :

| #   | Réalisation                                         | Contexte         |
| --- | --------------------------------------------------- | ---------------- |
| 1   | Plateforme interne Orange (nom évocateur à définir) | Pro – alternance |
| 2   | Portfolio (ce site)                                 | Perso            |
| 3   | Bot (titre à compléter)                             | Perso            |
| 4   | Projet étudiant à ajouter                           | Formation        |
| 5   | Projet étudiant à ajouter                           | Formation        |

### Étape 5.2 — Page synthèse `/realisations`

- [x] Liste ou grille de 5 cartes avec nom évocateur + court descriptif
- [x] Chaque carte pointe vers sa page détail

### Étape 5.3 — Page détail `/realisations/:slug`

Pour **chaque réalisation**, structurer :

- [x] **Nom évocateur** : indépendant du contexte (pas "Projet Orange", mais "Refonte du portail de gestion X")
- [x] **Définition** : présentation globale du projet
- [x] **Cadrage** : objectifs, contexte, enjeux, risques identifiés
- [x] **Action** : étapes réalisées, acteurs impliqués, interactions
- [x] **Bilan** : résultats mesurables (pour toi et l'entreprise), "lendemain" du projet
- [x] **Regard critique** : ce qui aurait pu être mieux, ce qui t'a surpris
- [x] **Compétences liées** : liste en bas avec liens vers les pages compétences

> ⚠️ La **structure des pages** est en place. Le contenu textuel est en **placeholder** — voir `contenu_a_rediger.md`.

---

## Phase 6 — Parcours professionnel en frise (5 pts)

> **Objectif** : Page `/parcours` avec une frise anti-chronologique claire.

- [x] **6.1** Créer la page `src/pages/Parcours.tsx`
- [x] **6.2** Implémenter une frise verticale anti-chronologique (plus récent en haut)
- [x] **6.3** Pour chaque expérience entreprise :
  - Niveau 1 visible : période précise, intitulé de poste, nom + logo entreprise
  - Niveau 2 (accordéon ou section dépliable) : statut (alternant), missions détaillées, vision de l'entreprise
- [x] **6.4** Pour chaque formation :
  - Niveau 1 : période, diplôme/certif, nom école + logo avec lien institutionnel (o-clock.io)
  - Niveau 2 : texte de présentation, vision de la pédagogie
- [x] **6.5** Ajouter une section "Tests & Certifications" si applicable (date, intitulé)

> ⚠️ La **structure** est en place. Le contenu détaillé (missions, vision, certifications) est en **placeholder** — voir `contenu_a_rediger.md`.

---

## Phase 7 — Navigation circulaire (5 pts)

> **Objectif** : Les compétences pointent vers les réalisations et vice-versa.

- [x] **7.1** Dans chaque page détail compétence : section "Réalisations associées" avec liens cliquables
- [x] **7.2** Dans chaque page détail réalisation : section "Compétences mobilisées" avec liens cliquables
- [x] **7.3** Vérifier que la navigation est bidirectionnelle et cohérente
- [x] **7.4** Optionnel : sur la page synthèse des compétences, chaque tag de réalisation est cliquable

---

## Phase 8 — Finitions & relecture

- [x] **8.1** Relecture orthographique complète de tous les textes (pénalité -1% par 5 fautes)
  > ⚠️ Relecture finale à refaire quand les placeholders auront été remplis
- [x] **8.2** Vérifier que prénom + nom + photo apparaissent sur toutes les pages (critère basique)
  > Photo ajoutée dans la Navbar (visible partout). Nom dans Navbar + Footer.
- [x] **8.3** Vérifier que le bloc contact (ou au minimum l'email) est accessible depuis toutes les pages (via footer ou navbar)
  > Footer avec email, LinkedIn, GitHub sur toutes les pages via Layout.
- [x] **8.4** Tester la navigation mobile (menu hamburger → toutes les routes)
  > Menu hamburger contient tous les liens (sections home + sous-pages).
- [x] **8.5** Vérifier que tous les liens (GitHub, LinkedIn, réalisations, compétences) fonctionnent
  > Navigation circulaire bidirectionnelle vérifiée. Liens externes avec `rel="noopener noreferrer"`.
- [x] **8.6** Passer le site en revue avec la grille d'évaluation case par case
  > Audit complet réalisé — 100% des critères de structure couverts.
- [x] **8.7** Meta OG et title mis à jour avec le nom complet

---

## Phase 9 — Validation déploiement final

> **Objectif** : S'assurer que la version GitHub Pages est identique à ce qu'on voit en local.

- [ ] **9.1** Vérifier le build en mode production : `npm run build && npm run preview`
- [ ] **9.2** Tester toutes les routes sur l'URL GitHub Pages (les routes React Router nécessitent une config `404.html` pour le fallback)
- [ ] **9.3** Vérifier le chargement des assets (images, fonts) sur l'URL distante
- [ ] **9.4** Tester sur mobile via l'URL publique
- [ ] **9.5** Vérifier les méta OG (`og:title`, `og:description`) pour le partage sur les réseaux

---

## Récapitulatif des points

| Phase                     | Points débloqués | Priorité     |
| ------------------------- | ---------------- | ------------ |
| 0 — CI/CD GitHub Pages    | Mise en ligne    | 🔴 Immédiate |
| 1 — Infos réelles         | ~10 (basiques)   | 🔴 Immédiate |
| 2 — Architecture routes   | Prérequis        | 🔴 Immédiate |
| 3 — À propos              | 15               | 🔴 Haute     |
| 4 — Détail compétences    | 30               | 🔴 Haute     |
| 5 — Détail réalisations   | 20               | 🔴 Haute     |
| 6 — Frise parcours        | 5                | 🟡 Moyenne   |
| 7 — Navigation circulaire | 5                | 🟡 Moyenne   |
| 8 — Finitions             | Sécurisation     | 🟢 Basse     |
| 9 — Validation prod       | Vérification     | 🟢 Basse     |

**Total atteignable : ~95 / 100**
