import React from "react";
import "./Arrow.scss";

export const Arrow = ({ className, setValue, id, val }) => {
  return (
    <button
      className="arrow"
      onClick={() => {
        const arrowNext = document.getElementById("next");
        const arrowPrev = document.getElementById('prev')
        if (arrowNext.classList.contains('arrow__next')) {
          return setValue(val + 1);
        } else if (arrowPrev.classList.contains('arrow__prev')) {
          return setValue(val - 1);
        }
      }}
    >
      <div className={className} id={id}></div>
    </button>
  );
};
