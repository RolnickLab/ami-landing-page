/* eslint-disable @next/next/no-img-element */
import { Section } from "@/components/section/section";
import { Spacer } from "@/components/spacer/spacer";
import { data } from "@/data";
import styles from "./page.module.css";

export default function Page() {
  return (
    <>
      <Section tinted>
        <div className={styles.intro}>
          <h1 className="heading1">The AMI Consortium</h1>
          <p className="bodyLarge">
            Our mission is to establish standardized and scalable automated
            monitoring systems for insect data to advance ecological
            understanding and conservation efforts globally through
            international and interdisciplinary collaboration.
          </p>
        </div>
      </Section>
      <Section>
        <div className={styles.content}>
          <h2 className="heading2">Consortium Core Partners</h2>
          <Spacer size={20} />
          <div className={styles.list}>
            {data.partners.map((partner, index) => (
              <div key={index} className={styles.listItem}>
                <span className="bodyLarge">{partner.label}</span>
                <span className="bodyExtraSmall">{partner.location}</span>
                {partner.href && (
                  <span className="body">
                    <a href={partner.href}>Website</a>
                  </span>
                )}
              </div>
            ))}
          </div>
          <Spacer size={100} />
          <h2 className="heading2">Consortium Steering Committee</h2>
          <Spacer size={20} />
          <div className={styles.list}>
            {data.committee.map((member, index) => (
              <div key={index} className={styles.listItem}>
                <span className="body">{member.name}</span>
                <span className="bodyExtraSmall">{member.affiliation}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
