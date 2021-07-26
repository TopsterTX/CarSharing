import React from "react";
import "./Addons.scss";
import { useSelector, useDispatch } from "react-redux";
import { changeAddonOptions } from "../../../../redux/ActionCreators/Options/options";

export const Addons = () => {
  const { addons, isChoseAddons } = useSelector((state) => state.options);
  const dispatch = useDispatch();

  const clickHandler = (item) => {
    if (item.active && isChoseAddons) {
      dispatch(changeAddonOptions(item.id, !item.active));
    } else if (isChoseAddons === false) {
      dispatch(changeAddonOptions(item.id, !item.active));
    }
  };

  return (
    <section className="options-addons">
      <div className="options-addons__container">
        <span className="options-addons__heading">Доп. услуги</span>
        <ul className="options-addons__list">
          {addons.map((el) => {
            return (
              <li
                className={`options-addons__item ${el.active ? "active" : ""}`}
                onClick={() => {
                  clickHandler(el);
                }}
              >
                <input
                  type="checkbox"
                  className="options-addons__input"
                  id={`addon-${el.id}`}
                />
                <label htmlFor={`addon-${el.id}`}>{el.addon}</label>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
