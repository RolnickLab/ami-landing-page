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
        As a system, AMI provides support throughout the lifecycle of the data:
        the hardware that captures images, the software to process the images
        and classify each observed species, and tools to aid in the rigorous
        analysis of the AMI datasets. All services are available à la carte:
        each component can be opted in or out. It currently focuses on moth
        monitoring.
      </p>
    </div>
    {data.projects.map((project, index) => (
      <Project key={index} data={project} reverse={index % 2 !== 0} />
    ))}
  </div>
);
