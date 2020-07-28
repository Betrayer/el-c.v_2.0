import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useRouter } from "./components/router/router";
import Header from "./components/mainPage/header/Header";
import css from "./app.module.css";

const App = (props) => {
  const routing = useRouter(props);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoaded(true), 3500);
  }, []);

  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content="https://elc-studio.com.ua/" />
        <meta
          property="og:description"
          content="Якісна та швидка розробка web-сторінок, сайтів та мобільних додатків різної складності"
        />
        <meta property="og:locale" content="uk_UA" />
        <meta property="og:locale:alternate" content="ru_RU" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:site_name" content="EL-C" />
      </Helmet>
      {!loaded ? (
        <div className={css.containers}>
          <div className={css.item1}></div>
          <div className={css.item2}></div>
          <div className={css.item3}></div>
          <div className={css.item4}></div>
          <div className={css.item5}></div>
        </div>
      ) : (
        <Router>
          <Header />
          <div className={css.container}>{routing}</div>
        </Router>
      )}
    </>
  );
};

export default App;
