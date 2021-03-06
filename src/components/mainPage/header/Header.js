import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "styled-components";
import { useHistory } from "react-router-dom";
import ExtendedMenu from "../extendedMenu/ExtendedMenu";
import styles from "./header.module.css";

const Header = ({ toggleTheme }) => {
  const themeContext = useContext(ThemeContext);
  const [langSwitcher, setLangSwitcher] = useState(false);
  const [active, setActive] = useState(false);
  const [header, setHeader] = useState(true);
  const [scroll, setScroll] = useState(false);
  const [defLangState, setDefLangState] = useState(
    localStorage.getItem("lang")
  );
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
  let lastScroll;

  const isPathAvailable = (hash) => {
    if (
      hash === "#%D0%A3%D1%81%D0%BB%D1%83%D0%B3%D0%B8" ||
      hash === "#%D0%9F%D0%BE%D1%81%D0%BB%D1%83%D0%B3%D0%B8" ||
      hash === "#Services"
    ) {
      document
        .getElementById("services")
        .scrollIntoView({ behavior: "smooth" });
    } else if (
      hash === "#%D0%9F%D0%BE%D1%80%D1%82%D1%84%D0%BE%D0%BB%D0%B8%D0%BE" ||
      hash === "#%D0%9F%D0%BE%D1%80%D1%82%D1%84%D0%BE%D0%BB%D1%96%D0%BE" ||
      hash === "#Portfolio"
    ) {
      document
        .getElementById("portfolio")
        .scrollIntoView({ behavior: "smooth" });
    } else if (
      hash === "#%D0%9F%D1%80%D0%BE%20%D0%BD%D0%B0%D1%81" ||
      hash === "#%D0%9E%20%D0%BD%D0%B0%D1%81" ||
      hash === "#About%20us"
    ) {
      document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    } else if (
      hash === "#%D0%A7%D0%BE%D0%BC%D1%83%20%D0%BC%D0%B8" ||
      hash === "#%D0%9F%D0%BE%D1%87%D0%B5%D0%BC%D1%83%20%D0%BC%D1%8B" ||
      hash === "#Why%20us"
    ) {
      document.getElementById("why").scrollIntoView({ behavior: "smooth" });
    } else if (hash === "#%D0%91%D0%BB%D0%BE%D0%B3" || hash === "#Blog") {
      document.getElementById("blog").scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    lastScroll = 0;
    setTimeout(() => {
      if (window.location.hash) {
        isPathAvailable(window.location.hash);
      }
    }, 1000);
    defLang();
  }, []);

  const langSwitch = () => {
    setLangSwitcher(!langSwitcher);
  };

  useEffect(() => {
    if (window.innerWidth >= 768) {
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
    }
  }, [header, scroll]);

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
  const scroller = (name) => {
    document.getElementById(name).scrollIntoView({ behavior: "smooth" });
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
            <p
              className={
                themeContext.primary === "#fff" ? styles.logo : styles.logoDark
              }
              onClick={refresher}
            >
              EL-C
            </p>
            <div className={styles.mobMenu}>
              {window.innerWidth < 1200 ? 
              <div className={styles.themeToggle}>
                <input
                  className={styles.darkLight}
                  type="checkbox"
                  id="dark-light"
                  name="dark-light"
                  onChange={() => toggleTheme()}
                />
                <label htmlFor="dark-light"></label>
              </div>:<></>}
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
            </div>
            <nav className={styles.nav}>
              {defLangState === "rus" ? (
                <ul
                  className={
                    themeContext.primary === "#fff"
                      ? styles.menuNavList
                      : styles.menuNavListDark
                  }
                >
                  {menuLinksRus.map((link, ind) => (
                    <li key={ind} className={styles.menuSocialsLinkActive}>
                      <a
                        href={"#" + link.name}
                        onClick={() => scroller(link.redirect)}
                        className={styles.menuPageLinkText}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <></>
              )}
              {defLangState === "ukr" ? (
                <ul
                  className={
                    themeContext.primary === "#fff"
                      ? styles.menuNavList
                      : styles.menuNavListDark
                  }
                >
                  {menuLinksUkr.map((link, ind) => (
                    <li key={ind} className={styles.menuSocialsLinkActive}>
                      <a
                        href={"#" + link.name}
                        onClick={() => scroller(link.redirect)}
                        className={styles.menuPageLinkText}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <></>
              )}
              {defLangState === "en" ? (
                <ul
                  className={
                    themeContext.primary === "#fff"
                      ? styles.menuNavList
                      : styles.menuNavListDark
                  }
                >
                  {menuLinksEng.map((link, ind) => (
                    <li key={ind} className={styles.menuSocialsLinkActive}>
                      <a
                        href={"#" + link.name}
                        onClick={() => scroller(link.redirect)}
                        className={styles.menuPageLinkText}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <></>
              )}
            </nav>
            <div className={styles.rightWrapper}>
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
              <ul
                className={
                  themeContext.primary === "#fff"
                    ? styles.menuSocialsList
                    : styles.menuSocialsListDark
                }
              >
                <li className={styles.menuSocialsLink}>
                  <a
                    rel="noopener noreferrer"
                    className={styles.menuSocialsCircle}
                    target="_blank"
                    href="https://www.facebook.com/webelc"
                  >
                    <span></span>
                  </a>
                </li>
                <li className={styles.menuSocialsLink}>
                  <a
                    rel="noopener noreferrer"
                    className={styles.menuSocialsCircle}
                    target="_blank"
                    href="https://www.instagram.com/webstudio_elc/?igshid=1gxjtn1ywqds7"
                  >
                    <span></span>
                  </a>
                </li>
                <li className={styles.menuSocialsLink}>
                  <a
                    className={styles.menuSocialsCircle}
                    href="tel:+380678095578"
                    rel="noopener noreferrer"
                  >
                    <span></span>
                  </a>
                </li>
                <li className={styles.themeToggle}>
                  <input
                    className={styles.darkLight}
                    type="checkbox"
                    id="dark-light"
                    name="dark-light"
                    onChange={() => toggleTheme()}
                  />
                  <label htmlFor="dark-light"></label>
                </li>
              </ul>
            </div>
          </div>
          <ExtendedMenu
            activeMenu={active}
            setActive={setActive}
            toggleTheme={toggleTheme}
          />
        </header>
      ) : (
        <header className={header ? styles.scrollUp : styles.scrollDown}>
          <div className={styles.triggerMenuWrapper}>
            <p
              className={
                themeContext.primary === "#fff" ? styles.logo : styles.logoDark
              }
              onClick={refresher}
            >
              EL-C
            </p>
            <div className={styles.mobMenu}>
            {window.innerWidth < 1200 ? 
              <div className={styles.themeToggle}>
                <input
                  className={styles.darkLight}
                  type="checkbox"
                  id="dark-light"
                  name="dark-light"
                  onChange={() => toggleTheme()}
                />
                <label htmlFor="dark-light"></label>
              </div>:<></>}
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
            </div>
            <nav className={styles.nav}>
              {defLangState === "rus" ? (
                <ul
                  className={
                    themeContext.primary === "#fff"
                      ? styles.menuNavList
                      : styles.menuNavListDark
                  }
                >
                  {menuLinksRus.map((link, ind) => (
                    <li key={ind} className={styles.menuSocialsLinkActive}>
                      <a
                        href={"#" + link.name}
                        onClick={() => scroller(link.redirect)}
                        className={styles.menuPageLinkText}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <></>
              )}
              {defLangState === "ukr" ? (
                <ul
                  className={
                    themeContext.primary === "#fff"
                      ? styles.menuNavList
                      : styles.menuNavListDark
                  }
                >
                  {menuLinksUkr.map((link, ind) => (
                    <li
                      to={link.redirect}
                      key={ind}
                      className={styles.menuSocialsLinkActive}
                    >
                      <a
                        href={"#" + link.name}
                        onClick={() => scroller(link.redirect)}
                        className={styles.menuPageLinkText}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <></>
              )}
              {defLangState === "en" ? (
                <ul
                  className={
                    themeContext.primary === "#fff"
                      ? styles.menuNavList
                      : styles.menuNavListDark
                  }
                >
                  {menuLinksEng.map((link, ind) => (
                    <li
                      to={link.redirect}
                      key={ind}
                      className={styles.menuSocialsLinkActive}
                    >
                      <a
                        href={"#" + link.name}
                        onClick={() => scroller(link.redirect)}
                        className={styles.menuPageLinkText}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <></>
              )}
            </nav>
            <div className={styles.rightWrapper}>
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
              <ul
                className={
                  themeContext.primary === "#fff"
                    ? styles.menuSocialsList
                    : styles.menuSocialsListDark
                }
              >
                {/* <li className={styles.menuSocialsLink}>
                  <a
                    className={styles.menuSocialsCircle}
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://twitter.com/AnteBadzim"
                  >
                    <span></span>
                  </a>
                </li> */}
                <li className={styles.menuSocialsLink}>
                  <a
                    rel="noopener noreferrer"
                    className={styles.menuSocialsCircle}
                    target="_blank"
                    href="https://www.facebook.com/webelc"
                  >
                    <span></span>
                  </a>
                </li>
                <li className={styles.menuSocialsLink}>
                  <a
                    rel="noopener noreferrer"
                    className={styles.menuSocialsCircle}
                    target="_blank"
                    href="https://www.instagram.com/webstudio_elc/?igshid=1gxjtn1ywqds7"
                  >
                    <span></span>
                  </a>
                </li>
                <li className={styles.menuSocialsLink}>
                  <a
                    className={styles.menuSocialsCircle}
                    href="tel:+380678095578"
                    rel="noopener noreferrer"
                  >
                    <span></span>
                  </a>
                </li>
                <li className={styles.themeToggle}>
                  <input
                    className={styles.darkLight}
                    type="checkbox"
                    id="dark-light"
                    name="dark-light"
                    onChange={() => toggleTheme()}
                  />
                  <label htmlFor="dark-light"></label>
                </li>
              </ul>
            </div>
          </div>
          <ExtendedMenu
            activeMenu={active}
            setActive={setActive}
            toggleTheme={toggleTheme}
          />
        </header>
      )}
    </>
  );
};

export default Header;
