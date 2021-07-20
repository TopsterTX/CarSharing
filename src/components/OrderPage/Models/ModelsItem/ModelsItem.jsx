import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import {
  choseModel,
  unchoseModel,
} from "../../../../redux/ActionCreators/Cars/cars";

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

  //*-------------------------------------------------
  //* Handler's

  const modelsItemActiveHandler = () => {
    dispatch(choseModel(id));
  };

  const modelsItemDisableHandler = () => {
    dispatch(unchoseModel(id));
  };

  //*--------------------------------------------------

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
