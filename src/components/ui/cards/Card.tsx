import type { HTMLAttributes, ReactNode } from "react";
import { memo } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  readonly children: ReactNode;
  /**
   * If true, makes the card accessible via keyboard <kbd>Tab</kbd>
   * @default true
   */
  readonly focusable?: boolean;
}

/**
 * An accessible wrapper for glassmorphism cards.
 * Combines the `glass-card` typography and keyboard focus outlines.
 */
export const Card = memo(
  ({ children, className = "", focusable = true, ...props }: CardProps) => {
    return (
      <div
        tabIndex={focusable ? 0 : undefined}
        className={`glass-card ${
          focusable
            ? "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            : ""
        } ${className}`.trim()}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = "Card";
