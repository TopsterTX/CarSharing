import {
  ADD_CHECK_RESULT,
  ADD_CHECK_ITEM,
} from "../../Reducers/ChecklList/checkList";

export const addCheckItem = (id, name) => {
  return {
    type: ADD_CHECK_ITEM,
    payload: {
      id,
      name,
      result: "",
    },
  };
};

export const addCheckResult = (id, result) => {
  return {
    type: ADD_CHECK_RESULT,
    payload: {
      id,
      result,
    },
  };
};
