import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { HomePage } from "./../HomePage/HomePage";
import { OrderPage } from "./../OrderPage/OrderPage";
import "./AppRouter.scss";

export const AppRouter = () => {
  return (
    <Switch>
      <Route path="/" exact render={() => <HomePage />} />
      <Route path="/order" render={() => <OrderPage />} />
      <Redirect to="/" />
    </Switch>
  );
};
