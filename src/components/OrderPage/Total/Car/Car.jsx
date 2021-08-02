import React from "react";
import { useSelector } from "react-redux";
import "./Car.scss";

export const Car = () => {
  const { choseCar } = useSelector((state) => state.cars);
  let src;
  (function imageHandler() {
    if (choseCar.thumbnail.path.indexOf("/files") !== -1) {
      src = `https://api-factory.simbirsoft1.com${choseCar.thumbnail.path}`;
    } else {
      src = choseCar.thumbnail.path;
    }
  })();

  return <img src={src} width="256px" height="116px" className="total-car" />;
};
