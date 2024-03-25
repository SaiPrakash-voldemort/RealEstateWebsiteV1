import React from "react";
import styles from "./Overview.module.css";
const Overview = () => {
  return (
    <div className={styles.overview}>
      <img src="/bd.png" className={styles.bird}></img>
      <div className={styles.grassBg}>
        <div className={styles.overviewTitle}>
          <h1>Overview</h1>
          <h2>DREAM BIG,BUILD BIG</h2>
        </div>
        <div className={styles.overviewInfo}>
          <p>
            Unlock the door to a life of unparalleled luxury with our prime
            bungalow plots.Set in an esteemed locality and deveeloped by a
            trusted name in the industry ,these plots boast an unrivaled
            combination of style,exclusivity,and world-class amenities that
            ensure a life of absolute opulence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
