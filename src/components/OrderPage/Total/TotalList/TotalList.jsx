import React from "react";
import { useSelector } from "react-redux";
import { ListItem } from "./ListItem/ListItem";
import "./TotalList.scss";

export const TotalList = () => {
  const totalList = useSelector((state) => state.totalList);
  return (
    <div className="total-list">
      {totalList.listItems.map((el, index) => {
        return <ListItem head={el.head} result={el.result} key={index} />;
      })}
    </div>
  );
};
