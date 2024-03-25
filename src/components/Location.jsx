import React from "react";
import styles from "./Location.module.css";
const Location = () => {
  return (
    <div className={styles.location}>
      <div className={styles.locationInfo}>
        <h1>Location</h1>
        <h2>DISCOVER AN INVIABLE ADDRESS</h2>
        <p>
          Strategically situated in the bustling IT hub, with incredible growth
          potential.With its seamless connectivity, thriving social
          infrastructure, amd soaring demand, it's time to secure your piece of
          the real estate pie.Don't miss out!
        </p>
        <hr></hr>
      </div>
      <div className={styles.locationMap}>
        <div className={styles.elevationTxt}>
          <h3>Path to Perfection</h3>
          <ul>
            <li>Pure Elation!</li>
            <li>Prime Foundation!!</li>
            <li>Prized Destination!!!</li>
          </ul>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30255.351240254287!2d73.71585485!3d18.57769445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbae17d86d53%3A0xe710f3b806e46fce!2sBlue%20Ridge%20Circle%20Phase%201%20Maan%20Hinjawadi!5e0!3m2!1sen!2sin!4v1711223495623!5m2!1sen!2sin"
            width="600"
            height="450"
            loading="lazy"
            style={{ width: "400px" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;
