import React from "react";

import { useSelector } from "react-redux";
import {ModelsItem} from "../ModelsItem/ModelsItem";
import "./ModelsList.scss";

export const ModelsList = () => {
  const cars = useSelector((state) => state.cars);

  return (
    <ul className="models-list">
      {cars.cars.map((el, index) => {
        return (
          <ModelsItem
            price={el.price}
            model={el.model}
            img={el.img}
            active={el.active}
            id={el.id}
            index={index}
            car={el.car}
            isChoseModel={cars.isChoseModel}
            key={index}
          />
        );
      })}
    </ul>
  );
};
