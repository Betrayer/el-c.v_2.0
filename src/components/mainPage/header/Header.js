import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ExtendedMenu from "../extendedMenu/ExtendedMenu";
import styles from "./header.module.css";

const Header = () => {
  const defLangState = "rus";
  const menuLinksRus = [
    // { name: "Портфолио", redirect: "/portfolio" },
    { name: "Услуги", redirect: "services" },
    { name: "О нас", redirect: "about" },
    { name: "Блог", redirect: "blog" },
  ];
  const menuLinksUkr = [
    // { name: "Портфоліо", redirect: "/portfolio" },
    { name: "Послуги", redirect: "services" },
    { name: "Про нас", redirect: "about" },
    { name: "Блог", redirect: "blog" },
  ];
  const menuLinksEng = [
    // { name: "Portfolio", redirect: "/portfolio" },
    { name: "Services", redirect: "services" },
    { name: "About us", redirect: "about" },
    { name: "Blog", redirect: "blog" },
  ];
  const [active, setActive] = useState(false);
  const [header, setHeader] = useState(true);
  const [scroll, setScroll] = useState(false);
  let lastScroll;

  useEffect(() => {
    lastScroll = 0;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll === 0) {
        // body.classList.remove(scrollUp);
        setHeader(true);
        setScroll(false);
        lastScroll = 0;
        return;
      }
      if (active) {
        setHeader(true);
        return;
      }

      if (currentScroll > lastScroll) {
        setHeader(false);
        setScroll(true);
      } else if (currentScroll < lastScroll) {
        // up
        setHeader(true);
      }
      lastScroll = currentScroll;
    });
  }, [header, scroll]);

  const scroller = (name) => {
    document.getElementById(name).scrollIntoView();
  };

  const history = useHistory();

  const refresh = () => {
    history.go();
  };

  const refresher = () => {
    if (history.location.pathname === "/") {
      refresh();
    } else {
      history.push("/");
    }
  };

  return (
    <>
      {!scroll ? (
        <header className={styles.scrollUp}>
          <div className={styles.triggerMenuWrapper}>
            <p className={styles.logo} onClick={refresher}>
              EL-C
            </p>
            <button
              onClick={() => setActive(!active)}
              className={active ? styles.menuActive : styles.menu}
            >
              <svg className={styles.menuSvg} viewBox="0 0 64 48">
                <path d="M19,15 L45,15 C70,15 58,-2 49.0177126,7 L19,37"></path>
                <path d="M19,24 L45,24 C61.2371586,24 57,49 41,33 L32,24"></path>
                <path d="M45,33 L19,33 C-8,33 6,-2 22,14 L45,37"></path>
              </svg>
            </button>
            <nav className={styles.nav}>
              {defLangState === "rus" ? (
                <ul className={styles.menuNavList}>
                  {menuLinksRus.map((link, ind) => (
                    <li key={ind} className={styles.menuSocialsLinkActive}>
                      <span
                        onClick={() => scroller(link.redirect)}
                        className={styles.menuPageLinkText}
                      >
                        {link.name}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <></>
              )}
              {defLangState === "ukr" ? (
                <ul className={styles.menuNavList}>
                  {menuLinksUkr.map((link, ind) => (
                    <li key={ind} className={styles.menuSocialsLinkActive}>
                      <span
                        onClick={() => scroller(link.redirect)}
                        className={styles.menuPageLinkText}
                      >
                        {link.name}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <></>
              )}
              {defLangState === "en" ? (
                <ul className={styles.menuNavList}>
                  {menuLinksEng.map((link, ind) => (
                    <li key={ind} className={styles.menuSocialsLinkActive}>
                      <span
                        onClick={() => scroller(link.redirect)}
                        className={styles.menuPageLinkText}
                      >
                        {link.name}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <></>
              )}
            </nav>
            <ul className={styles.menuSocialsList}>
              <li className={styles.menuSocialsLink}>
                <a
                  className={styles.menuSocialsCircle}
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://twitter.com/AnteBadzim"
                >
                  <span></span>
                </a>
              </li>
              <li className={styles.menuSocialsLink}>
                <a
                  rel="noopener noreferrer"
                  className={styles.menuSocialsCircle}
                  target="_blank"
                  href="https://www.facebook.com/favouriteprimark/"
                >
                  <span></span>
                </a>
              </li>
              <li className={styles.menuSocialsLink}>
                <a
                  rel="noopener noreferrer"
                  className={styles.menuSocialsCircle}
                  target="_blank"
                  href="http://instagram.com/ante"
                >
                  <span></span>
                </a>
              </li>
            </ul>
          </div>
          <ExtendedMenu activeMenu={active} />
        </header>
      ) : (
        <header className={header ? styles.scrollUp : styles.scrollDown}>
          <div className={styles.triggerMenuWrapper}>
            <p className={styles.logo} onClick={refresher}>EL-C</p>
            <button
              onClick={() => setActive(!active)}
              className={active ? styles.menuActive : styles.menu}
            >
              <svg className={styles.menuSvg} viewBox="0 0 64 48">
                <path d="M19,15 L45,15 C70,15 58,-2 49.0177126,7 L19,37"></path>
                <path d="M19,24 L45,24 C61.2371586,24 57,49 41,33 L32,24"></path>
                <path d="M45,33 L19,33 C-8,33 6,-2 22,14 L45,37"></path>
              </svg>
            </button>
            <nav className={styles.nav}>
              {defLangState === "rus" ? (
                <ul className={styles.menuNavList}>
                  {menuLinksRus.map((link, ind) => (
                    <li key={ind} className={styles.menuSocialsLinkActive}>
                      <span
                        onClick={() => scroller(link.redirect)}
                        className={styles.menuPageLinkText}
                      >
                        {link.name}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <></>
              )}
              {defLangState === "ukr" ? (
                <ul className={styles.menuNavList}>
                  {menuLinksUkr.map((link, ind) => (
                    <li
                      to={link.redirect}
                      key={ind}
                      className={styles.menuSocialsLinkActive}
                    >
                      <span
                        onClick={() => scroller(link.redirect)}
                        className={styles.menuPageLinkText}
                      >
                        {link.name}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <></>
              )}
              {defLangState === "en" ? (
                <ul className={styles.menuNavList}>
                  {menuLinksEng.map((link, ind) => (
                    <li
                      to={link.redirect}
                      key={ind}
                      className={styles.menuSocialsLinkActive}
                    >
                      <span
                        onClick={() => scroller(link.redirect)}
                        className={styles.menuPageLinkText}
                      >
                        {link.name}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <></>
              )}
            </nav>
            <ul className={styles.menuSocialsList}>
              <li className={styles.menuSocialsLink}>
                <a
                  className={styles.menuSocialsCircle}
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://twitter.com/AnteBadzim"
                >
                  <span></span>
                </a>
              </li>
              <li className={styles.menuSocialsLink}>
                <a
                  rel="noopener noreferrer"
                  className={styles.menuSocialsCircle}
                  target="_blank"
                  href="https://www.facebook.com/favouriteprimark/"
                >
                  <span></span>
                </a>
              </li>
              <li className={styles.menuSocialsLink}>
                <a
                  rel="noopener noreferrer"
                  className={styles.menuSocialsCircle}
                  target="_blank"
                  href="http://instagram.com/ante"
                >
                  <span></span>
                </a>
              </li>
            </ul>
          </div>
          <ExtendedMenu activeMenu={active} />
        </header>
      )}
    </>
  );
};

export default Header;
