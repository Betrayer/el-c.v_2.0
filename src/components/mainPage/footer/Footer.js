import React from "react";
import css from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <h2 className={css.footerHeader}>
        <span className={css.footerHeaderSpan}>Зв'яжіться з нами</span>
      </h2>
      <div className={css.footerWrapper}>
        <div className={css.contactsWrapper}>
          <h3 className={css.subheader}>Контакты</h3>
          <ul className={css.contactsList}>
            <li className={css.contactsListItem}>
              <a className={css.contactsLink} href="#a">
                +38 067 809 55 78
              </a>
            </li>
            <li className={css.contactsListItem}>
              <a className={css.contactsLink} href="#a">
                +38 066 386 26 89
              </a>
            </li>
            <li className={css.contactsListItem}>
              <a className={css.contactsLink} href="#a">
                Ellie.Yelizarieva@el-c.com.ua
              </a>
            </li>
            <li className={css.contactsListItem}>
              <a className={css.contactsLink} href="#a">
                ул. Нойс, дом 420, офис 69
              </a>
            </li>
          </ul>
        </div>
        <div className={css.socialsWrapper}>
          <h3 className={css.socialsSubheader}>Мы в соцсетях</h3>
          <ul className={css.socialsList}>
            <li className={css.socialsListItem}>
              <a
                className={css.socialIcon}
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/AnteBadzim"
              >
                
              </a>
            </li>
            <li className={css.socialsListItem}>
              <a
                rel="noopener noreferrer"
                className={css.socialIcon}
                target="_blank"
                href="https://www.facebook.com/favouriteprimark/"
              >

              </a>
            </li>
            <li className={css.socialsListItem}>
              <a
                rel="noopener noreferrer"
                className={css.socialIcon}
                target="_blank"
                href="http://instagram.com/ante"
              >

              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
