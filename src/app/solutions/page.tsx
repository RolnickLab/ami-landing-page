import { List, ListItem } from "@/components/list/list";
import { Project } from "@/components/project/project";
import { Section } from "@/components/section/section";
import { Spacer } from "@/components/spacer/spacer";
import content from "@/content.json";

export default function Page() {
  return (
    <>
      <Section theme="tinted">
        <h1 className="heading1">{content.projects.title}</h1>
        <Spacer size={20} />
        <p className="bodyLarge">{content.projects.description}</p>
      </Section>
      <Section>
        <List>
          {content.projects.list.map((project) => (
            <ListItem key={project.title}>
              <Project data={project} />
            </ListItem>
          ))}
        </List>
      </Section>
    </>
  );
}
