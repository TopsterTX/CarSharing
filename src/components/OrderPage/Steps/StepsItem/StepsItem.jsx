import React from "react";
import { NavLink } from "react-router-dom";
import "./StepsItem.scss";

export const StepsItem = ({ text, disable, path }) => {
  return (
    <li className={`steps-item ${disable ? "disable" : ""}`}>
      <NavLink to={path} className={`steps-item__link`}>
        {text}
      </NavLink>
    </li>
  );
};
