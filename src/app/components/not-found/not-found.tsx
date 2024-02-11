import { Spacer } from "@/components/spacer/spacer";
import styles from "./not-found.module.css";
import { ButtonLink } from "@/components/button/button";

export const NotFound = () => (
  <div className={styles.notFound}>
    <h1 className="heading1">404</h1>
    <Spacer size={20} />
    <h2 className="bodyExtraLarge">This page could not be found.</h2>
    <Spacer size={50} />
    <ButtonLink href="/" label="Back to home" />
    <Spacer size={50} />
  </div>
);
