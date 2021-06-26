import React from "react";
import { Switch, Route } from "react-router-dom";
import { Header } from "../HomePage/Main/header/Header";
import { Aside } from "../HomePage/Aside/Aside";
import { Order } from "./Order/Order";
import { Steps } from "./Steps/Steps";
import { Footer } from "../HomePage/Main/footer/Footer";
import "./OrderPage.scss";

export const OrderPage = () => {
  return (
    <section className="page page--order">
      <Aside />
      <div className="order__block">
        <Header />
        <Steps />
        <Switch>
          <Route to="/place" component={Order} />
          {/* <Route to='/model'> */}
        </Switch>
        <Footer />
      </div>
    </section>
  );
};
