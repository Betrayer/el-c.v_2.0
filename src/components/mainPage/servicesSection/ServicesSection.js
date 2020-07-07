import React, { useEffect, useState } from "react";
import css from "./servicesSection.module.css";

const ServicesSection = () => {
  const [defLangState] = useState(localStorage.getItem("lang"));
  useEffect(() => {}, [defLangState]);

  return (
    <section id="services" className={css.servicesSection}>
      <div className={css.contentWrapper}>
        <h2 className={css.servicesHeader}>
          {defLangState === "rus" ? "Что мы предлагаем" : ""}
          {defLangState === "ukr" ? "Послуги" : ""}
          {defLangState === "en" ? "Services" : ""}
        </h2>
        <ul className={css.servicesList}>
          <li className={css.servicesListItem}>
            <span className={css.iconCircle}></span>
            <span className={css.iconCircleLight}></span>
            <span className={css.iconCircleLighter}></span>
            <img
              className={css.icon}
              src={require("../../../assets/services/design.svg")}
              alt="services-icon"
              height={50}
              width={"auto"}
            />
            <p className={css.servicesTitle}>{defLangState === "rus" ? "Дизайн" : ""}
          {defLangState === "ukr" ? "Дизайн" : ""}
          {defLangState === "en" ? "Design" : ""}</p>
            <p className={css.servicesText}>
              {defLangState === "rus"
                ? "Проектирование интерфейсов"
                : ""}
              {defLangState === "ukr"
                ? "Проектування інтерфейсів"
                : ""}
              {defLangState === "en"
                ? "Designing Interfaces"
                : ""}
            </p>
            <p className={css.servicesText}>
              {defLangState === "rus"
                ? "Дизайн лендингов"
                : ""}
              {defLangState === "ukr"
                ? "Дизайн лендінгів"
                : ""}
              {defLangState === "en"
                ? "Landing Design"
                : ""}
            </p>
            {/* <p className={css.servicesText}>
              {defLangState === "rus"
                ? "Веб-дизайн"
                : ""}
              {defLangState === "ukr"
                ? "Веб-дизайн"
                : ""}
              {defLangState === "en"
                ? "Web design"
                : ""}
            </p> */}
            <p className={css.servicesText}>
              {defLangState === "rus"
                ? "Дизайн сайтов"
                : ""}
              {defLangState === "ukr"
                ? "Дизайн сайтів"
                : ""}
              {defLangState === "en"
                ? "Website Design"
                : ""}
            </p>
            <p className={css.servicesText}>
              {defLangState === "rus"
                ? "Дизайн интернет-магазинов"
                : ""}
              {defLangState === "ukr"
                ? "Дизайн інтернет-магазинів"
                : ""}
              {defLangState === "en"
                ? "Online Store Design"
                : ""}
            </p>
          </li>
          <li className={css.servicesListItem}>
            <span className={css.iconCircle}></span>
            <span className={css.iconCircleLight}></span>
            <span className={css.iconCircleLighter}></span>
            <img
              className={css.icon}
              src={require("../../../assets/services/webDev.svg")}
              alt="services-icon"
              height={50}
              width={"auto"}
            />
            <p className={css.servicesTitle}>
              {defLangState === "rus" ? "Веб-разработка" : ""}
              {defLangState === "ukr" ? "Веб-розробка" : ""}
              {defLangState === "en" ? "Web development" : ""}
            </p>
            {/* <p className={css.servicesText}>
              {defLangState === "rus"
                ? "Веб-сайты"
                : ""}
              {defLangState === "ukr"
                ? "Веб-сайти"
                : ""}
              {defLangState === "en"
                ? "Websites"
                : ""}
            </p> */}
            <p className={css.servicesText}>
              {defLangState === "rus"
                ? "Корпоративные сайты"
                : ""}
              {defLangState === "ukr"
                ? "Корпоративні сайти"
                : ""}
              {defLangState === "en"
                ? "Business solutions"
                : ""}
            </p>
            <p className={css.servicesText}>
              {defLangState === "rus"
                ? "Интернет-магазины"
                : ""}
              {defLangState === "ukr"
                ? "Інтернет-магазини"
                : ""}
              {defLangState === "en"
                ? "Online stores"
                : ""}
            </p>
            <p className={css.servicesText}>
              {defLangState === "rus"
                ? "Промо-сайты"
                : ""}
              {defLangState === "ukr"
                ? "Промо-сайти"
                : ""}
              {defLangState === "en"
                ? "Промо-сайты"
                : ""}
            </p>
            <p className={css.servicesText}>
              {defLangState === "rus"
                ? "Лендинг пейдж"
                : ""}
              {defLangState === "ukr"
                ? "Лендінг пейдж"
                : ""}
              {defLangState === "en"
                ? "Landing page"
                : ""}
            </p>
            <p className={css.servicesText}>
              {defLangState === "rus"
                ? "Сайт-Визитки"
                : ""}
              {defLangState === "ukr"
                ? "Сайт-Візитівка"
                : ""}
              {defLangState === "en"
                ? "Сайт-Визитки"
                : ""}
            </p>
            <p className={css.servicesText}>
              {defLangState === "rus"
                ? "Интернет-витрины"
                : ""}
              {defLangState === "ukr"
                ? "Інтернет-вітрини"
                : ""}
              {defLangState === "en"
                ? "Интернет-витрины"
                : ""}
            </p>
          </li>
          <li className={css.servicesListItem}>
            <span className={css.iconCircle}></span>
            <span className={css.iconCircleLight}></span>
            <span className={css.iconCircleLighter}></span>
            <img
              className={css.icon}
              src={require("../../../assets/services/mobile.svg")}
              alt="services-icon"
              height={50}
              width={"auto"}
            />
            <p className={css.servicesTitle}>
              {defLangState === "rus" ? "Мобильные приложения" : ""}
              {defLangState === "ukr" ? "Мобільні додатки" : ""}
              {defLangState === "en" ? "Mobile applications" : ""}
            </p>
            <p className={css.servicesText}>
              {defLangState === "rus"
                ? "Android приложения"
                : ""}
              {defLangState === "ukr"
                ? "Android додатки"
                : ""}
              {defLangState === "en"
                ? "Android applications"
                : ""}
            </p>
            <p className={css.servicesText}>
              {defLangState === "rus"
                ? "iOS Интернет-витрины"
                : ""}
              {defLangState === "ukr"
                ? "iOS додатки"
                : ""}
              {defLangState === "en"
                ? "iOS applications"
                : ""}
            </p>
          </li>
          <li className={css.servicesListItem}>
            <span className={css.iconCircle}></span>
            <span className={css.iconCircleLight}></span>
            <span className={css.iconCircleLighter}></span>
            <img
              className={css.icon}
              src={require("../../../assets/services/smm.svg")}
              alt="services-icon"
              height={50}
              width={"auto"}
            />
            <p className={css.servicesTitle}>
              {defLangState === "rus" ? "Интернет-маркетинг" : ""}
              {defLangState === "ukr" ? "Інтернет-маркетинг" : ""}
              {defLangState === "en" ? "Web marketing" : ""}
            </p>
            <p className={css.servicesText}>
              {defLangState === "rus"
                ? "Интернет реклама"
                : ""}
              {defLangState === "ukr"
                ? "Інтернет реклама"
                : ""}
              {defLangState === "en"
                ? "Online advertising"
                : ""}
            </p>
            <p className={css.servicesText}>
              {defLangState === "rus"
                ? "Поисковое продвижение SEO"
                : ""}
              {defLangState === "ukr"
                ? "Поисковое продвижение SEO"
                : ""}
              {defLangState === "en"
                ? "SEO"
                : ""}
            </p>
            <p className={css.servicesText}>
              {defLangState === "rus"
                ? "Контекстная реклама PPC"
                : ""}
              {defLangState === "ukr"
                ? "Контекстна реклама PPC"
                : ""}
              {defLangState === "en"
                ? "PPC internet advertising"
                : ""}
            </p>
            <p className={css.servicesText}>
              {defLangState === "rus"
                ? "Баннерная реклама"
                : ""}
              {defLangState === "ukr"
                ? "Баннерна реклама"
                : ""}
              {defLangState === "en"
                ? "Banner advertising"
                : ""}
            </p>
            <p className={css.servicesText}>
              {defLangState === "rus"
                ? "Социальный маркетинг SMM"
                : ""}
              {defLangState === "ukr"
                ? "Социальний маркетинг SMM"
                : ""}
              {defLangState === "en"
                ? "SMM"
                : ""}
            </p>
            <p className={css.servicesText}>
              {defLangState === "rus"
                ? "Реклама в социальных сетях"
                : ""}
              {defLangState === "ukr"
                ? "Реклама в социальних мережах"
                : ""}
              {defLangState === "en"
                ? "Social Media Advertising"
                : ""}
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ServicesSection;
