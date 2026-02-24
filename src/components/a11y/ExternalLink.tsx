import { useI18n } from "@/i18n";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { memo } from "react";

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  readonly children: ReactNode;
  readonly showNewTabIndicator?: boolean;
}

/**
 * An accessible wrapper for external links.
 *
 * Automatically applies `target="_blank"` and `rel="noopener noreferrer"`.
 * Adds a screen-reader only text to warn users that the link opens in a new tab.
 */
export const ExternalLink = memo(
  ({ children, showNewTabIndicator = true, ...props }: ExternalLinkProps) => {
    const { t } = useI18n();

    return (
      <a target="_blank" rel="noopener noreferrer" {...props}>
        {children}
        {showNewTabIndicator && (
          <span className="sr-only"> {t("a11y.newTab")}</span>
        )}
      </a>
    );
  },
);

ExternalLink.displayName = "ExternalLink";
