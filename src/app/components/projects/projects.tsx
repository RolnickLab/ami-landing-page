import { Project } from "@/components/project/project";
import { data } from "@/data";
import styles from "./projects.module.css";
import { Spacer } from "@/components/spacer/spacer";

export const Projects = () => (
  <div className={styles.projects}>
    <div>
      <h1 className="heading1">The AMI System</h1>
      <Spacer size={20} />
      <p className="bodyLarge">
        The AMI System covers the entire lifecycle of the data: the hardware to
        capture images, the software to process and classify the images, and
        tools to aid in the rigorous analysis of AMI datasets. All services are
        <i>à la carte</i>: each can be opted in or out. AMI currently focuses on
        moth monitoring.
      </p>
    </div>
    {data.projects.map((project, index) => (
      <Project key={index} data={project} reverse={index % 2 !== 0} />
    ))}
  </div>
);
