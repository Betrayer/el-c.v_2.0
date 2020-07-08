import React, { useEffect, useState } from "react";
import Particles from "react-particles-js";
import { useHistory } from "react-router-dom";
import PageNotFound from "../pages/pageNotFound/PageNotFound";
import styles from "./toucanPanel.module.css";

const ToucanPanel = () => {
  const [canvas, setCanvas] = useState(
    document.getElementsByClassName("tsparticles-canvas-el")
  );
  const intFrameWidth = window.innerWidth;
  const history = useHistory();
  useEffect(() => {
    window.onload = function () {
      const canvas = document.getElementsByClassName(
        "tsparticles-canvas-el"
      )[0];
      var ctx = canvas.getContext("2d");

      ctx.font = "58px Arial";
      ctx.fillStyle = "rgba(20, 20, 20, .8)";
      ctx.fillText("Hello World", 10, 50);
    };
    // var ctx = canvas.getContext("2d");
    // ctx.font = "30px Arial";
  }, [canvas]);

  return (
    <>
      {history.location.pathname === "/" ? (
        <div id="toucan">
          {intFrameWidth > 700 ? (
            <Particles
              className={styles.particles}
              params={{
                background: {},
                backgroundMask: {
                  cover: {
                    color: {
                      value: {
                        r: 255,
                        g: 255,
                        b: 255,
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
            <Particles
              className={styles.particles}
              params={{
                background: {},
                backgroundMask: {
                  cover: {
                    color: {
                      value: {
                        r: 255,
                        g: 255,
                        b: 255,
                      },
                    },
                    opacity: 1,
                  },
                  enable: true,
                },
                detectRetina: true,
                fpsLimit: 30,
                infection: {
                  cure: false,
                  delay: 0,
                  enable: false,
                  infections: 0,
                  stages: [],
                },
                interactivity: {
                  detectsOn: "canvas",
                  events: {
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
                      distance: 200,
                      duration: 100,
                      opacity: 1,
                      size: 90,
                    },
                    connect: {
                      distance: 20,
                      links: {
                        opacity: 0.5,
                      },
                      radius: 60,
                    },
                    grab: {
                      distance: 200,
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
                    distance: 100,
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
                    value: 64,
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
                    value: 5,
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
            >
              <h1 className={styles.name}>EL-C</h1>
            </Particles>
          )}
          <div className={styles.panelText}>
            <p className={styles.textTop}>студія <span className={styles.textSpan}>веб-розробки</span></p>
            <h1 className={styles.name}>EL-C</h1>
            {/* <p className={styles.textMiddle}>Створюємо проекти будь-якої складності</p> */}
            <p className={styles.textBottom}>Пропонуємо рішення для простих <span className={styles.textSpanBottom}>і не стандартних завдань</span></p>
          </div>
          <button className={styles.getInTouchBtn}>Залишити заявку</button>
        </div>
      ) : (
        <>{<PageNotFound />}</>
      )}
    </>
  );
};

export default ToucanPanel;
