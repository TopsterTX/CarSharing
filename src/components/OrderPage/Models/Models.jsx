import React, { useEffect } from "react";
import { changeTotalButton } from "../../../redux/ActionCreators/TotalButton/totalButton";
import { ModelsList } from "./ModelsList/ModelsList";
import { ModelsFilter } from "./ModelsFilter/ModelsFilter";
import "./Models.scss";
import { useDispatch } from "react-redux";

export const Models = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeTotalButton("/order/option", "Дополнительно"));
  }, []);

  return (
    <section className="models">
      <div className="models__container">
        <ModelsFilter />
        <ModelsList />
      </div>
    </section>
  );
};
