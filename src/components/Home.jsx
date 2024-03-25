import React from "react";
import styles from "./Home.module.css";
const Home = () => {
  const handleNav = () => {
    navIcon.classlist.add(navHidden);
  };
  return (
    <div className={styles.home}>
      <div className={styles.homeTitle}>
        <h1 className={styles.ElysianTitle}>Elysian Haven</h1>
        <h2 className={styles.ElysianDesc}>
          Exclusive Bungalow Plots in Posh Enclave
        </h2>
      </div>
      <div className={styles.villaInfo}>
        <div className={styles.plotsTitle}>
          <h2>PREMIUM</h2>
          <h2 className={styles.villaPlotsTitle}>NA VILLA PLOTS</h2>
        </div>
        <div className={styles.plotsInfo}>
          <div className={styles.unique}>
            <p>200 UNIQUE LAND PARCELS</p>
          </div>
          <div className={styles.unique}>
            <p>1500-3000 SQ.FT</p>
          </div>
          <div className={styles.starts}>
            <p>STARTS ₹ 2CR* ONWARDS </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
