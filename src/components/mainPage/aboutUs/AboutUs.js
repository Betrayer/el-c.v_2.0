import React, { useEffect, useState } from "react";
import styles from "./aboutUs.module.css";

const AboutUs = () => {
  const [defLangState] = useState(localStorage.getItem("lang"));
  useEffect(() => {}, [defLangState]);

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.aboutTitle}>
          {defLangState === "rus" ? "О нас" : ""}
          {defLangState === "ukr" ? "Про нас" : ""}
          {defLangState === "en" ? "About us" : ""}
        </h2>
        <ul className={styles.aboutList}>
          <li className={styles.aboutListItem}>
            <div className={styles.lineBlue}></div>
            {/* <div className={styles.lineLightBlue}></div>
            <div className={styles.lineYellow}></div>
            <div className={styles.lineBlueTwo}></div>
            <div className={styles.lineLightBlueTwo}></div>
            <div className={styles.lineYellowTwo}></div> */}
            <h3 className={styles.aboutListTitle}>10 лет</h3>
            <p className={styles.aboutListText}>успешной работы</p>
          </li>
          <li className={styles.aboutListItem}>
            <div className={styles.lineBlue}></div>
            
            <h3 className={styles.aboutListTitle}>99%</h3>
            <p className={styles.aboutListText}>удовлетворённости заказчика</p>
          </li>
          <li className={styles.aboutListItem}>
            <div className={styles.lineBlue}></div>
            <h3 className={styles.aboutListTitle}>100%</h3>
            <p className={styles.aboutListText}>соблюдение сроков</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutUs;
