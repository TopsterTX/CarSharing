import React from "react";
import { Header } from "../../HomePage/Main/header/Header";
import { Steps } from "./steps/Steps";
import { Navigation } from "../../HomePage/Main/navigation/Navigation";
import { Form } from "./form/Form";
import { Maps } from "./map/Maps";
import "./Order.scss";

export const Order = () => {
  return (
    <section className="order">
      <div className="order__wrapper">
        <Header />
        <Steps />
        <Form />
        {/* <Maps/> */}
        <Navigation />
      </div>
    </section>
  );
};
