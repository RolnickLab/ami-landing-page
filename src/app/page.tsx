import { LinkButton } from "@/components/button/button";
import { Card, Cards } from "@/components/card/card";
import { ExternalLink } from "@/components/external-link/external-link";
import { Intro } from "@/components/intro/intro";
import { Section } from "@/components/section/section";
import { Spacer } from "@/components/spacer/spacer";
import { Video } from "@/components/video/video";
import content from "@/content.json";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import styles from "./page.module.css";

export default function Page() {
  return (
    <>
      <Section theme="moth">
        <Intro title={content.title} subTitle={content.subTitle} />
        <p className={classNames("bodyExtraSmall", styles.attribution)}>
          Photo by Michael Bunsen
        </p>
      </Section>

      <Section theme="tinted">
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
              <p
                className="body"
                dangerouslySetInnerHTML={{
                  __html: content.about.intro.description,
                }}
              />
            </div>
            <div>
              <Image
                src="/moth_02.jpg"
                alt=""
                width={512}
                height={512}
                style={{ width: "100%", height: "auto" }}
              />
              <Spacer size={10} />
              <p className="bodyExtraSmall">Photo by Anna Viklund</p>
            </div>
          </div>

          <div>
            <h2 className="heading2">{content.about.content.title}</h2>
            <Spacer size={20} />
            <div className={styles.aboutContent}>
              {content.about.content.description.map((__html, index) => (
                <Fragment key={index}>
                  <p className="body" dangerouslySetInnerHTML={{ __html }} />
                  {index < content.about.content.description.length - 1 && (
                    <Spacer size={20} />
                  )}
                </Fragment>
              ))}
            </div>
          </div>

          <div>
            <Image
              src="/moths.jpg"
              alt=""
              width={1024}
              height={683}
              style={{ width: "100%", height: "auto" }}
            />
            <Spacer size={10} />
            <p className="bodyExtraSmall">Photo by Michael Bunsen</p>
          </div>
        </div>
      </Section>

      <Section theme="tinted">
        <div className={styles.content}>
          <div>
            <h1 className="heading1">{content.projects.title}</h1>
            <Spacer size={20} />
            <p
              className="bodyLarge"
              dangerouslySetInnerHTML={{ __html: content.projects.description }}
            />
            <Spacer size={40} />
            <LinkButton href="/solutions">
              Checkout the solutions
              <ChevronRightIcon />
            </LinkButton>
          </div>
        </div>
      </Section>

      <Section>
        <h1 className="heading2">{content.resources.title}</h1>
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
        <h1 className="heading2">{content.publications.title}</h1>
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

      <Section theme="tinted">
        <div className={styles.content}>
          <h1 className="heading1">{content.media.title}</h1>
          {content.media.list.map(({ src, caption }, index) => (
            <Video key={index} src={src} caption={caption} />
          ))}
        </div>
      </Section>
    </>
  );
}
