import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "styled-components";
import styles from "./weworksection.module.css";

const WeWorkSection = () => {
  const [defLangState] = useState(localStorage.getItem("lang"));
  useEffect(() => {}, [defLangState]);
  const themeContext = useContext(ThemeContext);

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
            <i className={themeContext.primary === "#fff" ? styles.icon : styles.iconDark}></i>
            <i className={themeContext.primary === "#fff" ? styles.iconLine : styles.iconLineDark}></i>
            <i className={themeContext.primary === "#fff" ? styles.iconSecondLine : styles.iconSecondLineDark}></i>
            <i className={themeContext.primary === "#fff" ? styles.iconTalk : styles.iconTalkDark}></i>
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
          <i className={themeContext.primary === "#fff" ? styles.icon : styles.iconDark}></i>
            <i className={themeContext.primary === "#fff" ? styles.iconLines : styles.iconLinesDark}></i>
            <i className={themeContext.primary === "#fff" ? styles.iconGraph : styles.iconGraphDark}></i>
          </div>
          <h3 className={styles.weWorkItemTitle}>
            {defLangState === "rus" ? "Проводим исследования рынка" : ""}
            {defLangState === "ukr" ? "Проводимо дослідження ринку" : ""}
            {defLangState === "en" ? "Conducting market research" : ""}
          </h3>
        </li>
        <li className={styles.weWorkItem}>
          <div className={styles.iconWrapper}>
          <i className={themeContext.primary === "#fff" ? styles.icon : styles.iconDark}></i>
            <i className={themeContext.primary === "#fff" ? styles.brush : styles.brushDark}></i>
          </div>
          <h3 className={styles.weWorkItemTitle}>
            {defLangState === "rus" ? "Создаем уникальный дизайн" : ""}
            {defLangState === "ukr" ? "Створюємо унікальний дизайн" : ""}
            {defLangState === "en" ? "Creating a unique design" : ""}
          </h3>
        </li>
        <li className={styles.weWorkItem}>
          <div className={styles.iconWrapper}>
          <i className={themeContext.primary === "#fff" ? styles.icon : styles.iconDark}></i>
            <i className={themeContext.primary === "#fff" ? styles.mobile : styles.mobileDark}></i>
            <i className={themeContext.primary === "#fff" ? styles.tablet : styles.tabletDark}></i>
          </div>
          <h3 className={styles.weWorkItemTitle}>
            {defLangState === "rus" ? "Адаптируем сайт под различные устройства" : ""}
            {defLangState === "ukr" ? "Адаптуємо сайт під різні пристрої" : ""}
            {defLangState === "en" ? "Adapting the site to different devices" : ""}
          </h3>
        </li>
        <li className={styles.weWorkItem}>
          <div className={styles.iconWrapper}>
          <i className={themeContext.primary === "#fff" ? styles.icon : styles.iconDark}></i>
            <i className={themeContext.primary === "#fff" ? styles.pencil : styles.pencilDark}></i>
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
