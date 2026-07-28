export const gitFr = {
  title: "Git",
  shortDesc: "Gestionnaire de versionnement distribué et méthodologie Git Flow",
  definition:
    "Pour moi, **Git** est l'outil de versionnement distribué indispensable pour tout développeur. Il permet de suivre l'historique complet des modifications du code source, de travailler en équipe sans chevauchement et de garantir la traçabilité intégrale des évolutions d'un projet.",
  proofs:
    "J'utilise **Git** sur **l'intégralité de mes projets** (Portail RH, Repos Compensateurs, MyLab, O'Voyage) en appliquant la méthodologie **Git Flow** :\n\n- **Méthodologie Git Flow et nommage des branches par ticket** : Sur tous mes projets en entreprise chez Orange Business comme en projet d'études, je structure le travail selon le modèle Git Flow : branche de production (`main` / `master`), branche d'intégration (`develop`), branches de fonctionnalités et de correctifs (`hotfix/xxx`). J'applique la bonne pratique d'insérer le numéro de ticket juste après le préfixe de branche (ex: `feat/TICKET-50-nom-de-la-branche` ou `fix/TICKET-12-nom-du-bug`), ce qui permet de lier directement les branches aux outils de gestion de projet (Jira, GitLab Issues) et de s'y retrouver instantanément dans l'arbre Git.\n\n- **Commits atomiques et messages sémantiques** : Je veille à produire des commits fréquents et atomiques (une seule responsabilité par commit) associés à des messages clairs et descriptifs, facilitant la lecture du journal des modifications (`git log`).\n\n- **Versionnement par étiquettes (Git Tags) & Release CI/CD** : Lors des jalons de livraison et des mises en production, j'utilise la création de **tags Git** sémantiques (ex: `git tag -a v1.2.0 -m 'Release v1.2.0'`). Ces étiquettes verrouillent l'état exact du code à un instant T et déclenchent automatiquement nos pipelines de livraison continue (GitLab CI / Azure DevOps) pour compiler et déployer la version spécifique sur nos plateformes d'hébergement.",
  selfCritique:
    "Travailler avec Git exige de la rigueur lors de la résolution de conflits de fusion (*merge conflicts*). J'ai appris à toujours vérifier les diffs ligne par ligne et à re-tester les composants impactés avant de valider un merge.",
  hindsight:
    "La maîtrise de Git, du Git Flow et du nommage strict des branches par ticket est le pilier d'une collaboration d'équipe réussie. Les tags de versionnement apportent une sérénité totale lors des déploiements en permettant un retour en arrière immédiat sur un jalon tagué en cas de besoin.",
  evolution:
    "Je souhaite continuer à appliquer la rigueur du Git Flow et la convention de nommage par ticket sur l'ensemble de mes projets, et perfectionner l'automatisation des règles de livraison basées sur les étiquettes Git.",
};

export const gitEn = {
  title: "Git",
  shortDesc: "Distributed version control system and Git Flow methodology",
  definition:
    "For me, **Git** is the essential distributed version control tool for every software engineer. It enables tracking the complete history of source code modifications, collaborating effectively across dev teams, and guaranteeing full traceability of application evolutions.",
  proofs:
    "I utilize **Git** across **all my projects** (HR Portal, Compensatory Leave, MyLab, O'Voyage), systematically enforcing the **Git Flow** methodology:\n\n- **Git Flow & Ticket-Based Branch Naming**: Across enterprise projects at Orange Business and academic applications, I structure development according to Git Flow: production branch (`main` / `master`), integration branch (`develop`), feature branches, and bugfix branches (`hotfix/xxx`). I enforce the best practice of inserting ticket numbers right after the branch prefix (e.g., `feat/TICKET-50-branch-description` or `fix/TICKET-12-bug-description`), linking branches directly to issue trackers (Jira, GitLab Issues) and maintaining total clarity across the Git tree.\n\n- **Atomic Commits & Semantic Messaging**: I ensure producing frequent, atomic commits (single responsibility per commit) paired with clear descriptive commit messages for readable git logs.\n\n- **Semantic Version Tagging (Git Tags) & CI/CD Releases**: For production releases and milestone deliveries, I create semantic **Git tags** (e.g. `git tag -a v1.2.0 -m 'Release v1.2.0'`). These immutable tags lock the exact codebase state at a given milestone, automatically triggering CI/CD release pipelines (GitLab CI / Azure DevOps) to compile and deploy target versions to hosting platforms.",
  selfCritique:
    "Working with Git requires careful discipline when resolving merge conflicts. I learned to systematically inspect diffs line by line and re-test affected modules before confirming merge commits.",
  hindsight:
    "Mastering Git, Git Flow, and ticket-based branch naming is the cornerstone of successful team collaboration. Version tagging delivers complete confidence during releases by enabling instant rollbacks to stable tagged commits if needed.",
  evolution:
    "I plan to continue applying Git Flow rigor and ticket-based branch naming standards across all projects, refining tag-based release automation in CI/CD pipelines.",
};
