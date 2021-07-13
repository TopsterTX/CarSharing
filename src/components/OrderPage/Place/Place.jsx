import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Form } from "./Form/Form";
import { Maps } from "./Map/Maps";
import "./Place.scss";
import { changeTotalButton } from "./../../../redux/ActionCreators/TotalButton/totalButton";

export const Place = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeTotalButton("/order/models", "Выберите модель"));
  }, []);

  return (
    <section className="place">
      <div className="place__container">
        <Form />
        <Maps />
      </div>
    </section>
  );
};
