import { About } from "@/app/components/about/about";
import { Intro } from "@/app/components/intro/intro";
import { Section } from "@/components/section/section";
import { TopBar } from "@/components/top-bar/top-bar";
import { Contact } from "./components/contact/contact";
import { Projects } from "./components/projects/projects";
import { Publications } from "./components/publications/publications";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <TopBar />
      <Section tinted>
        <Intro />
      </Section>
      <Section>
        <About />
      </Section>
      <Section tinted>
        <Projects />
      </Section>
      <Section>
        <Publications />
      </Section>
      <Section tinted>
        <Contact />
      </Section>
    </main>
  );
}
