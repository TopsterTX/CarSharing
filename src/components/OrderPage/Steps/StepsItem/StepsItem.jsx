import React from "react";
import { NavLink } from "react-router-dom";
import "./StepsItem.scss";

export const StepsItem = ({ text, active, path, fill }) => {
  return (
    <li
      className={`steps-item ${active ? "active" : ""} ${fill ? "fill" : ""}`}
    >
      <NavLink to={path} className="steps-item__link">
        {text}
      </NavLink>
    </li>
  );
};
