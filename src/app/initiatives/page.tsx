"use client";

import { Button } from "@/components/button/button";
import { Card, Cards } from "@/components/card/card";
import { Project } from "@/components/project/project";
import { Section } from "@/components/section/section";
import { Select } from "@/components/select/select";
import { Spacer } from "@/components/spacer/spacer";
import { useContent } from "@/useContent";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import styles from "./page.module.css";

const ITEM_ALL_ID = "all";

export default function Page() {
  const t = useTranslations();
  const content = useContent();

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
  }, [category, content.projects.list, partner]);

  const label = useMemo(() => {
    if (projects.length === 0) {
      return t("INITIATIVES_NO_RESULTS");
    }
    return t("INITIATIVES_RESULTS", {
      count: projects.length,
    });
  }, [projects.length, t]);

  return (
    <>
      <Section theme="tinted">
        <h1 className="heading1">{content.projects.title}</h1>
        <Spacer size={20} />
        <p className="bodyLarge">{content.projects.description}</p>
        <Spacer size={40} />
        <div className={styles.controls}>
          <div className={styles.control}>
            <span className="bodySmall">{t("COMMON_CATEGORY")}</span>
            <Spacer size={10} />
            <Select
              items={[
                ...content.categories,
                { label: t("COMMON_ALL_CATEGORIES"), id: ITEM_ALL_ID },
              ]}
              value={category}
              onValueChange={setCategory}
            />
          </div>
          <div className={styles.control}>
            <span className="bodySmall">{t("COMMON_MEMBER")}</span>
            <Spacer size={10} />
            <Select
              items={[
                { label: t("COMMON_ALL_MEMBERS"), id: ITEM_ALL_ID },
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
      </Section>

      <Section theme="paper">
        <span className="bodySmall">{label}</span>
        <Spacer size={20} />
        <Cards style={{ gridTemplateColumns: "1fr" }}>
          {projects.map((project) => (
            <Card key={project.title ?? project.partners.join("/")}>
              <Project data={project} />
            </Card>
          ))}
        </Cards>
      </Section>
    </>
  );
}
