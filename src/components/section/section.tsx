import classNames from "classnames";
import { ReactNode } from "react";
import styles from "./section.module.css";

export const Section = ({
  children,
  theme,
}: {
  children: ReactNode;
  theme?: "moth" | "tinted" | "paper";
}) => (
  <div
    className={classNames(styles.section, {
      [styles.moth]: theme === "moth",
      [styles.tinted]: theme === "tinted",
      [styles.paper]: theme === "paper",
    })}
  >
    <div className={styles.content}>{children}</div>
  </div>
);
