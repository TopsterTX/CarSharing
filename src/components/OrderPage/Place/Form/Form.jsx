import React, { useEffect } from "react";
import "./Form.scss";
import { useSelector, useDispatch } from "react-redux";
import { changePoint } from "../../../../redux/ActionCreators/Place/place";
import { changeCity } from "../../../../redux/ActionCreators/Place/place";
import { choseAddress } from "../../../../redux/ActionCreators/Place/place";
import {
  changeDisable,
  changeFill,
  changeFillStep,
} from "./../../../../redux/ActionCreators/Steps/steps";
import { toggleCheckButtonDisable } from "../../../../redux/ActionCreators/CheckButton/checkButton";
import { changeActiveStep } from "./../../../../redux/ActionCreators/Steps/steps";
import { getCities } from "../../../../redux/ActionCreators/Place/place";
import { City } from "./City/City";
import { Point } from "./Point/Point";
import { getPoints } from "./../../../../redux/ActionCreators/Place/place";

export const Form = () => {
  const { city, point, isChoseAddress, cities, points } = useSelector(
    (state) => state.form
  );
  const dispatch = useDispatch();

  console.log(city);

  useEffect(() => {
    dispatch(getCities());
    dispatch(getPoints());
    console.log(points);
  }, []);

  if (isChoseAddress) {
    dispatch(toggleCheckButtonDisable(false));
    dispatch(changeActiveStep(1, true));
    dispatch(changeFillStep(0, true));
  } else {
    dispatch(toggleCheckButtonDisable(true));
    dispatch(changeActiveStep(1, false));
    dispatch(changeFillStep(0, false));
  }

  const changeHandler = (e) => {
    dispatch(changeCity(e.target.value));
    if (e.target.value.length > 1) {
      dispatch(choseAddress(true));
    } else {
      dispatch(choseAddress(false));
    }
  };
  return (
    <form action="" className="form">
      <div className="form__container">
        <div className="form__city">
          <span className="city">Город</span>
          <input
            type="text"
            className="form__input"
            value={city}
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
          <datalist id="point">{/* {points.} */}</datalist>
        </div>
      </div>
    </form>
  );
};
