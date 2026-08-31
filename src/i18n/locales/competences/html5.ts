export const html5Fr = {
  title: "HTML5",
  shortDesc: "Balisage sémantique et accessibilité web",
  definition:
    "Pour moi, le balisage sémantique **HTML5** constitue l'ossature fondamentale du Web. Il permet de structurer le contenu de manière claire et compréhensible pour les navigateurs, les moteurs de recherche et les technologies d'assistance.",
  proofs:
    "Dans mes projets Angular chez Orange Business (portail de redirection RH et Repos Compensateurs), le HTML5 est directement intégré au cœur des templates de composants (`templateUrl`). J'y applique scrupuleusement la sémantique HTML5 (`<nav>`, `<header>`, `<main>`, `<article>`, `<section>`, `<footer>`, et balises `<table>` sémantiques pour les listes de repos).\n\nJ'y associe le data-binding d'Angular (`[property]` et `(event)`) aux principes d'accessibilité WCAG : contrôle des contrastes avec l'extension [WCAG Color Contrast Checker](https://chromewebstore.google.com/detail/wcag-color-contrast-check/plnahcmalebffmaghcpcmpaciebdhgdf), ajout d'attributs ARIA (`aria-label` sur les actions de tableau, `aria-expanded` sur les menus) et navigation 100 % au clavier (touches **Tab** et **Maj+Tab**). Ces pratiques s'illustrent également sur mon projet [portfolio-front](https://github.com/BuysschaertQuentin/portfolio-front) et mon [profil GitHub](https://github.com/BuysschaertQuentin).",
  selfCritique:
    "Mon approche du HTML5 est axée sur le respect des standards sémantiques indispensables et l'accessibilité essentielle pour les utilisateurs malvoyants ou malentendants, sans prétendre couvrir l'intégralité des besoins de handicaps lourds.",
  hindsight:
    "Une structure HTML sémantique et propre simplifie la maintenance CSS et l'intégration des lecteurs d'écran. C'est le socle obligatoire de toute interface web professionnelle.",
  evolution:
    "Je poursuis ma veille sur l'utilisation optimale des balises HTML5 natives pour les formulaires et les éléments interactifs afin d'éviter d'utiliser du JavaScript superflu.",
};

export const html5En = {
  title: "HTML5",
  shortDesc: "Semantic markup and web accessibility",
  definition:
    "For me, **HTML5** semantic markup is the fundamental backbone of the Web, structuring content clearly for browsers, search engines, and assistive technologies.",
  proofs:
    "Across Angular enterprise projects at Orange Business, HTML5 is embedded in component templates (`<nav>`, `<header>`, `<main>`, `<article>`, `<footer>`). I pair Angular data-binding with WCAG accessibility principles: color contrast audits, ARIA attributes (`aria-label`), and full keyboard navigation (Tab/Shift+Tab).",
  selfCritique:
    "My HTML5 approach focuses on essential semantic standards and accessibility without overclaiming full coverage of severe disability edge-cases.",
  hindsight:
    "Clean semantic HTML simplifies CSS maintenance and screen reader integration.",
  evolution:
    "I continue monitoring native HTML5 form features to reduce unnecessary JavaScript.",
};
