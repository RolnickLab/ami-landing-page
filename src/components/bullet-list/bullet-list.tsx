import classNames from "classnames";
import { DotIcon } from "lucide-react";
import { ReactNode } from "react";
import styles from "./bullet-list.module.css";

export const BulletList = ({ children }: { children: ReactNode }) => (
  <ul className={styles.bulletList}>{children}</ul>
);

export const BulletListItem = ({ children }: { children: ReactNode }) => (
  <li className={classNames("bodySmall", styles.bulletListItem)}>
    <div className={styles.icon}>
      <DotIcon size={30} />
    </div>
    <span>{children}</span>
  </li>
);
