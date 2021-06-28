import React from "react";
import "./Slide.scss";

export const Slide = ({ img, title, text, active, setValue, value, dataLenght }) => {
  const arrowLeftHandler = () => {
    if (value > 0) {
      return setValue(value - 1);
    } else if (value <= 0) {
      return setValue(dataLenght);
    }
    console.log("left", value);
  };

  const arrowRightHandler = () => {
    if (value < dataLenght) {
      return setValue(value + 1);
    } else if (value >= dataLenght) {
      return setValue(0);
    }
    console.log("right", value);
  };

  return (
    <section className={`slide ${active ? "active" : ""}`}>
      <img src={img} alt="" className="slide__image" />
      <div className="slide__wrapper">
        <div
          className="slide__arrow slide__arrow--left"
          onClick={() => {
            arrowLeftHandler();
          }}
        />
        <div className="slide__content">
          <h2>{title}</h2>
          <p>{text}</p>
          <button className="slide__button">Подробнее</button>
        </div>
        <div
          className="slide__arrow slider__arrow--right"
          onClick={() => {
            arrowRightHandler();
          }}
        />
      </div>
    </section>
  );
};
