import { CHANGE_ACTIVE } from "../../Reducers/Steps/steps";
import { CHANGE_FILL } from "../../Reducers/Steps/steps";

export const changeActiveStep = (id, bool) => {
  return {
    type: CHANGE_ACTIVE,
    payload: {
      id,
      bool,
    },
  };
};

export const changeFillStep = (id, bool) => {
  return {
    type: CHANGE_FILL,
    payload: {
      id,
      bool,
    },
  };
};
