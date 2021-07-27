import React from "react";
import { useSelector } from "react-redux";
import { ModelsItem } from "../ModelsItem/ModelsItem";
import {Loader} from '../../../Loader/Loader'
import "./ModelsList.scss";

export const ModelsList = () => {
  const { cars, isChoseModel } = useSelector((state) => state.cars);

  return (
    <ul className="models-list">
      {!!cars.length ? cars.map(({ car, active, id }) => {
        if (car.thumbnail.mimetype == "image/png") {
          return (
            <ModelsItem
              car={car}
              isChoseModel={isChoseModel}
              key={car.id}
              active={active}
              id={id}
            />
          );
        } else {
          return;
        } 
      })
      : <Loader/>}
    </ul>
  );
};
