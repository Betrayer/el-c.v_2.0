import React, { useState, useEffect } from "react";
import styles from "./extendedMenu.module.css";
import { useHistory } from "react-router-dom";

const ExtendedMenu = ({ activeMenu, setActive }) => {
  const history = useHistory();
  const [langSwitcher, setLangSwitcher] = useState(false);
  const [defLangState, setDefLangState] = useState(
    localStorage.getItem("lang")
  );
  useEffect(() => {
    defLang();
  }, []);
  const menuLinksRus = [
    { name: "Услуги", redirect: "services" },
    { name: "Портфолио", redirect: "portfolio" },
    { name: "О нас", redirect: "about" },
    { name: "Почему мы", redirect: "why" },
    { name: "Блог", redirect: "blog" },
  ];
  const menuLinksUkr = [
    { name: "Послуги", redirect: "services" },
    { name: "Портфоліо", redirect: "portfolio" },
    { name: "Про нас", redirect: "about" },
    { name: "Чому ми", redirect: "why" },
    { name: "Блог", redirect: "blog" },
  ];
  const menuLinksEng = [
    { name: "Services", redirect: "services" },
    { name: "Portfolio", redirect: "portfolio" },
    { name: "About us", redirect: "about" },
    { name: "Why us", redirect: "why" },
    { name: "Blog", redirect: "blog" },
  ];
  const scroller = (name) => {
    document.getElementById(name).scrollIntoView();
    // setActive(false)
  };
  const refresh = () => {
    history.go();
  };
  const defLang = () => {
    let lang = localStorage.getItem("lang");
    if (!lang) {
      localStorage.setItem("lang", "ukr");
      setDefLangState("ukr");
      refresh();
    }
  };
  const changeLang = (e) => {
    if (e.target.id === "rus") {
      setDefLangState("rus");
      localStorage.setItem("lang", "rus");
      refresh();
    } else if (e.target.id === "en") {
      setDefLangState("en");
      localStorage.setItem("lang", "en");
      refresh();
    } else {
      setDefLangState("ukr");
      localStorage.setItem("lang", "ukr");
      refresh();
    }
    setLangSwitcher(!langSwitcher);
  };

  return (
    <div className={styles.innerContainer}>
      <div className={activeMenu ? styles.circleExpand : styles.circle}></div>
      <div
        className={activeMenu ? styles.linksWrapperActive : styles.linksWrapper}
      >
        {defLangState === "rus" ? (
          <ul className={activeMenu ? styles.menuNavActive : styles.menuNav}>
            {menuLinksRus.map((link, ind) => (
              <li
                onClick={() => scroller(link.redirect)}
                key={ind}
                style={{
                  animationDelay: `${ind * 0.1 + 0.4}s`,
                }}
                className={
                  activeMenu
                    ? styles.menuSocialsLinkActive
                    : styles.menuPageLink
                }
              >
                <span className={styles.menuPageLinkText}>{link.name}</span>
              </li>
            ))}
          </ul>
        ) : (
          <></>
        )}
        {defLangState === "ukr" ? (
          <ul className={activeMenu ? styles.menuNavActive : styles.menuNav}>
            {menuLinksUkr.map((link, ind) => (
              <li
                onClick={() => scroller(link.redirect)}
                key={ind}
                style={{
                  animationDelay: `${ind * 0.1 + 0.4}s`,
                }}
                className={
                  activeMenu
                    ? styles.menuSocialsLinkActive
                    : styles.menuPageLink
                }
              >
                <span className={styles.menuPageLinkText}>{link.name}</span>
              </li>
            ))}
          </ul>
        ) : (
          <></>
        )}
        {defLangState === "en" ? (
          <ul className={activeMenu ? styles.menuNavActive : styles.menuNav}>
            {menuLinksEng.map((link, ind) => (
              <li
                onClick={() => scroller(link.redirect)}
                key={ind}
                style={{
                  animationDelay: `${ind * 0.1 + 0.4}s`,
                }}
                className={
                  activeMenu
                    ? styles.menuSocialsLinkActive
                    : styles.menuPageLink
                }
              >
                <span className={styles.menuPageLinkText}>{link.name}</span>
              </li>
            ))}
          </ul>
        ) : (
          <></>
        )}
        <div className={styles.langs}>
          <span
            className={defLangState === "ukr" ? styles.langSpanActive : styles.langSpan}
            id="ukr"
            onClick={(e) => changeLang(e)}
          >
            UKR
          </span>
          <span
            className={defLangState === "rus" ? styles.langSpanActive : styles.langSpan}
            id="rus"
            onClick={(e) => changeLang(e)}
          >
            RU
          </span>
          <span
            className={defLangState === "en" ? styles.langSpanActive : styles.langSpan}
            id="en"
            onClick={(e) => changeLang(e)}
          >
            EN
          </span>
        </div>

        <div
          className={activeMenu ? styles.menuSocialsActive : styles.menuSocials}
        >
          <h3 className={styles.menuSocialsTitle}>
            {defLangState === "rus" ? "Мы в соцсетях" : ""}
            {defLangState === "ukr" ? "Ми в соцмережах" : ""}
            {defLangState === "en" ? "Social media" : ""}
          </h3>
          <ul className={styles.menuSocialsList}>
            <li className={styles.menuSocialsLink}>
              <a
                className={styles.menuSocialsCircle}
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com"
              >

              </a>
            </li>
            <li className={styles.menuSocialsLink}>
              <a
                rel="noopener noreferrer"
                className={styles.menuSocialsCircle}
                target="_blank"
                href="https://www.facebook.com"
              >

              </a>
            </li>
            <li className={styles.menuSocialsLink}>
              <a
                rel="noopener noreferrer"
                className={styles.menuSocialsCircle}
                target="_blank"
                href="http://instagram.com"
              >

              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExtendedMenu;
