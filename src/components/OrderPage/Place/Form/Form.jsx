import React from "react";
import { connect } from "react-redux";
import { changeCity as actionChangeCity } from "../../../../redux/Reducers/Form/form";
import { changePoint as actionChangePoint } from "../../../../redux/Reducers/Form/form";
import "./Form.scss";

const Form = ({ form, changeCity, changePoint }) => {
  return (
    <form action="" className="form">
      <div className="form__container">
        <div className="form__city">
          <span className="city">Город</span>
          <div className="form__list">
            <input
              type="text"
              className="form__input"
              value={form.city}
              onChange={(e) => changeCity(e.target.value)}
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
              value={form.point}
              onChange={(e) => changePoint(e.target.value)}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default connect(({ form }) => ({ form }), {
  changeCity: actionChangeCity,
  changePoint: actionChangePoint,
})(Form);
