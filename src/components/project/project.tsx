import content from "@/content.json";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import classNames from "classnames";
import { BulletList } from "../bullet-list/bullet-list";
import { ExternalLinkButton } from "../button/button";
import styles from "./project.module.css";

export const Project = ({
  data,
}: {
  data: {
    title?: string;
    partners: string[];
    categories: string[];
    description: string[];
    listItems?: string[];
    href?: string;
  };
}) => (
  <div className={classNames(styles.project)}>
    <div className={styles.content}>
      <div className={styles.group}>
        {data.title && (
          <h2 className="heading2">
            <span>{data.title}</span>
          </h2>
        )}
        <p className="bodyLarge">
          {data.partners.map((id, index) => {
            const partner = content.consortium.partners.list.find(
              (partner) => partner.id === id
            );
            return (
              <span key={id}>
                <a
                  href={partner?.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {partner?.label}
                </a>
                {data.partners.length - 1 > index && ", "}
              </span>
            );
          })}
        </p>
        <div className={styles.categories}>
          {data.categories.map((id) => {
            const category = content.categories.find(
              (category) => category.id === id
            );
            return (
              <span key={id} className="bodyExtraSmall block">
                {category?.label}
              </span>
            );
          })}
        </div>
      </div>
      <div className={styles.group}>
        {data.description.map((__html, index) => (
          <p
            key={index}
            className="bodySmall"
            dangerouslySetInnerHTML={{ __html }}
          />
        ))}
        {data.listItems?.length ? <BulletList items={data.listItems} /> : null}
      </div>
      {data.href ? (
        <ExternalLinkButton href={data.href}>
          <span>Learn more</span>
          <ExternalLinkIcon />
        </ExternalLinkButton>
      ) : null}
    </div>
  </div>
);
