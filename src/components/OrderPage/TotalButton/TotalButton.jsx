import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./TotalButton.scss";

export const TotalButton = () => {
  const totalButton = useSelector((state) => state.totalButton);
  return (
    <NavLink to={totalButton.totalButton.path} className="total-button">
      {totalButton.totalButton.text}
    </NavLink>
  );
};
