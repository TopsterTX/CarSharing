import React from "react";
import "./Loader.scss";

export const Loader = () => {
  return (
    <div className="loader__wrapper">
      <div className="loader__bg">
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
