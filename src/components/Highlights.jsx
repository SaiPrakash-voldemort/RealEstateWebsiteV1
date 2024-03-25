import React from "react";
import styles from "./Highlights.module.css";
import city from "../assets/highlightImg.jpg";
import birds from "../assets/Birds.png";
const Highlights = () => {
  return (
    <>
    <img src={birds} className={styles.birdImg}></img>
    <div className={styles.highLights}>
      
      <div className={styles.highLightsTitle}>
        <h1>Highlights</h1>
        <h2>KNOW YOUR MASTERPIECE</h2>
      </div>
      <div className={styles.highLightsImg}>
        <img src={city}></img>
        <div className={styles.highLightsPara}>
        <ul>
          <li>100 acre township- A hundred acres of enchanting grandeur and
          indulgence.</li>
          <li>
          Elite Enclave of 20-Acre Residential Plots:A coveted
          address for discerning homeowners.
          </li>
           <li>
           Hinjawadi Phase 1-One of the most
          sought after location in India.</li> <li>
          Esteemed Developer:Building a legacy
          of excellence and trust.
          </li>
        </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default Highlights;
