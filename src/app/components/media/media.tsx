import { Spacer } from "@/components/spacer/spacer";
import { data } from "@/data";
import styles from "./media.module.css";

export const Media = () => (
  <div className={styles.media}>
    <h1 className="heading1">Media</h1>
    <Spacer size={50} />
    <div className={styles.content}>
      {data.media.map(({ src, caption }, index) => (
        <div key={index}>
          <iframe src={src} width="670" height="372" allowFullScreen />
          <Spacer size={10} />
          <p className="body">{caption}</p>
        </div>
      ))}
    </div>
  </div>
);
