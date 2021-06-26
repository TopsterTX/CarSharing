import React from "react";
import "./Total.scss";

export const Total = ( {disabled, setDisabled, city, point}) => {
  return (
    <section className="order__total">
      <div className="order__total-wrapper">
        <div className="order__total-title">Ваш заказ:</div>
        <div className="order__total-point">
          <span>Пункт выдачи</span>
          <span></span>
          <span>{`${city}, ${point}`}</span>
        </div>
        <div className="order__total-price">
          <span>Цена: </span>
          <span> от 8 000 до 12 000 ₽</span>
        </div>
      </div>
      <button className="content__button order__total-button" disabled={disabled}> Выбрать модель</button>
    </section>
  );
};
