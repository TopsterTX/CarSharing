import React from "react";
import "./Dots.scss";

export const Dots = ({sliderData, value, setValue}) => {

  

  const dotsHandler = (index) => {
    
    return setValue(index)
  }

  return (
    <div className="dots">
      {sliderData.map((el, index) => {
        
        return (
          <span id={`dot-${el.id}`} key={index} className={value === index ? 'active' : ''} onClick={() => dotsHandler(index)} />
        )
      })}
    </div>
  );
};
