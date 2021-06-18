import React, { useState } from "react";
import { ContentSlider } from "./content_slider/ContentSlider";
import { Arrow } from "./arrow/Arrow";
import "./Slider.scss";

export const Slider = () => {
  const [value, setValue] = useState(0);
  const data = [
    {
      text: "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.",
      title: "Бесплатная парковка",
      id: 0,
    },
    {
      text: "Полная страховка страховка автомобиля",
      title: "Страховка",
      id: 1,
    },
    {
      text: "Полный бак на любой заправке города за наш счёт",
      title: "Бензин",
      id: 2,
    },
    {
      text: "Автомобиль проходит еженедельное TO",
      title: "Обслуживание",
      id: 3,
    },
  ];
  console.log(value);
  return (
    <section className="slider">
      <div className={`slider__wrapper slider__wrapper--${data[value]}`}>
        <div className="slider__container" id="slider-hidden">
          <Arrow
            className="arrow arrow__next"
            setValue={setValue}
            value={value}
            data={data}
          />
          <ContentSlider
            value={value}
            title={data[value].title}
            text={data[value].text}
            setValue={setValue}
            data={data}
          />
          <Arrow
            className="arrow arrow__prev"
            setValue={setValue}
            value={value}
            data={data}
          />
        </div>
      </div>
    </section>
  );
};
