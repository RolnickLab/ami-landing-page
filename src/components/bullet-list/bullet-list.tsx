import { DotFilledIcon, DotIcon } from "@radix-ui/react-icons";
import classNames from "classnames";
import styles from "./bullet-list.module.css";

export const BulletList = ({
  items,
  reverse,
}: {
  items: string[];
  reverse?: boolean;
}) => (
  <ul className={styles.bulletList}>
    {items.map((item, index) => (
      <li
        key={index}
        className={classNames("bodySmall", styles.bulletListItem, {
          [styles.reverse]: reverse,
        })}
      >
        <div className={styles.icon}>
          <DotFilledIcon />
        </div>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);
