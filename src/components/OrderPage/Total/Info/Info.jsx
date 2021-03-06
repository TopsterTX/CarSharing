import React from "react";
import "./Info.scss";
import { useSelector } from "react-redux";

export const Info = () => {
  const { isConfirmOrder } = useSelector((state) => state.total);
  return (
    <section className="total-info">
      <div className="total-info__container">
        <span className={`total-info__order ${isConfirmOrder ? "active" : ""}`}>
          Ваш заказ подтверждён
        </span>
        <span className="total-info__model">Hyndai, i30N</span>
        <div className="total-info__number">
          <span>К 761 НА 73</span>
        </div>
        <p className="total-info__fuel">
          <span>Топливо </span>100%
        </p>
        <p className="total-info__date">
          <span>Доступна с </span>12.06.2019 12:00
        </p>
      </div>
    </section>
  );
};
