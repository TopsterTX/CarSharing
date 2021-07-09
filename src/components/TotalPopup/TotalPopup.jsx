import React from "react";
import { connect } from "react-redux";
import { changePopupActive as actionChangePopupActive } from "../../redux/Reducers/Popup/popup";
import { changeConfirmOrder as actionChangeConfirmOrder } from "../../redux/Reducers/Total/total";
import "./TotalPopup.scss";

const TotalPopup = ({ popup, changePopupActive, changeConfirmOrder }) => {
  return (
    <div className={`total-popup ${popup.isPopupActive ? "active" : ""}`}>
      <div className="total-popup__container">
        <p className="total-popup__heading">Подтвердить заказ</p>
        <div className="total-popup__buttons">
          <button
            className="total-popup__accept total-popup__button"
            onClick={() => {
              changeConfirmOrder(true);
              changePopupActive(false);
            }}
          >
            Подтвердить
          </button>
          <button
            className="total-popup__back total-popup__button"
            onClick={() => changePopupActive(false)}
          >
            Вернуться
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(({ popup }) => ({ popup }), {
  changePopupActive: actionChangePopupActive,
  changeConfirmOrder: actionChangeConfirmOrder,
})(TotalPopup);
