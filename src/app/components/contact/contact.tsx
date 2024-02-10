import { Spacer } from "@/components/spacer/spacer";
import { data } from "@/data";
import styles from "./contact.module.css";

export const Contact = () => (
  <div className={styles.contact}>
    <h1 className="heading1">Get in touch</h1>
    <div className={styles.persons}>
      {data.contacts.map((contact, index) => (
        <div key={index} className={styles.person}>
          <div className={styles.image} />
          <Spacer size={20} />
          <p className="bodyLarge">{contact.name}</p>
          <p className="body">{contact.jobTitle}</p>
        </div>
      ))}
    </div>
  </div>
);
