import React from "react";
import "./Form.scss";

export const Form = ({ city, point, setCity, setPoint }) => {
  return (
    <form action="" className="order__form">
      <div className="order__form-container">
        <div className="order__form-city">
          <span className="city">Город</span>
          <input
            type="text"
            className="order__form-input"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </div>
        <div className="order__form-point">
          <span className="point">Пункт выдачи</span>
          <input
            type="text"
            className="order__form-input"
            placeholder="Начните вводить пункт ..."
            value={point}
            onChange={(e) => {
              setPoint(e.target.value);
            }}
          />
        </div>
      </div>
    </form>
  );
};
