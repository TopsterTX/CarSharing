import React, { useEffect } from "react";
import "./DateRent.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  changeDateToOptions,
  changeDateFromOptions,
  choseDateRentOptions,
} from "./../../../../redux/ActionCreators/Options/options";
import {
  addCheckItem,
  addCheckResult,
} from "../../../../redux/ActionCreators/ChecklList/checkList";

export const DateRent = () => {
  const { dateFrom, dateTo, isChoseDateRent } = useSelector(
    (state) => state.options
  );
  const { listItems } = useSelector((state) => state.checkList);
  const dispatch = useDispatch();

  //*-------------------------------------------------------------
  //* Проверка и имзенение состояний
  useEffect(() => {
    checkHandler();
    if (dateFrom.length && dateTo.length > 1) {
      dispatch(choseDateRentOptions(true));
    } else if (isChoseDateRent) {
      dispatch(choseDateRentOptions(false));
    }
  }, [dateTo, dateFrom]);

  useEffect(() => {
    if (isChoseDateRent) {
      dispatch(addCheckResult(3, dateHandler() + " д"));
    } else {
      dispatch(addCheckResult(3, ''))
    }
  }, [isChoseDateRent]);
  //*-------------------------------------------------------------

  //*-------------------------------------------------------------
  //* Handler's
  const changeDateFromHandler = (e) => {
    dispatch(changeDateFromOptions(e.target.value));
  };

  const changeDateToHandler = (e) => {
    dispatch(changeDateToOptions(e.target.value));
  };

  const checkHandler = () => {
    if (listItems.some((el) => el.id == 3)) {
      return;
    } else {
      dispatch(addCheckItem(3, "Длительность аренды"));
    }
  };

  const dateHandler = () => {
    let res;
    let date1 = new Date(dateFrom);
    let date2 = new Date(dateTo);
    return (res = Math.ceil(
      Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24)
    ));
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
