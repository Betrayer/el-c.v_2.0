import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { ThemeContext } from "styled-components";
import css from "./footer.module.css";

const Footer = () => {
  const history = useHistory();
  const themeContext = useContext(ThemeContext);
  const [defLangState] = useState(localStorage.getItem("lang"));
  useEffect(() => {}, [defLangState]);
  return (
    <>
      {history.location.pathname === "/gratitude" ? (
        <></>
      ) : (
        <footer className={css.footer}>
          <h2 className={css.footerHeader}>
            <span className={css.footerHeaderSpan}>
              {defLangState === "rus" ? "Свяжитесь с нами" : ""}
              {defLangState === "ukr" ? "Зв'яжіться з нами" : ""}
              {defLangState === "en" ? "Contact us" : ""}
            </span>
          </h2>
          <div className={css.footerWrapper}>
            <div className={css.contactsWrapper}>
              <h3 className={css.subheader}>
                {defLangState === "rus" ? "Контакты" : ""}
                {defLangState === "ukr" ? "Контакти" : ""}
                {defLangState === "en" ? "Contacts" : ""}
              </h3>
              <ul className={css.contactsList}>
              <li className={themeContext.primary === "#fff" ?css.contactsListItem : css.contactsListItemDark}>
                  <a
                    className={css.contactsLink}
                    href="tel:+380680524300"
                    rel="noopener noreferrer"
                  >
                    <span className={css.linkText}>+38 068 052 43 00</span>
                    <svg className={css.underline} viewBox="0 0 13 20">
                      <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                    </svg>
                  </a>
                </li>
                <li className={themeContext.primary === "#fff" ? css.contactsListItem : css.contactsListItemDark}>
                  <a
                    className={css.contactsLink}
                    href="tel:+380663862689"
                    rel="noopener noreferrer"
                  >
                    <span className={css.linkText}>+38 066 386 26 89</span>
                    <svg className={css.underline} viewBox="0 0 13 20">
                      <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                    </svg>
                  </a>
                </li>
                <li className={themeContext.primary === "#fff" ? css.contactsListItem : css.contactsListItemDark}>
                  <a
                    className={css.contactsLink}
                    href="mailto:Ellie.Yelizarieva@el-c.com.ua"
                    rel="noopener noreferrer"
                  >
                    <span className={css.linkText}>
                      Ellie.Yelizarieva@el-c.com.ua
                    </span>
                    <svg className={css.underline} viewBox="0 0 13 20">
                      <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                    </svg>
                  </a>
                </li>
                <li className={themeContext.primary === "#fff" ?css.contactsListItem : css.contactsListItemDark}>
                  <a
                    className={css.contactsLink}
                    href="https://2gis.ua/kiev/geo/15059546909457325?m=30.505205%2C50.512694%2F18.5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={css.linkText}>
                      {defLangState === "rus"
                        ? "ул. Маршала Тимошенка 29Б, литера А"
                        : ""}
                      {defLangState === "ukr"
                        ? "вул. Маршала Тимошенка 29Б, літера А"
                        : ""}
                      {defLangState === "en"
                        ? "Marshal Timoshenko st. 29b, lit. А"
                        : ""}
                    </span>
                    <svg className={css.underline} viewBox="0 0 13 20">
                      <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className={css.socialsWrapper}>
              <h3 className={css.socialsSubheader}>
                {defLangState === "rus" ? "Мы в соцсетях" : ""}
                {defLangState === "ukr" ? "Ми в соцмережах" : ""}
                {defLangState === "en" ? "Social media" : ""}
              </h3>
              <ul className={themeContext.primary === "#fff" ? css.socialsList :css.socialsListDark}>
                <li className={css.socialsListItem}>
                  <a
                    rel="noopener noreferrer"
                    className={css.socialIcon}
                    target="_blank"
                    href="https://www.facebook.com/webelc"
                  >
                    <span className={css.linkContent}>content</span>
                  </a>
                </li>
                <li className={css.socialsListItem}>
                  <a
                    rel="noopener noreferrer"
                    className={css.socialIcon}
                    target="_blank"
                    href="https://www.instagram.com/webstudio_elc/?igshid=1gxjtn1ywqds7"
                  >
                    <span className={css.linkContent}>content</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
