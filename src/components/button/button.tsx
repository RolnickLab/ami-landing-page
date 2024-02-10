import classNames from "classnames";
import Link from "next/link";
import styles from "./button.module.css";

export const ButtonLink = ({
  label,
  href,
}: {
  label: string;
  href: string;
}) => (
  <Link className={classNames("body", styles.button)} href={href}>
    {label}
  </Link>
);
