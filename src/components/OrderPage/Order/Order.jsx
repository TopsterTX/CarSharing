import React, { useEffect, useState } from "react";
import Navigation from "../../Aside/Navigation/Navigation";
import { Form } from "./Form/Form";
import { Maps } from "./Map/Maps";
import { Total } from "./Total/Total";
import "./Order.scss";
import { connect } from "react-redux";

function Order() {
  return (
    <section className="order">
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
}

export default connect()(Order);
