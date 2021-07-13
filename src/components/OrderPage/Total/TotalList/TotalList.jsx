import React from "react";
import { choseCar as actionChoseCar } from "../../../../redux/Reducers/TotalList/totalList";
import { connect } from "react-redux";
import { ListItem } from "./ListItem/ListItem";
import "./TotalList.scss";

const TotalList = ({ totalList }) => {
  return (
    <div className="total-list">
      {totalList.listItems.map((el, index) => {
        return <ListItem head={el.head} result={el.result} key={index} />;
      })}
    </div>
  );
};

export default connect(({ totalList }) => ({ totalList }), {
  choseCar: actionChoseCar,
})(TotalList);
