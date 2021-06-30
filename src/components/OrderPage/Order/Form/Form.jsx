import React from "react";
import "./Form.scss";

export const Form = () => {
  return (
    <form action="" className="form">
      <div className="form__container">
        <div className="form__city">
          <span className="city">Город</span>
          <input
            type="text"
            className="form__input"
          />
        </div>
        <div className="form__point">
          <span className="point">Пункт выдачи</span>
          <input
            type="text"
            className="form__input"
            placeholder="Начните вводить пункт ..."
          />
        </div>
      </div>
    </form>
  );
};
