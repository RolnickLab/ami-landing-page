"use client";

import { useEffect, useRef, useState } from "react";
import { Spacer } from "../spacer/spacer";
import { useWindowSize } from "./useWindowSize";
import styles from "./video.module.css";

const RATIO = 16 / 9;

export const Video = ({ caption, src }: { caption: string; src: string }) => {
  const windowSize = useWindowSize();
  const containerRef = useRef<HTMLDivElement>(null);
  const [videoWidth, setVideoWidth] = useState<number>(720);

  useEffect(() => {
    const containerWidth = containerRef.current?.getBoundingClientRect().width;
    if (containerWidth) {
      setVideoWidth(containerWidth);
    }
  }, [windowSize]);

  return (
    <div ref={containerRef} className={styles.container}>
      <div
        style={{ width: `${videoWidth}px`, height: `${videoWidth / RATIO}px` }}
      >
        <iframe
          width={videoWidth}
          height={videoWidth / RATIO}
          src={src}
          className={styles.videoPlayer}
          allowFullScreen
        />
      </div>
      <Spacer size={10} />
      <p className="body">{caption}</p>
    </div>
  );
};
