import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Form } from "./Form/Form";
import { Maps } from "./Map/Maps";
import "./Place.scss";
import { changeCheckButton } from "../../../redux/ActionCreators/CheckButton/checkButton";
import { changeActiveStep } from './../../../redux/ActionCreators/Steps/steps';

export const Place = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeCheckButton("/order/models", "Выберите модель"));
    dispatch(changeActiveStep(0, true));
  }, []);

  return (
    <section className="place">
      <div className="place__container">
        <Form />
        <Maps />
      </div>
    </section>
  );
};
