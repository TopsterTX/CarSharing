import React from "react";
import { NavLink } from "react-router-dom";
import "./Content.scss";

export const Content = () => {
  return (
    <section className="content">
      <div className="content__container">
        <h1 className="content__title">
          <span className="content__subtitle">Каршеринг</span>
          <span className="content__name">Need for drive</span>
        </h1>
        <p className="content__text">Поминутная аренда авто твоего города</p>
      </div>
      <NavLink to='/order/place' className="content__button order__total-button">Забронировать</NavLink>
    </section>
  );
};
