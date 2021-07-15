import { TOGGLE_SLIDE, SLIDER_HIDE } from "./../../Reducers/Slider/slider";

export const toggleSlide = (value) => {
  return {
    type: TOGGLE_SLIDE,
    payload: value,
  };
};

export const sliderHide = (bool) => {
  return {
    type: SLIDER_HIDE,
    payload: bool,
  };
};
