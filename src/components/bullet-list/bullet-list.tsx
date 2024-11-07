import { DotFilledIcon } from "@radix-ui/react-icons";
import classNames from "classnames";
import styles from "./bullet-list.module.css";

export const BulletList = ({ items }: { items: string[] }) => (
  <ul className={styles.bulletList}>
    {items.map((item, index) => (
      <li
        key={index}
        className={classNames("bodySmall", styles.bulletListItem)}
      >
        <div className={styles.icon}>
          <DotFilledIcon />
        </div>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);
