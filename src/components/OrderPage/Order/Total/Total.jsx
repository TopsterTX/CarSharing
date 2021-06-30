import React from "react";
import "./Total.scss";

export const Total = () => {
  return (
    <section className="total">
      <div className="total__wrapper">
        <div className="total__title">Ваш заказ:</div>
        <div className="total__point">
          <span>Пункт выдачи</span>
          <span></span>
          <span></span>
        </div>
        <div className="total__price">
          <span>Цена: </span>
          <span> от 8 000 до 12 000 ₽</span>
        </div>
      </div>
      <button className="content__button total__button">Выбрать модель</button>
    </section>
  );
};
