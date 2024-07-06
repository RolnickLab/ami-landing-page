/* eslint-disable @next/next/no-img-element */
"use client";
import { AMILogo } from "@/components/ami-logo/ami-logo";
import { Spacer } from "@/components/spacer/spacer";
import { data } from "@/data";
import { animated, config, useSpring } from "@react-spring/web";
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

  const [introTextSprings] = useSpring(
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
      <animated.div className={styles.introText} style={introTextSprings}>
        <h1 className="heading1">Automated Monitoring of Insects</h1>
        <Spacer size={10} />
        <h2 className="bodyLarge">
          Timestamped, Geolocated, and Labelled Observational Insect Data
        </h2>
      </animated.div>
      <Spacer size={150} expand />
      <p className="label">By partners from</p>
      <Spacer size={20} />
      <div className={styles.logos}>
        {data.partners
          .filter((partner) => partner.logo && partner.href)
          .map((partner, index) => (
            <Link key={index} href={partner.href as string}>
              <img
                alt={partner.label}
                src={partner.logo}
                className={styles.logo}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};
