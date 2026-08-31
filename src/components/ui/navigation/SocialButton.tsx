import { ExternalLink } from "@/components/ui/a11y/ExternalLink";
import React, { memo } from "react";

export type SocialVariant = "default" | "green" | "blue" | "red";

interface SocialButtonProps {
  readonly href: string;
  readonly icon: React.ReactNode;
  readonly label: string;
  readonly variant?: SocialVariant;
  readonly className?: string;
  readonly isMail?: boolean;
}

/**
 * A stylish social button with hover effects and animations.
 */
export const SocialButton = memo(
  ({
    href,
    icon,
    label,
    variant = "default",
    className = "",
    isMail = false,
  }: SocialButtonProps) => {
    // Dynamic classes based on variant prop
    const borderClass =
      variant === "blue"
        ? "border-blue-500/20 hover:border-blue-500/50"
        : variant === "green"
          ? "border-green-500/20 hover:border-green-500/50"
          : variant === "red"
            ? "border-red-500/20 hover:border-red-500/50"
            : "border-white/10 hover:border-white/30";

    const shadowClass =
      variant === "blue"
        ? "hover:shadow-blue-500/30"
        : variant === "green"
          ? "hover:shadow-green-500/30"
          : variant === "red"
            ? "hover:shadow-red-500/30"
            : "hover:shadow-white/20";

    const gradientClass =
      variant === "blue"
        ? "hover:from-blue-500/10"
        : variant === "green"
          ? "hover:from-green-500/10"
          : variant === "red"
            ? "hover:from-red-500/10"
            : "hover:from-white/10";

    const shimmerClass =
      variant === "blue"
        ? "via-blue-400/20"
        : variant === "green"
          ? "via-green-400/20"
          : variant === "red"
            ? "via-red-400/20"
            : "via-white/10";

    const iconColorClass =
      variant === "blue"
        ? "text-blue-500 group-hover:text-blue-400"
        : variant === "green"
          ? "text-green-500 group-hover:text-green-400"
          : variant === "red"
            ? "text-red-500 group-hover:text-red-400"
            : "text-white group-hover:text-white/90";

    const content = (
      <>
        {/* Shimmer effect */}
        <div
          className={`absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent ${shimmerClass} to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full`}
        />
        {/* Icon container */}
        <div
          className={`relative z-10 flex h-4 w-4 items-center justify-center transition-colors duration-300 ${iconColorClass} [&>img]:h-full [&>img]:w-full [&>svg]:h-full [&>svg]:w-full`}
        >
          {icon}
        </div>
      </>
    );

    const baseClass = `group relative flex items-center justify-center overflow-hidden rounded-full p-2.5 backdrop-blur-lg bg-gradient-to-tr from-black/60 to-black/40 shadow-lg transition-all duration-300 ease-out hover:scale-110 hover:rotate-3 active:scale-95 active:rotate-0 hover:shadow-2xl ${borderClass} ${shadowClass} ${gradientClass} ${className}`;

    if (isMail) {
      return (
        <a href={href} aria-label={label} className={baseClass}>
          {content}
        </a>
      );
    }

    return (
      <ExternalLink
        href={href}
        aria-label={label}
        showNewTabIndicator={false}
        className={baseClass}
      >
        {content}
      </ExternalLink>
    );
  },
);

SocialButton.displayName = "SocialButton";
