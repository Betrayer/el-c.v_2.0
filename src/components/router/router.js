import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const lazyMain = lazy(
  () => import("../mainPage/mainPage") /* webpackChunkName: 'Main' */
);

const lazyThankYou = lazy(
  () =>
    import(
<<<<<<< HEAD
      "../pages/thankyouPage/ThankyouPage.js"
=======
      "../pages/thankyouPage/thankyouPage"
>>>>>>> 61da2ddeff58c391ba56bb98a73cc5525fc1c589
    ) /* webpackChunkName: 'Thankyou' */
);

export const useRouter = () => {
  return (
    <Suspense
      fallback={
        <div>
          <span>Loading...</span>
        </div>
      }
    >
      <Switch>
        <Route exact path="/" component={lazyMain} />
        <Route exact path="/gratitude" component={lazyThankYou} />
      </Switch>
    </Suspense>
  );
};
