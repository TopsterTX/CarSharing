import React from "react";
import "./Form.scss";

export const Form = ({ options, actionChangeCity, actionChangePoint, disabled}) => {
  return (
    <form action="" className="order__form">
      <div className="order__form-container">
        <div className="order__form-city">
          <span className="city">Город</span>
          <input
            type="text"
            className="order__form-input"
            value={options.city}
            onChange={(e) => {
              actionChangeCity(e.target.value);
            }}
          />
        </div>
        <div className="order__form-point">
          <span className="point">Пункт выдачи</span>
          <input
            type="text"
            className="order__form-input"
            placeholder="Начните вводить пункт ..."
            value={options.point}
            onChange={(e) => {
              actionChangePoint(e.target.value);
            }}
            disabled={disabled}
          />
        </div>
      </div>
    </form>
  );
};
