import React from "react";
import "./Arrow.scss";

export const Arrow = ({ className, setValue, id, val }) => {
  return (
    <button
      className={className}
      onClick={(e) => {
        if((e.target.classList.contains('arrow__next')) && val < 3){
          return setValue(val + 1)
        } else if((e.target.classList.contains('arrow__prev')) && val !== 0){
          return setValue(val - 1)
        }
      }}
    ></button>
  );
};
