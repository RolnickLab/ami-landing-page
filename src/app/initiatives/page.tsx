"use client";

import { Button } from "@/components/button/button";
import { Card, Cards } from "@/components/card/card";
import { Project } from "@/components/project/project";
import { Section } from "@/components/section/section";
import { Select } from "@/components/select/select";
import { Spacer } from "@/components/spacer/spacer";
import content from "@/content.json";
import { useMemo, useState } from "react";
import styles from "./page.module.css";

const ITEM_ALL_ID = "all";

export default function Page() {
  const [category, setCategory] = useState(ITEM_ALL_ID);
  const [partner, setPartner] = useState(ITEM_ALL_ID);

  const projects = useMemo(() => {
    const filtered = content.projects.list.filter((project) => {
      const hasCategory =
        category === ITEM_ALL_ID ? true : project.categories.includes(category);
      const hasPartner =
        partner === ITEM_ALL_ID ? true : project.partners.includes(partner);

      return hasCategory && hasPartner;
    });

    const sorted = filtered.sort(function (a, b) {
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

    return sorted;
  }, [category, partner]);

  const label = useMemo(() => {
    if (projects.length === 0) {
      return "No initiatives to show.";
    }
    if (projects.length === 1) {
      return "Showing 1 initiative:";
    }
    return `Showing ${projects.length} initiatives:`;
  }, [projects]);

  return (
    <>
      <Section theme="tinted">
        <h1 className="heading1">{content.projects.title}</h1>
        <Spacer size={20} />
        <p className="bodyLarge">{content.projects.description}</p>
      </Section>
      <Section>
        <div className={styles.controls}>
          <div className={styles.control}>
            <span className="bodySmall">Category</span>
            <Spacer size={10} />
            <Select
              items={[
                ...content.categories,
                { label: "All categories", id: ITEM_ALL_ID },
              ]}
              value={category}
              onValueChange={setCategory}
            />
          </div>
          <div className={styles.control}>
            <span className="bodySmall">Partner</span>
            <Spacer size={10} />
            <Select
              items={[
                { label: "All partners", id: ITEM_ALL_ID },
                ...content.consortium.partners.list,
              ]}
              value={partner}
              onValueChange={setPartner}
            />
          </div>
          {category !== ITEM_ALL_ID || partner !== ITEM_ALL_ID ? (
            <div className={styles.clearControl}>
              <Button
                onClick={() => {
                  setCategory(ITEM_ALL_ID);
                  setPartner(ITEM_ALL_ID);
                }}
              >
                Clear
              </Button>
            </div>
          ) : null}
        </div>
        <span className="bodySmall">{label}</span>
        <Spacer size={20} />
        <Cards style={{ gridTemplateColumns: "1fr" }}>
          {projects.map((project) => (
            <Card key={project.title}>
              <Project data={project} />
            </Card>
          ))}
        </Cards>
      </Section>
    </>
  );
}
