import type {
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    ReactNode
} from "react";
import { memo } from "react";

type BaseProps = {
  readonly children: ReactNode;
  readonly variant?: "primary" | "secondary";
  readonly className?: string;
};

type ButtonAsButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    readonly href?: never;
  };

type ButtonAsLinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    readonly href: string;
  };

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

/**
 * Accessible button component that automatically handles focus styles
 * and renders as either `<button>` or `<a>` depending on if `href` is provided.
 */
export const Button = memo(
  ({
    children,
    variant = "primary",
    className = "",
    ...props
  }: ButtonProps) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary";

    const variantStyles = {
      primary: "bg-primary text-primary-foreground hover:opacity-90",
      secondary:
        "border border-border text-foreground hover:bg-secondary bg-transparent",
    };

    const combinedClassName =
      `${baseStyles} ${variantStyles[variant]} ${className}`.trim();

    if ("href" in props && props.href !== undefined) {
      return (
        <a
          className={combinedClassName}
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        className={combinedClassName}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
