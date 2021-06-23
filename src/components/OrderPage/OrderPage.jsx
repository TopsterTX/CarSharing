import React from "react";
import { Aside } from "../HomePage/Aside/Aside";
import { Order } from "./Order/Order";
import { Footer } from "../HomePage/Main/footer/Footer";
import "./OrderPage.scss";

export const OrderPage = () => {
  return (
    <section className="page page--order">
      <Aside />
      <Order />
      <Footer />
    </section>
  );
};
