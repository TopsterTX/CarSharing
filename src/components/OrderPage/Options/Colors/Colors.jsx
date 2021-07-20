import React from "react";
import "./Colors.scss";
import { useSelector, useDispatch } from "react-redux";
import { changeColorOptions } from "../../../../redux/ActionCreators/Options/options";
import { choseColorOptions } from "../../../../redux/ActionCreators/Options/options";

export const Colors = () => {
  const dispatch = useDispatch();
  const { colors, isChoseColor } = useSelector((state) => state.options);

  //*--------------------------------------------------------
  //* Handler's

  const clickHandler = (el) => {
    if (isChoseColor) {
      if (el.active) {
        dispatch(choseColorOptions(!isChoseColor));
        dispatch(changeColorOptions(el.id, !el.active));
      }
    } else {
      dispatch(changeColorOptions(el.id, !el.active));
      dispatch(choseColorOptions(!isChoseColor));
    }
  };

  //*--------------------------------------------------------
  return (
    <section className="options-colors">
      <div className="options-colors__container">
        <span className="options-colors__heading">Цвет</span>
        <ul className="options-colors__list">
          {colors.map((el) => {
            return (
              <li
                className={`options-colors__item ${el.active ? "active" : ""}`}
                key={el.id}
                onClick={() => clickHandler(el)}
              >
                {el.color}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
