import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Particles from "react-particles-js";
import css from "./form.module.css";

const Form = (props) => {
  const [defLangState] = useState(localStorage.getItem("lang"));
  const [email, setEmail] = useState();
  const [feedback, setFeedback] = useState();
  const [arrow, setArrow] = useState(false);

  useEffect(() => {}, [email, feedback, defLangState]);

  const handleSubmit = (e) => {
    const {
      REACT_APP_EMAILJS_RECEIVER: receiverEmail,
      REACT_APP_EMAILJS_TEMPLATEID: template,
      REACT_APP_EMAILJS_USERID: user,
    } = props.env;
    e.preventDefault();
    sendFeedback(template, email, receiverEmail, feedback, user);
    setEmail("")
    setFeedback("")
  };
  const handleChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleChangeMail = (e) => {
    setEmail(e.target.value);
  };
  const handleCancel = () => {
    setFeedback();
    setEmail();
  };
  const sendFeedback = (
    templateId,
    senderEmail,
    receiverEmail,
    feedback,
    user
  ) => {
    window.emailjs
      .send(
        "default_service",
        templateId,
        {
          senderEmail,
          receiverEmail,
          feedback,
        },
        user
      )
      .then((res) => {
        handleCancel();
      })
      .catch((err) => console.error("Failed to send feedback. Error:", err));
  };

  return (
    <section id="form" className={css.formSection}>
      <Particles
        className={css.particlesForm}
        params={{
          background: {},
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
              onClick: {
                enable: true,
                mode: "push",
              },
              onDiv: {
                elementId: "",
                enable: false,
                mode: [],
              },
              onHover: {
                enable: true,
                mode: "connect",
                parallax: {
                  enable: false,
                  force: 60,
                  smooth: 10,
                },
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
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
              value: "#ffffff",
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
              distance: 150,
              enable: true,
              opacity: 0.3,
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
              warp: false,
            },
            move: {
              attract: {
                enable: false,
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
              speed: 1,
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
                area: 800,
                factor: 1000,
              },
              limit: 0,
              value: 120,
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.1,
                speed: 1.5,
                sync: false,
              },
              random: {
                enable: true,
                minimumValue: 0.1,
              },
              value: 0.5,
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
                  font: "Verdana",
                  style: "",
                  value: "*",
                  weight: 400,
                },
                char: {
                  fill: true,
                  close: true,
                  font: "Verdana",
                  style: "",
                  value: " *",
                  weight: 400,
                },
                image: {
                  fill: true,
                  close: true,
                  height: 100,
                  replaceColor: false,
                  src: "https://cdn.matteobruni.it/images/particles/github.svg",
                  width: 100,
                },
                images: {
                  fill: true,
                  close: true,
                  height: 100,
                  replaceColor: false,
                  src: "https://cdn.matteobruni.it/images/particles/github.svg",
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
                minimumValue: 0.5,
              },
              value: 2.5,
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
      />
      <form className={css.form} onSubmit={(e) => handleSubmit(e)}>
        <h3 className={css.formTitleForm}>
          {defLangState === "rus" ? "Есть крутая задумка?" : ""}
          {defLangState === "ukr" ? "Є крута задумка?" : ""}
          {defLangState === "en" ? "Have a cool idea?" : ""}
        </h3>
        <h3 className={css.formTitleForm}>
          {defLangState === "rus" ? "Пишите нам" : ""}
          {defLangState === "ukr" ? "Пишіть нам" : ""}
          {defLangState === "en" ? "Contact us" : ""}
        </h3>
        <div className={css.inputsWrapper}>
          <div className={css.formInputsLeft}>
            <p className={css.formText}>
              {defLangState === "rus" ? "Как к вам обращаться?" : ""}
              {defLangState === "ukr" ? "Як до вас звертатись?" : ""}
              {defLangState === "en" ? "How may I address you?" : ""}
            </p>
            <div className={css.formDiv}>
              {defLangState === "rus" ? (
                <input
                  className={css.formInput}
                  type="text"
                  placeholder="Ваше имя"
                  required
                />
              ) : (
                <></>
              )}
              {defLangState === "en" ? (
                <input
                  className={css.formInput}
                  type="text"
                  placeholder="Your name"
                  required
                />
              ) : (
                <></>
              )}
              {defLangState === "ukr" ? (
                <input
                  className={css.formInput}
                  type="text"
                  placeholder="Ваше ім'я"
                  required
                />
              ) : (
                <></>
              )}
              <p className={css.formText}>E-mail</p>
              <div className={css.formDiv}>
                {defLangState === "en" ? (
                  <input
                    className={css.formInput}
                    type="email"
                    value={email}
                    placeholder="Enter your email"
                    required
                    onChange={(e) => handleChangeMail(e)}
                  />
                ) : (
                  <></>
                )}
                {defLangState === "rus" ? (
                  <input
                    className={css.formInput}
                    type="email"
                    value={email}
                    placeholder="Введите ваш email"
                    required
                    onChange={(e) => handleChangeMail(e)}
                  />
                ) : (
                  <></>
                )}
                {defLangState === "ukr" ? (
                  <input
                    className={css.formInput}
                    type="email"
                    value={email}
                    placeholder="Введіть ваш email"
                    required
                    onChange={(e) => handleChangeMail(e)}
                  />
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          <div className={css.formInputsRight}>
            <p className={css.formText}>
              {defLangState === "rus" ? "Опишите вашу задумку" : ""}
              {defLangState === "ukr" ? "Опишіть вашу задумку" : ""}
              {defLangState === "en" ? "Describe your idea" : ""}
            </p>
            <div className={css.formDiv}>
              <textarea
                className={css.formInputFeedback}
                id="feedback-entry"
                name="feedback-entry"
                onChange={(e) => handleChange(e)}
                required
                value={feedback}
              />
            </div>
          </div>
          <div className={css.buttonFlexWhite}>
            <button
              onMouseOver={() => setArrow(true)}
              onMouseLeave={() => setArrow(false)}
              className={css.learnMoreWhite}
              // onClick={() => openForm()}
            >
              <span className={css.circleWhite} aria-hidden="true">
                {arrow ? (
                  <span className={css.arrowWhite}></span>
                ) : (
                  <span className={css.iconWhite}></span>
                )}
              </span>
              <span className={css.buttonTextWhite}>
                {defLangState === "rus" ? "Отправить заявку" : ""}
                {defLangState === "ukr" ? "Відправити заявку" : ""}
                {defLangState === "en" ? "Send request" : ""}
              </span>
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

Form.propTypes = {
  env: PropTypes.object.isRequired,
};

export default Form;
