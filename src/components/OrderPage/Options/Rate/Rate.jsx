import React from "react";
import './Rate.scss'

export const Rate = () => {
  return (
    <section className="options-rate">
      <div className="options-rate__container">
        <span className="options-rate__heading">Тариф</span>
        <ul className="options-rate__list">
          <li className="options-rate__item">Поминутно, 7 ₽/сутки</li>
          <li className="options-rate__item">На сутки, 1999 ₽/сутки</li>
        </ul>
      </div>
    </section>
  );
};
