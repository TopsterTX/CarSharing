import React from "react";
import "./Colors.scss";
import { useSelector, useDispatch } from "react-redux";
import { changeColorOptions } from "../../../../redux/ActionCreators/Options/options";
import { choseColorOptions } from "../../../../redux/ActionCreators/Options/options";

export const Colors = () => {
  const dispatch = useDispatch();
  const { colors, isChoseColor } = useSelector((state) => state.options);

  const clickHandler = (id, active) => {
    if (isChoseColor) {
      if (active) {
        dispatch(choseColorOptions(!isChoseColor));
        dispatch(changeColorOptions(id, !active));
      }
    } else {
      dispatch(changeColorOptions(id, !active));
      dispatch(choseColorOptions(!isChoseColor));
    }
  };

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
                onClick={() => clickHandler(el.id, el.active)}
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
