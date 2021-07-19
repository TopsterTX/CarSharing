import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StepsItem } from "./StepsItem/StepsItem";
import "./Steps.scss";
import { changeDisable } from "./../../../redux/ActionCreators/Steps/steps";

export const Steps = () => {
  const dispatch = useDispatch();
  const steps = useSelector((state) => state.steps.steps);
  const { isChoseAddress } = useSelector((state) => state.form);

  return (
    <ul className="steps">
      <div className="steps__wrapper">
        {steps.map((el) => {
          return (
            <StepsItem
              text={el.text}
              path={el.path}
              key={el.id}
              active={el.active}
              fill={el.fill}
            />
          );
        })}
      </div>
    </ul>
  );
};
