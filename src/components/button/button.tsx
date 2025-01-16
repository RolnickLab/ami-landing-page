import classNames from "classnames";
import Link from "next/link";
import { ReactNode } from "react";
import styles from "./button.module.css";

export const Button = ({
  children,
  className,
  onClick,
  variant = "primary",
}: {
  children: ReactNode;
  className?: string;
  onClick: () => void;
  variant?: "neutral" | "primary";
}) => (
  <button
    className={classNames(
      "bodySmall",
      styles.button,
      { [styles.primary]: variant === "primary" },
      className
    )}
    onClick={onClick}
  >
    {children}
  </button>
);

export const LinkButton = ({
  children,
  className,
  href,
  variant = "primary",
}: {
  children: ReactNode;
  className?: string;
  href: string;
  variant?: "neutral" | "primary";
}) => (
  <Link
    className={classNames(
      "bodySmall",
      styles.button,
      { [styles.primary]: variant === "primary" },
      className
    )}
    href={href}
  >
    {children}
  </Link>
);

export const ExternalLinkButton = ({
  children,
  className,
  href,
  variant = "primary",
}: {
  children: ReactNode;
  className?: string;
  href: string;
  variant?: "neutral" | "primary";
}) => (
  <a
    className={classNames(
      "bodySmall",
      styles.button,
      { [styles.primary]: variant === "primary" },
      className
    )}
    href={href}
    rel="noopener noreferrer"
    target="_blank"
  >
    {children}
  </a>
);
