# Plan d'action — Portfolio Front

## Contexte

Le projet est un portfolio React + Vite + TailwindCSS v4. Les composants shadcn/ui sont déjà **majority replacés** (seuls `Button.tsx` et `Card.tsx` subsistent dans `src/components/ui/`). Lovable et ses dépendances semblent déjà absents du `package.json`. Le README, la navigation et le contenu doivent être mis à jour.

> [!IMPORTANT]
> Les phases 1 et 2 sont des prérequis techniques. Ne pas les sauter même si elles semblent "déjà faites" — il peut rester des résidus à nettoyer.

---

## Phase 1 — Nettoyage technique (fondations)

**Objectif :** Supprimer tout ce qui est mort ou redondant avant d'écrire du nouveau code.

### 1.1 Audit des dépendances Lovable / shadcn

- Vérifier s'il reste des imports `@/lib/utils` (cn, clsx), des références `radix-ui`, `class-variance-authority`, `cmdk`, etc.
- Supprimer tout ce qui est inutilisé dans `package.json` + relancer `pnpm install`.
- Nettoyer `src/lib/` si le dossier ne sert plus qu'aux utils shadcn.

> [!NOTE]
> Le `package.json` actuel est déjà propre (React, lucide-react, react-router-dom, TailwindCSS). Cette étape sera rapide mais doit être confirmée par un audit des imports.

### 1.2 Révision de `Button.tsx` et `Card.tsx`

- Ces deux composants dans `src/components/ui/` sont les seuls vestiges de l'ancienne stack.
- Les réécrire en Tailwind pur si ce n'est pas déjà le cas (pas de CVA, pas de Radix).
- Vérifier qu'ils n'ont aucune dépendance externe cachée.

### 1.3 Favicon

- Remplacer `favicon.ico` par `logo-portfolio.png` dans le `<head>` de `index.html`.
- ⚠️ Le `index.html` utilise déjà `/portfolio-front/logo-portfolio.png` comme icone — **vérifier si le changement est déjà appliqué ou si c'est juste pour une route de déploiement**.

---

## Phase 2 — Évolutions UI / Navigation

**Objectif :** Améliorer l'UX sans casser la structure existante.

### 2.1 Supprimer la section Contact → Icônes sociales dans la Navbar

- Retirer `ContactSection.tsx` de la page home et **supprimer le fichier** (pas de page dédiée — pas besoin).
- Ajouter dans la **Navbar** (partie droite, à côté du `LanguageSwitcher`) les 3 liens iconiques : LinkedIn, GitHub, Mail.
- Le lien Mail = simple `<a href="mailto:ton@email.com">` — pas de formulaire, redirige directement vers le client mail de l'utilisateur.
- Utiliser les icônes déjà disponibles dans `src/components/icons/` (GithubIcon, LinkedinIcon) + `Mail` de lucide-react.
- Respecter l'accessibilité : `aria-label` descriptif + `rel="noopener noreferrer"` sur les liens externes.

> [!NOTE]
> L'`ExternalLink` accessible est déjà implémenté dans `src/components/a11y/ExternalLink.tsx`. L'utiliser.

### 2.2 Switcher FR/EN — clarté visuelle

- Le `LanguageSwitcher` existe déjà. Évaluer s'il est assez visible (taille, contraste, position).
- Si besoin, remplacer le texte par un badge type `FR | EN` avec le flag ou un style plus prononcé. Il faut que l'utilisateur sache si il est en FR ou en EN Et que le design indique clairement qu'il peut switcher.
- **Ne pas dupliquer la logique i18n existante**.

### 2.3 Position de la section Stack

- La section Stack doit apparaître en 2e position (juste après Hero), au même niveau visible.
- Vérifier l'ordre des sections dans la page home et dans `HOME_SECTIONS` (constants).
- Modifier uniquement l'ordre, pas le composant lui-même.

### 2.4 Mémorisation de la dernière section (sessionStorage)

**Cas d'usage :** quand l'utilisateur navigue vers une autre page puis clique "Retour", il doit retrouver la section qu'il avait quittée.

- Stocker l'`id` de la section active dans `sessionStorage` à chaque changement de section.
- **TTL 15 min** : stocker aussi un timestamp, invalider la valeur si `Date.now() - timestamp > 15 * 60 * 1000`.
- Au montage de la page Home, lire le sessionStorage : si valeur valide, scroll vers la section correspondante.
- Implémenter dans le hook existant qui gère `activeSection` (probablement dans `useScrollSnap` ou équivalent) — **ne pas dupliquer la logique**.
- Nettoyer la valeur sessionStorage quand l'utilisateur quitte le site (`beforeunload` ou simplement laisser le TTL faire le travail).

---

## Phase 3 — Données structurées (non-éditorial)

**Objectif :** Corriger les données factuelles sans toucher au ton narratif.

> [!NOTE]
> Le contenu narratif (ton, histoire, accroche) sera traité en **Phase 5** séparément.

### 3.1 Section Formation — O'Clock

- Simplifier les badges de compétences : les trier par **niveau de maîtrise décroissant**.
- Supprimer les badges redondants ou peu significatifs.

### 3.2 Section Experience — Orange Business

- Renommer "Orange" → "Orange Business" partout.
- Scinder l'expérience en **2 entrées distinctes** :
  1. Alternance Bac+3 (dates + description propre)
  2. Renouvellement Bac+5 (dates + description propre)

---

## Phase 4 — Divers et documentation

### 4.1 README

- Réécrire le README pour refléter la stack actuelle (React, Vite, TailwindCSS v4, Vitest).
- Inclure : installation, dev, build, tests, structure des dossiers clés.

### 4.2 Collecte d'avis (Teams)

- Non-technique. À faire manuellement : envoyer le lien de démo aux collègues via Teams pour retours.
- Intégrer les retours en Phase 5.

---

## Phase 5 — Contenu narratif (optionnelle, à faire en dernier)

**Objectif :** Retravailler les textes pour raconter une histoire, pas juste lister des faits. Phase 100% éditoriale.

> [!IMPORTANT]
> Touche uniquement `src/i18n/locales/`. Aucun composant modifié.

### 5.1 Hero — Accroche
- Enrichir avec : _"De l'accompagnement médico-social au développement web — une reconversion atypique."_
- Ajouter un encart "spoiler" discret : _"Ce parcours n'est pas commun."_
- Bouton : `"Découvrir ma reconversion atypique"`.

### 5.2 Past — Pourquoi la reconversion
- Expliquer le **déclencheur** (pas juste le "quoi", mais le "pourquoi").
- Phrase de transition vers O'Clock.

### 5.3 Ton général
- Roman : **intro → intrigue → climax → résolution**.
- Synthétique : 2-3 phrases max par bloc.
- Soigner les labels des chevrons de transition entre sections.

---

## Ordre d'exécution recommandé

```
Phase 1 → Phase 2.1 → Phase 2.3 → Phase 2.2 → Phase 2.4 → Phase 3 → Phase 4 → Phase 5
```

- Phases 1–2 : fondations techniques (bloquantes pour la suite).
- Phase 3 : corrections de données factuelles.
- Phase 4 : documentation.
- Phase 5 : contenu narratif — optionnelle, après retours Teams.

---

## Ce que je ne recommande PAS (objectivité)

- **Page `/contact` dédiée** : inutile, les icônes sociales dans la navbar + `mailto:` direct suffisent (YAGNI).
- **Formulaire de contact** : supprimé — `mailto:` direct est plus simple et plus fiable sans backend.
