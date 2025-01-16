import { ExternalLinkIcon } from "lucide-react";
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
    <ExternalLinkIcon className={styles.linkIcon} size={15} />
  </a>
);
