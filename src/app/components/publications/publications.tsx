import { data } from "@/data";
import classNames from "classnames";
import Link from "next/link";
import styles from "./publications.module.css";

export const Publications = () => (
  <div className={styles.publications}>
    <h1 className="heading1">Related publications</h1>
    {data.publications.map((publication, index) => (
      <p key={index} className={classNames("body", styles.publication)}>
        <span>{publication.year}</span>
        <span>
          <Link href={publication.href}>{publication.title}</Link>
        </span>
        <span>{publication.publisher}</span>
        <span>{publication.authors}</span>
      </p>
    ))}
  </div>
);
