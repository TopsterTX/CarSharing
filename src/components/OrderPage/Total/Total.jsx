import React from "react";
import { NavLink } from "react-router-dom";
import  TotalList  from "./TotalList/TotalList";
import "./Total.scss";

export const Total = () => {
  return (
    <section className="total">
      <div className="total__wrapper">
        <div className="total__title">Ваш заказ:</div>
        <TotalList/>
        <div className="total__price">
          <span>Цена: </span>
          <span> от 8 000 до 12 000 ₽</span>
        </div>
      </div>
      <NavLink to='/order/models' className="total__button">Выбрать модель</NavLink>
    </section>
  );
};
