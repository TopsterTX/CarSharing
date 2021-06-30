import React from "react";
import { Switch, Route } from "react-router-dom";
import { Footer } from "../HomePage/Main/Footer/Footer";
import { Header } from "../HomePage/Main/Header/Header";
import {Steps} from '../OrderPage/Steps/Steps'
import Order from "../OrderPage/Order/Order";
import { Total } from "./Order/Total/Total";
import "./OrderPage.scss";

export const OrderPage = () => {
  return (
    <div className="order-page">
      <Header />
      <Steps/>
      <div className="order-page__content">
        <Order />
        <Total />
      </div>
    </div>
  );
};
