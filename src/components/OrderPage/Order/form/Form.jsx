import React from "react";
import './Form.scss'

export const Form = () => {
  return (
    <form action="" className="order__form">
      <div className="order__form-container">
        <div className="order__form-city">
          <span className='city'>Город</span>
          <input type="text" className="order__form-input" />
        </div>
        <div className="order__form-out">
          <span className='out'>Пункт выдачи</span>
          <input
            type="text"
            className="order__form-input"
            placeholder="Начните вводить пункт ..."
          />
        </div>
      </div>
    </form>
  );
};
