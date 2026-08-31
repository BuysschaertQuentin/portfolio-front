import { describe, expect, it } from "vitest";
import { findSkillBySlug, SKILLS } from "../constants/skills";
import { coreStack, getTechItem, transversalStack } from "../constants/stack";

describe("Tech & Skills constants", () => {
  it("filters coreStack and transversalStack correctly", () => {
    expect(coreStack.length).toBeGreaterThan(0);
    expect(transversalStack.length).toBeGreaterThan(0);
    expect(coreStack.every((t) => t.showInMain)).toBe(true);
    expect(transversalStack.every((t) => t.showInTransversal)).toBe(true);
  });

  it("finds tech item by name case-insensitively", () => {
    const angular = getTechItem("angular");
    expect(angular).toBeDefined();
    expect(angular?.name).toBe("Angular");
  });

  it("finds skill by slug", () => {
    const reactSkill = findSkillBySlug("react");
    expect(reactSkill).toBeDefined();
    expect(reactSkill?.slug).toBe("react");
  });

  it("exports human and technical skills in SKILLS", () => {
    const human = SKILLS.filter((s) => s.type === "human");
    const tech = SKILLS.filter((s) => s.type === "technical");
    expect(human.length).toBeGreaterThan(0);
    expect(tech.length).toBeGreaterThan(0);
  });
});
