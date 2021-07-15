import React, { useEffect } from "react";
import { Info } from "./Info/Info";
import { Car } from "./Car/Car";
import "./Total.scss";
import { TotalPopup } from "../../TotalPopup/TotalPopup";
import { useDispatch } from "react-redux";
import { changeCheckButton } from "../../../redux/ActionCreators/CheckButton/checkButton";

export const Total = () => {
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeCheckButton("/order/total", "Заказать"));
  }, []);

  return (
    <section className="total">
      <div className="total__container">
        <Info />
        <Car />
        <TotalPopup />
      </div>
    </section>
  );
};
