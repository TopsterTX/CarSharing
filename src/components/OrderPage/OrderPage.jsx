import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Header } from "../HomePage/Main/Header/Header";
import Steps from "../OrderPage/Steps/Steps";
import Place from "./Place/Place";
import Total from "./Total/Total";
import "./OrderPage.scss";
import { Check } from "./Check/Check";
// import  Models  from "./Models/Models";

export const OrderPage = () => {
  return (
    <div className="order-page">
      <Header className="header--order" />
      <Steps />
      <div className="order-page__content">
        <Switch>
          <Route path="/order/place" render={() => <Place />} />
          {/* <Route path="/order/models" render={() => <Models />} /> */}
          <Route path="/order/total" render={() => <Total />} />
        </Switch>
        <Check />
      </div>
    </div>
  );
};
