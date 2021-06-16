import React from "react";
import { ContentSlider } from "./content_slider/ContentSlider";
import { Arrow } from "./arrow/Arrow";
import "./Slider.scss";

export const Slider = () => {
  return (
    <section className="slider">
      <div className="slider__container">
        <Arrow className='arrow arrow--left'/>
        <ContentSlider />
        <Arrow className='arrow arrow--right'/>
      </div>
    </section>
  );
};
