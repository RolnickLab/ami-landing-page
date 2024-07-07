import classNames from "classnames";
import { ReactNode } from "react";
import styles from "./section.module.css";

export const Section = ({
  children,
  theme,
}: {
  children: ReactNode;
  theme?: "tinted" | "moth";
}) => (
  <div
    className={classNames(styles.section, {
      [styles.tinted]: theme === "tinted",
      [styles.moth]: theme === "moth",
    })}
  >
    <div className={styles.content}>{children}</div>
  </div>
);
