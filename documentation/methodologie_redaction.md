# Méthodologie de rédaction du contenu — Portfolio

## Principe

Répondre section par section. Pour chaque item, tu écris **en français brut** (pas de mise en forme, pas de self-marketing). Je me charge de :

- Reformuler en style factuel (sans "je suis passionné par...")
- Traduire en anglais
- Intégrer dans le code (clés i18n)

---

## Règles de rédaction

1. **Pas d'auto-promotion.** Écrire "Cette expérience a permis de..." plutôt que "Je suis excellent en..."
2. **Concret.** Chaque compétence doit avoir au moins 1 anecdote avec un résultat visible.
3. **Chiffres quand c'est possible.** Durée, nombre d'utilisateurs, pourcentage d'amélioration.
4. **Court.** 2–5 phrases par bloc. Un recruteur scanne, il ne lit pas des pavés.

---

## Tes informations factuelles vérifiées

### Identité

- **Nom** : Quentin Buysschaert
- **Email** : quentin.buysschaert@gmail.com
- **LinkedIn** : https://www.linkedin.com/in/quentin-buysschaert-1b3573218/
- **GitHub** : https://github.com/BuysschaertQuentin

### Parcours chronologique complet

| Période               | Poste / Diplôme                                   | Structure                              | Statut                       |
| --------------------- | ------------------------------------------------- | -------------------------------------- | ---------------------------- |
| Oct. 2014 → Août 2023 | Auxiliaire de vie à domicile                      | APF France Handicap, Villeneuve d'Ascq | CDI                          |
| 2017                  | Formation aspirations endotrachéales              | (via APF)                              | Formation continue           |
| Jan. 2023 → Juin 2023 | Bootcamp "Développeur web - Fullstack JavaScript" | O'Clock (via Transitions Pro HdF)      | Formation (spé Data)         |
| Juin 2023             | **TP "Développeur Web et Web Mobile"**            | RNCP 31114 – Niveau 5                  | ✅ Obtenu                    |
| Août 2023             | Rupture conventionnelle                           | APF France Handicap                    | —                            |
| Nov. 2023 → Déc. 2024 | Développeur Fullstack (alternance)                | Orange Business Services               | Bac+3 CDA                    |
| Déc. 2024             | **Titre "Concepteur Développeur d'Applications"** | RNCP 31678 – Niveau 6                  | ✅ Obtenu                    |
| Mars 2025 → Mars 2027 | Développeur Fullstack (alternance)                | Orange Business Services               | Master Ingénierie Logicielle |
| Mars 2027 (prévu)     | **Master "Ingénierie Logicielle"**                | RNCP 35419 – Niveau 7                  | 🔄 En cours                  |
| À planifier           | TOEIC                                             | —                                      | À passer                     |

### Projets réels chez Orange (3 projets)

| Projet                                                                      | Stack                                         | Rôle                                                                |
| --------------------------------------------------------------------------- | --------------------------------------------- | ------------------------------------------------------------------- |
| **Portail de redirection RH** — Portail menant vers différents outils RH    | Angular 21, NestJS 11, MySQL, CloudFoundry    | Développeur Fullstack                                               |
| **Application mobile Compétences** — Centralisation des compétences équipes | Flutter, Dart, Supabase                       | Développeur mobile + web                                            |
| **Gestion des repos compensateurs** — Gestion pour tout Orange France       | Angular 18, Java (back), MySQL, microservices | **Front-end seul** (revu par le tech lead), collab 2 devs Java back |

### Projet O'Clock

| Projet                                                 | Stack                         | Contexte                            |
| ------------------------------------------------------ | ----------------------------- | ----------------------------------- |
| **O'voyage** — Projet de groupe, apothéose du bootcamp | Vue.js (front), NestJS (back) | Projet en équipe, soutenance finale |

### ~~Bot Discord~~ — **SUPPRIMÉ** (c'était un exemple, pas un vrai projet)

### Stack technique réelle

**Core quotidien** : Angular, TypeScript, NestJS, Node.js, MySQL, Docker, CloudFoundry
**Acquises en formation/projet** : Vue.js, React, PostgreSQL, Flutter, Dart, Supabase
**Transversal** : Git, HTML5, CSS3, JavaScript, Tailwind CSS, Figma, VS Code
**Notions** : Java (collab back-end), MongoDB, Redis, GraphQL, NoSQL (spé O'Clock)

### Compétences humaines (issues de l'expérience auxiliaire de vie)

1. Empathie — 9 ans d'accompagnement de personnes en situation de handicap
2. Résilience — Gestion du stress, adaptation permanente (formation aspirations endotrachéales, Charcot)
3. Gestion des priorités — Autonomie et organisation dans les interventions à domicile
4. Travail en équipe — Collaboration familles, professionnels de santé, APF
5. Pédagogie — Vulgarisation auprès des aidants, formation des nouveaux auxiliaires

---

## Session 1 — ✅ COMPLÉTÉE

Toutes les données factuelles ont été recueillies. Résumé des changements :

- Bot Discord **supprimé** des réalisations
- **3 projets Orange** identifiés (au lieu de 1 générique)
- **O'voyage** confirmé comme projet O'Clock
- **2 alternances Orange** (Bac+3 puis Master), pas 1 continue
- **3 certifications** : TP DWWM (2023), CDA (2024), Master en cours (2027)
- **Spécialisation O'Clock = Data** (SQL, NoSQL, MongoDB, Redis, GraphQL)
- **Flutter/Dart + Supabase** acquis chez Orange (à intégrer dans la stack)

### Changements à appliquer dans le code

- [ ] Mettre à jour `realisations.ts` : remplacer "bot-discord" par un 5e projet (choix : on a 3 Orange + O'voyage + Portfolio = 5 ✅)
- [ ] Mettre à jour `timeline.ts` : 2 entrées Orange (alternance 1 + alternance 2), 3 certifications
- [ ] Mettre à jour les traductions FR/EN avec les nouvelles données
- [ ] Mettre à jour `StackSection.tsx` si besoin (ajouter Flutter, Vue.js ?)
- [ ] Vérifier les `linkedSkills` des réalisations

---

## Sessions suivantes

### Session 2 — Profil & valeurs (15 min)

**Questions :**

7. **Intro (3–5 phrases)** : D'où tu viens, qu'est-ce qui t'a amené au dev, qu'est-ce qui te caractérise ? Glisse tes valeurs (rigueur, empathie, engagement, curiosité).
8. **Projet pro** : Quel type de poste tu vises à 1 an ? Quel domaine ? Quel environnement ?
9. **Projet perso** : Qu'est-ce qui te motive en dehors du taf ? Side-projects, mentorat, open source, apprentissage ?
10. **Centres d'intérêt (4)** : Titre + 1 phrase. Ex: "Gaming — Jeux de stratégie et FPS compétitif."

### Session 3 — Compétences humaines (20 min)

Pour **chaque compétence**, répondre à 5 questions (2–3 phrases) :

| Question         | Aide                                                                       |
| ---------------- | -------------------------------------------------------------------------- |
| **Définition**   | En quoi cette compétence est importante dans le métier de dev ?            |
| **Preuve**       | 1 anecdote concrète (auxiliaire de vie OU Orange) avec un résultat visible |
| **Autocritique** | Note-toi sur 10. Comment tu l'as acquise ? Vite ou lentement ?             |
| **Recul**        | Un conseil que tu donnerais à quelqu'un qui débute                         |
| **Évolution**    | Comment tu veux progresser là-dessus ?                                     |

- [ ] 11\. Empathie
- [ ] 12\. Résilience
- [ ] 13\. Gestion des priorités
- [ ] 14\. Travail en équipe
- [ ] 15\. Pédagogie

### Session 4 — Compétences techniques (20 min)

Même format. Les compétences techniques à traiter deviennent :

| #   | Compétence                                 | Justification                                         |
| --- | ------------------------------------------ | ----------------------------------------------------- |
| 6   | Angular / TypeScript                       | Stack principale Orange (Angular 18, 21)              |
| 7   | NestJS / Node.js                           | Back-end portail RH + O'voyage                        |
| 8   | Conception de BDD (MySQL/PostgreSQL)       | MySQL chez Orange, PostgreSQL perso, spé Data O'Clock |
| 9   | CI/CD & DevOps (Docker, Git, CloudFoundry) | Déploiement chez Orange                               |
| 10  | React                                      | Portfolio + spécialisation possible                   |

> Note : Flutter/Dart et Vue.js sont des compétences secondaires visibles dans les réalisations mais pas dans le top 10.

### Session 5 — Réalisations (25 min)

Les **5 réalisations finales** :

| #   | Nom                             | Contexte              | Stack                                |
| --- | ------------------------------- | --------------------- | ------------------------------------ |
| 1   | Portail RH Orange               | Pro (1ère alternance) | Angular, NestJS, MySQL, CloudFoundry |
| 2   | Gestion des repos compensateurs | Pro (2ème alternance) | Angular, Java, MySQL, microservices  |
| 3   | App mobile Compétences          | Pro (2ème alternance) | Flutter, Dart, Supabase              |
| 4   | O'voyage                        | Formation (O'Clock)   | Vue.js, NestJS                       |
| 5   | Portfolio                       | Perso                 | React, TypeScript, Vite, Tailwind    |

### Session 6 — Parcours (10 min)

26. **Orange (1ère alternance)** — Missions détaillées, vision de l'entreprise
27. **Orange (2ème alternance)** — Missions détaillées
28. **Auxiliaire de vie** — Lieu, missions, ce que tu retiens
29. **O'Clock** — Présentation, pédagogie

---

## Résumé des sessions

| Session                    | Durée  | Items | Statut |
| -------------------------- | ------ | ----- | ------ |
| 1 — Bases factuelles       | 15 min | 6     | ✅     |
| 2 — Profil                 | 15 min | 4     | ⏳     |
| 3 — Compétences humaines   | 20 min | 25    | ⏳     |
| 4 — Compétences techniques | 20 min | 25    | ⏳     |
| 5 — Réalisations           | 25 min | 30    | ⏳     |
| 6 — Parcours               | 10 min | 4     | ⏳     |
