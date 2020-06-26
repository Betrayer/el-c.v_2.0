import React from "react";
import css from "./servicesSection.module.css";

const ServicesSection = () => {
  return (
    <section id="services" className={css.servicesSection}>
      <div className={css.contentWrapper}>
        <h2 className={css.servicesHeader}>Что мы предлагаем</h2>
        <ul className={css.servicesList}>
          <li className={css.servicesListItem}>
            <span className={css.iconCircle}></span>
            <span className={css.iconCircleLight}></span>
            <span className={css.iconCircleLighter}></span>
            <img
              className={css.icon}
              src={require("../../../assets/services/pencil.svg")}
              alt="services-icon"
              height={50}
              width={"auto"}
            />
            <p className={css.servicesText}>
              Наши прекрасные услуги по дизайну
            </p>
          </li>
          <li className={css.servicesListItem}>
          <span className={css.iconCircle}></span>
            <span className={css.iconCircleLight}></span>
            <span className={css.iconCircleLighter}></span>
            <svg
              className={css.icon}
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 396.819 396.819"
              style={{ enableBackground: "new 0 0 396.819 396.819" }}
            >
              <g>
                <g>
                  <path
                    d="M352.103,44.679c-59.237-59.401-155.412-59.535-214.813-0.298c-57.316,57.157-59.741,149.218-5.515,209.314l-11.6,11.6
			c-9.372-9.373-24.568-9.375-33.941-0.003c-0.001,0.001-0.002,0.002-0.003,0.003l-79.2,79.2
			c-9.373,9.372-9.375,24.568-0.003,33.941c0.001,0.001,0.002,0.002,0.003,0.003l11.312,11.312c9.372,9.369,24.564,9.369,33.936,0
			l79.2-79.2c9.373-9.372,9.375-24.568,0.003-33.941c-0.001-0.001-0.002-0.002-0.003-0.003l11.6-11.6
			c62.24,56.247,158.292,51.388,214.539-10.851C411.948,194.037,409.521,101.856,352.103,44.679z M120.175,299.231l-79.2,79.2
			c-3.124,3.123-8.188,3.123-11.312,0l-11.312-11.32c-3.118-3.123-3.118-8.181,0-11.304l79.2-79.2c3.164-3.025,8.148-3.025,11.312,0
			l11.312,11.32C123.293,291.05,123.293,296.108,120.175,299.231z M340.799,248.327c-53.112,53.11-139.223,53.109-192.333-0.003
			s-53.109-139.223,0.003-192.333c53.111-53.109,139.219-53.109,192.33,0C393.824,109.139,393.824,195.179,340.799,248.327z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M329.479,67.303L329.479,67.303l-11.312,11.312c40.545,40.644,40.545,106.436,0,147.08l11.312,11.312
			C376.275,190.117,376.275,114.193,329.479,67.303z"
                  />
                </g>
              </g>
            </svg>

            <p className={css.servicesText}>
              Наши прекрасные CEO услуги 
            </p>
          </li>
          <li className={css.servicesListItem}>
          <span className={css.iconCircle}></span>
            <span className={css.iconCircleLight}></span>
            <span className={css.iconCircleLighter}></span>
            <svg
              className={css.icon}
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 480 480"
              style={{ enableBackground: "new 0 0 480 480" }}
              stroke="#000000"
              strokeWidth="1"
            >
              <g className={css.path}>
                <g className={css.path}>
                  <path
                    className={css.path}
                    d="M472,416h-8V128c0-17.673-14.327-32-32-32h-56V72h40c4.418,0,8-3.582,8-8V32c0-17.673-14.327-32-32-32H136
			c-17.673,0-32,14.327-32,32v64H48c-17.673,0-32,14.327-32,32v288H8c-4.418,0-8,3.582-8,8v24c0,17.673,14.327,32,32,32h416
			c17.673,0,32-14.327,32-32v-24C480,419.582,476.418,416,472,416z M376,32c0-8.837,7.163-16,16-16s16,7.163,16,16v24h-32V32z
			 M376,328V152h32v216H295.2l-3.552-32H368C372.418,336,376,332.418,376,328z M120,32c0-8.837,7.163-16,16-16h228.448
			c-2.879,4.843-4.415,10.366-4.448,16v288h-70.168l-1.88-16.88c-0.449-4.053-3.874-7.12-7.952-7.12v-14.112l15.2-30.312
			c1.445-2.884,1.016-6.354-1.088-8.8l-48-56c-3.096-3.353-8.324-3.562-11.678-0.466c-0.162,0.149-0.317,0.305-0.466,0.466l-48,56
			c-2.104,2.446-2.533,5.916-1.088,8.8L200,281.888V296c-4.078,0-7.503,3.067-7.952,7.12l-1.88,16.88H120V32z M232,264v32h-16v-16
			c0.014-1.238-0.26-2.462-0.8-3.576l-13.6-27.256l38.4-44.872l38.472,44.872l-13.6,27.256c-0.565,1.108-0.863,2.332-0.872,3.576v16
			h-16v-32H232z M207.2,312h65.6l1.784,16H224v16h52.392l2.672,24h-78.128L207.2,312z M112,336h76.392l-3.552,32H72V152h32v176
			C104,332.418,107.582,336,112,336z M32,128c0-8.837,7.163-16,16-16h56v24H64c-4.418,0-8,3.582-8,8v232c0,4.418,3.582,8,8,8h352
			c4.418,0,8-3.582,8-8V144c0-4.418-3.582-8-8-8h-40v-24h56c8.837,0,16,7.163,16,16v288H312c-2.12-0.002-4.155,0.839-5.656,2.336
			L292.688,432H187.312l-13.656-13.664c-1.501-1.497-3.536-2.338-5.656-2.336H32V128z M464,448c0,8.837-7.163,16-16,16H32
			c-8.837,0-16-7.163-16-16v-16h148.688l13.656,13.656c1.5,1.5,3.534,2.344,5.656,2.344h112c2.122,0,4.156-0.844,5.656-2.344
			L315.312,432H464V448z"
                  />
                </g>
              </g>
              <g className={css.path}>
                <g className={css.path}>
                  <rect x="232" y="400" width="16" height="16" />
                </g>
              </g>
              <g className={css.path}>
                <g className={css.path}>
                  <rect
                    className={css.path}
                    x="144"
                    y="72"
                    width="192"
                    height="16"
                  />
                </g>
              </g>
              <g className={css.path}>
                <g className={css.path}>
                  <rect x="144" y="104" width="192" height="16" />
                </g>
              </g>
              <g className={css.path}>
                <g>
                  <rect x="144" y="136" width="160" height="16" />
                </g>
              </g>
              <g className={css.path}>
                <g>
                  <rect x="208" y="40" width="128" height="16" />
                </g>
              </g>
              <g className={css.path}>
                <g>
                  <rect x="176" y="40" width="16" height="16" />
                </g>
              </g>
              <g className={css.path}>
                <g>
                  <rect x="232" y="232" width="16" height="16" />
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
            <p className={css.servicesText}>
              Наши прекрасные услуги по копирайту
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
            <p className={css.servicesText}>
              Наши прекрасные услуги по great коду
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ServicesSection;
