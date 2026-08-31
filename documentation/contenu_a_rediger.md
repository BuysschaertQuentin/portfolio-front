# Contenu à rédiger — Portfolio

**Objectif** : Ce fichier recense **toutes les informations personnelles à fournir** pour compléter le portfolio. Chaque section correspond à une page ou un bloc du site.
**Fichiers impactés** : `src/i18n/locales/fr.ts` et `src/i18n/locales/en.ts`

> 💡 **Mode d'emploi** : Pour chaque item `[ ]`, écris un texte brut (en français). Je me chargerai de l'intégrer, de le reformuler si besoin (formulations factuelles, pas auto-centrées), et de le traduire en anglais.

---

## 1. Page « Profil » (`/about`)

### 1.1 Introduction (3–5 phrases)

L'intro doit **intégrer tes valeurs** (rigueur, empathie, engagement, curiosité) de manière naturelle dans le texte, pas en bloc séparé.

- [ ] Courte accroche de présentation. D'où tu viens (9 ans auxiliaire de vie → reconversion dev), qu'est-ce qui te caractérise. Glisse tes valeurs dans le texte.
  - _Clé i18n : `about.intro`_

### 1.2 Projet professionnel (1 paragraphe)

- [ ] Quel type de poste tu vises après le master (mars 2027), dans quel secteur, pourquoi.
  - _Clé : `about.proProjectDesc`_

### 1.3 Projet personnel (1 paragraphe)

- [ ] Ce qui te motive en dehors du travail salarié. Side-projects, apprentissage, mentorat, etc.
  - _Clé : `about.persoProjectDesc`_

### 1.4 Centres d'intérêt (3–4 intérêts)

Pour chacun : un titre + 1–2 phrases de description.

- [ ] Intérêt 1 — titre + description
  - _Clés : `about.interests.interest1` / `interest1Desc`_
- [ ] Intérêt 2 — titre + description
  - _Clés : `about.interests.interest2` / `interest2Desc`_
- [ ] Intérêt 3 — titre + description
  - _Clés : `about.interests.interest3` / `interest3Desc`_
- [ ] Intérêt 4 — titre + description (optionnel)
  - _Clés : `about.interests.interest4` / `interest4Desc`_

> ℹ️ **Note** : Le bloc "Qualités humaines" de cette page est **automatique** — il affiche un aperçu des 5 compétences humaines définies dans `src/constants/skills.ts` avec un lien "En savoir plus →" vers la page détail `/competences/:slug`. Pas de contenu à rédiger ici, tout est dans la section Compétences (§2).

---

## 2. Page « Compétences » (`/competences`) — Phase 4

### 2.1 Liste des 10 compétences

5 humaines + 5 techniques. Confirme ou modifie :

**Humaines :**

- [x] 1. Empathie
- [x] 2. Résilience
- [x] 3. Gestion des priorités
- [x] 4. Travail en équipe
- [x] 5. Pédagogie / vulgarisation

**Techniques :**

- [x] 6. Angular / TypeScript
- [x] 7. NestJS / Node.js
- [x] 8. Conception de bases de données (MySQL / PostgreSQL)
- [x] 9. CI/CD & DevOps (Docker, Git, CloudFoundry)
- [x] 10. React

### 2.2 Contenu de chaque page détail (`/competences/:slug`)

Pour **chaque compétence**, il faudra fournir :

- [ ] **Définition** : contexte professionnel + actualité de la compétence
- [ ] **Preuves** : 1–3 anecdotes concrètes avec résultat chiffré/observable
- [ ] **Autocritique** : niveau de maîtrise honnête, vitesse d'acquisition
- [ ] **Recul** : conseils que tu donnerais à quelqu'un qui débute
- [ ] **Évolution** : objectif à moyen terme, formations prévues
- [ ] **Réalisations liées** : automatique via les données dans `realisations.ts`

> ⚠️ Ce contenu est le plus long à rédiger. Tu peux commencer par 2–3 compétences et compléter les autres au fur et à mesure.

---

## 3. Page « Réalisations » (`/realisations`) — Phase 5

### 3.1 Liste des 5 réalisations

| #   | Nom actuel                          | Contexte                       | Stack                                      | À rédiger                 |
| --- | ----------------------------------- | ------------------------------ | ------------------------------------------ | ------------------------- |
| 1   | **Portail de redirection RH**       | Pro (1ère alternance Orange)   | Angular 21, NestJS 11, MySQL, CloudFoundry | Nom évocateur à confirmer |
| 2   | **Gestion des repos compensateurs** | Pro (2ème alternance Orange)   | Angular 18, Java, MySQL, microservices     | Nom évocateur à confirmer |
| 3   | **App mobile Compétences**          | Pro (2ème alternance Orange)   | Flutter, Dart, Supabase                    | Nom évocateur à confirmer |
| 4   | **O'voyage**                        | Formation (O'Clock, apothéose) | Vue.js, NestJS                             | ✅ Nom déjà défini        |
| 5   | **Portfolio personnel**             | Perso                          | React, TypeScript, Vite, Tailwind          | ✅ Nom déjà défini        |

> ⚠️ Le **Bot Discord a été supprimé** — c'était un exemple, pas un vrai projet.

### 3.2 Contenu de chaque page détail (`/realisations/:slug`)

Pour **chaque réalisation**, il faudra fournir :

- [ ] **Nom évocateur** : indépendant du contexte
- [ ] **Définition** : présentation globale du projet
- [ ] **Cadrage** : objectifs, contexte, enjeux, risques
- [ ] **Action** : étapes réalisées, acteurs impliqués
- [ ] **Bilan** : résultats mesurables (pour toi et l'entreprise)
- [ ] **Regard critique** : ce qui aurait pu être mieux
- [ ] **Compétences liées** : quelles compétences ont été mobilisées (parmi les 10 définies). Associations proposées :
  - Portail RH → Angular/TS, NestJS, BDD, CI/CD, Travail en équipe
  - Repos compensateurs → Angular/TS, BDD, Travail en équipe, Gestion des priorités
  - App mobile → CI/CD, Travail en équipe, Pédagogie _(Flutter n'est pas dans le top 10, ok)_
  - O'voyage → NestJS, Travail en équipe, Gestion des priorités
  - Portfolio → React, CI/CD
  - ⚠️ **Valide ou corrige ces associations**, elles impactent la navigation circulaire.

---

## 4. Page « Parcours » (`/parcours`) — Phase 6

### 4.1 Frise chronologique

La frise doit maintenant refléter le **vrai parcours** :

**Expériences professionnelles :**

- [ ] Orange — 2ème alternance (Mars 2025 → Mars 2027) — Master Ingénierie Logicielle
  - Missions détaillées, vision de l'entreprise
  - _Clés : `parcours.entries.orangeBac5.missions` / `.vision`_
- [ ] Orange — 1ère alternance (Nov. 2023 → Déc. 2024) — Bac+3 CDA
  - Missions détaillées
  - _Clés : `parcours.entries.orangeBac3.missions` / `.vision`_
- [ ] Auxiliaire de vie — APF France Handicap, Villeneuve d'Ascq (Oct. 2014 → Août 2023)
  - Missions principales, formation aspirations endotrachéales (2017)
  - _Clés : `parcours.entries.care.missions` / `.vision`_

**Formations :**

- [ ] O'Clock — Bootcamp (Jan. 2023 → Juin 2023) — via Transitions Pro HdF
  - Spécialisation Data (SQL, NoSQL, MongoDB, Redis, GraphQL)
  - Projet "O'voyage" (Vue.js + NestJS)
  - _Clés : `parcours.entries.oclock.presentation` / `.vision`_

**Certifications :**

| #   | Certification                                 | Date        | RNCP           | Statut      |
| --- | --------------------------------------------- | ----------- | -------------- | ----------- |
| 1   | TP "Développeur Web et Web Mobile"            | Juin 2023   | 31114 (Niv. 5) | ✅ Obtenu   |
| 2   | Titre "Concepteur Développeur d'Applications" | Déc. 2024   | 31678 (Niv. 6) | ✅ Obtenu   |
| 3   | Master "Ingénierie Logicielle"                | Mars 2027   | 35419 (Niv. 7) | 🔄 En cours |
| 4   | TOEIC                                         | À planifier | —              | ⏳ À passer |

---

## 5. CV (`public/cv.pdf`)

- [ ] Remplacer le CV actuel par la version à jour

---

## Ordre de priorité recommandé

```
1. Page Profil (§1)             → contenu le plus simple, bon échauffement
2. Réalisations (§3.1)          → confirmer les 5 noms de projets
3. Compétences (§2.1)           → confirmer la liste des 10
4. Parcours (§4)                → vérifier les dates et infos factuelles
5. Détails compétences (§2.2)   → le plus long, à faire progressivement
6. Détails réalisations (§3.2)  → le plus long aussi
7. CV à jour (§5)               → en dernier, quand tout est stabilisé
```
