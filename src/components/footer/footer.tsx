import Image from "next/image";
import { Section } from "../section/section";
import styles from "./footer.module.css";

export const Footer = () => (
  <Section theme="tinted" className={styles.footer}>
    <div className={styles.footerContent}>
      <span className="bodyExtraSmall">Hosted by</span>
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
