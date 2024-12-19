import { Article } from "@/components/article/article";
import { LinkButton } from "@/components/button/button";
import { Card, Cards } from "@/components/card/card";
import { ExternalLink } from "@/components/external-link/external-link";
import { Intro } from "@/components/intro/intro";
import { Section } from "@/components/section/section";
import { Spacer } from "@/components/spacer/spacer";
import { Video } from "@/components/video/video";
import { useContent } from "@/useContent";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Markdown from "react-markdown";

export default function Page() {
  const t = useTranslations();
  const content = useContent();

  return (
    <>
      <Section theme="moth">
        <Intro title={content.title} subTitle={content.subTitle} />
        <p className={classNames("bodyExtraSmall", styles.attribution)}>
          {t("COMMON_PHOTO_BY")} Michael Bunsen
        </p>
      </Section>

      <Section theme="paper">
        <p className="body" style={{ textAlign: "center" }}>
          <span className="block">
            {content.consortium.partners.titleShort}
          </span>
        </p>
        <Spacer size={50} />
        <div className={styles.logos}>
          {content.consortium.partners.list.map((partner) => (
            <Link key={partner.id} href={partner.href as string}>
              <Image
                src={partner.logo}
                alt={partner.label}
                width={0}
                height={0}
                className={styles.logo}
              />
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <div className={styles.content}>
          <div className={styles.aboutIntro}>
            <div>
              <h2 className="heading2">{content.about.intro.title}</h2>
              <Spacer size={20} />
              <Markdown className="body">
                {content.about.intro.description}
              </Markdown>
            </div>
            <div>
              <Image
                src="/moth_02.jpg"
                alt=""
                width={512}
                height={512}
                style={{ width: "100%", height: "auto" }}
                loading="lazy"
              />
              <Spacer size={10} />
              <p className="bodyExtraSmall">
                {t("COMMON_PHOTO_BY")} Anna Viklund
              </p>
            </div>
          </div>

          <div>
            <h2 className="heading2">{content.about.content.title}</h2>
            <Spacer size={20} />
            <div className={styles.aboutContent}>
              <p className="body">{content.about.content.description}</p>
            </div>
          </div>

          <div>
            <Image
              src="/anguilla.jpg"
              alt={t("CAPTION_ANGUILLA")}
              width={1200}
              height={675}
              style={{ width: "100%", height: "auto" }}
              loading="lazy"
            />
            <Spacer size={10} />
            <p className="bodyExtraSmall">
              {t("CAPTION_ANGUILLA")} {t("COMMON_PHOTO_BY")} Tom August.
            </p>
          </div>
        </div>
      </Section>

      <Section theme="tinted">
        <div className={styles.content}>
          <div>
            <h1 className="heading1">{content.projects.title}</h1>
            <Spacer size={20} />
            <p className="bodyLarge">{content.projects.description}</p>
            <Spacer size={40} />
            <LinkButton href="/initiatives">
              {t("COMMON_CHECKOUT_INITIATIVES")}
              <ChevronRightIcon />
            </LinkButton>
          </div>
        </div>
      </Section>

      <Section theme="paper">
        <h1 className="heading1">{content.resources.title}</h1>
        <Spacer size={20} />
        <Cards>
          {content.resources.list.map((resource, index) => (
            <Card key={index}>
              <>
                <p className="body">
                  <ExternalLink href={resource.href}>
                    {resource.title}
                  </ExternalLink>
                </p>
                <Spacer size={10} />
                <p className="bodySmall">{resource.description}</p>
              </>
            </Card>
          ))}
        </Cards>
        <Spacer size={100} />
        <h1 className="heading1">{content.publications.title}</h1>
        <Spacer size={20} />
        <Cards>
          {content.publications.list.map((publication, index) => (
            <Card key={index}>
              <>
                <p className="body">
                  <ExternalLink href={publication.href}>
                    {publication.title}
                  </ExternalLink>
                </p>
                <Spacer size={20} />
                <p className="bodySmall">{publication.description}</p>
              </>
            </Card>
          ))}
        </Cards>
      </Section>

      <Section>
        <div className={styles.content}>
          <h1 className="heading1">{content.media.title}</h1>
          {content.media.articles.map((article, index) => (
            <Article key={index} {...article} />
          ))}
          {content.media.videos.map(({ src }, index) => (
            <Video key={index} src={src} />
          ))}
        </div>
      </Section>
    </>
  );
}
