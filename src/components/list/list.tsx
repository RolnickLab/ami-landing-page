import classNames from "classnames";
import { ReactNode } from "react";
import { ExternalLinkButton } from "../button/button";
import styles from "./list.module.css";

export const List = ({ children }: { children: ReactNode }) => (
  <div className={styles.list}>{children}</div>
);

export const ListItem = ({
  title,
  label,
  description,
  href,
}: {
  title: string;
  label?: string;
  description?: string;
  href?: string;
}) => (
  <div className={styles.listItem}>
    <div className={styles.intro}>
      {href ? (
        <ExternalLinkButton label={title} href={href} theme="text" />
      ) : (
        <span className={classNames("bodySmall", styles.title)}>{title}</span>
      )}
      {label && <span className="bodyExtraSmall">{label}</span>}
    </div>

    {description && <span className="bodySmall">{description}</span>}
  </div>
);
