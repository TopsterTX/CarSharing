import React from "react";
import "./ModelsItem.scss";

export const ModelsItem = ({ price, model, img }) => {
  return (
    <li className="models-item">
      <span className="models-item__model">{model}</span>
      <span className="models-item__price">{price}</span>
      <div className='models-item__image-block'>
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
