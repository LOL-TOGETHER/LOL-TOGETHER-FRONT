import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/pages/Home";
import Register from "../components/pages/Register";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
    </Switch>
  );
};

export default Routes;
