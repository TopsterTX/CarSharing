import React from "react";
import { NavLink } from "react-router-dom";
import './StepsItem.scss'

export const StepsItem = ({text, isFilled, isOpen, path}) => {
  return (
    <li className="steps-item">
      <NavLink to={path} className={`steps-item__link ${isOpen ? 'active' : ''} ${isFilled ? 'fill' : ''}`}>
        {text}
      </NavLink>
    </li>
  );
};
