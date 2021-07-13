import React, { useEffect, useState } from "react";
import { Form } from "./Form/Form";
import { Maps } from "./Map/Maps";
import "./Place.scss";
import { connect } from "react-redux";

function Place() {
  return (
    <section className="place">
      <div className="place__container">
        <Form />
        <Maps />
      </div>
    </section>
  );
}

export default connect()(Place);
