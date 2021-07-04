import React, { useEffect } from "react";
import {changeTotalButton as actionChangeTotalButton} from '../../../redux/Reducers/TotalButton/totalButton'
import { Form } from "./Form/Form";
import { Maps } from "./Maps/Maps";

import "./Place.scss";
import { connect } from "react-redux";

function Place({changeTotalButton, addItem}) {

  useEffect(() => {
    changeTotalButton('/order/models', "Выберите модель")
  }, [])

  return (
    <section className="place">
      <div className="place__container">
        <Form />
        <Maps />
      </div>
    </section>
  );
}

export default connect(
  ({}) => ({}),
  {
    changeTotalButton: actionChangeTotalButton,
  }
)(Place);
