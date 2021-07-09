import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { changeConfirmOrder as actionChangeConfirmOrder } from "../../../redux/Reducers/Total/total";
import { changeCheckButton as actionChangeCheckButton } from "../../../redux/Reducers/CheckButton/checkButton";
import "./CheckButton.scss";

const CheckButton = ({
  checkButton,
  total,
  changeConfirmOrder,
  changeCheckButton,
}) => {
  const onClickHandler = () => {
    if (checkButton.checkButton.text === "Заказать") {
      return checkButton.checkButton.onClick(true);
    }
    return null;
  };

  const textHandler = () => {
    if (total.isConfirmOrder) {
      return "Отменить";
    }
    return checkButton.checkButton.text;
  };

  return (
    <NavLink
      to={checkButton.checkButton.path}
      className={`check-button ${total.isConfirmOrder ? "cancel" : ""}`}
      onClick={() => onClickHandler()}
    >
      {textHandler()}
    </NavLink>
  );
};

export default connect(({ checkButton, total }) => ({ checkButton, total }), {
  changeConfirmOrder: actionChangeConfirmOrder,
  changeCheckButton: actionChangeCheckButton,
})(CheckButton);
