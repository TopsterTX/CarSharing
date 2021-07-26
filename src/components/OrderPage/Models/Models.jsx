import React, { useEffect, useState } from "react";
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
import { getCars, addActiveKey } from "../../../redux/ActionCreators/Cars/cars";
import { Loader } from "./../../Loader/Loader";
import {
  addCheckItem,
  addCheckResult,
} from "../../../redux/ActionCreators/ChecklList/checkList";
import { deleteColors } from "../../../redux/ActionCreators/Options/options";

export const Models = () => {
  const dispatch = useDispatch();
  const { isChoseModel, cars, choseCar } = useSelector((state) => state.cars);
  const { listItems } = useSelector((state) => state.checkList);

  //*-------------------------------------------------
  //* Проверка и изменения состояний

  useEffect(() => {
    dispatch(changeCheckButton("/order/options", "Дополнительно"));
    checkHandler();
    dispatch(deleteColors());
  }, []);

  useEffect(() => {
    if (cars.length === 0) {
      dispatch(getCars());
    } else {
      return;
    }
  }, [cars]);

  useEffect(() => {
    if (isChoseModel === false) {
      dispatch(deleteColors());
      dispatch(toggleCheckButtonDisable(true));
      dispatch(changeActiveStep(2, false));
      dispatch(changeFillStep(1, false));
      dispatch(addCheckResult(1, ""));
    } else {
      dispatch(toggleCheckButtonDisable(false));
      dispatch(changeActiveStep(2, true));
      dispatch(changeFillStep(1, true));
      dispatch(addCheckResult(1, choseCar.name));
    }
  }, [isChoseModel]);

  //*-------------------------------------------------
  //*-------------------------------------------------
  //* Handler's
  const checkHandler = () => {
    if (listItems.some((el) => el.id == 1)) {
      return;
    } else {
      dispatch(addCheckItem(1, "Модель"));
    }
  };

  return (
    <section className="models">
      <div className="models__container">
        <ModelsFilter />
        {cars ? <ModelsList /> : <Loader />}
      </div>
    </section>
  );
};
