import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import heroImg from "../../../assets/hero/finalimg-hero.png"

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Hari Krishna</h1>
        <p className={styles.description}>
        "I'm a frontend developer with 6 months of experience specializing in React,<br></br> JavaScript, and modern UI/UX design. Reach out if you'd like to collaborate or learn more!"
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={heroImg}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
