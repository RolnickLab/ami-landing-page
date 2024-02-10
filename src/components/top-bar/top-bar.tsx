import Link from "next/link";
import { AMILogo } from "../ami-logo/ami-logo";
import styles from "./top-bar.module.css";

const MENU_ITEMS = [
  { label: "Menu item", href: "/" },
  { label: "Menu item", href: "/" },
  { label: "Menu item", href: "/" },
];

export const TopBar = () => (
  <div className={styles.topBar}>
    <Link href="/">
      <AMILogo size={50} />
    </Link>
    <nav className={styles.menu}>
      {MENU_ITEMS.map((menuItem, index) => (
        <Link href={menuItem.href} key={index} className="body">
          {menuItem.label}
        </Link>
      ))}
    </nav>
  </div>
);
