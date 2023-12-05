import React from 'react';
import styles from './Hero.module.css';

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>A Computer Engineering Student</h1>
                <p className={styles.description}>
                    "I am Punnarun, a dedicated Computer Engineering Student at Chulalongkorn University. My fervor lies in the realms of AI and data science, driven by the conviction that leveraging the power of data analytics holds the potential to enact positive global change and solve pressing real-world issues."
                </p>
                <div className={styles.buttons}>
                    <a href='mailto:Punzaza.yonvilas@gmail.com' className={styles.contactBtn}>
                        Contact Me
                    </a>
                </div>
            </div>
            <img src='assets/hero/IMG_4095.JPG' alt='Hero Image of Me' className={styles.heroImg} />
        </section>
    );
};
