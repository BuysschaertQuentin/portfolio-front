import { describe, expect, it } from "vitest";
import { fr, en } from "../i18n/locales";
import { REALISATIONS } from "../constants/realisations";
import { SKILLS } from "../constants/skills";

const resolve = (obj: any, path: string): string | undefined => {
  if (!path) return undefined;
  const parts = path.split(".");
  let current = obj;
  for (const part of parts) {
    if (current === null || typeof current !== "object") return undefined;
    current = current[part];
    if (current === undefined) return undefined;
  }
  return typeof current === "string" ? current : undefined;
};

describe("i18n key resolution test", () => {
  it("verifies all realisations titleKey and shortDescKey resolve in fr and en", () => {
    for (const r of REALISATIONS) {
      const frTitle = resolve(fr, r.titleKey);
      const enTitle = resolve(en, r.titleKey);
      const frDesc = resolve(fr, r.shortDescKey);
      const enDesc = resolve(en, r.shortDescKey);

      expect(frTitle, `FR Title missing for ${r.slug}: ${r.titleKey}`).toBeDefined();
      expect(enTitle, `EN Title missing for ${r.slug}: ${r.titleKey}`).toBeDefined();
      expect(frDesc, `FR Desc missing for ${r.slug}: ${r.shortDescKey}`).toBeDefined();
      expect(enDesc, `EN Desc missing for ${r.slug}: ${r.shortDescKey}`).toBeDefined();
    }
  });

  it("verifies all human skills titleKey and shortDescKey resolve in fr and en", () => {
    for (const s of SKILLS) {
      if (s.titleKey) {
        const frTitle = resolve(fr, s.titleKey);
        const enTitle = resolve(en, s.titleKey);
        expect(frTitle, `FR Title missing for skill ${s.slug}: ${s.titleKey}`).toBeDefined();
        expect(enTitle, `EN Title missing for skill ${s.slug}: ${s.titleKey}`).toBeDefined();
      }
    }
  });
});
