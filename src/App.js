import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import { routesHome } from "./routes";
import Home from "./containers/Home/index";

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

  return (
    <BrowserRouter className="App">
      <Switch>{renderHomePages(routesHome)}</Switch>
    </BrowserRouter>
  );
}

export default App;
