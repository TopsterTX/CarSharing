import React, { useState, useEffect } from "react";
import { ContentSlider } from "./ContentSlider/ContentSlider";
import { Arrow } from "./Arrow/Arrow";
import { Carousel } from "react-responsive-carousel";
import {Slide} from './Slide/Slide'
import "./Slider.scss";

export const Slider = () => {
  let sliderData = [
    {
      img: 'https://www.nastol.com.ua/download.php?img=201705/1920x1200/nastol.com.ua-226206.jpg',
      text: "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.",
      title: "Бесплатная парковка",
      id: 0,
    },
    {
      img: 'https://forum.awd.ru/gallery/images/upload/224/007/2240077493520d925efcc3146f71faf7.jpg',
      text: "Полная страховка страховка автомобиля",
      title: "Страховка",
      id: 1,
    },
    {
      img: 'https://s3.nat-geo.ru/images/2020/10/4/a056499dce954c7daaa84e28f6ed8a6c.max-2500x1500.jpg',
      text: "Полный бак на любой заправке города за наш счёт",
      title: "Бензин",
      id: 2,
    },
    // {
    //   text: "Автомобиль проходит еженедельное TO",
    //   title: "Обслуживание",
    //   id: 3,
    // },
    // {
    //   text: "LOREM",
    //   title: "LOREM",
    //   id: 4,
    // },
  ];

  return (
    <section className="slider">
      <Carousel autoPlay>
        {sliderData.map((el, index) => {
          return(
            <Slide img={el.img} title={el.title} text={el.text} key={index}/>
          )
        })}
      </Carousel>
    </section>
  );
};
