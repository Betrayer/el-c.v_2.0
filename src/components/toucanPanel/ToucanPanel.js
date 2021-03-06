import React, { useEffect, useState, useContext } from "react";
import { ThemeContext } from "styled-components";
import Particles from "react-particles-js";
import { useHistory } from "react-router-dom";
import PageNotFound from "../pages/pageNotFound/PageNotFound";
import styles from "./toucanPanel.module.css";

const ToucanPanel = () => {
  const [defLangState] = useState(localStorage.getItem("lang"));
  useEffect(() => {}, [defLangState]);
  const themeContext = useContext(ThemeContext);
  const intFrameWidth = window.innerWidth;
  const history = useHistory();

  const scroller = () => {
    document.getElementById("form").scrollIntoView({ behavior: "smooth" });
  };

  const explore = () => {
    document.getElementById("weWork").scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {history.location.pathname === "/" ? (
        <div
          id="toucan"
          className={
            themeContext.primary === "#fff" ? styles.toucan : styles.toucanDark
          }
        >
          {intFrameWidth > 700 ? (
            <Particles
              className={styles.particles}
              params={{
                background: {},
                backgroundMask: {
                  cover: {
                    color: {
                      value:
                        themeContext.primary === "#fff"
                          ? {
                              r: 255,
                              g: 255,
                              b: 255,
                            }
                          : {
                              r: 40,
                              g: 40,
                              b: 42,
                            },
                    },
                    opacity: 1,
                  },
                  enable: true,
                },
                detectRetina: true,
                fpsLimit: 120,
                infection: {
                  cure: false,
                  delay: 0,
                  enable: false,
                  infections: 0,
                  stages: [],
                },
                interactivity: {
                  detectsOn: "window",
                  events: {
                    onClick: {
                      enable: true,
                      mode: "push",
                    },
                    onDiv: {
                      elementId: "text",
                      enable: true,
                      mode: "bubble",
                    },
                    onHover: {
                      enable: true,
                      mode: "bubble",
                      parallax: {
                        enable: true,
                        force: 7000,
                        smooth: 6000,
                      },
                    },
                    resize: true,
                  },
                  modes: {
                    bubble: {
                      distance: 400,
                      duration: 10,
                      opacity: 1,
                      size: 200,
                    },
                    connect: {
                      distance: 80,
                      links: {
                        opacity: 0.5,
                      },
                      radius: 60,
                    },
                    grab: {
                      distance: 400,
                      links: {
                        opacity: 1,
                      },
                    },
                    push: {
                      quantity: 4,
                    },
                    remove: {
                      quantity: 2,
                    },
                    repulse: {
                      distance: 200,
                      duration: 0.4,
                      speed: 1,
                    },
                    slow: {
                      factor: 3,
                      radius: 200,
                    },
                  },
                },
                particles: {
                  collisions: {
                    enable: false,
                    mode: "bounce",
                  },
                  color: {
                    value: "#000",
                    animation: {
                      enable: false,
                      speed: 1,
                      sync: true,
                    },
                  },
                  links: {
                    blink: false,
                    color: {
                      value: "#ffffff",
                    },
                    consent: false,
                    distance: 200,
                    enable: true,
                    opacity: 0.2,
                    shadow: {
                      blur: 5,
                      color: {
                        value: "lime",
                      },
                      enable: false,
                    },
                    triangles: {
                      enable: false,
                    },
                    width: 1,
                    warp: true,
                  },
                  move: {
                    attract: {
                      enable: true,
                      rotate: {
                        x: 600,
                        y: 1200,
                      },
                    },
                    direction: "none",
                    enable: true,
                    noise: {
                      delay: {
                        random: {
                          enable: false,
                          minimumValue: 0,
                        },
                        value: 0,
                      },
                      enable: false,
                      factor: {
                        horizontal: {
                          value: 50,
                          offset: 0,
                        },
                        vertical: {
                          value: 10,
                          offset: 40000,
                        },
                      },
                    },
                    outMode: "out",
                    random: false,
                    speed: 2,
                    straight: false,
                    trail: {
                      enable: false,
                      length: 10,
                      fillColor: {
                        value: "#000000",
                      },
                    },
                    vibrate: false,
                    warp: false,
                  },
                  number: {
                    density: {
                      enable: true,
                      area: 400,
                      factor: 1000,
                    },
                    limit: 0,
                    value: 18,
                  },
                  opacity: {
                    animation: {
                      enable: false,
                      minimumValue: 0.2,
                      speed: 1,
                      sync: false,
                    },
                    random: {
                      enable: true,
                      minimumValue: 0.1,
                    },
                    value: 1,
                  },
                  rotate: {
                    animation: {
                      enable: false,
                      speed: 0,
                      sync: false,
                    },
                    direction: "clockwise",
                    random: false,
                    value: 0,
                  },
                  shadow: {
                    blur: 0,
                    color: {
                      value: "#000000",
                    },
                    enable: false,
                    offset: {
                      x: 0,
                      y: 0,
                    },
                  },
                  shape: {
                    options: {
                      character: {
                        fill: true,
                        close: true,
                        weight: 400,
                      },
                      char: {
                        fill: true,
                        close: true,
                        weight: 400,
                      },
                      image: {
                        fill: true,
                        close: true,
                        height: 100,
                        replaceColor: false,
                        src:
                          "https://cdn.matteobruni.it/images/particles/github.svg",
                        width: 100,
                      },
                      images: {
                        fill: true,
                        close: true,
                        height: 100,
                        replaceColor: false,
                        src:
                          "https://cdn.matteobruni.it/images/particles/github.svg",
                        width: 100,
                      },
                      polygon: {
                        fill: true,
                        close: true,
                        sides: 5,
                      },
                      star: {
                        fill: true,
                        close: true,
                        sides: 5,
                      },
                    },
                    type: "circle",
                  },
                  size: {
                    animation: {
                      destroy: "none",
                      enable: false,
                      minimumValue: 0.1,
                      speed: 40,
                      startValue: "max",
                      sync: false,
                    },
                    random: {
                      enable: true,
                      minimumValue: 1,
                    },
                    value: 8,
                  },
                  stroke: {
                    color: {
                      value: "#000000",
                    },
                    width: 0,
                    opacity: 1,
                  },
                  twinkle: {
                    lines: {
                      enable: false,
                      frequency: 0.05,
                      opacity: 1,
                    },
                    particles: {
                      enable: false,
                      frequency: 0.05,
                      opacity: 1,
                    },
                  },
                },
                pauseOnBlur: true,
              }}
            ></Particles>
          ) : (
            <div id="toucan" className={styles.particlesMob}></div>
            // <Particles
            //   className={styles.particles}
            //   params={{
            //     background: {},
            //     backgroundMask: {
            //       cover: {
            //         color: {
            //           value: {
            //             r: 255,
            //             g: 255,
            //             b: 255,
            //           },
            //         },
            //         opacity: 1,
            //       },
            //       enable: true,
            //     },
            //     detectRetina: true,
            //     fpsLimit: 30,
            //     infection: {
            //       cure: false,
            //       delay: 0,
            //       enable: false,
            //       infections: 0,
            //       stages: [],
            //     },
            //     interactivity: {
            //       detectsOn: "canvas",
            //       events: {
            //         onDiv: {
            //           elementId: "text",
            //           enable: true,
            //           mode: "bubble",
            //         },
            //         onHover: {
            //           enable: true,
            //           mode: "bubble",
            //           parallax: {
            //             enable: true,
            //             force: 7000,
            //             smooth: 6000,
            //           },
            //         },
            //         resize: true,
            //       },
            //       modes: {
            //         bubble: {
            //           distance: 200,
            //           duration: 100,
            //           opacity: 1,
            //           size: 90,
            //         },
            //         connect: {
            //           distance: 20,
            //           links: {
            //             opacity: 0.5,
            //           },
            //           radius: 60,
            //         },
            //         grab: {
            //           distance: 200,
            //           links: {
            //             opacity: 1,
            //           },
            //         },
            //         push: {
            //           quantity: 4,
            //         },
            //         remove: {
            //           quantity: 2,
            //         },
            //         repulse: {
            //           distance: 200,
            //           duration: 0.4,
            //           speed: 1,
            //         },
            //         slow: {
            //           factor: 3,
            //           radius: 200,
            //         },
            //       },
            //     },
            //     particles: {
            //       collisions: {
            //         enable: false,
            //         mode: "bounce",
            //       },
            //       color: {
            //         value: "#000",
            //         animation: {
            //           enable: false,
            //           speed: 1,
            //           sync: true,
            //         },
            //       },
            //       links: {
            //         blink: false,
            //         color: {
            //           value: "#ffffff",
            //         },
            //         consent: false,
            //         distance: 100,
            //         enable: true,
            //         opacity: 0.2,
            //         shadow: {
            //           blur: 5,
            //           color: {
            //             value: "lime",
            //           },
            //           enable: false,
            //         },
            //         triangles: {
            //           enable: false,
            //         },
            //         width: 1,
            //         warp: true,
            //       },
            //       move: {
            //         attract: {
            //           enable: true,
            //           rotate: {
            //             x: 600,
            //             y: 1200,
            //           },
            //         },
            //         direction: "none",
            //         enable: true,
            //         noise: {
            //           delay: {
            //             random: {
            //               enable: false,
            //               minimumValue: 0,
            //             },
            //             value: 0,
            //           },
            //           enable: false,
            //           factor: {
            //             horizontal: {
            //               value: 50,
            //               offset: 0,
            //             },
            //             vertical: {
            //               value: 10,
            //               offset: 40000,
            //             },
            //           },
            //         },
            //         outMode: "out",
            //         random: false,
            //         speed: 2,
            //         straight: false,
            //         trail: {
            //           enable: false,
            //           length: 10,
            //           fillColor: {
            //             value: "#000000",
            //           },
            //         },
            //         vibrate: false,
            //         warp: false,
            //       },
            //       number: {
            //         density: {
            //           enable: true,
            //           area: 400,
            //           factor: 1000,
            //         },
            //         limit: 0,
            //         value: 70,
            //       },
            //       opacity: {
            //         animation: {
            //           enable: false,
            //           minimumValue: 0.2,
            //           speed: 1,
            //           sync: false,
            //         },
            //         random: {
            //           enable: true,
            //           minimumValue: 0.1,
            //         },
            //         value: 1,
            //       },
            //       rotate: {
            //         animation: {
            //           enable: false,
            //           speed: 0,
            //           sync: false,
            //         },
            //         direction: "clockwise",
            //         random: false,
            //         value: 0,
            //       },
            //       shadow: {
            //         blur: 0,
            //         color: {
            //           value: "#000000",
            //         },
            //         enable: false,
            //         offset: {
            //           x: 0,
            //           y: 0,
            //         },
            //       },
            //       shape: {
            //         options: {
            //           character: {
            //             fill: true,
            //             close: true,
            //             weight: 400,
            //           },
            //           char: {
            //             fill: true,
            //             close: true,
            //             weight: 400,
            //           },
            //           image: {
            //             fill: true,
            //             close: true,
            //             height: 100,
            //             replaceColor: false,
            //             src:
            //               "https://cdn.matteobruni.it/images/particles/github.svg",
            //             width: 100,
            //           },
            //           images: {
            //             fill: true,
            //             close: true,
            //             height: 100,
            //             replaceColor: false,
            //             src:
            //               "https://cdn.matteobruni.it/images/particles/github.svg",
            //             width: 100,
            //           },
            //           polygon: {
            //             fill: true,
            //             close: true,
            //             sides: 5,
            //           },
            //           star: {
            //             fill: true,
            //             close: true,
            //             sides: 5,
            //           },
            //         },
            //         type: "circle",
            //       },
            //       size: {
            //         animation: {
            //           destroy: "none",
            //           enable: false,
            //           minimumValue: 0.1,
            //           speed: 40,
            //           startValue: "max",
            //           sync: false,
            //         },
            //         random: {
            //           enable: true,
            //           minimumValue: 1,
            //         },
            //         value: 5,
            //       },
            //       stroke: {
            //         color: {
            //           value: "#000000",
            //         },
            //         width: 0,
            //         opacity: 1,
            //       },
            //       twinkle: {
            //         lines: {
            //           enable: false,
            //           frequency: 0.05,
            //           opacity: 1,
            //         },
            //         particles: {
            //           enable: false,
            //           frequency: 0.05,
            //           opacity: 1,
            //         },
            //       },
            //     },
            //     pauseOnBlur: true,
            //   }}
            // >
            // </Particles>
          )}
          <div className={styles.panelText}>
            <p
              className={
                intFrameWidth > 700 ? styles.textTop : styles.textTopMob
              }
            >
              {defLangState === "rus" ? "студия" : ""}
              {defLangState === "ukr" ? "студія" : ""}
              {defLangState === "en" ? "digital" : ""}
              <span className={styles.textSpan}>
                {defLangState === "rus" ? "веб-разработки" : ""}
                {defLangState === "ukr" ? "веб-розробки" : ""}
                {defLangState === "en" ? "agency" : ""}
              </span>
            </p>
            <h1 className={intFrameWidth > 700 ? styles.name : styles.nameMob}>
              EL-C
            </h1>
            {/* <p className={styles.textMiddle}>Створюємо проекти будь-якої складності</p> */}
            <p
              className={
                intFrameWidth > 700 ? styles.textBottom : styles.textBottomMob
              }
            >
              {defLangState === "rus" ? "Предлагаем решение для простых" : ""}
              {defLangState === "ukr" ? "Пропонуємо рішення для простих" : ""}
              {defLangState === "en" ? "We suggest solutions for simple" : ""}
              <span
                className={
                  intFrameWidth > 700
                    ? styles.textSpanBottom
                    : styles.textSpanBottomMob
                }
              >
                {defLangState === "rus" ? "и нестандартных задач" : ""}
                {defLangState === "ukr" ? "і нестандартних завдань" : ""}
                {defLangState === "en" ? "and complicated tasks" : ""}
              </span>
            </p>
          </div>
          <button className={styles.getInTouchBtn} onClick={() => scroller()}>
            {" "}
            {defLangState === "rus" ? "Оставить заявку" : ""}
            {defLangState === "ukr" ? "Залишити заявку" : ""}
            {defLangState === "en" ? "Contact Us" : ""}
          </button>
          <button className={styles.goDownBtn} onClick={explore}>
            <div className={styles.topArrow}></div>
            <div className={styles.bottomArrow}></div>
          </button>
        </div>
      ) : history.location.pathname === "/gratitude" ? (
        <></>
      ) : (
        <>{<PageNotFound />}</>
      )}
    </>
  );
};

export default ToucanPanel;
