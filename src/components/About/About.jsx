import React from "react";

import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src='assets/hero/IMG_4095.JPG'
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>2018 - 2020</h3>
              <p>
                -Studied at Horwang School in Gifted Class
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>2020 - 2023</h3>
              <p>
                -Studied at Patumwan Demonstration School
              </p>
              <p>
                -Join in Mathematic Olympiad
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>2023 - Now</h3>
              <p>
                -Studying Computer Engineering at Chulalongkorn University
              </p>
              <p>
                -Enjoying Computer Science
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
