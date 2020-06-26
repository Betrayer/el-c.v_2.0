import React from "react";
import css from "./servicesSection.module.css";

const ServicesSection = () => {
  return (
    <section className={css.servicesSection}>
      <div className={css.contentWrapper}>
        <h2 className={css.servicesHeader}>Что мы предлагаем</h2>
        <ul className={css.servicesList}>
          <li className={css.servicesListItem}>
            <img
              className={css.servicesImage}
              src={require("../../../assets/services/tools.svg")}
              alt="services-icon"
              height={50}
              width={"auto"}
            />
            <p className={css.servicesText}>Наши прекрасные услуги по дизайну</p>
          </li>
          <li className={css.servicesListItem}>
            <img
              src={require("../../../assets/services/search.svg")}
              alt="services-icon"
              height={50}
              width={"auto"}
            />
            <p>Наши прекрасные услуги по продвижению в поисковиках</p>
          </li>
          <li className={css.servicesListItem}>
            <img
              src={require("../../../assets/services/document-text.svg")}
              alt="services-icon"
              height={50}
              width={"auto"}
            />
            <p>Наши прекрасные услуги по копирайту</p>
          </li>
          <li className={css.servicesListItem}>
            <img
              src={require("../../../assets/services/document-code.svg")}
              alt="services-icon"
              height={50}
              width={"auto"}
            />
            <p>Наши прекрасные услуги по великолепному коду</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ServicesSection;
