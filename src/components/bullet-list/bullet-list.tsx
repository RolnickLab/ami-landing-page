import { DotFilledIcon } from "@radix-ui/react-icons";
import classNames from "classnames";
import { ReactNode } from "react";
import styles from "./bullet-list.module.css";

export const BulletList = ({ children }: { children: ReactNode }) => (
  <ul className={styles.bulletList}>{children}</ul>
);

export const BulletListItem = ({ children }: { children: ReactNode }) => (
  <li className={classNames("bodySmall", styles.bulletListItem)}>
    <div className={styles.icon}>
      <DotFilledIcon />
    </div>
    <span>{children}</span>
  </li>
);
