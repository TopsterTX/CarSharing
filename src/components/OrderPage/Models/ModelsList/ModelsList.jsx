import React from "react";
import { useSelector } from "react-redux";
import { ModelsItem } from "../ModelsItem/ModelsItem";
import "./ModelsList.scss";

export const ModelsList = () => {
  const { cars } = useSelector((state) => state.cars);

  return (
    <ul className="models-list">
      {cars.map((car) => {
        if (car.thumbnail.mimetype == "image/png") {
          return (
            <ModelsItem
              car={car}
              isChoseModel={cars.isChoseModel}
              key={car.id}
            />
          );
        } else {
          return;
        }
      })}
    </ul>
  );
};
