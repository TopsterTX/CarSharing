import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "./Form/Form";
import { Maps } from "./Maps/Maps";
import "./Place.scss";
import {
  changeCheckButton,
  toggleCheckButtonDisable,
} from "../../../redux/ActionCreators/CheckButton/checkButton";
import {
  changeActiveStep,
  changeFillStep,
} from "./../../../redux/ActionCreators/Steps/steps";
import {
  getCities,
  getPoints,
} from "../../../redux/ActionCreators/Place/place";
import {
  addCheckItem,
  addCheckResult,
} from "./../../../redux/ActionCreators/ChecklList/checkList";

export const Place = () => {
  const dispatch = useDispatch();
  const { isChoseAddress } = useSelector((state) => state.form);
  const { address } = useSelector((state) => state.form);

  //*-----------------------------------------------------------------
  //* Проверка и изменения состояний

  useEffect(() => {
    dispatch(changeCheckButton("/order/models", "Выберите модель"));
    dispatch(changeActiveStep(0, true));
    dispatch(getCities());
    dispatch(getPoints());
  }, []);

  useEffect(() => {
    if (isChoseAddress) {
      dispatch(toggleCheckButtonDisable(false));
      dispatch(changeActiveStep(1, true));
      dispatch(changeFillStep(0, true));
    } else {
      dispatch(toggleCheckButtonDisable(true));
      dispatch(changeActiveStep(1, false));
      dispatch(changeFillStep(0, false));
      dispatch(addCheckResult(0, ""));
    }
  }, [isChoseAddress]);

  useEffect(() => {
    dispatch(addCheckResult(0, address));
  }, [address]);
  //*-----------------------------------------------------------------

  return (
    <section className="place">
      <div className="place__container">
        <Form />
        <Maps />
      </div>
    </section>
  );
};
