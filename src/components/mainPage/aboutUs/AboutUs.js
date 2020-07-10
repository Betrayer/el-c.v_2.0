import React, { useEffect, useState } from "react";
import styles from "./aboutUs.module.css";
import CountUp from "react-countup";
import { CSSTransition } from "react-transition-group";
import slideR from "../../transitions/slideR.module.css";
import slideL from "../../transitions/slideL.module.css";

const AboutUs = ({ inViewPort }) => {
  const [defLangState] = useState(localStorage.getItem("lang"));
  const [arrow, setArrow] = useState(false);
  useEffect(() => {}, [defLangState]);

  const scroller = () => {
    document.getElementById("form").scrollIntoView();
  };

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.aboutTitle}>
          {defLangState === "rus" ? "О нас" : ""}
          {defLangState === "ukr" ? "Про нас" : ""}
          {defLangState === "en" ? "About us" : ""}
        </h2>
        <p className={styles.aboutDescriptionMob}>
                Наши опыт сформировал практики и методы, руководствуясь которыи
                мы работаем с нашими клиентами, обеспечивая решения,
                поддерживаемые передовыми технологиями.
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
                Наши опыт сформировал практики и методы, руководствуясь которыи
                мы работаем с нашими клиентами, обеспечивая решения,
                поддерживаемые передовыми технологиями.
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
                suffix=" лет"
              ></CountUp>
            ) : (
              <></>
            )}
            <p className={styles.aboutListItemText}> на рынке</p>
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
            <p className={styles.aboutListItemText}>Довольных Клиентов</p>
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
            <p className={styles.aboutListItemText}>Соблюдение Сроков</p>
          </li>
        </ul>
        <button
              onMouseOver={() => setArrow(true)}
              onMouseLeave={() => setArrow(false)}
              className={styles.learnMoreWhite}
              onClick={() => scroller()}
            >
              <span className={styles.circleWhite} aria-hidden="true">
                {arrow ? (
                  <span className={styles.arrowWhite}></span>
                ) : (
                  <span className={styles.iconWhite}></span>
                )}
              </span>
              <span className={styles.buttonTextWhite}>
                {defLangState === "rus" ? "Отправить заявку" : ""}
                {defLangState === "ukr" ? "Відправити заявку" : ""}
                {defLangState === "en" ? "Send request" : ""}
              </span>
            </button>
      </div>
    </section>
  );
};

export default AboutUs;
