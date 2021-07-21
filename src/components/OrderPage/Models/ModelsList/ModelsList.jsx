import React from "react";

import { useSelector } from "react-redux";
import {ModelsItem} from "../ModelsItem/ModelsItem";
import "./ModelsList.scss";

export const ModelsList = () => {
  const cars = useSelector((state) => state.cars);

  return (
    <ul className="models-list">
      {cars.cars.map(el => {
        return (
          <ModelsItem
            price={`${el.priceMin} - ${el.priceMax}`}
            model={el.name}
            img={el.thumbnail.path}
            id={el.id}
            car={el.car}
            isChoseModel={cars.isChoseModel}
            key={el.id}
          />
        );
      })}
    </ul>
  );
};
