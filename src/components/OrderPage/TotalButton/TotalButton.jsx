import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import './TotalButton.scss'


const TotalButton = ({ totalButton }) => {
    console.log(totalButton.totalButton);
  return (
    <NavLink to={totalButton.totalButton.path} className="total-button">
      {totalButton.totalButton.text}
    </NavLink>
  );
};

export default connect(({ totalButton }) => ({ totalButton }))(TotalButton);
