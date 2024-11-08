import classNames from "classnames";
import { ReactNode } from "react";
import { ExternalLink } from "../external-link/external-link";
import styles from "./list.module.css";

export const List = ({ children }: { children: ReactNode }) => (
  <div className={styles.list}>{children}</div>
);

export const ListItem = ({ children }: { children: ReactNode }) => (
  <div className={styles.listItem}>{children}</div>
);

export const ListItemContent = ({
  title,
  label,
  href,
}: {
  title: string;
  label: string;
  href?: string;
}) => (
  <div className={styles.listItemContent}>
    <p className="bodySmall">
      {href ? (
        <ExternalLink href={href}>{title}</ExternalLink>
      ) : (
        <span className={styles.title}>{title}</span>
      )}
    </p>
    <span className={classNames("bodyExtraSmall", styles.label)}>{label}</span>
  </div>
);
