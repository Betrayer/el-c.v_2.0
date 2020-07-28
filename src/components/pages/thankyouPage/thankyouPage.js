import React, { useEffect, useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import styles from "./thankyouPage.module.css";

const ThankyouPage = () => {
  const history = useHistory();
  const [defLangState] = useState(localStorage.getItem("lang"));
  useEffect(() => {}, [defLangState]);
  

  return (
    <div className={styles.thankyouWrapper}>
      <div className={styles.textWrapper}>
        <h2 className={styles.thankyouTitle}>
          {defLangState === "rus" ? "Спасибо за заявку!" : ""}
          {defLangState === "ukr" ? "Дякуюємо за заявку!" : ""}
          {defLangState === "en" ? "Thank you for your application!" : ""}
        </h2>
        <h3 className={styles.thankyouText}>
          {defLangState === "rus"
            ? "Наши специалисты свяжутся с Вами в ближайшее время"
            : ""}
          {defLangState === "ukr"
            ? "Наші фахівці зв'яжуться з Вами найближчим часом"
            : ""}
          {defLangState === "en" ? "Our experts will contact you soon" : ""}
        </h3>
        <p className={styles.thankyouSocialText}>
          {defLangState === "rus"
            ? " Вступайте в наши группы в социальных сетях"
            : ""}
          {defLangState === "ukr"
            ? "Вступайте в наші групи в соціальних мережах"
            : ""}
          {defLangState === "en" ? "Follow us on social media" : ""}
        </p>
        <ul className={styles.socialsList}>
          <li className={styles.socialsListItem}>
            <a
              rel="noopener noreferrer"
              className={styles.socialIcon}
              target="_blank"
              href="https://www.facebook.com/webelc"
            >
              <span className={styles.linkContent}>content</span>
            </a>
          </li>
          <li className={styles.socialsListItem}>
            <a
              rel="noopener noreferrer"
              className={styles.socialIcon}
              target="_blank"
              href="http://instagram.comhttps://www.instagram.com/webstudio_elc/?igshid=1gxjtn1ywqds7"
            >
              <span className={styles.linkContent}>content</span>
            </a>
          </li>
        </ul>
      </div>
      <button onClick={()=> history.push("/")} className={styles.goBackBtn}>
        {defLangState === "rus" ? "НА ГЛАВНУЮ" : ""}
        {defLangState === "ukr" ? "НА ГОЛОВНУ" : ""}
        {defLangState === "en" ? "GO BACK" : ""}
      </button>
    </div>
  );
};

export default withRouter(ThankyouPage);
