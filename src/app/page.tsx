import { Intro } from "@/components/intro/intro";
import { List, ListItem } from "@/components/list/list";
import { Project } from "@/components/project/project";
import { Section } from "@/components/section/section";
import { Spacer } from "@/components/spacer/spacer";
import { Video } from "@/components/video/video";
import content from "@/content.json";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Page() {
  return (
    <>
      <Section theme="moth">
        <Intro title={content.title} subTitle={content.subTitle} />
      </Section>

      <Section theme="tinted">
        <p className="body" style={{ textAlign: "center" }}>
          {content.consortium.partners.titleShort}
        </p>
        <Spacer size={50} />
        <div className={styles.logos}>
          {content.consortium.partners.list.map((partner, index) => (
            <Link key={index} href={partner.href as string}>
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
          {content.about.map((section, index) => (
            <div key={index}>
              <h2 className="heading2">{section.title}</h2>
              <Spacer size={20} />
              <p
                className="body"
                dangerouslySetInnerHTML={{ __html: section.description }}
              />
            </div>
          ))}
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
          </div>
          {content.projects.list.map((project, index) => (
            <Project key={index} data={project} reverse={index % 2 === 0} />
          ))}
        </div>
      </Section>

      <Section>
        <h1 className="heading1">{content.resources.title}</h1>
        <Spacer size={20} />
        <List>
          {content.resources.list.map((resource, index) => (
            <ListItem
              key={index}
              title={resource.title}
              description={resource.description}
              href={resource.href}
            />
          ))}
        </List>
        <Spacer size={100} />
        <h2 className="heading2">{content.publications.title}</h2>
        <Spacer size={20} />
        <List>
          {content.publications.list.map((publication, index) => (
            <ListItem
              key={index}
              title={publication.title}
              description={publication.description}
              href={publication.href}
            />
          ))}
        </List>
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
