import React from "react";
import { Slide } from "./Slide/Slide";
import "./Slider.scss";
import { Dots } from "./Dots/Dots";
import { useSelector } from "react-redux";

export const Slider = () => {
  const slider = useSelector((state) => state.slider);

  return (
    <section className={`slider ${slider.isHide ? "hide" : ""}`}>
      {slider.sliderData.map(el => {
        return (
          <Slide
            img={el.img}
            text={el.text}
            title={el.title}
            id={el.id}
            active={slider.slideNum === el.id ? true : false}
            value={slider.slideNum}
            dataLenght={slider.sliderData.length - 1}
            sliderData={slider.sliderData}
            key={el.id}
            bgButton={el.bgButton}
          />
        );
      })}
      <Dots sliderData={slider.sliderData} value={slider.slideNum} />
    </section>
  );
};
