import React, { useEffect, useState } from "react";
import styles from "./aboutUs.module.css";
import CountUp from "react-countup";
import { CSSTransition } from "react-transition-group";
import slideR from "../../transitions/slideR.module.css";
import slideL from "../../transitions/slideL.module.css";

const AboutUs = ({ inViewPort }) => {
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
        <p className={styles.aboutDescriptionMob}>
          {defLangState === "rus"
            ? "Наш опыт сформировал практики и методы, руководствуясь которыми мы работаем с нашими клиентами, обеспечивая решения, поддерживаемые передовыми технологиями."
            : ""}
          {defLangState === "ukr"
            ? "Наш досвід сформував практики і методи, керуючись якими ми працюємо з нашими клієнтами, забезпечуючи рішення, підтримувані передовими технологіями."
            : ""}
          {defLangState === "en"
            ? "Our experience has shaped practices and methods, guided by which we work with our customers, providing solutions, supported by advanced technology."
            : ""}
        </p>
        <div className={styles.aboutDesctopWrapper}>
          <CSSTransition
            timeout={2000}
            classNames={slideR}
            unmountOnExit
            in={inViewPort}
          >
            <div className={styles.aboutImage}></div>
          </CSSTransition>

          <CSSTransition
            timeout={2000}
            classNames={slideL}
            unmountOnExit
            in={inViewPort}
          >
            <p className={styles.aboutDescription}>
              {defLangState === "rus"
                ? "Наш опыт сформировал практики и методы, руководствуясь которыми мы работаем с нашими клиентами, обеспечивая решения, поддерживаемые передовыми технологиями."
                : ""}
              {defLangState === "ukr"
                ? "Наш досвід сформував практики і методи, керуючись якими ми працюємо з нашими клієнтами, забезпечуючи рішення, підтримувані передовими технологіями."
                : ""}
              {defLangState === "en"
                ? "Our experience has shaped practices and methods, guided by which we work with our customers, providing solutions, supported by advanced technology."
                : ""}
            </p>
          </CSSTransition>
        </div>

        <ul className={styles.aboutList}>
          <li className={styles.aboutListItem}>
            {inViewPort ? (
              <CountUp
                className={styles.aboutCounter}
                start={0}
                end={10}
                duration={4}
                separator=" "
              ></CountUp>
            ) : (
              <></>
            )}
            <p className={styles.aboutListItemText}>
              {" "}
              {defLangState === "rus" ? "ЛЕТ на рынке" : ""}
              {defLangState === "ukr" ? "РОКІВ на ринку" : ""}
              {defLangState === "en" ? "YEARS of work" : ""}
            </p>
          </li>
          <li className={styles.aboutListItem}>
            {inViewPort ? (
              <CountUp
                className={styles.aboutCounter}
                start={0}
                end={99}
                duration={4}
                separator=" "
                suffix=" %"
              ></CountUp>
            ) : (
              <></>
            )}
            <p className={styles.aboutListItemText}>
              {defLangState === "rus" ? "Довольных клиентов" : ""}
              {defLangState === "ukr" ? "Задоволених клієнтів" : ""}
              {defLangState === "en" ? "Satisfied customers" : ""}
            </p>
          </li>
          <li className={styles.aboutListItem}>
            {inViewPort ? (
              <CountUp
                className={styles.aboutCounter}
                start={0}
                end={100}
                duration={4}
                separator=" "
                suffix=" %"
              ></CountUp>
            ) : (
              <></>
            )}
            <p className={styles.aboutListItemText}>
              {" "}
              {defLangState === "rus" ? "Соблюдение сроков" : ""}
              {defLangState === "ukr" ? "Дотримання термінів" : ""}
              {defLangState === "en" ? "Deadlines" : ""}
            </p>
          </li>
        </ul>
        <button className={styles.aboutButton}>
          {" "}
          {defLangState === "rus" ? "Оставить заявку" : ""}
          {defLangState === "ukr" ? "Залишити заявку" : ""}
          {defLangState === "en" ? "Contact Us" : ""}
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
