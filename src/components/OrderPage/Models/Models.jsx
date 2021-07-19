import React, { useEffect } from "react";
import {
  changeCheckButton,
  toggleCheckButtonDisable,
} from "../../../redux/ActionCreators/CheckButton/checkButton";
import { ModelsList } from "./ModelsList/ModelsList";
import { ModelsFilter } from "./ModelsFilter/ModelsFilter";
import "./Models.scss";
import { useDispatch } from "react-redux";

export const Models = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeCheckButton("/order/options", "Дополнительно"));
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
