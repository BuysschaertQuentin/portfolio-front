import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { memo } from "react";
import { Link, type LinkProps } from "react-router-dom";

type BaseProps = {
  readonly label?: string;
  readonly className?: string;
  readonly ariaLabel?: string;
};

type ButtonAsButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    readonly href?: never;
    readonly to?: never;
  };

type ButtonAsExternalLinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    readonly href: string;
    readonly to?: never;
  };

type ButtonAsRouterLinkProps = BaseProps &
  LinkProps & {
    readonly to: string;
    readonly href?: never;
  };

type ReturnButtonProps = ButtonAsButtonProps | ButtonAsExternalLinkProps | ButtonAsRouterLinkProps;

/**
 * ArrowIcon renders the customized modern geometric arrow from the uiverse design,
 * rotated 180 degrees to point to the left as a return indicator.
 */
const ArrowIcon = memo(({ className }: { readonly className?: string }) => (
  <svg
    viewBox="0 0 46 40"
    xmlns="http://www.w3.org/2000/svg"
    className={`h-5 w-5 rotate-180 fill-current transition-colors duration-300 ${className ?? ""}`}
    aria-hidden="true"
  >
    <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z" />
  </svg>
));

ArrowIcon.displayName = "ArrowIcon";

/**
 * ReturnButton implements the "modern-stingray-68" visual aesthetic
 * using Tailwind CSS v4, custom CSS variables, and full keyboard accessibility.
 * It renders as a standard <button>, <a>, or React Router <Link>.
 */
export const ReturnButton = memo((props: ReturnButtonProps) => {
  const { label, className, ariaLabel, ...rest } = props;

  // Base styling for the interactive element
  const containerClass = `group inline-flex items-center gap-3 select-none outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-xl p-1 transition-colors duration-300 ${className ?? ""}`.trim();

  // Accessible description for screen readers
  const accessibleName = ariaLabel ?? label ?? "Go back";

  // Shared inner visual arrow structure
  const visualContent = (
    <>
      <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-full border-0 bg-transparent">
        {/* Inactive outer border ring (fades out and scales down on interaction) */}
        <div className="absolute inset-[7px] rounded-full border-4 border-muted-foreground/30 transition-all duration-500 ease-out group-hover:scale-70 group-hover:opacity-0 group-focus-visible:scale-70 group-focus-visible:opacity-0" />

        {/* Active outer border ring (scales in and shines on interaction) */}
        <div className="absolute inset-[7px] rounded-full border-4 border-primary opacity-0 scale-130 transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100" />

        {/* Sliding box containing two arrows */}
        <div className="absolute inset-0 flex w-[112px] transition-transform duration-400 ease-in-out group-hover:-translate-x-14 group-focus-visible:-translate-x-14">
          <div className="flex h-14 w-14 items-center justify-center flex-shrink-0">
            <ArrowIcon className="text-muted-foreground/80 group-hover:text-primary" />
          </div>
          <div className="flex h-14 w-14 items-center justify-center flex-shrink-0">
            <ArrowIcon className="text-primary" />
          </div>
        </div>
      </div>

      {label && (
        <span className="font-mono text-sm text-muted-foreground group-hover:text-primary group-focus-visible:text-primary transition-colors duration-300">
          {label}
        </span>
      )}
    </>
  );

  if ("to" in props && props.to !== undefined) {
    const { to, ...linkProps } = props as ButtonAsRouterLinkProps;
    return (
      <Link to={to} className={containerClass} aria-label={accessibleName} {...linkProps}>
        {visualContent}
      </Link>
    );
  }

  if ("href" in props && props.href !== undefined) {
    const { href, ...anchorProps } = props as ButtonAsExternalLinkProps;
    return (
      <a href={href} className={containerClass} aria-label={accessibleName} {...anchorProps}>
        {visualContent}
      </a>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button
      type="button"
      className={containerClass}
      aria-label={accessibleName}
      {...buttonProps}
    >
      {visualContent}
    </button>
  );
});

ReturnButton.displayName = "ReturnButton";
