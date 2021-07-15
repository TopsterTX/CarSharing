import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./TotalButton.scss";

export const TotalButton = () => {
  const {path, text} = useSelector((state) => (state.totalButton.totalButton));
  return (
    <NavLink to={path} className="total-button">
      {text}
    </NavLink>
  );
};
