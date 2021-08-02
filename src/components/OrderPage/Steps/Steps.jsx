import React from "react";
import { useSelector } from "react-redux";
import { StepsItem } from "./StepsItem/StepsItem";
import "./Steps.scss";

export const Steps = () => {
  const { steps } = useSelector((state) => state.steps);
  const {isConfirmOrder} = useSelector(state => state.total)

  return ( 
    <ul className="steps">
      <div className="steps__wrapper">
        {isConfirmOrder ? <span>Заказ номер: </span> : steps.map((el) => {
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
