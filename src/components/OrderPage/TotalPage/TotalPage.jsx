import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { Info } from "./Info/Info";
import { Car } from "./Car/Car";
import "./TotalPage.scss";
import Popup from "../../Popup/Popup";
import { connect } from "react-redux";
import { changeTotalButton as actionChangeTotalButton } from "../../../redux/Reducers/TotalButton/totalButton";
import { changePopupActive as actionChangePopupActive } from "../../../redux/Reducers/Popup/popup";

const TotalPage = ({ changeTotalButton, changePopupActive }) => {
  useEffect(() => {
    changeTotalButton("/order/total/confirmation", "Заказать");
  }, []);

  return (
    <section className="total-page">
      <div className="total-page__container">
        <Info />
        <Car />
        <Route path="/order/total/confirmation" render={() => <Popup />} />
      </div>
    </section>
  );
};

export default connect(({}) => ({}), {
  changeTotalButton: actionChangeTotalButton,
  changePopupActive: actionChangePopupActive,
})(TotalPage);
