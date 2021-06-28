import React, { useState, useEffect, useRef } from "react";
import { ContentSlider } from "./ContentSlider/ContentSlider";
import { Arrow } from "./Arrow/Arrow";
import { Carousel } from "react-responsive-carousel";
import { Slide } from "./Slide/Slide";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slide1 from "../../../images/slider-1.jpg";
import slide2 from "../../../images/slider-2.jpg";
import slide3 from "../../../images/slider-3.jpg";
import slide4 from "../../../images/slider-4.jpg";
import "./Slider.scss";

export const Slider = () => {
  const sliderData = [
    {
      img: slide1,
      text: "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.",
      title: "Бесплатная парковка",
      id: 0,
    },
    {
      img: slide2,
      text: "Полная страховка страховка автомобиля",
      title: "Страховка",
      id: 1,
    },
    {
      img: slide3,
      text: "Полный бак на любой заправке города за наш счёт",
      title: "Бензин",
      id: 2,
    },
    {
      img: slide4,
      text: "Автомобиль проходит еженедельное TO",
      title: "Обслуживание",
      id: 3,
    },
  ];

  const [value, setValue] = useState(0);
  return (
    <section className="slider">
      {sliderData.map((el) => {
        return (
          <Slide
            img={el.img}
            text={el.text}
            title={el.title}
            id={el.id}
            active={value === el.id ? true : false}
            setValue={setValue}
            value={value}
            dataLenght={sliderData.length - 1}
          />
        );
      })}
    </section>
  );
};
