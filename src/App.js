import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { useRouter } from "./components/router/router";
import Header from "./components/mainPage/header/Header";
import css from "./app.module.css";
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './globalStyles';

const App = (props) => {
  const routing = useRouter(props);
  const [theme, setTheme] = useState('light');
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoaded(true), 3000);
  }, []);

  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === 'light') {
      setTheme('dark');
    // otherwise, it should be light
    } else {
      setTheme('light');
    }}

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles />
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
          <Header toggleTheme={toggleTheme}/>
          <div className={css.container}>{routing}</div>
        </Router>
      )}
      </>
    </ThemeProvider>
  );
};

export default App;
