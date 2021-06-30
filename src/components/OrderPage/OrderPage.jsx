import React from "react";
import { Switch, Route } from "react-router-dom";
import { Footer } from "../HomePage/Main/Footer/Footer";
import { Header } from "../HomePage/Main/Header/Header";
import Order from '../OrderPage/Order/Order'
import "./OrderPage";

export const OrderPage = () => {
  return (
    <div className="order-page">
      <Header />
      <Switch>
          <Route to='/place' render={() => <Order />}/>
      </Switch>
      <Footer />
    </div>
  );
};
