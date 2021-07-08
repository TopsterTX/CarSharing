import React from "react";
import "./Addons.scss";

export const Addons = () => {
  return (
    <section className="options-addons">
      <div className="options-addons__container">
        <span className="options-addons__heading">Доп. услуги</span>
        <ul className="options-addons__list">
          <li className="options-addons__item">
            <input
              type="checkbox"
              className="options-addons__input"
              id="addons-input-1"
            />
            <label
              htmlFor="addons-input-1"
              onClick={(e) => e.target.classList.toggle("active")}
            >
              Полный бак, 500₽
            </label>
          </li>
          <li className="options-addons__item">
            <input
              type="checkbox"
              className="options-addons__input"
              id="addons-input-2"
            />
            <label
              htmlFor="addons-input-2"
              onClick={(e) => e.target.classList.toggle("active")}
            >
              Детское кресло, 200₽
            </label>
          </li>
          <li className="options-addons__item">
            <input
              type="checkbox"
              className="options-addons__input"
              id="addons-input-3"
            />
            <label
              htmlFor="addons-input-3"
              onClick={(e) => e.target.classList.toggle("active")}
            >
              Правый руль, 1600₽
            </label>
          </li>
        </ul>
      </div>
    </section>
  );
};
