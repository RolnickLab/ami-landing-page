/* eslint-disable @next/next/no-img-element */
import { List, ListItem } from "@/components/list/list";
import { Section } from "@/components/section/section";
import { Spacer } from "@/components/spacer/spacer";
import content from "@/content.json";

export default function Page() {
  return (
    <>
      <Section theme="tinted">
        <h1 className="heading1">{content.consortium.title}</h1>
        <Spacer size={20} />
        <p className="bodyLarge">{content.consortium.description}</p>
      </Section>
      <Section>
        <h2 className="heading2">Consortium Core Partners</h2>
        <Spacer size={20} />
        <List>
          {content.partners.map((partner, index) => (
            <ListItem
              key={index}
              title={partner.label}
              label={partner.location}
              href={partner.href}
            />
          ))}
        </List>
        <Spacer size={100} />
        <h2 className="heading2">Consortium Steering Committee</h2>
        <Spacer size={20} />
        <List>
          {content.committee.map((member, index) => (
            <ListItem
              key={index}
              title={member.name}
              label={member.affiliation}
            />
          ))}
        </List>
      </Section>
    </>
  );
}
