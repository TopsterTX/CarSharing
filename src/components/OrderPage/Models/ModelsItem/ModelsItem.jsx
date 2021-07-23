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
  id,
  imgPath,
  isChoseModel,
  imgMime,
  imgName,
}) => {
  const item = useRef();
  const dispatch = useDispatch();
  let src;
  //*-------------------------------------------------
  //* Handler's

  (function imageHandler() {
    if (imgPath.indexOf("/files") !== -1) {
      src = `https://api-factory.simbirsoft1.com${imgPath}`;
    } else {
      src = imgPath;
    }
  })();

  const modelsItemActiveHandler = () => {
    item.current.classList.remove("disable");
    item.current.classList.add("active");
    dispatch(choseModel(id));
  };

  const modelsItemDisableHandler = () => {
    item.current.classList.remove("active");
    item.current.classList.add("disable");
    dispatch(unchoseModel(id));
  };

  //*--------------------------------------------------

  return (
    <li
      className={`models-item disable`}
      onClick={() => {
        if (
          item.current.classList.contains("disable") &&
          isChoseModel === false
        ) {
          modelsItemActiveHandler();
        } else if (
          item.current.classList.contains("active") &&
          isChoseModel === true
        ) {
          modelsItemDisableHandler();
        }
      }}
      ref={item}
    >
      <span className="models-item__model">{model}</span>
      <span className="models-item__price">{price}</span>
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
