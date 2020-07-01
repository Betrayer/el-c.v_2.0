import React from "react";
import { useHistory, withRouter } from "react-router-dom";
import css from "./pageNotFound.module.css";

const PageNotFound = () => {
  const history = useHistory();
  return (
    <>
    {console.log('history', history)}
      <p className={css.zoomArea}>Такой страницы пока не существует.</p>
      <section className={css.errorContainer}>
        <span>4</span>
        <span>
          <span className={css.screenReaderText}>0</span>
        </span>
        <span>4</span>
      </section>
    </>
  );
};

export default withRouter(PageNotFound);
