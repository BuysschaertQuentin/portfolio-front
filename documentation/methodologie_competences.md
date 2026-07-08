# Méthodologie de Rédaction des Fiches Compétences

Ce document sert de guide et d'instruction pour toute intelligence artificielle (IA) chargée d'aider à la rédaction des fiches compétences du portfolio. 

## Objectif

Compléter les sections `[À RÉDIGER]` (ou `[TO WRITE]`) des compétences dans les fichiers de traduction :
- Français : `src/i18n/locales/fr.ts`
- Anglais : `src/i18n/locales/en.ts`

Pour chaque compétence, le contenu est divisé en 5 blocs distincts :
1. **Définition** (definition)
2. **Mises en pratique** (proofs)
3. **Autocritique** (selfCritique)
4. **Recul** (hindsight)
5. **Évolution** (evolution)

---

## Les 5 Sections d'une Compétence

Lorsqu'une situation professionnelle ou un récit brut est fourni pour une compétence donnée, l'IA doit structurer les informations selon la grille suivante :

### 1. Définition (`definition`)
* **Rôle** : Définition objective de la compétence au sens professionnel du terme.
* **Consigne de rédaction** : Rédiger de manière générale et neutre, expliquant en quoi consiste cette compétence dans un cadre professionnel global et plus spécifiquement pour un développeur.

### 2. Mises en pratique (`proofs`)
* **Rôle** : Expression d'une situation réelle qui met en place cette compétence.
* **Consigne de rédaction** : Raconter une anecdote ou une situation concrète (vécue en tant qu'auxiliaire de vie ou en tant que développeur chez Orange Business). La formulation doit être factuelle, concise et axée sur l'action entreprise.

### 3. Autocritique (`selfCritique`)
* **Rôle** : Point de vue personnel sur la situation et sur le pourquoi de l'application de cette compétence.
* **Consigne de rédaction** : Expliquer ce qui a motivé cette action à ce moment précis, comment la compétence a été mobilisée et évaluer honnêtement la manière dont la situation a été gérée.

### 4. Recul (`hindsight`)
* **Rôle** : Analyse d'un point de vue extérieur et post-mise en pratique.
* **Consigne de rédaction** : Analyser avec du recul si l'action entreprise était la plus adaptée ou confirmer sa pertinence. Indiquer ce qui aurait pu être fait différemment avec l'expérience actuelle.

### 5. Évolution (`evolution`)
* **Rôle** : Perspective d'avenir pour cette compétence.
* **Consigne de rédaction** : Identifier ce qui peut être amélioré à l'avenir, comment continuer à développer cette compétence ou vers quels axes de progression tendre.

---

## Instructions pour l'IA

Lorsqu'un utilisateur fournit un récit brut pour une compétence (par exemple : *"Pour l'autonomie, chez Orange j'ai dû..."*), l'IA doit :

1. **Analyser le récit** pour en extraire les éléments correspondants aux 5 sections ci-dessus.
2. **Rédiger les textes en Français** :
   * Adopter un ton professionnel, factuel et humble (éviter le jargon excessivement auto-promotionnel).
   * Garder des paragraphes courts (2 à 5 phrases par section).
3. **Traduire les textes en Anglais** avec le même niveau de qualité et de ton.
4. **Mettre à jour les fichiers de code** :
   * `src/i18n/locales/fr.ts` (pour le français)
   * `src/i18n/locales/en.ts` (pour l'anglais)
   * Veiller à cibler exactement la clé de la compétence correspondante (ex: `competences.skills.autonome` ou `competences.skills.empathy`).
5. **Préserver la syntaxe et la structure** des fichiers TypeScript (ne pas altérer les autres traductions, respecter la mise en forme et les virgules).
