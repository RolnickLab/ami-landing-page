"use client";

import { useContent } from "@/useContent";
import classNames from "classnames";
import { MailIcon } from "lucide-react";
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
        <nav className={styles.menu}>
          <Link href="/">
            <AMILogo size={50} />
          </Link>
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
          className={styles.contactButton}
          variant="neutral"
        >
          <MailIcon size={15} />
          <span className={styles.label}>{t("COMMON_CONTACT_US")}</span>
        </LinkButton>
        <LanguageControl />
      </div>
    </header>
  );
};
