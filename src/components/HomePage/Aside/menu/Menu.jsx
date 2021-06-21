import React from "react";
import "./Menu.scss";

export const Menu = ({ className, id, type }) => {
  return (
    <button
      className={className}
      id={id}
      onClick={(e) => {
        document.getElementById("nav").classList.toggle("active");
        document.body.classList.toggle("--lock");
        document.getElementById(id).classList.toggle("active");
        if (type === "slider") {
          document.getElementById("slider-hidden").classList.toggle("hidden");
        }
      }}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};
