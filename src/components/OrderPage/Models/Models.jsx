import React from "react";
import ModelsList from "./ModelsList/ModelsList";
import { ModelsFilter } from "./ModelsFilter/ModelsFilter";
import "./Models.scss";

export const Models = () => {
  return (
    <section className="models">
      <div className="models__container">
        <ModelsFilter />
        <ModelsList />
      </div>
    </section>
  );
};
