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
              <p className={styles.aboutListText}>
                {defLangState === "rus" ? "Мобильные приложения" : ""}
                {defLangState === "ukr" ? "Мобільні додатки" : ""}
                {defLangState === "en" ? "Mobile applications" : ""}
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://codepen.io/ellie25v/pen/YzwvqNp"
                className={styles.portfolioButton}
              >
                {defLangState === "rus" ? "Посмотреть демо" : ""}
                {defLangState === "ukr" ? "Подивитись демо" : ""}
                {defLangState === "en" ? "View demo" : ""}
              </a>
            </div>
          </li>
          <li className={styles.portfolioListItem}>
            <div className={styles.portfolioListItemContent}>
              <div className={styles.portfolioListItemBg}></div>
              <div className={styles.portfolioListTextWrapper}>
                <h3 className={styles.aboutListTitle}>Web studio</h3>
                <p className={styles.aboutListText}>
                  {defLangState === "rus" ? "Лендинг пейдж" : ""}
                  {defLangState === "ukr" ? "Лендінг пейдж" : ""}
                  {defLangState === "en" ? "Landing page" : ""}
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.nailedsalon.com.ua/"
                  className={styles.portfolioButton}
                >
                  {defLangState === "rus" ? "Посмотреть демо" : ""}
                  {defLangState === "ukr" ? "Подивитись демо" : ""}
                  {defLangState === "en" ? "View demo" : ""}
                </a>
              </div>
            </div>
          </li>
          <li className={styles.portfolioListItem}>
            <div className={styles.portfolioListItemBg}></div>
            <div className={styles.portfolioListTextWrapper}>
              <h3 className={styles.aboutListTitle}>E-Shop</h3>
              <p className={styles.aboutListText}>{defLangState === "rus" ? "Интернет-магазин" : ""}
              {defLangState === "ukr" ? "Інтернет-магазин" : ""}
              {defLangState === "en" ? "Online stores" : ""}</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://1775660.ub393109.web.hosting-test.net/"
                className={styles.portfolioButton}
              >
                {defLangState === "rus" ? "Посмотреть демо" : ""}
                {defLangState === "ukr" ? "Подивитись демо" : ""}
                {defLangState === "en" ? "View demo" : ""}
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
