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
           <div className={styles.portfolioListTextWrapper}>
            <h3 className={styles.aboutListTitle}>Sneakers</h3>
            <p className={styles.aboutListText}>Мобильное приложение</p>
            <button className={styles.portfolioButton}>Посмотреть демо</button>
            </div>
          </li>
          <li className={styles.portfolioListItem}>
            <div className={styles.portfolioListItemBg}></div>
            <h3 className={styles.aboutListTitle}>Landing Page</h3>
            <p className={styles.aboutListText}>Одностраничный сайт-визитка</p>
            <a href='http://1776483.ub393109.web.hosting-test.net/' className={styles.portfolioButton}>Посмотреть демо</a>
          </li>
          <li className={styles.portfolioListItem}>
            <div className={styles.portfolioListItemBg}></div>
            <h3 className={styles.aboutListTitle}>E-Shop</h3>
            <p className={styles.aboutListText}>
              Интернет магазин
            </p>
            <button className={styles.portfolioButton}>Посмотреть демо</button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
