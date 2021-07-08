import React, { useEffect, useState } from "react";
import { Form } from "./Form/Form";
import { Maps } from "./Map/Maps";
import "./Place.scss";
import { connect } from "react-redux";

function Order() {
  return (
    <section className="order">
      <div className="order__container">
        <Form />
        <Maps />
      </div>
    </section>
  );
}

export default connect()(Order);
