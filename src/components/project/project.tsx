import { useContent } from "@/useContent";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { useTranslations } from "next-intl";
import Markdown from "react-markdown";
import { BulletList, BulletListItem } from "../bullet-list/bullet-list";
import { ExternalLinkButton } from "../button/button";
import styles from "./project.module.css";

export const Project = ({
  data,
}: {
  data: {
    title?: string;
    partners: string[];
    categories: string[];
    description: string;
    listItems?: string[];
    href?: string;
  };
}) => {
  const t = useTranslations();
  const content = useContent();

  return (
    <div className={styles.content}>
      <div className={styles.group}>
        {data.title && (
          <h2 className="heading2">
            <span>{data.title}</span>
          </h2>
        )}
        <p className="body">
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
                {data.partners.length - 1 > index && " / "}
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
        <Markdown
          className="bodySmall"
          components={{
            ul: (props) => <BulletList>{props.children}</BulletList>,
            li: (props) => <BulletListItem>{props.children}</BulletListItem>,
          }}
        >
          {data.description}
        </Markdown>
      </div>
      {data.href ? (
        <ExternalLinkButton href={data.href}>
          <span>{t("COMMON_LEARN_MORE")}</span>
          <ExternalLinkIcon />
        </ExternalLinkButton>
      ) : null}
    </div>
  );
};
