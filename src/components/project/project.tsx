import classNames from "classnames";
import { ButtonLink } from "../button/button";
import styles from "./project.module.css";

export const Project = ({
  data,
  reverse,
}: {
  data: {
    image: string;
    title: string;
    text: string;
    href: string;
  };
  reverse?: boolean;
}) => (
  <div className={classNames(styles.project, { [styles.reverse]: reverse })}>
    <div
      className={styles.image}
      style={{ backgroundImage: `url(${data.image})` }}
    />
    <div className={styles.content}>
      <h2 className="heading2">{data.title}</h2>
      <p className="body">{data.text}</p>
      <ButtonLink label="Read more" href={data.href} />
    </div>
  </div>
);
