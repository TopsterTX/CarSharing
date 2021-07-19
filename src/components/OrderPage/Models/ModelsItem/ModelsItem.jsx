import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  choseModel,
  unchoseModel,
} from "../../../../redux/ActionCreators/Cars/cars";
// import {
//   choseCar,
//   unchoseCar,
// } from "../../../../redux/ActionCreators/CheckList/checkList";
import { toggleCheckButtonDisable } from "../../../../redux/ActionCreators/CheckButton/checkButton";
import {
  changeActiveStep,
  changeFillStep,
} from "../../../../redux/ActionCreators/Steps/steps";
import "./ModelsItem.scss";

export const ModelsItem = ({
  price,
  model,
  car,
  img,
  active,
  id,
  isChoseModel,
}) => {
  const activeItem = useRef();

  const dispatch = useDispatch();

  if (isChoseModel === false) {
    dispatch(toggleCheckButtonDisable(true));
    dispatch(changeActiveStep(2, false));
    dispatch(changeFillStep(1, false));
  } else {
    dispatch(toggleCheckButtonDisable(false));
    dispatch(changeActiveStep(2, true));
    dispatch(changeFillStep(1, true));
  }
  const modelsItemActiveHandler = () => {
    dispatch(choseModel(id));
    // dispatch(choseCar(model, car));
  };

  const modelsItemDisableHandler = () => {
    dispatch(unchoseModel(id));
    // dispatch(unchoseCar());
  };
  return (
    <li
      className={`models-item ${active ? "active" : "disable"}`}
      onClick={() => {
        if (
          activeItem.current.classList.contains("disable") &&
          isChoseModel === false
        ) {
          modelsItemActiveHandler();
        } else if (
          activeItem.current.classList.contains("active") &&
          isChoseModel === true
        ) {
          modelsItemDisableHandler();
        }
      }}
      ref={activeItem}
    >
      <span className="models-item__model">{model}</span>
      <span className="models-item__price">{price}</span>
      <div className="models-item__image-block">
        <img
          src={img}
          alt=""
          className="models-item__image"
          width="256px"
          height="116px"
        />
      </div>
    </li>
  );
};
