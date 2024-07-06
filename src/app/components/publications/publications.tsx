import { Spacer } from "@/components/spacer/spacer";
import { data } from "@/data";
import styles from "./publications.module.css";
import { ButtonLink } from "@/components/button/button";

export const Publications = () => (
  <div>
    <h1 className="heading1">Resources</h1>
    <Spacer size={20} />
    <div className={styles.resources}>
      {data.resources.map((resource, index) => (
        <div key={index} className={styles.listItem}>
          <h2 className="heading2">{resource.title}</h2>
          <Spacer size={20} />
          <p className="body">{resource.description}</p>
          <Spacer size={20} />
          <ButtonLink label="Learn more" href={resource.href} />
        </div>
      ))}
    </div>
    <Spacer size={80} />
    <h2 className="heading2">Academic Publications</h2>
    <Spacer size={20} />
    <div className={styles.publications}>
      {data.publications.map((publication, index) => (
        <div key={index} className={styles.listItem}>
          <p className="body">
            <a href={publication.href}>{publication.title}</a>
          </p>
          <Spacer size={10} />
          <p className="bodySmall">{publication.description}</p>
        </div>
      ))}
    </div>
  </div>
);
