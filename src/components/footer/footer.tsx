import { useTranslations } from "next-intl";
import Image from "next/image";
import { Section } from "../section/section";
import styles from "./footer.module.css";

export const Footer = () => {
  const t = useTranslations();

  return (
    <Section theme="tinted" className={styles.footer}>
      <div className={styles.footerContent}>
        <span className="bodyExtraSmall">{t("COMMON_HOSTED_BY")}</span>
        <a
          href="https://www.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={"/logo-netlify.png"}
            alt="Netlify"
            width={512}
            height={209}
            className={styles.logo}
          />
        </a>
      </div>
    </Section>
  );
};
