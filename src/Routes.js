import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Singhup from "./Pages/SignUp";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Singhup} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
