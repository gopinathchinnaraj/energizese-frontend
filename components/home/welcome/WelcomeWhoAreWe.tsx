import React from "react";
import Link from "next/link";
import styles from "./WelcomeWhoAreWe.module.css";

export default function WelcomeWhoAreWe() {
  return (
    <section className={styles.welcomeSection}>
      <div className={styles.welcomeContainer}>
        <span className={styles.welcomeTitle}>Welcome to Energizese</span>
        <p className={styles.welcomeText}>
          Energizese is a specialized mechanical services firm catering to the
          industrial, commercial, and residential industry. With a focus on
          efficiency, precision, and innovation, we provide high- quality
          mechanical solutions that enhance the functionality and longevity of
          interior spaces..
        </p>
        <Link className={styles.btnCommon} href="/about-us">
          Who we are
        </Link>
      </div>
    </section>
  );
}
