import React from "react";
import styles from "./Amenities.module.css";

const Amenities = () => {
  const amenitiesImages = [
    {
      img: "/ClubHouse.jpg",
      imageName: "Clubhouse",
    },
    {
      img: "/Pool.jpg",
      imageName: "Swimming Pool",
    },
    {
      img: "/Gym.jpg",
      imageName: "Gym",
    },
    {
      img: "/garden.jpg",
      imageName: "Landscape Garden",
    },
    {
      img: "/playArea.jpg",
      imageName: "Children's Play Area",
    },
    {
      img: "/Sundeck.jpg",
      imageName: "Vit D Sundeck Area",
    },
    {
      img: "/paths.jpg",
      imageName: "Walking Paths",
    },
    {
      img: "/plaza.jpg",
      imageName: "Entrance Plaza With Retail Spaces",
    },
  ];
  return (
    <div className={styles.amenities}>
      <div className={styles.amenitiesContent}>
        <h1 className={styles.amenitiesTitle}>Amenities</h1>
        <h2>ELEVATE LIFE WITH WORLD-CLASS AMENITIES</h2>
        <p>
          Immerse yourself in a world of modern indulgence,where every aspect of
          your lifestyle is catered to with contemporary amenities and
          conveniences.
        </p>
        <hr />
      </div>
      <div className={styles.amenitiesContainer}>
      <div className={styles.amenitiesImages}>
        {amenitiesImages.map((item) => (
          <div className={styles.card}>
            <div className={styles.placeImage}>
              <img src={item.img}></img>
            </div>
            <div className={styles.details}>
              <h4>{item.imageName}</h4>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Amenities;
