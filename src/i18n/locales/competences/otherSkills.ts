const defaultFr = {
  definition: "[À RÉDIGER]",
  proofs: "[À RÉDIGER]",
  selfCritique: "[À RÉDIGER]",
  hindsight: "[À RÉDIGER]",
  evolution: "[À RÉDIGER]",
};

const defaultEn = {
  definition: "[TO WRITE]",
  proofs: "[TO WRITE]",
  selfCritique: "[TO WRITE]",
  hindsight: "[TO WRITE]",
  evolution: "[TO WRITE]",
};

export const otherSkillsFr = {
  "vs-code": { ...defaultFr, title: "VS Code", shortDesc: "Environnement de développement moderne" },
  figma: { ...defaultFr, title: "Figma", shortDesc: "Conception d'interfaces UI/UX" },
};

export const otherSkillsEn = {
  "vs-code": { ...defaultEn, title: "VS Code", shortDesc: "Modern development environment" },
  figma: { ...defaultEn, title: "Figma", shortDesc: "UI/UX interface design" },
};
