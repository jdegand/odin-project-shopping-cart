import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Cart from "./Cart";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cart" component={Cart} />
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
