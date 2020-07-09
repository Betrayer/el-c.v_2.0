import React, { useState, useEffect } from "react";
import styles from "./weworksection.module.css";

const WeWorkSection = () => {
  const [defLangState] = useState(localStorage.getItem("lang"));
  useEffect(() => {}, [defLangState]);

  return (
    <section id="weWork" className={styles.weWorkContainer}>
      <h2 className={styles.weWorkTitle}>
        {defLangState === "rus" ? "Как мы работаем?" : ""}
        {defLangState === "ukr" ? "Як ми працюємо?" : ""}
        {defLangState === "en" ? "How do we work?" : ""}
      </h2>
      <ul className={styles.weWorkList}>
        <li className={styles.weWorkItem}>
          <div className={styles.iconWrapper}>
            <i className={styles.icon}></i>
            <i className={styles.iconLine}></i>
            <i className={styles.iconSecondLine}></i>
            <i className={styles.iconTalk}></i>
          </div>
          <h3 className={styles.weWorkItemTitle}>
            {defLangState === "rus" ? "Слушаем ваши пожелания и видение" : ""}
            {defLangState === "ukr" ? "Слухаємо ваші побажання та бачення" : ""}
            {defLangState === "en"
              ? "Listening to your wishes and visions"
              : ""}
          </h3>
        </li>
        <li className={styles.weWorkItem}>
          <div className={styles.iconWrapper}>
            <i className={styles.icon}></i>
            <i className={styles.iconLines}></i>
            <i className={styles.iconGraph}></i>
          </div>
          <h3 className={styles.weWorkItemTitle}>
            {defLangState === "rus" ? "Проводим исследования рынка" : ""}
            {defLangState === "ukr" ? "Проводимо дослідження ринку" : ""}
            {defLangState === "en" ? "Conducting market research" : ""}
          </h3>
        </li>
        <li className={styles.weWorkItem}>
          <div className={styles.iconWrapper}>
            <i className={styles.icon}></i>
            <i className={styles.brush}></i>
          </div>
          <h3 className={styles.weWorkItemTitle}>
            {defLangState === "rus" ? "Создаем уникальный дизайн" : ""}
            {defLangState === "ukr" ? "Створюємо унікальний дизайн" : ""}
            {defLangState === "en" ? "Creating a unique design" : ""}
          </h3>
        </li>
        <li className={styles.weWorkItem}>
          <div className={styles.iconWrapper}>
            <i className={styles.icon}></i>
            <i className={styles.mobile}></i>
            <i className={styles.tablet}></i>
          </div>
          <h3 className={styles.weWorkItemTitle}>
            {defLangState === "rus" ? "Адаптируем сайт под различные устройства" : ""}
            {defLangState === "ukr" ? "Адаптуємо сайт під різні пристрої" : ""}
            {defLangState === "en" ? "Adapting the site to different devices" : ""}
          </h3>
        </li>
        <li className={styles.weWorkItem}>
          <div className={styles.iconWrapper}>
            <i className={styles.icon}></i>
            <i className={styles.pencil}></i>
          </div>
          <h3 className={styles.weWorkItemTitle}>
            {defLangState === "rus" ? "Тестируем и анализируем проделанную работу" : ""}
            {defLangState === "ukr" ? "Тестуємо та аналізуємо виконану роботу" : ""}
            {defLangState === "en" ? "Testing and analyzing completed work" : ""}
          </h3>
        </li>
      </ul>
    </section>
  );
};

export default WeWorkSection;
