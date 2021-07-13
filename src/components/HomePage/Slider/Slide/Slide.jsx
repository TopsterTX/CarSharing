import React from "react";
import "./Slide.scss";
import "../../../../vars.scss";
import leftArrow from "../../../../icons/leftArrow.svg";
import rightArrow from "../../../../icons/rightArrow.svg"
import { toggleSlide } from "../../../../redux/ActionCreators/Slider/slider";
import { useDispatch } from "react-redux";

export const Slide = ({
  img,
  title,
  text,
  active,
  value,
  dataLenght,
  bgButton,
}) => {

  const dispatch = useDispatch()

  const arrowLeftHandler = () => {
    if (value > 0) {
      return dispatch(toggleSlide(value - 1));
    } else if (value <= 0) {
      return dispatch(toggleSlide(dataLenght));
    }
  };

  const arrowRightHandler = () => {
    if (value < dataLenght) {
      return dispatch(toggleSlide(value + 1));
    } else if (value >= dataLenght) {
      return dispatch(toggleSlide(0));
    }
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
          <img src={leftArrow} />
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
          <img src={rightArrow} />
        </div>
      </div>
    </section>
  );
};
