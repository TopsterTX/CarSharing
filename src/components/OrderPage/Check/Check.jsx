import React from "react";
import CheckButton from '../CheckButton/CheckButton'
import "./Check.scss";

export const Check = () => {
  return (
    <section className="check">
      <div className="check__wrapper">
        <div className="check__title">Ваш заказ:</div>
        <div className="check__point">
          <span>Пункт выдачи</span>
          <span></span>
          <span>Ульяновск, Нариманова 32</span>
        </div>
        <div className="check__price">
          <span>Цена: </span>
          <span> от 8 000 до 12 000 ₽</span>
        </div>
      </div>
      <CheckButton />
    </section>
  );
};
