import React, { useEffect } from "react";
import { Navigation } from "../../HomePage/Main/navigation/Navigation";
import { Form } from "./form/Form";
import { Maps } from "./map/Maps";
import { Total } from "./total/Total";
import "./Order.scss";
import { connect } from "react-redux";
import { changeCity } from "../../../redux/reducers/options/options";
import {changePoint} from '../../../redux/reducers/options/options'


function Order ({options, actionChangeCity, actionChangePoint}) {

  return (
    <section className="order">
      <div className="order__container">
        <div className="order__order-block">
          <Form
            options={options}
            actionChangeCity={actionChangeCity}
            actionChangePoint={actionChangePoint}
          />
          <Maps />
          <Navigation />
        </div>
        <div className="order__total-block">
          <Total
            options={options}
          />
        </div>
      </div>
      
    </section>
  );
};

export default connect(
  ({options}) => ({options}),
  {
    actionChangeCity: changeCity,
    actionChangePoint: changePoint
  }
)(Order)