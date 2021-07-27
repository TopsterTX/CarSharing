import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePopupActive } from "../../redux/ActionCreators/Popup/popup";
import { changeConfirmOrder } from "../../redux/ActionCreators/Total/total";
import "./TotalPopup.scss";
import { changeCheckButton } from "./../../redux/ActionCreators/CheckButton/checkButton";
import { v4 as uuidv4 } from "uuid";

export const TotalPopup = () => {
  const { isPopupActive } = useSelector((state) => state.popup);
  const { isConfirmOrder } = useSelector((state) => state.total);
  const { cities, points } = useSelector((state) => state.form);
  const { city, point } = useSelector((state) => state.form);
  const {dateTo, dateFrom} = useSelector(state => state.options)
  const { choseCar } = useSelector((state) => state.cars);
  const { listItem } = useSelector((state) => state.checkList);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(iDHepler(cities, city));
  }, []);
  //*------------------------------------------------------------
  //* Handler's

  const iDHepler = (arr, input) => {
    let res;
    arr.map((el) => {
      if (el.name === input) {
        return (res = el.id);
      }
    });
    return res;
  };

  const optionHelper = (arr, name) => {
    let res;
    arr.map((el) => {
      if (el.name === name) {
        return (res = el.result);
      }
    });
    return res;
  };

  const optionIdHelper = (arr, name) => {
    let res;
    arr.map((el) => {
      if (el.name === name) {
        return (res = el.id);
      }
    });
    return res;
  }

  const orderHelper = () => {
    return {
      orderStatusId: uuidv4(),
      cityId: iDHepler(cities, city),
      pointId: iDHepler(points, point),
      carId: choseCar.id,
      color: optionHelper(listItem, "Цвет"),
      dateFrom: dateFrom,
      dateTo: dateTo,
      rateId: optionHelper(listItem, "Тариф"),
      
    };
  };

  const clickHandler = () => {
    dispatch(changeConfirmOrder(true));
    dispatch(changeCheckButton("/order/total", "Отменить"));
    dispatch(changePopupActive(false));
  };

  //*------------------------------------------------------------

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
            onClick={() => clickHandler()}
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
