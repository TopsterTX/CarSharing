import React from "react";
import "./Dots.scss";
import { toggleSlide } from "../../../../redux/ActionCreators/Slider/slider";
import { useDispatch } from "react-redux";

export const Dots = ({ sliderData, value }) => {
  const dispatch = useDispatch();

  const dotsHandler = (index) => {
    return dispatch(toggleSlide(index));
  };

  return (
    <div className="dots">
      {sliderData.map((el, index) => {
        return (
          <span
            id={`dot-${el.id}`}
            key={index}
            className={value === index ? "active" : ""}
            onClick={() => dotsHandler(index)}
          />
        );
      })}
    </div>
  );
};
