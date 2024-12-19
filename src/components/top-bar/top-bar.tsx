"use client";

import { useContent } from "@/useContent";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AMILogo } from "../ami-logo/ami-logo";
import { LinkButton } from "../button/button";
import { LanguageControl } from "../language-control/language-control";
import styles from "./top-bar.module.css";

const CONTACT_MAIL =
  "ami-steering-committe-aaaam3iesbkxe22x3nkrr4c7gm@automatedinse-zlx9399.slack.com";

export const TopBar = () => {
  const currentPath = usePathname();
  const t = useTranslations();
  const content = useContent();

  return (
    <header className={styles.topBar}>
      <div className={styles.topBarContent}>
        <Link href="/">
          <AMILogo size={50} />
        </Link>
        <nav className={styles.menu}>
          {content.menuItems.map((menuItem, index) => (
            <Link
              key={index}
              href={menuItem.href}
              className={classNames("bodySmall", styles.menuItem, {
                [styles.active]: currentPath === menuItem.href,
              })}
            >
              <span className={styles.label}>{menuItem.label}</span>
              <span className={styles.labelShort}>{menuItem.labelShort}</span>
              <span className={styles.line} />
            </Link>
          ))}
        </nav>
        <LinkButton
          href={`mailto:${CONTACT_MAIL}`}
          style={{ color: "var(--text)" }}
          theme="text"
        >
          <EnvelopeClosedIcon />
          <span className={styles.label}>{t("COMMON_CONTACT_US")}</span>
        </LinkButton>
        <LanguageControl />
      </div>
    </header>
  );
};
