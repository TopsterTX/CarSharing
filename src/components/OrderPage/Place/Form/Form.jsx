import React, { useEffect } from "react";
import "./Form.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  changePoint,
  changeCity,
  choseAddress,
  getCities,
  getPoints,
} from "../../../../redux/ActionCreators/Place/place";
import { City } from "./City/City";
import { Point } from "./Point/Point";

export const Form = () => {
  const { city, point, isChoseAddress, cities, points } = useSelector(
    (state) => state.form
  );
  const dispatch = useDispatch();

  //*--------------------------------------------------------
  //* Проверка и изменение состояний

  useEffect(() => {
    dispatch(getCities());
    dispatch(getPoints());
  }, []);


  useEffect(() => {
    if (city > 1) {
      dispatch(choseAddress(true));
    } else if (isChoseAddress) {
      dispatch(choseAddress(false));
    }
  }, [city]);
  //*--------------------------------------------------------

  //*--------------------------------------------------------
  //* Handler's

  const changeHandler = (e) => {
    dispatch(changeCity(e.target.value));
    if (e.target.value > 1) {
      dispatch(choseAddress(true));
    } else {
      dispatch(choseAddress(false));
    }
  };

  //*--------------------------------------------------------

  return (
    <form action="" className="form">
      <div className="form__container">
        <div className="form__city">
          <span className="city">Город</span>
          <input
            type="text"
            className="form__input"
            value={city}
            placeholder="Начните вводить город ..."
            onChange={(e) => changeHandler(e)}
            list="city"
          />
          <datalist id="city">
            {cities.map((el) => {
              return <City city={el.name} key={el.id} />;
            })}
          </datalist>
        </div>
        <div className="form__point">
          <span className="point">Пункт выдачи</span>
          <input
            type="text"
            className="form__input"
            placeholder="Начните вводить пункт ..."
            value={point}
            onChange={(e) => dispatch(changePoint(e.target.value))}
            list="point"
          />
          <datalist id="point">
            {points.map((el) => {
              if (el.cityId === null) {
                return;
              } else if (el.cityId.name === city) {
                return <Point point={el.address} key={el.id} />;
              }
            })}
          </datalist>
        </div>
      </div>
    </form>
  );
};
