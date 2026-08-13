import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { parseInlineSpans, renderInlineFormatting, renderFormattedText } from "../lib/formatText";

describe("formatText utility", () => {
  it("parses bold text with ** correctly", () => {
    const { container } = render(<>{parseInlineSpans("Hello **World**")}</>);
    expect(container.querySelector("strong")).not.toBeNull();
    expect(container.querySelector("strong")?.textContent).toBe("World");
  });

  it("parses markdown links correctly", () => {
    const { container } = render(<>{parseInlineSpans("Click [here](https://example.com)")}</>);
    const link = container.querySelector("a");
    expect(link).not.toBeNull();
    expect(link?.getAttribute("href")).toBe("https://example.com");
    expect(link?.textContent).toBe("here");
  });

  it("renders markdown headers #, ##, ###", () => {
    const text = "# Title 1\n## Title 2\n### Title 3";
    const { container } = render(<>{renderInlineFormatting(text)}</>);
    expect(container.querySelector("h1")).not.toBeNull();
    expect(container.querySelector("h2")).not.toBeNull();
    expect(container.querySelector("h3")).not.toBeNull();
  });

  it("renders bullet lists", () => {
    const text = "- Item 1\n- Item 2";
    const { container } = render(<>{renderInlineFormatting(text)}</>);
    expect(container.textContent).toContain("Item 1");
    expect(container.textContent).toContain("Item 2");
  });

  it("renders formatted text with code blocks", () => {
    const markdown = "Intro text\n```js\nconsole.log('hi');\n```\nOutro text";
    const elements = renderFormattedText(markdown, (lang, code, key) => (
      <pre key={key} data-lang={lang}>
        {code}
      </pre>
    ));
    const { container } = render(<>{elements}</>);
    expect(container.querySelector("pre")?.getAttribute("data-lang")).toBe("js");
  });
});
