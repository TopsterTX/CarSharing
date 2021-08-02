import React from "react";
import { CheckButton } from "../CheckButton/CheckButton";
import { useSelector } from "react-redux";
import "./Check.scss";
import { CheckItem } from "./CheckItem/CheckItem";

export const Check = () => {
  const { listItems, price } = useSelector((state) => state.checkList);

  return (
    <section className="check">
      <div className="check__wrapper">
        <div className="check__title">Ваш заказ:</div>
        {listItems.map((el) => {
          return <CheckItem el={el} key={el.id}/>;
        })}
        <div className="check__price">
          <span>Цена: </span>
          <span>{price}</span>
        </div>
      </div>
      <CheckButton />
    </section>
  );
};
