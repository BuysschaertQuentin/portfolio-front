export const typescriptFr = {
  title: "TypeScript",
  shortDesc: "Typage statique fort pour applications robustes",
  definition:
    "Pour moi, **TypeScript** est l'outil indispensable pour apporter la rigueur du typage statique à l'écosystème JavaScript. Il s'agit d'un sur-ensemble typé qui doit être **transpilé en JavaScript** par le compilateur (`tsc`) afin d'être exécuté et interprété par les moteurs JavaScript des navigateurs (moteur V8, SpiderMonkey).\n\nTypeScript me permet d'appliquer les principes fondamentaux de conception (**KISS**, **YAGNI**, **SOLID**, **SOC**), de détecter les erreurs dès la phase de compilation, d'améliorer la qualité du refactoring et d'offrir une autocomplétion précise. En tant que technologie transversale, TypeScript sert de socle aussi bien sur les architectures Front-End (Angular, React) que Back-End (NestJS).",
  proofs:
    "En entreprise chez Orange Business, TypeScript constitue la colonne vertébrale de mes composants et services Angular sur le projet de **gestion des Repos Compensateurs** et le **portail de redirection RH**. Je l'utilise pour structurer la logique applicative via des classes `@Component`, des services injectables `@Injectable()`, des garde-fous de navigation (`CanActivateFn`) et des intercepteurs HTTP (`HttpInterceptorFn`).\n\nJ'y conçois des contrats d'interface stricts (interfaces DTOs pour échanger avec le Back-End Java/NestJS, typage fort des `FormGroup` et `FormControl` réactifs, et gestion des réactivités avec les Signals `signal<T>()`).\n\nEn complément, dans le cadre du mentorat de l'étudiante en reconversion (détaillé dans *Pédagogie & vulgarisation*), je lui ai enseigné la rigueur du typage statique, l'utilisation des interfaces et les principes fondamentaux de la Programmation Orientée Objet (POO - typage, héritage, encapsulation) pour concevoir son propre portfolio en Angular.\n\nEnfin, sur mes projets personnels tels que [portfolio-front](https://github.com/BuysschaertQuentin/portfolio-front) ou [project-management-tool-front](https://github.com/BuysschaertQuentin/project-management-tool-front), je mets en œuvre des unions discriminées, des génériques et l'usage systématique de structures immuables (`readonly`), consultables directement sur mon [profil GitHub](https://github.com/BuysschaertQuentin).",
  selfCritique:
    "Mon usage de TypeScript vise l'efficacité et la clarté. J'évite la sur-complexification inutile des types génériques imbriqués au profit de structures lisibles, maintenables et directement exploitables par l'ensemble de l'équipe.",
  hindsight:
    "Le typage statique transforme la sérénité du développeur lors des phases de refactoring. Un contrat de données bien typé évite la majorité des bugs de régression en production.",
  evolution:
    "Je continue d'approfondir l'usage des types utilitaires avancés de TypeScript (`Pick`, `Omit`, `Record`, `ReturnType`) et la génération automatique de types à partir de schémas d'API.",
};

export const typescriptEn = {
  title: "TypeScript",
  shortDesc: "Strong static typing for robust applications",
  definition:
    "For me, **TypeScript** is the essential tool for bringing static typing discipline to JavaScript. As a typed superset **transpiled into JavaScript** by `tsc` to be executed by V8/SpiderMonkey engines, TypeScript allows enforcing engineering principles (**KISS**, **YAGNI**, **SOLID**, **SOC**), catching errors at compile time, and empowering refactoring across both Front-End (Angular, React) and Back-End (NestJS).",
  proofs:
    "At Orange Business, TypeScript is the backbone of Angular components/services on **Compensatory Leave** and **HR portal** apps (`@Component`, `@Injectable()`, DTO interfaces, `ReactiveFormsModule`, Signals `signal<T>()`).\n\nI also taught TypeScript, interfaces, and OOP principles to a career-transition student (detailed in *Pedagogy & vulgarisation*).\n\nOn personal projects ([portfolio-front](https://github.com/BuysschaertQuentin/portfolio-front)), I employ discriminated unions, generics, and immutable structures (`readonly`).",
  selfCritique:
    "I aim for clarity, avoiding overly complex nested generic types in favor of readable, maintainable team structures.",
  hindsight:
    "Static typing eliminates the vast majority of production regression bugs during refactoring.",
  evolution:
    "I continue mastering advanced utility types (`Pick`, `Omit`, `Record`, `ReturnType`) and schema-driven type generation.",
};
