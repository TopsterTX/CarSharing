import React from "react";
import { Header } from "../../HomePage/Main/header/Header";
import {Steps} from './steps/Steps'
import "./Order.scss";

export const Order = () => {
  return (
    <section className="order">
      <div className="order__wrapper">
        <Header />
        <Steps />
      </div>
    </section>
  );
};
