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
  (props: ButtonProps) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary";

    const variantStyles = {
      primary: "bg-primary text-primary-foreground hover:opacity-90",
      secondary: "border border-border text-foreground hover:bg-secondary bg-transparent",
    };

    const combinedClassName = `${baseStyles} ${variantStyles[props.variant ?? "primary"]} ${props.className ?? ""}`.trim();

    if ("to" in props && props.to !== undefined) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { children, variant, className, ...restProps } = props;
      return (
        <Link className={combinedClassName} {...restProps}>
          {children}
        </Link>
      );
    }

    if ("href" in props && props.href !== undefined) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { children, variant, className, ...restProps } = props;
      return (
        <a className={combinedClassName} {...restProps}>
          {children}
        </a>
      );
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { children, variant, className, ...restProps } = props;
    return (
      <button className={combinedClassName} {...restProps}>
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
