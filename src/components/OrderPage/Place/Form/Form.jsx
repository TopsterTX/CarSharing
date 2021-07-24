import React, { useEffect } from "react";
import "./Form.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  changePoint,
  changeCity,
  choseAddress,
} from "../../../../redux/ActionCreators/Form/form";

export const Form = () => {
  const { city, point, isChoseAddress } = useSelector((state) => state.form);
  const dispatch = useDispatch();

  //* ------------------------------------------------------
  //* Проверки и изменения состояний

  useEffect(() => {
    if (city.length > 1) {
      dispatch(choseAddress(true));
    } else if (isChoseAddress) {
      dispatch(choseAddress(false));
    }
  }, [city, isChoseAddress]);
  //*--------------------------------------------------------

  //*--------------------------------------------------------
  //* Handler's
  const changeHandlerCity = (e) => {
    dispatch(changeCity(e.target.value));
  };

  const changeHandlerPoint = (e) => {
    dispatch(changePoint(e.target.value));
  };
  //*--------------------------------------------------------

  return (
    <form action="" className="form">
      <div className="form__container">
        <div className="form__city">
          <span className="city">Город</span>
          <div className="form__list">
            <input
              type="text"
              className="form__input"
              placeholder="Начните вводить город ..."
              value={city}
              onChange={(e) => changeHandlerCity(e)}
            />
          </div>
        </div>
        <div className="form__point">
          <span className="point">Пункт выдачи</span>
          <div className="form__list">
            <input
              type="text"
              className="form__input"
              placeholder="Начните вводить пункт ..."
              value={point}
              onChange={(e) => changeHandlerPoint(e)}
            />
          </div>
        </div>
      </div>
    </form>
  );
};
