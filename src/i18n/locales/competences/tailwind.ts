export const tailwindFr = {
  title: "Tailwind CSS",
  shortDesc: "Framework CSS utilitaire moderne",
  definition:
    "Pour moi, **Tailwind CSS** est un framework CSS orienté utilitaires (*utility-first*) qui révolutionne la création d'interfaces utilisateur modernes. En fournissant des classes de bas niveau directement dans le HTML/JSX, il permet un développement rapide tout en garantissant une cohérence visuelle parfaite sur l'ensemble d'un projet.\n\nContrairement aux frameworks de composants rigides, Tailwind offre une liberté totale de personnalisation sans quitter le fichier de composant. Son compilateur JIT (*Just-In-Time*) génère un fichier CSS minimaliste et optimisé pour la production.",
  proofs:
    "En complément de mes développements d'entreprise, j'ai largement utilisé Tailwind CSS pour concevoir l'interface de mes projets récents, notamment [portfolio-front](https://github.com/BuysschaertQuentin/portfolio-front) et l'outil [project-management-tool-front](https://github.com/BuysschaertQuentin/project-management-tool-front) (accessibles sur mon [profil GitHub](https://github.com/BuysschaertQuentin)).\n\nJ'y ai configuré un design system sur-mesure dans `tailwind.config.js` (couleurs rétro-futuristes, typographies, effets de bordures) et associé Tailwind avec la fonction utilitaire `cn()` (`clsx` + `tailwind-merge`) pour garder des composants lisibles. Tailwind m'a également permis d'assurer un **responsive design** irréprochable sur tous les écrans grâce aux breakpoints natifs (`sm:`, `md:`, `lg:`), ainsi qu'une prise en charge fluide du mode sombre.",
  selfCritique:
    "L'utilisation de Tailwind demande une discipline dans la structuration des composants pour éviter de surcharger le JSX avec des suites de classes trop longues. Pour y remédier, j'isole les variantes complexes dans des composants UI réutilisables.",
  hindsight:
    "Avec le recul, Tailwind CSS accélère considérablement la vitesse d'itération et garantit une vraie harmonie esthétique. C'est l'outil idéal pour passer rapidement d'une maquette Figma à une intégration fidèle.",
  evolution:
    "Je souhaite continuer à perfectionner mon usage des plugins Tailwind et explorer les nouveautés apportées par Tailwind v4 pour optimiser encore la compilation et les variables CSS.",
};

export const tailwindEn = {
  title: "Tailwind CSS",
  shortDesc: "Modern utility-first CSS framework",
  definition:
    "For me, **Tailwind CSS** is a utility-first CSS framework enabling rapid development and visual consistency.",
  proofs:
    "I used Tailwind CSS on [portfolio-front](https://github.com/BuysschaertQuentin/portfolio-front) and [project-management-tool-front](https://github.com/BuysschaertQuentin/project-management-tool-front). Configured custom design tokens in `tailwind.config.js`, paired Tailwind with `cn()` utility (`clsx` + `tailwind-merge`), and ensured full responsive design and dark mode.",
  selfCritique:
    "I isolate complex class variants inside reusable UI components to prevent JSX bloat.",
  hindsight:
    "Tailwind accelerates iteration speed and ensures visual harmony from Figma mocks to code.",
  evolution:
    "I am exploring Tailwind v4 features to optimize CSS variable compilation.",
};
