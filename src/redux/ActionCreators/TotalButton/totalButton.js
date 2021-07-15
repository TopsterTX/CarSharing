import { CHANGE_BUTTON } from "./../../Reducers/TotalButton/totalButton";

export const changeTotalButton = (path, text) => {
  return {
    type: CHANGE_BUTTON,
    payload: {
      path,
      text,
    },
  };
};
