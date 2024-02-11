import { About } from "@/app/components/about/about";
import { Intro } from "@/app/components/intro/intro";
import { Section } from "@/components/section/section";
import { Contact } from "./components/contact/contact";
import { Projects } from "./components/projects/projects";
import { Publications } from "./components/publications/publications";

export default function Home() {
  return (
    <>
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
    </>
  );
}