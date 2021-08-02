import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePopupActive } from "../../redux/ActionCreators/Popup/popup";
import { changeConfirmOrder } from "../../redux/ActionCreators/Total/total";
import {
  postOrder,
  getOrder,
  createOrderId,
  changeIsLoading,
} from "../../redux/ActionCreators/Order/order";
import "./TotalPopup.scss";
import { changeCheckButton } from "./../../redux/ActionCreators/CheckButton/checkButton";

import { Loader } from "./../Loader/Loader";
import { Redirect } from "react-router-dom";

export const TotalPopup = () => {
  const { isPopupActive } = useSelector((state) => state.popup);
  const { isConfirmOrder } = useSelector((state) => state.total);
  const { cities, points, city, point } = useSelector((state) => state.form);
  const { dateTo, dateFrom } = useSelector((state) => state.options);
  const { choseCar, price } = useSelector((state) => state.cars);
  const { listItems } = useSelector((state) => state.checkList);
  const { statusOrderId, isLoading, orderId } = useSelector(
    (state) => state.order
  );
  const dispatch = useDispatch();

  let order;
  useEffect(() => {
    dispatch(createOrderId(createIdOrderHandler()));
    orderHelper();
  }, []);

  //*------------------------------------------------------------
  //* Handler's

  const createIdOrderHandler = () => {
    let id = [];
    id.length = 24;
    id[0] = 5;
    for (let i = 1; i < id.length; i++) {
      id[i] = Math.floor(Math.random() * 10);
    }
    return id.toString().replace(/\,+/g, "");
  };

  const idCityHepler = (arr, input) => {
    let res;
    arr.map((el) => {
      if (el.name === input) {
        return (res = el.id);
      }
    });
    return res;
  };

  const idPointHelper = (arr, input) => {
    let res;
    arr.map((el) => {
      if (el.address === input) {
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
  };

  const orderHelper = () => {
    order = {
      orderStatusId: { id: statusOrderId },
      cityId: { id: idCityHepler(cities, city) },
      pointId: { id: idPointHelper(points, point) },
      carId: { id: choseCar.id },
      color: optionHelper(listItems, "Цвет"),
      dateFrom: new Date(dateFrom).getTime(),
      dateTo: new Date(dateTo).getTime(),
      rateId: { id: optionIdHelper(listItems, "Тариф").toString() },
      price: price,
      isFullTank: optionHelper(listItems, "Полный бак") === "Да" ? true : false,
      isNeedChildChair:
        optionHelper(listItems, "Детское кресло") === "Да" ? true : false,
      isRightWheel:
        optionHelper(listItems, "Правый руль") === "Да" ? true : false,
    };
    return order;
  };

  const clickHandler = () => {
    dispatch(changeIsLoading(true));
    dispatch(postOrder(orderHelper()));
    // dispatch(changeConfirmOrder(true));
    dispatch(changeCheckButton("/order/total", "Oтменить"));
    dispatch(changePopupActive(false));
  };

  //*------------------------------------------------------------

  return isLoading ? (
    <Loader />
  ) : isConfirmOrder ? (
    <Redirect to={`/order/total&id=${orderId}`} />
  ) : (
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
