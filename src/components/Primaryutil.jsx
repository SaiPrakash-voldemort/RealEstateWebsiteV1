import React from "react";
import birds from "../assets/Birds.png";
import styles from "./Primaryutil.module.css";

const Primaryutil = () => {
  const utilData = [
    {
      img: "/supply.png",
      txt: "Water Connection",
    },
    {
      img: "/cctv.png",
      txt: "24/7 Security and Surveillance",
    },
    {
      img: "/destination.png",
      txt: "Concrete Roads",
    },
    {
      img: "/water.png",
      txt: "Water Treatment Plant",
    },
    {
      img: "/parked-car.png",
      txt: "Car Parking",
    },
    {
      img: "/tower.png",
      txt: "Electric Supply",
    },
  ];
  return (
    <>
      <img src={birds} className={styles.birdImg}></img>
      <div className={styles.primaryUtil}>
        <h1>Primary Utilities</h1>
        <div className={styles.utilities}>
          {utilData.map((item) => (
            <div className={styles.utilInfo}>
              <div className={styles.utilImg}>
                <img src={item.img}></img>
              </div>
              <h4>{item.txt}</h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Primaryutil;
