import React from "react";
import { connect } from "react-redux";
import { ListItem } from "./ListItem/ListItem";
import "./TotalList.scss";

const TotalList = ({ totalList }) => {
    // console.log(totalList.listItems);
  return (
    <div className="total-list">
      {totalList.listItems.map((el, index) => {
          // console.log(el.head);
        return <ListItem head={el.head} result={el.result} key={index} />;
      })}
    </div>
  );
};

export default connect(({ totalList }) => ({ totalList }))(TotalList);
