import { CSSProperties, ReactNode } from "react";
import styles from "./card.module.css";

export const Cards = ({
  children,
  style,
}: {
  children: ReactNode;
  style?: CSSProperties;
}) => (
  <div className={styles.cards} style={style}>
    {children}
  </div>
);

export const Card = ({ children }: { children: ReactNode }) => (
  <div className={styles.card}>{children}</div>
);
