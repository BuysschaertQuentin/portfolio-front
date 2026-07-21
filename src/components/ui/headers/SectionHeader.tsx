import { memo } from "react";

/** Supported accent colors matching CSS custom properties in index.css */
export type SectionAccentColor = "primary" | "cyan" | "violet" | "orange";

interface SectionHeaderProps {
  /** Zero-padded section index, e.g. "01", "02" */
  readonly index: string;
  /** Translated section label (small caps above the title) */
  readonly label: string;
  /** Main section title */
  readonly title: string;
  /** Optional highlighted segment appended after the title */
  readonly titleHighlight?: string;
  /** Accent color applied to index, label, highlight and glow */
  readonly accentColor?: SectionAccentColor;
}

/** Map accent color to Tailwind classes */
const COLOR_MAP: Record<SectionAccentColor, { text: string; glow: string }> = {
  primary: { text: "text-primary", glow: "text-glow-primary" },
  cyan: { text: "text-cyan", glow: "text-glow-cyan" },
  violet: { text: "text-violet-foreground", glow: "text-glow-violet" },
  orange: { text: "text-orange", glow: "text-glow-orange" },
};

/**
 * Consistent section header used across all home sections.
 * Renders: index number · label · h2 title (+ optional highlight).
 */
export const SectionHeader = memo(
  ({ index, label, title, titleHighlight, accentColor = "primary" }: SectionHeaderProps) => {
    const { text, glow } = COLOR_MAP[accentColor];

    return (
      <div className="mb-6 flex flex-col items-center">
        <div className="mb-2 flex items-center gap-4">
          <span className={`${text} font-mono text-xl opacity-50`}>{index} /</span>
          <p className={`${text} font-mono text-sm tracking-widest uppercase`}>{label}</p>
        </div>
        <h2 className={`${glow} flex flex-col items-center text-center text-2xl leading-tight font-bold sm:text-3xl`}>
          <span>{title}</span>
          {titleHighlight && <span className={text}>{titleHighlight}</span>}
        </h2>
      </div>
    );
  },
);

SectionHeader.displayName = "SectionHeader";
