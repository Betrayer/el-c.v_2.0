import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useRouter } from "./components/router/router";
import Header from "./components/mainPage/header/Header";
import Footer from "./components/mainPage/footer/Footer";
import ToucanPanel from "./components/toucanPanel/ToucanPanel";
import css from "./app.module.css";

const App = (props) => {
  const routing = useRouter(props);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 5000);
  }, []);

  return (
    <>
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
          <ToucanPanel />
          <div className={css.container}>{routing}</div>
          <Footer />
        </Router>
      )}
    </>
  );
};

export default App;
