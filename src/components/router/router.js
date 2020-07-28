import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const lazyMain = lazy(
  () => import("../mainPage/mainPage") /* webpackChunkName: 'Main' */
);

const lazyThankYou = lazy(
  () =>
    import(
      "../pages/thankyouPage/thankyouPage"
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
