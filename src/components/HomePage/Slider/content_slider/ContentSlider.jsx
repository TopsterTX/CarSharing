import React from "react";
import "./ContentSlider.scss";
import { Dots } from "./dots/Dots";

export const ContentSlider = ({value}) => {
  return (
    <section className="slider-content">
      <div className="slider-content__container">
        <div className="slider-content__wrapper">
          <h2 className={`slider-content__title slider-content__title--${value}`}>Бесплатная парковка</h2>
          <p className={`slider-content__text slider-content__text--${value}`}>
            Оставляйте машину на платных городских парковках и разрешенных
            местах, не нарушая ПДД, а также в аэропортах.
          </p>
          <button className={`slider-content__button slider-content__button--${value}`}>Подробнее</button>
        </div>
      </div>
      <Dots />
    </section>
  );
};
