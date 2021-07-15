import { CHANGE_CONFIRM_ORDER } from "./../../Reducers/Total/total";

export const changeConfirmOrder = (bool) => {
  return {
    type: CHANGE_CONFIRM_ORDER,
    payload: bool,
  };
};
