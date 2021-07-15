import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePopupActive } from "../../redux/ActionCreators/Popup/popup";
import { changeConfirmOrder } from "../../redux/ActionCreators/Total/total";
import "./TotalPopup.scss";
import { changeCheckButton } from './../../redux/ActionCreators/CheckButton/checkButton';

export const TotalPopup = () => {
  const { isPopupActive } = useSelector((state) => state.popup);
  const { isConfirmOrder } = useSelector((state) => state.total);
  const dispatch = useDispatch();

  return (
    <div
      className={`total-popup ${
        isPopupActive && isConfirmOrder === false ? "active" : ""
      }`}
    >
      <div className="total-popup__container">
        <p className="total-popup__heading">Подтвердить заказ</p>
        <div className="total-popup__buttons">
          <button
            className="total-popup__accept total-popup__button"
            onClick={() => {
              dispatch(changeConfirmOrder(true));
              dispatch(changeCheckButton('/order/total', 'Отменить'))
              dispatch(changePopupActive(false));
            }}
          >
            Подтвердить
          </button>
          <button
            className="total-popup__back total-popup__button"
            onClick={() => dispatch(changePopupActive(false))}
          >
            Вернуться
          </button>
        </div>
      </div>
    </div>
  );
};
