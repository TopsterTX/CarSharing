import { CHANGE_DISABLE } from "../../Reducers/Steps/steps";
import { CHANGE_FILL } from "../../Reducers/Steps/steps";

export const changeDisable = (id, bool) => {
  return {
    type: CHANGE_DISABLE,
    payload: {
      id,
      bool,
    },
  };
};

export const changeFill = (id, bool) => {
  return {
    type: CHANGE_FILL,
    payload: {
      id,
      bool,
    },
  };
};
