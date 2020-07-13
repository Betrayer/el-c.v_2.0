import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import gsap from "gsap";
import styles from "./whyussection.module.css";
import slideTransition from "../../transitions/slideTransition.module.css";

const WhyUsSection = () => {
  const [opened, setOpened] = useState(["first"]);
  const [defLangState] = useState(localStorage.getItem("lang"));

  useEffect(() => {}, [defLangState]);
  useEffect(() => {
    document.getElementById("btn-top").addEventListener("click", function () {
      const tl = gsap.timeline();

      tl.to("#phone", { y: 20, ease: "expo.out", duration: 0.4 }, "<");
      tl.to("#phone", { y: -20, ease: "expo.out", duration: 0.4 }, 0.3);

      tl.to("#like", { y: -200, ease: "expo.out", duration: 0.4 }, "<");
      tl.to("#like", { css: { opacity: 1 }, duration: 0.1 }, "<");

      tl.to("#like", { y: 200, ease: "expo.out", duration: 0.4 }, 1.3);
      tl.to("#like", { css: { opacity: 0 }, duration: 0.1 }, "<");
    });
  }, []);

  const openwhyUsItem = (name) => {
    if (opened.includes(name)) {
      setOpened(opened.filter((item) => item !== name));
    } else {
      setOpened([...opened, name]);
    }
  };
  return (
    <section id="why" className={styles.whyUsContainer}>
      <h2 className={styles.whyUsTitle}>
        {defLangState === "rus" ? "Почему мы?" : ""}
        {defLangState === "ukr" ? "Чому ми?" : ""}
        {defLangState === "en" ? "Why us?" : ""}
      </h2>
      <div className={styles.whyUsContent}>
        <ul className={styles.whyUsList}>
          <li
            className={
              opened.includes("first")
                ? styles.animatedwhyUsItem
                : styles.whyUsItem
            }
          >
            <h3
              className={styles.whyUsItemTitle}
              onClick={() => openwhyUsItem("first")}
            >
              <i className={styles.toucanIcon}></i>
              {defLangState === "rus" ? "Четкие сроки" : ""}
              {defLangState === "ukr" ? "Чіткі терміни" : ""}
              {defLangState === "en" ? "Precise deadlines" : ""}
            </h3>
            <CSSTransition
              in={opened.includes("first")}
              classNames={slideTransition}
              timeout={500}
              unmountOnExit
            >
              <p className={styles.whyUsItemText}>
                {defLangState === "rus"
                  ? "Мы обсуждаем с вами дедлайны и обязуемся выполнить поставленную задачу в установленные сроки."
                  : ""}
                {defLangState === "ukr"
                  ? "Ми обговорюємо з вами дедлайни і зобов’язуємось виконати поставлену задачу у встановлені терміни."
                  : ""}
                {defLangState === "en"
                  ? "We discuss deadlines with you and guarantee to complete the task on time."
                  : ""}
              </p>
            </CSSTransition>
          </li>
          <li
            className={
              opened.includes("second")
                ? styles.animatedwhyUsItem
                : styles.whyUsItem
            }
          >
            <h3
              className={styles.whyUsItemTitle}
              onClick={() => openwhyUsItem("second")}
            >
              <i className={styles.toucanIcon}></i>
              {defLangState === "rus" ? "Индивидуальный подход" : ""}
              {defLangState === "ukr" ? "Індивідуальний підхід" : ""}
              {defLangState === "en" ? "Individual approach" : ""}
            </h3>
            <CSSTransition
              in={opened.includes("second")}
              classNames={slideTransition}
              timeout={500}
              unmountOnExit
            >
              <p className={styles.whyUsItemText}>
                {defLangState === "rus"
                  ? "Сначала мы слушаем, потом обсуждаем возможные варианты. Нам важно понимать ваши желания и видение конечного результата."
                  : ""}
                {defLangState === "ukr"
                  ? "Спочатку ми слухаємо, потім обговорюємо можливі варіанти. Нам важливо розуміти ваші бажання та бачення кінцевого результату."
                  : ""}
                {defLangState === "en"
                  ? "We listen to you first, then discuss possible options. It is important for us to understand your wishes and vision of the end result."
                  : ""}
              </p>
            </CSSTransition>
          </li>
          <li
            className={
              opened.includes("third")
                ? styles.animatedwhyUsItem
                : styles.whyUsItem
            }
          >
            <h3
              className={styles.whyUsItemTitle}
              onClick={() => openwhyUsItem("third")}
            >
              <i className={styles.toucanIcon}></i>
              {defLangState === "rus" ? "Постоянно на связи" : ""}
              {defLangState === "ukr" ? "Постійно на зв’язку" : ""}
              {defLangState === "en" ? "Always in touch" : ""}
            </h3>
            <CSSTransition
              in={opened.includes("third")}
              classNames={slideTransition}
              timeout={500}
              unmountOnExit
            >
              <p className={styles.whyUsItemText}>
                {defLangState === "rus"
                  ? "Наш менеджер поддерживает коммуникацию с вами и отчитывается на каком этапе находится проект."
                  : ""}
                {defLangState === "ukr"
                  ? "Наш менеджер підтримує комунікацію з вами та звітує на якому етапі знаходиться проект."
                  : ""}
                {defLangState === "en"
                  ? "Our manager communicates with you and reports on every stage of the project."
                  : ""}
              </p>
            </CSSTransition>
          </li>
          <li
            className={
              opened.includes("forth")
                ? styles.animatedwhyUsItem
                : styles.whyUsItem
            }
          >
            <h3
              className={styles.whyUsItemTitle}
              onClick={() => openwhyUsItem("forth")}
            >
              <i className={styles.toucanIcon}></i>
              {defLangState === "rus" ? "Фиксированная цена" : ""}
              {defLangState === "ukr" ? "Фіксована ціна" : ""}
              {defLangState === "en" ? "Fixed price" : ""}
              
            </h3>
            <CSSTransition
              in={opened.includes("forth")}
              classNames={slideTransition}
              timeout={500}
              unmountOnExit
            >
              <p className={styles.whyUsItemText}>
                {defLangState === "rus" ? "Мы имеем четко установленный прайс и гарантируем, что в течение работы над проектом стоимость не изменится." : ""}
                {defLangState === "ukr" ? "Ми маємо чітко встановлений прайс і гарантуємо, що протягом роботи над проектом вартість не зміниться." : ""}
                {defLangState === "en" ? "We have a set price and we guarantee that during the work on the project the cost will not change." : ""}
              </p>
            </CSSTransition>
          </li>
          <li
            className={
              opened.includes("fifth")
                ? styles.animatedwhyUsItem
                : styles.whyUsItem
            }
          >
            <h3
              className={styles.whyUsItemTitle}
              onClick={() => openwhyUsItem("fifth")}
            >
              <i className={styles.toucanIcon}></i>
              {defLangState === "en" ? "Progressive team" : ""}
              {defLangState === "ukr" ? "Прогресивна команда" : ""}
              {defLangState === "rus" ? "Прогрессивная команда" : ""}
            </h3>
            <CSSTransition
              in={opened.includes("fifth")}
              classNames={slideTransition}
              timeout={500}
              unmountOnExit
            >
              <p className={styles.whyUsItemText}>
                {defLangState === "rus" ? "Наша студия - это специалисты, которые идут в ногу со временем и всегда в курсе технических новинок." : ""}
                {defLangState === "ukr" ? "Наша студія – це спеціалісти, які йдуть в ногу з часом і завжди в курсі технічних новинок." : ""}
                {defLangState === "en" ? "Our studio consists of the specialists who always keep up with the technical innovations." : ""}              </p>
            </CSSTransition>
          </li>
          <li
            className={
              opened.includes("sixth")
                ? styles.animatedwhyUsItem
                : styles.whyUsItem
            }
          >
            <h3
              className={styles.whyUsItemTitle}
              onClick={() => openwhyUsItem("sixth")}
            >
              <i className={styles.toucanIcon}></i>
              {defLangState === "rus" ? "Исследование рынка" : ""}
              {defLangState === "ukr" ? "Дослідження ринку" : ""}
              {defLangState === "en" ? "Market research" : ""}
              
            </h3>
            <CSSTransition
              in={opened.includes("sixth")}
              classNames={slideTransition}
              timeout={500}
              unmountOnExit
            >
              <p className={styles.whyUsItemText}>
                {defLangState === "rus" ? "Перед началом работы мы проводим глубокий анализ и разрабатываем стратегию для вашего проекта." : ""}
                {defLangState === "ukr" ? "Перед початком роботи ми проводимо глибокий аналіз та розробляємо стратегію для вашого проекту." : ""}
                {defLangState === "en" ? "Before starting the project, we conduct an in-depth analysis and develop a strategy for your project." : ""}
              </p>
            </CSSTransition>
          </li>
        </ul>
        <div className={styles.likeWrapper}>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1920 1080"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="phone">
              <g transform="matrix(1,0,0,1,-143,-72.8832)">
                <path
                  d="M1577.88,690L1577.88,667.783L627.115,507L627.115,530.214L1577.88,690Z"
                  style={{ fill: "rgb(89,98,118)" }}
                />
              </g>
              <g transform="matrix(0.866025,-0.5,0.866025,0.5,-504.083,772.117)">
                <path
                  d="M1306,254.74C1306,239.43 1295.24,227 1281.98,227L923.023,227C909.764,227 899,239.43 899,254.74L899,920.26C899,935.57 909.764,948 923.023,948L1281.98,948C1295.24,948 1306,935.57 1306,920.26L1306,254.74Z"
                  style={{ fill: "rgb(89,98,118)" }}
                />
              </g>
              <g transform="matrix(0.866025,-0.5,0.866025,0.5,-504.083,794.103)">
                <path
                  d="M1306,254.74C1306,239.43 1295.24,227 1281.98,227L923.023,227C909.764,227 899,239.43 899,254.74L899,920.26C899,935.57 909.764,948 923.023,948L1281.98,948C1295.24,948 1306,935.57 1306,920.26L1306,254.74Z"
                  style={{ fill: "rgb(89,98,118)" }}
                />
              </g>
              <g transform="matrix(0.807145,-0.466005,0.829443,0.478879,-417.675,747.046)">
                <path
                  d="M1306,253.994C1306,239.096 1295.24,227 1281.98,227L923.023,227C909.764,227 899,239.096 899,253.994L899,921.006C899,935.904 909.764,948 923.023,948L1281.98,948C1295.24,948 1306,935.904 1306,921.006L1306,253.994Z"
                  style={{ fill: "white" }}
                />
              </g>
              <g transform="matrix(0.866025,-0.5,0.866025,0.5,-451.31,807.973)">
                <path
                  d="M1269.77,287.773C1269.77,284.201 1267.57,282 1264,282C1227.13,282 1024.27,282 963.321,282C959.748,282 955.346,284.201 951.774,287.774C948.201,291.346 946,295.748 946,299.321C946,358.281 946,549.511 946,585.227C946,588.799 948.201,591 951.774,591C988.641,591 1191.51,591 1252.45,591C1256.03,591 1260.43,588.799 1264,585.226C1267.57,581.654 1269.77,577.252 1269.77,573.679L1269.77,287.773Z"
                  style={{ fill: "rgb(62,208,222)" }}
                />
              </g>
              <g transform="matrix(0.674243,-0.389274,0.674243,0.389274,-543.345,564.028)">
                <circle
                  cx="1006.12"
                  cy="672.125"
                  r="36.125"
                  style={{ fill: "rgb(89,98,118)" }}
                />
              </g>
              <g transform="matrix(1.28394,-0.741285,0.671804,0.387866,-484.373,1393.65)">
                <path
                  d="M1264.39,287.5C1264.39,280.601 1261.85,275 1258.72,275L1051.66,275C1048.54,275 1046,280.601 1046,287.5C1046,294.399 1048.54,300 1051.66,300L1258.72,300C1261.85,300 1264.39,294.399 1264.39,287.5Z"
                  style={{ fill: "rgb(89,98,118)" }}
                />
              </g>
              <g transform="matrix(0.689111,-0.397858,0.671804,0.387866,171.132,1053.66)">
                <path
                  d="M1264.39,287.5C1264.39,280.601 1259.66,275 1253.83,275L1056.55,275C1050.73,275 1046,280.601 1046,287.5C1046,294.399 1050.73,300 1056.55,300L1253.83,300C1259.66,300 1264.39,294.399 1264.39,287.5Z"
                  style={{ fill: "rgb(89,98,118)" }}
                />
              </g>
              <g
                className={styles.btnTop}
                id="btn-top"
                transform="matrix(1,0,0,1,-143,-42.3401)"
              >
                <g
                  id="btn-top-base"
                  transform="matrix(0.866025,-0.5,0.866025,0.5,-361.083,814.457)"
                >
                  <path
                    d="M1264.39,722.789C1264.39,717.938 1260.98,714 1256.78,714L948.225,714C944.024,714 940.613,717.938 940.613,722.789L940.613,791.211C940.613,796.062 944.024,800 948.225,800L1256.78,800C1260.98,800 1264.39,796.062 1264.39,791.211L1264.39,722.789Z"
                    style={{ fill: "rgb(246,129,127)" }}
                  />
                </g>
                <g
                  id="heart-top"
                  transform="matrix(0.535417,-0.309123,0.535417,0.309123,351.217,714.246)"
                >
                  <path
                    d="M956,696.6C964.842,681 982.526,681 991.368,688.8C1000.21,696.6 1000.21,712.2 991.368,727.8C985.179,739.5 969.263,751.2 956,759C942.737,751.2 926.821,739.5 920.632,727.8C911.789,712.2 911.789,696.6 920.632,688.8C929.474,681 947.158,681 956,696.6Z"
                    style={{ fill: "white" }}
                  />
                </g>
              </g>
            </g>
            <g transform="matrix(0.517673,0,0,0.517673,412.745,102.656)">
              <g className={styles.like} id="like">
                <g>
                  <path
                    d="M775.959,655.016C766.774,651.383 760.803,640.373 760.803,624.07L760.803,525.857C760.803,498.754 777.306,467.222 797.633,455.486L975.987,352.514C984.087,347.837 991.58,347.005 997.661,349.411L997.661,349.411L997.661,349.411C999.328,350.07 1000.89,350.973 1002.33,352.105L1053.09,381.411L1012.82,435.749L1012.82,478.57C1012.82,505.673 996.314,537.205 975.987,548.941L915.6,583.805L886.555,640.147L870.664,627.56L827.94,685.209L775.959,655.016L775.959,655.016Z"
                    style={{ fill: "rgb(246,129,127)" }}
                  />
                  <g transform="matrix(0.866025,-0.5,4.80741e-17,1,119.078,509.25)">
                    <g transform="matrix(1,0,0,0.810997,86,89.7663)">
                      <path
                        d="M1010,445.551C1010,412.132 990.944,385 967.472,385L761.528,385C738.056,385 719,412.132 719,445.551L719,566.653C719,600.073 738.056,627.205 761.528,627.205L830.837,627.205L864.206,676L897.744,627.205L967.472,627.205C990.944,627.205 1010,600.073 1010,566.653L1010,445.551Z"
                        style={{ fill: "rgb(244,95,95)" }}
                      />
                    </g>
                    <g transform="matrix(1.10429,0,0,1,107.216,-31.799)">
                      <path
                        d="M716.149,505.021C725.234,488 743.402,488 752.486,496.51C761.57,505.021 761.57,522.042 752.486,539.063C746.127,551.829 729.776,564.594 716.149,573.105C702.523,564.594 686.172,551.829 679.813,539.063C670.729,522.042 670.729,505.021 679.813,496.51C688.897,488 707.065,488 716.149,505.021Z"
                        style={{ fill: "white" }}
                      />
                    </g>
                    <g transform="matrix(1.10429,0,0,1,107.216,-31.799)">
                      <path
                        d="M716.149,505.021C725.234,488 743.402,488 752.486,496.51C761.57,505.021 761.57,522.042 752.486,539.063C746.127,551.829 729.776,564.594 716.149,573.105C702.523,564.594 686.172,551.829 679.813,539.063C670.729,522.042 670.729,505.021 679.813,496.51C688.897,488 707.065,488 716.149,505.021Z"
                        style={{ fill: "white" }}
                      />
                    </g>
                    <g transform="matrix(7.49275,0,0,7.49275,-6514.63,-3161.28)">
                      <text
                        x="1001.14px"
                        y="492.451px"
                        style={{
                          fontFamily: "ArialMT",
                          fontSize: "12px",
                          fill: "white",
                        }}
                      >
                        1
                      </text>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          <div className={styles.likeTextWrapper}>
          <p className={styles.likeText}>{defLangState === "rus" ? "*нажми на лайк" : ""}
        {defLangState === "ukr" ? "*тицни на вподобайку" : ""}
        {defLangState === "en" ? "*press the like button" : ""}</p></div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
