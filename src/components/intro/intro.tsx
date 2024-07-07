"use client";

import { Spacer } from "@/components/spacer/spacer";
import { animated, config, useSpring } from "@react-spring/web";
import classNames from "classnames";
import styles from "./intro.module.css";

export const Intro = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  const [titleSprings] = useSpring(
    () => ({
      from: { opacity: 0, y: 100 },
      to: { opacity: 1, y: 0 },
      config: config.default,
    }),
    []
  );

  const [subTitleSprings] = useSpring(
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
      <animated.h1
        className={classNames("heading1", styles.introText)}
        style={titleSprings}
      >
        <span className={styles.introTextBlock}>{title}</span>
      </animated.h1>
      <Spacer size={10} />
      <animated.h2
        className={classNames("bodyLarge", styles.introText)}
        style={subTitleSprings}
      >
        <span className={styles.introTextBlock}>{subTitle}</span>
      </animated.h2>
    </div>
  );
};
