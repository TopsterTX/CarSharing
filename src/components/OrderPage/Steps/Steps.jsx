import React from "react";
import { useSelector } from "react-redux";
import { StepsItem } from "./StepsItem/StepsItem";
import "./Steps.scss";

export const Steps = () => {
  const steps = useSelector((state) => state.steps);

  return (
    <ul className="steps">
      <div className="steps__wrapper">
        {steps.steps.map((el, index) => {
          return (
            <StepsItem
              text={el.text}
              path={el.path}
              key={index}
              isOpen={el.isOpen}
              isFilled={el.isFilled}
            />
          );
        })}
      </div>
    </ul>
  );
};
