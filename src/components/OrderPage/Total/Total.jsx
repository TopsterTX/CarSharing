import React, { useEffect } from "react";
import { Info } from "./Info/Info";
import { Car } from "./Car/Car";
import "./Total.scss";
import { TotalPopup } from "../../TotalPopup/TotalPopup";
import { useDispatch, useSelector } from "react-redux";
import { changeCheckButton } from "../../../redux/ActionCreators/CheckButton/checkButton";
import {
  getOrder,
  getOrderStatusId,
} from "./../../../redux/ActionCreators/Order/order";

export const Total = () => {
  const { isConfirmOrder } = useSelector((state) => state.total);
  const { isGetOrder, orderId } = useSelector((state) => state.order);
  const { path } = useSelector((state) => state.checkButton);
  const dispatch = useDispatch();

  useEffect(() => {
    if (path !== "/order/total") {
      dispatch(changeCheckButton("/order/total", "Заказать"));
    } else {
      return;
    }
  }, [path]);

  useEffect(() => {
    dispatch(getOrderStatusId());
  }, []);

  useEffect(() => {
    if (!isGetOrder && isConfirmOrder) {
      dispatch(getOrder(orderId));
    } else {
      return;
    }
  }, [isGetOrder, isConfirmOrder]);

  return (
    <section className="total">
      <div className="total__container">
        <Info />
        <Car />
        <TotalPopup />
      </div>
    </section>
  );
};
