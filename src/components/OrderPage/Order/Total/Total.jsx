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
          <span>Ульяновск, Нариманова 32</span>
        </div>
        <div className="total__price">
          <span>Цена: </span>
          <span> от 8 000 до 12 000 ₽</span>
        </div>
      </div>
      <button className="total__button">Выбрать модель</button>
    </section>
  );
};
