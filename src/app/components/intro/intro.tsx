"use client";
import { AMILogo } from "@/components/ami-logo/ami-logo";
import { Spacer } from "@/components/spacer/spacer";
import { data } from "@/data";
import { animated, config, useSpring } from "@react-spring/web";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import styles from "./intro.module.css";

export const Intro = () => {
  const [logoSprings] = useSpring(
    () => ({
      from: { opacity: 0, y: 100 },
      to: { opacity: 1, y: 0 },
      config: config.default,
    }),
    []
  );

  const [titleSprings] = useSpring(
    () => ({
      from: { opacity: 0, y: 100 },
      to: { opacity: 1, y: 0 },
      delay: 200,
      config: config.default,
    }),
    []
  );

  return (
    <div className={styles.intro}>
      <animated.div style={logoSprings}>
        <AMILogo size={200} />
      </animated.div>
      <Spacer size={20} />
      <animated.p
        className={classNames("bodyExtraLarge", styles.title)}
        style={titleSprings}
      >
        Platform for long-term automated monitoring of insects
      </animated.p>
      <Spacer size={100} expand />
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
};
