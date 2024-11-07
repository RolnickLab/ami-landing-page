"use client";

import { List, ListItem } from "@/components/list/list";
import { Project } from "@/components/project/project";
import { Section } from "@/components/section/section";
import { Select } from "@/components/select/select";
import { Spacer } from "@/components/spacer/spacer";
import content from "@/content.json";
import { useState } from "react";

export default function Page() {
  const [category, setCategory] = useState("all");
  const projects =
    category === "all"
      ? content.projects.list
      : content.projects.list.filter((project) =>
          project.categories.includes(category)
        );

  const sortedProjects = projects.sort(function (a, b) {
    const titleA = a.title ?? "";
    const titleB = b.title ?? "";
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  });

  return (
    <>
      <Section theme="tinted">
        <h1 className="heading1">{content.projects.title}</h1>
        <Spacer size={20} />
        <p className="bodyLarge">{content.projects.description}</p>
        <Spacer size={40} />
        <Select
          items={content.categories}
          placeholder="All categories"
          value={category}
          onValueChange={setCategory}
        />
      </Section>
      <Section>
        <List>
          {sortedProjects.map((project) => (
            <ListItem key={project.title}>
              <Project data={project} />
            </ListItem>
          ))}
        </List>
      </Section>
    </>
  );
}
