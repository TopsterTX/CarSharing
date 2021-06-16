import React from "react";
import "./Arrow.scss";

export const Arrow = ({ className }) => {
  return (
    <div className="arrow">
      <div className={className}></div>
    </div>
  );
};
