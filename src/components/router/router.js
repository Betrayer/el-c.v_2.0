import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const lazyMain = lazy(
  () => import("../mainPage/mainPage.js") /* webpackChunkName: 'Main' */
);
// const lazy404 = lazy(
//   () =>
//     import(
//       "../pages/pageNotFound/PageNotFound.js"
//     ) /* webpackChunkName: '404' */
// );
const lazyThankYou = lazy(
  () => import("../pages/thankyouPage/thankyouPage.js") /* webpackChunkName: 'Thankyou' */
);


export const useRouter = () => {
  return (
    <Suspense
      fallback={
        <div>
          <h2>Loading...</h2>
        </div>
      }
    >
      <Switch>
        <Route exact path="/" component={lazyMain} />
        {/* <Route path="*" component={lazy404} /> */}
        <Route exact path='/gratitude' component={lazyThankYou} />
      </Switch>
    </Suspense>
  );
};
