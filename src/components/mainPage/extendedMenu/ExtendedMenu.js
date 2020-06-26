import React from "react";
import styles from "./extendedMenu.module.css";
import { NavLink } from "react-router-dom";

const ExtendedMenu = ({ activeMenu }) => {
    const defLangState = "rus"
  const menuLinksRus = [
    // { name: "Портфолио", redirect: "/portfolio" },
    { name: "Услуги", redirect: "/services" },
    { name: "О нас", redirect: "/about" },
    { name: "Блог", redirect: "/blog" },
  ];
  const menuLinksUkr = [
    // { name: "Портфоліо", redirect: "/portfolio" },
    { name: "Послуги", redirect: "/services" },
    { name: "Про нас", redirect: "/about" },
    { name: "Блог", redirect: "/blog" },
  ];
  const menuLinksEng = [
    // { name: "Portfolio", redirect: "/portfolio" },
    { name: "Services", redirect: "/services" },
    { name: "About us", redirect: "/about" },
    { name: "Blog", redirect: "/blog" },
  ];
  return (
    <div className={styles.innerContainer}>
      {/* <div className={styles.circle}></div> */}
      <div className={activeMenu ? styles.circleExpand : styles.circle}></div>
      {/* <ul className={activeMenu ? styles.menuNavActive : styles.menuNav}> */}
      <div className={activeMenu ? styles.linksWrapperActive : styles.linksWrapper}>
      {defLangState === "rus" ? (
        <ul className={activeMenu ? styles.menuNavActive : styles.menuNav}>
          {menuLinksRus.map((link, ind) => (
            <NavLink
              to={link.redirect}
              key={ind}
              style={{
                animationDelay: `${ind * 0.1 + 0.4}s`,
              }}
              className={
                activeMenu ? styles.menuSocialsLinkActive : styles.menuPageLink
              }
            >
              <span className={styles.menuPageLinkText}>{link.name}</span>
            </NavLink>
          ))}
        </ul>
      ) : (
        <></>
      )}
      {defLangState === "ukr" ? (
        <ul className={activeMenu ? styles.menuNavActive : styles.menuNav}>
          {menuLinksUkr.map((link, ind) => (
            <NavLink
              to={link.redirect}
              key={ind}
              style={{
                animationDelay: `${ind * 0.1 + 0.4}s`,
              }}
              className={
                activeMenu ? styles.menuSocialsLinkActive : styles.menuPageLink
              }
            >
              <span className={styles.menuPageLinkText}>{link.name}</span>
            </NavLink>
          ))}
        </ul>
      ) : (
        <></>
      )}
      {defLangState === "en" ? (
        <ul className={activeMenu ? styles.menuNavActive : styles.menuNav}>
          {menuLinksEng.map((link, ind) => (
            <NavLink
              to={link.redirect}
              key={ind}
              style={{
                animationDelay: `${ind * 0.1 + 0.4}s`,
              }}
              className={
                activeMenu ? styles.menuSocialsLinkActive : styles.menuPageLink
              }
            >
              <span className={styles.menuPageLinkText}>{link.name}</span>
            </NavLink>
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
          </div>
    </div>
  );
};

export default ExtendedMenu;
