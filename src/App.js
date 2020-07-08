import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useRouter } from "./components/router/router";
import Header from "./components/mainPage/header/Header";
import Footer from "./components/mainPage/footer/Footer";
import ToucanPanel from "./components/toucanPanel/ToucanPanel";
import css from "./app.module.css";

const App = (props) => {
  const routing = useRouter(props);

  return (
    <>
      <Router>
        <Header />
        <ToucanPanel />
        <div className={css.container}>{routing}</div>
      </Router>
      <Footer />
    </>
  );
};

export default App;
