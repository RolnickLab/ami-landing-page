"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AMILogo } from "../ami-logo/ami-logo";
import styles from "./top-bar.module.css";

const MENU_ITEMS = [
  { label: "The AMI Consortium", href: "/consortium" },
  { label: "Contact Us", href: "mailto:moth-ai@mila.quebec" },
];

export const TopBar = () => {
  const currentPath = usePathname();

  return (
    <header className={styles.topBar}>
      <Link href="/">
        <AMILogo size={50} />
      </Link>
      <nav className={styles.menu}>
        {MENU_ITEMS.map((menuItem, index) => (
          <Link
            href={menuItem.href}
            key={index}
            className={classNames("label", styles.menuItem, {
              [styles.active]: currentPath === menuItem.href,
            })}
          >
            {menuItem.label}
            <span className={styles.line} />
          </Link>
        ))}
      </nav>
    </header>
  );
};
