import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changePopupActive } from "../../../redux/ActionCreators/Popup/popup";
import "./CheckButton.scss";

export const CheckButton = () => {
  const { text, path } = useSelector((state) => state.checkButton.checkButton);
  const { isConfirmOrder } = useSelector((state) => state.total);
  const dispatch = useDispatch();

  const onClickHandler = () => {
    if (text === "Заказать") {
      return dispatch(changePopupActive(true));
    }
    return null;
  };

  return (
    <NavLink
      to={path}
      className={`check-button ${isConfirmOrder ? "cancel" : ""}`}
      onClick={() => onClickHandler()}
    >
      {text}
    </NavLink>
  );
};
