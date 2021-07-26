import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import {
  choseModel,
  unchoseModel,
  choseCar,
  changeActiveCars,
} from "../../../../redux/ActionCreators/Cars/cars";

import "./ModelsItem.scss";

export const ModelsItem = ({ car, isChoseModel, active, id }) => {
  // console.log(car);
  const item = useRef();
  const dispatch = useDispatch();
  let src;
  //*-------------------------------------------------
  //* Handler's

  (function imageHandler() {
    if (car.thumbnail.path.indexOf("/files") !== -1) {
      src = `https://api-factory.simbirsoft1.com${car.thumbnail.path}`;
    } else {
      src = car.thumbnail.path;
    }
  })();
  const clickHandler = () => {
    if (item.current.classList.contains("disable") && isChoseModel === false) {
      modelsItemActiveHandler();
    } else {
      modelsItemDisableHandler();
    }
  };

  const modelsItemActiveHandler = () => {
    dispatch(changeActiveCars(id, !active));
    dispatch(choseModel());
    dispatch(choseCar(car));
  };

  const modelsItemDisableHandler = () => {
    dispatch(changeActiveCars(id, !active));
    dispatch(unchoseModel());
    dispatch(choseCar(""));
  };

  //*--------------------------------------------------
  console.log(isChoseModel);
  return (
    <li
      className={`models-item ${active ? "active" : "disable"}`}
      onClick={() => {
        if (active === false && isChoseModel === false) {
          modelsItemActiveHandler();
        } else if (active && isChoseModel) {
          modelsItemDisableHandler();
        }
      }}
      ref={item}
    >
      <span className="models-item__model">{car.name}</span>
      <span className="models-item__price">{`${car.priceMin} - ${car.priceMax}`}</span>
      <div className="models-item__image-block">
        <img
          src={src}
          alt="car"
          className="models-item__image"
          crossOrigin="anonymous"
          referrerPolicy="origin"
          width="256px"
          height="116px"
        />
      </div>
    </li>
  );
};
