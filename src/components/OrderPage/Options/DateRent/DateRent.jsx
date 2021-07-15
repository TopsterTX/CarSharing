import React from "react";
import "./DateRent.scss";

export const DateRent = () => {
  return (
    <section className="options-date-rent">
      <div className="options-date-rent__container">
        <span className="options-date-rent__heading">Дата аренды</span>
        <div className="options-date-rent__form">
          <span>С</span>
          <input type="date" className="options-date-rent__input " />
        </div>
        <div className="options-date-rent__form">
          <span>По</span>
          <input type="date" className="options-date-rent__input" value=' '/>
        </div>
      </div>
    </section>
  );
};
