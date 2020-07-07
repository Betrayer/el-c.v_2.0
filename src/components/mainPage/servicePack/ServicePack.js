import React, { useEffect, useState } from "react";
import css from "./servicePack.module.css";

const ServicePack = () => {
  const [defLangState] = useState(localStorage.getItem("lang"));
  useEffect(() => {}, [defLangState]);

  return (
    <section id="services" className={css.servicesSection}>
      <div className={css.contentWrapper}>
        <h2 className={css.servicesHeader}>
          {defLangState === "rus" ? "Что мы предлагаем" : ""}
          {defLangState === "ukr" ? "Пакети послуг" : ""}
          {defLangState === "en" ? "We offer" : ""}
        </h2>
        <ul className={css.servicesList}>
          <li className={css.servicesListItem}>
            <span className={css.iconCircle}></span>
            <span className={css.iconCircleLight}></span>
            <span className={css.iconCircleLighter}></span>
            <img
              className={css.icon}
              src={require("../../../assets/services/landing.svg")}
              alt="services-icon"
              height={50}
              width={"auto"}
            />
            <p className={css.servicesTitle}>Landing Page</p>
            <p className={css.servicesText}>
              {defLangState === "rus"
                ? "Создаем логическую структуру целевой страницы, которая побуждает посетителей к конкретным действиям - заказ услуги или товара, регистрации, подписки и т.д."
                : ""}
              {defLangState === "ukr"
                ? "Створюємо логічну структуру цільової сторінки, що спонукатиме відвідувачів до конкретних дій – замовлення послуги чи товару, реєстрації, підписки тощо"
                : ""}
              {defLangState === "en"
                ? "We create a logicaly structured landing page, which will motivate visitors to specific actions - ordering a service or product, registration, subscription, etc."
                : ""}
            </p>
          </li>
          <li className={css.servicesListItem}>
            <span className={css.iconCircle}></span>
            <span className={css.iconCircleLight}></span>
            <span className={css.iconCircleLighter}></span>
            <img
              className={css.icon}
              src={require("../../../assets/services/shop.svg")}
              alt="services-icon"
              height={50}
              width={"auto"}
            />
            <p className={css.servicesTitle}>
              {defLangState === "rus" ? "Интернет-магазин" : ""}
              {defLangState === "ukr" ? "Інтернет-магазин" : ""}
              {defLangState === "en" ? "Online stores" : ""}
            </p>
            <p className={css.servicesText}>
              {defLangState === "rus"
                ? "Главная задача - удобство и функциональность. Выполним все технические пожелания, которые необходимы для вашего бизнеса."
                : ""}
              {defLangState === "ukr"
                ? "Головна задача – зручність та функціональність. Виконаємо всі технічні побажання, які необхідні для вашого бізнесу."
                : ""}
              {defLangState === "en"
                ? "Our main task is convenience and functionality. We grant every technical wish that are necessary for your business."
                : ""}
            </p>
          </li>
          <li className={css.servicesListItem}>
            <span className={css.iconCircle}></span>
            <span className={css.iconCircleLight}></span>
            <span className={css.iconCircleLighter}></span>
            <img
              className={css.icon}
              src={require("../../../assets/services/data.svg")}
              alt="services-icon"
              height={50}
              width={"auto"}
            />
            <p className={css.servicesTitle}>
              {defLangState === "rus" ? "Корпоративний сайт" : ""}
              {defLangState === "ukr" ? "Корпоративний сайт" : ""}
              {defLangState === "en" ? "Business websites" : ""}
            </p>
            <p className={css.servicesText}>
              {defLangState === "rus"
                ? "Поможем представить вашу компанию как наилучше. Знаем, как сделать уникальный сайт, который вызывает доверие клиентов."
                : ""}
              {defLangState === "ukr"
                ? "Допоможемо презентувати вашу компанію якнайкраще. Знаємо, як зробити унікальний сайт, що викликає довіру клієнтів."
                : ""}
              {defLangState === "en"
                ? "We will help you present your company in the best possible way. We know how to make a unique site that inspires customer trust."
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
                ? "Разработаем прогрессивное и удобнле мобильное приложение любой сложности. Адаптируем продукт под все типы гаджетов."
                : ""}
              {defLangState === "ukr"
                ? "Розробимо прогресивний та зручний мобільний додаток будь-якої складності. Адаптуємо продукт під всі типи девайсів."
                : ""}
              {defLangState === "en"
                ? "We will develop a progressive and convenient mobile app of any complexity. We adapt the product to all types of devices."
                : ""}
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ServicePack;
