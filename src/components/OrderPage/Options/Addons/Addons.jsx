import React, {useEffect} from "react";
import "./Addons.scss";
import { useSelector, useDispatch } from "react-redux";
import { changeAddonOptions } from "../../../../redux/ActionCreators/Options/options";
import {addCheckItem, addCheckResult, deleteCheckItem} from "../../../../redux/ActionCreators/ChecklList/checkList"

export const Addons = () => {
  const { addons, isChoseAddons } = useSelector((state) => state.options);
  const {listItems} = useSelector(state => state.checkList)
  const dispatch = useDispatch();

  useEffect(() => {
    checkHandler()
  }, [])

  const checkHandler = () => {
    if(listItems.some(el => (el.id === 5 || el.id === 6 || el.id === 7))){
      return
    }else {
      addons.map(el => {
        dispatch(addCheckItem(el.id + 5, el.addon))
        dispatch(addCheckResult(el.id + 5, 'Нет'))
      })
  }}
  const clickHandler = (item) => {
    let id = item.id + 5
    if (item.active ) {
      dispatch(changeAddonOptions(item.id, !item.active));
      dispatch(addCheckResult(id, 'Нет'))
    } else if (item.active === false){
      dispatch(changeAddonOptions(item.id, !item.active));
      dispatch(addCheckResult(id, 'Да'))
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
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  clickHandler(el);
                }}
                key={el.id}
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
