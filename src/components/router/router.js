import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const lazyMain = lazy(
  () => import("../mainPage/mainPage.js") /* webpackChunkName: 'Main' */
);
const lazyServices = lazy(
  () =>
    import(
      "../pages/servicesPage/ServicesPage.js"
    ) /* webpackChunkName: 'Main' */
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
        {/* <Route exact path="/blog" component={lazyBlog} /> */}
        <Route exact path="/services" component={lazyServices} />
        {/* <Route exact path="/about" component={lazyAboutUs} /> */}
        {/* <Route path="*" component={lazy404} /> */}
      </Switch>
    </Suspense>
  );
};
