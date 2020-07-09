import React, {useState, useEffect} from "react";
import styles from "./extendedMenu.module.css";
import { useHistory } from "react-router-dom";


const ExtendedMenu = ({ activeMenu }) => {
  const history = useHistory();
  const [langSwitcher, setLangSwitcher] = useState(false);
  const [defLangState, setDefLangState] = useState(
    localStorage.getItem("lang")
  );
  useEffect(() => {
    defLang();
  }, []);
  const langSwitch = () => {
    setLangSwitcher(!langSwitcher);
  };
  const menuLinksRus = [
    // { name: "Портфолио", redirect: "/portfolio" },
    { name: "Услуги", redirect: "services" },
    { name: "О нас", redirect: "weWork" },
    { name: "Почему мы", redirect: "why" },
    { name: "Блог", redirect: "blog" },
  ];
  const menuLinksUkr = [
    // { name: "Портфоліо", redirect: "/portfolio" },
    { name: "Послуги", redirect: "services" },
    { name: "Про нас", redirect: "weWork" },
    { name: "Чому ми", redirect: "why" },
    { name: "Блог", redirect: "blog" },
  ];
  const menuLinksEng = [
    // { name: "Portfolio", redirect: "/portfolio" },
    { name: "Services", redirect: "services" },
    { name: "About us", redirect: "weWork" },
    { name: "Why us", redirect: "why" },
    { name: "Blog", redirect: "blog" },
  ];
  const scroller = (name) => {
    document.getElementById(name).scrollIntoView();
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
      <div className={activeMenu ? styles.linksWrapperActive : styles.linksWrapper}>
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
                activeMenu ? styles.menuSocialsLinkActive : styles.menuPageLink
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
                activeMenu ? styles.menuSocialsLinkActive : styles.menuPageLink
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
                activeMenu ? styles.menuSocialsLinkActive : styles.menuPageLink
              }
            >
              <span className={styles.menuPageLinkText}>{link.name}</span>
            </li>
          ))}
        </ul>
      ) : (
        <></>
      )}
      <div className={activeMenu ? styles.menuSocialsActive : styles.menuSocials}>
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
                    href="https://twitter.com/AnteBadzim"
                  >

                  </a>
                </li>
                <li className={styles.menuSocialsLink}>
                  <a
                    rel="noopener noreferrer"
                    className={styles.menuSocialsCircle}
                    target="_blank"
                    href="https://www.facebook.com/favouriteprimark/"
                  >

                  </a>
                </li>
                <li className={styles.menuSocialsLink}>
                  <a
                    rel="noopener noreferrer"
                    className={styles.menuSocialsCircle}
                    target="_blank"
                    href="http://instagram.com/ante"
                  >
                    
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.langWrapper}>
                {defLangState === "ukr" ? (
                  <p className={styles.lang} onClick={langSwitch}>
                    UKR
                  </p>
                ) : (
                  <></>
                )}
                {defLangState === "rus" ? (
                  <p className={styles.lang} onClick={langSwitch}>
                    RU
                  </p>
                ) : (
                  <></>
                )}
                {defLangState === "en" ? (
                  <p className={styles.lang} onClick={langSwitch}>
                    EN
                  </p>
                ) : (
                  <></>
                )}
                {langSwitcher ? (
                  <div className={styles.langs}>
                    <span
                      className={styles.langSpan}
                      id="ukr"
                      onClick={(e) => changeLang(e)}
                    >
                      UKR
                    </span>
                    <span
                      className={styles.langSpan}
                      id="rus"
                      onClick={(e) => changeLang(e)}
                    >
                      RU
                    </span>
                    <span
                      className={styles.langSpan}
                      id="en"
                      onClick={(e) => changeLang(e)}
                    >
                      EN
                    </span>
                  </div>
                ) : (
                  <></>
                )}
              </div>
          </div>
    </div>
  );
};

export default ExtendedMenu;
