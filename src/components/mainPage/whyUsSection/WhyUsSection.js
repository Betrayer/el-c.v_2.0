import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import styles from "./whyussection.module.css";

const WhyUsSection = () => {
  const [height, setHeight] = useState(400);
  useEffect(() => {
    const intFrameWidth = window.innerWidth;
    console.log("intFrameWidth", intFrameWidth);
    if (intFrameWidth < 768) {
      setHeight(300);
    } else if (intFrameWidth >= 768 ) {
      setHeight(600);
    
    }
  }, []);
  return (
    <section id="about" className={styles.whyUsContainer}>

      <Parallax
        blur={{ min: -10, max: 15 }}
        bgImage={require("../../../assets/photos/middle3.jpeg")}
        bgImageAlt="mountains"
        strength={140}
        style={{
          height: height === 300 ? `${height + 250}px` : `${height + 150}px`,
        }}
        bgStyle={{ backgroundPosition: "bottom" }}
      >
        <Parallax
        blur={{ min: -10, max: 20 }}
          bgImage={require("../../../assets/photos/close.PNG")}
          bgImageAlt="human"
          strength={180}
          bgClassName={styles.human}
          bgStyle={{ backgroundPosition: "bottom" }}
          bgImageStyle={{
            height: height === 300 ? "376px" : "500px",
            width: "auto",
          }}
          style={{
            height: height === 300 ? `${height + 400}px` : `${height}px`,
            position: "absolute",
            width: "100%",
            bottom: height === 300 ? "-556px" : "-296px",
          }}
        >
          <div className={styles.bannerClouds} />
        </Parallax>
        <div className={styles.bannerMiddle} />
      </Parallax>

      {/* <h2 className={styles.whyUsTitle}>Why work with us</h2>
      <ul className={styles.whyUsList}>
        <li className={styles.whyUsItem}>
          <h3 className={styles.whyUsItemTitle}>Lorem ipsum dolor</h3>
          <p className={styles.whyUsItemText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </li>
        <li className={styles.whyUsItem}>
          <h3 className={styles.whyUsItemTitle}>Lorem ipsum dolor</h3>
          <p className={styles.whyUsItemText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </li>
        <li className={styles.whyUsItem}>
          <h3 className={styles.whyUsItemTitle}>Lorem ipsum dolor</h3>
          <p className={styles.whyUsItemText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </li>
        <li className={styles.whyUsItem}>
          <h3 className={styles.whyUsItemTitle}>Lorem ipsum dolor</h3>
          <p className={styles.whyUsItemText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </li>
        <li className={styles.whyUsItem}>
          <h3 className={styles.whyUsItemTitle}>Lorem ipsum dolor</h3>
          <p className={styles.whyUsItemText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </li>
        <li className={styles.whyUsItem}>
          <h3 className={styles.whyUsItemTitle}>Lorem ipsum dolor</h3>
          <p className={styles.whyUsItemText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </li>
      </ul> */}
    </section>
  );
};

export default WhyUsSection;
