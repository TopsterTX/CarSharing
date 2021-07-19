import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeRateOptions,
  choseRateOptions,
} from "../../../../redux/ActionCreators/Options/options";
import "./Rates.scss";

export const Rates = () => {
  const { isChoseRate, rates } = useSelector((state) => state.options);
  const dispatch = useDispatch();
  console.log(isChoseRate, rates);

  const clickHandler = (el) => {
    if (isChoseRate) {
      if (el.active) {
        dispatch(choseRateOptions(!isChoseRate));
        dispatch(changeRateOptions(el.id, !el.active));
      }
    } else {
      dispatch(changeRateOptions(el.id, !el.active));
      dispatch(choseRateOptions(!isChoseRate));
    }
  };

  return (
    <section className="options-rates">
      <div className="options-rates__container">
        <span className="options-rates__heading">Тариф</span>
        <ul className="options-rates__list">
          {rates.map((el) => {
            return (
              <li
                className={`options-rates__item ${el.active ? "active" : ""}`}
                onClick={() => clickHandler(el)}
              >{`${el.rate}, ${el.ratePrice}${el.postfix} `}</li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
