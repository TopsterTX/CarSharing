import React from "react";
import "./ListItem.scss";

export const ListItem = ({ head, result }) => {
  return (
    <div className="list-item">
      <span>{head}</span>
      <span />
      <span>{result}</span>
    </div>
  );
};
