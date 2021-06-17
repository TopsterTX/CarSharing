import React from "react";
import { ContentSlider } from "./content_slider/ContentSlider";
import { Arrow } from "./arrow/Arrow";
import "./Slider.scss";

export const Slider = () => {
  return (
    <section className="slider">
      <div className="slider__container" id="slider-hidden">
        <Arrow className="arrow__left" />
        <ContentSlider />
        <Arrow className="arrow__right" />
      </div>
    </section>
  );
};
