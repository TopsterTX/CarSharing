import React from "react";

import { connect } from "react-redux";
import ModelsItem from "../ModelsItem/ModelsItem";
import "./ModelsList.scss";

const ModelsList = ({ cars }) => {
  console.log(cars.isChoseModel);
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

export default connect(({ cars }) => ({ cars }))(ModelsList);
