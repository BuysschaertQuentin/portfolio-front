import { describe, expect, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { I18nProvider, useI18n } from "../i18n";

const TestComponent = () => {
  const { locale, setLocale, t } = useI18n();
  return (
    <div>
      <span data-testid="lang">{locale}</span>
      <span data-testid="title">{t("projects.title")}</span>
      <button onClick={() => setLocale("en")}>Switch EN</button>
      <button onClick={() => setLocale("fr")}>Switch FR</button>
    </div>
  );
};

describe("I18nProvider & useI18n", () => {
  it("provides default French translations and resolves keys", () => {
    render(
      <I18nProvider>
        <TestComponent />
      </I18nProvider>
    );

    expect(screen.getByTestId("lang").textContent).toBe("fr");
    expect(screen.getByTestId("title").textContent).toBe("Projets");
  });

  it("switches language dynamically to EN and updates resolved keys", () => {
    render(
      <I18nProvider>
        <TestComponent />
      </I18nProvider>
    );

    fireEvent.click(screen.getByText("Switch EN"));
    expect(screen.getByTestId("lang").textContent).toBe("en");
    expect(screen.getByTestId("title").textContent).toBe("Projects");
  });
});
