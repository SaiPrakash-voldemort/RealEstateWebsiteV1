import React from "react";
import styles from "./Landmark.module.css";
const Landmark = () => {
  return (
    <>
      <div className={styles.landmark}>
        <h1>Live The Landmark</h1>

        <div className={styles.landmarkImg}>
          <div className={styles.landmarkCard}>
            <div className={styles.landmarkCardIcon}>
              <img src="/busi.png" className={styles.businessMan}></img>
              <h2>IN YOUR VICINITY</h2>
            </div>
            <ul>
              <li>5-Minutes ToRing Road</li>
              <li>1.5km From Metro Station</li>
              <li>3km To Highway</li>
            </ul>
          </div>
          <div className={styles.landmarkCard}>
            <div className={styles.landmarkCardIcon}>
              <img src="/hospital.png" className={styles.businessMan}></img>
              <h2>HOSPITALS</h2>
            </div>
            <ul>
              <li>Ruby Hall Hospital</li>
              <li>Hinjawadi Hospital</li>
            </ul>
          </div>
          <div className={styles.landmarkCard}>
            <div className={styles.landmarkCardIcon}>
              <img src="/institute.png" className={styles.businessMan}></img>
              <h2>EDUCATIONAL INSTITUTIONS</h2>
            </div>
            <ul>
              <li>Symbiosis University</li>
              <li>Flame University</li>
              <li>DY.Patil University</li>
            </ul>
          </div>
          <div className={styles.landmarkCard}>
            <div className={styles.landmarkCardIcon}>
              <img src="/mall.png" className={styles.businessMan}></img>
              <h2>SHOPPING & ENTERTAINMENT</h2>
            </div>
            <ul>
              <li>Grand High Street</li>
              <li>PVR Cinemas</li>
              <li>Phoenix Mall</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landmark;
