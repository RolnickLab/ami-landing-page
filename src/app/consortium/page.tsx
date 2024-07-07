import { List, ListItem } from "@/components/list/list";
import { Section } from "@/components/section/section";
import { Spacer } from "@/components/spacer/spacer";
import content from "@/content.json";
import Image from "next/image";

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
        <Spacer size={40} />
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
      </Section>
      <Section theme="tinted">
        <Image
          src="/people.jpg"
          alt=""
          width={1999}
          height={1500}
          style={{ width: "100%", height: "auto" }}
        />
        <Spacer size={10} />
        <p className="bodySmall">
          April 2024, Gathering hosted by Aarhus University
        </p>
      </Section>
      <Section>
        <h2 className="heading2">Consortium Steering Committee</h2>
        <Spacer size={40} />
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
