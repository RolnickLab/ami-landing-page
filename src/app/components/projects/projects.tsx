import { Project } from "@/components/project/project";
import { data } from "@/data";
import styles from "./projects.module.css";

export const Projects = () => (
  <div className={styles.projects}>
    <h1 className="heading1">Ongoing work</h1>
    {data.projects.map((project, index) => (
      <Project key={index} data={project} reverse={index % 2 !== 0} />
    ))}
  </div>
);
