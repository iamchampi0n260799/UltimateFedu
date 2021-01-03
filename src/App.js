import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { routesHome, routesAdmin } from "./routes";
// import Home from "./containers/Home";
import PageNotFound from "./containers/PageNotFound";
// import Admin from "./containers/Admin";
// import Signin from "./containers/Home/SignInPage/Signin";
import Loader from "./components/Loader";

const Home = lazy(() => import("./containers/Home"));
const Admin = lazy(() => import("./containers/Admin"));
const Signin = lazy(() => import("./containers/Home/SignInPage/Signin"));

function App() {
  const renderHomePages = (routesHome) => {
    if (routesHome && routesHome.length > 0) {
      return routesHome.map((route, index) => (
        <Home
          key={index}
          exact={route.exact}
          path={route.path}
          component={route.component}
        />
      ));
    }
  };

  const renderAdminPages = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((route, index) => {
        return (
          <Admin
            key={index}
            exact={route.exact}
            path={route.path}
            Component={route.component}
          />
        );
      });
    }
  };

  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter className="App">
        {/* <button className="scrollTop">
          <i className="fa fa-angle-up"></i>
        </button> */}
        <Switch>
          {renderHomePages(routesHome)}
          {renderAdminPages(routesAdmin)}

          <Route path="/admin" component={Signin} />
          <Route path="" exact component={PageNotFound} />
        </Switch>

      </BrowserRouter>
    </Suspense>
  );
}

export default App;
