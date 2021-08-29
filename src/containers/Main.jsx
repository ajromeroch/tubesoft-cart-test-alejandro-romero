import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import CartPage from "./CartPage";

export default function Main() {
  return (
    <div>
      <Switch>
        <Route path="/cart" component={CartPage} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}
