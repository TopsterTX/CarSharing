import React, { useState, useEffect, useRef } from "react";
import { Slide } from "./Slide/Slide";
import { toggleSlide as actionToggleSlide } from "../../../redux/Reducers/Slider/slider";
import "./Slider.scss";
import { Dots } from "./Dots/Dots";
import { connect } from "react-redux";

const Slider = ({toggleSlide, slider}) => {
  

  return (
    <section className={`slider ${slider.isHide ? 'hide': ''}`}>
      {slider.sliderData.map((el, index) => {
        return (
          <Slide
            img={el.img}
            text={el.text}
            title={el.title}
            id={el.id}
            active={slider.slideNum === el.id ? true : false}
            setValue={toggleSlide}
            value={slider.slideNum}
            dataLenght={slider.sliderData.length - 1}
            sliderData={slider.sliderData}
            key={index}
            bgButton={el.bgButton}
          />
        );
      })}
      <Dots sliderData={slider.sliderData} value={slider.slideNum} setValue={toggleSlide} />
    </section>
  );
};


//* Переменные из redux называются иначе потому что до redux пользоватлся useState
export default connect(
  ({slider}) => ({slider}),
  {
    toggleSlide: actionToggleSlide,
  }
)(Slider)
