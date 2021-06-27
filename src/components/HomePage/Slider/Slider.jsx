import React, { useState, useEffect } from "react";
import { ContentSlider } from "./ContentSlider/ContentSlider";
import { Arrow } from "./Arrow/Arrow";
import { Carousel } from "react-responsive-carousel";
import "./Slider.scss";

export const Slider = () => {
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
    {
      text: "LOREM",
      title: "LOREM",
      id: 4,
    },
  ];

  return (
    <section className="slider">
      <Carousel>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
          necessitatibus molestias sapiente sit. Ex atque sed eum molestias
          magnam tempora molestiae necessitatibus aperiam. Reiciendis
          temporibus, aperiam cumque corrupti adipisci tempore.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit aliquam
          id non sed nam deleniti, earum rerum officia molestias quae error
          illum laboriosam eligendi perspiciatis soluta iusto doloremque
          incidunt officiis!
        </div>
      </Carousel>
    </section>
  );
};
