import React from "react";
import "./DateRent.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  changeDateToOptions,
  changeDateFromOptions,
  choseDateRentOptions,
} from "./../../../../redux/ActionCreators/Options/options";

export const DateRent = () => {
  const { dateFrom, dateTo, isChoseDateRent } = useSelector(
    (state) => state.options
  );
  const dispatch = useDispatch();
  const changeDateFromHandler = (e) => {
    dispatch(changeDateFromOptions(e.target.value));
  };

  const changeDateToHandler = (e) => {
    dispatch(changeDateToOptions(e.target.value));

    if (dateFrom.length && dateTo.length !== "") {
      dispatch(choseDateRentOptions(true));
    } else {
      dispatch(choseDateRentOptions(false));
    }
  };

  return (
    <section className="options-date-rent">
      <div className="options-date-rent__container">
        <span className="options-date-rent__heading">Дата аренды</span>
        <div className="options-date-rent__form">
          <span>С</span>
          <input
            type="date"
            className="options-date-rent__input "
            value={dateFrom}
            onChange={(e) => changeDateFromHandler(e)}
          />
        </div>
        <div className="options-date-rent__form">
          <span>По</span>
          <input
            type="date"
            className="options-date-rent__input"
            value={dateTo}
            onChange={(e) => changeDateToHandler(e)}
          />
        </div>
      </div>
    </section>
  );
};
