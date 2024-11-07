import { ExternalLinkIcon } from "@radix-ui/react-icons";
import classNames from "classnames";
import { ReactNode } from "react";
import { ExternalLinkButton } from "../button/button";
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
  description,
  href,
}: {
  title: string;
  label?: string;
  description?: string;
  href?: string;
}) => (
  <div className={styles.listItemContent}>
    <div className={styles.intro}>
      {href ? (
        <p className="bodySmall">
          <a href={href} rel="noopener noreferrer" target="_blank">
            {title}
            <ExternalLinkIcon className={styles.linkIcon} />
          </a>
        </p>
      ) : (
        <span className={classNames("bodySmall", styles.title)}>{title}</span>
      )}
      {label && (
        <span className={classNames("bodyExtraSmall", styles.label)}>
          {label}
        </span>
      )}
    </div>
    {description && <span className="bodySmall">{description}</span>}
  </div>
);
