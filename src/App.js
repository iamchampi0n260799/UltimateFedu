import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { routesHome, routesAdmin } from "./routes";
import Home from "./containers/Home";
import PageNotFound from "./containers/PageNotFound";
import Admin from "./containers/Admin";
import Signin from "./containers/Home/SignInPage/Signin";

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
            component={route.component}
          />
        );
      });
    }
  };

  return (
    <BrowserRouter className="App">
      <Switch>
        {renderHomePages(routesHome)}
        {renderAdminPages(routesAdmin)}

      </Switch>
      <Route path="/admin" component={Signin} />
      <Route path="" component={PageNotFound} />

    </BrowserRouter>
  );
}

export default App;
