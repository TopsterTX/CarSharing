import React from "react";
import "./Dots.scss";

export const Dots = ({ setValue, value, data }) => {
  // Создал точки под слайдером
  return (
    <div className="dots">
      <div className="dots__container">
        {data.map((el, index) => {
          return (
            <span
              className={index === value ? "active" : ""}
              key={index}
              // При клике меняем value на значение index того элемента по которому кликнули,
              // вследствии чего меняется и сам слайд.
              onClick={(e) => {
                return setValue(index);
              }}
            ></span>
          );
        })}
      </div>
    </div>
  );
};
