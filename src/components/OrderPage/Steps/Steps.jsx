import React from "react";
import { connect } from "react-redux";
import "./Steps.scss";
import { StepsItem } from "./StepsItem/StepsItem";

const Steps = ({steps}) => {
  console.log(steps);
  return (
    <ul className="steps">
      <div className="steps__wrapper">
        {steps.steps.map((el, index) => {
          return <StepsItem text={el.text} path={el.path} key={index} isOpen={el.isOpen} isFilled={el.isFilled}/>
        })}
      </div>
    </ul>
  );
};

export default connect(
  ({steps}) => ({steps})
)(Steps)
