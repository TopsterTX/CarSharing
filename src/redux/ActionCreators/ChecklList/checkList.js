import { CHOSE_PLACE } from "../../Reducers/ChecklList/checkList";
import { UNCHOSE_CAR } from "../../Reducers/CheckList/checkList";
import { CHOSE_CAR } from "../../Reducers/CheckList/checkList";
import { ADD_ITEM } from "../../Reducers/CheckList/checkList";

export const addItem = (head) => {
  return {
    type: ADD_ITEM,
    payload: [
      {
        head,
        result: "",
      },
    ],
  };
};

export const chosePlace = (city, point) => {
  return {
    type: CHOSE_PLACE,
    payload: {
      city,
      point,
    },
  };
};

export const choseCar = (model, car) => {
  return {
    type: CHOSE_CAR,
    payload: {
      model,
      car,
    },
  };
};

export const unchoseCar = () => {
  return {
    type: UNCHOSE_CAR,
    payload: "",
  };
};
