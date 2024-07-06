import { Spacer } from "@/components/spacer/spacer";
import { data } from "@/data";
import styles from "./about.module.css";

export const About = () => (
  <div className={styles.about}>
    {data.about.map((section, index) => (
      <div key={index}>
        <h2 className="heading2">{section.title}</h2>
        <Spacer size={20} />
        <p className="body" style={{ columnCount: section.columnCount }}>
          {section.text}
        </p>
      </div>
    ))}
  </div>
);
