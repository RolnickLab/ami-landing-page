import { Spacer } from "@/components/spacer/spacer";
import { data } from "@/data";
import styles from "./about.module.css";
import classNames from "classnames";

export const About = () => (
  <div className={styles.about}>
    {data.about.map((section, index) => (
      <div key={index}>
        <h2 className="heading2">{section.title}</h2>
        <Spacer size={20} />
        <p className="bodyLarge">{section.text}</p>
        {section.blocks && (
          <>
            <Spacer size={50} />
            <div className={styles.blocks}>
              {section.blocks.map((block, index) => (
                <div key={index} className={styles.block}>
                  <p className={classNames("heading1", styles.number)}>
                    {index}
                  </p>
                  <p className="bodyLarge">{block}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    ))}
  </div>
);
