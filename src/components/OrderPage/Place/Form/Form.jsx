import React, { useEffect } from "react";
import "./Form.scss";
import { useSelector, useDispatch } from "react-redux";
import { changePoint } from "../../../../redux/ActionCreators/Form/form";
import { changeCity } from "./../../../../redux/ActionCreators/Form/form";
import { choseAddress } from "../../../../redux/ActionCreators/Form/form";

export const Form = () => {
  const { city, point } = useSelector((state) => state.form);
  const dispatch = useDispatch();

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
              onChange={(e) => dispatch(changeCity(e.target.value))}
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
