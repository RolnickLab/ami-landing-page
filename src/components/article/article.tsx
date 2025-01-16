import { ExternalLinkIcon } from "lucide-react";
import { ExternalLinkButton } from "../button/button";
import { Spacer } from "../spacer/spacer";
import styles from "./article.module.css";

export const Article = ({
  title,
  description,
  image,
  href,
}: {
  title: string;
  description: string;
  image: string;
  href: string;
}) => (
  <div className={styles.container}>
    <div
      className={styles.image}
      style={{ backgroundImage: `url(${image})` }}
    />
    <div className={styles.text}>
      <p className="heading2">{title}</p>
      <Spacer size={10} />
      <p className="bodySmall">{description}</p>
      <Spacer size={40} />
      <ExternalLinkButton href={href}>
        Radio Canada
        <ExternalLinkIcon size={15} />
      </ExternalLinkButton>
    </div>
  </div>
);
