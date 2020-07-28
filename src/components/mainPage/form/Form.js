import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import css from "./form.module.css";

const Form = (props) => {
  const [defLangState] = useState(localStorage.getItem("lang"));
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [name, setName] = useState();
  const [feedback, setFeedback] = useState();
  const [arrowForm, setArrowForm] = useState(false);

  const history = useHistory();

  useEffect(() => {}, [email, feedback, defLangState]);

  const handleSubmit = (e) => {
    const {
      REACT_APP_EMAILJS_RECEIVER: receiverEmail,
      REACT_APP_EMAILJS_TEMPLATEID: template,
      REACT_APP_EMAILJS_USERID: user,
    } = props.env;
    e.preventDefault();
    sendFeedback(template, name, email, phone, receiverEmail, feedback, user);
    setEmail("");
    setPhone("");
    setFeedback("");
    setName("");
    history.push("/gratitude");
  };
  const handleChange = (e) => {
    setFeedback(e.target.value);
  };
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeTel = (e) => {
    setPhone(e.target.value);
  };

  const handleChangeMail = (e) => {
    setEmail(e.target.value);
  };
  const handleCancel = () => {
    setFeedback();
    setEmail();
    setName();
  };
  const sendFeedback = (
    templateId,
    name,
    senderEmail,
    phone,
    receiverEmail,
    feedback,
    user
  ) => {
    window.emailjs
      .send(
        "default_service",
        templateId,
        {
          name,
          senderEmail,
          phone,
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
      <div className={css.particlesForm}></div>
      <form className={css.form} onSubmit={(e) => handleSubmit(e)}>
        <h3 className={css.formTitleForm}>
          {defLangState === "rus" ? "Есть крутая идея?" : ""}
          {defLangState === "ukr" ? "Є крута ідея?" : ""}
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
                  onChange={(e) => handleChangeName(e)}
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
                  onChange={(e) => handleChangeName(e)}
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
                  onChange={(e) => handleChangeName(e)}
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

              <p className={css.formText}>
                {defLangState === "rus" ? "Номер телефона" : ""}
                {defLangState === "ukr" ? "Номер телефону" : ""}
                {defLangState === "en" ? "Phone number" : ""}
              </p>
              <div className={css.formDiv}>
                {defLangState === "rus" ? (
                  <input
                    className={css.formInput}
                    type="tel"
                    placeholder="Телефон"
                    required
                    pattern="(\+?\d[- .]*){7,13}"
                    onChange={(e) => handleChangeTel(e)}
                  />
                ) : (
                  <></>
                )}
                {defLangState === "en" ? (
                  <input
                    className={css.formInput}
                    type="tel"
                    placeholder="Phone"
                    required
                    pattern="(\+?\d[- .]*){7,13}"
                    onChange={(e) => handleChangeTel(e)}
                  />
                ) : (
                  <></>
                )}
                {defLangState === "ukr" ? (
                  <input
                    className={css.formInput}
                    type="tel"
                    placeholder="Телефон"
                    required
                    pattern="(\+?\d[- .]*){7,13}"
                    onChange={(e) => handleChangeTel(e)}
                  />
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          <div className={css.formInputsRight}>
            <p className={css.formText}>
              {defLangState === "rus" ? "Опишите вашу идею" : ""}
              {defLangState === "ukr" ? "Опишіть вашу ідею" : ""}
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
              onMouseOver={() => setArrowForm(true)}
              onMouseLeave={() => setArrowForm(false)}
              className={css.learnMoreWhite}
            >
              <span className={css.circleWhite} aria-hidden="true">
                {arrowForm ? (
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
