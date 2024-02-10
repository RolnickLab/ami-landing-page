import classNames from "classnames";
import { ReactNode } from "react";
import styles from "./section.module.css";

export const Section = ({
  children,
  tinted,
}: {
  children: ReactNode;
  tinted?: boolean;
}) => (
  <div className={classNames(styles.section, { [styles.tinted]: tinted })}>
    <div className={styles.content}>{children}</div>
  </div>
);
