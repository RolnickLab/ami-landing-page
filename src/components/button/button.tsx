import { ExternalLinkIcon } from "@radix-ui/react-icons";
import classNames from "classnames";
import Link from "next/link";
import styles from "./button.module.css";

export const LinkButton = ({
  label,
  href,
}: {
  label: string;
  href: string;
}) => (
  <Link className={classNames("bodySmall", styles.button)} href={href}>
    {label}
  </Link>
);

export const ExternalLinkButton = ({
  label,
  href,
  theme = "outline",
}: {
  label: string;
  href: string;
  theme?: "outline" | "text";
}) => (
  <a
    className={classNames("bodySmall", styles.button, {
      [styles.outline]: theme === "outline",
      [styles.text]: theme === "text",
    })}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <span>{label}</span>
    <ExternalLinkIcon className={styles.icon} />
  </a>
);
