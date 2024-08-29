import classNames from "classnames";
import Image from "next/image";
import { BulletList } from "../bullet-list/bullet-list";
import { ExternalLinkButton } from "../button/button";
import styles from "./project.module.css";

export const Project = ({
  data,
  reverse,
}: {
  data: {
    image: string;
    title: string;
    description: string;
    listItems?: string[];
    href: string;
  };
  reverse?: boolean;
}) => (
  <div className={classNames(styles.project, { [styles.reverse]: reverse })}>
    <Image
      src={data.image}
      alt=""
      width={0}
      height={0}
      className={styles.image}
    />
    <div className={styles.content}>
      <h2 className="heading2">{data.title}</h2>
      <p
        className="body"
        dangerouslySetInnerHTML={{ __html: data.description }}
      />
      {data.listItems?.length ? (
        <BulletList items={data.listItems} reverse={reverse} />
      ) : null}
      <ExternalLinkButton label="Learn more" href={data.href} />
    </div>
  </div>
);
