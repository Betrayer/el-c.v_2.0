import React, { useEffect, useState } from "react";
import styles from "./portfolio.module.css";

const Portfolio = () => {
  const [defLangState] = useState(localStorage.getItem("lang"));
  useEffect(() => {}, [defLangState]);
  return (
    <section id="portfolio" className={styles.portfolioSection}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.portfolioTitle}>
          {defLangState === "rus" ? "Портфолио" : ""}
          {defLangState === "ukr" ? "Портфоліо" : ""}
          {defLangState === "en" ? "Portfolio" : ""}
        </h2>
        <ul className={styles.portfolioList}>
        <li className={styles.portfolioListItem}>
            <div className={styles.portfolioListItemBg}></div>
            <h3 className={styles.aboutListTitle}>Sneakers</h3>
            <p className={styles.aboutListText}>mobile application</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
