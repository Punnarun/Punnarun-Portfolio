import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, description,github },
}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.links}>
        {/* Replaced text content with img element */}
        <a href={github} className={styles.link}>
          <img src="assets/hero/25231.png" alt="GitHub link" />
        </a>
      </div>
    </div>
  );
};
