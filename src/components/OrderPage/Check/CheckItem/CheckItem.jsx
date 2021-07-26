import React from "react";
import "./CheckItem.scss";

export const CheckItem = ({ el }) => {
  return (
    <div className="check-item">
      <span>{el.name}</span>
      <span></span>
      <span>{el.result}</span>
    </div>
  );
};
