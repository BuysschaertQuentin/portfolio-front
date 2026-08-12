import React from "react";

/**
 * Parses inline formatting like **bold** text and [links](url).
 */
export const parseInlineSpans = (text: string): React.ReactNode => {
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
 * Parses inline formatting, markdown headers (#, ##, ###), and bullet lists.
 */
export const renderInlineFormatting = (text: string): React.ReactNode => {
  const lines = text.split("\n");
  return lines.map((line, lineIdx) => {
    const trimmed = line.trim();

    if (trimmed.startsWith("### ")) {
      return (
        <h3 key={lineIdx} className="text-base font-bold text-foreground mt-4 mb-2 border-b border-border/20 pb-1">
          {parseInlineSpans(trimmed.slice(4))}
        </h3>
      );
    }
    if (trimmed.startsWith("## ")) {
      return (
        <h2 key={lineIdx} className="text-lg font-bold text-foreground mt-5 mb-2 border-b border-border/30 pb-1">
          {parseInlineSpans(trimmed.slice(3))}
        </h2>
      );
    }
    if (trimmed.startsWith("# ")) {
      return (
        <h1 key={lineIdx} className="text-xl font-bold text-foreground mt-6 mb-3">
          {parseInlineSpans(trimmed.slice(2))}
        </h1>
      );
    }

    const lineContent = parseInlineSpans(line);

    if (trimmed.startsWith("- ")) {
      const contentWithoutDash = trimmed.slice(2);
      return (
        <div key={lineIdx} className="flex items-start gap-2 my-1.5 pl-2">
          <span className="text-primary font-bold select-none">•</span>
          <span className="flex-1">{parseInlineSpans(contentWithoutDash)}</span>
        </div>
      );
    }

    return (
      <React.Fragment key={lineIdx}>
        {lineContent}
        {lineIdx < lines.length - 1 && <br />}
      </React.Fragment>
    );
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
