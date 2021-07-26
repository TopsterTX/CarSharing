import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeRateOptions,
  choseRateOptions,
} from "../../../../redux/ActionCreators/Options/options";
import {
  addCheckItem,
  addCheckResult,
} from "../../../../redux/ActionCreators/ChecklList/checkList";
import "./Rates.scss";

export const Rates = () => {
  const { isChoseRate, rates } = useSelector((state) => state.options);
  const { listItems } = useSelector((state) => state.checkList);
  const dispatch = useDispatch();
  //*-----------------------------------------------------
  //* Проверка и изменение состояний

  useEffect(() => {
    checkHandler();
  }, []);

  useEffect(() => {
    dispatch(
      addCheckResult(
        4,
        rates.map((el) => {
          if (el.active) {
            return el.rate;
          } else {
            return "";
          }
        })
      )
    );
  }, [isChoseRate]);
  //*-----------------------------------------------------
  //* Handler's

  const clickHandler = (el) => {
    if (isChoseRate && el.active) {
      dispatch(choseRateOptions(!isChoseRate));
      dispatch(changeRateOptions(el.id, !el.active));
    } else if (isChoseRate === false) {
      dispatch(changeRateOptions(el.id, !el.active));
      dispatch(choseRateOptions(!isChoseRate));
    }
  };

  const checkHandler = () => {
    if (listItems.some((el) => el.id == 4)) {
      return;
    } else {
      dispatch(addCheckItem(4, "Тариф"));
    }
  };

  //*-------------------------------------------------------
  return (
    <section className="options-rates">
      <div className="options-rates__container">
        <span className="options-rates__heading">Тариф</span>
        <ul className="options-rates__list">
          {rates.map((el) => {
            return (
              <li
                className={`options-rates__item ${el.active ? "active" : ""}`}
                key={el.id}
                onClick={() => clickHandler(el)}
              >
                {`${el.rate}, ${el.ratePrice}${el.postfix} `}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
