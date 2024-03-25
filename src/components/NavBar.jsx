import React from "react";
import { useRef } from "react";
import styles from "./NavBar.module.css";
import call from "../assets/receiver.png";
const NavBar = () => {
  const navRef = useRef();

  return (
    <div className={styles.navbarContainer}>
      <div>
        <h3 className={styles.logo}>Logo</h3>
      </div>
      <div>
        <ul className={styles.navElements}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#overview">Overview</a>
          </li>
          <li>
            <a href="#highlights">Highlights</a>
          </li>
          <li>
            <a href="#amenities">Amenities</a>
          </li>
          <li>
            <a href="#location">Location</a>
          </li>
        </ul>
      </div>
      <div className={styles.call}>
        <div>
          <img src={call}></img>
        </div>
        <div className={styles.callInfo}>
          <h4 className={styles.callAnytime}>Call Anytime</h4>
          <h3 className={styles.num}>+91 8884578505</h3>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
