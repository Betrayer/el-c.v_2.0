import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useRouter } from "./components/router/router";
import Header from "./components/mainPage/header/Header";
import Footer from "./components/mainPage/footer/Footer";
import css from "./app.module.css";
// import ToucanPanel from "./components/toucanPanel/ToucanPanel";

const App = (props) => {
  const routing = useRouter(props);
  return (
    <>
      <Header />
      <div className={css.container}>
        <Router>{routing}</Router>
      </div>
      <Footer />
    </>
    //     {/* <ToucanPanel /> */}
  );
};

export default App;
