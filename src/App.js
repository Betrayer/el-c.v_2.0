import React from "react";
import "./app.css";
import Header from "./components/header/Header";
import ToucanPanel from "./components/toucanPanel/ToucanPanel";

const App = () => {
  return (
    <>
      {/* <h2>I am app {"&"} main</h2>
      <h2>bohdan was here</h2> */}
      <Header />
      <ToucanPanel />
    </>
  );
};

export default App;
