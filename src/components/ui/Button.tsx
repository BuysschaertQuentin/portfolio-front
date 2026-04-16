import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { memo } from "react";
import { Link, type LinkProps } from "react-router-dom";

type BaseProps = {
  readonly children: ReactNode;
  readonly variant?: "primary" | "secondary";
  readonly className?: string;
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

type ButtonProps = ButtonAsButtonProps | ButtonAsExternalLinkProps | ButtonAsRouterLinkProps;

/**
 * Accessible button component that automatically handles focus styles
 * and renders as `<button>`, `<a>`, or React Router `<Link>` depending on props.
 */
export const Button = memo(
  ({ children, variant = "primary", className = "", ...props }: ButtonProps) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary";

    const variantStyles = {
      primary: "bg-primary text-primary-foreground hover:opacity-90",
      secondary: "border border-border text-foreground hover:bg-secondary bg-transparent",
    };

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`.trim();

    if ("to" in props && props.to !== undefined) {
      return (
        <Link className={combinedClassName} {...(props as LinkProps)}>
          {children}
        </Link>
      );
    }

    if ("href" in props && props.href !== undefined) {
      return (
        <a className={combinedClassName} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
          {children}
        </a>
      );
    }

    return (
      <button className={combinedClassName} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
