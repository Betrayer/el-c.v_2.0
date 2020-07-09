import React, { useEffect, useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { CSSTransition } from "react-transition-group";
import css from "./servicePack.module.css";
import slideTransition from "../../transitions/slideTransition.module.css";

const ServicePack = () => {
  const [defLangState] = useState(localStorage.getItem("lang"));
  const [opened, setOpened] = useState([""]);
  const intFrameWidth = window.innerWidth;
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
          {intFrameWidth >= 768 ? (
            <AwesomeSlider className={css.slider}>
              <div className={css.servicesSliderPage}>
                <li
                  className={css.servicesListItem}
                  onMouseEnter={() => setOpened("first")}
                  onMouseLeave={() => setOpened("")}
                >
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
                      ? "Лендинг пейдж (англ. landing page) — это одностраничный сайт, основной задачей которой является сбор контактных данных целевой аудитории, получение заявок на работу, увеличения продаж и расширения аудитории"
                      : ""}
                    {defLangState === "ukr"
                      ? "Лендинг пейдж (англ. landing page) — это одностраничный сайт, основной задачей которой является сбор контактных данных целевой аудитории, получение заявок на работу, увеличения продаж и расширения аудитории"
                      : ""}
                    {defLangState === "en"
                      ? "Landing Page is a one-page site whose main task is to collect contact information for the target audience, receive job applications, increase sales and expand the audience."
                      : ""}
                    {opened === "first" ? "" : "..."}
                  </p>

                  <CSSTransition
                    in={opened === "first"}
                    classNames={slideTransition}
                    timeout={500}
                    unmountOnExit
                  >
                    <>
                      <p className={css.servicesText}>
                        {defLangState === "rus"
                          ? "Наполнение посадочной страницы позволяет призвать к активному действию в отношении представленного товара или услуги: заказать, позвонить, купить, подписаться на рассылку и т.д."
                          : ""}
                        {defLangState === "ukr"
                          ? "Наполнение посадочной страницы позволяет призвать к активному действию в отношении представленного товара или услуги: заказать, позвонить, купить, подписаться на рассылку и т.д."
                          : ""}
                        {defLangState === "en"
                          ? "Filling the landing page allows you to call for action in relation to the presented goods or services: order, call, buy, subscribe to the newsletter, etc."
                          : ""}
                      </p>
                      <p className={css.servicesText}>
                        {defLangState === "rus"
                          ? "Срок разработки (в среднем): 5-10 дней."
                          : ""}
                        {defLangState === "ukr"
                          ? "Срок разработки (в среднем): 5-10 дней."
                          : ""}
                        {defLangState === "en"
                          ? "Срок разработки (в среднем): 5-10 дней."
                          : ""}
                      </p>
                    </>
                  </CSSTransition>
                </li>
                <li className={css.servicesListItem} onMouseEnter={() => setOpened("second")}
                  onMouseLeave={() => setOpened("")}>
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
                    {defLangState === "rus" ? "Создание сайта-визитки" : ""}
                    {defLangState === "ukr" ? "Создание сайта-визитки" : ""}
                    {defLangState === "en" ? "Создание сайта-визитки" : ""}
                  </p>
                  <p className={css.servicesText}>
                    {defLangState === "rus"
                      ? "Сайт-визитка  — сайт, как правило, состоящий из одной или нескольких страниц и имеющий простую одноуровневую структуру не подразумевающую вложенных разделов и сложных программных модулей."
                      : ""}
                    {defLangState === "ukr"
                      ? "Сайт-візитка - сайт, як правило, що складається з однієї або декількох сторінок і має просту однорівневу структуру без вкладених розділів і складних програмних модулів."
                      : ""}
                    {defLangState === "en"
                      ? "A ??business card site?? is a site, as a rule, consisting of one or several pages and having a simple single-level structure that does not imply nested sections and complex program modules."
                      : ""}
                  </p>
                  <CSSTransition
                    in={opened === "second"}
                    classNames={slideTransition}
                    timeout={500}
                    unmountOnExit
                  >
                    <div>
                      <p className={css.servicesText}>
                        {defLangState === "rus"
                          ? "Этот продукт - оптимальный вариант для тех, кому нужно разместить в сети основную информацию о компании, деятельности, товарах или услугах, прайс-листы, контактные данные в максимально быстрый срок."
                          : ""}
                        {defLangState === "ukr"
                          ? "Этот продукт - оптимальный вариант для тех, кому нужно разместить в сети основную информацию о компании, деятельности, товарах или услугах, прайс-листы, контактные данные в максимально быстрый срок."
                          : ""}
                        {defLangState === "en"
                          ? "Этот продукт - оптимальный вариант для тех, кому нужно разместить в сети основную информацию о компании, деятельности, товарах или услугах, прайс-листы, контактные данные в максимально быстрый срок."
                          : ""}
                      </p>
                      <p className={css.servicesText}>
                        {defLangState === "rus"
                          ? "Срок разработки (в среднем): 7-14 дней."
                          : ""}
                        {defLangState === "ukr"
                          ? "Срок разработки (в среднем): 7-14 дней."
                          : ""}
                        {defLangState === "en"
                          ? "Срок разработки (в среднем): 7-14 дней."
                          : ""}
                      </p>
                    </div>
                  </CSSTransition>
                </li>

              </div>
              <div className={css.servicesSliderPage}>
                <li onMouseEnter={() => setOpened("third")}
                  onMouseLeave={() => setOpened("")} className={css.servicesListItem}>
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
                    {defLangState === "rus" ? "Разработка промо-каталога" : ""}
                    {defLangState === "ukr" ? "Разработка промо-каталога" : ""}
                    {defLangState === "en" ? "Разработка промо-каталога" : ""}
                  </p>
                  <p className={css.servicesText}>
                    {defLangState === "rus"
                      ? "Промо-каталог — чётко структурированный веб-сайт, состоящий из множества разделов, посвященных какой-либо продукции и её ассортименте. Промо-каталог является версией Интернет-магазина с незавершенным циклом продаж."
                      : ""}
                    {defLangState === "ukr"
                      ? "Промо-каталог — чётко структурированный веб-сайт, состоящий из множества разделов, посвященных какой-либо продукции и её ассортименте. Промо-каталог является версией Интернет-магазина с незавершенным циклом продаж."
                      : ""}
                    {defLangState === "en"
                      ? "Промо-каталог — чётко структурированный веб-сайт, состоящий из множества разделов, посвященных какой-либо продукции и её ассортименте. Промо-каталог является версией Интернет-магазина с незавершенным циклом продаж."
                      : ""}
                  </p>
                  <CSSTransition
                    in={opened === "third"}
                    classNames={slideTransition}
                    timeout={500}
                    unmountOnExit
                  >
                    <>
                      <p className={css.servicesText}>
                        {defLangState === "rus"
                          ? "Срок разработки (в среднем): 30-45 дней."
                          : ""}
                        {defLangState === "ukr"
                          ? "Срок разработки (в среднем): 30-45 дней."
                          : ""}
                        {defLangState === "en"
                          ? "Срок разработки (в среднем): 30-45 дней."
                          : ""}
                      </p>
                    </>
                  </CSSTransition>
                </li>
              
                <li className={css.servicesListItem} onMouseEnter={() => setOpened("forth")}
                  onMouseLeave={() => setOpened("")}>
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
                  <CSSTransition
                    in={opened === "forth"}
                    classNames={slideTransition}
                    timeout={500}
                    unmountOnExit
                  >
                    <div>
                      <p className={css.servicesText}>
                        {defLangState === "rus"
                          ? "Наполнение посадочной страницы позволяет призвать к активному действию в отношении представленного товара или услуги: заказать, позвонить, купить, подписаться на рассылку и т.д."
                          : ""}
                        {defLangState === "ukr"
                          ? "Наполнение посадочной страницы позволяет призвать к активному действию в отношении представленного товара или услуги: заказать, позвонить, купить, подписаться на рассылку и т.д."
                          : ""}
                        {defLangState === "en"
                          ? "Filling the landing page allows you to call for action in relation to the presented goods or services: order, call, buy, subscribe to the newsletter, etc."
                          : ""}
                      </p>
                      <p className={css.servicesText}>
                        {defLangState === "rus"
                          ? "Срок разработки (в среднем): 5-10 дней."
                          : ""}
                        {defLangState === "ukr"
                          ? "Срок разработки (в среднем): 5-10 дней."
                          : ""}
                        {defLangState === "en"
                          ? "Срок разработки (в среднем): 5-10 дней."
                          : ""}
                      </p>
                    </div>
                  </CSSTransition>
                </li>
                </div>
                <div className={css.servicesSliderPage}>
                <li className={css.servicesListItem} onMouseEnter={() => setOpened("fifth")}
                  onMouseLeave={() => setOpened("")}>
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
                  <CSSTransition
                    in={opened === "fifth"}
                    classNames={slideTransition}
                    timeout={500}
                    unmountOnExit
                  >
                    <div>
                      <p className={css.servicesText}>
                        {defLangState === "rus"
                          ? "Этот продукт - оптимальный вариант для тех, кому нужно разместить в сети основную информацию о компании, деятельности, товарах или услугах, прайс-листы, контактные данные в максимально быстрый срок."
                          : ""}
                        {defLangState === "ukr"
                          ? "Этот продукт - оптимальный вариант для тех, кому нужно разместить в сети основную информацию о компании, деятельности, товарах или услугах, прайс-листы, контактные данные в максимально быстрый срок."
                          : ""}
                        {defLangState === "en"
                          ? "Этот продукт - оптимальный вариант для тех, кому нужно разместить в сети основную информацию о компании, деятельности, товарах или услугах, прайс-листы, контактные данные в максимально быстрый срок."
                          : ""}
                      </p>
                      <p className={css.servicesText}>
                        {defLangState === "rus"
                          ? "Срок разработки (в среднем): 7-14 дней."
                          : ""}
                        {defLangState === "ukr"
                          ? "Срок разработки (в среднем): 7-14 дней."
                          : ""}
                        {defLangState === "en"
                          ? "Срок разработки (в среднем): 7-14 дней."
                          : ""}
                      </p>
                    </div>
                  </CSSTransition>
                </li>
              </div>
            </AwesomeSlider>
          ) : (
            <>
              <li
                className={css.servicesListItem}
                onMouseEnter={() => setOpened("first")}
                onMouseLeave={() => setOpened("")}
              >
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
                    ? "Лендинг пейдж (англ. landing page) — это одностраничный сайт, основной задачей которой является сбор контактных данных целевой аудитории, получение заявок на работу, увеличения продаж и расширения аудитории"
                    : ""}
                  {defLangState === "ukr"
                    ? "Лендинг пейдж (англ. landing page) — это одностраничный сайт, основной задачей которой является сбор контактных данных целевой аудитории, получение заявок на работу, увеличения продаж и расширения аудитории"
                    : ""}
                  {defLangState === "en"
                    ? "Landing Page is a one-page site whose main task is to collect contact information for the target audience, receive job applications, increase sales and expand the audience."
                    : ""}
                </p>
                <CSSTransition
                  in={opened === "first"}
                  classNames={slideTransition}
                  timeout={500}
                  unmountOnExit
                >
                  <div>
                    <p className={css.servicesText}>
                      {defLangState === "rus"
                        ? "Наполнение посадочной страницы позволяет призвать к активному действию в отношении представленного товара или услуги: заказать, позвонить, купить, подписаться на рассылку и т.д."
                        : ""}
                      {defLangState === "ukr"
                        ? "Наполнение посадочной страницы позволяет призвать к активному действию в отношении представленного товара или услуги: заказать, позвонить, купить, подписаться на рассылку и т.д."
                        : ""}
                      {defLangState === "en"
                        ? "Filling the landing page allows you to call for action in relation to the presented goods or services: order, call, buy, subscribe to the newsletter, etc."
                        : ""}
                    </p>
                    <p className={css.servicesText}>
                      {defLangState === "rus"
                        ? "Срок разработки (в среднем): 5-10 дней."
                        : ""}
                      {defLangState === "ukr"
                        ? "Срок разработки (в среднем): 5-10 дней."
                        : ""}
                      {defLangState === "en"
                        ? "Срок разработки (в среднем): 5-10 дней."
                        : ""}
                    </p>
                  </div>
                  </CSSTransition>
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
                <CSSTransition
                  in={opened === "second"}
                  classNames={slideTransition}
                  timeout={500}
                  unmountOnExit
                >
                  <>
                    <p className={css.servicesText}>
                      {defLangState === "rus"
                        ? "Наполнение посадочной страницы позволяет призвать к активному действию в отношении представленного товара или услуги: заказать, позвонить, купить, подписаться на рассылку и т.д."
                        : ""}
                      {defLangState === "ukr"
                        ? "Наполнение посадочной страницы позволяет призвать к активному действию в отношении представленного товара или услуги: заказать, позвонить, купить, подписаться на рассылку и т.д."
                        : ""}
                      {defLangState === "en"
                        ? "Filling the landing page allows you to call for action in relation to the presented goods or services: order, call, buy, subscribe to the newsletter, etc."
                        : ""}
                    </p>
                    <p className={css.servicesText}>
                      {defLangState === "rus"
                        ? "Срок разработки (в среднем): 5-10 дней."
                        : ""}
                      {defLangState === "ukr"
                        ? "Срок разработки (в среднем): 5-10 дней."
                        : ""}
                      {defLangState === "en"
                        ? "Срок разработки (в среднем): 5-10 дней."
                        : ""}
                    </p>
                  </>
                </CSSTransition>
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
            </>
          )}
        </ul>
      </div>
    </section>
  );
};

export default ServicePack;
