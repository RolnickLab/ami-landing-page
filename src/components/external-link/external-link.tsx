import { ExternalLinkIcon } from "@radix-ui/react-icons";
import styles from "./external-link.module.css";

export const ExternalLink = ({
  children,
  href,
}: {
  children: string;
  href?: string;
}) => (
  <a href={href} rel="noopener noreferrer" target="_blank">
    {children}
    <ExternalLinkIcon className={styles.linkIcon} />
  </a>
);
