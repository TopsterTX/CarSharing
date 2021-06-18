import React from "react";
import "./Arrow.scss";

export const Arrow = ({ className, setValue, value, data }) => {
  return (
    <button
      className={className}
      onClick={(e) => {
        if (e.target.classList.contains("arrow__next") && value < data.lenght) {
          return setValue(value + 1);
        } else if (e.target.classList.contains("arrow__prev") && value !== 0) {
          return setValue(value - 1);
        } else if (value === data.lenght) {
          return setValue(0);
        } else if (value === 0) {
          return setValue(data.lenght);
        }
      }}
    ></button>
  );
};
