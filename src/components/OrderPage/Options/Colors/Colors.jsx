import React, { useEffect } from "react";

import "./Colors.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  changeColorOptions,
  choseColorOptions,
  addColor,
} from "../../../../redux/ActionCreators/Options/options";
import {
  addCheckItem,
  addCheckResult,
} from "./../../../../redux/ActionCreators/ChecklList/checkList";

export const Colors = () => {
  const dispatch = useDispatch();
  const { isChoseColor } = useSelector((state) => state.options);
  const { colors } = useSelector((state) => state.cars.choseCar);
  const { optionColors } = useSelector((state) => state.options);
  const { listItems } = useSelector((state) => state.checkList);

  let str = "Выбор цвета у этого автомобиля недоступен";

  useEffect(() => {
    if (colors != undefined && optionColors) {
      colors.map((el, i) => {
        dispatch(
          addColor({
            id: i,
            name: el,
            active: false,
          })
        );
      });
    } else if(colors == undefined){
      return dispatch(choseColorOptions(!isChoseColor));
    }
  }, []);

  useEffect(() => {
    checkHandler();

    dispatch(
      addCheckResult(
        2,
        optionColors.map((el) => {
          if (el.active === true) {
            return el.name;
          } else {
            return "";
          }
        })
      )
    );
  }, [isChoseColor]);
  //*--------------------------------------------------------
  //* Handler's

  const clickHandler = (el) => {
    if (isChoseColor && el.active) {
      dispatch(choseColorOptions(!isChoseColor));
      dispatch(changeColorOptions(el.id, !el.active));
    } else if (isChoseColor === false) {
      dispatch(changeColorOptions(el.id, !el.active));
      dispatch(choseColorOptions(!isChoseColor));
    }
  };

  const checkHandler = () => {
    if (listItems.some((el) => el.id === 2)) {
      return;
    } else {
      dispatch(addCheckItem(2, "Цвет"));
    }
  };

  //*--------------------------------------------------------
  return (
    <section className="options-colors">
      <div className="options-colors__container">
        <span className="options-colors__heading">Цвет</span>
        <ul className="options-colors__list">
          {colors
            ? optionColors.map((el, index) => {
                return (
                  <li
                    className={`options-colors__item ${
                      el.active ? "active" : ""
                    }`}
                    key={el.id}
                    onClick={() => {
                      console.log("hi");
                      clickHandler(el);
                    }}
                  >
                    {el.name}
                  </li>
                );
              })
            : `${str}`}
        </ul>
      </div>
    </section>
  );
};
