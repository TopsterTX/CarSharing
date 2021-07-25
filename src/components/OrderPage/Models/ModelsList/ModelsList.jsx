import React from "react";
import { useSelector } from "react-redux";
import { ModelsItem } from "../ModelsItem/ModelsItem";
import "./ModelsList.scss";

export const ModelsList = () => {
  const { cars } = useSelector((state) => state.cars);

  return (
    <ul className="models-list">
      {cars.map((el) => {
        if (el.thumbnail.mimetype == "image/png") {
          return (
            <ModelsItem
              price={`${el.priceMin} - ${el.priceMax}`}
              model={el.name}
              imgPath={el.thumbnail.path}
              id={el.id}
              car={el.car}
              isChoseModel={cars.isChoseModel}
              key={el.id}
              imgMime={el.thumbnail.mimetype ? el.thumbnail.mimetype : null}
              imgName={el.thumbnail.originalname}
            />
          );
        } else {
          return;
        }
      })}
    </ul>
  );
};
