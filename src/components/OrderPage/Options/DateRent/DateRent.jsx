import React, { useEffect } from "react";
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

  //*-------------------------------------------------------------
  //* Проверка и имзенение состояний
  useEffect(() => {
    if (dateFrom.length && dateTo.length > 1) {
      dispatch(choseDateRentOptions(true));
    } else if (isChoseDateRent) {
      dispatch(choseDateRentOptions(false));
    }
  }, [dateTo, dateFrom]);

  //*-------------------------------------------------------------

  //*-------------------------------------------------------------
  //* Handler's
  const changeDateFromHandler = (e) => {
    dispatch(changeDateFromOptions(e.target.value));
  };

  const changeDateToHandler = (e) => {
    dispatch(changeDateToOptions(e.target.value));
  };
  //*-------------------------------------------------------------

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
