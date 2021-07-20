import React, { useEffect } from "react";
import { changeCheckButton } from "../../../redux/ActionCreators/CheckButton/checkButton";
import { ModelsList } from "./ModelsList/ModelsList";
import { ModelsFilter } from "./ModelsFilter/ModelsFilter";
import "./Models.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleCheckButtonDisable } from "../../../redux/ActionCreators/CheckButton/checkButton";
import {
  changeActiveStep,
  changeFillStep,
} from "../../../redux/ActionCreators/Steps/steps";

export const Models = () => {
  const dispatch = useDispatch();
  const { isChoseModel } = useSelector((state) => state.cars);

  //*-------------------------------------------------
  //* Проверка и изменения состояний

  useEffect(() => {
    dispatch(changeCheckButton("/order/options", "Дополнительно"));
  }, []);

  useEffect(() => {
    if (isChoseModel === false) {
      dispatch(toggleCheckButtonDisable(true));
      dispatch(changeActiveStep(2, false));
      dispatch(changeFillStep(1, false));
    } else {
      dispatch(toggleCheckButtonDisable(false));
      dispatch(changeActiveStep(2, true));
      dispatch(changeFillStep(1, true));
    }
  }, [isChoseModel]);

  //*-------------------------------------------------

  return (
    <section className="models">
      <div className="models__container">
        <ModelsFilter />
        <ModelsList />
      </div>
    </section>
  );
};
