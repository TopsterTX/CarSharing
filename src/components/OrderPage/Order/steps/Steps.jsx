import React from "react";
import "./Steps.scss";

export const Steps = () => {
  return (
    <ul className="steps">
      <div className="steps__wrapper">
        <li className="steps__item">
          <a href="" className="steps__link active">
            Местоположение
          </a>
        </li>
        <li className="steps__item">
          <a href="" className="steps__link">
            Модель
          </a>
        </li>
        <li className="steps__item">
          <a href="" className="steps__link">
            Дополнительно
          </a>
        </li>
        <li className="steps__item">
          <a href="" className="steps__link">
            Итого
          </a>
        </li>
      </div>
    </ul>
  );
};
