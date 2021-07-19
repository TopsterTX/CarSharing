import React, { useEffect } from "react";
import { Colors } from "./Colors/Colors";
import { DateRent } from "./DateRent/DateRent";
import { Rates } from "./Rates/Rates";
import { Addons } from "./Addons/Addons";
import "./Options.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCheckButton,
  toggleCheckButtonDisable,
} from "../../../redux/ActionCreators/CheckButton/checkButton";
import { choseOptions } from "../../../redux/ActionCreators/Options/options";
import {
  changeActiveStep,
  changeFillStep,
} from "../../../redux/ActionCreators/Steps/steps";

export const Options = () => {
  const dispatch = useDispatch();
  const { isChoseRate, isChoseColor, isChoseDateRent, isChoseOptions } =
    useSelector((state) => state.options);

  const optionsHandlerActive = () => {
    if (isChoseOptions === false) {
      dispatch(choseOptions(true));
    }
  };

  const optionsHandlerDisable = () => {
    if(isChoseOptions === true){
      dispatch(choseOptions(false))
    }
  }

  if (isChoseRate && isChoseColor && isChoseDateRent === true) {
    optionsHandlerActive();
  } else {
    optionsHandlerDisable()
  }

  if (isChoseOptions === false) {
    dispatch(toggleCheckButtonDisable(true));
    dispatch(changeActiveStep(3, false));
    dispatch(changeFillStep(2, false));
  } else {
    dispatch(toggleCheckButtonDisable(false));
    dispatch(changeActiveStep(3, true));
    dispatch(changeFillStep(2, true));
  }

  useEffect(() => {
    dispatch(changeCheckButton("/order/total", "Итого"));
  }, []);
  return (
    <section className="options">
      <div className="options__container">
        <Colors />
        <DateRent />
        <Rates />
        <Addons />
      </div>
    </section>
  );
};
