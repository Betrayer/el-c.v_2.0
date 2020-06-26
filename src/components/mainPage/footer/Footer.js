import React from "react";
import css from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <h2 className={css.footerHeader}>I am footer</h2>
      <div className={css.footerWrapper}>
      <div className={css.socialsWrapper}>
        <h3 className={css.socialsSubheader}>Мы в соцсетях</h3>
        <ul className={css.socialsList}>
          <li className={css.socialsListItem}>
            <a href="#">
              <img
                className={css.socialIcon}
                src={require("../../../assets/icons/socials/facebook.svg")}
                alt={"socials_icon"}
                width={20}
                height={20}
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                className={css.socialIcon}
                src={require("../../../assets/icons/socials/instagram.svg")}
                alt={"socials_icon"}
                width={20}
                height={20}
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                className={css.socialIcon}
                src={require("../../../assets/icons/socials/twitter.svg")}
                alt={"socials_icon"}
                width={20}
                height={20}
              />
            </a>
          </li>
        </ul>
      </div>
      <div className={css.contactsWrapper}>
        <h3 className={css.subheader}>Контакты</h3>
        <ul className={css.contactsList}>
          <li className={css.contactsListItem}>
            <a href="#">88005553535</a>
          </li>
          <li className={css.contactsListItem}>
            <a href="#">88005553535</a>
          </li>
          <li className={css.contactsListItem}>
            <a href="#">NashEmail@email.com</a>
          </li>
          <li className={css.contactsListItem}>
            <a href="#">ул. Нойс, дом 420, офис 69</a>
          </li>
        </ul>
      </div>
      </div>
      
    </footer>
  );
};

export default Footer;
