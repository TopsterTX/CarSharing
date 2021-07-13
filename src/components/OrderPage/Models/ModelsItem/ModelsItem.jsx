import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { choseModel as actionChoseModel } from "../../../../redux/Reducers/Cars/cars";
import { unchoseModel as actionUnchoseModel } from "../../../../redux/Reducers/Cars/cars";
import {
  choseCar as actionChoseCar,
  unchoseCar,
} from "../../../../redux/Reducers/TotalList/totalList";
import { unchoseCar as actionUnchoseCar } from "../../../../redux/Reducers/TotalList/totalList";
import "./ModelsItem.scss";

const ModelsItem = ({
  price,
  model,
  car,
  img,
  active,
  index,
  id,
  choseModel,
  unchoseModel,
  choseCar,
  isChoseModel,
  unchoseCar,
}) => {
  const activeItem = useRef();
  useEffect(() => {
    console.log(activeItem.current);
  }, []);

  const modelsItemActiveHandler = () => {
    if (index === id) {
      return choseModel(id);
    }
  };

  const modelsItemDisableHandler = () => {
    if (index === id) {
      return unchoseModel(id);
    }
  };
  console.log(isChoseModel);
  return (
    <li
      className={`models-item ${active ? "active" : "disable"}`}
      onClick={() => {
        if (
          activeItem.current.classList.contains("disable") &&
          isChoseModel === false
        ) {
          modelsItemActiveHandler();
          choseCar(model, car);
        } else if (
          activeItem.current.classList.contains("active") &&
          isChoseModel === true
        ) {
          modelsItemDisableHandler();
          unchoseCar();
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

export default connect(({}) => ({}), {
  choseModel: actionChoseModel,
  unchoseModel: actionUnchoseModel,
  choseCar: actionChoseCar,
  unchoseCar: actionUnchoseCar,
})(ModelsItem);
