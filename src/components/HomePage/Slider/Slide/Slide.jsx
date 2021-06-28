import React from "react";
import "./Slide.scss";
import '../../../../vars.scss'

export const Slide = ({
  img,
  title,
  text,
  active,
  setValue,
  value,
  dataLenght,
  bgButton,
}) => {
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
      <div className="slide__image">
        <img src={img} alt="" />
      </div>
      <div className="slide__wrapper">
        <div
          className="slide__arrow slide__arrow--left"
          onClick={() => {
            arrowLeftHandler();
          }}
        >
          <span />
        </div>
        <div className="slide__content">
          <h2 className="slide__title">{title}</h2>
          <p className="slide__text">{text}</p>
          <button
            className="slide__button"
            style={{ background: `${bgButton}` }}
          >
            Подробнее
          </button>
        </div>
        <div
          className="slide__arrow slide__arrow--right"
          onClick={() => {
            arrowRightHandler();
          }}
        >
          <span />
        </div>
      </div>
    </section>
  );
};
