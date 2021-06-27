import React from "react";
import "./ContentSlider.scss";
import { Dots } from "./Dots/Dots";

export const ContentSlider = ({ value, title, text, setValue, data }) => {
  return (
    <section className="slider-content">
      <div className="slider-content__container">
        <div className="slider-content__wrapper">
          <h2
            className={`slider-content__title slider-content__title--${value}`}
          >
            {title}
          </h2>
          <p className={`slider-content__text slider-content__text--${value}`}>
            {text}
          </p>
          <button
            className={`slider-content__button slider-content__button--${value}`}
          >
            Подробнее
          </button>
        </div>
      </div>

      <Dots setValue={setValue} value={value} data={data} />
    </section>
  );
};
