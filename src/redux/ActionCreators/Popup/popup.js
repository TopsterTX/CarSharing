import { CHANGE_ACTIVE } from "../../Reducers/Popup/popup";

export const changePopupActive = (bool) => {
  return {
    type: CHANGE_ACTIVE,
    payload: bool,
  };
};
