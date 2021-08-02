import React from "react";
import "./Info.scss";
import { useSelector } from "react-redux";

export const Info = () => {
  const { choseCar } = useSelector((state) => state.cars);
  const { isConfirmOrder } = useSelector((state) => state.total);
  const { dateFrom } = useSelector((state) => state.options);

  return (
    <section className="total-info">
      <div className="total-info__container">
        <span className={`total-info__order ${isConfirmOrder ? "active" : ""}`}>
          Ваш заказ подтверждён
        </span>
        <span className="total-info__model">{choseCar.name}</span>
        <div className="total-info__number">
          <span>{choseCar.number}</span>
        </div>
        <p className="total-info__fuel">
          <span>Топливо </span>100%
        </p>
        <p className="total-info__date">
          <span>Доступна с </span>
          {new Date(dateFrom).toLocaleDateString()}
        </p>
      </div>
    </section>
  );
};
