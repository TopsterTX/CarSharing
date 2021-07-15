import React from "react";
import "./Color.scss";

export const Color = () => {
  return (
    <section className="options-color">
      <div className="options-color__container">
        <span className="options-color__heading">Цвет</span>
        <ul className="options-color__list">
          <li className="options-color__item">Любой</li>
          <li className="options-color__item">Красный</li>
          <li className="options-color__item">Голубой</li>
        </ul>
      </div>
    </section>
  );
};
