import React, { useEffect } from "react";
import { Info } from "./Info/Info";
import { Car } from "./Car/Car";
import "./Total.scss";
import TotalPopup from "../../TotalPopup/TotalPopup";
import { connect } from "react-redux";
import { changeCheckButton as actionChangeCheckButton } from "../../../redux/Reducers/CheckButton/checkButton";
import { changePopupActive as actionChangePopupActive } from "../../../redux/Reducers/Popup/popup";

const TotalPage = ({ changeCheckButton, changePopupActive, total }) => {
  useEffect(() => {
    changeCheckButton("/order/total", "Заказать", changePopupActive);
  }, []);

  return (
    <section className="total">
      <div className="total__container">
        <Info confirmOrder={total.isConfirmOrder}/>
        <Car />
        <TotalPopup />
      </div>
    </section>
  );
};

export default connect(({total}) => ({total}), {
  changeCheckButton: actionChangeCheckButton,
  changePopupActive: actionChangePopupActive,
})(TotalPage);
