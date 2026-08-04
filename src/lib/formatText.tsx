import React from "react";

/**
 * Parses inline formatting like **bold** text and [links](url).
 */
export const renderInlineFormatting = (text: string): React.ReactNode => {
  const parts = text.split(/(\*\*[\s\S]+?\*\*|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, label, url] = linkMatch;
      return (
        <a
          key={index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
        >
          {label}
        </a>
      );
    }
    return part;
  });
};

/**
 * Parses markdown text into formatted JSX elements, supporting code blocks, bold text, links, and line breaks.
 */
export const renderFormattedText = (
  text: string,
  renderCodeBlock?: (lang: string, code: string, key: string) => React.ReactNode,
): React.ReactNode[] => {
  const codeBlockRegex = /```(\w*)\n([\s\S]*?)```/g;
  const elements: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = codeBlockRegex.exec(text)) !== null) {
    const [fullMatch, lang, code] = match;
    const matchIndex = match.index;

    if (matchIndex > lastIndex) {
      const prose = text.slice(lastIndex, matchIndex);
      elements.push(
        <span key={`prose-${lastIndex}`} className="whitespace-pre-line block">
          {renderInlineFormatting(prose)}
        </span>,
      );
    }

    if (renderCodeBlock) {
      elements.push(renderCodeBlock(lang || "code", code.trim(), `code-${matchIndex}`));
    }

    lastIndex = matchIndex + fullMatch.length;
  }

  if (lastIndex < text.length) {
    const prose = text.slice(lastIndex);
    elements.push(
      <span key={`prose-${lastIndex}`} className="whitespace-pre-line block">
        {renderInlineFormatting(prose)}
      </span>,
    );
  }

  return elements;
};
