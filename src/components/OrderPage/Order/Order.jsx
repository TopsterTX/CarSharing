import React from "react";
import { Header } from "../../HomePage/Main/header/Header";
import { Steps } from "./steps/Steps";
import { Navigation } from "../../HomePage/Main/navigation/Navigation";
import { Form } from "./form/Form";
import { Maps } from "./map/Maps";
import { Total } from "./total/Total";
import "./Order.scss";

export const Order = () => {
  return (
    <section className="order">
      <Header />
      <Steps />
      <div className="order__container">
        <div className="order__order-block">
          <Form />
          <Maps />
          <Navigation />
        </div>
        <div className="order__total-block">
          <Total />
        </div>
      </div>
    </section>
  );
};
