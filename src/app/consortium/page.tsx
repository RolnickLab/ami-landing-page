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
        <h2 className="heading2">{content.consortium.partners.title}</h2>
        <Spacer size={40} />
        <List>
          {content.consortium.partners.list.map((partner, index) => (
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
          src={content.consortium.people.image}
          alt=""
          width={1999}
          height={1500}
          style={{ width: "100%", height: "auto" }}
        />
        <Spacer size={10} />
        <p className="bodySmall">{content.consortium.people.caption}</p>
      </Section>
      <Section>
        <h2 className="heading2">{content.consortium.committee.title}</h2>
        <Spacer size={40} />
        <List>
          {content.consortium.committee.list.map((member, index) => (
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
