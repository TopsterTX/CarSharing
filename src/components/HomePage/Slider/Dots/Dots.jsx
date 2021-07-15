import React from "react";
import "./Dots.scss";
import { toggleSlide } from "../../../../redux/ActionCreators/Slider/slider";
import { useDispatch } from "react-redux";

export const Dots = ({ sliderData, value }) => {
  const dispatch = useDispatch();

  const dotsHandler = (id) => {
    return dispatch(toggleSlide(id));
  };

  return (
    <div className="dots">
      {sliderData.map(el => {
        return (
          <span
            id={`dot-${el.id}`}
            key={el.id}
            className={value === el.id ? "active" : ""}
            onClick={() => dotsHandler(el.id)}
          />
        );
      })}
    </div>
  );
};
