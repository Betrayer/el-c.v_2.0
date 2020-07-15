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
    setLoaded(true);
  }, []);

  return (
    <>
      <Router>
        {/* <Header /> */}
        <ToucanPanel />
        <div className={css.container}>{routing}</div>

        <Footer />
      </Router>
    </>
  );
};

export default App;
