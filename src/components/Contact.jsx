import React from "react";
import styles from "./Contact.module.css";
const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1>Contact</h1>
      <div className={styles.contactInfo}>
        <div className={styles.getInTouch}>
          <h4>GET IN TOUCH</h4>
          <h5>+91 879820056</h5>
          <h5>Contact@Goldenleafdigital.com</h5>
          <p>
            B3-411,Hinjawadi Phase 1 Rd,Blue Ridge Town Punw ,Phase 1, Hinjawadi
            Rajiv Gandh Infotexh Park,Township,Punw
            ,Pimpri-Chinchwad,Maharashtra 411057
          </p>
        </div>
        <div className={styles.contactInput}>
          <h5>NAME*</h5>
          <input type="text"></input>
          <h5>EMAIL*</h5>
          <input type="text"></input>
          <h5>CONTACT NO.*</h5>
          <input type="text"></input>
          <div className={styles.condition}>
            <input type="checkbox"></input>
            <h5>
              I would like to receive latest property updates & promotions
            </h5>
          </div>
          <button>SUBMIT</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
