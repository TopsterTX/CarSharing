import React, { useState, useEffect } from "react";
import { ContentSlider } from "./content_slider/ContentSlider";
import { Arrow } from "./arrow/Arrow";
import "./Slider.scss";

export const Slider = () => {
  // Счётчик слайдера (какой именно слайд сейчас отображается)
  const [value, setValue] = useState(0);
  // Массив с информацией для слайда
  let sliderData = [
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


  return (
    <section className="slider">
      {/* Меняем className контейнера слайдера, добавляя модификатор чтобы отобразить нужную картинку */}
      <div
        className={`slider__wrapper slider__wrapper--${sliderData[value].id}`}
      >
        <div className="slider__container" id="slider-hidden">
          {/* В props стрелки передаю все необходимые параметры. 
              Логика переключения слайдера зависит от присвоенного класса*/}
          <Arrow
            className="arrow arrow__prev"
            setValue={setValue}
            value={value}
            data={sliderData}
          />
          {/* Отрисовываем содержимое слайдера в зависимости от value*/}
          <ContentSlider
            value={value}
            title={sliderData[value].title}
            text={sliderData[value].text}
            setValue={setValue}
            data={sliderData}
          />
          <Arrow
            className="arrow arrow__next"
            setValue={setValue}
            value={value}
            data={sliderData}
          />
        </div>
      </div>
    </section>
  );
};
