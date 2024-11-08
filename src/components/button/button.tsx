import classNames from "classnames";
import Link from "next/link";
import { CSSProperties, ReactNode } from "react";
import styles from "./button.module.css";

export const Button = ({
  children,
  style,
  theme = "outline",
  onClick,
}: {
  children: ReactNode;
  style?: CSSProperties;
  theme?: "outline" | "text";
  onClick: () => void;
}) => (
  <button
    className={classNames("bodySmall", styles.button, {
      [styles.outline]: theme === "outline",
      [styles.text]: theme === "text",
    })}
    style={style}
    onClick={onClick}
  >
    {children}
  </button>
);

export const LinkButton = ({
  children,
  href,
  theme = "outline",
  style,
}: {
  children: ReactNode;
  href: string;
  theme?: "outline" | "text";
  style?: CSSProperties;
}) => (
  <Link
    className={classNames("bodySmall", styles.button, {
      [styles.outline]: theme === "outline",
      [styles.text]: theme === "text",
    })}
    href={href}
    style={style}
  >
    {children}
  </Link>
);

export const ExternalLinkButton = ({
  children,
  href,
  theme = "outline",
  style,
}: {
  children: ReactNode;
  href: string;
  theme?: "outline" | "text";
  style?: CSSProperties;
}) => (
  <a
    className={classNames("bodySmall", styles.button, {
      [styles.outline]: theme === "outline",
      [styles.text]: theme === "text",
    })}
    href={href}
    rel="noopener noreferrer"
    style={style}
    target="_blank"
  >
    {children}
  </a>
);
