import { CHOSE_MODEL, UNCHOSE_MODEL } from "../../Reducers/Cars/cars";

export const choseModel = (id) => {
  return {
    type: CHOSE_MODEL,
    payload: id,
  };
};

export const unchoseModel = (id) => {
  return {
    type: UNCHOSE_MODEL,
    payload: id,
  };
};
