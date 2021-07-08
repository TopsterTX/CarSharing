import React from "react";
import { connect } from "react-redux";
import "./Popup.scss";

const Popup = ({ popup }) => {
  return (
    <div className={`popup ${popup.popupActive ? "active" : ""}`}>
      <div className="popup__container">
        <p className="popup__heading">Подтвердить заказ</p>
        <div className="popup__buttons">
          <button className="popup__accept popup__button">Подтвердить</button>
          <button className="popup__back popup__button">Вернуться</button>
        </div>
      </div>
    </div>
  );
};

export default connect(({ popup }) => ({ popup }))(Popup);
