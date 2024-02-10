import { AMILogo } from "@/components/ami-logo/ami-logo";
import { Spacer } from "@/components/spacer/spacer";
import { data } from "@/data";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import styles from "./intro.module.css";

export const Intro = () => (
  <div className={styles.intro}>
    <AMILogo size={200} />
    <Spacer size={20} />
    <p className={classNames("bodyExtraLarge", styles.title)}>
      Platform for long-term automated monitoring of insects
    </p>
    <Spacer size={100} />
    <p className={classNames("body", styles.subTitle)}>By partners from</p>
    <Spacer size={20} />
    <div className={styles.logos}>
      {data.partners.map((partner, index) => (
        <Link key={index} href={partner.href}>
          <Image
            alt={partner.label}
            src={partner.logo}
            width={200}
            height={100}
            className={styles.logo}
          />
        </Link>
      ))}
    </div>
  </div>
);
