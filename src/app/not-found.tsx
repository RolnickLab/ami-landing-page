import { LinkButton } from "@/components/button/button";
import { Section } from "@/components/section/section";
import { Spacer } from "@/components/spacer/spacer";
import styles from "./page.module.css";
import { ChevronLeftIcon } from "@radix-ui/react-icons";

export default function Page() {
  return (
    <Section theme="tinted">
      <div className={styles.content} style={{ gap: 0 }}>
        <h1 className="heading1">404</h1>
        <Spacer size={20} />
        <h2 className="bodyLarge">This page could not be found.</h2>
        <Spacer size={50} />
        <LinkButton href="/">
          <ChevronLeftIcon />
          <span>Back to home</span>
        </LinkButton>
      </div>
    </Section>
  );
}
