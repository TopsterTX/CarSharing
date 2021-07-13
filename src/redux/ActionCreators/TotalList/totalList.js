import {
  ADD_ITEM,
  CHOSE_PLACE,
  CHOSE_CAR,
  UNCHOSE_CAR,
} from "../../Reducers/TotalList/totalList";

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
