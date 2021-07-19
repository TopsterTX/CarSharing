import React from "react";
import "./Form.scss";
import { useSelector, useDispatch } from "react-redux";
import { changePoint } from "../../../../redux/ActionCreators/Form/form";
import { changeCity } from "./../../../../redux/ActionCreators/Form/form";
import { choseAddress } from "../../../../redux/ActionCreators/Form/form";
import {
  changeDisable,
  changeFill,
  changeFillStep,
} from "./../../../../redux/ActionCreators/Steps/steps";
import { toggleCheckButtonDisable } from "../../../../redux/ActionCreators/CheckButton/checkButton";
import { changeActiveStep } from "./../../../../redux/ActionCreators/Steps/steps";

export const Form = () => {
  const { city, point, isChoseAddress } = useSelector((state) => state.form);
  const dispatch = useDispatch();

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
    if (e.target.value > 1) {
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
          <div className="form__list">
            <input
              type="text"
              className="form__input"
              value={city}
              onChange={(e) => changeHandler(e)}
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
              onChange={(e) => dispatch(changePoint(e.target.value))}
            />
          </div>
        </div>
      </div>
    </form>
  );
};
